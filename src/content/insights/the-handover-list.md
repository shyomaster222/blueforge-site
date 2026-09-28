---
title: The handover list we'd want if we inherited your system
description: What a software handover should contain, written from the point of view of the engineer who has to keep the system running after the builders have gone.
date: 2026-09-11
service: software
---

Sooner or later every system is maintained by someone who didn't build it. A new hire, a new supplier, or the original team two years on with no memory of why anything was done. Whether that goes well is decided long before, by what was written down and where things were kept.

This is the list we'd ask for if we were taking over your system tomorrow. It's also our own definition of a finished handover. You can use it to check a supplier's, or your own.

## Access and ownership

Start here, because nothing else works without it.

- The source code, in a repository your company owns, with its full history.
- Cloud and hosting accounts registered to your company, with the supplier's people added as users who can be removed.
- Domain names, certificates and DNS in your name.
- Every third-party service the system depends on, such as payment, email, maps and monitoring, with the account owner and the billing contact listed.
- A record of who has administrative access to each of these today.

If any of these sit in a supplier's or an individual's personal account, fix that first. It is an easy way to lose control of your own systems.

## How to run it

A new engineer should be able to get the system running on their own machine in a morning, from written instructions, without asking anyone.

- Set-up steps that have been tested by someone who didn't write them.
- The list of environments, such as development, staging and production, with what differs between them.
- How configuration and secrets are managed. The secrets themselves belong in a vault, never in the document.
- How to run the tests, and what it means when they pass.

## How to change it

- The release process, step by step, including who approves a release.
- How to roll back a release that goes wrong, and when that was last tried.
- Infrastructure defined in scripts, so an environment can be rebuilt from the repository.
- Coding standards and review rules, if the team has them.

If a release needs one particular person to be present, that's worth knowing and worth fixing.

## How it behaves in production

- What is monitored, where the dashboards are, and which alerts go to whom.
- Runbooks for the failures that have happened before. Each one says what the symptoms look like, what to check, and what to do.
- Backup schedule, where backups are stored, and the date of the last successful restore test. A backup that has never been restored is a hope.
- Known limits: the load it has been tested to, the jobs that run slowly, the parts everyone is nervous about.

## Why it is the way it is

This is the part that's easiest to skip, and the part an inheriting engineer values most.

- An architecture overview: the main components, how data moves between them, and which outside systems it talks to. Two pages and a diagram is enough.
- A decision log. Short entries, each giving the decision, the date, the options considered and the reason for the choice. When someone later asks "why on earth did they do it this way", the answer is there, and they can tell whether the reason still applies.
- A list of known problems and shortcuts taken, written without embarrassment. Every system has them. Hiding them only means the next person finds them at a worse moment.

## How to use this list

Go through it with your current team or supplier and mark each item as present, partial or missing. Don't try to fix everything at once. Access and ownership come first, then backups and rollback, then the rest.

If a large share of the list is missing for a system your operation depends on, that is a risk worth putting in front of whoever owns the budget. It is far cheaper to write these things down while the people who know the answers are still around.

Every item on this list is part of how we define finished.
