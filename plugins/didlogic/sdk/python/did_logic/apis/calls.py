from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_decoder,
    param,
    unwrap,
)
from ..errors.call_price_show_error import CallPriceShowErrorBody, call_price_show_error_mapper
from ..errors.calls_recording_error import CallsRecordingErrorBody, calls_recording_error_mapper
from ..errors.calls_show_error import CallsShowErrorBody, calls_show_error_mapper
from ..errors.calls_statistics_error import CallsStatisticsErrorBody, calls_statistics_error_mapper
from ..models.api_v1_call_price_response import ApiV1CallPriceResponse
from ..models.api_v1_calls_statistics_response import ApiV1CallsStatisticsResponse
from ..models.cdr_list_response import CdrListResponse
from ..models.enums.hangup_cause1 import HangupCause1OrStr
from ..models.enums.missed import MissedOrStr
from ..models.enums.type1 import Type1OrStr
from ..server.server import Server


class Calls:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CallsWithRawResponse(client, server, auth)

    def call_price_show(
        self, a_number: str, b_number: str, sipaccount: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1CallPriceResponse:
        """What a call from one of your SIP accounts to ``b_number``, presenting ``a_number`` as the caller ID, will be
        billed: the destination name, the per-minute price and the billing increment.

        The quote replays what the platform does to the call before it is billed: the SIP account's destination rewrite,
        its caller-ID restrictions, routing rules and caller-ID overrides. It then rates the call with the same code
        billing uses: exact prices, origin-based rates and markup included.

        **Not modelled:**
        - the carrier (trunk) chosen for the call, which can change the increment and, through the
        caller ID it presents, the price;
        - blocklists and allowlists: a destination that would be refused is still quoted;
        - where the platform picks a caller ID at random, the first candidate is used.

        Send ``b_number`` in E.164 (country code first). A national number is quoted only when the SIP account has a
        rewrite rule that turns it into E.164.

        Args:
            a_number: Caller ID the call presents; up to 5 digits means anonymous
            b_number: Number to call, E.164 (a leading + is accepted)
            sipaccount: SIP account name from sipaccounts_index, the account placing the call
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The price and increment the call will be billed at

        Raises:
            ApiError: No SIP account of yours has that name The destination has no price for this SIP account ``error``
                is ``ApiV1CallPrice404Error1 | ApiV1CallPrice422Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.call_price_show(a_number, b_number, sipaccount, request_options=request_options)
        )

    def calls_recording(self, callid: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Retrieves a single call recording file by its Call ID.

        > ⚠️ **Important:** this endpoint is a fallback mechanism designed for
        > recovering missing recordings when a delivery webhook failed or its
        > short-lived URL expired. For production workflows, always use
        > Call Recording Webhooks
        > instead of polling this API.

        The Call ID is all you need — the recording is searched for across the whole period your account retains
        recordings, so a client that stored only the Call ID can download the file.

        ### Rate limits & quotas

        To prevent system overload, strict limits are enforced per user:

        - **Request frequency:** max 1 request per second.
        - **Recording lookups:** max 1 lookup per minute.

        The per-minute quota is consumed by every search query, regardless of whether a recording is found or the
        request returns ``404 Not Found`` — searching for the file is the operation that costs resources.

        Args:
            callid: Call ID of the recording (required). Inbound callids are the encrypted webhook value.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: The API token is missing or invalid, or call recording is not enabled for this account. No
                recording matches this Call ID. The call does not exist, belongs to another account, or is older than
                the account's recording retention period. A rate limit was exceeded — either the one-request-per-second
                frequency limit or the one-lookup-per-minute quota. Carries ``Retry-After`` with the seconds to wait,
                alongside ``X-RateLimit-Limit``, ``X-RateLimit-Remaining`` and ``X-RateLimit-Reset``. ``error`` is
                ``ApiV1CallsRecordingResponse1 | Error | RawError``."""
        return unwrap(self._with_raw_response.calls_recording(callid, request_options=request_options))

    def calls_show(
        self,
        *,
        type_: Type1OrStr | None = None,
        missed: MissedOrStr | None = None,
        from_search: str | None = None,
        to_search: str | None = None,
        amd_status: str | None = None,
        hangup_cause: HangupCause1OrStr | None = None,
        filter_: str | None = None,
        sip_account: str | None = None,
        from_: Date | None = None,
        to: Date | None = None,
        all_: bool | None = False,
        page: int | None = 1,
        per_page: int | None = 100,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CdrListResponse:
        """Retrieve a list of call detail records (CDR) with filtering and pagination options.

        **Important notes:**
        - Results can be filtered by date range, call type, phone numbers, SIP account, AMD status and hangup cause
        - Supports both JSON and CSV export formats
        - Use pagination for large result sets
        - Statistics include total count, duration, and cost

        **When to use:**
        - Generating call history reports
        - Analyzing call patterns and costs
        - Exporting billing data
        - Monitoring SIP account usage

        See also: calls_statistics, totals for the same filters.

        Args:
            type_: Filter by call type (sip = outbound SIP calls, web = outbound web calls, api = outbound API calls,
                incoming = received calls)
            missed: Include missed calls in results (0 = exclude, 1 = include)
            from_search: Filter by caller phone number (partial match supported)
            to_search: Filter by destination phone number (partial match supported)
            amd_status: Return only calls with this answering machine detection (AMD) verdict, matched ignoring case: -
                ``machine`` — AMD detected an answering machine - ``human`` — AMD detected a person - ``notsure`` — AMD
                ran but could not tell a machine from a person, for example on silence, unclear audio or a timeout Only
                outbound calls carry a verdict, so ``type=incoming`` with this filter returns no calls. A value that no
                call has returns no calls. A malformed value, for example one with ``|`` or non-ASCII characters, is
                ignored, as if the parameter were not sent.
            hangup_cause: Return only calls that ended this way, matched ignoring case: - ``AMD_MACHINE`` — AMD detected
                an answering machine; takes precedence over the other values - ``NORMAL_CLEARING`` — the call was
                answered - ``NO_ANSWER`` — nobody answered, including calls the caller cancelled before an answer -
                ``BUSY`` — the called party was busy - ``FAILED`` — the call could not be connected A value that no call
                has returns no calls. A malformed value, for example one with ``|`` or non-ASCII characters, is ignored,
                as if the parameter were not sent.
            filter_: Filter by phone number (alphanumeric, spaces, hyphens, underscores)
            sip_account: SIP account name from sipaccounts_index
            from_: Start date for filtering (inclusive). Format YYYY-MM-DD
            to: End date for filtering (inclusive). Format YYYY-MM-DD
            all_: Return all records (ignores pagination). Use with caution for large datasets.
            page: Page number to retrieve (1-based)
            per_page: Number of records per page (max 1000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved CDR records

        Raises:
            ApiError: Unauthorized - Invalid or missing authentication token Forbidden - Valid token but user is blocked
                or inactive ``error`` is ``ApiV1Calls401Error1 | ApiV1Calls403Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.calls_show(
                type_=type_,
                missed=missed,
                from_search=from_search,
                to_search=to_search,
                amd_status=amd_status,
                hangup_cause=hangup_cause,
                filter_=filter_,
                sip_account=sip_account,
                from_=from_,
                to=to,
                all_=all_,
                page=page,
                per_page=per_page,
                request_options=request_options,
            ),
        )

    def calls_statistics(
        self,
        *,
        from_: str | None = None,
        to: str | None = None,
        sipfriend: str | None = None,
        search: int | None = None,
        amd_status: str | None = None,
        hangup_cause: HangupCause1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CallsStatisticsResponse:
        """Retrieve aggregated call statistics including totals and counts.

        **Response includes:**
        - Placed calls: total cost and count
        - Received calls: total cost and count
        - Missed calls: count only
        - All calls: combined total cost and count

        Rows: calls_show.

        Args:
            from_: Start date for filtering (YYYY-MM-DD)
            to: End date for filtering (YYYY-MM-DD)
            sipfriend: SIP account name from sipaccounts_index
            search: Search term for filtering calls
            amd_status: Count only calls with this answering machine detection (AMD) verdict, matched ignoring case: -
                ``machine`` — AMD detected an answering machine - ``human`` — AMD detected a person - ``notsure`` — AMD
                ran but could not tell a machine from a person, for example on silence, unclear audio or a timeout Only
                outbound calls carry a verdict, so under this filter the received and missed counts and the received
                total are 0. A value that no call has gives zero counts and totals. A malformed value, for example one
                with ``|`` or non-ASCII characters, is ignored, as if the parameter were not sent.
            hangup_cause: Count only calls that ended this way, matched ignoring case: - ``AMD_MACHINE`` — AMD detected
                an answering machine; takes precedence over the other values - ``NORMAL_CLEARING`` — the call was
                answered - ``NO_ANSWER`` — nobody answered, including calls the caller cancelled before an answer -
                ``BUSY`` — the called party was busy - ``FAILED`` — the call could not be connected A value that no call
                has gives zero counts and totals. A malformed value, for example one with ``|`` or non-ASCII characters,
                is ignored, as if the parameter were not sent.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns call statistics

        Raises:
            ApiError: returns forbidden error ``error`` is ``ApiV1CallsStatistics403Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.calls_statistics(
                from_=from_,
                to=to,
                sipfriend=sipfriend,
                search=search,
                amd_status=amd_status,
                hangup_cause=hangup_cause,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> CallsWithRawResponse:
        return self._with_raw_response


class AsyncCalls:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCallsWithRawResponse(client, server, auth)

    async def call_price_show(
        self, a_number: str, b_number: str, sipaccount: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1CallPriceResponse:
        """What a call from one of your SIP accounts to ``b_number``, presenting ``a_number`` as the caller ID, will be
        billed: the destination name, the per-minute price and the billing increment.

        The quote replays what the platform does to the call before it is billed: the SIP account's destination rewrite,
        its caller-ID restrictions, routing rules and caller-ID overrides. It then rates the call with the same code
        billing uses: exact prices, origin-based rates and markup included.

        **Not modelled:**
        - the carrier (trunk) chosen for the call, which can change the increment and, through the
        caller ID it presents, the price;
        - blocklists and allowlists: a destination that would be refused is still quoted;
        - where the platform picks a caller ID at random, the first candidate is used.

        Send ``b_number`` in E.164 (country code first). A national number is quoted only when the SIP account has a
        rewrite rule that turns it into E.164.

        Args:
            a_number: Caller ID the call presents; up to 5 digits means anonymous
            b_number: Number to call, E.164 (a leading + is accepted)
            sipaccount: SIP account name from sipaccounts_index, the account placing the call
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The price and increment the call will be billed at

        Raises:
            ApiError: No SIP account of yours has that name The destination has no price for this SIP account ``error``
                is ``ApiV1CallPrice404Error1 | ApiV1CallPrice422Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.call_price_show(
                a_number, b_number, sipaccount, request_options=request_options
            ),
        )

    async def calls_recording(self, callid: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Retrieves a single call recording file by its Call ID.

        > ⚠️ **Important:** this endpoint is a fallback mechanism designed for
        > recovering missing recordings when a delivery webhook failed or its
        > short-lived URL expired. For production workflows, always use
        > Call Recording Webhooks
        > instead of polling this API.

        The Call ID is all you need — the recording is searched for across the whole period your account retains
        recordings, so a client that stored only the Call ID can download the file.

        ### Rate limits & quotas

        To prevent system overload, strict limits are enforced per user:

        - **Request frequency:** max 1 request per second.
        - **Recording lookups:** max 1 lookup per minute.

        The per-minute quota is consumed by every search query, regardless of whether a recording is found or the
        request returns ``404 Not Found`` — searching for the file is the operation that costs resources.

        Args:
            callid: Call ID of the recording (required). Inbound callids are the encrypted webhook value.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: The API token is missing or invalid, or call recording is not enabled for this account. No
                recording matches this Call ID. The call does not exist, belongs to another account, or is older than
                the account's recording retention period. A rate limit was exceeded — either the one-request-per-second
                frequency limit or the one-lookup-per-minute quota. Carries ``Retry-After`` with the seconds to wait,
                alongside ``X-RateLimit-Limit``, ``X-RateLimit-Remaining`` and ``X-RateLimit-Reset``. ``error`` is
                ``ApiV1CallsRecordingResponse1 | Error | RawError``."""
        return unwrap(await self._with_raw_response.calls_recording(callid, request_options=request_options))

    async def calls_show(
        self,
        *,
        type_: Type1OrStr | None = None,
        missed: MissedOrStr | None = None,
        from_search: str | None = None,
        to_search: str | None = None,
        amd_status: str | None = None,
        hangup_cause: HangupCause1OrStr | None = None,
        filter_: str | None = None,
        sip_account: str | None = None,
        from_: Date | None = None,
        to: Date | None = None,
        all_: bool | None = False,
        page: int | None = 1,
        per_page: int | None = 100,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CdrListResponse:
        """Retrieve a list of call detail records (CDR) with filtering and pagination options.

        **Important notes:**
        - Results can be filtered by date range, call type, phone numbers, SIP account, AMD status and hangup cause
        - Supports both JSON and CSV export formats
        - Use pagination for large result sets
        - Statistics include total count, duration, and cost

        **When to use:**
        - Generating call history reports
        - Analyzing call patterns and costs
        - Exporting billing data
        - Monitoring SIP account usage

        See also: calls_statistics, totals for the same filters.

        Args:
            type_: Filter by call type (sip = outbound SIP calls, web = outbound web calls, api = outbound API calls,
                incoming = received calls)
            missed: Include missed calls in results (0 = exclude, 1 = include)
            from_search: Filter by caller phone number (partial match supported)
            to_search: Filter by destination phone number (partial match supported)
            amd_status: Return only calls with this answering machine detection (AMD) verdict, matched ignoring case: -
                ``machine`` — AMD detected an answering machine - ``human`` — AMD detected a person - ``notsure`` — AMD
                ran but could not tell a machine from a person, for example on silence, unclear audio or a timeout Only
                outbound calls carry a verdict, so ``type=incoming`` with this filter returns no calls. A value that no
                call has returns no calls. A malformed value, for example one with ``|`` or non-ASCII characters, is
                ignored, as if the parameter were not sent.
            hangup_cause: Return only calls that ended this way, matched ignoring case: - ``AMD_MACHINE`` — AMD detected
                an answering machine; takes precedence over the other values - ``NORMAL_CLEARING`` — the call was
                answered - ``NO_ANSWER`` — nobody answered, including calls the caller cancelled before an answer -
                ``BUSY`` — the called party was busy - ``FAILED`` — the call could not be connected A value that no call
                has returns no calls. A malformed value, for example one with ``|`` or non-ASCII characters, is ignored,
                as if the parameter were not sent.
            filter_: Filter by phone number (alphanumeric, spaces, hyphens, underscores)
            sip_account: SIP account name from sipaccounts_index
            from_: Start date for filtering (inclusive). Format YYYY-MM-DD
            to: End date for filtering (inclusive). Format YYYY-MM-DD
            all_: Return all records (ignores pagination). Use with caution for large datasets.
            page: Page number to retrieve (1-based)
            per_page: Number of records per page (max 1000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved CDR records

        Raises:
            ApiError: Unauthorized - Invalid or missing authentication token Forbidden - Valid token but user is blocked
                or inactive ``error`` is ``ApiV1Calls401Error1 | ApiV1Calls403Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.calls_show(
                type_=type_,
                missed=missed,
                from_search=from_search,
                to_search=to_search,
                amd_status=amd_status,
                hangup_cause=hangup_cause,
                filter_=filter_,
                sip_account=sip_account,
                from_=from_,
                to=to,
                all_=all_,
                page=page,
                per_page=per_page,
                request_options=request_options,
            ),
        )

    async def calls_statistics(
        self,
        *,
        from_: str | None = None,
        to: str | None = None,
        sipfriend: str | None = None,
        search: int | None = None,
        amd_status: str | None = None,
        hangup_cause: HangupCause1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CallsStatisticsResponse:
        """Retrieve aggregated call statistics including totals and counts.

        **Response includes:**
        - Placed calls: total cost and count
        - Received calls: total cost and count
        - Missed calls: count only
        - All calls: combined total cost and count

        Rows: calls_show.

        Args:
            from_: Start date for filtering (YYYY-MM-DD)
            to: End date for filtering (YYYY-MM-DD)
            sipfriend: SIP account name from sipaccounts_index
            search: Search term for filtering calls
            amd_status: Count only calls with this answering machine detection (AMD) verdict, matched ignoring case: -
                ``machine`` — AMD detected an answering machine - ``human`` — AMD detected a person - ``notsure`` — AMD
                ran but could not tell a machine from a person, for example on silence, unclear audio or a timeout Only
                outbound calls carry a verdict, so under this filter the received and missed counts and the received
                total are 0. A value that no call has gives zero counts and totals. A malformed value, for example one
                with ``|`` or non-ASCII characters, is ignored, as if the parameter were not sent.
            hangup_cause: Count only calls that ended this way, matched ignoring case: - ``AMD_MACHINE`` — AMD detected
                an answering machine; takes precedence over the other values - ``NORMAL_CLEARING`` — the call was
                answered - ``NO_ANSWER`` — nobody answered, including calls the caller cancelled before an answer -
                ``BUSY`` — the called party was busy - ``FAILED`` — the call could not be connected A value that no call
                has gives zero counts and totals. A malformed value, for example one with ``|`` or non-ASCII characters,
                is ignored, as if the parameter were not sent.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns call statistics

        Raises:
            ApiError: returns forbidden error ``error`` is ``ApiV1CallsStatistics403Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.calls_statistics(
                from_=from_,
                to=to,
                sipfriend=sipfriend,
                search=search,
                amd_status=amd_status,
                hangup_cause=hangup_cause,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCallsWithRawResponse:
        return self._with_raw_response


class CallsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def call_price_show(
        self, a_number: str, b_number: str, sipaccount: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CallPriceResponse, CallPriceShowErrorBody]:
        """What a call from one of your SIP accounts to ``b_number``, presenting ``a_number`` as the caller ID, will be
        billed: the destination name, the per-minute price and the billing increment.

        The quote replays what the platform does to the call before it is billed: the SIP account's destination rewrite,
        its caller-ID restrictions, routing rules and caller-ID overrides. It then rates the call with the same code
        billing uses: exact prices, origin-based rates and markup included.

        **Not modelled:**
        - the carrier (trunk) chosen for the call, which can change the increment and, through the
        caller ID it presents, the price;
        - blocklists and allowlists: a destination that would be refused is still quoted;
        - where the platform picks a caller ID at random, the first candidate is used.

        Send ``b_number`` in E.164 (country code first). A national number is quoted only when the SIP account has a
        rewrite rule that turns it into E.164.

        Args:
            a_number: Caller ID the call presents; up to 5 digits means anonymous
            b_number: Number to call, E.164 (a leading + is accepted)
            sipaccount: SIP account name from sipaccounts_index, the account placing the call
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/call_price"),
            query_params=[
                param[str]("a_number", a_number), param[str]("b_number", b_number), param[str]("sipaccount", sipaccount)
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CallPriceResponse],
            error_mapper=call_price_show_error_mapper,
            request_options=request_options,
        )

    def calls_recording(
        self, callid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CallsRecordingErrorBody]:
        """Retrieves a single call recording file by its Call ID.

        > ⚠️ **Important:** this endpoint is a fallback mechanism designed for
        > recovering missing recordings when a delivery webhook failed or its
        > short-lived URL expired. For production workflows, always use
        > Call Recording Webhooks
        > instead of polling this API.

        The Call ID is all you need — the recording is searched for across the whole period your account retains
        recordings, so a client that stored only the Call ID can download the file.

        ### Rate limits & quotas

        To prevent system overload, strict limits are enforced per user:

        - **Request frequency:** max 1 request per second.
        - **Recording lookups:** max 1 lookup per minute.

        The per-minute quota is consumed by every search query, regardless of whether a recording is found or the
        request returns ``404 Not Found`` — searching for the file is the operation that costs resources.

        Args:
            callid: Call ID of the recording (required). Inbound callids are the encrypted webhook value.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/calls/recording/{callid}"),
            path_params=[param[str]("callid", callid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=calls_recording_error_mapper,
            request_options=request_options,
        )

    def calls_show(
        self,
        *,
        type_: Type1OrStr | None = None,
        missed: MissedOrStr | None = None,
        from_search: str | None = None,
        to_search: str | None = None,
        amd_status: str | None = None,
        hangup_cause: HangupCause1OrStr | None = None,
        filter_: str | None = None,
        sip_account: str | None = None,
        from_: Date | None = None,
        to: Date | None = None,
        all_: bool | None = False,
        page: int | None = 1,
        per_page: int | None = 100,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CdrListResponse, CallsShowErrorBody]:
        """Retrieve a list of call detail records (CDR) with filtering and pagination options.

        **Important notes:**
        - Results can be filtered by date range, call type, phone numbers, SIP account, AMD status and hangup cause
        - Supports both JSON and CSV export formats
        - Use pagination for large result sets
        - Statistics include total count, duration, and cost

        **When to use:**
        - Generating call history reports
        - Analyzing call patterns and costs
        - Exporting billing data
        - Monitoring SIP account usage

        See also: calls_statistics, totals for the same filters.

        Args:
            type_: Filter by call type (sip = outbound SIP calls, web = outbound web calls, api = outbound API calls,
                incoming = received calls)
            missed: Include missed calls in results (0 = exclude, 1 = include)
            from_search: Filter by caller phone number (partial match supported)
            to_search: Filter by destination phone number (partial match supported)
            amd_status: Return only calls with this answering machine detection (AMD) verdict, matched ignoring case: -
                ``machine`` — AMD detected an answering machine - ``human`` — AMD detected a person - ``notsure`` — AMD
                ran but could not tell a machine from a person, for example on silence, unclear audio or a timeout Only
                outbound calls carry a verdict, so ``type=incoming`` with this filter returns no calls. A value that no
                call has returns no calls. A malformed value, for example one with ``|`` or non-ASCII characters, is
                ignored, as if the parameter were not sent.
            hangup_cause: Return only calls that ended this way, matched ignoring case: - ``AMD_MACHINE`` — AMD detected
                an answering machine; takes precedence over the other values - ``NORMAL_CLEARING`` — the call was
                answered - ``NO_ANSWER`` — nobody answered, including calls the caller cancelled before an answer -
                ``BUSY`` — the called party was busy - ``FAILED`` — the call could not be connected A value that no call
                has returns no calls. A malformed value, for example one with ``|`` or non-ASCII characters, is ignored,
                as if the parameter were not sent.
            filter_: Filter by phone number (alphanumeric, spaces, hyphens, underscores)
            sip_account: SIP account name from sipaccounts_index
            from_: Start date for filtering (inclusive). Format YYYY-MM-DD
            to: End date for filtering (inclusive). Format YYYY-MM-DD
            all_: Return all records (ignores pagination). Use with caution for large datasets.
            page: Page number to retrieve (1-based)
            per_page: Number of records per page (max 1000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/calls"),
            query_params=[
                param[Type1OrStr | None]("type", type_),
                param[MissedOrStr | None]("missed", missed),
                param[str | None]("from_search", from_search),
                param[str | None]("to_search", to_search),
                param[str | None]("amd_status", amd_status),
                param[HangupCause1OrStr | None]("hangup_cause", hangup_cause),
                param[str | None]("filter", filter_),
                param[str | None]("sip_account", sip_account),
                param[Date | None]("from", from_),
                param[Date | None]("to", to),
                param[bool | None]("all", all_),
                param[int | None]("page", page),
                param[int | None]("per_page", per_page),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CdrListResponse],
            error_mapper=calls_show_error_mapper,
            request_options=request_options,
        )

    def calls_statistics(
        self,
        *,
        from_: str | None = None,
        to: str | None = None,
        sipfriend: str | None = None,
        search: int | None = None,
        amd_status: str | None = None,
        hangup_cause: HangupCause1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CallsStatisticsResponse, CallsStatisticsErrorBody]:
        """Retrieve aggregated call statistics including totals and counts.

        **Response includes:**
        - Placed calls: total cost and count
        - Received calls: total cost and count
        - Missed calls: count only
        - All calls: combined total cost and count

        Rows: calls_show.

        Args:
            from_: Start date for filtering (YYYY-MM-DD)
            to: End date for filtering (YYYY-MM-DD)
            sipfriend: SIP account name from sipaccounts_index
            search: Search term for filtering calls
            amd_status: Count only calls with this answering machine detection (AMD) verdict, matched ignoring case: -
                ``machine`` — AMD detected an answering machine - ``human`` — AMD detected a person - ``notsure`` — AMD
                ran but could not tell a machine from a person, for example on silence, unclear audio or a timeout Only
                outbound calls carry a verdict, so under this filter the received and missed counts and the received
                total are 0. A value that no call has gives zero counts and totals. A malformed value, for example one
                with ``|`` or non-ASCII characters, is ignored, as if the parameter were not sent.
            hangup_cause: Count only calls that ended this way, matched ignoring case: - ``AMD_MACHINE`` — AMD detected
                an answering machine; takes precedence over the other values - ``NORMAL_CLEARING`` — the call was
                answered - ``NO_ANSWER`` — nobody answered, including calls the caller cancelled before an answer -
                ``BUSY`` — the called party was busy - ``FAILED`` — the call could not be connected A value that no call
                has gives zero counts and totals. A malformed value, for example one with ``|`` or non-ASCII characters,
                is ignored, as if the parameter were not sent.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/calls/statistics"),
            query_params=[
                param[str | None]("from", from_),
                param[str | None]("to", to),
                param[str | None]("sipfriend", sipfriend),
                param[int | None]("search", search),
                param[str | None]("amd_status", amd_status),
                param[HangupCause1OrStr | None]("hangup_cause", hangup_cause),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CallsStatisticsResponse],
            error_mapper=calls_statistics_error_mapper,
            request_options=request_options,
        )


class AsyncCallsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def call_price_show(
        self, a_number: str, b_number: str, sipaccount: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CallPriceResponse, CallPriceShowErrorBody]:
        """What a call from one of your SIP accounts to ``b_number``, presenting ``a_number`` as the caller ID, will be
        billed: the destination name, the per-minute price and the billing increment.

        The quote replays what the platform does to the call before it is billed: the SIP account's destination rewrite,
        its caller-ID restrictions, routing rules and caller-ID overrides. It then rates the call with the same code
        billing uses: exact prices, origin-based rates and markup included.

        **Not modelled:**
        - the carrier (trunk) chosen for the call, which can change the increment and, through the
        caller ID it presents, the price;
        - blocklists and allowlists: a destination that would be refused is still quoted;
        - where the platform picks a caller ID at random, the first candidate is used.

        Send ``b_number`` in E.164 (country code first). A national number is quoted only when the SIP account has a
        rewrite rule that turns it into E.164.

        Args:
            a_number: Caller ID the call presents; up to 5 digits means anonymous
            b_number: Number to call, E.164 (a leading + is accepted)
            sipaccount: SIP account name from sipaccounts_index, the account placing the call
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/call_price"),
            query_params=[
                param[str]("a_number", a_number), param[str]("b_number", b_number), param[str]("sipaccount", sipaccount)
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CallPriceResponse],
            error_mapper=call_price_show_error_mapper,
            request_options=request_options,
        )

    async def calls_recording(
        self, callid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CallsRecordingErrorBody]:
        """Retrieves a single call recording file by its Call ID.

        > ⚠️ **Important:** this endpoint is a fallback mechanism designed for
        > recovering missing recordings when a delivery webhook failed or its
        > short-lived URL expired. For production workflows, always use
        > Call Recording Webhooks
        > instead of polling this API.

        The Call ID is all you need — the recording is searched for across the whole period your account retains
        recordings, so a client that stored only the Call ID can download the file.

        ### Rate limits & quotas

        To prevent system overload, strict limits are enforced per user:

        - **Request frequency:** max 1 request per second.
        - **Recording lookups:** max 1 lookup per minute.

        The per-minute quota is consumed by every search query, regardless of whether a recording is found or the
        request returns ``404 Not Found`` — searching for the file is the operation that costs resources.

        Args:
            callid: Call ID of the recording (required). Inbound callids are the encrypted webhook value.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/calls/recording/{callid}"),
            path_params=[param[str]("callid", callid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=calls_recording_error_mapper,
            request_options=request_options,
        )

    async def calls_show(
        self,
        *,
        type_: Type1OrStr | None = None,
        missed: MissedOrStr | None = None,
        from_search: str | None = None,
        to_search: str | None = None,
        amd_status: str | None = None,
        hangup_cause: HangupCause1OrStr | None = None,
        filter_: str | None = None,
        sip_account: str | None = None,
        from_: Date | None = None,
        to: Date | None = None,
        all_: bool | None = False,
        page: int | None = 1,
        per_page: int | None = 100,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CdrListResponse, CallsShowErrorBody]:
        """Retrieve a list of call detail records (CDR) with filtering and pagination options.

        **Important notes:**
        - Results can be filtered by date range, call type, phone numbers, SIP account, AMD status and hangup cause
        - Supports both JSON and CSV export formats
        - Use pagination for large result sets
        - Statistics include total count, duration, and cost

        **When to use:**
        - Generating call history reports
        - Analyzing call patterns and costs
        - Exporting billing data
        - Monitoring SIP account usage

        See also: calls_statistics, totals for the same filters.

        Args:
            type_: Filter by call type (sip = outbound SIP calls, web = outbound web calls, api = outbound API calls,
                incoming = received calls)
            missed: Include missed calls in results (0 = exclude, 1 = include)
            from_search: Filter by caller phone number (partial match supported)
            to_search: Filter by destination phone number (partial match supported)
            amd_status: Return only calls with this answering machine detection (AMD) verdict, matched ignoring case: -
                ``machine`` — AMD detected an answering machine - ``human`` — AMD detected a person - ``notsure`` — AMD
                ran but could not tell a machine from a person, for example on silence, unclear audio or a timeout Only
                outbound calls carry a verdict, so ``type=incoming`` with this filter returns no calls. A value that no
                call has returns no calls. A malformed value, for example one with ``|`` or non-ASCII characters, is
                ignored, as if the parameter were not sent.
            hangup_cause: Return only calls that ended this way, matched ignoring case: - ``AMD_MACHINE`` — AMD detected
                an answering machine; takes precedence over the other values - ``NORMAL_CLEARING`` — the call was
                answered - ``NO_ANSWER`` — nobody answered, including calls the caller cancelled before an answer -
                ``BUSY`` — the called party was busy - ``FAILED`` — the call could not be connected A value that no call
                has returns no calls. A malformed value, for example one with ``|`` or non-ASCII characters, is ignored,
                as if the parameter were not sent.
            filter_: Filter by phone number (alphanumeric, spaces, hyphens, underscores)
            sip_account: SIP account name from sipaccounts_index
            from_: Start date for filtering (inclusive). Format YYYY-MM-DD
            to: End date for filtering (inclusive). Format YYYY-MM-DD
            all_: Return all records (ignores pagination). Use with caution for large datasets.
            page: Page number to retrieve (1-based)
            per_page: Number of records per page (max 1000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/calls"),
            query_params=[
                param[Type1OrStr | None]("type", type_),
                param[MissedOrStr | None]("missed", missed),
                param[str | None]("from_search", from_search),
                param[str | None]("to_search", to_search),
                param[str | None]("amd_status", amd_status),
                param[HangupCause1OrStr | None]("hangup_cause", hangup_cause),
                param[str | None]("filter", filter_),
                param[str | None]("sip_account", sip_account),
                param[Date | None]("from", from_),
                param[Date | None]("to", to),
                param[bool | None]("all", all_),
                param[int | None]("page", page),
                param[int | None]("per_page", per_page),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CdrListResponse],
            error_mapper=calls_show_error_mapper,
            request_options=request_options,
        )

    async def calls_statistics(
        self,
        *,
        from_: str | None = None,
        to: str | None = None,
        sipfriend: str | None = None,
        search: int | None = None,
        amd_status: str | None = None,
        hangup_cause: HangupCause1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CallsStatisticsResponse, CallsStatisticsErrorBody]:
        """Retrieve aggregated call statistics including totals and counts.

        **Response includes:**
        - Placed calls: total cost and count
        - Received calls: total cost and count
        - Missed calls: count only
        - All calls: combined total cost and count

        Rows: calls_show.

        Args:
            from_: Start date for filtering (YYYY-MM-DD)
            to: End date for filtering (YYYY-MM-DD)
            sipfriend: SIP account name from sipaccounts_index
            search: Search term for filtering calls
            amd_status: Count only calls with this answering machine detection (AMD) verdict, matched ignoring case: -
                ``machine`` — AMD detected an answering machine - ``human`` — AMD detected a person - ``notsure`` — AMD
                ran but could not tell a machine from a person, for example on silence, unclear audio or a timeout Only
                outbound calls carry a verdict, so under this filter the received and missed counts and the received
                total are 0. A value that no call has gives zero counts and totals. A malformed value, for example one
                with ``|`` or non-ASCII characters, is ignored, as if the parameter were not sent.
            hangup_cause: Count only calls that ended this way, matched ignoring case: - ``AMD_MACHINE`` — AMD detected
                an answering machine; takes precedence over the other values - ``NORMAL_CLEARING`` — the call was
                answered - ``NO_ANSWER`` — nobody answered, including calls the caller cancelled before an answer -
                ``BUSY`` — the called party was busy - ``FAILED`` — the call could not be connected A value that no call
                has gives zero counts and totals. A malformed value, for example one with ``|`` or non-ASCII characters,
                is ignored, as if the parameter were not sent.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/calls/statistics"),
            query_params=[
                param[str | None]("from", from_),
                param[str | None]("to", to),
                param[str | None]("sipfriend", sipfriend),
                param[int | None]("search", search),
                param[str | None]("amd_status", amd_status),
                param[HangupCause1OrStr | None]("hangup_cause", hangup_cause),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CallsStatisticsResponse],
            error_mapper=calls_statistics_error_mapper,
            request_options=request_options,
        )
