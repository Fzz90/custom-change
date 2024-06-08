// Define variables for testing
const minLevel = 0;
const maxLevel = 12;
const initialValue = 78; // updated example value
const initialMpCost = 35;
const initialTpCost = 30; // updated example cost

let masteryData = []; // Array to store mastery data for each level

for (let level = minLevel; level <= maxLevel; level++) {
    // Calculate EXP Mastery Formula
    let expMastery;
    switch (true) {
        case (level >= 0 && level < 3):
            expMastery = Math.ceil(level * 5.8 + 10);
            break;
        case (level >= 3 && level <= 5):
            expMastery = Math.ceil(level * 5.9 +10);
            break;
        case (level >= 6 && level <= 8):
            expMastery = Math.ceil(level * 6 + 10);
            break;
        case (level >= 9):
            expMastery = Math.ceil(level * 6.25 + 10);
            break;
    }

    // Calculate Damage Mastery Formula
    let damageMastery;
    switch (true) {
        case (level >= 0 && level < 3):
            damageMastery = Math.round(initialValue * (1.125 + level * 0.35));
            break;
        case (level >= 3 && level <= 5):
            damageMastery = Math.round(initialValue * (1.2 + level * 0.4));
            break;
        case (level >= 6 && level <= 8):
            damageMastery = Math.round(initialValue * (1.265 + level * 0.425));
            break;
        case (level >= 9):
            damageMastery = Math.round(initialValue * (1.355 + level * 0.525));
            break;
    }

    // Calculate MP Cost Mastery Formula
    let mpCostMastery;
    switch (true) {
         case (level == 0):
            mpCostMastery = initialMpCost;
            break;
        case (level >= 1 && level < 3):
            mpCostMastery = Math.round(initialMpCost * (1.15 + level * 0.14));
            break;
        case (level >= 3 && level <= 5):
           mpCostMastery = Math.round(initialMpCost * (1.2 + level * 0.155));
            break;
        case (level >= 6 && level <= 8):
             mpCostMastery = Math.round(initialMpCost * (1.25 + level * 0.18));
            break;
        case (level >= 9):
              mpCostMastery = Math.round(initialMpCost * (1.3 + level * 0.2));
            break;
    }

    // Calculate TP Cost Mastery Formula
    let tpCostMastery;
    switch (true) {
        case (level == 0):
            tpCostMastery = initialTpCost;
            break;
        case (level >= 1 && level < 3):
            tpCostMastery = Math.round(initialTpCost * (1 + level * 0.15));
            break;
        case (level >= 3 && level <= 5):
            tpCostMastery = Math.round(initialTpCost * (1.15 + level * 0.15));
            break;
        case (level >= 6 && level <= 8):
            tpCostMastery = Math.round(initialTpCost * (1.35 + level * 0.15));
            break;
        case (level >= 9):
            tpCostMastery = Math.round(initialTpCost * (1.6 + level * 0.25));
            break;
    }

    // Store the results in the masteryData array
    masteryData.push({
        'Level': level,
        'EXP Mastery': expMastery,
        'Damage Mastery': damageMastery,
        'MP Cost Mastery': mpCostMastery,
        'TP Cost Mastery': tpCostMastery
    });
}

// Output the results as a table
console.table(masteryData);
