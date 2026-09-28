---
title: "Attribution that reaches revenue: from ad click to signed contract"
description: How to connect marketing spend to closed revenue in a B2B business with a long sales cycle, treated as the data engineering problem it is.
date: 2026-09-05
service: marketing
---

In a business with a long sales cycle, the ad platform sees a form submission and then nothing. The contract is signed months later, in another system, by people who never look at marketing data. So campaigns get judged on cost per lead, and cost per lead rewards whatever produces cheap leads.

Closing that gap is mostly plumbing. It deserves the same care as any other integration your business depends on.

## The chain you need

For one deal, you want to be able to follow this chain from end to end:

1. A person clicked a specific ad, link or search result.
2. They visited, perhaps several times, and eventually filled in a form.
3. That created a lead in the CRM, which carried the source with it.
4. The lead became an opportunity, attached to a company.
5. The opportunity closed, with a value and a date.

Every break in that chain is a point where marketing and revenue stop being comparable. A setup can easily have more than one.

## Link one: capture the source at the form

When someone arrives, the campaign details are in the link they followed. Store them for the length of the visit and later visits, then write them into hidden fields when the form is submitted. Capture the first source that brought the person and the most recent one. They answer different questions.

Test this the way you'd test any integration. Click a real ad, submit a real form, and look at the record that lands in the CRM. Do it for every form on the site, including the ones someone added last quarter.

## Link two: keep the source when records change shape

This is the link to check hardest. A lead is converted to a contact, a contact is attached to an account, an opportunity is created by a salesperson from a blank screen. At each step, the source fields have to be carried across, and default CRM behaviour often drops them.

Map the fields at every conversion. Then look at ten recent opportunities and check whether each one can name the campaign that started it. If sales create opportunities by hand, make the link to an existing contact a required step.

## Link three: think in accounts, not just leads

B2B purchases involve several people. The person who clicked the ad may not be the person who signs. If you only credit the campaign that produced the signer, you'll undervalue everything that reached their colleagues first.

Group leads and contacts by company, and look at all the marketing touches on an account before the opportunity opened. You don't need a sophisticated model to start. A simple view of which campaigns touched accounts that later bought is already more truthful than last click.

## Link four: bring revenue back

Once opportunities carry their source, a closed deal can be tied to the campaigns behind it. Two things make that useful.

First, send the outcomes back to the ad platforms as offline conversions, so their bidding optimises for leads that turn into pipeline and not for form fills.

Second, reconcile with finance. Closed revenue in the CRM should match invoiced revenue for the same period, or you should be able to explain the difference. If marketing's revenue number and finance's don't agree, nobody senior will trust the report.

## Report by cohort, and be patient

With a six-month sales cycle, this month's revenue came from campaigns that ran two quarters ago. Report by cohort: take the leads created in a given month and follow what became of them over time. It makes clear that recent campaigns can't be judged on revenue yet, and it stops good long-cycle campaigns being cut for looking unproductive.

Alongside revenue, track the early signals that come first: qualified opportunities created, and pipeline value by source. They arrive in weeks, and over time you learn how well they predict revenue in your business.

## Where to start

Pick five deals that closed last quarter and try to trace each one back to its first marketing touch. Note where each trail goes cold. Those points are your work list, in order.

We treat this as the first job in any marketing engagement. Until the chain holds, every budget decision rests on a partial view.
