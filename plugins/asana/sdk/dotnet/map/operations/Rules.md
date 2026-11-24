<!-- Generated file — do not edit; regenerated with the SDK. -->

# Rules — operations

Accessor: `client.Rules` · Source: `src/Asana/Api/Rules.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### TriggerRule

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `TriggerRule(TriggerRuleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RuleTriggerGid`, `Body`
- **Returns**: `RuleTriggersRunResponse`
- **Error**: `ApiException<TriggerRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TriggerRuleRequest` | `src/Asana/Requests/Rules/TriggerRuleRequest.cs` |
| `RuleTriggersRunRequest` | `src/Asana/Models/RuleTriggersRunRequest.cs` |
| `RuleTriggersRunResponse` | `src/Asana/Models/RuleTriggersRunResponse.cs` |
| `TriggerRuleError` | `src/Asana/Errors/TriggerRuleError.cs` |

