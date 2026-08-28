---
name: "dotnet-integrate-maxio-advanced-billing"
description: "Entry point for Maxio Advanced Billing .NET SDK work in a C#/.NET project. Load this first when asked to integrate Maxio Advanced Billing — ApiExports, AdvanceInvoice, BillingPortal, ComponentPricePoints, Components, Coupons, CustomFields, Customers, Events, EventsBasedBillingSegments, Insights, Invoices, MaxioGateway, Offers, PaymentProfiles, ProductFamilies, ProductPricePoints, Products, ProformaInvoices, ReasonCodes, ReferralCodes, SalesCommissions, Sites, SubscriptionComponents, SubscriptionGroupInvoiceAccount, SubscriptionGroupStatus, SubscriptionGroups, SubscriptionInvoiceAccount, SubscriptionNotes, SubscriptionProducts, SubscriptionRenewals, SubscriptionStatus, Subscriptions, WebhooksApi, or when a Maxio Advanced Billing SDK call errors or behaves unexpectedly. Routes each step to the skill that governs it and states where this SDK's contracts come from — the SDK map, never model memory."
---

# Maxio Advanced Billing .NET SDK — integration router

This skill routes Maxio Advanced Billing .NET SDK work. Two kinds of knowledge are involved and they come from different places: **what this SDK declares** — signatures, wire names, response envelopes, error types, enum values — comes from the SDK map that ships inside the SDK's own source, and **how to use an APIMatic-generated .NET SDK correctly** comes from the `dotnet-*` companion skills. Your training data on this SDK is stale; neither kind of fact comes from memory.

`dotnet-getting-started` is the entry point: it carries this SDK's identity and the map-first lookup discipline. Load it before the first step below.

**Scope:** the Maxio Advanced Billing .NET SDK (built from <https://github.com/context-plugins/maxio-csharp-sdk>, root namespace `MaxioAdvancedBilling`) in C#/.NET projects. An unrelated API or language is not this skill's business.

## Workflow

### Step 1 — Ground every contract before writing any code

Load `dotnet-getting-started` and follow its *SDK map* section to reach the map. Then take, in **one pass**, every contract the work in scope touches: the exact method signature (parameter order, types, and which nullable parameters must still be passed), the request model's fields with their wire names, the response envelope and the fields you will read out of it, the operation's error case and accessors, and its pagination. Collect them all before the first edit — rediscovering a contract mid-implementation is what produces code written from memory.

A contract you cannot settle from the map is settled from the one SDK source file the map row names — never from memory, and never by writing the call "to fix later".

### Step 2 — Load the companion skill for every step in scope

`dotnet-getting-started`'s *Which companion skill to load* table maps each integration step to the skill that governs it. Load them **before** you start implementing, not lazily at the step that needs one: knowing a type's name is not knowing how to use it, and the traps these carry — what a timeout actually bounds, which failures reach your catch block — are invisible in a signature. `dotnet-error-handling` applies to every integration, because every integration writes an error boundary.

### Step 3 — Implement

1. Follow the repo's own conventions and layering; survey them first if the codebase is new to you.
2. Take every contract fact from what you grounded in Step 1. A companion skill teaches the shape of a call, not this SDK's names — never fill a signature or a wire name from one.
3. Build after each change (`dotnet build`), and fix non-SDK errors as you go.

### Step 4 — When the build fails on an SDK name

A compile error naming an SDK type or member (`CS1061`, `CS0117`, `CS0234`, `CS0104`, `CS1503`, `CS7036`, … on `MaxioAdvancedBilling.*`) means the code and the SDK disagree, so **go back to the map row for that symbol** — do not rewrite the failing line from the same knowledge that produced it. Response envelopes are the classic case: a response type wraps its payload in one field, so the read goes one level down. If the row matches what the code already says, open the single source file it names.

Runtime failures are the same discipline pointed at a different page: read the provider's error through the accessors the operation's map row names, with `dotnet-error-handling` for the mechanics. For a 401, a wrong host or a timeout, check the credentials, server and retry configuration `dotnet-getting-started` documents before touching call sites.

### Step 5 — Verify

Run the project's tests (`dotnet test`) and exercise the integration end to end the way the task demands. An integration that compiles is not an integration that works.

## Anti-patterns — never do these

- **Writing a Maxio Advanced Billing fact from memory.** Every signature, field name, wire name, enum value and error type in your code comes from the map or the SDK source it names.
- **Locating something by grep, glob or `find` over the SDK tree.** The map is the locator: open its index, follow the link. A tree scan pulls un-grounded source into context and is slower than the lookup it replaces.
- **Skipping a companion skill because the code compiles.** Compiling proves the names are right, not that the retry policy, the error boundary or the pagination loop are.
- **Re-guessing a failing symbol.** One rewrite from memory after a compile error is how the error happened; the second is a choice.
- **Decompiling the installed package, or web-searching Maxio Advanced Billing for an implementation detail.** The generated source and its map are the authority for what `MaxioAdvancedBilling` contains.
- **Leaving a contract open for later.** If a fact is missing, look it up now — a call written to be corrected later is a call nobody corrects.

