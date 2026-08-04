---
name: dotnet-integrate-xero
description: Entry point for Xero .NET SDK work in a C#/.NET project — this router is for the .NET/C# SDK ONLY; never load it for any other language. Load this first when asked to integrate the Xero API in C#, or when a Xero .NET SDK call errors or behaves unexpectedly. Defines the delegation contract, the agent reuse rules, and which companion skills are required reading before you write code.
---

# Xero .NET SDK — Router (map + one agent)

You (the main agent) orchestrate; the `dotnet-xero-sdk` agent carries the SDK knowledge. The
division of labour keeps YOUR code grounded and keeps the **SDK map and source** off your
context entirely — you work from the contract sheet it returns, never from the map or source
yourself. The `dotnet-*` companion skills are a different thing: they are API-agnostic *usage*
guidance, they are yours to load, and Step 1c below makes loading them mandatory.

## The subagent

- **`dotnet-xero-sdk`** is the single agent for every SDK need. It grounds in a bundled SDK map
  (and clones the SDK source itself only when the map genuinely falls short), and it:
  - **plans** — returns a **contract sheet with no open lookups** (exact signatures, wire
    names, envelope shapes, error accessors, and enum values for the operations in scope);
    you implement from that sheet;
  - **answers** narrow contract questions directly (a field, a signature, an enum's values,
    which error type an operation throws);
  - **fixes** — hand it a compile or build error on an SDK type and it investigates from the
    map (then the one source file the map names) and fixes the code in place, building to
    verify.

  Route EVERY SDK need — planning, a fact, an error — to this one agent. **Spawn it once;
  every later need is a follow-up message to that same warm agent.** A fresh spawn rebuilds
  its whole map context from scratch (the dominant helper cost); reuse is not optional.

**Scope guard:** the APIMatic-generated Xero **.NET SDK** (root namespace
`Xero`) in **C#/.NET projects only**. Unrelated API, or any language other than
C#/.NET — do nothing; this router and its agent do not apply.

## Workflow

**If the user opens with a reported SDK error or unexpected Xero behaviour** (not new
feature work), spawn **`dotnet-xero-sdk`** directly with the error output and the files involved,
and wait — do not run the plan-first flow for a bug report. Otherwise, for implementation
work:

### Step 1 — Plan first (always, for any implementation work)

Your FIRST action is to spawn **`dotnet-xero-sdk`** once, with the user's full request (all
features in scope — one spawn covers the whole implementation). Dictate the output path in
the brief: the absolute path where it writes the plan (`<project repo root>/xero-dotnet-plan.md`) —
do not let it pick its own location.

It writes `xero-dotnet-plan.md` (plan + contract sheet) and returns its path.

**Parallelize the wait — prerequisites only.** Repo reconnaissance (where the integration
lands in this codebase) is not the `dotnet-xero-sdk` agent's job: kick it off in the SAME message
as the spawn (parallel tool calls; background spawns if your harness has them). While the
agent works, do ONLY work that needs no SDK knowledge and touches no project file:

- the repo survey (read-only exploration of conventions and layering) — brief it to return
  each convention as *pattern + the ONE exemplar file path to imitate*, NOT inline code
  snippets: you will Read the exemplar at edit time anyway (edits need the file's exact
  current text), so a snippet dump gets paid for twice;
- `dotnet restore` and a baseline `dotnet build` / `dotnet test` of the UNTOUCHED solution,
  so later failures are attributable to your changes;
- locating the SDK reference and its pinned ref in the project;
- credentials/environment verification (per the task's secret-handling rules);
- setting up your task tracking.

Never sit idle while one of these read-only prerequisites is still undone. Equally, never use
the wait to get a "head start" on implementation: **creating or editing ANY project file
before the gate below is a defect**, no matter how obvious the code seems — the agent edits
files in place, so your writes race its writes. This applies while it is running whether you
spawned it OR resumed it via a follow-up message — a resumed or backgrounded agent is still
running.

**HARD GATE — no project-file creation or edits until:** the agent has RETURNED, the file
EXISTS at the path you dictated (check it — helpers have misreported save locations), and you
have read it. The gate bars coding "meanwhile"; it does not bar the read-only prerequisite
work above. Starting to code before the sheet exists defeats the entire plan-first design.

### Step 1c — Required reading (do this before you write any code)

The contract sheet ends with a **REQUIRED READING** block, and its rows carry inline
`MUST load <skill>` pointers. **Load every `dotnet-*` skill the sheet names, now, before you
start implementing** — not lazily at the step that needs it. The sheet deliberately does *not*
carry the how-to: it names the hazard and hands you the skill that resolves it, so an unloaded
pointer is a gap in what you know, not a formality. If the sheet names none, load
`dotnet-error-handling` anyway — every integration writes an error boundary.

These are API-agnostic usage skills; loading them is not the same as reading the map, and it
does not breach the map boundary. Contract *facts* still come only from the sheet or the warm
agent.

Before implementing, check the plan's **Assumptions & Blockers** section:
- Blocker or major assumption → surface it to the user in plain language, get their answer,
  send the clarification to the EXISTING `dotnet-xero-sdk` agent (re-spawn only if it is gone). It
  revises the file in place and replies with the changed rows.
- Minor assumptions only → proceed.

Full re-planning only on genuine scope change; for a single missing fact mid-implementation,
ask the warm `dotnet-xero-sdk` agent, never guess.

### Step 2 — Implement from the contract sheet

1. Read `xero-dotnet-plan.md` once. Treat its contracts as authoritative — do not re-derive or
   "double-check" them from memory. When the agent later revises the sheet, it replies with
   the changed rows verbatim: work from that reply, not a re-read of the file.
2. Implement sequentially, following the repo's own conventions and layering. You loaded the
   companion skills the sheet named in Step 1c — implement each step in line with the one that
   governs it, and re-check the sheet's `MUST load` pointer for a step if you skipped ahead.
   Take every contract *fact* (signatures, wire names, error accessors, enum values) from the
   contract sheet or the warm `dotnet-xero-sdk` agent — never re-derive one from a companion.
3. After every change: `dotnet build`; fix non-SDK errors yourself.
4. **Any compile or runtime error involving an SDK type or member** (`CS1061`, `CS0117`,
   `CS0234`, `CS0104`, `CS1503`, `CS7036`, … on `Xero.*`, or a provider error
   at runtime) → send the exact error output and the files involved to your EXISTING
   `dotnet-xero-sdk` agent (a follow-up message, NOT a new spawn), and wait. It fixes the code in
   place and reports what changed and whether it could build-verify. **If it reports it could
   not build because the solution is running, stop the app, rebuild, and verify yourself** —
   it will never touch your running process. Do not attempt more than one self-fix of an
   SDK-name error before handing it over — rewriting from the same knowledge that produced the
   error is guessing.
5. Run the project's tests (`dotnet test`); verify the integration end to end the way the task
   demands.

### Step 3 — Answering pure questions

A standalone Xero question with no code change: ask the warm `dotnet-xero-sdk` agent (narrow-
question mode) and relay its grounded answer. Never answer from memory, even for "easy"
questions.

## Wait for your agent

**Never create or edit a project file while `dotnet-xero-sdk` is running** — it edits files in
place, and its edits collide with yours. This holds for an agent you spawned AND one you
resumed via a follow-up message (a resumed or backgrounded agent is still running). The one
thing you may do during a wait is the **read-only** Step-1 prerequisite work (repo survey,
restore, baseline build, env checks) — it touches no project file. When those are done and the
agent is still running, wait.

## Anti-patterns — never do these

- **Get SDK knowledge from the `dotnet-xero-sdk` agent, not yourself.** Don't clone or decompile the
  SDK, don't fetch its source files, and don't web-search Xero topics to find an
  implementation detail — that is the agent's job. (You have no SDK source or clone locally;
  the agent holds the bundled map and clones on a real gap.)
- **Don't load `dotnet-xero-getting-started` or the SDK map pages** — the map is the agent's, and
  loading it just bloats your context. (The `dotnet-*` companions are the opposite case: load
  them, per Step 1c.) Don't re-derive a contract *fact* from a companion: exact signatures, wire names,
  error accessors, and enum values come from the contract sheet (or you ask the warm `dotnet-xero-sdk`
  agent). Where a companion points at the SDK source or a clone, that path is the agent's, not
  yours — you have no local clone.
- **Never write a Xero/SDK fact from memory** — every signature, field name, enum value, and
  error type in your code must come from the contract sheet or a lookup. And **never write a
  call from memory "to fix later".**
- **Don't re-derive or double-check a sheet row from memory.** If you are unsure what a row
  said, batch your questions into ONE message to the warm `dotnet-xero-sdk` agent — it holds the map
  warm and answers in seconds.
- **Never spawn a second `dotnet-xero-sdk` agent.** One spawn per session; everything after is a
  follow-up message to it — a fresh spawn rebuilds the whole map context (the dominant cost).
- **Don't create or edit project files while the agent runs** — see *Wait for your agent*.
