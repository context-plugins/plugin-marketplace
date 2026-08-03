# Unions (OneOf / AnyOf)

Union types wrap several `Optional<T>` variants. Construct with a static factory (`Union.Factory(variant)`) or an implicit conversion where listed; read back with the matching `TryGet…(out …)` — it returns `true` when that variant is set. Cells show `—` when the union declares none.

## OneOf (0)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|

## AnyOf (2)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|
| `V2AccountActivitiesResponse` | AccountTradingActivities, AccountNonTradeActivities | `V2AccountActivitiesResponse.AccountTradingActivities(AccountTradingActivities)`, `V2AccountActivitiesResponse.AccountNonTradeActivities(AccountNonTradeActivities)` | `TryGetAccountTradingActivities(out …)`, `TryGetAccountNonTradeActivities(out …)` | `AccountTradingActivities`, `AccountNonTradeActivities` | `Models/AnyOf/V2AccountActivitiesResponse.cs` |
| `V2AccountActivitiesResponse1` | AccountTradingActivities, AccountNonTradeActivities | `V2AccountActivitiesResponse1.AccountTradingActivities(AccountTradingActivities)`, `V2AccountActivitiesResponse1.AccountNonTradeActivities(AccountNonTradeActivities)` | `TryGetAccountTradingActivities(out …)`, `TryGetAccountNonTradeActivities(out …)` | `AccountTradingActivities`, `AccountNonTradeActivities` | `Models/AnyOf/V2AccountActivitiesResponse1.cs` |
