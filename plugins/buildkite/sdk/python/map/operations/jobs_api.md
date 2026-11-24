<!-- Generated file — do not edit; regenerated with the SDK. -->

# JobsApi — operations

Accessor: `client.jobs_api` · Source: `buildkite/apis/jobs_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.jobs_api.get_job_log

- **Route**: `GET /organizations/{org}/pipelines/{pipeline}/builds/{number}/jobs/{job}/log`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_job_log(org: str, pipeline: str, number: int, job: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `org`, `pipeline`, `number`, `job`
- **Params**: `org` — path · `pipeline` — path · `number` — path · `job` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.jobs_api.retry_job

- **Route**: `PUT /organizations/{org}/pipelines/{pipeline}/builds/{number}/jobs/{job}/retry`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def retry_job(org: str, pipeline: str, number: int, job: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `org`, `pipeline`, `number`, `job`
- **Params**: `org` — path · `pipeline` — path · `number` — path · `job` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

