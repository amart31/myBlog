---
title: Adding a Case History Entry with a Declare OnChange Rule
date: "2021-09-15T22:12:03.284Z"
---

How can we add an entry to the Case history content table using a Declare OnChange rule.

First: We will add section CaseHistoryWrapper to the pyCaseMainInner 

![CaseHistoryWrapper and pyCaseMainInner screenshots](./salty_egg.jpg)

In CasehistoryWrapper we have 2 tabs: CaseHistory which holds our custom Case History table and pyCaseHistoryContent which holds the OOTB 'Aduti Details' tab.



- Case history class & db table
- Declare onChange class & rule inheritance

![Chinese Salty Egg](./salty_egg.jpg)

Other methds to add case history entry:

* AddHistory OOTB activty
* Case settings field level auditing
* Declare trigger

Modify FilterHistory Declare trigger and Application Setting to filter history entry adds.

Rules we will need to create:
1. Declare onCahnge
2. Activity of type onChange
3. When rule
4. Field Value 

Steps:
1. create Declare onChange
    1. Add properties to watch
        1. Keep in mind, the onChange Activity fires only once if tracking multiple properties.
    2. Add onChange activity to trigger when tracked property changes.
        1. Declare onChange rules track and are triggered when the properties in the when condition change.
        2. Move the when rule to the activity itself.
    3. Create When rule to check stage or step, this will be used in the activity step's when field.

