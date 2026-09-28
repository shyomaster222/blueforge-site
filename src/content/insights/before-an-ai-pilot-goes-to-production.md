---
title: What has to be true before an AI pilot goes to production
description: Seven conditions we check before an AI system handles real work, from a measured accuracy number to a rehearsed way of switching it off.
date: 2026-09-16
service: ai-implementation
---

A pilot proves that something is possible. Production means it happens every day, on whatever data arrives, with someone answerable for the result. The distance between the two is mostly engineering that nobody sees in a demo.

This is the list we work through before we let a system handle real work. If an item can't be ticked, the launch waits.

## 1. Accuracy is a number, measured on your own cases

"It seems to work well" is how pilots are judged. Production needs a test set: a few hundred real examples from your operation, each with an agreed right answer, including the awkward ones.

Building that set can be the most useful week of the project. It forces the business to agree on what right means, and it surfaces edge cases nobody had mentioned. Once it exists, every change to the prompt, the model or the data can be checked in minutes.

## 2. The pass mark was agreed before the results came in

Decide the bar first. What accuracy is good enough overall? Which kinds of error are tolerable and which are never acceptable? A system that is right nearly all the time but occasionally invents a delivery date may be worse than one that is right less often and says "I don't know".

Setting the bar after seeing the numbers turns the test into a formality.

## 3. There is a designed path for the cases it can't handle

Every system like this meets inputs it shouldn't answer. The design question is what happens then. Good answers include routing to a person, asking for the missing information, or declining with a clear message. Guessing confidently is the wrong one.

Check that the fallback path has capacity. If a fifth of cases go to a human queue, someone has to staff that queue.

## 4. People review the decisions that matter

Decide where a person sits in the loop and make it part of the workflow, with the time it takes accounted for. Review everything where a mistake costs real money, touches a legal commitment, or reaches a customer without a second look. Sample the rest.

Then record what the reviewers change. Those corrections are the best source of new test cases you will ever get.

## 5. Every decision is logged, with what it cost

For each task, keep the input, the output, the model and prompt version, the time taken and the cost. Without that record you can't investigate a complaint, you can't tell whether last week's change made things better, and you can't explain the bill.

Cost per task belongs on a dashboard from day one. Usage-priced systems have a way of becoming expensive quietly.

## 6. The data rules are written down and enforced in code

What may be sent to an outside model? What must be removed or masked first? Where are logs stored, who can read them, and how long are they kept? Which vendor terms apply?

These answers should exist as a short document your security and legal people have approved, and as checks in the pipeline that enforce it. A policy that depends on everyone remembering it won't hold.

## 7. You can swap the model, and you can switch the system off

Models change, prices change, and vendors retire versions on their own schedule. Keep the model behind a thin layer of your own, so replacing it is a configuration change followed by a run of the test set.

And rehearse the off switch. If the system starts misbehaving at four on a Friday afternoon, who turns it off, how, and what does the team do instead? Run that drill once before launch.

## What this costs

Less than it sounds. For a focused system, this work is measured in weeks. What it buys is a launch you can defend to your board, your customers and your auditors, and a system your team trusts enough to keep using.

In our process this is the temper stage. It's the one we refuse to cut.
