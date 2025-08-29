from flask import Flask,render_template,redirect,request,jsonify
from flask_cors import CORS
import joblib
import numpy as np


app=Flask(__name__)
CORS(app)

calories_generator_model=joblib.load("knn_model.pkl")
diet_type_model=joblib.load("RFC_model.pkl")
diet_number_model=joblib.load("SVC_model.pkl")

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/request', methods=["POST"])

def diet_request():
    data = request.get_json()

    all_diet_plans = [

    {'NOthing boy'},
    # Balanced Diet Plans
    {
        "Diet_ID": 1,
        "Diet_Type": "Balanced",
        "Age": 25,
        "Gender": "Male",
        "Weight_kg": 70,
        "BMI": 22.5,
        "Physical_Activity_Level": "Moderate",
        "Daily_Caloric_Intake": 2200,
        "Adherence_to_Diet_Plan": "High",
        "Morning": [
            "Oatmeal with low-fat milk and berries",
            "1 boiled egg",
            "Green tea (unsweetened)"
        ],
        "Evening_Snack": [
            "Handful of mixed nuts",
            "1 apple"
        ],
        "Lunch": [
            "Grilled chicken breast",
            "Brown rice (1 cup)",
            "Steamed broccoli and carrots"
        ],
        "Dinner": [
            "Grilled salmon",
            "Whole wheat chapati (2)",
            "Green salad with lemon"
        ]
    },
    {
        "Diet_ID": 2,
        "Diet_Type": "Balanced",
        "Age": 35,
        "Gender": "Female",
        "Weight_kg": 60,
        "BMI": 23.1,
        "Physical_Activity_Level": "Light",
        "Daily_Caloric_Intake": 1800,
        "Adherence_to_Diet_Plan": "Medium",
        "Morning": [
            "Oatmeal with almond butter and banana slices",
            "1 boiled egg",
            "Black coffee"
        ],
        "Evening_Snack": [
            "Handful of walnuts",
            "1 orange"
        ],
        "Lunch": [
            "Grilled tofu",
            "Quinoa (1 cup)",
            "Steamed spinach and carrots"
        ],
        "Dinner": [
            "Grilled paneer with herbs",
            "Whole wheat chapati (1)",
            "Green salad with tomatoes"
        ]
    },
    {
        "Diet_ID": 3,
        "Diet_Type": "Balanced",
        "Age": 45,
        "Gender": "Male",
        "Weight_kg": 80,
        "BMI": 24.8,
        "Physical_Activity_Level": "High",
        "Daily_Caloric_Intake": 2500,
        "Adherence_to_Diet_Plan": "High",
        "Morning": [
            "Oatmeal with berries and chia seeds",
            "2 boiled eggs",
            "Green tea"
        ],
        "Evening_Snack": [
            "Handful of pistachios",
            "1 pear"
        ],
        "Lunch": [
            "Grilled chicken",
            "Brown rice (1.5 cups)",
            "Steamed broccoli and spinach"
        ],
        "Dinner": [
            "Grilled fish (like salmon)",
            "Whole wheat chapati (2)",
            "Green salad with olive oil"
        ]
    },

    # Low-Carb Diet Plans
    
    # Low-Sodium Diet Plans
    
    

  {
    "Diet_ID":4 ,
    "Diet_Type": "Balanced",
    "Age": 22,
    "Gender": "Female",
    "Weight_kg": 55,
    "BMI": 20.5,
    "Physical_Activity_Level": "Light",
    "Daily_Caloric_Intake": 1700,
    "Adherence_to_Diet_Plan": "Medium",
    "Morning": [
      "Whole grain toast with avocado",
      "1 boiled egg",
      "Herbal tea"
    ],
    "Evening_Snack": [
      "Greek yogurt with honey",
      "Handful of blueberries"
    ],
    "Lunch": [
      "Grilled turkey breast",
      "Quinoa salad with cucumbers",
      "Steamed green beans"
    ],
    "Dinner": [
      "Baked cod with lemon",
      "Mashed sweet potatoes",
      "Roasted asparagus"
    ]
  },
  {
    "Diet_ID": 5,
    "Diet_Type": "Balanced",
    "Age": 50,
    "Gender": "Male",
    "Weight_kg": 88,
    "BMI": 26.0,
    "Physical_Activity_Level": "Moderate",
    "Daily_Caloric_Intake": 2400,
    "Adherence_to_Diet_Plan": "High",
    "Morning": [
      "Scrambled eggs with spinach",
      "Whole wheat toast",
      "Black coffee"
    ],
    "Evening_Snack": [
      "Handful of mixed nuts",
      "1 orange"
    ],
    "Lunch": [
      "Grilled salmon",
      "Wild rice (1 cup)",
      "Steamed broccoli"
    ],
    "Dinner": [
      "Lean beef stir-fry",
      "Brown rice (1/2 cup)",
      "Sautéed mushrooms"
    ]
  },
  {
    "Diet_ID": 6,
    "Diet_Type": "Balanced",
    "Age": 33,
    "Gender": "Female",
    "Weight_kg": 63,
    "BMI": 22.0,
    "Physical_Activity_Level": "High",
    "Daily_Caloric_Intake": 2100,
    "Adherence_to_Diet_Plan": "High",
    "Morning": [
      "Smoothie (banana, spinach, almond milk, protein powder)",
      "Handful of almonds"
    ],
    "Evening_Snack": [
      "Cottage cheese with pineapple",
      "1 rice cake"
    ],
    "Lunch": [
      "Grilled chicken wrap (whole wheat)",
      "Side salad with vinaigrette"
    ],
    "Dinner": [
      "Shrimp and vegetable stir-fry",
      "Quinoa (1/2 cup)"
    ]
  },
  {
        "Diet_ID": 7,
        "Diet_Type": "Low-Sodium",
        "Age": 30,
        "Gender": "Male",
        "Weight_kg": 72,
        "BMI": 23.5,
        "Physical_Activity_Level": "Moderate",
        "Daily_Caloric_Intake": 2000,
        "Adherence_to_Diet_Plan": "High",
        "Morning": [
            "Unsalted oatmeal with blueberries",
            "1 boiled egg",
            "Fresh coconut water"
        ],
        "Evening_Snack": [
            "Unsalted roasted chickpeas",
            "1 apple"
        ],
        "Lunch": [
            "Grilled chicken (no added salt)",
            "Brown rice (unsalted)",
            "Steamed zucchini and carrots"
        ],
        "Dinner": [
            "Steamed fish with rosemary",
            "Sweet potato mash",
            "Steamed broccoli"
        ]
    },
    {
        "Diet_ID": 8,
        "Diet_Type": "Low-Sodium",
        "Age": 45,
        "Gender": "Female",
        "Weight_kg": 68,
        "BMI": 24.0,
        "Physical_Activity_Level": "Light",
        "Daily_Caloric_Intake": 1800,
        "Adherence_to_Diet_Plan": "Medium",
        "Morning": [
            "Oatmeal with banana slices (no added salt)",
            "1 poached egg",
            "Herbal tea"
        ],
        "Evening_Snack": [
            "Unsalted pumpkin seeds",
            "1 pear"
        ],
        "Lunch": [
            "Grilled tofu (no salt)",
            "Quinoa",
            "Steamed spinach and carrots"
        ],
        "Dinner": [
            "Baked salmon with dill",
            "Boiled sweet potato",
            "Steamed green beans"
        ]
    },
  {
        "Diet_ID": 9,
        "Diet_Type": "Low-Sodium",
        "Age": 55,
        "Gender": "Male",
        "Weight_kg": 80,
        "BMI": 26.5,
        "Physical_Activity_Level": "Low",
        "Daily_Caloric_Intake": 1900,
        "Adherence_to_Diet_Plan": "High",
        "Morning": [
            "Oatmeal with strawberries (no added salt)",
            "1 boiled egg",
            "Green tea"
        ],
        "Evening_Snack": [
            "Unsalted roasted almonds",
            "1 orange"
        ],
        "Lunch": [
            "Steamed chicken with herbs (no salt)",
            "Brown rice",
            "Steamed broccoli and zucchini"
        ],
        "Dinner": [
            "Steamed cod fish with lemon and garlic",
            "Mashed cauliflower (unsalted)",
            "Steamed kale"
        ]
    },
  {
    "Diet_ID": 10,
    "Diet_Type": "Low-Sodium",
    "Age": 60,
    "Gender": "Female",
    "Weight_kg": 70,
    "BMI": 25.5,
    "Physical_Activity_Level": "Low",
    "Daily_Caloric_Intake": 1750,
    "Adherence_to_Diet_Plan": "High",
    "Morning": [
      "Unsalted oatmeal with cinnamon",
      "Fresh berries",
      "Herbal tea"
    ],
    "Evening_Snack": [
      "Unsalted rice cakes",
      "Sliced banana"
    ],
    "Lunch": [
      "Baked chicken with herbs (no salt)",
      "Steamed brown rice",
      "Sautéed kale (low-sodium oil)"
    ],
    "Dinner": [
      "Grilled white fish with lemon",
      "Mashed cauliflower (unsalted)",
      "Steamed carrots"
    ]
  },
  {
        "Diet_ID": 11,
        "Diet_Type": "Low-Carb",
        "Age": 28,
        "Gender": "Male",
        "Weight_kg": 75,
        "BMI": 23.0,
        "Physical_Activity_Level": "Moderate",
        "Daily_Caloric_Intake": 2100,
        "Adherence_to_Diet_Plan": "High",
        "Morning": [
            "Scrambled eggs with spinach",
            "Half an avocado",
            "Herbal tea"
        ],
        "Evening_Snack": [
            "Greek yogurt (unsweetened)",
            "A few almonds"
        ],
        "Lunch": [
            "Grilled chicken",
            "Cauliflower rice",
            "Steamed asparagus"
        ],
        "Dinner": [
            "Baked salmon",
            "Big green salad with olive oil",
            "Zucchini noodles"
        ]
    },
    
  {
        "Diet_ID": 12,
        "Diet_Type": "Low-Carb",
        "Age": 32,
        "Gender": "Female",
        "Weight_kg": 65,
        "BMI": 22.0,
        "Physical_Activity_Level": "Light",
        "Daily_Caloric_Intake": 1700,
        "Adherence_to_Diet_Plan": "Medium",
        "Morning": [
            "Omelet with mushrooms and spinach",
            "Herbal tea"
        ],
        "Evening_Snack": [
            "Handful of walnuts",
            "Cheese cubes"
        ],
        "Lunch": [
            "Grilled shrimp",
            "Zucchini noodles",
            "Steamed green beans"
        ],
        "Dinner": [
            "Grilled tofu with herbs",
            "Steamed broccoli",
            "Avocado slices"
        ]
    },
  {
        "Diet_ID": 13,
        "Diet_Type": "Low-Carb",
        "Age": 40,
        "Gender": "Male",
        "Weight_kg": 85,
        "BMI": 27.0,
        "Physical_Activity_Level": "High",
        "Daily_Caloric_Intake": 2500,
        "Adherence_to_Diet_Plan": "High",
        "Morning": [
            "Fried eggs with spinach and cheese",
            "Herbal tea"
        ],
        "Evening_Snack": [
            "Roasted pumpkin seeds",
            "Cucumber slices"
        ],
        "Lunch": [
            "Grilled steak",
            "Cauliflower mash",
            "Steamed kale"
        ],
        "Dinner": [
            "Grilled fish fillet",
            "Mixed green salad with olive oil",
            "Zucchini noodles"
        ]
    },
  {
    "Diet_ID": 14,
    "Diet_Type": "Low-Carb",
    "Age": 38,
    "Gender": "Male",
    "Weight_kg": 92,
    "BMI": 28.0,
    "Physical_Activity_Level": "High",
    "Daily_Caloric_Intake": 2600,
    "Adherence_to_Diet_Plan": "Medium",
    "Morning": [
      "Omelet with cheese and mushrooms",
      "2 slices of bacon",
      "Black coffee"
    ],
    "Evening_Snack": [
      "Celery sticks with almond butter",
      "String cheese"
    ],
    "Lunch": [
      "Bunless cheeseburger",
      "Side of coleslaw (no sugar)"
    ],
    "Dinner": [
      "Grilled pork chops",
      "Roasted Brussels sprouts",
      "Cauliflower mash"
    ]
  },

  {
    "Diet_ID": 15,
    "Diet_Type": "Low-Carb",
    "Age": 26,
    "Gender": "Female",
    "Weight_kg": 59,
    "BMI": 21.0,
    "Physical_Activity_Level": "Moderate",
    "Daily_Caloric_Intake": 1600,
    "Adherence_to_Diet_Plan": "High",
    "Morning": [
      "Chia seed pudding with coconut milk",
      "Handful of walnuts"
    ],
    "Evening_Snack": [
      "Hard-boiled egg",
      "Olives"
    ],
    "Lunch": [
      "Chicken Caesar salad (no croutons)",
      "Parmesan crisps"
    ],
    "Dinner": [
      "Zucchini noodles with pesto",
      "Grilled shrimp"
    ]
  }
]




    age = data["formData"]["age"]
    activity=data["formData"]["activity"]
    discipline=data["formData"]["discipline"]
    height=data["formData"]["height"]
    motive=data["formData"]["motive"]
    sex=data["formData"]["sex"]
    weight=data["formData"]["weight"]

    if (sex=='male'):
        sex_male=1
        sex_female=0
    else:
        sex_male=0
        sex_female=1


    if (activity=="athlete") | (activity=='active'):
        exercise_light=0
        exercise_moderate=0
        exercise_intense=1
    elif (activity=='moderate'):
        exercise_light=0
        exercise_moderate=1
        exercise_intense=0
    else:
        exercise_light=1
        exercise_moderate=0
        exercise_intense=0
      

    if discipline in [1,2]:
        diet_discipline_fair=0
        diet_discipline_poor=1
        diet_discipline_good=0
        diet_discipline_excelent=0
    elif discipline in [3,4,5]:

        diet_discipline_fair=1
        diet_discipline_poor=0
        diet_discipline_good=0
        diet_discipline_excelent=0
    elif discipline in [6,7,8]:
        diet_discipline_fair=0
        diet_discipline_poor=0
        diet_discipline_good=1
        diet_discipline_excelent=0
    else:
        diet_discipline_fair=0
        diet_discipline_poor=0
        diet_discipline_good=0
        diet_discipline_excelent=1

    input_array=[weight,height,age,sex_female,sex_male,exercise_intense,exercise_light,exercise_moderate,diet_discipline_excelent,diet_discipline_fair,diet_discipline_good,diet_discipline_poor] 
    input_array=np.array(input_array).reshape(1, -1)
    calories=calories_generator_model.predict(input_array)
    calories=float(calories[0])

    BMI=float(weight)/float(((float(height)/100)**2))

    if (activity=='sedentary'):
        activity_level=1
    elif (activity=='light'):
        activity_level=3
    elif (activity=='moderate'):
        activity_level=5.5   
    elif (activity=='active'):
        activity_level=7.5
    elif (activity=='athlete'):
        activity_level=9.5
    else:
        activity_level=6

    Adherence_to_Diet_Plan=int(discipline)*10

    if (motive=='Weight Loss') | (motive=='fit'):
        Disease_Type_Hypertension=0
        Disease_Type_diabeties=0
        Disease_Type_obesity=1
    elif (motive=='healthy_life'):
        Disease_Type_Hypertension=0
        Disease_Type_diabeties=1
        Disease_Type_obesity=0
    elif (motive=='tension_free'):
        Disease_Type_Hypertension=1
        Disease_Type_diabeties=0
        Disease_Type_obesity=0
    else:
        Disease_Type_Hypertension=0
        Disease_Type_diabeties=0
        Disease_Type_obesity=0

    input_array=[age,weight,height,BMI,calories,activity_level,Adherence_to_Diet_Plan,sex_female,sex_male,Disease_Type_diabeties,Disease_Type_Hypertension,Disease_Type_obesity,exercise_intense,exercise_light,exercise_moderate]
    input_array=np.array(input_array).reshape(1, -1)
    diet_type=diet_type_model.predict(input_array)
    diet_type=diet_type[0]

    if (diet_type=='Low_Sodium'):
        Diet_Recommendation_Balanced=0
        Diet_Recommendation_low_sodium=1
        Diet_Recommendation_low_carb=0
    elif (diet_type=='Balanced'):
        Diet_Recommendation_Balanced=1
        Diet_Recommendation_low_sodium=0
        Diet_Recommendation_low_carb=0
    else:
        Diet_Recommendation_Balanced=0
        Diet_Recommendation_low_sodium=0
        Diet_Recommendation_low_carb=1


    input_array=[age,weight,BMI,calories,Adherence_to_Diet_Plan,sex_female,sex_male,exercise_intense,exercise_moderate,exercise_light,Diet_Recommendation_Balanced,Diet_Recommendation_low_carb,Diet_Recommendation_low_sodium]
    input_array=np.array(input_array).reshape(1, -1)
    diet_Id=diet_number_model.predict(input_array)
    diet_Id=int(diet_Id[0])
    diet_plan=all_diet_plans[diet_Id]



    return jsonify(
        {
            'status':"successfully working",
            'Data reseived':data,
            'calories':calories,
            'diet_type':diet_type,
            'diet_ID':diet_Id,
            'Diet_plan':diet_plan
        }
    )



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)