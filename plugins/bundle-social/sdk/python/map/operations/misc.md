<!-- Generated file — do not edit; regenerated with the SDK. -->

# Misc — operations

Accessor: `client.misc` · Source: `bundle_social/apis/misc.py` · 92 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.misc.misc_bluesky_delete_comment

- **Route**: `DELETE /api/v1/misc/bluesky/comment`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_bluesky_delete_comment(*, body: ApiV1MiscBlueskyCommentRequest | ApiV1MiscBlueskyCommentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscBlueskyCommentResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscBlueskyCommentResponse, MiscBlueskyDeleteCommentErrorBody]`
- **Error**: `MiscBlueskyDeleteCommentErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscBlueskyComment400Error1` [400] · `ApiV1MiscBlueskyComment401Error1` [401] · `ApiV1MiscBlueskyComment403Error1` [403] · `ApiV1MiscBlueskyComment404Error1` [404] · `ApiV1MiscBlueskyComment429Error1` [429] · `ApiV1MiscBlueskyComment500Error1` [500] · `ApiV1MiscBlueskyComment502Error1` [502] · `ApiV1MiscBlueskyComment503Error1` [503] · `ApiV1MiscBlueskyComment504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscBlueskyCommentRequest` | `bundle_social/models/api_v1_misc_bluesky_comment_request.py` |
| `ApiV1MiscBlueskyCommentRequestDict` | `bundle_social/models/api_v1_misc_bluesky_comment_request.py` |
| `ApiV1MiscBlueskyCommentResponse` | `bundle_social/models/api_v1_misc_bluesky_comment_response.py` |
| `MiscBlueskyDeleteCommentErrorBody` | `bundle_social/errors/misc_bluesky_delete_comment_error.py` |
| `ApiV1MiscBlueskyComment400Error1` | `bundle_social/models/api_v1_misc_bluesky_comment400_error1.py` |
| `ApiV1MiscBlueskyComment401Error1` | `bundle_social/models/api_v1_misc_bluesky_comment401_error1.py` |
| `ApiV1MiscBlueskyComment403Error1` | `bundle_social/models/api_v1_misc_bluesky_comment403_error1.py` |
| `ApiV1MiscBlueskyComment404Error1` | `bundle_social/models/api_v1_misc_bluesky_comment404_error1.py` |
| `ApiV1MiscBlueskyComment429Error1` | `bundle_social/models/api_v1_misc_bluesky_comment429_error1.py` |
| `ApiV1MiscBlueskyComment500Error1` | `bundle_social/models/api_v1_misc_bluesky_comment500_error1.py` |
| `ApiV1MiscBlueskyComment502Error1` | `bundle_social/models/api_v1_misc_bluesky_comment502_error1.py` |
| `ApiV1MiscBlueskyComment503Error1` | `bundle_social/models/api_v1_misc_bluesky_comment503_error1.py` |
| `ApiV1MiscBlueskyComment504Error1` | `bundle_social/models/api_v1_misc_bluesky_comment504_error1.py` |

### client.misc.misc_bluesky_delete_post

- **Route**: `DELETE /api/v1/misc/bluesky/post`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_bluesky_delete_post(*, body: ApiV1MiscBlueskyPostRequest | ApiV1MiscBlueskyPostRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscBlueskyPostResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscBlueskyPostResponse, MiscBlueskyDeletePostErrorBody]`
- **Error**: `MiscBlueskyDeletePostErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscBlueskyPost400Error1` [400] · `ApiV1MiscBlueskyPost401Error1` [401] · `ApiV1MiscBlueskyPost403Error1` [403] · `ApiV1MiscBlueskyPost404Error1` [404] · `ApiV1MiscBlueskyPost429Error1` [429] · `ApiV1MiscBlueskyPost500Error1` [500] · `ApiV1MiscBlueskyPost502Error1` [502] · `ApiV1MiscBlueskyPost503Error1` [503] · `ApiV1MiscBlueskyPost504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscBlueskyPostRequest` | `bundle_social/models/api_v1_misc_bluesky_post_request.py` |
| `ApiV1MiscBlueskyPostRequestDict` | `bundle_social/models/api_v1_misc_bluesky_post_request.py` |
| `ApiV1MiscBlueskyPostResponse` | `bundle_social/models/api_v1_misc_bluesky_post_response.py` |
| `MiscBlueskyDeletePostErrorBody` | `bundle_social/errors/misc_bluesky_delete_post_error.py` |
| `ApiV1MiscBlueskyPost400Error1` | `bundle_social/models/api_v1_misc_bluesky_post400_error1.py` |
| `ApiV1MiscBlueskyPost401Error1` | `bundle_social/models/api_v1_misc_bluesky_post401_error1.py` |
| `ApiV1MiscBlueskyPost403Error1` | `bundle_social/models/api_v1_misc_bluesky_post403_error1.py` |
| `ApiV1MiscBlueskyPost404Error1` | `bundle_social/models/api_v1_misc_bluesky_post404_error1.py` |
| `ApiV1MiscBlueskyPost429Error1` | `bundle_social/models/api_v1_misc_bluesky_post429_error1.py` |
| `ApiV1MiscBlueskyPost500Error1` | `bundle_social/models/api_v1_misc_bluesky_post500_error1.py` |
| `ApiV1MiscBlueskyPost502Error1` | `bundle_social/models/api_v1_misc_bluesky_post502_error1.py` |
| `ApiV1MiscBlueskyPost503Error1` | `bundle_social/models/api_v1_misc_bluesky_post503_error1.py` |
| `ApiV1MiscBlueskyPost504Error1` | `bundle_social/models/api_v1_misc_bluesky_post504_error1.py` |

### client.misc.misc_discord_delete_message

- **Route**: `DELETE /api/v1/misc/discord/message`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_discord_delete_message(*, body: ApiV1MiscDiscordMessageRequest | ApiV1MiscDiscordMessageRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscDiscordMessageResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscDiscordMessageResponse, MiscDiscordDeleteMessageErrorBody]`
- **Error**: `MiscDiscordDeleteMessageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscDiscordMessage400Error1` [400] · `ApiV1MiscDiscordMessage401Error1` [401] · `ApiV1MiscDiscordMessage403Error1` [403] · `ApiV1MiscDiscordMessage404Error1` [404] · `ApiV1MiscDiscordMessage429Error1` [429] · `ApiV1MiscDiscordMessage500Error1` [500] · `ApiV1MiscDiscordMessage502Error1` [502] · `ApiV1MiscDiscordMessage503Error1` [503] · `ApiV1MiscDiscordMessage504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscDiscordMessageRequest` | `bundle_social/models/api_v1_misc_discord_message_request.py` |
| `ApiV1MiscDiscordMessageRequestDict` | `bundle_social/models/api_v1_misc_discord_message_request.py` |
| `ApiV1MiscDiscordMessageResponse` | `bundle_social/models/api_v1_misc_discord_message_response.py` |
| `MiscDiscordDeleteMessageErrorBody` | `bundle_social/errors/misc_discord_delete_message_error.py` |
| `ApiV1MiscDiscordMessage400Error1` | `bundle_social/models/api_v1_misc_discord_message400_error1.py` |
| `ApiV1MiscDiscordMessage401Error1` | `bundle_social/models/api_v1_misc_discord_message401_error1.py` |
| `ApiV1MiscDiscordMessage403Error1` | `bundle_social/models/api_v1_misc_discord_message403_error1.py` |
| `ApiV1MiscDiscordMessage404Error1` | `bundle_social/models/api_v1_misc_discord_message404_error1.py` |
| `ApiV1MiscDiscordMessage429Error1` | `bundle_social/models/api_v1_misc_discord_message429_error1.py` |
| `ApiV1MiscDiscordMessage500Error1` | `bundle_social/models/api_v1_misc_discord_message500_error1.py` |
| `ApiV1MiscDiscordMessage502Error1` | `bundle_social/models/api_v1_misc_discord_message502_error1.py` |
| `ApiV1MiscDiscordMessage503Error1` | `bundle_social/models/api_v1_misc_discord_message503_error1.py` |
| `ApiV1MiscDiscordMessage504Error1` | `bundle_social/models/api_v1_misc_discord_message504_error1.py` |

### client.misc.misc_facebook_delete_comment

- **Route**: `DELETE /api/v1/misc/facebook/comment`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_facebook_delete_comment(*, body: ApiV1MiscFacebookCommentRequest1 | ApiV1MiscFacebookCommentRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscFacebookCommentResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscFacebookCommentResponse1, MiscFacebookDeleteCommentErrorBody]`
- **Error**: `MiscFacebookDeleteCommentErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscFacebookComment400Error1` [400] · `ApiV1MiscFacebookComment401Error1` [401] · `ApiV1MiscFacebookComment403Error1` [403] · `ApiV1MiscFacebookComment404Error1` [404] · `ApiV1MiscFacebookComment429Error1` [429] · `ApiV1MiscFacebookComment500Error1` [500] · `ApiV1MiscFacebookComment502Error1` [502] · `ApiV1MiscFacebookComment503Error1` [503] · `ApiV1MiscFacebookComment504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscFacebookCommentRequest1` | `bundle_social/models/api_v1_misc_facebook_comment_request1.py` |
| `ApiV1MiscFacebookCommentRequest1Dict` | `bundle_social/models/api_v1_misc_facebook_comment_request1.py` |
| `ApiV1MiscFacebookCommentResponse1` | `bundle_social/models/api_v1_misc_facebook_comment_response1.py` |
| `MiscFacebookDeleteCommentErrorBody` | `bundle_social/errors/misc_facebook_delete_comment_error.py` |
| `ApiV1MiscFacebookComment400Error1` | `bundle_social/models/api_v1_misc_facebook_comment400_error1.py` |
| `ApiV1MiscFacebookComment401Error1` | `bundle_social/models/api_v1_misc_facebook_comment401_error1.py` |
| `ApiV1MiscFacebookComment403Error1` | `bundle_social/models/api_v1_misc_facebook_comment403_error1.py` |
| `ApiV1MiscFacebookComment404Error1` | `bundle_social/models/api_v1_misc_facebook_comment404_error1.py` |
| `ApiV1MiscFacebookComment429Error1` | `bundle_social/models/api_v1_misc_facebook_comment429_error1.py` |
| `ApiV1MiscFacebookComment500Error1` | `bundle_social/models/api_v1_misc_facebook_comment500_error1.py` |
| `ApiV1MiscFacebookComment502Error1` | `bundle_social/models/api_v1_misc_facebook_comment502_error1.py` |
| `ApiV1MiscFacebookComment503Error1` | `bundle_social/models/api_v1_misc_facebook_comment503_error1.py` |
| `ApiV1MiscFacebookComment504Error1` | `bundle_social/models/api_v1_misc_facebook_comment504_error1.py` |

### client.misc.misc_facebook_delete_post

- **Route**: `DELETE /api/v1/misc/facebook/post`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_facebook_delete_post(*, body: ApiV1MiscFacebookPostRequest1 | ApiV1MiscFacebookPostRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscFacebookPostResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscFacebookPostResponse1, MiscFacebookDeletePostErrorBody]`
- **Error**: `MiscFacebookDeletePostErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscFacebookPost400Error1` [400] · `ApiV1MiscFacebookPost401Error1` [401] · `ApiV1MiscFacebookPost403Error1` [403] · `ApiV1MiscFacebookPost404Error1` [404] · `ApiV1MiscFacebookPost429Error1` [429] · `ApiV1MiscFacebookPost500Error1` [500] · `ApiV1MiscFacebookPost502Error1` [502] · `ApiV1MiscFacebookPost503Error1` [503] · `ApiV1MiscFacebookPost504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscFacebookPostRequest1` | `bundle_social/models/api_v1_misc_facebook_post_request1.py` |
| `ApiV1MiscFacebookPostRequest1Dict` | `bundle_social/models/api_v1_misc_facebook_post_request1.py` |
| `ApiV1MiscFacebookPostResponse1` | `bundle_social/models/api_v1_misc_facebook_post_response1.py` |
| `MiscFacebookDeletePostErrorBody` | `bundle_social/errors/misc_facebook_delete_post_error.py` |
| `ApiV1MiscFacebookPost400Error1` | `bundle_social/models/api_v1_misc_facebook_post400_error1.py` |
| `ApiV1MiscFacebookPost401Error1` | `bundle_social/models/api_v1_misc_facebook_post401_error1.py` |
| `ApiV1MiscFacebookPost403Error1` | `bundle_social/models/api_v1_misc_facebook_post403_error1.py` |
| `ApiV1MiscFacebookPost404Error1` | `bundle_social/models/api_v1_misc_facebook_post404_error1.py` |
| `ApiV1MiscFacebookPost429Error1` | `bundle_social/models/api_v1_misc_facebook_post429_error1.py` |
| `ApiV1MiscFacebookPost500Error1` | `bundle_social/models/api_v1_misc_facebook_post500_error1.py` |
| `ApiV1MiscFacebookPost502Error1` | `bundle_social/models/api_v1_misc_facebook_post502_error1.py` |
| `ApiV1MiscFacebookPost503Error1` | `bundle_social/models/api_v1_misc_facebook_post503_error1.py` |
| `ApiV1MiscFacebookPost504Error1` | `bundle_social/models/api_v1_misc_facebook_post504_error1.py` |

### client.misc.misc_facebook_edit_comment

- **Route**: `PATCH /api/v1/misc/facebook/comment`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_facebook_edit_comment(*, body: ApiV1MiscFacebookCommentRequest | ApiV1MiscFacebookCommentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscFacebookCommentResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscFacebookCommentResponse, MiscFacebookEditCommentErrorBody]`
- **Error**: `MiscFacebookEditCommentErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscFacebookComment400Error1` [400] · `ApiV1MiscFacebookComment401Error1` [401] · `ApiV1MiscFacebookComment403Error1` [403] · `ApiV1MiscFacebookComment404Error1` [404] · `ApiV1MiscFacebookComment429Error1` [429] · `ApiV1MiscFacebookComment500Error1` [500] · `ApiV1MiscFacebookComment502Error1` [502] · `ApiV1MiscFacebookComment503Error1` [503] · `ApiV1MiscFacebookComment504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscFacebookCommentRequest` | `bundle_social/models/api_v1_misc_facebook_comment_request.py` |
| `ApiV1MiscFacebookCommentRequestDict` | `bundle_social/models/api_v1_misc_facebook_comment_request.py` |
| `ApiV1MiscFacebookCommentResponse` | `bundle_social/models/api_v1_misc_facebook_comment_response.py` |
| `MiscFacebookEditCommentErrorBody` | `bundle_social/errors/misc_facebook_edit_comment_error.py` |
| `ApiV1MiscFacebookComment400Error1` | `bundle_social/models/api_v1_misc_facebook_comment400_error1.py` |
| `ApiV1MiscFacebookComment401Error1` | `bundle_social/models/api_v1_misc_facebook_comment401_error1.py` |
| `ApiV1MiscFacebookComment403Error1` | `bundle_social/models/api_v1_misc_facebook_comment403_error1.py` |
| `ApiV1MiscFacebookComment404Error1` | `bundle_social/models/api_v1_misc_facebook_comment404_error1.py` |
| `ApiV1MiscFacebookComment429Error1` | `bundle_social/models/api_v1_misc_facebook_comment429_error1.py` |
| `ApiV1MiscFacebookComment500Error1` | `bundle_social/models/api_v1_misc_facebook_comment500_error1.py` |
| `ApiV1MiscFacebookComment502Error1` | `bundle_social/models/api_v1_misc_facebook_comment502_error1.py` |
| `ApiV1MiscFacebookComment503Error1` | `bundle_social/models/api_v1_misc_facebook_comment503_error1.py` |
| `ApiV1MiscFacebookComment504Error1` | `bundle_social/models/api_v1_misc_facebook_comment504_error1.py` |

### client.misc.misc_facebook_edit_post

- **Route**: `PATCH /api/v1/misc/facebook/post`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_facebook_edit_post(*, body: ApiV1MiscFacebookPostRequest | ApiV1MiscFacebookPostRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscFacebookPostResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscFacebookPostResponse, MiscFacebookEditPostErrorBody]`
- **Error**: `MiscFacebookEditPostErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscFacebookPost400Error1` [400] · `ApiV1MiscFacebookPost401Error1` [401] · `ApiV1MiscFacebookPost403Error1` [403] · `ApiV1MiscFacebookPost404Error1` [404] · `ApiV1MiscFacebookPost429Error1` [429] · `ApiV1MiscFacebookPost500Error1` [500] · `ApiV1MiscFacebookPost502Error1` [502] · `ApiV1MiscFacebookPost503Error1` [503] · `ApiV1MiscFacebookPost504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscFacebookPostRequest` | `bundle_social/models/api_v1_misc_facebook_post_request.py` |
| `ApiV1MiscFacebookPostRequestDict` | `bundle_social/models/api_v1_misc_facebook_post_request.py` |
| `ApiV1MiscFacebookPostResponse` | `bundle_social/models/api_v1_misc_facebook_post_response.py` |
| `MiscFacebookEditPostErrorBody` | `bundle_social/errors/misc_facebook_edit_post_error.py` |
| `ApiV1MiscFacebookPost400Error1` | `bundle_social/models/api_v1_misc_facebook_post400_error1.py` |
| `ApiV1MiscFacebookPost401Error1` | `bundle_social/models/api_v1_misc_facebook_post401_error1.py` |
| `ApiV1MiscFacebookPost403Error1` | `bundle_social/models/api_v1_misc_facebook_post403_error1.py` |
| `ApiV1MiscFacebookPost404Error1` | `bundle_social/models/api_v1_misc_facebook_post404_error1.py` |
| `ApiV1MiscFacebookPost429Error1` | `bundle_social/models/api_v1_misc_facebook_post429_error1.py` |
| `ApiV1MiscFacebookPost500Error1` | `bundle_social/models/api_v1_misc_facebook_post500_error1.py` |
| `ApiV1MiscFacebookPost502Error1` | `bundle_social/models/api_v1_misc_facebook_post502_error1.py` |
| `ApiV1MiscFacebookPost503Error1` | `bundle_social/models/api_v1_misc_facebook_post503_error1.py` |
| `ApiV1MiscFacebookPost504Error1` | `bundle_social/models/api_v1_misc_facebook_post504_error1.py` |

### client.misc.misc_facebook_get_recommendation_by_id

- **Route**: `GET /api/v1/misc/facebook/recommendations/{recommendationId}`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_facebook_get_recommendation_by_id(recommendation_id: str, team_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `recommendation_id`, `team_id`
- **Params**: `recommendation_id` — path `recommendationId` · `team_id` — query `teamId`
- **Returns (parsed)**: `ApiV1MiscFacebookRecommendationsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscFacebookRecommendationsResponse1, MiscFacebookGetRecommendationByIdErrorBody]`
- **Error**: `MiscFacebookGetRecommendationByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscFacebookRecommendations400Error1` [400] · `ApiV1MiscFacebookRecommendations401Error1` [401] · `ApiV1MiscFacebookRecommendations403Error1` [403] · `ApiV1MiscFacebookRecommendations404Error1` [404] · `ApiV1MiscFacebookRecommendations429Error1` [429] · `ApiV1MiscFacebookRecommendations500Error1` [500] · `ApiV1MiscFacebookRecommendations502Error1` [502] · `ApiV1MiscFacebookRecommendations503Error1` [503] · `ApiV1MiscFacebookRecommendations504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscFacebookRecommendationsResponse1` | `bundle_social/models/api_v1_misc_facebook_recommendations_response1.py` |
| `MiscFacebookGetRecommendationByIdErrorBody` | `bundle_social/errors/misc_facebook_get_recommendation_by_id_error.py` |
| `ApiV1MiscFacebookRecommendations400Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations400_error1.py` |
| `ApiV1MiscFacebookRecommendations401Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations401_error1.py` |
| `ApiV1MiscFacebookRecommendations403Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations403_error1.py` |
| `ApiV1MiscFacebookRecommendations404Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations404_error1.py` |
| `ApiV1MiscFacebookRecommendations429Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations429_error1.py` |
| `ApiV1MiscFacebookRecommendations500Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations500_error1.py` |
| `ApiV1MiscFacebookRecommendations502Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations502_error1.py` |
| `ApiV1MiscFacebookRecommendations503Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations503_error1.py` |
| `ApiV1MiscFacebookRecommendations504Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations504_error1.py` |

### client.misc.misc_facebook_get_recommendation_comments

- **Route**: `GET /api/v1/misc/facebook/recommendations/{recommendationId}/comments`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_facebook_get_recommendation_comments(recommendation_id: str, team_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `recommendation_id`, `team_id`
- **Params**: `recommendation_id` — path `recommendationId` · `team_id` — query `teamId`
- **Returns (parsed)**: `ApiV1MiscFacebookRecommendationsCommentsResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscFacebookRecommendationsCommentsResponse, MiscFacebookGetRecommendationCommentsErrorBody]`
- **Error**: `MiscFacebookGetRecommendationCommentsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscFacebookRecommendationsComments400Error1` [400] · `ApiV1MiscFacebookRecommendationsComments401Error1` [401] · `ApiV1MiscFacebookRecommendationsComments403Error1` [403] · `ApiV1MiscFacebookRecommendationsComments404Error1` [404] · `ApiV1MiscFacebookRecommendationsComments429Error1` [429] · `ApiV1MiscFacebookRecommendationsComments500Error1` [500] · `ApiV1MiscFacebookRecommendationsComments502Error1` [502] · `ApiV1MiscFacebookRecommendationsComments503Error1` [503] · `ApiV1MiscFacebookRecommendationsComments504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscFacebookRecommendationsCommentsResponse` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments_response.py` |
| `MiscFacebookGetRecommendationCommentsErrorBody` | `bundle_social/errors/misc_facebook_get_recommendation_comments_error.py` |
| `ApiV1MiscFacebookRecommendationsComments400Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments400_error1.py` |
| `ApiV1MiscFacebookRecommendationsComments401Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments401_error1.py` |
| `ApiV1MiscFacebookRecommendationsComments403Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments403_error1.py` |
| `ApiV1MiscFacebookRecommendationsComments404Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments404_error1.py` |
| `ApiV1MiscFacebookRecommendationsComments429Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments429_error1.py` |
| `ApiV1MiscFacebookRecommendationsComments500Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments500_error1.py` |
| `ApiV1MiscFacebookRecommendationsComments502Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments502_error1.py` |
| `ApiV1MiscFacebookRecommendationsComments503Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments503_error1.py` |
| `ApiV1MiscFacebookRecommendationsComments504Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments504_error1.py` |

### client.misc.misc_facebook_get_recommendation_import_by_id

- **Route**: `GET /api/v1/misc/facebook/recommendations/import/{importId}`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_facebook_get_recommendation_import_by_id(import_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `import_id`
- **Params**: `import_id` — path `importId`
- **Returns (parsed)**: `ApiV1MiscFacebookRecommendationsImportResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscFacebookRecommendationsImportResponse, MiscFacebookGetRecommendationImportByIdErrorBody]`
- **Error**: `MiscFacebookGetRecommendationImportByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscFacebookRecommendationsImport400Error1` [400] · `ApiV1MiscFacebookRecommendationsImport401Error1` [401] · `ApiV1MiscFacebookRecommendationsImport403Error1` [403] · `ApiV1MiscFacebookRecommendationsImport404Error1` [404] · `ApiV1MiscFacebookRecommendationsImport429Error1` [429] · `ApiV1MiscFacebookRecommendationsImport500Error1` [500] · `ApiV1MiscFacebookRecommendationsImport502Error1` [502] · `ApiV1MiscFacebookRecommendationsImport503Error1` [503] · `ApiV1MiscFacebookRecommendationsImport504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscFacebookRecommendationsImportResponse` | `bundle_social/models/api_v1_misc_facebook_recommendations_import_response.py` |
| `MiscFacebookGetRecommendationImportByIdErrorBody` | `bundle_social/errors/misc_facebook_get_recommendation_import_by_id_error.py` |
| `ApiV1MiscFacebookRecommendationsImport400Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import400_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport401Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import401_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport403Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import403_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport404Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import404_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport429Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import429_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport500Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import500_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport502Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import502_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport503Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import503_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport504Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import504_error1.py` |

### client.misc.misc_facebook_get_recommendation_import_status

- **Route**: `GET /api/v1/misc/facebook/recommendations/import`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_facebook_get_recommendation_import_status(team_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId`
- **Returns (parsed)**: `ApiV1MiscFacebookRecommendationsImportResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscFacebookRecommendationsImportResponse1, MiscFacebookGetRecommendationImportStatusErrorBody]`
- **Error**: `MiscFacebookGetRecommendationImportStatusErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscFacebookRecommendationsImport400Error1` [400] · `ApiV1MiscFacebookRecommendationsImport401Error1` [401] · `ApiV1MiscFacebookRecommendationsImport403Error1` [403] · `ApiV1MiscFacebookRecommendationsImport404Error1` [404] · `ApiV1MiscFacebookRecommendationsImport429Error1` [429] · `ApiV1MiscFacebookRecommendationsImport500Error1` [500] · `ApiV1MiscFacebookRecommendationsImport502Error1` [502] · `ApiV1MiscFacebookRecommendationsImport503Error1` [503] · `ApiV1MiscFacebookRecommendationsImport504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscFacebookRecommendationsImportResponse1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import_response1.py` |
| `MiscFacebookGetRecommendationImportStatusErrorBody` | `bundle_social/errors/misc_facebook_get_recommendation_import_status_error.py` |
| `ApiV1MiscFacebookRecommendationsImport400Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import400_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport401Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import401_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport403Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import403_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport404Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import404_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport429Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import429_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport500Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import500_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport502Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import502_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport503Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import503_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport504Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import504_error1.py` |

### client.misc.misc_facebook_get_recommendations

- **Route**: `GET /api/v1/misc/facebook/recommendations`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_facebook_get_recommendations(team_id: str, *, limit: float | None = 50.0, offset: float | None = 0.0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId` · `limit` — query · `offset` — query
- **Returns (parsed)**: `ApiV1MiscFacebookRecommendationsResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscFacebookRecommendationsResponse, MiscFacebookGetRecommendationsErrorBody]`
- **Error**: `MiscFacebookGetRecommendationsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscFacebookRecommendations400Error1` [400] · `ApiV1MiscFacebookRecommendations401Error1` [401] · `ApiV1MiscFacebookRecommendations403Error1` [403] · `ApiV1MiscFacebookRecommendations404Error1` [404] · `ApiV1MiscFacebookRecommendations429Error1` [429] · `ApiV1MiscFacebookRecommendations500Error1` [500] · `ApiV1MiscFacebookRecommendations502Error1` [502] · `ApiV1MiscFacebookRecommendations503Error1` [503] · `ApiV1MiscFacebookRecommendations504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscFacebookRecommendationsResponse` | `bundle_social/models/api_v1_misc_facebook_recommendations_response.py` |
| `MiscFacebookGetRecommendationsErrorBody` | `bundle_social/errors/misc_facebook_get_recommendations_error.py` |
| `ApiV1MiscFacebookRecommendations400Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations400_error1.py` |
| `ApiV1MiscFacebookRecommendations401Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations401_error1.py` |
| `ApiV1MiscFacebookRecommendations403Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations403_error1.py` |
| `ApiV1MiscFacebookRecommendations404Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations404_error1.py` |
| `ApiV1MiscFacebookRecommendations429Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations429_error1.py` |
| `ApiV1MiscFacebookRecommendations500Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations500_error1.py` |
| `ApiV1MiscFacebookRecommendations502Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations502_error1.py` |
| `ApiV1MiscFacebookRecommendations503Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations503_error1.py` |
| `ApiV1MiscFacebookRecommendations504Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations504_error1.py` |

### client.misc.misc_facebook_get_text_format_presets

- **Route**: `GET /api/v1/misc/facebook/text-format-presets`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_facebook_get_text_format_presets(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1MiscFacebookTextFormatPresetsResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscFacebookTextFormatPresetsResponse, MiscFacebookGetTextFormatPresetsErrorBody]`
- **Error**: `MiscFacebookGetTextFormatPresetsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscFacebookTextFormatPresets400Error1` [400] · `ApiV1MiscFacebookTextFormatPresets401Error1` [401] · `ApiV1MiscFacebookTextFormatPresets403Error1` [403] · `ApiV1MiscFacebookTextFormatPresets404Error1` [404] · `ApiV1MiscFacebookTextFormatPresets429Error1` [429] · `ApiV1MiscFacebookTextFormatPresets500Error1` [500] · `ApiV1MiscFacebookTextFormatPresets502Error1` [502] · `ApiV1MiscFacebookTextFormatPresets503Error1` [503] · `ApiV1MiscFacebookTextFormatPresets504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscFacebookTextFormatPresetsResponse` | `bundle_social/models/api_v1_misc_facebook_text_format_presets_response.py` |
| `MiscFacebookGetTextFormatPresetsErrorBody` | `bundle_social/errors/misc_facebook_get_text_format_presets_error.py` |
| `ApiV1MiscFacebookTextFormatPresets400Error1` | `bundle_social/models/api_v1_misc_facebook_text_format_presets400_error1.py` |
| `ApiV1MiscFacebookTextFormatPresets401Error1` | `bundle_social/models/api_v1_misc_facebook_text_format_presets401_error1.py` |
| `ApiV1MiscFacebookTextFormatPresets403Error1` | `bundle_social/models/api_v1_misc_facebook_text_format_presets403_error1.py` |
| `ApiV1MiscFacebookTextFormatPresets404Error1` | `bundle_social/models/api_v1_misc_facebook_text_format_presets404_error1.py` |
| `ApiV1MiscFacebookTextFormatPresets429Error1` | `bundle_social/models/api_v1_misc_facebook_text_format_presets429_error1.py` |
| `ApiV1MiscFacebookTextFormatPresets500Error1` | `bundle_social/models/api_v1_misc_facebook_text_format_presets500_error1.py` |
| `ApiV1MiscFacebookTextFormatPresets502Error1` | `bundle_social/models/api_v1_misc_facebook_text_format_presets502_error1.py` |
| `ApiV1MiscFacebookTextFormatPresets503Error1` | `bundle_social/models/api_v1_misc_facebook_text_format_presets503_error1.py` |
| `ApiV1MiscFacebookTextFormatPresets504Error1` | `bundle_social/models/api_v1_misc_facebook_text_format_presets504_error1.py` |

### client.misc.misc_facebook_get_token_debug

- **Route**: `GET /api/v1/misc/facebook/token-debug`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_facebook_get_token_debug(team_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId`
- **Returns (parsed)**: `ApiV1MiscFacebookTokenDebugResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscFacebookTokenDebugResponse, MiscFacebookGetTokenDebugErrorBody]`
- **Error**: `MiscFacebookGetTokenDebugErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscFacebookTokenDebug400Error1` [400] · `ApiV1MiscFacebookTokenDebug401Error1` [401] · `ApiV1MiscFacebookTokenDebug403Error1` [403] · `ApiV1MiscFacebookTokenDebug404Error1` [404] · `ApiV1MiscFacebookTokenDebug429Error1` [429] · `ApiV1MiscFacebookTokenDebug500Error1` [500] · `ApiV1MiscFacebookTokenDebug502Error1` [502] · `ApiV1MiscFacebookTokenDebug503Error1` [503] · `ApiV1MiscFacebookTokenDebug504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscFacebookTokenDebugResponse` | `bundle_social/models/api_v1_misc_facebook_token_debug_response.py` |
| `MiscFacebookGetTokenDebugErrorBody` | `bundle_social/errors/misc_facebook_get_token_debug_error.py` |
| `ApiV1MiscFacebookTokenDebug400Error1` | `bundle_social/models/api_v1_misc_facebook_token_debug400_error1.py` |
| `ApiV1MiscFacebookTokenDebug401Error1` | `bundle_social/models/api_v1_misc_facebook_token_debug401_error1.py` |
| `ApiV1MiscFacebookTokenDebug403Error1` | `bundle_social/models/api_v1_misc_facebook_token_debug403_error1.py` |
| `ApiV1MiscFacebookTokenDebug404Error1` | `bundle_social/models/api_v1_misc_facebook_token_debug404_error1.py` |
| `ApiV1MiscFacebookTokenDebug429Error1` | `bundle_social/models/api_v1_misc_facebook_token_debug429_error1.py` |
| `ApiV1MiscFacebookTokenDebug500Error1` | `bundle_social/models/api_v1_misc_facebook_token_debug500_error1.py` |
| `ApiV1MiscFacebookTokenDebug502Error1` | `bundle_social/models/api_v1_misc_facebook_token_debug502_error1.py` |
| `ApiV1MiscFacebookTokenDebug503Error1` | `bundle_social/models/api_v1_misc_facebook_token_debug503_error1.py` |
| `ApiV1MiscFacebookTokenDebug504Error1` | `bundle_social/models/api_v1_misc_facebook_token_debug504_error1.py` |

### client.misc.misc_facebook_import_recommendations

- **Route**: `POST /api/v1/misc/facebook/recommendations/import`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_facebook_import_recommendations(*, body: ApiV1MiscFacebookRecommendationsImportRequest | ApiV1MiscFacebookRecommendationsImportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscFacebookRecommendationsImportResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscFacebookRecommendationsImportResponse, MiscFacebookImportRecommendationsErrorBody]`
- **Error**: `MiscFacebookImportRecommendationsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscFacebookRecommendationsImport400Error1` [400] · `ApiV1MiscFacebookRecommendationsImport401Error1` [401] · `ApiV1MiscFacebookRecommendationsImport403Error1` [403] · `ApiV1MiscFacebookRecommendationsImport404Error1` [404] · `ApiV1MiscFacebookRecommendationsImport409Error1` [409] · `ApiV1MiscFacebookRecommendationsImport429Error1` [429] · `ApiV1MiscFacebookRecommendationsImport500Error1` [500] · `ApiV1MiscFacebookRecommendationsImport502Error1` [502] · `ApiV1MiscFacebookRecommendationsImport503Error1` [503] · `ApiV1MiscFacebookRecommendationsImport504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscFacebookRecommendationsImportRequest` | `bundle_social/models/api_v1_misc_facebook_recommendations_import_request.py` |
| `ApiV1MiscFacebookRecommendationsImportRequestDict` | `bundle_social/models/api_v1_misc_facebook_recommendations_import_request.py` |
| `ApiV1MiscFacebookRecommendationsImportResponse` | `bundle_social/models/api_v1_misc_facebook_recommendations_import_response.py` |
| `MiscFacebookImportRecommendationsErrorBody` | `bundle_social/errors/misc_facebook_import_recommendations_error.py` |
| `ApiV1MiscFacebookRecommendationsImport400Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import400_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport401Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import401_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport403Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import403_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport404Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import404_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport409Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import409_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport429Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import429_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport500Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import500_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport502Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import502_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport503Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import503_error1.py` |
| `ApiV1MiscFacebookRecommendationsImport504Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_import504_error1.py` |

### client.misc.misc_facebook_reply_to_recommendation

- **Route**: `PUT /api/v1/misc/facebook/recommendations/{recommendationId}/reply`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_facebook_reply_to_recommendation(recommendation_id: str, *, body: ApiV1MiscFacebookRecommendationsReplyRequest | ApiV1MiscFacebookRecommendationsReplyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `recommendation_id`
- **Params**: `recommendation_id` — path `recommendationId` · `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscFacebookRecommendationsReplyResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscFacebookRecommendationsReplyResponse, MiscFacebookReplyToRecommendationErrorBody]`
- **Error**: `MiscFacebookReplyToRecommendationErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscFacebookRecommendationsReply400Error1` [400] · `ApiV1MiscFacebookRecommendationsReply401Error1` [401] · `ApiV1MiscFacebookRecommendationsReply403Error1` [403] · `ApiV1MiscFacebookRecommendationsReply404Error1` [404] · `ApiV1MiscFacebookRecommendationsReply429Error1` [429] · `ApiV1MiscFacebookRecommendationsReply500Error1` [500] · `ApiV1MiscFacebookRecommendationsReply502Error1` [502] · `ApiV1MiscFacebookRecommendationsReply503Error1` [503] · `ApiV1MiscFacebookRecommendationsReply504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscFacebookRecommendationsReplyRequest` | `bundle_social/models/api_v1_misc_facebook_recommendations_reply_request.py` |
| `ApiV1MiscFacebookRecommendationsReplyRequestDict` | `bundle_social/models/api_v1_misc_facebook_recommendations_reply_request.py` |
| `ApiV1MiscFacebookRecommendationsReplyResponse` | `bundle_social/models/api_v1_misc_facebook_recommendations_reply_response.py` |
| `MiscFacebookReplyToRecommendationErrorBody` | `bundle_social/errors/misc_facebook_reply_to_recommendation_error.py` |
| `ApiV1MiscFacebookRecommendationsReply400Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_reply400_error1.py` |
| `ApiV1MiscFacebookRecommendationsReply401Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_reply401_error1.py` |
| `ApiV1MiscFacebookRecommendationsReply403Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_reply403_error1.py` |
| `ApiV1MiscFacebookRecommendationsReply404Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_reply404_error1.py` |
| `ApiV1MiscFacebookRecommendationsReply429Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_reply429_error1.py` |
| `ApiV1MiscFacebookRecommendationsReply500Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_reply500_error1.py` |
| `ApiV1MiscFacebookRecommendationsReply502Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_reply502_error1.py` |
| `ApiV1MiscFacebookRecommendationsReply503Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_reply503_error1.py` |
| `ApiV1MiscFacebookRecommendationsReply504Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_reply504_error1.py` |

### client.misc.misc_facebook_reply_to_recommendation_comment

- **Route**: `PUT /api/v1/misc/facebook/recommendations/{recommendationId}/comments/{commentId}/reply`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_facebook_reply_to_recommendation_comment(recommendation_id: str, comment_id: str, *, body: ApiV1MiscFacebookRecommendationsCommentsReplyRequest | ApiV1MiscFacebookRecommendationsCommentsReplyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `recommendation_id`, `comment_id`
- **Params**: `recommendation_id` — path `recommendationId` · `comment_id` — path `commentId` · `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscFacebookRecommendationsCommentsReplyResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscFacebookRecommendationsCommentsReplyResponse, MiscFacebookReplyToRecommendationCommentErrorBody]`
- **Error**: `MiscFacebookReplyToRecommendationCommentErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscFacebookRecommendationsCommentsReply400Error1` [400] · `ApiV1MiscFacebookRecommendationsCommentsReply401Error1` [401] · `ApiV1MiscFacebookRecommendationsCommentsReply403Error1` [403] · `ApiV1MiscFacebookRecommendationsCommentsReply404Error1` [404] · `ApiV1MiscFacebookRecommendationsCommentsReply429Error1` [429] · `ApiV1MiscFacebookRecommendationsCommentsReply500Error1` [500] · `ApiV1MiscFacebookRecommendationsCommentsReply502Error1` [502] · `ApiV1MiscFacebookRecommendationsCommentsReply503Error1` [503] · `ApiV1MiscFacebookRecommendationsCommentsReply504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscFacebookRecommendationsCommentsReplyRequest` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply_request.py` |
| `ApiV1MiscFacebookRecommendationsCommentsReplyRequestDict` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply_request.py` |
| `ApiV1MiscFacebookRecommendationsCommentsReplyResponse` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply_response.py` |
| `MiscFacebookReplyToRecommendationCommentErrorBody` | `bundle_social/errors/misc_facebook_reply_to_recommendation_comment_error.py` |
| `ApiV1MiscFacebookRecommendationsCommentsReply400Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply400_error1.py` |
| `ApiV1MiscFacebookRecommendationsCommentsReply401Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply401_error1.py` |
| `ApiV1MiscFacebookRecommendationsCommentsReply403Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply403_error1.py` |
| `ApiV1MiscFacebookRecommendationsCommentsReply404Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply404_error1.py` |
| `ApiV1MiscFacebookRecommendationsCommentsReply429Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply429_error1.py` |
| `ApiV1MiscFacebookRecommendationsCommentsReply500Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply500_error1.py` |
| `ApiV1MiscFacebookRecommendationsCommentsReply502Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply502_error1.py` |
| `ApiV1MiscFacebookRecommendationsCommentsReply503Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply503_error1.py` |
| `ApiV1MiscFacebookRecommendationsCommentsReply504Error1` | `bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply504_error1.py` |

### client.misc.misc_facebook_search_pages

- **Route**: `GET /api/v1/misc/facebook/pages`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_facebook_search_pages(team_id: str, q: str, *, limit: int | None = 10, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`, `q`
- **Params**: `team_id` — query `teamId` · `q` — query · `limit` — query
- **Returns (parsed)**: `ApiV1MiscFacebookPagesResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscFacebookPagesResponse, MiscFacebookSearchPagesErrorBody]`
- **Error**: `MiscFacebookSearchPagesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscFacebookPages400Error1` [400] · `ApiV1MiscFacebookPages401Error1` [401] · `ApiV1MiscFacebookPages403Error1` [403] · `ApiV1MiscFacebookPages404Error1` [404] · `ApiV1MiscFacebookPages429Error1` [429] · `ApiV1MiscFacebookPages500Error1` [500] · `ApiV1MiscFacebookPages502Error1` [502] · `ApiV1MiscFacebookPages503Error1` [503] · `ApiV1MiscFacebookPages504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscFacebookPagesResponse` | `bundle_social/models/api_v1_misc_facebook_pages_response.py` |
| `MiscFacebookSearchPagesErrorBody` | `bundle_social/errors/misc_facebook_search_pages_error.py` |
| `ApiV1MiscFacebookPages400Error1` | `bundle_social/models/api_v1_misc_facebook_pages400_error1.py` |
| `ApiV1MiscFacebookPages401Error1` | `bundle_social/models/api_v1_misc_facebook_pages401_error1.py` |
| `ApiV1MiscFacebookPages403Error1` | `bundle_social/models/api_v1_misc_facebook_pages403_error1.py` |
| `ApiV1MiscFacebookPages404Error1` | `bundle_social/models/api_v1_misc_facebook_pages404_error1.py` |
| `ApiV1MiscFacebookPages429Error1` | `bundle_social/models/api_v1_misc_facebook_pages429_error1.py` |
| `ApiV1MiscFacebookPages500Error1` | `bundle_social/models/api_v1_misc_facebook_pages500_error1.py` |
| `ApiV1MiscFacebookPages502Error1` | `bundle_social/models/api_v1_misc_facebook_pages502_error1.py` |
| `ApiV1MiscFacebookPages503Error1` | `bundle_social/models/api_v1_misc_facebook_pages503_error1.py` |
| `ApiV1MiscFacebookPages504Error1` | `bundle_social/models/api_v1_misc_facebook_pages504_error1.py` |

### client.misc.misc_google_business_add_media

- **Route**: `POST /api/v1/misc/google-business/media`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_add_media(*, body: ApiV1MiscGoogleBusinessMediaRequest | ApiV1MiscGoogleBusinessMediaRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessMediaResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessMediaResponse, MiscGoogleBusinessAddMediaErrorBody]`
- **Error**: `MiscGoogleBusinessAddMediaErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessMedia400Error1` [400] · `ApiV1MiscGoogleBusinessMedia401Error1` [401] · `ApiV1MiscGoogleBusinessMedia403Error1` [403] · `ApiV1MiscGoogleBusinessMedia404Error1` [404] · `ApiV1MiscGoogleBusinessMedia429Error1` [429] · `ApiV1MiscGoogleBusinessMedia500Error1` [500] · `ApiV1MiscGoogleBusinessMedia502Error1` [502] · `ApiV1MiscGoogleBusinessMedia503Error1` [503] · `ApiV1MiscGoogleBusinessMedia504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessMediaRequest` | `bundle_social/models/api_v1_misc_google_business_media_request.py` |
| `ApiV1MiscGoogleBusinessMediaRequestDict` | `bundle_social/models/api_v1_misc_google_business_media_request.py` |
| `ApiV1MiscGoogleBusinessMediaResponse` | `bundle_social/models/api_v1_misc_google_business_media_response.py` |
| `MiscGoogleBusinessAddMediaErrorBody` | `bundle_social/errors/misc_google_business_add_media_error.py` |
| `ApiV1MiscGoogleBusinessMedia400Error1` | `bundle_social/models/api_v1_misc_google_business_media400_error1.py` |
| `ApiV1MiscGoogleBusinessMedia401Error1` | `bundle_social/models/api_v1_misc_google_business_media401_error1.py` |
| `ApiV1MiscGoogleBusinessMedia403Error1` | `bundle_social/models/api_v1_misc_google_business_media403_error1.py` |
| `ApiV1MiscGoogleBusinessMedia404Error1` | `bundle_social/models/api_v1_misc_google_business_media404_error1.py` |
| `ApiV1MiscGoogleBusinessMedia429Error1` | `bundle_social/models/api_v1_misc_google_business_media429_error1.py` |
| `ApiV1MiscGoogleBusinessMedia500Error1` | `bundle_social/models/api_v1_misc_google_business_media500_error1.py` |
| `ApiV1MiscGoogleBusinessMedia502Error1` | `bundle_social/models/api_v1_misc_google_business_media502_error1.py` |
| `ApiV1MiscGoogleBusinessMedia503Error1` | `bundle_social/models/api_v1_misc_google_business_media503_error1.py` |
| `ApiV1MiscGoogleBusinessMedia504Error1` | `bundle_social/models/api_v1_misc_google_business_media504_error1.py` |

### client.misc.misc_google_business_create_place_action_link

- **Route**: `POST /api/v1/misc/google-business/location/place-action-links`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_create_place_action_link(*, body: ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1, MiscGoogleBusinessCreatePlaceActionLinkErrorBody]`
- **Error**: `MiscGoogleBusinessCreatePlaceActionLinkErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1` [400] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1` [401] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1` [403] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1` [404] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1` [429] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1` [500] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1` [502] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1` [503] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links_request.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequestDict` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links_request.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links_response1.py` |
| `MiscGoogleBusinessCreatePlaceActionLinkErrorBody` | `bundle_social/errors/misc_google_business_create_place_action_link_error.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links400_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links401_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links403_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links404_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links429_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links500_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links502_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links503_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links504_error1.py` |

### client.misc.misc_google_business_delete_media

- **Route**: `DELETE /api/v1/misc/google-business/media`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_delete_media(*, body: ApiV1MiscGoogleBusinessMediaRequest1 | ApiV1MiscGoogleBusinessMediaRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessMediaResponse2`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessMediaResponse2, MiscGoogleBusinessDeleteMediaErrorBody]`
- **Error**: `MiscGoogleBusinessDeleteMediaErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessMedia400Error1` [400] · `ApiV1MiscGoogleBusinessMedia401Error1` [401] · `ApiV1MiscGoogleBusinessMedia403Error1` [403] · `ApiV1MiscGoogleBusinessMedia404Error1` [404] · `ApiV1MiscGoogleBusinessMedia429Error1` [429] · `ApiV1MiscGoogleBusinessMedia500Error1` [500] · `ApiV1MiscGoogleBusinessMedia502Error1` [502] · `ApiV1MiscGoogleBusinessMedia503Error1` [503] · `ApiV1MiscGoogleBusinessMedia504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessMediaRequest1` | `bundle_social/models/api_v1_misc_google_business_media_request1.py` |
| `ApiV1MiscGoogleBusinessMediaRequest1Dict` | `bundle_social/models/api_v1_misc_google_business_media_request1.py` |
| `ApiV1MiscGoogleBusinessMediaResponse2` | `bundle_social/models/api_v1_misc_google_business_media_response2.py` |
| `MiscGoogleBusinessDeleteMediaErrorBody` | `bundle_social/errors/misc_google_business_delete_media_error.py` |
| `ApiV1MiscGoogleBusinessMedia400Error1` | `bundle_social/models/api_v1_misc_google_business_media400_error1.py` |
| `ApiV1MiscGoogleBusinessMedia401Error1` | `bundle_social/models/api_v1_misc_google_business_media401_error1.py` |
| `ApiV1MiscGoogleBusinessMedia403Error1` | `bundle_social/models/api_v1_misc_google_business_media403_error1.py` |
| `ApiV1MiscGoogleBusinessMedia404Error1` | `bundle_social/models/api_v1_misc_google_business_media404_error1.py` |
| `ApiV1MiscGoogleBusinessMedia429Error1` | `bundle_social/models/api_v1_misc_google_business_media429_error1.py` |
| `ApiV1MiscGoogleBusinessMedia500Error1` | `bundle_social/models/api_v1_misc_google_business_media500_error1.py` |
| `ApiV1MiscGoogleBusinessMedia502Error1` | `bundle_social/models/api_v1_misc_google_business_media502_error1.py` |
| `ApiV1MiscGoogleBusinessMedia503Error1` | `bundle_social/models/api_v1_misc_google_business_media503_error1.py` |
| `ApiV1MiscGoogleBusinessMedia504Error1` | `bundle_social/models/api_v1_misc_google_business_media504_error1.py` |

### client.misc.misc_google_business_delete_place_action_link

- **Route**: `DELETE /api/v1/misc/google-business/location/place-action-links`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_delete_place_action_link(*, body: ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2 | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3, MiscGoogleBusinessDeletePlaceActionLinkErrorBody]`
- **Error**: `MiscGoogleBusinessDeletePlaceActionLinkErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1` [400] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1` [401] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1` [403] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1` [404] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1` [429] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1` [500] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1` [502] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1` [503] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links_request2.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2Dict` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links_request2.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links_response3.py` |
| `MiscGoogleBusinessDeletePlaceActionLinkErrorBody` | `bundle_social/errors/misc_google_business_delete_place_action_link_error.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links400_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links401_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links403_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links404_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links429_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links500_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links502_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links503_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links504_error1.py` |

### client.misc.misc_google_business_delete_post

- **Route**: `DELETE /api/v1/misc/google-business/post`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_delete_post(*, body: ApiV1MiscGoogleBusinessPostRequest | ApiV1MiscGoogleBusinessPostRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessPostResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessPostResponse, MiscGoogleBusinessDeletePostErrorBody]`
- **Error**: `MiscGoogleBusinessDeletePostErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessPost400Error1` [400] · `ApiV1MiscGoogleBusinessPost401Error1` [401] · `ApiV1MiscGoogleBusinessPost403Error1` [403] · `ApiV1MiscGoogleBusinessPost404Error1` [404] · `ApiV1MiscGoogleBusinessPost429Error1` [429] · `ApiV1MiscGoogleBusinessPost500Error1` [500] · `ApiV1MiscGoogleBusinessPost502Error1` [502] · `ApiV1MiscGoogleBusinessPost503Error1` [503] · `ApiV1MiscGoogleBusinessPost504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessPostRequest` | `bundle_social/models/api_v1_misc_google_business_post_request.py` |
| `ApiV1MiscGoogleBusinessPostRequestDict` | `bundle_social/models/api_v1_misc_google_business_post_request.py` |
| `ApiV1MiscGoogleBusinessPostResponse` | `bundle_social/models/api_v1_misc_google_business_post_response.py` |
| `MiscGoogleBusinessDeletePostErrorBody` | `bundle_social/errors/misc_google_business_delete_post_error.py` |
| `ApiV1MiscGoogleBusinessPost400Error1` | `bundle_social/models/api_v1_misc_google_business_post400_error1.py` |
| `ApiV1MiscGoogleBusinessPost401Error1` | `bundle_social/models/api_v1_misc_google_business_post401_error1.py` |
| `ApiV1MiscGoogleBusinessPost403Error1` | `bundle_social/models/api_v1_misc_google_business_post403_error1.py` |
| `ApiV1MiscGoogleBusinessPost404Error1` | `bundle_social/models/api_v1_misc_google_business_post404_error1.py` |
| `ApiV1MiscGoogleBusinessPost429Error1` | `bundle_social/models/api_v1_misc_google_business_post429_error1.py` |
| `ApiV1MiscGoogleBusinessPost500Error1` | `bundle_social/models/api_v1_misc_google_business_post500_error1.py` |
| `ApiV1MiscGoogleBusinessPost502Error1` | `bundle_social/models/api_v1_misc_google_business_post502_error1.py` |
| `ApiV1MiscGoogleBusinessPost503Error1` | `bundle_social/models/api_v1_misc_google_business_post503_error1.py` |
| `ApiV1MiscGoogleBusinessPost504Error1` | `bundle_social/models/api_v1_misc_google_business_post504_error1.py` |

### client.misc.misc_google_business_delete_review_reply

- **Route**: `DELETE /api/v1/misc/google-business/reviews/{reviewId}/reply`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_delete_review_reply(review_id: str, *, body: ApiV1MiscGoogleBusinessReviewsReplyRequest1 | ApiV1MiscGoogleBusinessReviewsReplyRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `review_id`
- **Params**: `review_id` — path `reviewId` · `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessReviewsReplyResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessReviewsReplyResponse, MiscGoogleBusinessDeleteReviewReplyErrorBody]`
- **Error**: `MiscGoogleBusinessDeleteReviewReplyErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessReviewsReply400Error1` [400] · `ApiV1MiscGoogleBusinessReviewsReply401Error1` [401] · `ApiV1MiscGoogleBusinessReviewsReply403Error1` [403] · `ApiV1MiscGoogleBusinessReviewsReply404Error1` [404] · `ApiV1MiscGoogleBusinessReviewsReply429Error1` [429] · `ApiV1MiscGoogleBusinessReviewsReply500Error1` [500] · `ApiV1MiscGoogleBusinessReviewsReply502Error1` [502] · `ApiV1MiscGoogleBusinessReviewsReply503Error1` [503] · `ApiV1MiscGoogleBusinessReviewsReply504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessReviewsReplyRequest1` | `bundle_social/models/api_v1_misc_google_business_reviews_reply_request1.py` |
| `ApiV1MiscGoogleBusinessReviewsReplyRequest1Dict` | `bundle_social/models/api_v1_misc_google_business_reviews_reply_request1.py` |
| `ApiV1MiscGoogleBusinessReviewsReplyResponse` | `bundle_social/models/api_v1_misc_google_business_reviews_reply_response.py` |
| `MiscGoogleBusinessDeleteReviewReplyErrorBody` | `bundle_social/errors/misc_google_business_delete_review_reply_error.py` |
| `ApiV1MiscGoogleBusinessReviewsReply400Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_reply400_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsReply401Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_reply401_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsReply403Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_reply403_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsReply404Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_reply404_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsReply429Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_reply429_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsReply500Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_reply500_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsReply502Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_reply502_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsReply503Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_reply503_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsReply504Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_reply504_error1.py` |

### client.misc.misc_google_business_get_attributes

- **Route**: `GET /api/v1/misc/google-business/location/attributes`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_get_attributes(team_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId`
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessLocationAttributesResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessLocationAttributesResponse, MiscGoogleBusinessGetAttributesErrorBody]`
- **Error**: `MiscGoogleBusinessGetAttributesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessLocationAttributes400Error1` [400] · `ApiV1MiscGoogleBusinessLocationAttributes401Error1` [401] · `ApiV1MiscGoogleBusinessLocationAttributes403Error1` [403] · `ApiV1MiscGoogleBusinessLocationAttributes404Error1` [404] · `ApiV1MiscGoogleBusinessLocationAttributes429Error1` [429] · `ApiV1MiscGoogleBusinessLocationAttributes500Error1` [500] · `ApiV1MiscGoogleBusinessLocationAttributes502Error1` [502] · `ApiV1MiscGoogleBusinessLocationAttributes503Error1` [503] · `ApiV1MiscGoogleBusinessLocationAttributes504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessLocationAttributesResponse` | `bundle_social/models/api_v1_misc_google_business_location_attributes_response.py` |
| `MiscGoogleBusinessGetAttributesErrorBody` | `bundle_social/errors/misc_google_business_get_attributes_error.py` |
| `ApiV1MiscGoogleBusinessLocationAttributes400Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes400_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributes401Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes401_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributes403Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes403_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributes404Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes404_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributes429Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes429_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributes500Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes500_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributes502Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes502_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributes503Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes503_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributes504Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes504_error1.py` |

### client.misc.misc_google_business_get_food_menus

- **Route**: `GET /api/v1/misc/google-business/location/food-menus`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_get_food_menus(team_id: str, *, fields: list[Field3OrStr] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId` · `fields` — query
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessLocationFoodMenusResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessLocationFoodMenusResponse, MiscGoogleBusinessGetFoodMenusErrorBody]`
- **Error**: `MiscGoogleBusinessGetFoodMenusErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessLocationFoodMenus400Error1` [400] · `ApiV1MiscGoogleBusinessLocationFoodMenus401Error1` [401] · `ApiV1MiscGoogleBusinessLocationFoodMenus403Error1` [403] · `ApiV1MiscGoogleBusinessLocationFoodMenus404Error1` [404] · `ApiV1MiscGoogleBusinessLocationFoodMenus429Error1` [429] · `ApiV1MiscGoogleBusinessLocationFoodMenus500Error1` [500] · `ApiV1MiscGoogleBusinessLocationFoodMenus502Error1` [502] · `ApiV1MiscGoogleBusinessLocationFoodMenus503Error1` [503] · `ApiV1MiscGoogleBusinessLocationFoodMenus504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Field3OrStr` | `bundle_social/models/enums/field3.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenusResponse` | `bundle_social/models/api_v1_misc_google_business_location_food_menus_response.py` |
| `MiscGoogleBusinessGetFoodMenusErrorBody` | `bundle_social/errors/misc_google_business_get_food_menus_error.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus400Error1` | `bundle_social/models/api_v1_misc_google_business_location_food_menus400_error1.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus401Error1` | `bundle_social/models/api_v1_misc_google_business_location_food_menus401_error1.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus403Error1` | `bundle_social/models/api_v1_misc_google_business_location_food_menus403_error1.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus404Error1` | `bundle_social/models/api_v1_misc_google_business_location_food_menus404_error1.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus429Error1` | `bundle_social/models/api_v1_misc_google_business_location_food_menus429_error1.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus500Error1` | `bundle_social/models/api_v1_misc_google_business_location_food_menus500_error1.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus502Error1` | `bundle_social/models/api_v1_misc_google_business_location_food_menus502_error1.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus503Error1` | `bundle_social/models/api_v1_misc_google_business_location_food_menus503_error1.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus504Error1` | `bundle_social/models/api_v1_misc_google_business_location_food_menus504_error1.py` |

### client.misc.misc_google_business_get_location

- **Route**: `GET /api/v1/misc/google-business/location`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_get_location(team_id: str, *, fields: list[FieldBundleSocialMiscApiOrStr] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId` · `fields` — query
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessLocationResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessLocationResponse, MiscGoogleBusinessGetLocationErrorBody]`
- **Error**: `MiscGoogleBusinessGetLocationErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessLocation400Error1` [400] · `ApiV1MiscGoogleBusinessLocation401Error1` [401] · `ApiV1MiscGoogleBusinessLocation403Error1` [403] · `ApiV1MiscGoogleBusinessLocation404Error1` [404] · `ApiV1MiscGoogleBusinessLocation429Error1` [429] · `ApiV1MiscGoogleBusinessLocation500Error1` [500] · `ApiV1MiscGoogleBusinessLocation502Error1` [502] · `ApiV1MiscGoogleBusinessLocation503Error1` [503] · `ApiV1MiscGoogleBusinessLocation504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FieldBundleSocialMiscApiOrStr` | `bundle_social/models/enums/field_bundle_social_misc_api.py` |
| `ApiV1MiscGoogleBusinessLocationResponse` | `bundle_social/models/api_v1_misc_google_business_location_response.py` |
| `MiscGoogleBusinessGetLocationErrorBody` | `bundle_social/errors/misc_google_business_get_location_error.py` |
| `ApiV1MiscGoogleBusinessLocation400Error1` | `bundle_social/models/api_v1_misc_google_business_location400_error1.py` |
| `ApiV1MiscGoogleBusinessLocation401Error1` | `bundle_social/models/api_v1_misc_google_business_location401_error1.py` |
| `ApiV1MiscGoogleBusinessLocation403Error1` | `bundle_social/models/api_v1_misc_google_business_location403_error1.py` |
| `ApiV1MiscGoogleBusinessLocation404Error1` | `bundle_social/models/api_v1_misc_google_business_location404_error1.py` |
| `ApiV1MiscGoogleBusinessLocation429Error1` | `bundle_social/models/api_v1_misc_google_business_location429_error1.py` |
| `ApiV1MiscGoogleBusinessLocation500Error1` | `bundle_social/models/api_v1_misc_google_business_location500_error1.py` |
| `ApiV1MiscGoogleBusinessLocation502Error1` | `bundle_social/models/api_v1_misc_google_business_location502_error1.py` |
| `ApiV1MiscGoogleBusinessLocation503Error1` | `bundle_social/models/api_v1_misc_google_business_location503_error1.py` |
| `ApiV1MiscGoogleBusinessLocation504Error1` | `bundle_social/models/api_v1_misc_google_business_location504_error1.py` |

### client.misc.misc_google_business_get_review_by_id

- **Route**: `GET /api/v1/misc/google-business/reviews/{reviewId}`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_get_review_by_id(review_id: str, team_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `review_id`, `team_id`
- **Params**: `review_id` — path `reviewId` · `team_id` — query `teamId`
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessReviewsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessReviewsResponse1, MiscGoogleBusinessGetReviewByIdErrorBody]`
- **Error**: `MiscGoogleBusinessGetReviewByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessReviews400Error1` [400] · `ApiV1MiscGoogleBusinessReviews401Error1` [401] · `ApiV1MiscGoogleBusinessReviews403Error1` [403] · `ApiV1MiscGoogleBusinessReviews404Error1` [404] · `ApiV1MiscGoogleBusinessReviews429Error1` [429] · `ApiV1MiscGoogleBusinessReviews500Error1` [500] · `ApiV1MiscGoogleBusinessReviews502Error1` [502] · `ApiV1MiscGoogleBusinessReviews503Error1` [503] · `ApiV1MiscGoogleBusinessReviews504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessReviewsResponse1` | `bundle_social/models/api_v1_misc_google_business_reviews_response1.py` |
| `MiscGoogleBusinessGetReviewByIdErrorBody` | `bundle_social/errors/misc_google_business_get_review_by_id_error.py` |
| `ApiV1MiscGoogleBusinessReviews400Error1` | `bundle_social/models/api_v1_misc_google_business_reviews400_error1.py` |
| `ApiV1MiscGoogleBusinessReviews401Error1` | `bundle_social/models/api_v1_misc_google_business_reviews401_error1.py` |
| `ApiV1MiscGoogleBusinessReviews403Error1` | `bundle_social/models/api_v1_misc_google_business_reviews403_error1.py` |
| `ApiV1MiscGoogleBusinessReviews404Error1` | `bundle_social/models/api_v1_misc_google_business_reviews404_error1.py` |
| `ApiV1MiscGoogleBusinessReviews429Error1` | `bundle_social/models/api_v1_misc_google_business_reviews429_error1.py` |
| `ApiV1MiscGoogleBusinessReviews500Error1` | `bundle_social/models/api_v1_misc_google_business_reviews500_error1.py` |
| `ApiV1MiscGoogleBusinessReviews502Error1` | `bundle_social/models/api_v1_misc_google_business_reviews502_error1.py` |
| `ApiV1MiscGoogleBusinessReviews503Error1` | `bundle_social/models/api_v1_misc_google_business_reviews503_error1.py` |
| `ApiV1MiscGoogleBusinessReviews504Error1` | `bundle_social/models/api_v1_misc_google_business_reviews504_error1.py` |

### client.misc.misc_google_business_get_review_import_by_id

- **Route**: `GET /api/v1/misc/google-business/reviews/import/{importId}`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_get_review_import_by_id(import_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `import_id`
- **Params**: `import_id` — path `importId`
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessReviewsImportResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessReviewsImportResponse, MiscGoogleBusinessGetReviewImportByIdErrorBody]`
- **Error**: `MiscGoogleBusinessGetReviewImportByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessReviewsImport400Error1` [400] · `ApiV1MiscGoogleBusinessReviewsImport401Error1` [401] · `ApiV1MiscGoogleBusinessReviewsImport403Error1` [403] · `ApiV1MiscGoogleBusinessReviewsImport404Error1` [404] · `ApiV1MiscGoogleBusinessReviewsImport429Error1` [429] · `ApiV1MiscGoogleBusinessReviewsImport500Error1` [500] · `ApiV1MiscGoogleBusinessReviewsImport502Error1` [502] · `ApiV1MiscGoogleBusinessReviewsImport503Error1` [503] · `ApiV1MiscGoogleBusinessReviewsImport504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessReviewsImportResponse` | `bundle_social/models/api_v1_misc_google_business_reviews_import_response.py` |
| `MiscGoogleBusinessGetReviewImportByIdErrorBody` | `bundle_social/errors/misc_google_business_get_review_import_by_id_error.py` |
| `ApiV1MiscGoogleBusinessReviewsImport400Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import400_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport401Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import401_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport403Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import403_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport404Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import404_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport429Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import429_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport500Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import500_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport502Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import502_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport503Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import503_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport504Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import504_error1.py` |

### client.misc.misc_google_business_get_review_import_status

- **Route**: `GET /api/v1/misc/google-business/reviews/import`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_get_review_import_status(team_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId`
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessReviewsImportResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessReviewsImportResponse1, MiscGoogleBusinessGetReviewImportStatusErrorBody]`
- **Error**: `MiscGoogleBusinessGetReviewImportStatusErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessReviewsImport400Error1` [400] · `ApiV1MiscGoogleBusinessReviewsImport401Error1` [401] · `ApiV1MiscGoogleBusinessReviewsImport403Error1` [403] · `ApiV1MiscGoogleBusinessReviewsImport404Error1` [404] · `ApiV1MiscGoogleBusinessReviewsImport429Error1` [429] · `ApiV1MiscGoogleBusinessReviewsImport500Error1` [500] · `ApiV1MiscGoogleBusinessReviewsImport502Error1` [502] · `ApiV1MiscGoogleBusinessReviewsImport503Error1` [503] · `ApiV1MiscGoogleBusinessReviewsImport504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessReviewsImportResponse1` | `bundle_social/models/api_v1_misc_google_business_reviews_import_response1.py` |
| `MiscGoogleBusinessGetReviewImportStatusErrorBody` | `bundle_social/errors/misc_google_business_get_review_import_status_error.py` |
| `ApiV1MiscGoogleBusinessReviewsImport400Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import400_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport401Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import401_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport403Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import403_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport404Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import404_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport429Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import429_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport500Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import500_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport502Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import502_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport503Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import503_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport504Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import504_error1.py` |

### client.misc.misc_google_business_get_reviews

- **Route**: `GET /api/v1/misc/google-business/reviews`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_get_reviews(team_id: str, *, limit: float | None = 50.0, offset: float | None = 0.0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId` · `limit` — query · `offset` — query
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessReviewsResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessReviewsResponse, MiscGoogleBusinessGetReviewsErrorBody]`
- **Error**: `MiscGoogleBusinessGetReviewsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessReviews400Error1` [400] · `ApiV1MiscGoogleBusinessReviews401Error1` [401] · `ApiV1MiscGoogleBusinessReviews403Error1` [403] · `ApiV1MiscGoogleBusinessReviews404Error1` [404] · `ApiV1MiscGoogleBusinessReviews429Error1` [429] · `ApiV1MiscGoogleBusinessReviews500Error1` [500] · `ApiV1MiscGoogleBusinessReviews502Error1` [502] · `ApiV1MiscGoogleBusinessReviews503Error1` [503] · `ApiV1MiscGoogleBusinessReviews504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessReviewsResponse` | `bundle_social/models/api_v1_misc_google_business_reviews_response.py` |
| `MiscGoogleBusinessGetReviewsErrorBody` | `bundle_social/errors/misc_google_business_get_reviews_error.py` |
| `ApiV1MiscGoogleBusinessReviews400Error1` | `bundle_social/models/api_v1_misc_google_business_reviews400_error1.py` |
| `ApiV1MiscGoogleBusinessReviews401Error1` | `bundle_social/models/api_v1_misc_google_business_reviews401_error1.py` |
| `ApiV1MiscGoogleBusinessReviews403Error1` | `bundle_social/models/api_v1_misc_google_business_reviews403_error1.py` |
| `ApiV1MiscGoogleBusinessReviews404Error1` | `bundle_social/models/api_v1_misc_google_business_reviews404_error1.py` |
| `ApiV1MiscGoogleBusinessReviews429Error1` | `bundle_social/models/api_v1_misc_google_business_reviews429_error1.py` |
| `ApiV1MiscGoogleBusinessReviews500Error1` | `bundle_social/models/api_v1_misc_google_business_reviews500_error1.py` |
| `ApiV1MiscGoogleBusinessReviews502Error1` | `bundle_social/models/api_v1_misc_google_business_reviews502_error1.py` |
| `ApiV1MiscGoogleBusinessReviews503Error1` | `bundle_social/models/api_v1_misc_google_business_reviews503_error1.py` |
| `ApiV1MiscGoogleBusinessReviews504Error1` | `bundle_social/models/api_v1_misc_google_business_reviews504_error1.py` |

### client.misc.misc_google_business_get_service_list

- **Route**: `GET /api/v1/misc/google-business/location/service-list`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_get_service_list(team_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId`
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessLocationServiceListResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessLocationServiceListResponse, MiscGoogleBusinessGetServiceListErrorBody]`
- **Error**: `MiscGoogleBusinessGetServiceListErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessLocationServiceList400Error1` [400] · `ApiV1MiscGoogleBusinessLocationServiceList401Error1` [401] · `ApiV1MiscGoogleBusinessLocationServiceList403Error1` [403] · `ApiV1MiscGoogleBusinessLocationServiceList404Error1` [404] · `ApiV1MiscGoogleBusinessLocationServiceList429Error1` [429] · `ApiV1MiscGoogleBusinessLocationServiceList500Error1` [500] · `ApiV1MiscGoogleBusinessLocationServiceList502Error1` [502] · `ApiV1MiscGoogleBusinessLocationServiceList503Error1` [503] · `ApiV1MiscGoogleBusinessLocationServiceList504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessLocationServiceListResponse` | `bundle_social/models/api_v1_misc_google_business_location_service_list_response.py` |
| `MiscGoogleBusinessGetServiceListErrorBody` | `bundle_social/errors/misc_google_business_get_service_list_error.py` |
| `ApiV1MiscGoogleBusinessLocationServiceList400Error1` | `bundle_social/models/api_v1_misc_google_business_location_service_list400_error1.py` |
| `ApiV1MiscGoogleBusinessLocationServiceList401Error1` | `bundle_social/models/api_v1_misc_google_business_location_service_list401_error1.py` |
| `ApiV1MiscGoogleBusinessLocationServiceList403Error1` | `bundle_social/models/api_v1_misc_google_business_location_service_list403_error1.py` |
| `ApiV1MiscGoogleBusinessLocationServiceList404Error1` | `bundle_social/models/api_v1_misc_google_business_location_service_list404_error1.py` |
| `ApiV1MiscGoogleBusinessLocationServiceList429Error1` | `bundle_social/models/api_v1_misc_google_business_location_service_list429_error1.py` |
| `ApiV1MiscGoogleBusinessLocationServiceList500Error1` | `bundle_social/models/api_v1_misc_google_business_location_service_list500_error1.py` |
| `ApiV1MiscGoogleBusinessLocationServiceList502Error1` | `bundle_social/models/api_v1_misc_google_business_location_service_list502_error1.py` |
| `ApiV1MiscGoogleBusinessLocationServiceList503Error1` | `bundle_social/models/api_v1_misc_google_business_location_service_list503_error1.py` |
| `ApiV1MiscGoogleBusinessLocationServiceList504Error1` | `bundle_social/models/api_v1_misc_google_business_location_service_list504_error1.py` |

### client.misc.misc_google_business_import_reviews

- **Route**: `POST /api/v1/misc/google-business/reviews/import`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_import_reviews(*, body: ApiV1MiscGoogleBusinessReviewsImportRequest | ApiV1MiscGoogleBusinessReviewsImportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessReviewsImportResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessReviewsImportResponse, MiscGoogleBusinessImportReviewsErrorBody]`
- **Error**: `MiscGoogleBusinessImportReviewsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessReviewsImport400Error1` [400] · `ApiV1MiscGoogleBusinessReviewsImport401Error1` [401] · `ApiV1MiscGoogleBusinessReviewsImport403Error1` [403] · `ApiV1MiscGoogleBusinessReviewsImport404Error1` [404] · `ApiV1MiscGoogleBusinessReviewsImport409Error1` [409] · `ApiV1MiscGoogleBusinessReviewsImport429Error1` [429] · `ApiV1MiscGoogleBusinessReviewsImport500Error1` [500] · `ApiV1MiscGoogleBusinessReviewsImport502Error1` [502] · `ApiV1MiscGoogleBusinessReviewsImport503Error1` [503] · `ApiV1MiscGoogleBusinessReviewsImport504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessReviewsImportRequest` | `bundle_social/models/api_v1_misc_google_business_reviews_import_request.py` |
| `ApiV1MiscGoogleBusinessReviewsImportRequestDict` | `bundle_social/models/api_v1_misc_google_business_reviews_import_request.py` |
| `ApiV1MiscGoogleBusinessReviewsImportResponse` | `bundle_social/models/api_v1_misc_google_business_reviews_import_response.py` |
| `MiscGoogleBusinessImportReviewsErrorBody` | `bundle_social/errors/misc_google_business_import_reviews_error.py` |
| `ApiV1MiscGoogleBusinessReviewsImport400Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import400_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport401Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import401_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport403Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import403_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport404Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import404_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport409Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import409_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport429Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import429_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport500Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import500_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport502Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import502_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport503Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import503_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsImport504Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_import504_error1.py` |

### client.misc.misc_google_business_list_available_attributes

- **Route**: `GET /api/v1/misc/google-business/location/attributes/available`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_list_available_attributes(team_id: str, *, language_code: str | None = None, region_code: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId` · `language_code` — query `languageCode` · `region_code` — query `regionCode` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse, MiscGoogleBusinessListAvailableAttributesErrorBody]`
- **Error**: `MiscGoogleBusinessListAvailableAttributesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1` [400] · `ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1` [401] · `ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1` [403] · `ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1` [404] · `ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1` [429] · `ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1` [500] · `ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1` [502] · `ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1` [503] · `ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse` | `bundle_social/models/api_v1_misc_google_business_location_attributes_available_response.py` |
| `MiscGoogleBusinessListAvailableAttributesErrorBody` | `bundle_social/errors/misc_google_business_list_available_attributes_error.py` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes_available400_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes_available401_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes_available403_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes_available404_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes_available429_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes_available500_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes_available502_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes_available503_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes_available504_error1.py` |

### client.misc.misc_google_business_list_categories

- **Route**: `GET /api/v1/misc/google-business/location/categories/available`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_list_categories(team_id: str, region_code: str, language_code: str, *, names: list[str] | None = None, filter_: str | None = None, page_size: int | None = 50, page_token: str | None = None, view: ViewOrStr | None = View.BASIC, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`, `region_code`, `language_code`
- **Params**: `team_id` — query `teamId` · `region_code` — query `regionCode` · `language_code` — query `languageCode` · `names` — query · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `view` — query
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse, MiscGoogleBusinessListCategoriesErrorBody]`
- **Error**: `MiscGoogleBusinessListCategoriesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1` [400] · `ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1` [401] · `ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1` [403] · `ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1` [404] · `ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1` [429] · `ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1` [500] · `ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1` [502] · `ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1` [503] · `ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ViewOrStr` | `bundle_social/models/enums/view.py` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse` | `bundle_social/models/api_v1_misc_google_business_location_categories_available_response.py` |
| `MiscGoogleBusinessListCategoriesErrorBody` | `bundle_social/errors/misc_google_business_list_categories_error.py` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1` | `bundle_social/models/api_v1_misc_google_business_location_categories_available400_error1.py` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1` | `bundle_social/models/api_v1_misc_google_business_location_categories_available401_error1.py` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1` | `bundle_social/models/api_v1_misc_google_business_location_categories_available403_error1.py` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1` | `bundle_social/models/api_v1_misc_google_business_location_categories_available404_error1.py` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1` | `bundle_social/models/api_v1_misc_google_business_location_categories_available429_error1.py` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1` | `bundle_social/models/api_v1_misc_google_business_location_categories_available500_error1.py` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1` | `bundle_social/models/api_v1_misc_google_business_location_categories_available502_error1.py` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1` | `bundle_social/models/api_v1_misc_google_business_location_categories_available503_error1.py` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1` | `bundle_social/models/api_v1_misc_google_business_location_categories_available504_error1.py` |

### client.misc.misc_google_business_list_media

- **Route**: `GET /api/v1/misc/google-business/media`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_list_media(team_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessMediaResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessMediaResponse1, MiscGoogleBusinessListMediaErrorBody]`
- **Error**: `MiscGoogleBusinessListMediaErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessMedia400Error1` [400] · `ApiV1MiscGoogleBusinessMedia401Error1` [401] · `ApiV1MiscGoogleBusinessMedia403Error1` [403] · `ApiV1MiscGoogleBusinessMedia404Error1` [404] · `ApiV1MiscGoogleBusinessMedia429Error1` [429] · `ApiV1MiscGoogleBusinessMedia500Error1` [500] · `ApiV1MiscGoogleBusinessMedia502Error1` [502] · `ApiV1MiscGoogleBusinessMedia503Error1` [503] · `ApiV1MiscGoogleBusinessMedia504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessMediaResponse1` | `bundle_social/models/api_v1_misc_google_business_media_response1.py` |
| `MiscGoogleBusinessListMediaErrorBody` | `bundle_social/errors/misc_google_business_list_media_error.py` |
| `ApiV1MiscGoogleBusinessMedia400Error1` | `bundle_social/models/api_v1_misc_google_business_media400_error1.py` |
| `ApiV1MiscGoogleBusinessMedia401Error1` | `bundle_social/models/api_v1_misc_google_business_media401_error1.py` |
| `ApiV1MiscGoogleBusinessMedia403Error1` | `bundle_social/models/api_v1_misc_google_business_media403_error1.py` |
| `ApiV1MiscGoogleBusinessMedia404Error1` | `bundle_social/models/api_v1_misc_google_business_media404_error1.py` |
| `ApiV1MiscGoogleBusinessMedia429Error1` | `bundle_social/models/api_v1_misc_google_business_media429_error1.py` |
| `ApiV1MiscGoogleBusinessMedia500Error1` | `bundle_social/models/api_v1_misc_google_business_media500_error1.py` |
| `ApiV1MiscGoogleBusinessMedia502Error1` | `bundle_social/models/api_v1_misc_google_business_media502_error1.py` |
| `ApiV1MiscGoogleBusinessMedia503Error1` | `bundle_social/models/api_v1_misc_google_business_media503_error1.py` |
| `ApiV1MiscGoogleBusinessMedia504Error1` | `bundle_social/models/api_v1_misc_google_business_media504_error1.py` |

### client.misc.misc_google_business_list_place_action_links

- **Route**: `GET /api/v1/misc/google-business/location/place-action-links`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_list_place_action_links(team_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse, MiscGoogleBusinessListPlaceActionLinksErrorBody]`
- **Error**: `MiscGoogleBusinessListPlaceActionLinksErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1` [400] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1` [401] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1` [403] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1` [404] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1` [429] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1` [500] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1` [502] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1` [503] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links_response.py` |
| `MiscGoogleBusinessListPlaceActionLinksErrorBody` | `bundle_social/errors/misc_google_business_list_place_action_links_error.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links400_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links401_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links403_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links404_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links429_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links500_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links502_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links503_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links504_error1.py` |

### client.misc.misc_google_business_list_search_keywords

- **Route**: `GET /api/v1/misc/google-business/location/search-keywords`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_list_search_keywords(team_id: str, start_month: str, end_month: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`, `start_month`, `end_month`
- **Params**: `team_id` — query `teamId` · `start_month` — query `startMonth` · `end_month` — query `endMonth` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse, MiscGoogleBusinessListSearchKeywordsErrorBody]`
- **Error**: `MiscGoogleBusinessListSearchKeywordsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1` [400] · `ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1` [401] · `ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1` [403] · `ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1` [404] · `ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1` [429] · `ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1` [500] · `ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1` [502] · `ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1` [503] · `ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse` | `bundle_social/models/api_v1_misc_google_business_location_search_keywords_response.py` |
| `MiscGoogleBusinessListSearchKeywordsErrorBody` | `bundle_social/errors/misc_google_business_list_search_keywords_error.py` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1` | `bundle_social/models/api_v1_misc_google_business_location_search_keywords400_error1.py` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1` | `bundle_social/models/api_v1_misc_google_business_location_search_keywords401_error1.py` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1` | `bundle_social/models/api_v1_misc_google_business_location_search_keywords403_error1.py` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1` | `bundle_social/models/api_v1_misc_google_business_location_search_keywords404_error1.py` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1` | `bundle_social/models/api_v1_misc_google_business_location_search_keywords429_error1.py` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1` | `bundle_social/models/api_v1_misc_google_business_location_search_keywords500_error1.py` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1` | `bundle_social/models/api_v1_misc_google_business_location_search_keywords502_error1.py` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1` | `bundle_social/models/api_v1_misc_google_business_location_search_keywords503_error1.py` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1` | `bundle_social/models/api_v1_misc_google_business_location_search_keywords504_error1.py` |

### client.misc.misc_google_business_reply_to_review

- **Route**: `PUT /api/v1/misc/google-business/reviews/{reviewId}/reply`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_reply_to_review(review_id: str, *, body: ApiV1MiscGoogleBusinessReviewsReplyRequest | ApiV1MiscGoogleBusinessReviewsReplyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `review_id`
- **Params**: `review_id` — path `reviewId` · `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessReviewsReplyResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessReviewsReplyResponse, MiscGoogleBusinessReplyToReviewErrorBody]`
- **Error**: `MiscGoogleBusinessReplyToReviewErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessReviewsReply400Error1` [400] · `ApiV1MiscGoogleBusinessReviewsReply401Error1` [401] · `ApiV1MiscGoogleBusinessReviewsReply403Error1` [403] · `ApiV1MiscGoogleBusinessReviewsReply404Error1` [404] · `ApiV1MiscGoogleBusinessReviewsReply429Error1` [429] · `ApiV1MiscGoogleBusinessReviewsReply500Error1` [500] · `ApiV1MiscGoogleBusinessReviewsReply502Error1` [502] · `ApiV1MiscGoogleBusinessReviewsReply503Error1` [503] · `ApiV1MiscGoogleBusinessReviewsReply504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessReviewsReplyRequest` | `bundle_social/models/api_v1_misc_google_business_reviews_reply_request.py` |
| `ApiV1MiscGoogleBusinessReviewsReplyRequestDict` | `bundle_social/models/api_v1_misc_google_business_reviews_reply_request.py` |
| `ApiV1MiscGoogleBusinessReviewsReplyResponse` | `bundle_social/models/api_v1_misc_google_business_reviews_reply_response.py` |
| `MiscGoogleBusinessReplyToReviewErrorBody` | `bundle_social/errors/misc_google_business_reply_to_review_error.py` |
| `ApiV1MiscGoogleBusinessReviewsReply400Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_reply400_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsReply401Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_reply401_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsReply403Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_reply403_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsReply404Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_reply404_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsReply429Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_reply429_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsReply500Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_reply500_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsReply502Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_reply502_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsReply503Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_reply503_error1.py` |
| `ApiV1MiscGoogleBusinessReviewsReply504Error1` | `bundle_social/models/api_v1_misc_google_business_reviews_reply504_error1.py` |

### client.misc.misc_google_business_update_attributes

- **Route**: `PATCH /api/v1/misc/google-business/location/attributes`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_update_attributes(*, body: ApiV1MiscGoogleBusinessLocationAttributesRequest | ApiV1MiscGoogleBusinessLocationAttributesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessLocationAttributesResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessLocationAttributesResponse, MiscGoogleBusinessUpdateAttributesErrorBody]`
- **Error**: `MiscGoogleBusinessUpdateAttributesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessLocationAttributes400Error1` [400] · `ApiV1MiscGoogleBusinessLocationAttributes401Error1` [401] · `ApiV1MiscGoogleBusinessLocationAttributes403Error1` [403] · `ApiV1MiscGoogleBusinessLocationAttributes404Error1` [404] · `ApiV1MiscGoogleBusinessLocationAttributes429Error1` [429] · `ApiV1MiscGoogleBusinessLocationAttributes500Error1` [500] · `ApiV1MiscGoogleBusinessLocationAttributes502Error1` [502] · `ApiV1MiscGoogleBusinessLocationAttributes503Error1` [503] · `ApiV1MiscGoogleBusinessLocationAttributes504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessLocationAttributesRequest` | `bundle_social/models/api_v1_misc_google_business_location_attributes_request.py` |
| `ApiV1MiscGoogleBusinessLocationAttributesRequestDict` | `bundle_social/models/api_v1_misc_google_business_location_attributes_request.py` |
| `ApiV1MiscGoogleBusinessLocationAttributesResponse` | `bundle_social/models/api_v1_misc_google_business_location_attributes_response.py` |
| `MiscGoogleBusinessUpdateAttributesErrorBody` | `bundle_social/errors/misc_google_business_update_attributes_error.py` |
| `ApiV1MiscGoogleBusinessLocationAttributes400Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes400_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributes401Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes401_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributes403Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes403_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributes404Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes404_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributes429Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes429_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributes500Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes500_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributes502Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes502_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributes503Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes503_error1.py` |
| `ApiV1MiscGoogleBusinessLocationAttributes504Error1` | `bundle_social/models/api_v1_misc_google_business_location_attributes504_error1.py` |

### client.misc.misc_google_business_update_food_menus

- **Route**: `PATCH /api/v1/misc/google-business/location/food-menus`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_update_food_menus(*, body: ApiV1MiscGoogleBusinessLocationFoodMenusRequest | ApiV1MiscGoogleBusinessLocationFoodMenusRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessLocationFoodMenusResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessLocationFoodMenusResponse, MiscGoogleBusinessUpdateFoodMenusErrorBody]`
- **Error**: `MiscGoogleBusinessUpdateFoodMenusErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessLocationFoodMenus400Error1` [400] · `ApiV1MiscGoogleBusinessLocationFoodMenus401Error1` [401] · `ApiV1MiscGoogleBusinessLocationFoodMenus403Error1` [403] · `ApiV1MiscGoogleBusinessLocationFoodMenus404Error1` [404] · `ApiV1MiscGoogleBusinessLocationFoodMenus429Error1` [429] · `ApiV1MiscGoogleBusinessLocationFoodMenus500Error1` [500] · `ApiV1MiscGoogleBusinessLocationFoodMenus502Error1` [502] · `ApiV1MiscGoogleBusinessLocationFoodMenus503Error1` [503] · `ApiV1MiscGoogleBusinessLocationFoodMenus504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessLocationFoodMenusRequest` | `bundle_social/models/api_v1_misc_google_business_location_food_menus_request.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenusRequestDict` | `bundle_social/models/api_v1_misc_google_business_location_food_menus_request.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenusResponse` | `bundle_social/models/api_v1_misc_google_business_location_food_menus_response.py` |
| `MiscGoogleBusinessUpdateFoodMenusErrorBody` | `bundle_social/errors/misc_google_business_update_food_menus_error.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus400Error1` | `bundle_social/models/api_v1_misc_google_business_location_food_menus400_error1.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus401Error1` | `bundle_social/models/api_v1_misc_google_business_location_food_menus401_error1.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus403Error1` | `bundle_social/models/api_v1_misc_google_business_location_food_menus403_error1.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus404Error1` | `bundle_social/models/api_v1_misc_google_business_location_food_menus404_error1.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus429Error1` | `bundle_social/models/api_v1_misc_google_business_location_food_menus429_error1.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus500Error1` | `bundle_social/models/api_v1_misc_google_business_location_food_menus500_error1.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus502Error1` | `bundle_social/models/api_v1_misc_google_business_location_food_menus502_error1.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus503Error1` | `bundle_social/models/api_v1_misc_google_business_location_food_menus503_error1.py` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus504Error1` | `bundle_social/models/api_v1_misc_google_business_location_food_menus504_error1.py` |

### client.misc.misc_google_business_update_hours

- **Route**: `PATCH /api/v1/misc/google-business/location/hours`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_update_hours(*, body: ApiV1MiscGoogleBusinessLocationHoursRequest | ApiV1MiscGoogleBusinessLocationHoursRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessLocationHoursResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessLocationHoursResponse, MiscGoogleBusinessUpdateHoursErrorBody]`
- **Error**: `MiscGoogleBusinessUpdateHoursErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessLocationHours400Error1` [400] · `ApiV1MiscGoogleBusinessLocationHours401Error1` [401] · `ApiV1MiscGoogleBusinessLocationHours403Error1` [403] · `ApiV1MiscGoogleBusinessLocationHours404Error1` [404] · `ApiV1MiscGoogleBusinessLocationHours429Error1` [429] · `ApiV1MiscGoogleBusinessLocationHours500Error1` [500] · `ApiV1MiscGoogleBusinessLocationHours502Error1` [502] · `ApiV1MiscGoogleBusinessLocationHours503Error1` [503] · `ApiV1MiscGoogleBusinessLocationHours504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessLocationHoursRequest` | `bundle_social/models/api_v1_misc_google_business_location_hours_request.py` |
| `ApiV1MiscGoogleBusinessLocationHoursRequestDict` | `bundle_social/models/api_v1_misc_google_business_location_hours_request.py` |
| `ApiV1MiscGoogleBusinessLocationHoursResponse` | `bundle_social/models/api_v1_misc_google_business_location_hours_response.py` |
| `MiscGoogleBusinessUpdateHoursErrorBody` | `bundle_social/errors/misc_google_business_update_hours_error.py` |
| `ApiV1MiscGoogleBusinessLocationHours400Error1` | `bundle_social/models/api_v1_misc_google_business_location_hours400_error1.py` |
| `ApiV1MiscGoogleBusinessLocationHours401Error1` | `bundle_social/models/api_v1_misc_google_business_location_hours401_error1.py` |
| `ApiV1MiscGoogleBusinessLocationHours403Error1` | `bundle_social/models/api_v1_misc_google_business_location_hours403_error1.py` |
| `ApiV1MiscGoogleBusinessLocationHours404Error1` | `bundle_social/models/api_v1_misc_google_business_location_hours404_error1.py` |
| `ApiV1MiscGoogleBusinessLocationHours429Error1` | `bundle_social/models/api_v1_misc_google_business_location_hours429_error1.py` |
| `ApiV1MiscGoogleBusinessLocationHours500Error1` | `bundle_social/models/api_v1_misc_google_business_location_hours500_error1.py` |
| `ApiV1MiscGoogleBusinessLocationHours502Error1` | `bundle_social/models/api_v1_misc_google_business_location_hours502_error1.py` |
| `ApiV1MiscGoogleBusinessLocationHours503Error1` | `bundle_social/models/api_v1_misc_google_business_location_hours503_error1.py` |
| `ApiV1MiscGoogleBusinessLocationHours504Error1` | `bundle_social/models/api_v1_misc_google_business_location_hours504_error1.py` |

### client.misc.misc_google_business_update_location

- **Route**: `PATCH /api/v1/misc/google-business/location`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_update_location(*, body: ApiV1MiscGoogleBusinessLocationRequest | ApiV1MiscGoogleBusinessLocationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessLocationResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessLocationResponse, MiscGoogleBusinessUpdateLocationErrorBody]`
- **Error**: `MiscGoogleBusinessUpdateLocationErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessLocation400Error1` [400] · `ApiV1MiscGoogleBusinessLocation401Error1` [401] · `ApiV1MiscGoogleBusinessLocation403Error1` [403] · `ApiV1MiscGoogleBusinessLocation404Error1` [404] · `ApiV1MiscGoogleBusinessLocation429Error1` [429] · `ApiV1MiscGoogleBusinessLocation500Error1` [500] · `ApiV1MiscGoogleBusinessLocation502Error1` [502] · `ApiV1MiscGoogleBusinessLocation503Error1` [503] · `ApiV1MiscGoogleBusinessLocation504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessLocationRequest` | `bundle_social/models/api_v1_misc_google_business_location_request.py` |
| `ApiV1MiscGoogleBusinessLocationRequestDict` | `bundle_social/models/api_v1_misc_google_business_location_request.py` |
| `ApiV1MiscGoogleBusinessLocationResponse` | `bundle_social/models/api_v1_misc_google_business_location_response.py` |
| `MiscGoogleBusinessUpdateLocationErrorBody` | `bundle_social/errors/misc_google_business_update_location_error.py` |
| `ApiV1MiscGoogleBusinessLocation400Error1` | `bundle_social/models/api_v1_misc_google_business_location400_error1.py` |
| `ApiV1MiscGoogleBusinessLocation401Error1` | `bundle_social/models/api_v1_misc_google_business_location401_error1.py` |
| `ApiV1MiscGoogleBusinessLocation403Error1` | `bundle_social/models/api_v1_misc_google_business_location403_error1.py` |
| `ApiV1MiscGoogleBusinessLocation404Error1` | `bundle_social/models/api_v1_misc_google_business_location404_error1.py` |
| `ApiV1MiscGoogleBusinessLocation429Error1` | `bundle_social/models/api_v1_misc_google_business_location429_error1.py` |
| `ApiV1MiscGoogleBusinessLocation500Error1` | `bundle_social/models/api_v1_misc_google_business_location500_error1.py` |
| `ApiV1MiscGoogleBusinessLocation502Error1` | `bundle_social/models/api_v1_misc_google_business_location502_error1.py` |
| `ApiV1MiscGoogleBusinessLocation503Error1` | `bundle_social/models/api_v1_misc_google_business_location503_error1.py` |
| `ApiV1MiscGoogleBusinessLocation504Error1` | `bundle_social/models/api_v1_misc_google_business_location504_error1.py` |

### client.misc.misc_google_business_update_place_action_link

- **Route**: `PATCH /api/v1/misc/google-business/location/place-action-links`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_update_place_action_link(*, body: ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1 | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1, MiscGoogleBusinessUpdatePlaceActionLinkErrorBody]`
- **Error**: `MiscGoogleBusinessUpdatePlaceActionLinkErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1` [400] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1` [401] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1` [403] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1` [404] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1` [429] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1` [500] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1` [502] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1` [503] · `ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links_request1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1Dict` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links_request1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links_response1.py` |
| `MiscGoogleBusinessUpdatePlaceActionLinkErrorBody` | `bundle_social/errors/misc_google_business_update_place_action_link_error.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links400_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links401_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links403_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links404_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links429_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links500_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links502_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links503_error1.py` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1` | `bundle_social/models/api_v1_misc_google_business_location_place_action_links504_error1.py` |

### client.misc.misc_google_business_update_service_list

- **Route**: `PATCH /api/v1/misc/google-business/location/service-list`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_google_business_update_service_list(*, body: ApiV1MiscGoogleBusinessLocationServiceListRequest | ApiV1MiscGoogleBusinessLocationServiceListRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscGoogleBusinessLocationServiceListResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscGoogleBusinessLocationServiceListResponse, MiscGoogleBusinessUpdateServiceListErrorBody]`
- **Error**: `MiscGoogleBusinessUpdateServiceListErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscGoogleBusinessLocationServiceList400Error1` [400] · `ApiV1MiscGoogleBusinessLocationServiceList401Error1` [401] · `ApiV1MiscGoogleBusinessLocationServiceList403Error1` [403] · `ApiV1MiscGoogleBusinessLocationServiceList404Error1` [404] · `ApiV1MiscGoogleBusinessLocationServiceList429Error1` [429] · `ApiV1MiscGoogleBusinessLocationServiceList500Error1` [500] · `ApiV1MiscGoogleBusinessLocationServiceList502Error1` [502] · `ApiV1MiscGoogleBusinessLocationServiceList503Error1` [503] · `ApiV1MiscGoogleBusinessLocationServiceList504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscGoogleBusinessLocationServiceListRequest` | `bundle_social/models/api_v1_misc_google_business_location_service_list_request.py` |
| `ApiV1MiscGoogleBusinessLocationServiceListRequestDict` | `bundle_social/models/api_v1_misc_google_business_location_service_list_request.py` |
| `ApiV1MiscGoogleBusinessLocationServiceListResponse` | `bundle_social/models/api_v1_misc_google_business_location_service_list_response.py` |
| `MiscGoogleBusinessUpdateServiceListErrorBody` | `bundle_social/errors/misc_google_business_update_service_list_error.py` |
| `ApiV1MiscGoogleBusinessLocationServiceList400Error1` | `bundle_social/models/api_v1_misc_google_business_location_service_list400_error1.py` |
| `ApiV1MiscGoogleBusinessLocationServiceList401Error1` | `bundle_social/models/api_v1_misc_google_business_location_service_list401_error1.py` |
| `ApiV1MiscGoogleBusinessLocationServiceList403Error1` | `bundle_social/models/api_v1_misc_google_business_location_service_list403_error1.py` |
| `ApiV1MiscGoogleBusinessLocationServiceList404Error1` | `bundle_social/models/api_v1_misc_google_business_location_service_list404_error1.py` |
| `ApiV1MiscGoogleBusinessLocationServiceList429Error1` | `bundle_social/models/api_v1_misc_google_business_location_service_list429_error1.py` |
| `ApiV1MiscGoogleBusinessLocationServiceList500Error1` | `bundle_social/models/api_v1_misc_google_business_location_service_list500_error1.py` |
| `ApiV1MiscGoogleBusinessLocationServiceList502Error1` | `bundle_social/models/api_v1_misc_google_business_location_service_list502_error1.py` |
| `ApiV1MiscGoogleBusinessLocationServiceList503Error1` | `bundle_social/models/api_v1_misc_google_business_location_service_list503_error1.py` |
| `ApiV1MiscGoogleBusinessLocationServiceList504Error1` | `bundle_social/models/api_v1_misc_google_business_location_service_list504_error1.py` |

### client.misc.misc_instagram_business_discovery

- **Route**: `GET /api/v1/misc/instagram/tags`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_instagram_business_discovery(team_id: str, username: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`, `username`
- **Params**: `team_id` — query `teamId` · `username` — query
- **Returns (parsed)**: `ApiV1MiscInstagramTagsResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscInstagramTagsResponse, MiscInstagramBusinessDiscoveryErrorBody]`
- **Error**: `MiscInstagramBusinessDiscoveryErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscInstagramTags400Error1` [400] · `ApiV1MiscInstagramTags401Error1` [401] · `ApiV1MiscInstagramTags403Error1` [403] · `ApiV1MiscInstagramTags404Error1` [404] · `ApiV1MiscInstagramTags429Error1` [429] · `ApiV1MiscInstagramTags500Error1` [500] · `ApiV1MiscInstagramTags502Error1` [502] · `ApiV1MiscInstagramTags503Error1` [503] · `ApiV1MiscInstagramTags504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscInstagramTagsResponse` | `bundle_social/models/api_v1_misc_instagram_tags_response.py` |
| `MiscInstagramBusinessDiscoveryErrorBody` | `bundle_social/errors/misc_instagram_business_discovery_error.py` |
| `ApiV1MiscInstagramTags400Error1` | `bundle_social/models/api_v1_misc_instagram_tags400_error1.py` |
| `ApiV1MiscInstagramTags401Error1` | `bundle_social/models/api_v1_misc_instagram_tags401_error1.py` |
| `ApiV1MiscInstagramTags403Error1` | `bundle_social/models/api_v1_misc_instagram_tags403_error1.py` |
| `ApiV1MiscInstagramTags404Error1` | `bundle_social/models/api_v1_misc_instagram_tags404_error1.py` |
| `ApiV1MiscInstagramTags429Error1` | `bundle_social/models/api_v1_misc_instagram_tags429_error1.py` |
| `ApiV1MiscInstagramTags500Error1` | `bundle_social/models/api_v1_misc_instagram_tags500_error1.py` |
| `ApiV1MiscInstagramTags502Error1` | `bundle_social/models/api_v1_misc_instagram_tags502_error1.py` |
| `ApiV1MiscInstagramTags503Error1` | `bundle_social/models/api_v1_misc_instagram_tags503_error1.py` |
| `ApiV1MiscInstagramTags504Error1` | `bundle_social/models/api_v1_misc_instagram_tags504_error1.py` |

### client.misc.misc_instagram_delete_comment

- **Route**: `DELETE /api/v1/misc/instagram/comment`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_instagram_delete_comment(*, body: ApiV1MiscInstagramCommentRequest | ApiV1MiscInstagramCommentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscInstagramCommentResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscInstagramCommentResponse, MiscInstagramDeleteCommentErrorBody]`
- **Error**: `MiscInstagramDeleteCommentErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscInstagramComment400Error1` [400] · `ApiV1MiscInstagramComment401Error1` [401] · `ApiV1MiscInstagramComment403Error1` [403] · `ApiV1MiscInstagramComment404Error1` [404] · `ApiV1MiscInstagramComment429Error1` [429] · `ApiV1MiscInstagramComment500Error1` [500] · `ApiV1MiscInstagramComment502Error1` [502] · `ApiV1MiscInstagramComment503Error1` [503] · `ApiV1MiscInstagramComment504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscInstagramCommentRequest` | `bundle_social/models/api_v1_misc_instagram_comment_request.py` |
| `ApiV1MiscInstagramCommentRequestDict` | `bundle_social/models/api_v1_misc_instagram_comment_request.py` |
| `ApiV1MiscInstagramCommentResponse` | `bundle_social/models/api_v1_misc_instagram_comment_response.py` |
| `MiscInstagramDeleteCommentErrorBody` | `bundle_social/errors/misc_instagram_delete_comment_error.py` |
| `ApiV1MiscInstagramComment400Error1` | `bundle_social/models/api_v1_misc_instagram_comment400_error1.py` |
| `ApiV1MiscInstagramComment401Error1` | `bundle_social/models/api_v1_misc_instagram_comment401_error1.py` |
| `ApiV1MiscInstagramComment403Error1` | `bundle_social/models/api_v1_misc_instagram_comment403_error1.py` |
| `ApiV1MiscInstagramComment404Error1` | `bundle_social/models/api_v1_misc_instagram_comment404_error1.py` |
| `ApiV1MiscInstagramComment429Error1` | `bundle_social/models/api_v1_misc_instagram_comment429_error1.py` |
| `ApiV1MiscInstagramComment500Error1` | `bundle_social/models/api_v1_misc_instagram_comment500_error1.py` |
| `ApiV1MiscInstagramComment502Error1` | `bundle_social/models/api_v1_misc_instagram_comment502_error1.py` |
| `ApiV1MiscInstagramComment503Error1` | `bundle_social/models/api_v1_misc_instagram_comment503_error1.py` |
| `ApiV1MiscInstagramComment504Error1` | `bundle_social/models/api_v1_misc_instagram_comment504_error1.py` |

### client.misc.misc_instagram_search_audio

- **Route**: `GET /api/v1/misc/instagram/audio`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_instagram_search_audio(team_id: str, audio_type: AudioTypeOrStr, *, search_query: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`, `audio_type`
- **Params**: `team_id` — query `teamId` · `audio_type` — query `audioType` · `search_query` — query `searchQuery`
- **Returns (parsed)**: `ApiV1MiscInstagramAudioResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscInstagramAudioResponse, MiscInstagramSearchAudioErrorBody]`
- **Error**: `MiscInstagramSearchAudioErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscInstagramAudio400Error1` [400] · `ApiV1MiscInstagramAudio401Error1` [401] · `ApiV1MiscInstagramAudio403Error1` [403] · `ApiV1MiscInstagramAudio404Error1` [404] · `ApiV1MiscInstagramAudio429Error1` [429] · `ApiV1MiscInstagramAudio500Error1` [500] · `ApiV1MiscInstagramAudio502Error1` [502] · `ApiV1MiscInstagramAudio503Error1` [503] · `ApiV1MiscInstagramAudio504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AudioTypeOrStr` | `bundle_social/models/enums/audio_type.py` |
| `ApiV1MiscInstagramAudioResponse` | `bundle_social/models/api_v1_misc_instagram_audio_response.py` |
| `MiscInstagramSearchAudioErrorBody` | `bundle_social/errors/misc_instagram_search_audio_error.py` |
| `ApiV1MiscInstagramAudio400Error1` | `bundle_social/models/api_v1_misc_instagram_audio400_error1.py` |
| `ApiV1MiscInstagramAudio401Error1` | `bundle_social/models/api_v1_misc_instagram_audio401_error1.py` |
| `ApiV1MiscInstagramAudio403Error1` | `bundle_social/models/api_v1_misc_instagram_audio403_error1.py` |
| `ApiV1MiscInstagramAudio404Error1` | `bundle_social/models/api_v1_misc_instagram_audio404_error1.py` |
| `ApiV1MiscInstagramAudio429Error1` | `bundle_social/models/api_v1_misc_instagram_audio429_error1.py` |
| `ApiV1MiscInstagramAudio500Error1` | `bundle_social/models/api_v1_misc_instagram_audio500_error1.py` |
| `ApiV1MiscInstagramAudio502Error1` | `bundle_social/models/api_v1_misc_instagram_audio502_error1.py` |
| `ApiV1MiscInstagramAudio503Error1` | `bundle_social/models/api_v1_misc_instagram_audio503_error1.py` |
| `ApiV1MiscInstagramAudio504Error1` | `bundle_social/models/api_v1_misc_instagram_audio504_error1.py` |

### client.misc.misc_instagram_search_locations

- **Route**: `GET /api/v1/misc/instagram/locations`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_instagram_search_locations(team_id: str, q: str, *, limit: int | None = 10, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`, `q`
- **Params**: `team_id` — query `teamId` · `q` — query · `limit` — query
- **Returns (parsed)**: `ApiV1MiscInstagramLocationsResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscInstagramLocationsResponse, MiscInstagramSearchLocationsErrorBody]`
- **Error**: `MiscInstagramSearchLocationsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscInstagramLocations400Error1` [400] · `ApiV1MiscInstagramLocations401Error1` [401] · `ApiV1MiscInstagramLocations403Error1` [403] · `ApiV1MiscInstagramLocations404Error1` [404] · `ApiV1MiscInstagramLocations429Error1` [429] · `ApiV1MiscInstagramLocations500Error1` [500] · `ApiV1MiscInstagramLocations502Error1` [502] · `ApiV1MiscInstagramLocations503Error1` [503] · `ApiV1MiscInstagramLocations504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscInstagramLocationsResponse` | `bundle_social/models/api_v1_misc_instagram_locations_response.py` |
| `MiscInstagramSearchLocationsErrorBody` | `bundle_social/errors/misc_instagram_search_locations_error.py` |
| `ApiV1MiscInstagramLocations400Error1` | `bundle_social/models/api_v1_misc_instagram_locations400_error1.py` |
| `ApiV1MiscInstagramLocations401Error1` | `bundle_social/models/api_v1_misc_instagram_locations401_error1.py` |
| `ApiV1MiscInstagramLocations403Error1` | `bundle_social/models/api_v1_misc_instagram_locations403_error1.py` |
| `ApiV1MiscInstagramLocations404Error1` | `bundle_social/models/api_v1_misc_instagram_locations404_error1.py` |
| `ApiV1MiscInstagramLocations429Error1` | `bundle_social/models/api_v1_misc_instagram_locations429_error1.py` |
| `ApiV1MiscInstagramLocations500Error1` | `bundle_social/models/api_v1_misc_instagram_locations500_error1.py` |
| `ApiV1MiscInstagramLocations502Error1` | `bundle_social/models/api_v1_misc_instagram_locations502_error1.py` |
| `ApiV1MiscInstagramLocations503Error1` | `bundle_social/models/api_v1_misc_instagram_locations503_error1.py` |
| `ApiV1MiscInstagramLocations504Error1` | `bundle_social/models/api_v1_misc_instagram_locations504_error1.py` |

### client.misc.misc_linkedin_build_commentary

- **Route**: `POST /api/v1/misc/linkedin/mentions/builder`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_linkedin_build_commentary(*, body: ApiV1MiscLinkedinMentionsBuilderRequest | ApiV1MiscLinkedinMentionsBuilderRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscLinkedinMentionsBuilderResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscLinkedinMentionsBuilderResponse, MiscLinkedinBuildCommentaryErrorBody]`
- **Error**: `MiscLinkedinBuildCommentaryErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscLinkedinMentionsBuilder400Error1` [400] · `ApiV1MiscLinkedinMentionsBuilder401Error1` [401] · `ApiV1MiscLinkedinMentionsBuilder403Error1` [403] · `ApiV1MiscLinkedinMentionsBuilder404Error1` [404] · `ApiV1MiscLinkedinMentionsBuilder429Error1` [429] · `ApiV1MiscLinkedinMentionsBuilder500Error1` [500] · `ApiV1MiscLinkedinMentionsBuilder502Error1` [502] · `ApiV1MiscLinkedinMentionsBuilder503Error1` [503] · `ApiV1MiscLinkedinMentionsBuilder504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscLinkedinMentionsBuilderRequest` | `bundle_social/models/api_v1_misc_linkedin_mentions_builder_request.py` |
| `ApiV1MiscLinkedinMentionsBuilderRequestDict` | `bundle_social/models/api_v1_misc_linkedin_mentions_builder_request.py` |
| `ApiV1MiscLinkedinMentionsBuilderResponse` | `bundle_social/models/api_v1_misc_linkedin_mentions_builder_response.py` |
| `MiscLinkedinBuildCommentaryErrorBody` | `bundle_social/errors/misc_linkedin_build_commentary_error.py` |
| `ApiV1MiscLinkedinMentionsBuilder400Error1` | `bundle_social/models/api_v1_misc_linkedin_mentions_builder400_error1.py` |
| `ApiV1MiscLinkedinMentionsBuilder401Error1` | `bundle_social/models/api_v1_misc_linkedin_mentions_builder401_error1.py` |
| `ApiV1MiscLinkedinMentionsBuilder403Error1` | `bundle_social/models/api_v1_misc_linkedin_mentions_builder403_error1.py` |
| `ApiV1MiscLinkedinMentionsBuilder404Error1` | `bundle_social/models/api_v1_misc_linkedin_mentions_builder404_error1.py` |
| `ApiV1MiscLinkedinMentionsBuilder429Error1` | `bundle_social/models/api_v1_misc_linkedin_mentions_builder429_error1.py` |
| `ApiV1MiscLinkedinMentionsBuilder500Error1` | `bundle_social/models/api_v1_misc_linkedin_mentions_builder500_error1.py` |
| `ApiV1MiscLinkedinMentionsBuilder502Error1` | `bundle_social/models/api_v1_misc_linkedin_mentions_builder502_error1.py` |
| `ApiV1MiscLinkedinMentionsBuilder503Error1` | `bundle_social/models/api_v1_misc_linkedin_mentions_builder503_error1.py` |
| `ApiV1MiscLinkedinMentionsBuilder504Error1` | `bundle_social/models/api_v1_misc_linkedin_mentions_builder504_error1.py` |

### client.misc.misc_linkedin_delete_comment

- **Route**: `DELETE /api/v1/misc/linkedin/comment`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_linkedin_delete_comment(*, body: ApiV1MiscLinkedinCommentRequest1 | ApiV1MiscLinkedinCommentRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscLinkedinCommentResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscLinkedinCommentResponse1, MiscLinkedinDeleteCommentErrorBody]`
- **Error**: `MiscLinkedinDeleteCommentErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscLinkedinComment400Error1` [400] · `ApiV1MiscLinkedinComment401Error1` [401] · `ApiV1MiscLinkedinComment403Error1` [403] · `ApiV1MiscLinkedinComment404Error1` [404] · `ApiV1MiscLinkedinComment429Error1` [429] · `ApiV1MiscLinkedinComment500Error1` [500] · `ApiV1MiscLinkedinComment502Error1` [502] · `ApiV1MiscLinkedinComment503Error1` [503] · `ApiV1MiscLinkedinComment504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscLinkedinCommentRequest1` | `bundle_social/models/api_v1_misc_linkedin_comment_request1.py` |
| `ApiV1MiscLinkedinCommentRequest1Dict` | `bundle_social/models/api_v1_misc_linkedin_comment_request1.py` |
| `ApiV1MiscLinkedinCommentResponse1` | `bundle_social/models/api_v1_misc_linkedin_comment_response1.py` |
| `MiscLinkedinDeleteCommentErrorBody` | `bundle_social/errors/misc_linkedin_delete_comment_error.py` |
| `ApiV1MiscLinkedinComment400Error1` | `bundle_social/models/api_v1_misc_linkedin_comment400_error1.py` |
| `ApiV1MiscLinkedinComment401Error1` | `bundle_social/models/api_v1_misc_linkedin_comment401_error1.py` |
| `ApiV1MiscLinkedinComment403Error1` | `bundle_social/models/api_v1_misc_linkedin_comment403_error1.py` |
| `ApiV1MiscLinkedinComment404Error1` | `bundle_social/models/api_v1_misc_linkedin_comment404_error1.py` |
| `ApiV1MiscLinkedinComment429Error1` | `bundle_social/models/api_v1_misc_linkedin_comment429_error1.py` |
| `ApiV1MiscLinkedinComment500Error1` | `bundle_social/models/api_v1_misc_linkedin_comment500_error1.py` |
| `ApiV1MiscLinkedinComment502Error1` | `bundle_social/models/api_v1_misc_linkedin_comment502_error1.py` |
| `ApiV1MiscLinkedinComment503Error1` | `bundle_social/models/api_v1_misc_linkedin_comment503_error1.py` |
| `ApiV1MiscLinkedinComment504Error1` | `bundle_social/models/api_v1_misc_linkedin_comment504_error1.py` |

### client.misc.misc_linkedin_delete_post

- **Route**: `DELETE /api/v1/misc/linkedin/post`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_linkedin_delete_post(*, body: ApiV1MiscLinkedinPostRequest1 | ApiV1MiscLinkedinPostRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscLinkedinPostResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscLinkedinPostResponse1, MiscLinkedinDeletePostErrorBody]`
- **Error**: `MiscLinkedinDeletePostErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscLinkedinPost400Error1` [400] · `ApiV1MiscLinkedinPost401Error1` [401] · `ApiV1MiscLinkedinPost403Error1` [403] · `ApiV1MiscLinkedinPost404Error1` [404] · `ApiV1MiscLinkedinPost429Error1` [429] · `ApiV1MiscLinkedinPost500Error1` [500] · `ApiV1MiscLinkedinPost502Error1` [502] · `ApiV1MiscLinkedinPost503Error1` [503] · `ApiV1MiscLinkedinPost504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscLinkedinPostRequest1` | `bundle_social/models/api_v1_misc_linkedin_post_request1.py` |
| `ApiV1MiscLinkedinPostRequest1Dict` | `bundle_social/models/api_v1_misc_linkedin_post_request1.py` |
| `ApiV1MiscLinkedinPostResponse1` | `bundle_social/models/api_v1_misc_linkedin_post_response1.py` |
| `MiscLinkedinDeletePostErrorBody` | `bundle_social/errors/misc_linkedin_delete_post_error.py` |
| `ApiV1MiscLinkedinPost400Error1` | `bundle_social/models/api_v1_misc_linkedin_post400_error1.py` |
| `ApiV1MiscLinkedinPost401Error1` | `bundle_social/models/api_v1_misc_linkedin_post401_error1.py` |
| `ApiV1MiscLinkedinPost403Error1` | `bundle_social/models/api_v1_misc_linkedin_post403_error1.py` |
| `ApiV1MiscLinkedinPost404Error1` | `bundle_social/models/api_v1_misc_linkedin_post404_error1.py` |
| `ApiV1MiscLinkedinPost429Error1` | `bundle_social/models/api_v1_misc_linkedin_post429_error1.py` |
| `ApiV1MiscLinkedinPost500Error1` | `bundle_social/models/api_v1_misc_linkedin_post500_error1.py` |
| `ApiV1MiscLinkedinPost502Error1` | `bundle_social/models/api_v1_misc_linkedin_post502_error1.py` |
| `ApiV1MiscLinkedinPost503Error1` | `bundle_social/models/api_v1_misc_linkedin_post503_error1.py` |
| `ApiV1MiscLinkedinPost504Error1` | `bundle_social/models/api_v1_misc_linkedin_post504_error1.py` |

### client.misc.misc_linkedin_edit_comment

- **Route**: `PATCH /api/v1/misc/linkedin/comment`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_linkedin_edit_comment(*, body: ApiV1MiscLinkedinCommentRequest | ApiV1MiscLinkedinCommentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscLinkedinCommentResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscLinkedinCommentResponse, MiscLinkedinEditCommentErrorBody]`
- **Error**: `MiscLinkedinEditCommentErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscLinkedinComment400Error1` [400] · `ApiV1MiscLinkedinComment401Error1` [401] · `ApiV1MiscLinkedinComment403Error1` [403] · `ApiV1MiscLinkedinComment404Error1` [404] · `ApiV1MiscLinkedinComment429Error1` [429] · `ApiV1MiscLinkedinComment500Error1` [500] · `ApiV1MiscLinkedinComment502Error1` [502] · `ApiV1MiscLinkedinComment503Error1` [503] · `ApiV1MiscLinkedinComment504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscLinkedinCommentRequest` | `bundle_social/models/api_v1_misc_linkedin_comment_request.py` |
| `ApiV1MiscLinkedinCommentRequestDict` | `bundle_social/models/api_v1_misc_linkedin_comment_request.py` |
| `ApiV1MiscLinkedinCommentResponse` | `bundle_social/models/api_v1_misc_linkedin_comment_response.py` |
| `MiscLinkedinEditCommentErrorBody` | `bundle_social/errors/misc_linkedin_edit_comment_error.py` |
| `ApiV1MiscLinkedinComment400Error1` | `bundle_social/models/api_v1_misc_linkedin_comment400_error1.py` |
| `ApiV1MiscLinkedinComment401Error1` | `bundle_social/models/api_v1_misc_linkedin_comment401_error1.py` |
| `ApiV1MiscLinkedinComment403Error1` | `bundle_social/models/api_v1_misc_linkedin_comment403_error1.py` |
| `ApiV1MiscLinkedinComment404Error1` | `bundle_social/models/api_v1_misc_linkedin_comment404_error1.py` |
| `ApiV1MiscLinkedinComment429Error1` | `bundle_social/models/api_v1_misc_linkedin_comment429_error1.py` |
| `ApiV1MiscLinkedinComment500Error1` | `bundle_social/models/api_v1_misc_linkedin_comment500_error1.py` |
| `ApiV1MiscLinkedinComment502Error1` | `bundle_social/models/api_v1_misc_linkedin_comment502_error1.py` |
| `ApiV1MiscLinkedinComment503Error1` | `bundle_social/models/api_v1_misc_linkedin_comment503_error1.py` |
| `ApiV1MiscLinkedinComment504Error1` | `bundle_social/models/api_v1_misc_linkedin_comment504_error1.py` |

### client.misc.misc_linkedin_edit_post

- **Route**: `PATCH /api/v1/misc/linkedin/post`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_linkedin_edit_post(*, body: ApiV1MiscLinkedinPostRequest | ApiV1MiscLinkedinPostRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscLinkedinPostResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscLinkedinPostResponse, MiscLinkedinEditPostErrorBody]`
- **Error**: `MiscLinkedinEditPostErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscLinkedinPost400Error1` [400] · `ApiV1MiscLinkedinPost401Error1` [401] · `ApiV1MiscLinkedinPost403Error1` [403] · `ApiV1MiscLinkedinPost404Error1` [404] · `ApiV1MiscLinkedinPost429Error1` [429] · `ApiV1MiscLinkedinPost500Error1` [500] · `ApiV1MiscLinkedinPost502Error1` [502] · `ApiV1MiscLinkedinPost503Error1` [503] · `ApiV1MiscLinkedinPost504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscLinkedinPostRequest` | `bundle_social/models/api_v1_misc_linkedin_post_request.py` |
| `ApiV1MiscLinkedinPostRequestDict` | `bundle_social/models/api_v1_misc_linkedin_post_request.py` |
| `ApiV1MiscLinkedinPostResponse` | `bundle_social/models/api_v1_misc_linkedin_post_response.py` |
| `MiscLinkedinEditPostErrorBody` | `bundle_social/errors/misc_linkedin_edit_post_error.py` |
| `ApiV1MiscLinkedinPost400Error1` | `bundle_social/models/api_v1_misc_linkedin_post400_error1.py` |
| `ApiV1MiscLinkedinPost401Error1` | `bundle_social/models/api_v1_misc_linkedin_post401_error1.py` |
| `ApiV1MiscLinkedinPost403Error1` | `bundle_social/models/api_v1_misc_linkedin_post403_error1.py` |
| `ApiV1MiscLinkedinPost404Error1` | `bundle_social/models/api_v1_misc_linkedin_post404_error1.py` |
| `ApiV1MiscLinkedinPost429Error1` | `bundle_social/models/api_v1_misc_linkedin_post429_error1.py` |
| `ApiV1MiscLinkedinPost500Error1` | `bundle_social/models/api_v1_misc_linkedin_post500_error1.py` |
| `ApiV1MiscLinkedinPost502Error1` | `bundle_social/models/api_v1_misc_linkedin_post502_error1.py` |
| `ApiV1MiscLinkedinPost503Error1` | `bundle_social/models/api_v1_misc_linkedin_post503_error1.py` |
| `ApiV1MiscLinkedinPost504Error1` | `bundle_social/models/api_v1_misc_linkedin_post504_error1.py` |

### client.misc.misc_linkedin_get_tags

- **Route**: `GET /api/v1/misc/linkedin/mentions/tags`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_linkedin_get_tags(team_id: str, *, q: str | None = None, url: str | None = None, display_name: str | None = None, scope: ScopeOrStr | None = Scope.ALL, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId` · `q` — query · `url` — query · `display_name` — query `displayName` · `scope` — query
- **Returns (parsed)**: `ApiV1MiscLinkedinMentionsTagsResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscLinkedinMentionsTagsResponse, MiscLinkedinGetTagsErrorBody]`
- **Error**: `MiscLinkedinGetTagsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscLinkedinMentionsTags400Error1` [400] · `ApiV1MiscLinkedinMentionsTags401Error1` [401] · `ApiV1MiscLinkedinMentionsTags403Error1` [403] · `ApiV1MiscLinkedinMentionsTags404Error1` [404] · `ApiV1MiscLinkedinMentionsTags429Error1` [429] · `ApiV1MiscLinkedinMentionsTags500Error1` [500] · `ApiV1MiscLinkedinMentionsTags502Error1` [502] · `ApiV1MiscLinkedinMentionsTags503Error1` [503] · `ApiV1MiscLinkedinMentionsTags504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScopeOrStr` | `bundle_social/models/enums/scope.py` |
| `ApiV1MiscLinkedinMentionsTagsResponse` | `bundle_social/models/api_v1_misc_linkedin_mentions_tags_response.py` |
| `MiscLinkedinGetTagsErrorBody` | `bundle_social/errors/misc_linkedin_get_tags_error.py` |
| `ApiV1MiscLinkedinMentionsTags400Error1` | `bundle_social/models/api_v1_misc_linkedin_mentions_tags400_error1.py` |
| `ApiV1MiscLinkedinMentionsTags401Error1` | `bundle_social/models/api_v1_misc_linkedin_mentions_tags401_error1.py` |
| `ApiV1MiscLinkedinMentionsTags403Error1` | `bundle_social/models/api_v1_misc_linkedin_mentions_tags403_error1.py` |
| `ApiV1MiscLinkedinMentionsTags404Error1` | `bundle_social/models/api_v1_misc_linkedin_mentions_tags404_error1.py` |
| `ApiV1MiscLinkedinMentionsTags429Error1` | `bundle_social/models/api_v1_misc_linkedin_mentions_tags429_error1.py` |
| `ApiV1MiscLinkedinMentionsTags500Error1` | `bundle_social/models/api_v1_misc_linkedin_mentions_tags500_error1.py` |
| `ApiV1MiscLinkedinMentionsTags502Error1` | `bundle_social/models/api_v1_misc_linkedin_mentions_tags502_error1.py` |
| `ApiV1MiscLinkedinMentionsTags503Error1` | `bundle_social/models/api_v1_misc_linkedin_mentions_tags503_error1.py` |
| `ApiV1MiscLinkedinMentionsTags504Error1` | `bundle_social/models/api_v1_misc_linkedin_mentions_tags504_error1.py` |

### client.misc.misc_linkedin_reshare_post

- **Route**: `POST /api/v1/misc/linkedin/post/reshare`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_linkedin_reshare_post(*, body: ApiV1MiscLinkedinPostReshareRequest | ApiV1MiscLinkedinPostReshareRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscLinkedinPostReshareResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscLinkedinPostReshareResponse, MiscLinkedinResharePostErrorBody]`
- **Error**: `MiscLinkedinResharePostErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscLinkedinPostReshare400Error1` [400] · `ApiV1MiscLinkedinPostReshare401Error1` [401] · `ApiV1MiscLinkedinPostReshare403Error1` [403] · `ApiV1MiscLinkedinPostReshare404Error1` [404] · `ApiV1MiscLinkedinPostReshare422Error1` [422] · `ApiV1MiscLinkedinPostReshare429Error1` [429] · `ApiV1MiscLinkedinPostReshare500Error1` [500] · `ApiV1MiscLinkedinPostReshare502Error1` [502] · `ApiV1MiscLinkedinPostReshare503Error1` [503] · `ApiV1MiscLinkedinPostReshare504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscLinkedinPostReshareRequest` | `bundle_social/models/api_v1_misc_linkedin_post_reshare_request.py` |
| `ApiV1MiscLinkedinPostReshareRequestDict` | `bundle_social/models/api_v1_misc_linkedin_post_reshare_request.py` |
| `ApiV1MiscLinkedinPostReshareResponse` | `bundle_social/models/api_v1_misc_linkedin_post_reshare_response.py` |
| `MiscLinkedinResharePostErrorBody` | `bundle_social/errors/misc_linkedin_reshare_post_error.py` |
| `ApiV1MiscLinkedinPostReshare400Error1` | `bundle_social/models/api_v1_misc_linkedin_post_reshare400_error1.py` |
| `ApiV1MiscLinkedinPostReshare401Error1` | `bundle_social/models/api_v1_misc_linkedin_post_reshare401_error1.py` |
| `ApiV1MiscLinkedinPostReshare403Error1` | `bundle_social/models/api_v1_misc_linkedin_post_reshare403_error1.py` |
| `ApiV1MiscLinkedinPostReshare404Error1` | `bundle_social/models/api_v1_misc_linkedin_post_reshare404_error1.py` |
| `ApiV1MiscLinkedinPostReshare422Error1` | `bundle_social/models/api_v1_misc_linkedin_post_reshare422_error1.py` |
| `ApiV1MiscLinkedinPostReshare429Error1` | `bundle_social/models/api_v1_misc_linkedin_post_reshare429_error1.py` |
| `ApiV1MiscLinkedinPostReshare500Error1` | `bundle_social/models/api_v1_misc_linkedin_post_reshare500_error1.py` |
| `ApiV1MiscLinkedinPostReshare502Error1` | `bundle_social/models/api_v1_misc_linkedin_post_reshare502_error1.py` |
| `ApiV1MiscLinkedinPostReshare503Error1` | `bundle_social/models/api_v1_misc_linkedin_post_reshare503_error1.py` |
| `ApiV1MiscLinkedinPostReshare504Error1` | `bundle_social/models/api_v1_misc_linkedin_post_reshare504_error1.py` |

### client.misc.misc_mastodon_delete_comment

- **Route**: `DELETE /api/v1/misc/mastodon/comment`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_mastodon_delete_comment(*, body: ApiV1MiscMastodonCommentRequest1 | ApiV1MiscMastodonCommentRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscMastodonCommentResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscMastodonCommentResponse1, MiscMastodonDeleteCommentErrorBody]`
- **Error**: `MiscMastodonDeleteCommentErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscMastodonComment400Error1` [400] · `ApiV1MiscMastodonComment401Error1` [401] · `ApiV1MiscMastodonComment403Error1` [403] · `ApiV1MiscMastodonComment404Error1` [404] · `ApiV1MiscMastodonComment429Error1` [429] · `ApiV1MiscMastodonComment500Error1` [500] · `ApiV1MiscMastodonComment502Error1` [502] · `ApiV1MiscMastodonComment503Error1` [503] · `ApiV1MiscMastodonComment504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscMastodonCommentRequest1` | `bundle_social/models/api_v1_misc_mastodon_comment_request1.py` |
| `ApiV1MiscMastodonCommentRequest1Dict` | `bundle_social/models/api_v1_misc_mastodon_comment_request1.py` |
| `ApiV1MiscMastodonCommentResponse1` | `bundle_social/models/api_v1_misc_mastodon_comment_response1.py` |
| `MiscMastodonDeleteCommentErrorBody` | `bundle_social/errors/misc_mastodon_delete_comment_error.py` |
| `ApiV1MiscMastodonComment400Error1` | `bundle_social/models/api_v1_misc_mastodon_comment400_error1.py` |
| `ApiV1MiscMastodonComment401Error1` | `bundle_social/models/api_v1_misc_mastodon_comment401_error1.py` |
| `ApiV1MiscMastodonComment403Error1` | `bundle_social/models/api_v1_misc_mastodon_comment403_error1.py` |
| `ApiV1MiscMastodonComment404Error1` | `bundle_social/models/api_v1_misc_mastodon_comment404_error1.py` |
| `ApiV1MiscMastodonComment429Error1` | `bundle_social/models/api_v1_misc_mastodon_comment429_error1.py` |
| `ApiV1MiscMastodonComment500Error1` | `bundle_social/models/api_v1_misc_mastodon_comment500_error1.py` |
| `ApiV1MiscMastodonComment502Error1` | `bundle_social/models/api_v1_misc_mastodon_comment502_error1.py` |
| `ApiV1MiscMastodonComment503Error1` | `bundle_social/models/api_v1_misc_mastodon_comment503_error1.py` |
| `ApiV1MiscMastodonComment504Error1` | `bundle_social/models/api_v1_misc_mastodon_comment504_error1.py` |

### client.misc.misc_mastodon_delete_status

- **Route**: `DELETE /api/v1/misc/mastodon/status`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_mastodon_delete_status(*, body: ApiV1MiscMastodonStatusRequest1 | ApiV1MiscMastodonStatusRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscMastodonStatusResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscMastodonStatusResponse1, MiscMastodonDeleteStatusErrorBody]`
- **Error**: `MiscMastodonDeleteStatusErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscMastodonStatus400Error1` [400] · `ApiV1MiscMastodonStatus401Error1` [401] · `ApiV1MiscMastodonStatus403Error1` [403] · `ApiV1MiscMastodonStatus404Error1` [404] · `ApiV1MiscMastodonStatus429Error1` [429] · `ApiV1MiscMastodonStatus500Error1` [500] · `ApiV1MiscMastodonStatus502Error1` [502] · `ApiV1MiscMastodonStatus503Error1` [503] · `ApiV1MiscMastodonStatus504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscMastodonStatusRequest1` | `bundle_social/models/api_v1_misc_mastodon_status_request1.py` |
| `ApiV1MiscMastodonStatusRequest1Dict` | `bundle_social/models/api_v1_misc_mastodon_status_request1.py` |
| `ApiV1MiscMastodonStatusResponse1` | `bundle_social/models/api_v1_misc_mastodon_status_response1.py` |
| `MiscMastodonDeleteStatusErrorBody` | `bundle_social/errors/misc_mastodon_delete_status_error.py` |
| `ApiV1MiscMastodonStatus400Error1` | `bundle_social/models/api_v1_misc_mastodon_status400_error1.py` |
| `ApiV1MiscMastodonStatus401Error1` | `bundle_social/models/api_v1_misc_mastodon_status401_error1.py` |
| `ApiV1MiscMastodonStatus403Error1` | `bundle_social/models/api_v1_misc_mastodon_status403_error1.py` |
| `ApiV1MiscMastodonStatus404Error1` | `bundle_social/models/api_v1_misc_mastodon_status404_error1.py` |
| `ApiV1MiscMastodonStatus429Error1` | `bundle_social/models/api_v1_misc_mastodon_status429_error1.py` |
| `ApiV1MiscMastodonStatus500Error1` | `bundle_social/models/api_v1_misc_mastodon_status500_error1.py` |
| `ApiV1MiscMastodonStatus502Error1` | `bundle_social/models/api_v1_misc_mastodon_status502_error1.py` |
| `ApiV1MiscMastodonStatus503Error1` | `bundle_social/models/api_v1_misc_mastodon_status503_error1.py` |
| `ApiV1MiscMastodonStatus504Error1` | `bundle_social/models/api_v1_misc_mastodon_status504_error1.py` |

### client.misc.misc_mastodon_edit_comment

- **Route**: `PATCH /api/v1/misc/mastodon/comment`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_mastodon_edit_comment(*, body: ApiV1MiscMastodonCommentRequest | ApiV1MiscMastodonCommentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscMastodonCommentResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscMastodonCommentResponse, MiscMastodonEditCommentErrorBody]`
- **Error**: `MiscMastodonEditCommentErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscMastodonComment400Error1` [400] · `ApiV1MiscMastodonComment401Error1` [401] · `ApiV1MiscMastodonComment403Error1` [403] · `ApiV1MiscMastodonComment404Error1` [404] · `ApiV1MiscMastodonComment429Error1` [429] · `ApiV1MiscMastodonComment500Error1` [500] · `ApiV1MiscMastodonComment502Error1` [502] · `ApiV1MiscMastodonComment503Error1` [503] · `ApiV1MiscMastodonComment504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscMastodonCommentRequest` | `bundle_social/models/api_v1_misc_mastodon_comment_request.py` |
| `ApiV1MiscMastodonCommentRequestDict` | `bundle_social/models/api_v1_misc_mastodon_comment_request.py` |
| `ApiV1MiscMastodonCommentResponse` | `bundle_social/models/api_v1_misc_mastodon_comment_response.py` |
| `MiscMastodonEditCommentErrorBody` | `bundle_social/errors/misc_mastodon_edit_comment_error.py` |
| `ApiV1MiscMastodonComment400Error1` | `bundle_social/models/api_v1_misc_mastodon_comment400_error1.py` |
| `ApiV1MiscMastodonComment401Error1` | `bundle_social/models/api_v1_misc_mastodon_comment401_error1.py` |
| `ApiV1MiscMastodonComment403Error1` | `bundle_social/models/api_v1_misc_mastodon_comment403_error1.py` |
| `ApiV1MiscMastodonComment404Error1` | `bundle_social/models/api_v1_misc_mastodon_comment404_error1.py` |
| `ApiV1MiscMastodonComment429Error1` | `bundle_social/models/api_v1_misc_mastodon_comment429_error1.py` |
| `ApiV1MiscMastodonComment500Error1` | `bundle_social/models/api_v1_misc_mastodon_comment500_error1.py` |
| `ApiV1MiscMastodonComment502Error1` | `bundle_social/models/api_v1_misc_mastodon_comment502_error1.py` |
| `ApiV1MiscMastodonComment503Error1` | `bundle_social/models/api_v1_misc_mastodon_comment503_error1.py` |
| `ApiV1MiscMastodonComment504Error1` | `bundle_social/models/api_v1_misc_mastodon_comment504_error1.py` |

### client.misc.misc_mastodon_edit_status

- **Route**: `PATCH /api/v1/misc/mastodon/status`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_mastodon_edit_status(*, body: ApiV1MiscMastodonStatusRequest | ApiV1MiscMastodonStatusRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscMastodonStatusResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscMastodonStatusResponse, MiscMastodonEditStatusErrorBody]`
- **Error**: `MiscMastodonEditStatusErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscMastodonStatus400Error1` [400] · `ApiV1MiscMastodonStatus401Error1` [401] · `ApiV1MiscMastodonStatus403Error1` [403] · `ApiV1MiscMastodonStatus404Error1` [404] · `ApiV1MiscMastodonStatus429Error1` [429] · `ApiV1MiscMastodonStatus500Error1` [500] · `ApiV1MiscMastodonStatus502Error1` [502] · `ApiV1MiscMastodonStatus503Error1` [503] · `ApiV1MiscMastodonStatus504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscMastodonStatusRequest` | `bundle_social/models/api_v1_misc_mastodon_status_request.py` |
| `ApiV1MiscMastodonStatusRequestDict` | `bundle_social/models/api_v1_misc_mastodon_status_request.py` |
| `ApiV1MiscMastodonStatusResponse` | `bundle_social/models/api_v1_misc_mastodon_status_response.py` |
| `MiscMastodonEditStatusErrorBody` | `bundle_social/errors/misc_mastodon_edit_status_error.py` |
| `ApiV1MiscMastodonStatus400Error1` | `bundle_social/models/api_v1_misc_mastodon_status400_error1.py` |
| `ApiV1MiscMastodonStatus401Error1` | `bundle_social/models/api_v1_misc_mastodon_status401_error1.py` |
| `ApiV1MiscMastodonStatus403Error1` | `bundle_social/models/api_v1_misc_mastodon_status403_error1.py` |
| `ApiV1MiscMastodonStatus404Error1` | `bundle_social/models/api_v1_misc_mastodon_status404_error1.py` |
| `ApiV1MiscMastodonStatus429Error1` | `bundle_social/models/api_v1_misc_mastodon_status429_error1.py` |
| `ApiV1MiscMastodonStatus500Error1` | `bundle_social/models/api_v1_misc_mastodon_status500_error1.py` |
| `ApiV1MiscMastodonStatus502Error1` | `bundle_social/models/api_v1_misc_mastodon_status502_error1.py` |
| `ApiV1MiscMastodonStatus503Error1` | `bundle_social/models/api_v1_misc_mastodon_status503_error1.py` |
| `ApiV1MiscMastodonStatus504Error1` | `bundle_social/models/api_v1_misc_mastodon_status504_error1.py` |

### client.misc.misc_pinterest_delete_pin

- **Route**: `DELETE /api/v1/misc/pinterest/pin`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_pinterest_delete_pin(*, body: ApiV1MiscPinterestPinRequest1 | ApiV1MiscPinterestPinRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscPinterestPinResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscPinterestPinResponse1, MiscPinterestDeletePinErrorBody]`
- **Error**: `MiscPinterestDeletePinErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscPinterestPin400Error1` [400] · `ApiV1MiscPinterestPin401Error1` [401] · `ApiV1MiscPinterestPin403Error1` [403] · `ApiV1MiscPinterestPin404Error1` [404] · `ApiV1MiscPinterestPin429Error1` [429] · `ApiV1MiscPinterestPin500Error1` [500] · `ApiV1MiscPinterestPin502Error1` [502] · `ApiV1MiscPinterestPin503Error1` [503] · `ApiV1MiscPinterestPin504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscPinterestPinRequest1` | `bundle_social/models/api_v1_misc_pinterest_pin_request1.py` |
| `ApiV1MiscPinterestPinRequest1Dict` | `bundle_social/models/api_v1_misc_pinterest_pin_request1.py` |
| `ApiV1MiscPinterestPinResponse1` | `bundle_social/models/api_v1_misc_pinterest_pin_response1.py` |
| `MiscPinterestDeletePinErrorBody` | `bundle_social/errors/misc_pinterest_delete_pin_error.py` |
| `ApiV1MiscPinterestPin400Error1` | `bundle_social/models/api_v1_misc_pinterest_pin400_error1.py` |
| `ApiV1MiscPinterestPin401Error1` | `bundle_social/models/api_v1_misc_pinterest_pin401_error1.py` |
| `ApiV1MiscPinterestPin403Error1` | `bundle_social/models/api_v1_misc_pinterest_pin403_error1.py` |
| `ApiV1MiscPinterestPin404Error1` | `bundle_social/models/api_v1_misc_pinterest_pin404_error1.py` |
| `ApiV1MiscPinterestPin429Error1` | `bundle_social/models/api_v1_misc_pinterest_pin429_error1.py` |
| `ApiV1MiscPinterestPin500Error1` | `bundle_social/models/api_v1_misc_pinterest_pin500_error1.py` |
| `ApiV1MiscPinterestPin502Error1` | `bundle_social/models/api_v1_misc_pinterest_pin502_error1.py` |
| `ApiV1MiscPinterestPin503Error1` | `bundle_social/models/api_v1_misc_pinterest_pin503_error1.py` |
| `ApiV1MiscPinterestPin504Error1` | `bundle_social/models/api_v1_misc_pinterest_pin504_error1.py` |

### client.misc.misc_pinterest_edit_pin

- **Route**: `PATCH /api/v1/misc/pinterest/pin`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_pinterest_edit_pin(*, body: ApiV1MiscPinterestPinRequest | ApiV1MiscPinterestPinRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscPinterestPinResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscPinterestPinResponse, MiscPinterestEditPinErrorBody]`
- **Error**: `MiscPinterestEditPinErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscPinterestPin400Error1` [400] · `ApiV1MiscPinterestPin401Error1` [401] · `ApiV1MiscPinterestPin403Error1` [403] · `ApiV1MiscPinterestPin404Error1` [404] · `ApiV1MiscPinterestPin429Error1` [429] · `ApiV1MiscPinterestPin500Error1` [500] · `ApiV1MiscPinterestPin502Error1` [502] · `ApiV1MiscPinterestPin503Error1` [503] · `ApiV1MiscPinterestPin504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscPinterestPinRequest` | `bundle_social/models/api_v1_misc_pinterest_pin_request.py` |
| `ApiV1MiscPinterestPinRequestDict` | `bundle_social/models/api_v1_misc_pinterest_pin_request.py` |
| `ApiV1MiscPinterestPinResponse` | `bundle_social/models/api_v1_misc_pinterest_pin_response.py` |
| `MiscPinterestEditPinErrorBody` | `bundle_social/errors/misc_pinterest_edit_pin_error.py` |
| `ApiV1MiscPinterestPin400Error1` | `bundle_social/models/api_v1_misc_pinterest_pin400_error1.py` |
| `ApiV1MiscPinterestPin401Error1` | `bundle_social/models/api_v1_misc_pinterest_pin401_error1.py` |
| `ApiV1MiscPinterestPin403Error1` | `bundle_social/models/api_v1_misc_pinterest_pin403_error1.py` |
| `ApiV1MiscPinterestPin404Error1` | `bundle_social/models/api_v1_misc_pinterest_pin404_error1.py` |
| `ApiV1MiscPinterestPin429Error1` | `bundle_social/models/api_v1_misc_pinterest_pin429_error1.py` |
| `ApiV1MiscPinterestPin500Error1` | `bundle_social/models/api_v1_misc_pinterest_pin500_error1.py` |
| `ApiV1MiscPinterestPin502Error1` | `bundle_social/models/api_v1_misc_pinterest_pin502_error1.py` |
| `ApiV1MiscPinterestPin503Error1` | `bundle_social/models/api_v1_misc_pinterest_pin503_error1.py` |
| `ApiV1MiscPinterestPin504Error1` | `bundle_social/models/api_v1_misc_pinterest_pin504_error1.py` |

### client.misc.misc_reddit_delete_comment

- **Route**: `DELETE /api/v1/misc/reddit/comment`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_reddit_delete_comment(*, body: ApiV1MiscRedditCommentRequest1 | ApiV1MiscRedditCommentRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscRedditCommentResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscRedditCommentResponse1, MiscRedditDeleteCommentErrorBody]`
- **Error**: `MiscRedditDeleteCommentErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscRedditComment400Error1` [400] · `ApiV1MiscRedditComment401Error1` [401] · `ApiV1MiscRedditComment403Error1` [403] · `ApiV1MiscRedditComment404Error1` [404] · `ApiV1MiscRedditComment429Error1` [429] · `ApiV1MiscRedditComment500Error1` [500] · `ApiV1MiscRedditComment502Error1` [502] · `ApiV1MiscRedditComment503Error1` [503] · `ApiV1MiscRedditComment504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscRedditCommentRequest1` | `bundle_social/models/api_v1_misc_reddit_comment_request1.py` |
| `ApiV1MiscRedditCommentRequest1Dict` | `bundle_social/models/api_v1_misc_reddit_comment_request1.py` |
| `ApiV1MiscRedditCommentResponse1` | `bundle_social/models/api_v1_misc_reddit_comment_response1.py` |
| `MiscRedditDeleteCommentErrorBody` | `bundle_social/errors/misc_reddit_delete_comment_error.py` |
| `ApiV1MiscRedditComment400Error1` | `bundle_social/models/api_v1_misc_reddit_comment400_error1.py` |
| `ApiV1MiscRedditComment401Error1` | `bundle_social/models/api_v1_misc_reddit_comment401_error1.py` |
| `ApiV1MiscRedditComment403Error1` | `bundle_social/models/api_v1_misc_reddit_comment403_error1.py` |
| `ApiV1MiscRedditComment404Error1` | `bundle_social/models/api_v1_misc_reddit_comment404_error1.py` |
| `ApiV1MiscRedditComment429Error1` | `bundle_social/models/api_v1_misc_reddit_comment429_error1.py` |
| `ApiV1MiscRedditComment500Error1` | `bundle_social/models/api_v1_misc_reddit_comment500_error1.py` |
| `ApiV1MiscRedditComment502Error1` | `bundle_social/models/api_v1_misc_reddit_comment502_error1.py` |
| `ApiV1MiscRedditComment503Error1` | `bundle_social/models/api_v1_misc_reddit_comment503_error1.py` |
| `ApiV1MiscRedditComment504Error1` | `bundle_social/models/api_v1_misc_reddit_comment504_error1.py` |

### client.misc.misc_reddit_delete_post

- **Route**: `DELETE /api/v1/misc/reddit/post`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_reddit_delete_post(*, body: ApiV1MiscRedditPostRequest1 | ApiV1MiscRedditPostRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscRedditPostResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscRedditPostResponse1, MiscRedditDeletePostErrorBody]`
- **Error**: `MiscRedditDeletePostErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscRedditPost400Error1` [400] · `ApiV1MiscRedditPost401Error1` [401] · `ApiV1MiscRedditPost403Error1` [403] · `ApiV1MiscRedditPost404Error1` [404] · `ApiV1MiscRedditPost429Error1` [429] · `ApiV1MiscRedditPost500Error1` [500] · `ApiV1MiscRedditPost502Error1` [502] · `ApiV1MiscRedditPost503Error1` [503] · `ApiV1MiscRedditPost504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscRedditPostRequest1` | `bundle_social/models/api_v1_misc_reddit_post_request1.py` |
| `ApiV1MiscRedditPostRequest1Dict` | `bundle_social/models/api_v1_misc_reddit_post_request1.py` |
| `ApiV1MiscRedditPostResponse1` | `bundle_social/models/api_v1_misc_reddit_post_response1.py` |
| `MiscRedditDeletePostErrorBody` | `bundle_social/errors/misc_reddit_delete_post_error.py` |
| `ApiV1MiscRedditPost400Error1` | `bundle_social/models/api_v1_misc_reddit_post400_error1.py` |
| `ApiV1MiscRedditPost401Error1` | `bundle_social/models/api_v1_misc_reddit_post401_error1.py` |
| `ApiV1MiscRedditPost403Error1` | `bundle_social/models/api_v1_misc_reddit_post403_error1.py` |
| `ApiV1MiscRedditPost404Error1` | `bundle_social/models/api_v1_misc_reddit_post404_error1.py` |
| `ApiV1MiscRedditPost429Error1` | `bundle_social/models/api_v1_misc_reddit_post429_error1.py` |
| `ApiV1MiscRedditPost500Error1` | `bundle_social/models/api_v1_misc_reddit_post500_error1.py` |
| `ApiV1MiscRedditPost502Error1` | `bundle_social/models/api_v1_misc_reddit_post502_error1.py` |
| `ApiV1MiscRedditPost503Error1` | `bundle_social/models/api_v1_misc_reddit_post503_error1.py` |
| `ApiV1MiscRedditPost504Error1` | `bundle_social/models/api_v1_misc_reddit_post504_error1.py` |

### client.misc.misc_reddit_edit_comment

- **Route**: `PATCH /api/v1/misc/reddit/comment`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_reddit_edit_comment(*, body: ApiV1MiscRedditCommentRequest | ApiV1MiscRedditCommentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscRedditCommentResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscRedditCommentResponse, MiscRedditEditCommentErrorBody]`
- **Error**: `MiscRedditEditCommentErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscRedditComment400Error1` [400] · `ApiV1MiscRedditComment401Error1` [401] · `ApiV1MiscRedditComment403Error1` [403] · `ApiV1MiscRedditComment404Error1` [404] · `ApiV1MiscRedditComment429Error1` [429] · `ApiV1MiscRedditComment500Error1` [500] · `ApiV1MiscRedditComment502Error1` [502] · `ApiV1MiscRedditComment503Error1` [503] · `ApiV1MiscRedditComment504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscRedditCommentRequest` | `bundle_social/models/api_v1_misc_reddit_comment_request.py` |
| `ApiV1MiscRedditCommentRequestDict` | `bundle_social/models/api_v1_misc_reddit_comment_request.py` |
| `ApiV1MiscRedditCommentResponse` | `bundle_social/models/api_v1_misc_reddit_comment_response.py` |
| `MiscRedditEditCommentErrorBody` | `bundle_social/errors/misc_reddit_edit_comment_error.py` |
| `ApiV1MiscRedditComment400Error1` | `bundle_social/models/api_v1_misc_reddit_comment400_error1.py` |
| `ApiV1MiscRedditComment401Error1` | `bundle_social/models/api_v1_misc_reddit_comment401_error1.py` |
| `ApiV1MiscRedditComment403Error1` | `bundle_social/models/api_v1_misc_reddit_comment403_error1.py` |
| `ApiV1MiscRedditComment404Error1` | `bundle_social/models/api_v1_misc_reddit_comment404_error1.py` |
| `ApiV1MiscRedditComment429Error1` | `bundle_social/models/api_v1_misc_reddit_comment429_error1.py` |
| `ApiV1MiscRedditComment500Error1` | `bundle_social/models/api_v1_misc_reddit_comment500_error1.py` |
| `ApiV1MiscRedditComment502Error1` | `bundle_social/models/api_v1_misc_reddit_comment502_error1.py` |
| `ApiV1MiscRedditComment503Error1` | `bundle_social/models/api_v1_misc_reddit_comment503_error1.py` |
| `ApiV1MiscRedditComment504Error1` | `bundle_social/models/api_v1_misc_reddit_comment504_error1.py` |

### client.misc.misc_reddit_edit_post

- **Route**: `PATCH /api/v1/misc/reddit/post`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_reddit_edit_post(*, body: ApiV1MiscRedditPostRequest | ApiV1MiscRedditPostRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscRedditPostResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscRedditPostResponse, MiscRedditEditPostErrorBody]`
- **Error**: `MiscRedditEditPostErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscRedditPost400Error1` [400] · `ApiV1MiscRedditPost401Error1` [401] · `ApiV1MiscRedditPost403Error1` [403] · `ApiV1MiscRedditPost404Error1` [404] · `ApiV1MiscRedditPost429Error1` [429] · `ApiV1MiscRedditPost500Error1` [500] · `ApiV1MiscRedditPost502Error1` [502] · `ApiV1MiscRedditPost503Error1` [503] · `ApiV1MiscRedditPost504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscRedditPostRequest` | `bundle_social/models/api_v1_misc_reddit_post_request.py` |
| `ApiV1MiscRedditPostRequestDict` | `bundle_social/models/api_v1_misc_reddit_post_request.py` |
| `ApiV1MiscRedditPostResponse` | `bundle_social/models/api_v1_misc_reddit_post_response.py` |
| `MiscRedditEditPostErrorBody` | `bundle_social/errors/misc_reddit_edit_post_error.py` |
| `ApiV1MiscRedditPost400Error1` | `bundle_social/models/api_v1_misc_reddit_post400_error1.py` |
| `ApiV1MiscRedditPost401Error1` | `bundle_social/models/api_v1_misc_reddit_post401_error1.py` |
| `ApiV1MiscRedditPost403Error1` | `bundle_social/models/api_v1_misc_reddit_post403_error1.py` |
| `ApiV1MiscRedditPost404Error1` | `bundle_social/models/api_v1_misc_reddit_post404_error1.py` |
| `ApiV1MiscRedditPost429Error1` | `bundle_social/models/api_v1_misc_reddit_post429_error1.py` |
| `ApiV1MiscRedditPost500Error1` | `bundle_social/models/api_v1_misc_reddit_post500_error1.py` |
| `ApiV1MiscRedditPost502Error1` | `bundle_social/models/api_v1_misc_reddit_post502_error1.py` |
| `ApiV1MiscRedditPost503Error1` | `bundle_social/models/api_v1_misc_reddit_post503_error1.py` |
| `ApiV1MiscRedditPost504Error1` | `bundle_social/models/api_v1_misc_reddit_post504_error1.py` |

### client.misc.misc_reddit_get_post_requirements

- **Route**: `GET /api/v1/misc/reddit/post-requirements`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_reddit_get_post_requirements(team_id: str, subreddit: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`, `subreddit`
- **Params**: `team_id` — query `teamId` · `subreddit` — query
- **Returns (parsed)**: `ApiV1MiscRedditPostRequirementsResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscRedditPostRequirementsResponse, MiscRedditGetPostRequirementsErrorBody]`
- **Error**: `MiscRedditGetPostRequirementsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscRedditPostRequirements400Error1` [400] · `ApiV1MiscRedditPostRequirements401Error1` [401] · `ApiV1MiscRedditPostRequirements403Error1` [403] · `ApiV1MiscRedditPostRequirements404Error1` [404] · `ApiV1MiscRedditPostRequirements429Error1` [429] · `ApiV1MiscRedditPostRequirements500Error1` [500] · `ApiV1MiscRedditPostRequirements502Error1` [502] · `ApiV1MiscRedditPostRequirements503Error1` [503] · `ApiV1MiscRedditPostRequirements504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscRedditPostRequirementsResponse` | `bundle_social/models/api_v1_misc_reddit_post_requirements_response.py` |
| `MiscRedditGetPostRequirementsErrorBody` | `bundle_social/errors/misc_reddit_get_post_requirements_error.py` |
| `ApiV1MiscRedditPostRequirements400Error1` | `bundle_social/models/api_v1_misc_reddit_post_requirements400_error1.py` |
| `ApiV1MiscRedditPostRequirements401Error1` | `bundle_social/models/api_v1_misc_reddit_post_requirements401_error1.py` |
| `ApiV1MiscRedditPostRequirements403Error1` | `bundle_social/models/api_v1_misc_reddit_post_requirements403_error1.py` |
| `ApiV1MiscRedditPostRequirements404Error1` | `bundle_social/models/api_v1_misc_reddit_post_requirements404_error1.py` |
| `ApiV1MiscRedditPostRequirements429Error1` | `bundle_social/models/api_v1_misc_reddit_post_requirements429_error1.py` |
| `ApiV1MiscRedditPostRequirements500Error1` | `bundle_social/models/api_v1_misc_reddit_post_requirements500_error1.py` |
| `ApiV1MiscRedditPostRequirements502Error1` | `bundle_social/models/api_v1_misc_reddit_post_requirements502_error1.py` |
| `ApiV1MiscRedditPostRequirements503Error1` | `bundle_social/models/api_v1_misc_reddit_post_requirements503_error1.py` |
| `ApiV1MiscRedditPostRequirements504Error1` | `bundle_social/models/api_v1_misc_reddit_post_requirements504_error1.py` |

### client.misc.misc_reddit_get_subreddit_flairs

- **Route**: `GET /api/v1/misc/reddit/subreddit-flairs`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_reddit_get_subreddit_flairs(team_id: str, subreddit: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`, `subreddit`
- **Params**: `team_id` — query `teamId` · `subreddit` — query
- **Returns (parsed)**: `list[ApiV1MiscRedditSubredditFlairsResponse]`
- **Returns (raw)**: `ApiResult[list[ApiV1MiscRedditSubredditFlairsResponse], MiscRedditGetSubredditFlairsErrorBody]`
- **Error**: `MiscRedditGetSubredditFlairsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscRedditSubredditFlairs400Error1` [400] · `ApiV1MiscRedditSubredditFlairs401Error1` [401] · `ApiV1MiscRedditSubredditFlairs403Error1` [403] · `ApiV1MiscRedditSubredditFlairs404Error1` [404] · `ApiV1MiscRedditSubredditFlairs429Error1` [429] · `ApiV1MiscRedditSubredditFlairs500Error1` [500] · `ApiV1MiscRedditSubredditFlairs502Error1` [502] · `ApiV1MiscRedditSubredditFlairs503Error1` [503] · `ApiV1MiscRedditSubredditFlairs504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscRedditSubredditFlairsResponse` | `bundle_social/models/api_v1_misc_reddit_subreddit_flairs_response.py` |
| `MiscRedditGetSubredditFlairsErrorBody` | `bundle_social/errors/misc_reddit_get_subreddit_flairs_error.py` |
| `ApiV1MiscRedditSubredditFlairs400Error1` | `bundle_social/models/api_v1_misc_reddit_subreddit_flairs400_error1.py` |
| `ApiV1MiscRedditSubredditFlairs401Error1` | `bundle_social/models/api_v1_misc_reddit_subreddit_flairs401_error1.py` |
| `ApiV1MiscRedditSubredditFlairs403Error1` | `bundle_social/models/api_v1_misc_reddit_subreddit_flairs403_error1.py` |
| `ApiV1MiscRedditSubredditFlairs404Error1` | `bundle_social/models/api_v1_misc_reddit_subreddit_flairs404_error1.py` |
| `ApiV1MiscRedditSubredditFlairs429Error1` | `bundle_social/models/api_v1_misc_reddit_subreddit_flairs429_error1.py` |
| `ApiV1MiscRedditSubredditFlairs500Error1` | `bundle_social/models/api_v1_misc_reddit_subreddit_flairs500_error1.py` |
| `ApiV1MiscRedditSubredditFlairs502Error1` | `bundle_social/models/api_v1_misc_reddit_subreddit_flairs502_error1.py` |
| `ApiV1MiscRedditSubredditFlairs503Error1` | `bundle_social/models/api_v1_misc_reddit_subreddit_flairs503_error1.py` |
| `ApiV1MiscRedditSubredditFlairs504Error1` | `bundle_social/models/api_v1_misc_reddit_subreddit_flairs504_error1.py` |

### client.misc.misc_slack_delete_message

- **Route**: `DELETE /api/v1/misc/slack/message`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_slack_delete_message(*, body: ApiV1MiscSlackMessageRequest1 | ApiV1MiscSlackMessageRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscSlackMessageResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscSlackMessageResponse1, MiscSlackDeleteMessageErrorBody]`
- **Error**: `MiscSlackDeleteMessageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscSlackMessage400Error1` [400] · `ApiV1MiscSlackMessage401Error1` [401] · `ApiV1MiscSlackMessage403Error1` [403] · `ApiV1MiscSlackMessage404Error1` [404] · `ApiV1MiscSlackMessage429Error1` [429] · `ApiV1MiscSlackMessage500Error1` [500] · `ApiV1MiscSlackMessage502Error1` [502] · `ApiV1MiscSlackMessage503Error1` [503] · `ApiV1MiscSlackMessage504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscSlackMessageRequest1` | `bundle_social/models/api_v1_misc_slack_message_request1.py` |
| `ApiV1MiscSlackMessageRequest1Dict` | `bundle_social/models/api_v1_misc_slack_message_request1.py` |
| `ApiV1MiscSlackMessageResponse1` | `bundle_social/models/api_v1_misc_slack_message_response1.py` |
| `MiscSlackDeleteMessageErrorBody` | `bundle_social/errors/misc_slack_delete_message_error.py` |
| `ApiV1MiscSlackMessage400Error1` | `bundle_social/models/api_v1_misc_slack_message400_error1.py` |
| `ApiV1MiscSlackMessage401Error1` | `bundle_social/models/api_v1_misc_slack_message401_error1.py` |
| `ApiV1MiscSlackMessage403Error1` | `bundle_social/models/api_v1_misc_slack_message403_error1.py` |
| `ApiV1MiscSlackMessage404Error1` | `bundle_social/models/api_v1_misc_slack_message404_error1.py` |
| `ApiV1MiscSlackMessage429Error1` | `bundle_social/models/api_v1_misc_slack_message429_error1.py` |
| `ApiV1MiscSlackMessage500Error1` | `bundle_social/models/api_v1_misc_slack_message500_error1.py` |
| `ApiV1MiscSlackMessage502Error1` | `bundle_social/models/api_v1_misc_slack_message502_error1.py` |
| `ApiV1MiscSlackMessage503Error1` | `bundle_social/models/api_v1_misc_slack_message503_error1.py` |
| `ApiV1MiscSlackMessage504Error1` | `bundle_social/models/api_v1_misc_slack_message504_error1.py` |

### client.misc.misc_slack_edit_message

- **Route**: `PATCH /api/v1/misc/slack/message`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_slack_edit_message(*, body: ApiV1MiscSlackMessageRequest | ApiV1MiscSlackMessageRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscSlackMessageResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscSlackMessageResponse, MiscSlackEditMessageErrorBody]`
- **Error**: `MiscSlackEditMessageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscSlackMessage400Error1` [400] · `ApiV1MiscSlackMessage401Error1` [401] · `ApiV1MiscSlackMessage403Error1` [403] · `ApiV1MiscSlackMessage404Error1` [404] · `ApiV1MiscSlackMessage429Error1` [429] · `ApiV1MiscSlackMessage500Error1` [500] · `ApiV1MiscSlackMessage502Error1` [502] · `ApiV1MiscSlackMessage503Error1` [503] · `ApiV1MiscSlackMessage504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscSlackMessageRequest` | `bundle_social/models/api_v1_misc_slack_message_request.py` |
| `ApiV1MiscSlackMessageRequestDict` | `bundle_social/models/api_v1_misc_slack_message_request.py` |
| `ApiV1MiscSlackMessageResponse` | `bundle_social/models/api_v1_misc_slack_message_response.py` |
| `MiscSlackEditMessageErrorBody` | `bundle_social/errors/misc_slack_edit_message_error.py` |
| `ApiV1MiscSlackMessage400Error1` | `bundle_social/models/api_v1_misc_slack_message400_error1.py` |
| `ApiV1MiscSlackMessage401Error1` | `bundle_social/models/api_v1_misc_slack_message401_error1.py` |
| `ApiV1MiscSlackMessage403Error1` | `bundle_social/models/api_v1_misc_slack_message403_error1.py` |
| `ApiV1MiscSlackMessage404Error1` | `bundle_social/models/api_v1_misc_slack_message404_error1.py` |
| `ApiV1MiscSlackMessage429Error1` | `bundle_social/models/api_v1_misc_slack_message429_error1.py` |
| `ApiV1MiscSlackMessage500Error1` | `bundle_social/models/api_v1_misc_slack_message500_error1.py` |
| `ApiV1MiscSlackMessage502Error1` | `bundle_social/models/api_v1_misc_slack_message502_error1.py` |
| `ApiV1MiscSlackMessage503Error1` | `bundle_social/models/api_v1_misc_slack_message503_error1.py` |
| `ApiV1MiscSlackMessage504Error1` | `bundle_social/models/api_v1_misc_slack_message504_error1.py` |

### client.misc.misc_tiktok_delete_comment

- **Route**: `DELETE /api/v1/misc/tiktok/comment`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_tiktok_delete_comment(*, body: ApiV1MiscTiktokCommentRequest | ApiV1MiscTiktokCommentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscTiktokCommentResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscTiktokCommentResponse, MiscTiktokDeleteCommentErrorBody]`
- **Error**: `MiscTiktokDeleteCommentErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscTiktokComment400Error1` [400] · `ApiV1MiscTiktokComment401Error1` [401] · `ApiV1MiscTiktokComment403Error1` [403] · `ApiV1MiscTiktokComment404Error1` [404] · `ApiV1MiscTiktokComment429Error1` [429] · `ApiV1MiscTiktokComment500Error1` [500] · `ApiV1MiscTiktokComment502Error1` [502] · `ApiV1MiscTiktokComment503Error1` [503] · `ApiV1MiscTiktokComment504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscTiktokCommentRequest` | `bundle_social/models/api_v1_misc_tiktok_comment_request.py` |
| `ApiV1MiscTiktokCommentRequestDict` | `bundle_social/models/api_v1_misc_tiktok_comment_request.py` |
| `ApiV1MiscTiktokCommentResponse` | `bundle_social/models/api_v1_misc_tiktok_comment_response.py` |
| `MiscTiktokDeleteCommentErrorBody` | `bundle_social/errors/misc_tiktok_delete_comment_error.py` |
| `ApiV1MiscTiktokComment400Error1` | `bundle_social/models/api_v1_misc_tiktok_comment400_error1.py` |
| `ApiV1MiscTiktokComment401Error1` | `bundle_social/models/api_v1_misc_tiktok_comment401_error1.py` |
| `ApiV1MiscTiktokComment403Error1` | `bundle_social/models/api_v1_misc_tiktok_comment403_error1.py` |
| `ApiV1MiscTiktokComment404Error1` | `bundle_social/models/api_v1_misc_tiktok_comment404_error1.py` |
| `ApiV1MiscTiktokComment429Error1` | `bundle_social/models/api_v1_misc_tiktok_comment429_error1.py` |
| `ApiV1MiscTiktokComment500Error1` | `bundle_social/models/api_v1_misc_tiktok_comment500_error1.py` |
| `ApiV1MiscTiktokComment502Error1` | `bundle_social/models/api_v1_misc_tiktok_comment502_error1.py` |
| `ApiV1MiscTiktokComment503Error1` | `bundle_social/models/api_v1_misc_tiktok_comment503_error1.py` |
| `ApiV1MiscTiktokComment504Error1` | `bundle_social/models/api_v1_misc_tiktok_comment504_error1.py` |

### client.misc.misc_tiktok_get_commercial_music_trending_list

- **Route**: `GET /api/v1/misc/tiktok/cml/trending-list`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_tiktok_get_commercial_music_trending_list(team_id: str, *, genre: GenreOrStr | None = Genre.POP, date_range: DateRangeOrStr | None = DateRange._7_DAY, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId` · `genre` — query · `date_range` — query `dateRange`
- **Returns (parsed)**: `list[ApiV1MiscTiktokCmlTrendingListResponse]`
- **Returns (raw)**: `ApiResult[list[ApiV1MiscTiktokCmlTrendingListResponse], MiscTiktokGetCommercialMusicTrendingListErrorBody]`
- **Error**: `MiscTiktokGetCommercialMusicTrendingListErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscTiktokCmlTrendingList400Error1` [400] · `ApiV1MiscTiktokCmlTrendingList401Error1` [401] · `ApiV1MiscTiktokCmlTrendingList403Error1` [403] · `ApiV1MiscTiktokCmlTrendingList404Error1` [404] · `ApiV1MiscTiktokCmlTrendingList429Error1` [429] · `ApiV1MiscTiktokCmlTrendingList500Error1` [500] · `ApiV1MiscTiktokCmlTrendingList502Error1` [502] · `ApiV1MiscTiktokCmlTrendingList503Error1` [503] · `ApiV1MiscTiktokCmlTrendingList504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GenreOrStr` | `bundle_social/models/enums/genre.py` |
| `DateRangeOrStr` | `bundle_social/models/enums/date_range.py` |
| `ApiV1MiscTiktokCmlTrendingListResponse` | `bundle_social/models/api_v1_misc_tiktok_cml_trending_list_response.py` |
| `MiscTiktokGetCommercialMusicTrendingListErrorBody` | `bundle_social/errors/misc_tiktok_get_commercial_music_trending_list_error.py` |
| `ApiV1MiscTiktokCmlTrendingList400Error1` | `bundle_social/models/api_v1_misc_tiktok_cml_trending_list400_error1.py` |
| `ApiV1MiscTiktokCmlTrendingList401Error1` | `bundle_social/models/api_v1_misc_tiktok_cml_trending_list401_error1.py` |
| `ApiV1MiscTiktokCmlTrendingList403Error1` | `bundle_social/models/api_v1_misc_tiktok_cml_trending_list403_error1.py` |
| `ApiV1MiscTiktokCmlTrendingList404Error1` | `bundle_social/models/api_v1_misc_tiktok_cml_trending_list404_error1.py` |
| `ApiV1MiscTiktokCmlTrendingList429Error1` | `bundle_social/models/api_v1_misc_tiktok_cml_trending_list429_error1.py` |
| `ApiV1MiscTiktokCmlTrendingList500Error1` | `bundle_social/models/api_v1_misc_tiktok_cml_trending_list500_error1.py` |
| `ApiV1MiscTiktokCmlTrendingList502Error1` | `bundle_social/models/api_v1_misc_tiktok_cml_trending_list502_error1.py` |
| `ApiV1MiscTiktokCmlTrendingList503Error1` | `bundle_social/models/api_v1_misc_tiktok_cml_trending_list503_error1.py` |
| `ApiV1MiscTiktokCmlTrendingList504Error1` | `bundle_social/models/api_v1_misc_tiktok_cml_trending_list504_error1.py` |

### client.misc.misc_tiktok_get_post_settings

- **Route**: `GET /api/v1/misc/tiktok/post-settings`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_tiktok_get_post_settings(team_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId`
- **Returns (parsed)**: `ApiV1MiscTiktokPostSettingsResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscTiktokPostSettingsResponse, MiscTiktokGetPostSettingsErrorBody]`
- **Error**: `MiscTiktokGetPostSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscTiktokPostSettings400Error1` [400] · `ApiV1MiscTiktokPostSettings401Error1` [401] · `ApiV1MiscTiktokPostSettings403Error1` [403] · `ApiV1MiscTiktokPostSettings404Error1` [404] · `ApiV1MiscTiktokPostSettings429Error1` [429] · `ApiV1MiscTiktokPostSettings500Error1` [500] · `ApiV1MiscTiktokPostSettings502Error1` [502] · `ApiV1MiscTiktokPostSettings503Error1` [503] · `ApiV1MiscTiktokPostSettings504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscTiktokPostSettingsResponse` | `bundle_social/models/api_v1_misc_tiktok_post_settings_response.py` |
| `MiscTiktokGetPostSettingsErrorBody` | `bundle_social/errors/misc_tiktok_get_post_settings_error.py` |
| `ApiV1MiscTiktokPostSettings400Error1` | `bundle_social/models/api_v1_misc_tiktok_post_settings400_error1.py` |
| `ApiV1MiscTiktokPostSettings401Error1` | `bundle_social/models/api_v1_misc_tiktok_post_settings401_error1.py` |
| `ApiV1MiscTiktokPostSettings403Error1` | `bundle_social/models/api_v1_misc_tiktok_post_settings403_error1.py` |
| `ApiV1MiscTiktokPostSettings404Error1` | `bundle_social/models/api_v1_misc_tiktok_post_settings404_error1.py` |
| `ApiV1MiscTiktokPostSettings429Error1` | `bundle_social/models/api_v1_misc_tiktok_post_settings429_error1.py` |
| `ApiV1MiscTiktokPostSettings500Error1` | `bundle_social/models/api_v1_misc_tiktok_post_settings500_error1.py` |
| `ApiV1MiscTiktokPostSettings502Error1` | `bundle_social/models/api_v1_misc_tiktok_post_settings502_error1.py` |
| `ApiV1MiscTiktokPostSettings503Error1` | `bundle_social/models/api_v1_misc_tiktok_post_settings503_error1.py` |
| `ApiV1MiscTiktokPostSettings504Error1` | `bundle_social/models/api_v1_misc_tiktok_post_settings504_error1.py` |

### client.misc.misc_tiktok_search_locations

- **Route**: `GET /api/v1/misc/tiktok/locations`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_tiktok_search_locations(team_id: str, q: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`, `q`
- **Params**: `team_id` — query `teamId` · `q` — query
- **Returns (parsed)**: `ApiV1MiscTiktokLocationsResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscTiktokLocationsResponse, MiscTiktokSearchLocationsErrorBody]`
- **Error**: `MiscTiktokSearchLocationsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscTiktokLocations400Error1` [400] · `ApiV1MiscTiktokLocations401Error1` [401] · `ApiV1MiscTiktokLocations403Error1` [403] · `ApiV1MiscTiktokLocations404Error1` [404] · `ApiV1MiscTiktokLocations429Error1` [429] · `ApiV1MiscTiktokLocations500Error1` [500] · `ApiV1MiscTiktokLocations502Error1` [502] · `ApiV1MiscTiktokLocations503Error1` [503] · `ApiV1MiscTiktokLocations504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscTiktokLocationsResponse` | `bundle_social/models/api_v1_misc_tiktok_locations_response.py` |
| `MiscTiktokSearchLocationsErrorBody` | `bundle_social/errors/misc_tiktok_search_locations_error.py` |
| `ApiV1MiscTiktokLocations400Error1` | `bundle_social/models/api_v1_misc_tiktok_locations400_error1.py` |
| `ApiV1MiscTiktokLocations401Error1` | `bundle_social/models/api_v1_misc_tiktok_locations401_error1.py` |
| `ApiV1MiscTiktokLocations403Error1` | `bundle_social/models/api_v1_misc_tiktok_locations403_error1.py` |
| `ApiV1MiscTiktokLocations404Error1` | `bundle_social/models/api_v1_misc_tiktok_locations404_error1.py` |
| `ApiV1MiscTiktokLocations429Error1` | `bundle_social/models/api_v1_misc_tiktok_locations429_error1.py` |
| `ApiV1MiscTiktokLocations500Error1` | `bundle_social/models/api_v1_misc_tiktok_locations500_error1.py` |
| `ApiV1MiscTiktokLocations502Error1` | `bundle_social/models/api_v1_misc_tiktok_locations502_error1.py` |
| `ApiV1MiscTiktokLocations503Error1` | `bundle_social/models/api_v1_misc_tiktok_locations503_error1.py` |
| `ApiV1MiscTiktokLocations504Error1` | `bundle_social/models/api_v1_misc_tiktok_locations504_error1.py` |

### client.misc.misc_twitter_delete_comment

- **Route**: `DELETE /api/v1/misc/twitter/comment`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_twitter_delete_comment(*, body: ApiV1MiscTwitterCommentRequest | ApiV1MiscTwitterCommentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscTwitterCommentResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscTwitterCommentResponse, MiscTwitterDeleteCommentErrorBody]`
- **Error**: `MiscTwitterDeleteCommentErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscTwitterComment400Error1` [400] · `ApiV1MiscTwitterComment401Error1` [401] · `ApiV1MiscTwitterComment403Error1` [403] · `ApiV1MiscTwitterComment404Error1` [404] · `ApiV1MiscTwitterComment429Error1` [429] · `ApiV1MiscTwitterComment500Error1` [500] · `ApiV1MiscTwitterComment502Error1` [502] · `ApiV1MiscTwitterComment503Error1` [503] · `ApiV1MiscTwitterComment504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscTwitterCommentRequest` | `bundle_social/models/api_v1_misc_twitter_comment_request.py` |
| `ApiV1MiscTwitterCommentRequestDict` | `bundle_social/models/api_v1_misc_twitter_comment_request.py` |
| `ApiV1MiscTwitterCommentResponse` | `bundle_social/models/api_v1_misc_twitter_comment_response.py` |
| `MiscTwitterDeleteCommentErrorBody` | `bundle_social/errors/misc_twitter_delete_comment_error.py` |
| `ApiV1MiscTwitterComment400Error1` | `bundle_social/models/api_v1_misc_twitter_comment400_error1.py` |
| `ApiV1MiscTwitterComment401Error1` | `bundle_social/models/api_v1_misc_twitter_comment401_error1.py` |
| `ApiV1MiscTwitterComment403Error1` | `bundle_social/models/api_v1_misc_twitter_comment403_error1.py` |
| `ApiV1MiscTwitterComment404Error1` | `bundle_social/models/api_v1_misc_twitter_comment404_error1.py` |
| `ApiV1MiscTwitterComment429Error1` | `bundle_social/models/api_v1_misc_twitter_comment429_error1.py` |
| `ApiV1MiscTwitterComment500Error1` | `bundle_social/models/api_v1_misc_twitter_comment500_error1.py` |
| `ApiV1MiscTwitterComment502Error1` | `bundle_social/models/api_v1_misc_twitter_comment502_error1.py` |
| `ApiV1MiscTwitterComment503Error1` | `bundle_social/models/api_v1_misc_twitter_comment503_error1.py` |
| `ApiV1MiscTwitterComment504Error1` | `bundle_social/models/api_v1_misc_twitter_comment504_error1.py` |

### client.misc.misc_twitter_delete_tweet

- **Route**: `DELETE /api/v1/misc/twitter/tweet`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_twitter_delete_tweet(*, body: ApiV1MiscTwitterTweetRequest | ApiV1MiscTwitterTweetRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscTwitterTweetResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscTwitterTweetResponse, MiscTwitterDeleteTweetErrorBody]`
- **Error**: `MiscTwitterDeleteTweetErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscTwitterTweet400Error1` [400] · `ApiV1MiscTwitterTweet401Error1` [401] · `ApiV1MiscTwitterTweet403Error1` [403] · `ApiV1MiscTwitterTweet404Error1` [404] · `ApiV1MiscTwitterTweet429Error1` [429] · `ApiV1MiscTwitterTweet500Error1` [500] · `ApiV1MiscTwitterTweet502Error1` [502] · `ApiV1MiscTwitterTweet503Error1` [503] · `ApiV1MiscTwitterTweet504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscTwitterTweetRequest` | `bundle_social/models/api_v1_misc_twitter_tweet_request.py` |
| `ApiV1MiscTwitterTweetRequestDict` | `bundle_social/models/api_v1_misc_twitter_tweet_request.py` |
| `ApiV1MiscTwitterTweetResponse` | `bundle_social/models/api_v1_misc_twitter_tweet_response.py` |
| `MiscTwitterDeleteTweetErrorBody` | `bundle_social/errors/misc_twitter_delete_tweet_error.py` |
| `ApiV1MiscTwitterTweet400Error1` | `bundle_social/models/api_v1_misc_twitter_tweet400_error1.py` |
| `ApiV1MiscTwitterTweet401Error1` | `bundle_social/models/api_v1_misc_twitter_tweet401_error1.py` |
| `ApiV1MiscTwitterTweet403Error1` | `bundle_social/models/api_v1_misc_twitter_tweet403_error1.py` |
| `ApiV1MiscTwitterTweet404Error1` | `bundle_social/models/api_v1_misc_twitter_tweet404_error1.py` |
| `ApiV1MiscTwitterTweet429Error1` | `bundle_social/models/api_v1_misc_twitter_tweet429_error1.py` |
| `ApiV1MiscTwitterTweet500Error1` | `bundle_social/models/api_v1_misc_twitter_tweet500_error1.py` |
| `ApiV1MiscTwitterTweet502Error1` | `bundle_social/models/api_v1_misc_twitter_tweet502_error1.py` |
| `ApiV1MiscTwitterTweet503Error1` | `bundle_social/models/api_v1_misc_twitter_tweet503_error1.py` |
| `ApiV1MiscTwitterTweet504Error1` | `bundle_social/models/api_v1_misc_twitter_tweet504_error1.py` |

### client.misc.misc_twitter_retweet

- **Route**: `POST /api/v1/misc/twitter/retweet`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_twitter_retweet(*, body: ApiV1MiscTwitterRetweetRequest | ApiV1MiscTwitterRetweetRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscTwitterRetweetResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscTwitterRetweetResponse, MiscTwitterRetweetErrorBody]`
- **Error**: `MiscTwitterRetweetErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscTwitterRetweet400Error1` [400] · `ApiV1MiscTwitterRetweet401Error1` [401] · `ApiV1MiscTwitterRetweet403Error1` [403] · `ApiV1MiscTwitterRetweet404Error1` [404] · `ApiV1MiscTwitterRetweet429Error1` [429] · `ApiV1MiscTwitterRetweet500Error1` [500] · `ApiV1MiscTwitterRetweet502Error1` [502] · `ApiV1MiscTwitterRetweet503Error1` [503] · `ApiV1MiscTwitterRetweet504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscTwitterRetweetRequest` | `bundle_social/models/api_v1_misc_twitter_retweet_request.py` |
| `ApiV1MiscTwitterRetweetRequestDict` | `bundle_social/models/api_v1_misc_twitter_retweet_request.py` |
| `ApiV1MiscTwitterRetweetResponse` | `bundle_social/models/api_v1_misc_twitter_retweet_response.py` |
| `MiscTwitterRetweetErrorBody` | `bundle_social/errors/misc_twitter_retweet_error.py` |
| `ApiV1MiscTwitterRetweet400Error1` | `bundle_social/models/api_v1_misc_twitter_retweet400_error1.py` |
| `ApiV1MiscTwitterRetweet401Error1` | `bundle_social/models/api_v1_misc_twitter_retweet401_error1.py` |
| `ApiV1MiscTwitterRetweet403Error1` | `bundle_social/models/api_v1_misc_twitter_retweet403_error1.py` |
| `ApiV1MiscTwitterRetweet404Error1` | `bundle_social/models/api_v1_misc_twitter_retweet404_error1.py` |
| `ApiV1MiscTwitterRetweet429Error1` | `bundle_social/models/api_v1_misc_twitter_retweet429_error1.py` |
| `ApiV1MiscTwitterRetweet500Error1` | `bundle_social/models/api_v1_misc_twitter_retweet500_error1.py` |
| `ApiV1MiscTwitterRetweet502Error1` | `bundle_social/models/api_v1_misc_twitter_retweet502_error1.py` |
| `ApiV1MiscTwitterRetweet503Error1` | `bundle_social/models/api_v1_misc_twitter_retweet503_error1.py` |
| `ApiV1MiscTwitterRetweet504Error1` | `bundle_social/models/api_v1_misc_twitter_retweet504_error1.py` |

### client.misc.misc_twitter_unretweet

- **Route**: `DELETE /api/v1/misc/twitter/retweet`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_twitter_unretweet(*, body: ApiV1MiscTwitterRetweetRequest | ApiV1MiscTwitterRetweetRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscTwitterRetweetResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscTwitterRetweetResponse, MiscTwitterUnretweetErrorBody]`
- **Error**: `MiscTwitterUnretweetErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscTwitterRetweet400Error1` [400] · `ApiV1MiscTwitterRetweet401Error1` [401] · `ApiV1MiscTwitterRetweet403Error1` [403] · `ApiV1MiscTwitterRetweet404Error1` [404] · `ApiV1MiscTwitterRetweet429Error1` [429] · `ApiV1MiscTwitterRetweet500Error1` [500] · `ApiV1MiscTwitterRetweet502Error1` [502] · `ApiV1MiscTwitterRetweet503Error1` [503] · `ApiV1MiscTwitterRetweet504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscTwitterRetweetRequest` | `bundle_social/models/api_v1_misc_twitter_retweet_request.py` |
| `ApiV1MiscTwitterRetweetRequestDict` | `bundle_social/models/api_v1_misc_twitter_retweet_request.py` |
| `ApiV1MiscTwitterRetweetResponse` | `bundle_social/models/api_v1_misc_twitter_retweet_response.py` |
| `MiscTwitterUnretweetErrorBody` | `bundle_social/errors/misc_twitter_unretweet_error.py` |
| `ApiV1MiscTwitterRetweet400Error1` | `bundle_social/models/api_v1_misc_twitter_retweet400_error1.py` |
| `ApiV1MiscTwitterRetweet401Error1` | `bundle_social/models/api_v1_misc_twitter_retweet401_error1.py` |
| `ApiV1MiscTwitterRetweet403Error1` | `bundle_social/models/api_v1_misc_twitter_retweet403_error1.py` |
| `ApiV1MiscTwitterRetweet404Error1` | `bundle_social/models/api_v1_misc_twitter_retweet404_error1.py` |
| `ApiV1MiscTwitterRetweet429Error1` | `bundle_social/models/api_v1_misc_twitter_retweet429_error1.py` |
| `ApiV1MiscTwitterRetweet500Error1` | `bundle_social/models/api_v1_misc_twitter_retweet500_error1.py` |
| `ApiV1MiscTwitterRetweet502Error1` | `bundle_social/models/api_v1_misc_twitter_retweet502_error1.py` |
| `ApiV1MiscTwitterRetweet503Error1` | `bundle_social/models/api_v1_misc_twitter_retweet503_error1.py` |
| `ApiV1MiscTwitterRetweet504Error1` | `bundle_social/models/api_v1_misc_twitter_retweet504_error1.py` |

### client.misc.misc_youtube_add_video_to_playlist

- **Route**: `POST /api/v1/misc/youtube/playlist-items`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_youtube_add_video_to_playlist(*, body: ApiV1MiscYoutubePlaylistItemsRequest | ApiV1MiscYoutubePlaylistItemsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscYoutubePlaylistItemsResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscYoutubePlaylistItemsResponse, MiscYoutubeAddVideoToPlaylistErrorBody]`
- **Error**: `MiscYoutubeAddVideoToPlaylistErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscYoutubePlaylistItems400Error1` [400] · `ApiV1MiscYoutubePlaylistItems401Error1` [401] · `ApiV1MiscYoutubePlaylistItems403Error1` [403] · `ApiV1MiscYoutubePlaylistItems404Error1` [404] · `ApiV1MiscYoutubePlaylistItems429Error1` [429] · `ApiV1MiscYoutubePlaylistItems500Error1` [500] · `ApiV1MiscYoutubePlaylistItems502Error1` [502] · `ApiV1MiscYoutubePlaylistItems503Error1` [503] · `ApiV1MiscYoutubePlaylistItems504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscYoutubePlaylistItemsRequest` | `bundle_social/models/api_v1_misc_youtube_playlist_items_request.py` |
| `ApiV1MiscYoutubePlaylistItemsRequestDict` | `bundle_social/models/api_v1_misc_youtube_playlist_items_request.py` |
| `ApiV1MiscYoutubePlaylistItemsResponse` | `bundle_social/models/api_v1_misc_youtube_playlist_items_response.py` |
| `MiscYoutubeAddVideoToPlaylistErrorBody` | `bundle_social/errors/misc_youtube_add_video_to_playlist_error.py` |
| `ApiV1MiscYoutubePlaylistItems400Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items400_error1.py` |
| `ApiV1MiscYoutubePlaylistItems401Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items401_error1.py` |
| `ApiV1MiscYoutubePlaylistItems403Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items403_error1.py` |
| `ApiV1MiscYoutubePlaylistItems404Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items404_error1.py` |
| `ApiV1MiscYoutubePlaylistItems429Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items429_error1.py` |
| `ApiV1MiscYoutubePlaylistItems500Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items500_error1.py` |
| `ApiV1MiscYoutubePlaylistItems502Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items502_error1.py` |
| `ApiV1MiscYoutubePlaylistItems503Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items503_error1.py` |
| `ApiV1MiscYoutubePlaylistItems504Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items504_error1.py` |

### client.misc.misc_youtube_create_new_channel_playlist

- **Route**: `POST /api/v1/misc/youtube/playlist`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_youtube_create_new_channel_playlist(*, body: ApiV1MiscYoutubePlaylistRequest | ApiV1MiscYoutubePlaylistRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscYoutubePlaylistResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscYoutubePlaylistResponse1, MiscYoutubeCreateNewChannelPlaylistErrorBody]`
- **Error**: `MiscYoutubeCreateNewChannelPlaylistErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscYoutubePlaylist400Error1` [400] · `ApiV1MiscYoutubePlaylist401Error1` [401] · `ApiV1MiscYoutubePlaylist403Error1` [403] · `ApiV1MiscYoutubePlaylist404Error1` [404] · `ApiV1MiscYoutubePlaylist429Error1` [429] · `ApiV1MiscYoutubePlaylist500Error1` [500] · `ApiV1MiscYoutubePlaylist502Error1` [502] · `ApiV1MiscYoutubePlaylist503Error1` [503] · `ApiV1MiscYoutubePlaylist504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscYoutubePlaylistRequest` | `bundle_social/models/api_v1_misc_youtube_playlist_request.py` |
| `ApiV1MiscYoutubePlaylistRequestDict` | `bundle_social/models/api_v1_misc_youtube_playlist_request.py` |
| `ApiV1MiscYoutubePlaylistResponse1` | `bundle_social/models/api_v1_misc_youtube_playlist_response1.py` |
| `MiscYoutubeCreateNewChannelPlaylistErrorBody` | `bundle_social/errors/misc_youtube_create_new_channel_playlist_error.py` |
| `ApiV1MiscYoutubePlaylist400Error1` | `bundle_social/models/api_v1_misc_youtube_playlist400_error1.py` |
| `ApiV1MiscYoutubePlaylist401Error1` | `bundle_social/models/api_v1_misc_youtube_playlist401_error1.py` |
| `ApiV1MiscYoutubePlaylist403Error1` | `bundle_social/models/api_v1_misc_youtube_playlist403_error1.py` |
| `ApiV1MiscYoutubePlaylist404Error1` | `bundle_social/models/api_v1_misc_youtube_playlist404_error1.py` |
| `ApiV1MiscYoutubePlaylist429Error1` | `bundle_social/models/api_v1_misc_youtube_playlist429_error1.py` |
| `ApiV1MiscYoutubePlaylist500Error1` | `bundle_social/models/api_v1_misc_youtube_playlist500_error1.py` |
| `ApiV1MiscYoutubePlaylist502Error1` | `bundle_social/models/api_v1_misc_youtube_playlist502_error1.py` |
| `ApiV1MiscYoutubePlaylist503Error1` | `bundle_social/models/api_v1_misc_youtube_playlist503_error1.py` |
| `ApiV1MiscYoutubePlaylist504Error1` | `bundle_social/models/api_v1_misc_youtube_playlist504_error1.py` |

### client.misc.misc_youtube_delete_channel_playlist

- **Route**: `DELETE /api/v1/misc/youtube/playlist/{playlistId}`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_youtube_delete_channel_playlist(playlist_id: str, team_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `playlist_id`, `team_id`
- **Params**: `playlist_id` — path `playlistId` · `team_id` — query `teamId`
- **Returns (parsed)**: `bool`
- **Returns (raw)**: `ApiResult[bool, MiscYoutubeDeleteChannelPlaylistErrorBody]`
- **Error**: `MiscYoutubeDeleteChannelPlaylistErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscYoutubePlaylist400Error1` [400] · `ApiV1MiscYoutubePlaylist401Error1` [401] · `ApiV1MiscYoutubePlaylist403Error1` [403] · `ApiV1MiscYoutubePlaylist404Error1` [404] · `ApiV1MiscYoutubePlaylist429Error1` [429] · `ApiV1MiscYoutubePlaylist500Error1` [500] · `ApiV1MiscYoutubePlaylist502Error1` [502] · `ApiV1MiscYoutubePlaylist503Error1` [503] · `ApiV1MiscYoutubePlaylist504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MiscYoutubeDeleteChannelPlaylistErrorBody` | `bundle_social/errors/misc_youtube_delete_channel_playlist_error.py` |
| `ApiV1MiscYoutubePlaylist400Error1` | `bundle_social/models/api_v1_misc_youtube_playlist400_error1.py` |
| `ApiV1MiscYoutubePlaylist401Error1` | `bundle_social/models/api_v1_misc_youtube_playlist401_error1.py` |
| `ApiV1MiscYoutubePlaylist403Error1` | `bundle_social/models/api_v1_misc_youtube_playlist403_error1.py` |
| `ApiV1MiscYoutubePlaylist404Error1` | `bundle_social/models/api_v1_misc_youtube_playlist404_error1.py` |
| `ApiV1MiscYoutubePlaylist429Error1` | `bundle_social/models/api_v1_misc_youtube_playlist429_error1.py` |
| `ApiV1MiscYoutubePlaylist500Error1` | `bundle_social/models/api_v1_misc_youtube_playlist500_error1.py` |
| `ApiV1MiscYoutubePlaylist502Error1` | `bundle_social/models/api_v1_misc_youtube_playlist502_error1.py` |
| `ApiV1MiscYoutubePlaylist503Error1` | `bundle_social/models/api_v1_misc_youtube_playlist503_error1.py` |
| `ApiV1MiscYoutubePlaylist504Error1` | `bundle_social/models/api_v1_misc_youtube_playlist504_error1.py` |

### client.misc.misc_youtube_delete_comment

- **Route**: `DELETE /api/v1/misc/youtube/comment`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_youtube_delete_comment(*, body: ApiV1MiscYoutubeCommentRequest1 | ApiV1MiscYoutubeCommentRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscYoutubeCommentResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscYoutubeCommentResponse1, MiscYoutubeDeleteCommentErrorBody]`
- **Error**: `MiscYoutubeDeleteCommentErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscYoutubeComment400Error1` [400] · `ApiV1MiscYoutubeComment401Error1` [401] · `ApiV1MiscYoutubeComment403Error1` [403] · `ApiV1MiscYoutubeComment404Error1` [404] · `ApiV1MiscYoutubeComment429Error1` [429] · `ApiV1MiscYoutubeComment500Error1` [500] · `ApiV1MiscYoutubeComment502Error1` [502] · `ApiV1MiscYoutubeComment503Error1` [503] · `ApiV1MiscYoutubeComment504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscYoutubeCommentRequest1` | `bundle_social/models/api_v1_misc_youtube_comment_request1.py` |
| `ApiV1MiscYoutubeCommentRequest1Dict` | `bundle_social/models/api_v1_misc_youtube_comment_request1.py` |
| `ApiV1MiscYoutubeCommentResponse1` | `bundle_social/models/api_v1_misc_youtube_comment_response1.py` |
| `MiscYoutubeDeleteCommentErrorBody` | `bundle_social/errors/misc_youtube_delete_comment_error.py` |
| `ApiV1MiscYoutubeComment400Error1` | `bundle_social/models/api_v1_misc_youtube_comment400_error1.py` |
| `ApiV1MiscYoutubeComment401Error1` | `bundle_social/models/api_v1_misc_youtube_comment401_error1.py` |
| `ApiV1MiscYoutubeComment403Error1` | `bundle_social/models/api_v1_misc_youtube_comment403_error1.py` |
| `ApiV1MiscYoutubeComment404Error1` | `bundle_social/models/api_v1_misc_youtube_comment404_error1.py` |
| `ApiV1MiscYoutubeComment429Error1` | `bundle_social/models/api_v1_misc_youtube_comment429_error1.py` |
| `ApiV1MiscYoutubeComment500Error1` | `bundle_social/models/api_v1_misc_youtube_comment500_error1.py` |
| `ApiV1MiscYoutubeComment502Error1` | `bundle_social/models/api_v1_misc_youtube_comment502_error1.py` |
| `ApiV1MiscYoutubeComment503Error1` | `bundle_social/models/api_v1_misc_youtube_comment503_error1.py` |
| `ApiV1MiscYoutubeComment504Error1` | `bundle_social/models/api_v1_misc_youtube_comment504_error1.py` |

### client.misc.misc_youtube_delete_video

- **Route**: `DELETE /api/v1/misc/youtube/video`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_youtube_delete_video(*, body: ApiV1MiscYoutubeVideoRequest1 | ApiV1MiscYoutubeVideoRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscYoutubeVideoResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscYoutubeVideoResponse1, MiscYoutubeDeleteVideoErrorBody]`
- **Error**: `MiscYoutubeDeleteVideoErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscYoutubeVideo400Error1` [400] · `ApiV1MiscYoutubeVideo401Error1` [401] · `ApiV1MiscYoutubeVideo403Error1` [403] · `ApiV1MiscYoutubeVideo404Error1` [404] · `ApiV1MiscYoutubeVideo429Error1` [429] · `ApiV1MiscYoutubeVideo500Error1` [500] · `ApiV1MiscYoutubeVideo502Error1` [502] · `ApiV1MiscYoutubeVideo503Error1` [503] · `ApiV1MiscYoutubeVideo504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscYoutubeVideoRequest1` | `bundle_social/models/api_v1_misc_youtube_video_request1.py` |
| `ApiV1MiscYoutubeVideoRequest1Dict` | `bundle_social/models/api_v1_misc_youtube_video_request1.py` |
| `ApiV1MiscYoutubeVideoResponse1` | `bundle_social/models/api_v1_misc_youtube_video_response1.py` |
| `MiscYoutubeDeleteVideoErrorBody` | `bundle_social/errors/misc_youtube_delete_video_error.py` |
| `ApiV1MiscYoutubeVideo400Error1` | `bundle_social/models/api_v1_misc_youtube_video400_error1.py` |
| `ApiV1MiscYoutubeVideo401Error1` | `bundle_social/models/api_v1_misc_youtube_video401_error1.py` |
| `ApiV1MiscYoutubeVideo403Error1` | `bundle_social/models/api_v1_misc_youtube_video403_error1.py` |
| `ApiV1MiscYoutubeVideo404Error1` | `bundle_social/models/api_v1_misc_youtube_video404_error1.py` |
| `ApiV1MiscYoutubeVideo429Error1` | `bundle_social/models/api_v1_misc_youtube_video429_error1.py` |
| `ApiV1MiscYoutubeVideo500Error1` | `bundle_social/models/api_v1_misc_youtube_video500_error1.py` |
| `ApiV1MiscYoutubeVideo502Error1` | `bundle_social/models/api_v1_misc_youtube_video502_error1.py` |
| `ApiV1MiscYoutubeVideo503Error1` | `bundle_social/models/api_v1_misc_youtube_video503_error1.py` |
| `ApiV1MiscYoutubeVideo504Error1` | `bundle_social/models/api_v1_misc_youtube_video504_error1.py` |

### client.misc.misc_youtube_delete_video_from_playlist

- **Route**: `DELETE /api/v1/misc/youtube/playlist-items/{playlistItemId}`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_youtube_delete_video_from_playlist(playlist_item_id: str, team_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `playlist_item_id`, `team_id`
- **Params**: `playlist_item_id` — path `playlistItemId` · `team_id` — query `teamId`
- **Returns (parsed)**: `bool`
- **Returns (raw)**: `ApiResult[bool, MiscYoutubeDeleteVideoFromPlaylistErrorBody]`
- **Error**: `MiscYoutubeDeleteVideoFromPlaylistErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscYoutubePlaylistItems400Error1` [400] · `ApiV1MiscYoutubePlaylistItems401Error1` [401] · `ApiV1MiscYoutubePlaylistItems403Error1` [403] · `ApiV1MiscYoutubePlaylistItems404Error1` [404] · `ApiV1MiscYoutubePlaylistItems429Error1` [429] · `ApiV1MiscYoutubePlaylistItems500Error1` [500] · `ApiV1MiscYoutubePlaylistItems502Error1` [502] · `ApiV1MiscYoutubePlaylistItems503Error1` [503] · `ApiV1MiscYoutubePlaylistItems504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MiscYoutubeDeleteVideoFromPlaylistErrorBody` | `bundle_social/errors/misc_youtube_delete_video_from_playlist_error.py` |
| `ApiV1MiscYoutubePlaylistItems400Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items400_error1.py` |
| `ApiV1MiscYoutubePlaylistItems401Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items401_error1.py` |
| `ApiV1MiscYoutubePlaylistItems403Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items403_error1.py` |
| `ApiV1MiscYoutubePlaylistItems404Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items404_error1.py` |
| `ApiV1MiscYoutubePlaylistItems429Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items429_error1.py` |
| `ApiV1MiscYoutubePlaylistItems500Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items500_error1.py` |
| `ApiV1MiscYoutubePlaylistItems502Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items502_error1.py` |
| `ApiV1MiscYoutubePlaylistItems503Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items503_error1.py` |
| `ApiV1MiscYoutubePlaylistItems504Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items504_error1.py` |

### client.misc.misc_youtube_edit_comment

- **Route**: `PATCH /api/v1/misc/youtube/comment`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_youtube_edit_comment(*, body: ApiV1MiscYoutubeCommentRequest | ApiV1MiscYoutubeCommentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscYoutubeCommentResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscYoutubeCommentResponse, MiscYoutubeEditCommentErrorBody]`
- **Error**: `MiscYoutubeEditCommentErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscYoutubeComment400Error1` [400] · `ApiV1MiscYoutubeComment401Error1` [401] · `ApiV1MiscYoutubeComment403Error1` [403] · `ApiV1MiscYoutubeComment404Error1` [404] · `ApiV1MiscYoutubeComment429Error1` [429] · `ApiV1MiscYoutubeComment500Error1` [500] · `ApiV1MiscYoutubeComment502Error1` [502] · `ApiV1MiscYoutubeComment503Error1` [503] · `ApiV1MiscYoutubeComment504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscYoutubeCommentRequest` | `bundle_social/models/api_v1_misc_youtube_comment_request.py` |
| `ApiV1MiscYoutubeCommentRequestDict` | `bundle_social/models/api_v1_misc_youtube_comment_request.py` |
| `ApiV1MiscYoutubeCommentResponse` | `bundle_social/models/api_v1_misc_youtube_comment_response.py` |
| `MiscYoutubeEditCommentErrorBody` | `bundle_social/errors/misc_youtube_edit_comment_error.py` |
| `ApiV1MiscYoutubeComment400Error1` | `bundle_social/models/api_v1_misc_youtube_comment400_error1.py` |
| `ApiV1MiscYoutubeComment401Error1` | `bundle_social/models/api_v1_misc_youtube_comment401_error1.py` |
| `ApiV1MiscYoutubeComment403Error1` | `bundle_social/models/api_v1_misc_youtube_comment403_error1.py` |
| `ApiV1MiscYoutubeComment404Error1` | `bundle_social/models/api_v1_misc_youtube_comment404_error1.py` |
| `ApiV1MiscYoutubeComment429Error1` | `bundle_social/models/api_v1_misc_youtube_comment429_error1.py` |
| `ApiV1MiscYoutubeComment500Error1` | `bundle_social/models/api_v1_misc_youtube_comment500_error1.py` |
| `ApiV1MiscYoutubeComment502Error1` | `bundle_social/models/api_v1_misc_youtube_comment502_error1.py` |
| `ApiV1MiscYoutubeComment503Error1` | `bundle_social/models/api_v1_misc_youtube_comment503_error1.py` |
| `ApiV1MiscYoutubeComment504Error1` | `bundle_social/models/api_v1_misc_youtube_comment504_error1.py` |

### client.misc.misc_youtube_edit_video

- **Route**: `PATCH /api/v1/misc/youtube/video`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_youtube_edit_video(*, body: ApiV1MiscYoutubeVideoRequest | ApiV1MiscYoutubeVideoRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscYoutubeVideoResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscYoutubeVideoResponse, MiscYoutubeEditVideoErrorBody]`
- **Error**: `MiscYoutubeEditVideoErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscYoutubeVideo400Error1` [400] · `ApiV1MiscYoutubeVideo401Error1` [401] · `ApiV1MiscYoutubeVideo403Error1` [403] · `ApiV1MiscYoutubeVideo404Error1` [404] · `ApiV1MiscYoutubeVideo429Error1` [429] · `ApiV1MiscYoutubeVideo500Error1` [500] · `ApiV1MiscYoutubeVideo502Error1` [502] · `ApiV1MiscYoutubeVideo503Error1` [503] · `ApiV1MiscYoutubeVideo504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscYoutubeVideoRequest` | `bundle_social/models/api_v1_misc_youtube_video_request.py` |
| `ApiV1MiscYoutubeVideoRequestDict` | `bundle_social/models/api_v1_misc_youtube_video_request.py` |
| `ApiV1MiscYoutubeVideoResponse` | `bundle_social/models/api_v1_misc_youtube_video_response.py` |
| `MiscYoutubeEditVideoErrorBody` | `bundle_social/errors/misc_youtube_edit_video_error.py` |
| `ApiV1MiscYoutubeVideo400Error1` | `bundle_social/models/api_v1_misc_youtube_video400_error1.py` |
| `ApiV1MiscYoutubeVideo401Error1` | `bundle_social/models/api_v1_misc_youtube_video401_error1.py` |
| `ApiV1MiscYoutubeVideo403Error1` | `bundle_social/models/api_v1_misc_youtube_video403_error1.py` |
| `ApiV1MiscYoutubeVideo404Error1` | `bundle_social/models/api_v1_misc_youtube_video404_error1.py` |
| `ApiV1MiscYoutubeVideo429Error1` | `bundle_social/models/api_v1_misc_youtube_video429_error1.py` |
| `ApiV1MiscYoutubeVideo500Error1` | `bundle_social/models/api_v1_misc_youtube_video500_error1.py` |
| `ApiV1MiscYoutubeVideo502Error1` | `bundle_social/models/api_v1_misc_youtube_video502_error1.py` |
| `ApiV1MiscYoutubeVideo503Error1` | `bundle_social/models/api_v1_misc_youtube_video503_error1.py` |
| `ApiV1MiscYoutubeVideo504Error1` | `bundle_social/models/api_v1_misc_youtube_video504_error1.py` |

### client.misc.misc_youtube_get_channel_playlist

- **Route**: `GET /api/v1/misc/youtube/playlist`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_youtube_get_channel_playlist(team_id: str, *, max_results: int | None = 10, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId` · `max_results` — query `maxResults`
- **Returns (parsed)**: `ApiV1MiscYoutubePlaylistResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscYoutubePlaylistResponse, MiscYoutubeGetChannelPlaylistErrorBody]`
- **Error**: `MiscYoutubeGetChannelPlaylistErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscYoutubePlaylist400Error1` [400] · `ApiV1MiscYoutubePlaylist401Error1` [401] · `ApiV1MiscYoutubePlaylist403Error1` [403] · `ApiV1MiscYoutubePlaylist404Error1` [404] · `ApiV1MiscYoutubePlaylist429Error1` [429] · `ApiV1MiscYoutubePlaylist500Error1` [500] · `ApiV1MiscYoutubePlaylist502Error1` [502] · `ApiV1MiscYoutubePlaylist503Error1` [503] · `ApiV1MiscYoutubePlaylist504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscYoutubePlaylistResponse` | `bundle_social/models/api_v1_misc_youtube_playlist_response.py` |
| `MiscYoutubeGetChannelPlaylistErrorBody` | `bundle_social/errors/misc_youtube_get_channel_playlist_error.py` |
| `ApiV1MiscYoutubePlaylist400Error1` | `bundle_social/models/api_v1_misc_youtube_playlist400_error1.py` |
| `ApiV1MiscYoutubePlaylist401Error1` | `bundle_social/models/api_v1_misc_youtube_playlist401_error1.py` |
| `ApiV1MiscYoutubePlaylist403Error1` | `bundle_social/models/api_v1_misc_youtube_playlist403_error1.py` |
| `ApiV1MiscYoutubePlaylist404Error1` | `bundle_social/models/api_v1_misc_youtube_playlist404_error1.py` |
| `ApiV1MiscYoutubePlaylist429Error1` | `bundle_social/models/api_v1_misc_youtube_playlist429_error1.py` |
| `ApiV1MiscYoutubePlaylist500Error1` | `bundle_social/models/api_v1_misc_youtube_playlist500_error1.py` |
| `ApiV1MiscYoutubePlaylist502Error1` | `bundle_social/models/api_v1_misc_youtube_playlist502_error1.py` |
| `ApiV1MiscYoutubePlaylist503Error1` | `bundle_social/models/api_v1_misc_youtube_playlist503_error1.py` |
| `ApiV1MiscYoutubePlaylist504Error1` | `bundle_social/models/api_v1_misc_youtube_playlist504_error1.py` |

### client.misc.misc_youtube_get_regions

- **Route**: `GET /api/v1/misc/youtube/regions`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_youtube_get_regions(team_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId`
- **Returns (parsed)**: `ApiV1MiscYoutubeRegionsResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscYoutubeRegionsResponse, MiscYoutubeGetRegionsErrorBody]`
- **Error**: `MiscYoutubeGetRegionsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscYoutubeRegions400Error1` [400] · `ApiV1MiscYoutubeRegions401Error1` [401] · `ApiV1MiscYoutubeRegions403Error1` [403] · `ApiV1MiscYoutubeRegions404Error1` [404] · `ApiV1MiscYoutubeRegions429Error1` [429] · `ApiV1MiscYoutubeRegions500Error1` [500] · `ApiV1MiscYoutubeRegions502Error1` [502] · `ApiV1MiscYoutubeRegions503Error1` [503] · `ApiV1MiscYoutubeRegions504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscYoutubeRegionsResponse` | `bundle_social/models/api_v1_misc_youtube_regions_response.py` |
| `MiscYoutubeGetRegionsErrorBody` | `bundle_social/errors/misc_youtube_get_regions_error.py` |
| `ApiV1MiscYoutubeRegions400Error1` | `bundle_social/models/api_v1_misc_youtube_regions400_error1.py` |
| `ApiV1MiscYoutubeRegions401Error1` | `bundle_social/models/api_v1_misc_youtube_regions401_error1.py` |
| `ApiV1MiscYoutubeRegions403Error1` | `bundle_social/models/api_v1_misc_youtube_regions403_error1.py` |
| `ApiV1MiscYoutubeRegions404Error1` | `bundle_social/models/api_v1_misc_youtube_regions404_error1.py` |
| `ApiV1MiscYoutubeRegions429Error1` | `bundle_social/models/api_v1_misc_youtube_regions429_error1.py` |
| `ApiV1MiscYoutubeRegions500Error1` | `bundle_social/models/api_v1_misc_youtube_regions500_error1.py` |
| `ApiV1MiscYoutubeRegions502Error1` | `bundle_social/models/api_v1_misc_youtube_regions502_error1.py` |
| `ApiV1MiscYoutubeRegions503Error1` | `bundle_social/models/api_v1_misc_youtube_regions503_error1.py` |
| `ApiV1MiscYoutubeRegions504Error1` | `bundle_social/models/api_v1_misc_youtube_regions504_error1.py` |

### client.misc.misc_youtube_get_video_categories

- **Route**: `GET /api/v1/misc/youtube/video-categories`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_youtube_get_video_categories(team_id: str, *, region_code: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId` · `region_code` — query `regionCode`
- **Returns (parsed)**: `ApiV1MiscYoutubeVideoCategoriesResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscYoutubeVideoCategoriesResponse, MiscYoutubeGetVideoCategoriesErrorBody]`
- **Error**: `MiscYoutubeGetVideoCategoriesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscYoutubeVideoCategories400Error1` [400] · `ApiV1MiscYoutubeVideoCategories401Error1` [401] · `ApiV1MiscYoutubeVideoCategories403Error1` [403] · `ApiV1MiscYoutubeVideoCategories404Error1` [404] · `ApiV1MiscYoutubeVideoCategories429Error1` [429] · `ApiV1MiscYoutubeVideoCategories500Error1` [500] · `ApiV1MiscYoutubeVideoCategories502Error1` [502] · `ApiV1MiscYoutubeVideoCategories503Error1` [503] · `ApiV1MiscYoutubeVideoCategories504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscYoutubeVideoCategoriesResponse` | `bundle_social/models/api_v1_misc_youtube_video_categories_response.py` |
| `MiscYoutubeGetVideoCategoriesErrorBody` | `bundle_social/errors/misc_youtube_get_video_categories_error.py` |
| `ApiV1MiscYoutubeVideoCategories400Error1` | `bundle_social/models/api_v1_misc_youtube_video_categories400_error1.py` |
| `ApiV1MiscYoutubeVideoCategories401Error1` | `bundle_social/models/api_v1_misc_youtube_video_categories401_error1.py` |
| `ApiV1MiscYoutubeVideoCategories403Error1` | `bundle_social/models/api_v1_misc_youtube_video_categories403_error1.py` |
| `ApiV1MiscYoutubeVideoCategories404Error1` | `bundle_social/models/api_v1_misc_youtube_video_categories404_error1.py` |
| `ApiV1MiscYoutubeVideoCategories429Error1` | `bundle_social/models/api_v1_misc_youtube_video_categories429_error1.py` |
| `ApiV1MiscYoutubeVideoCategories500Error1` | `bundle_social/models/api_v1_misc_youtube_video_categories500_error1.py` |
| `ApiV1MiscYoutubeVideoCategories502Error1` | `bundle_social/models/api_v1_misc_youtube_video_categories502_error1.py` |
| `ApiV1MiscYoutubeVideoCategories503Error1` | `bundle_social/models/api_v1_misc_youtube_video_categories503_error1.py` |
| `ApiV1MiscYoutubeVideoCategories504Error1` | `bundle_social/models/api_v1_misc_youtube_video_categories504_error1.py` |

### client.misc.misc_youtube_get_videos_from_playlist

- **Route**: `GET /api/v1/misc/youtube/playlist-items`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_youtube_get_videos_from_playlist(team_id: str, playlist_id: str, *, max_results: int | None = 10, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`, `playlist_id`
- **Params**: `team_id` — query `teamId` · `playlist_id` — query `playlistId` · `max_results` — query `maxResults`
- **Returns (parsed)**: `ApiV1MiscYoutubePlaylistItemsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscYoutubePlaylistItemsResponse1, MiscYoutubeGetVideosFromPlaylistErrorBody]`
- **Error**: `MiscYoutubeGetVideosFromPlaylistErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscYoutubePlaylistItems400Error1` [400] · `ApiV1MiscYoutubePlaylistItems401Error1` [401] · `ApiV1MiscYoutubePlaylistItems403Error1` [403] · `ApiV1MiscYoutubePlaylistItems404Error1` [404] · `ApiV1MiscYoutubePlaylistItems429Error1` [429] · `ApiV1MiscYoutubePlaylistItems500Error1` [500] · `ApiV1MiscYoutubePlaylistItems502Error1` [502] · `ApiV1MiscYoutubePlaylistItems503Error1` [503] · `ApiV1MiscYoutubePlaylistItems504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscYoutubePlaylistItemsResponse1` | `bundle_social/models/api_v1_misc_youtube_playlist_items_response1.py` |
| `MiscYoutubeGetVideosFromPlaylistErrorBody` | `bundle_social/errors/misc_youtube_get_videos_from_playlist_error.py` |
| `ApiV1MiscYoutubePlaylistItems400Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items400_error1.py` |
| `ApiV1MiscYoutubePlaylistItems401Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items401_error1.py` |
| `ApiV1MiscYoutubePlaylistItems403Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items403_error1.py` |
| `ApiV1MiscYoutubePlaylistItems404Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items404_error1.py` |
| `ApiV1MiscYoutubePlaylistItems429Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items429_error1.py` |
| `ApiV1MiscYoutubePlaylistItems500Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items500_error1.py` |
| `ApiV1MiscYoutubePlaylistItems502Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items502_error1.py` |
| `ApiV1MiscYoutubePlaylistItems503Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items503_error1.py` |
| `ApiV1MiscYoutubePlaylistItems504Error1` | `bundle_social/models/api_v1_misc_youtube_playlist_items504_error1.py` |

### client.misc.misc_youtube_set_thumbnail

- **Route**: `POST /api/v1/misc/youtube/thumbnail`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_youtube_set_thumbnail(*, body: ApiV1MiscYoutubeThumbnailRequest | ApiV1MiscYoutubeThumbnailRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscYoutubeThumbnailResponse`
- **Returns (raw)**: `ApiResult[ApiV1MiscYoutubeThumbnailResponse, MiscYoutubeSetThumbnailErrorBody]`
- **Error**: `MiscYoutubeSetThumbnailErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscYoutubeThumbnail400Error1` [400] · `ApiV1MiscYoutubeThumbnail401Error1` [401] · `ApiV1MiscYoutubeThumbnail403Error1` [403] · `ApiV1MiscYoutubeThumbnail404Error1` [404] · `ApiV1MiscYoutubeThumbnail429Error1` [429] · `ApiV1MiscYoutubeThumbnail500Error1` [500] · `ApiV1MiscYoutubeThumbnail502Error1` [502] · `ApiV1MiscYoutubeThumbnail503Error1` [503] · `ApiV1MiscYoutubeThumbnail504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscYoutubeThumbnailRequest` | `bundle_social/models/api_v1_misc_youtube_thumbnail_request.py` |
| `ApiV1MiscYoutubeThumbnailRequestDict` | `bundle_social/models/api_v1_misc_youtube_thumbnail_request.py` |
| `ApiV1MiscYoutubeThumbnailResponse` | `bundle_social/models/api_v1_misc_youtube_thumbnail_response.py` |
| `MiscYoutubeSetThumbnailErrorBody` | `bundle_social/errors/misc_youtube_set_thumbnail_error.py` |
| `ApiV1MiscYoutubeThumbnail400Error1` | `bundle_social/models/api_v1_misc_youtube_thumbnail400_error1.py` |
| `ApiV1MiscYoutubeThumbnail401Error1` | `bundle_social/models/api_v1_misc_youtube_thumbnail401_error1.py` |
| `ApiV1MiscYoutubeThumbnail403Error1` | `bundle_social/models/api_v1_misc_youtube_thumbnail403_error1.py` |
| `ApiV1MiscYoutubeThumbnail404Error1` | `bundle_social/models/api_v1_misc_youtube_thumbnail404_error1.py` |
| `ApiV1MiscYoutubeThumbnail429Error1` | `bundle_social/models/api_v1_misc_youtube_thumbnail429_error1.py` |
| `ApiV1MiscYoutubeThumbnail500Error1` | `bundle_social/models/api_v1_misc_youtube_thumbnail500_error1.py` |
| `ApiV1MiscYoutubeThumbnail502Error1` | `bundle_social/models/api_v1_misc_youtube_thumbnail502_error1.py` |
| `ApiV1MiscYoutubeThumbnail503Error1` | `bundle_social/models/api_v1_misc_youtube_thumbnail503_error1.py` |
| `ApiV1MiscYoutubeThumbnail504Error1` | `bundle_social/models/api_v1_misc_youtube_thumbnail504_error1.py` |

### client.misc.misc_youtube_update_channel_playlist

- **Route**: `PUT /api/v1/misc/youtube/playlist`
- **Auth**: `api_key_auth`
- **Signature**: `def misc_youtube_update_channel_playlist(*, body: ApiV1MiscYoutubePlaylistRequest1 | ApiV1MiscYoutubePlaylistRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1MiscYoutubePlaylistResponse1`
- **Returns (raw)**: `ApiResult[ApiV1MiscYoutubePlaylistResponse1, MiscYoutubeUpdateChannelPlaylistErrorBody]`
- **Error**: `MiscYoutubeUpdateChannelPlaylistErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1MiscYoutubePlaylist400Error1` [400] · `ApiV1MiscYoutubePlaylist401Error1` [401] · `ApiV1MiscYoutubePlaylist403Error1` [403] · `ApiV1MiscYoutubePlaylist404Error1` [404] · `ApiV1MiscYoutubePlaylist429Error1` [429] · `ApiV1MiscYoutubePlaylist500Error1` [500] · `ApiV1MiscYoutubePlaylist502Error1` [502] · `ApiV1MiscYoutubePlaylist503Error1` [503] · `ApiV1MiscYoutubePlaylist504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MiscYoutubePlaylistRequest1` | `bundle_social/models/api_v1_misc_youtube_playlist_request1.py` |
| `ApiV1MiscYoutubePlaylistRequest1Dict` | `bundle_social/models/api_v1_misc_youtube_playlist_request1.py` |
| `ApiV1MiscYoutubePlaylistResponse1` | `bundle_social/models/api_v1_misc_youtube_playlist_response1.py` |
| `MiscYoutubeUpdateChannelPlaylistErrorBody` | `bundle_social/errors/misc_youtube_update_channel_playlist_error.py` |
| `ApiV1MiscYoutubePlaylist400Error1` | `bundle_social/models/api_v1_misc_youtube_playlist400_error1.py` |
| `ApiV1MiscYoutubePlaylist401Error1` | `bundle_social/models/api_v1_misc_youtube_playlist401_error1.py` |
| `ApiV1MiscYoutubePlaylist403Error1` | `bundle_social/models/api_v1_misc_youtube_playlist403_error1.py` |
| `ApiV1MiscYoutubePlaylist404Error1` | `bundle_social/models/api_v1_misc_youtube_playlist404_error1.py` |
| `ApiV1MiscYoutubePlaylist429Error1` | `bundle_social/models/api_v1_misc_youtube_playlist429_error1.py` |
| `ApiV1MiscYoutubePlaylist500Error1` | `bundle_social/models/api_v1_misc_youtube_playlist500_error1.py` |
| `ApiV1MiscYoutubePlaylist502Error1` | `bundle_social/models/api_v1_misc_youtube_playlist502_error1.py` |
| `ApiV1MiscYoutubePlaylist503Error1` | `bundle_social/models/api_v1_misc_youtube_playlist503_error1.py` |
| `ApiV1MiscYoutubePlaylist504Error1` | `bundle_social/models/api_v1_misc_youtube_playlist504_error1.py` |

