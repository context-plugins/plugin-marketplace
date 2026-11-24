<!-- Generated file — do not edit; regenerated with the SDK. -->

# Rules — operations

Accessor: `client.rules` · Source: `src/resources/rules.ts` · 1 operation · Request and error types: namespace `Rules`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### triggerRule

- **Signature**: `triggerRule(request: Rules.TriggerRuleRequest, options?: RequestOptions): ApiPromise<RuleTriggersRunResponse, Rules.TriggerRuleError>`
- **Wire**: `POST /rule_triggers/{rule_trigger_gid}/run`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RuleTriggersRunResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Rules.TriggerRuleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Rules.TriggerRuleRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ruleTriggerGid` | `path` | `rule_trigger_gid` | `string` | yes |
| `body` | `body` | — | `RuleTriggersRunRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RuleTriggersRunRequest` | `ruleTriggersRunRequestSchema` | `src/models/rule-triggers-run-request.ts` |
| `RuleTriggersRunResponse` | `ruleTriggersRunResponseSchema` | `src/models/rule-triggers-run-response.ts` |

