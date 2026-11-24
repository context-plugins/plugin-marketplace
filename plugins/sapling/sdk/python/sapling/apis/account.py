from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.sapling_account_status_error import SaplingAccountStatusErrorBody, sapling_account_status_error_mapper
from ..errors.sapling_account_status_post_error import (
    SaplingAccountStatusPostErrorBody,
    sapling_account_status_post_error_mapper,
)
from ..errors.sapling_api_endpoint_usage_error import (
    SaplingApiEndpointUsageErrorBody,
    sapling_api_endpoint_usage_error_mapper,
)
from ..errors.sapling_api_quota_usage_error import SaplingApiQuotaUsageErrorBody, sapling_api_quota_usage_error_mapper
from ..errors.sapling_api_usage_error import SaplingApiUsageErrorBody, sapling_api_usage_error_mapper
from ..errors.sapling_api_user_activity_error import (
    SaplingApiUserActivityErrorBody,
    sapling_api_user_activity_error_mapper,
)
from ..models.api_v1_account_status_request import ApiV1AccountStatusRequest, ApiV1AccountStatusRequestDict
from ..models.api_v1_account_status_response import ApiV1AccountStatusResponse
from ..models.api_v1_reporting_api_endpoint_usage_request import (
    ApiV1ReportingApiEndpointUsageRequest,
    ApiV1ReportingApiEndpointUsageRequestDict,
)
from ..models.api_v1_reporting_api_endpoint_usage_response import ApiV1ReportingApiEndpointUsageResponse
from ..models.api_v1_reporting_api_quota_usage_request import (
    ApiV1ReportingApiQuotaUsageRequest,
    ApiV1ReportingApiQuotaUsageRequestDict,
)
from ..models.api_v1_reporting_api_quota_usage_response import ApiV1ReportingApiQuotaUsageResponse
from ..models.api_v1_reporting_api_usage_request import ApiV1ReportingApiUsageRequest, ApiV1ReportingApiUsageRequestDict
from ..models.api_v1_reporting_api_usage_response import ApiV1ReportingApiUsageResponse
from ..models.api_v1_reporting_api_user_activity_request import (
    ApiV1ReportingApiUserActivityRequest,
    ApiV1ReportingApiUserActivityRequestDict,
)
from ..models.api_v1_reporting_api_user_activity_response import ApiV1ReportingApiUserActivityResponse
from ..server.server import Server


class Account:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountWithRawResponse(client, server, auth)

    def sapling_account_status(
        self, *, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1AccountStatusResponse:
        """One-call self-diagnosis for the presented key: whether billable endpoints will serve it, and if not why
        (``blocked_reason``) and for how long (``retry_after``). Works even when the key is blocked. The same handler is
        exposed on POST (sapling_account_status_post). Team-scoped keys receive only the verdict and their own quota.

        Args:
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Access verdict plus credit, subscription, usage and trial details.

        Raises:
            ApiError: Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not
                401.) The public (client-side) API key cannot query account status. MCP OAuth access tokens are not
                accepted by this operation; send an API key. Rate limited. Wait retry_after seconds (also in the
                Retry-After header) and retry. If retry_after is absent, the request exceeds the bucket capacity and can
                never succeed unchanged. Unexpected server error. Report persistent occurrences to support@sapling.ai.
                ``error`` is ``Error | RateLimited1 | RawError``."""
        return unwrap(
            self._with_raw_response.sapling_account_status(return_usage=return_usage, request_options=request_options)
        )

    def sapling_account_status_post(
        self,
        *,
        body: ApiV1AccountStatusRequest | ApiV1AccountStatusRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AccountStatusResponse:
        """POST form of GET /api/v1/account/status (sapling_account_status), for clients that credential via a JSON
        ``key`` body. Identical behavior and response.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Access verdict plus credit, subscription, usage and trial details.

        Raises:
            ApiError: Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not
                401.) The public (client-side) API key cannot query account status. MCP OAuth access tokens are not
                accepted by this operation; send an API key. Rate limited. Wait retry_after seconds (also in the
                Retry-After header) and retry. If retry_after is absent, the request exceeds the bucket capacity and can
                never succeed unchanged. Unexpected server error. Report persistent occurrences to support@sapling.ai.
                ``error`` is ``Error | RateLimited1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_account_status_post(body=body, request_options=request_options))

    def sapling_api_endpoint_usage(
        self,
        body: ApiV1ReportingApiEndpointUsageRequest | ApiV1ReportingApiEndpointUsageRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReportingApiEndpointUsageResponse:
        """Characters per endpoint, bucketed by day, week or month. The body must be a non-empty JSON object.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            {"data": {endpoint: {bucket: characters}}, "last_updated"}.

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check such as
                a size limit or empty text). Validator rejections prefix ``msg`` with "400 Bad Request:". Missing or
                invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.) Payment
                required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). The
                requested window reaches further back than the maximum reporting range (about one year). MCP OAuth
                access tokens are not accepted by this operation; send an API key. Request body over 4MB. Note the body
                uses ``message`` and ``result`` keys, not the usual ``msg``. Applies to requests authenticated via the
                Authorization header; a body-key-only request over the limit fails authentication instead (401), because
                the key cannot be read from the oversized body. Unexpected server error. Report persistent occurrences
                to support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_api_endpoint_usage(body, request_options=request_options))

    def sapling_api_quota_usage(
        self,
        body: ApiV1ReportingApiQuotaUsageRequest | ApiV1ReportingApiQuotaUsageRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReportingApiQuotaUsageResponse:
        """Quota, characters used, and suggestion accept/ignore counts over a window of days. Send a JSON body (it may
        be ``{}``).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Quota summary.

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check such as
                a size limit or empty text). Validator rejections prefix ``msg`` with "400 Bad Request:". Missing or
                invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.) Payment
                required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). The
                requested window reaches further back than the maximum reporting range (about one year). MCP OAuth
                access tokens are not accepted by this operation; send an API key. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_api_quota_usage(body, request_options=request_options))

    def sapling_api_usage(
        self,
        *,
        body: ApiV1ReportingApiUsageRequest | ApiV1ReportingApiUsageRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReportingApiUsageResponse:
        """Characters and cost over a window of days, broken down by API key, endpoint, day and month. The body is
        optional.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Usage report.

        Raises:
            ApiError: Non-integer or negative day offsets, or start before end. Missing or invalid API key or OAuth
                access token. (An EXPIRED key or subscription answers 402, not 401.) Payment required. Two distinct
                cases share this status. (1) A PERMANENT block — an expired API key or subscription, or exhausted
                quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as re-authenticating or
                retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A TEMPORARY free-trial
                block — a trial-only key that hit its daily character cap: this clears on its own when the cap resets at
                the next UTC midnight, its ``Retry-After`` states that actual reset, and the body carries a matching
                numeric ``retry_after`` field (whose presence also distinguishes the two cases). The requested window
                reaches further back than the maximum reporting range (about one year). MCP OAuth access tokens are not
                accepted by this operation; send an API key. Unexpected server error. Report persistent occurrences to
                support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_api_usage(body=body, request_options=request_options))

    def sapling_api_user_activity(
        self,
        body: ApiV1ReportingApiUserActivityRequest | ApiV1ReportingApiUserActivityRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReportingApiUserActivityResponse:
        """Edits shown, accepted and ignored, plus active-user counts (logged-in and anonymous), over a window of days.
        Send a non-empty JSON body (unlike /api/v1/reporting/api_usage this handler rejects an absent or empty ``{}``
        body with 400); the window defaults to the last 6 days when a field is omitted.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Activity summary.

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check such as
                a size limit or empty text). Validator rejections prefix ``msg`` with "400 Bad Request:". Missing or
                invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.) Payment
                required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). The
                requested window reaches further back than the maximum reporting range (about one year). MCP OAuth
                access tokens are not accepted by this operation; send an API key. Request body over 4MB. Note the body
                uses ``message`` and ``result`` keys, not the usual ``msg``. Applies to requests authenticated via the
                Authorization header; a body-key-only request over the limit fails authentication instead (401), because
                the key cannot be read from the oversized body. Unexpected server error. Report persistent occurrences
                to support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_api_user_activity(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AccountWithRawResponse:
        return self._with_raw_response


class AsyncAccount:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountWithRawResponse(client, server, auth)

    async def sapling_account_status(
        self, *, return_usage: bool | None = False, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1AccountStatusResponse:
        """One-call self-diagnosis for the presented key: whether billable endpoints will serve it, and if not why
        (``blocked_reason``) and for how long (``retry_after``). Works even when the key is blocked. The same handler is
        exposed on POST (sapling_account_status_post). Team-scoped keys receive only the verdict and their own quota.

        Args:
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Access verdict plus credit, subscription, usage and trial details.

        Raises:
            ApiError: Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not
                401.) The public (client-side) API key cannot query account status. MCP OAuth access tokens are not
                accepted by this operation; send an API key. Rate limited. Wait retry_after seconds (also in the
                Retry-After header) and retry. If retry_after is absent, the request exceeds the bucket capacity and can
                never succeed unchanged. Unexpected server error. Report persistent occurrences to support@sapling.ai.
                ``error`` is ``Error | RateLimited1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_account_status(
                return_usage=return_usage, request_options=request_options
            ),
        )

    async def sapling_account_status_post(
        self,
        *,
        body: ApiV1AccountStatusRequest | ApiV1AccountStatusRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AccountStatusResponse:
        """POST form of GET /api/v1/account/status (sapling_account_status), for clients that credential via a JSON
        ``key`` body. Identical behavior and response.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Access verdict plus credit, subscription, usage and trial details.

        Raises:
            ApiError: Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not
                401.) The public (client-side) API key cannot query account status. MCP OAuth access tokens are not
                accepted by this operation; send an API key. Rate limited. Wait retry_after seconds (also in the
                Retry-After header) and retry. If retry_after is absent, the request exceeds the bucket capacity and can
                never succeed unchanged. Unexpected server error. Report persistent occurrences to support@sapling.ai.
                ``error`` is ``Error | RateLimited1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_account_status_post(body=body, request_options=request_options)
        )

    async def sapling_api_endpoint_usage(
        self,
        body: ApiV1ReportingApiEndpointUsageRequest | ApiV1ReportingApiEndpointUsageRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReportingApiEndpointUsageResponse:
        """Characters per endpoint, bucketed by day, week or month. The body must be a non-empty JSON object.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            {"data": {endpoint: {bucket: characters}}, "last_updated"}.

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check such as
                a size limit or empty text). Validator rejections prefix ``msg`` with "400 Bad Request:". Missing or
                invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.) Payment
                required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). The
                requested window reaches further back than the maximum reporting range (about one year). MCP OAuth
                access tokens are not accepted by this operation; send an API key. Request body over 4MB. Note the body
                uses ``message`` and ``result`` keys, not the usual ``msg``. Applies to requests authenticated via the
                Authorization header; a body-key-only request over the limit fails authentication instead (401), because
                the key cannot be read from the oversized body. Unexpected server error. Report persistent occurrences
                to support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_api_endpoint_usage(body, request_options=request_options))

    async def sapling_api_quota_usage(
        self,
        body: ApiV1ReportingApiQuotaUsageRequest | ApiV1ReportingApiQuotaUsageRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReportingApiQuotaUsageResponse:
        """Quota, characters used, and suggestion accept/ignore counts over a window of days. Send a JSON body (it may
        be ``{}``).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Quota summary.

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check such as
                a size limit or empty text). Validator rejections prefix ``msg`` with "400 Bad Request:". Missing or
                invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.) Payment
                required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). The
                requested window reaches further back than the maximum reporting range (about one year). MCP OAuth
                access tokens are not accepted by this operation; send an API key. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_api_quota_usage(body, request_options=request_options))

    async def sapling_api_usage(
        self,
        *,
        body: ApiV1ReportingApiUsageRequest | ApiV1ReportingApiUsageRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReportingApiUsageResponse:
        """Characters and cost over a window of days, broken down by API key, endpoint, day and month. The body is
        optional.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Usage report.

        Raises:
            ApiError: Non-integer or negative day offsets, or start before end. Missing or invalid API key or OAuth
                access token. (An EXPIRED key or subscription answers 402, not 401.) Payment required. Two distinct
                cases share this status. (1) A PERMANENT block — an expired API key or subscription, or exhausted
                quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as re-authenticating or
                retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A TEMPORARY free-trial
                block — a trial-only key that hit its daily character cap: this clears on its own when the cap resets at
                the next UTC midnight, its ``Retry-After`` states that actual reset, and the body carries a matching
                numeric ``retry_after`` field (whose presence also distinguishes the two cases). The requested window
                reaches further back than the maximum reporting range (about one year). MCP OAuth access tokens are not
                accepted by this operation; send an API key. Unexpected server error. Report persistent occurrences to
                support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_api_usage(body=body, request_options=request_options))

    async def sapling_api_user_activity(
        self,
        body: ApiV1ReportingApiUserActivityRequest | ApiV1ReportingApiUserActivityRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReportingApiUserActivityResponse:
        """Edits shown, accepted and ignored, plus active-user counts (logged-in and anonymous), over a window of days.
        Send a non-empty JSON body (unlike /api/v1/reporting/api_usage this handler rejects an absent or empty ``{}``
        body with 400); the window defaults to the last 6 days when a field is omitted.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Activity summary.

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check such as
                a size limit or empty text). Validator rejections prefix ``msg`` with "400 Bad Request:". Missing or
                invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.) Payment
                required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). The
                requested window reaches further back than the maximum reporting range (about one year). MCP OAuth
                access tokens are not accepted by this operation; send an API key. Request body over 4MB. Note the body
                uses ``message`` and ``result`` keys, not the usual ``msg``. Applies to requests authenticated via the
                Authorization header; a body-key-only request over the limit fails authentication instead (401), because
                the key cannot be read from the oversized body. Unexpected server error. Report persistent occurrences
                to support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_api_user_activity(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAccountWithRawResponse:
        return self._with_raw_response


class AccountWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def sapling_account_status(
        self, *, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AccountStatusResponse, SaplingAccountStatusErrorBody]:
        """One-call self-diagnosis for the presented key: whether billable endpoints will serve it, and if not why
        (``blocked_reason``) and for how long (``retry_after``). Works even when the key is blocked. The same handler is
        exposed on POST (sapling_account_status_post). Team-scoped keys receive only the verdict and their own quota.

        Args:
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/account/status"),
            query_params=[param[bool | None]("return_usage", return_usage)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.api_key_query),
            decoder=json_decoder[ApiV1AccountStatusResponse],
            error_mapper=sapling_account_status_error_mapper,
            request_options=request_options,
        )

    def sapling_account_status_post(
        self,
        *,
        body: ApiV1AccountStatusRequest | ApiV1AccountStatusRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AccountStatusResponse, SaplingAccountStatusPostErrorBody]:
        """POST form of GET /api/v1/account/status (sapling_account_status), for clients that credential via a JSON
        ``key`` body. Identical behavior and response.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/account/status"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AccountStatusRequest | ApiV1AccountStatusRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AccountStatusResponse],
            error_mapper=sapling_account_status_post_error_mapper,
            request_options=request_options,
        )

    def sapling_api_endpoint_usage(
        self,
        body: ApiV1ReportingApiEndpointUsageRequest | ApiV1ReportingApiEndpointUsageRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportingApiEndpointUsageResponse, SaplingApiEndpointUsageErrorBody]:
        """Characters per endpoint, bucketed by day, week or month. The body must be a non-empty JSON object.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reporting/api_endpoint_usage"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportingApiEndpointUsageRequest | ApiV1ReportingApiEndpointUsageRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportingApiEndpointUsageResponse],
            error_mapper=sapling_api_endpoint_usage_error_mapper,
            request_options=request_options,
        )

    def sapling_api_quota_usage(
        self,
        body: ApiV1ReportingApiQuotaUsageRequest | ApiV1ReportingApiQuotaUsageRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportingApiQuotaUsageResponse, SaplingApiQuotaUsageErrorBody]:
        """Quota, characters used, and suggestion accept/ignore counts over a window of days. Send a JSON body (it may
        be ``{}``).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reporting/api_quota_usage"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportingApiQuotaUsageRequest | ApiV1ReportingApiQuotaUsageRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportingApiQuotaUsageResponse],
            error_mapper=sapling_api_quota_usage_error_mapper,
            request_options=request_options,
        )

    def sapling_api_usage(
        self,
        *,
        body: ApiV1ReportingApiUsageRequest | ApiV1ReportingApiUsageRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportingApiUsageResponse, SaplingApiUsageErrorBody]:
        """Characters and cost over a window of days, broken down by API key, endpoint, day and month. The body is
        optional.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reporting/api_usage"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportingApiUsageRequest | ApiV1ReportingApiUsageRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportingApiUsageResponse],
            error_mapper=sapling_api_usage_error_mapper,
            request_options=request_options,
        )

    def sapling_api_user_activity(
        self,
        body: ApiV1ReportingApiUserActivityRequest | ApiV1ReportingApiUserActivityRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportingApiUserActivityResponse, SaplingApiUserActivityErrorBody]:
        """Edits shown, accepted and ignored, plus active-user counts (logged-in and anonymous), over a window of days.
        Send a non-empty JSON body (unlike /api/v1/reporting/api_usage this handler rejects an absent or empty ``{}``
        body with 400); the window defaults to the last 6 days when a field is omitted.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reporting/api_user_activity"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportingApiUserActivityRequest | ApiV1ReportingApiUserActivityRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportingApiUserActivityResponse],
            error_mapper=sapling_api_user_activity_error_mapper,
            request_options=request_options,
        )


class AsyncAccountWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def sapling_account_status(
        self, *, return_usage: bool | None = False, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AccountStatusResponse, SaplingAccountStatusErrorBody]:
        """One-call self-diagnosis for the presented key: whether billable endpoints will serve it, and if not why
        (``blocked_reason``) and for how long (``retry_after``). Works even when the key is blocked. The same handler is
        exposed on POST (sapling_account_status_post). Team-scoped keys receive only the verdict and their own quota.

        Args:
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/account/status"),
            query_params=[param[bool | None]("return_usage", return_usage)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.api_key_query),
            decoder=async_json_decoder[ApiV1AccountStatusResponse],
            error_mapper=sapling_account_status_error_mapper,
            request_options=request_options,
        )

    async def sapling_account_status_post(
        self,
        *,
        body: ApiV1AccountStatusRequest | ApiV1AccountStatusRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AccountStatusResponse, SaplingAccountStatusPostErrorBody]:
        """POST form of GET /api/v1/account/status (sapling_account_status), for clients that credential via a JSON
        ``key`` body. Identical behavior and response.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/account/status"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AccountStatusRequest | ApiV1AccountStatusRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AccountStatusResponse],
            error_mapper=sapling_account_status_post_error_mapper,
            request_options=request_options,
        )

    async def sapling_api_endpoint_usage(
        self,
        body: ApiV1ReportingApiEndpointUsageRequest | ApiV1ReportingApiEndpointUsageRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportingApiEndpointUsageResponse, SaplingApiEndpointUsageErrorBody]:
        """Characters per endpoint, bucketed by day, week or month. The body must be a non-empty JSON object.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reporting/api_endpoint_usage"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportingApiEndpointUsageRequest | ApiV1ReportingApiEndpointUsageRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportingApiEndpointUsageResponse],
            error_mapper=sapling_api_endpoint_usage_error_mapper,
            request_options=request_options,
        )

    async def sapling_api_quota_usage(
        self,
        body: ApiV1ReportingApiQuotaUsageRequest | ApiV1ReportingApiQuotaUsageRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportingApiQuotaUsageResponse, SaplingApiQuotaUsageErrorBody]:
        """Quota, characters used, and suggestion accept/ignore counts over a window of days. Send a JSON body (it may
        be ``{}``).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reporting/api_quota_usage"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportingApiQuotaUsageRequest | ApiV1ReportingApiQuotaUsageRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportingApiQuotaUsageResponse],
            error_mapper=sapling_api_quota_usage_error_mapper,
            request_options=request_options,
        )

    async def sapling_api_usage(
        self,
        *,
        body: ApiV1ReportingApiUsageRequest | ApiV1ReportingApiUsageRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportingApiUsageResponse, SaplingApiUsageErrorBody]:
        """Characters and cost over a window of days, broken down by API key, endpoint, day and month. The body is
        optional.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reporting/api_usage"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportingApiUsageRequest | ApiV1ReportingApiUsageRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportingApiUsageResponse],
            error_mapper=sapling_api_usage_error_mapper,
            request_options=request_options,
        )

    async def sapling_api_user_activity(
        self,
        body: ApiV1ReportingApiUserActivityRequest | ApiV1ReportingApiUserActivityRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportingApiUserActivityResponse, SaplingApiUserActivityErrorBody]:
        """Edits shown, accepted and ignored, plus active-user counts (logged-in and anonymous), over a window of days.
        Send a non-empty JSON body (unlike /api/v1/reporting/api_usage this handler rejects an absent or empty ``{}``
        body with 400); the window defaults to the last 6 days when a field is omitted.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reporting/api_user_activity"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportingApiUserActivityRequest | ApiV1ReportingApiUserActivityRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportingApiUserActivityResponse],
            error_mapper=sapling_api_user_activity_error_mapper,
            request_options=request_options,
        )
