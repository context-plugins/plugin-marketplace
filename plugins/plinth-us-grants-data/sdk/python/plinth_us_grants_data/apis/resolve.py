from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.get_api_v1_search_error import GetApiV1SearchErrorBody, get_api_v1_search_error_mapper
from ..models.api_search_response import ApiSearchResponse
from ..models.api_v1_search_response import ApiV1SearchResponse
from ..models.enums.jurisdiction_model import JurisdictionModel, JurisdictionModelOrStr
from ..models.enums.mode_model import ModeModel, ModeModelOrStr
from ..server.server import Server


class Resolve:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ResolveWithRawResponse(client, server)

    def get_api_v1_search(
        self,
        q: str,
        *,
        jurisdiction: JurisdictionModelOrStr | None = JurisdictionModel.US,
        state: str | None = None,
        limit: int | None = 20,
        min_: int | None = None,
        max_: int | None = None,
        strict: str | None = None,
        example: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SearchResponse:
        """Entity resolution — the step that precedes every other call when you have a name rather than an EIN. Searches
        every US grantmaking foundation and funded nonprofit, or the Canadian charities register under
        ``jurisdiction=ca``. **No API key required and not metered.**

        ``q`` also accepts an EIN (``131684331`` or ``13-1684331``), which resolves against the index directly rather
        than as text. A parameter this endpoint does not accept comes back named in ``x_plinth.warnings``, and
        ``strict=1`` turns that into a 400 — the same contract as the grant endpoints. Omitting ``q`` is a 400 rather
        than an empty result set, because an empty result set is indistinguishable from a genuine miss.

        Args:
            q: Search text. Fewer than 2 characters returns an empty result set.
            jurisdiction: Which register to search: ``us`` (IRS, the default) or ``ca`` (CRA). Case-insensitive. One
                register per query, because ``revenue`` is the filing's own figure and the two currencies are never
                combined. Any other value is a 400, as is a value that contradicts the namespace of an organization key
                passed as ``q``.
            state: Narrow to a two-letter region code — a US state, or a province or territory under
                ``jurisdiction=ca``. Case-insensitive; anything else is reported in x_plinth.warnings rather than
                applied as a filter that cannot match.
            limit: Rows to return. Capped at 50 — this endpoint resolves names, it does not page the corpus.
            min_: Lowest total revenue, whole units of the filing's own currency — US dollars, or Canadian dollars under
                ``jurisdiction=ca``, which is stated back in x_plinth.warnings. Applied server-side, so it cannot drop
                matches past the cut.
            max_: Highest total revenue, in the same currency as ``min``.
            strict: strict=1 turns any parameter this endpoint does not accept into a 400 instead of a warning.
            example: Return a canned example response instead of querying the index — keyless, unmetered, and the only
                way to see this envelope without sending a real ``q``. ``?example=1`` is the plain case;
                ``?example=list`` names the others. Every example body carries ``x_plinth.example``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching organizations, best first.

        Raises:
            ApiError: ``q`` is missing, ``jurisdiction`` is neither ``us`` nor ``ca`` (or contradicts the namespace of
                an organization key in ``q``), or ``strict=1`` was sent alongside a parameter this endpoint does not
                accept. The body names which. The index timed out twice (a cold cache). Transient — ``Retry-After`` says
                when to come back. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_search(
                q,
                jurisdiction=jurisdiction,
                state=state,
                limit=limit,
                min_=min_,
                max_=max_,
                strict=strict,
                example=example,
                request_options=request_options,
            ),
        )

    def search_organizations(
        self,
        q: str,
        *,
        state: str | None = None,
        mode: ModeModelOrStr | None = ModeModel.TEXT,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiSearchResponse:
        """Entity resolution — the step that precedes every other call when you have a name rather than an EIN. Searches
        every US grantmaking foundation and funded nonprofit. **No API key required and not metered.**

        Args:
            q: Search text. Fewer than 2 characters returns an empty result set.
            state: Narrow to a US state, two-letter code.
            mode: text is keyword matching; semantic/hybrid add vector matching and fall back to text if unavailable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching organizations, best first.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.search_organizations(q, state=state, mode=mode, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ResolveWithRawResponse:
        return self._with_raw_response


class AsyncResolve:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncResolveWithRawResponse(client, server)

    async def get_api_v1_search(
        self,
        q: str,
        *,
        jurisdiction: JurisdictionModelOrStr | None = JurisdictionModel.US,
        state: str | None = None,
        limit: int | None = 20,
        min_: int | None = None,
        max_: int | None = None,
        strict: str | None = None,
        example: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SearchResponse:
        """Entity resolution — the step that precedes every other call when you have a name rather than an EIN. Searches
        every US grantmaking foundation and funded nonprofit, or the Canadian charities register under
        ``jurisdiction=ca``. **No API key required and not metered.**

        ``q`` also accepts an EIN (``131684331`` or ``13-1684331``), which resolves against the index directly rather
        than as text. A parameter this endpoint does not accept comes back named in ``x_plinth.warnings``, and
        ``strict=1`` turns that into a 400 — the same contract as the grant endpoints. Omitting ``q`` is a 400 rather
        than an empty result set, because an empty result set is indistinguishable from a genuine miss.

        Args:
            q: Search text. Fewer than 2 characters returns an empty result set.
            jurisdiction: Which register to search: ``us`` (IRS, the default) or ``ca`` (CRA). Case-insensitive. One
                register per query, because ``revenue`` is the filing's own figure and the two currencies are never
                combined. Any other value is a 400, as is a value that contradicts the namespace of an organization key
                passed as ``q``.
            state: Narrow to a two-letter region code — a US state, or a province or territory under
                ``jurisdiction=ca``. Case-insensitive; anything else is reported in x_plinth.warnings rather than
                applied as a filter that cannot match.
            limit: Rows to return. Capped at 50 — this endpoint resolves names, it does not page the corpus.
            min_: Lowest total revenue, whole units of the filing's own currency — US dollars, or Canadian dollars under
                ``jurisdiction=ca``, which is stated back in x_plinth.warnings. Applied server-side, so it cannot drop
                matches past the cut.
            max_: Highest total revenue, in the same currency as ``min``.
            strict: strict=1 turns any parameter this endpoint does not accept into a 400 instead of a warning.
            example: Return a canned example response instead of querying the index — keyless, unmetered, and the only
                way to see this envelope without sending a real ``q``. ``?example=1`` is the plain case;
                ``?example=list`` names the others. Every example body carries ``x_plinth.example``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching organizations, best first.

        Raises:
            ApiError: ``q`` is missing, ``jurisdiction`` is neither ``us`` nor ``ca`` (or contradicts the namespace of
                an organization key in ``q``), or ``strict=1`` was sent alongside a parameter this endpoint does not
                accept. The body names which. The index timed out twice (a cold cache). Transient — ``Retry-After`` says
                when to come back. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_search(
                q,
                jurisdiction=jurisdiction,
                state=state,
                limit=limit,
                min_=min_,
                max_=max_,
                strict=strict,
                example=example,
                request_options=request_options,
            ),
        )

    async def search_organizations(
        self,
        q: str,
        *,
        state: str | None = None,
        mode: ModeModelOrStr | None = ModeModel.TEXT,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiSearchResponse:
        """Entity resolution — the step that precedes every other call when you have a name rather than an EIN. Searches
        every US grantmaking foundation and funded nonprofit. **No API key required and not metered.**

        Args:
            q: Search text. Fewer than 2 characters returns an empty result set.
            state: Narrow to a US state, two-letter code.
            mode: text is keyword matching; semantic/hybrid add vector matching and fall back to text if unavailable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching organizations, best first.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.search_organizations(
                q, state=state, mode=mode, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncResolveWithRawResponse:
        return self._with_raw_response


class ResolveWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_api_v1_search(
        self,
        q: str,
        *,
        jurisdiction: JurisdictionModelOrStr | None = JurisdictionModel.US,
        state: str | None = None,
        limit: int | None = 20,
        min_: int | None = None,
        max_: int | None = None,
        strict: str | None = None,
        example: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SearchResponse, GetApiV1SearchErrorBody]:
        """Entity resolution — the step that precedes every other call when you have a name rather than an EIN. Searches
        every US grantmaking foundation and funded nonprofit, or the Canadian charities register under
        ``jurisdiction=ca``. **No API key required and not metered.**

        ``q`` also accepts an EIN (``131684331`` or ``13-1684331``), which resolves against the index directly rather
        than as text. A parameter this endpoint does not accept comes back named in ``x_plinth.warnings``, and
        ``strict=1`` turns that into a 400 — the same contract as the grant endpoints. Omitting ``q`` is a 400 rather
        than an empty result set, because an empty result set is indistinguishable from a genuine miss.

        Args:
            q: Search text. Fewer than 2 characters returns an empty result set.
            jurisdiction: Which register to search: ``us`` (IRS, the default) or ``ca`` (CRA). Case-insensitive. One
                register per query, because ``revenue`` is the filing's own figure and the two currencies are never
                combined. Any other value is a 400, as is a value that contradicts the namespace of an organization key
                passed as ``q``.
            state: Narrow to a two-letter region code — a US state, or a province or territory under
                ``jurisdiction=ca``. Case-insensitive; anything else is reported in x_plinth.warnings rather than
                applied as a filter that cannot match.
            limit: Rows to return. Capped at 50 — this endpoint resolves names, it does not page the corpus.
            min_: Lowest total revenue, whole units of the filing's own currency — US dollars, or Canadian dollars under
                ``jurisdiction=ca``, which is stated back in x_plinth.warnings. Applied server-side, so it cannot drop
                matches past the cut.
            max_: Highest total revenue, in the same currency as ``min``.
            strict: strict=1 turns any parameter this endpoint does not accept into a 400 instead of a warning.
            example: Return a canned example response instead of querying the index — keyless, unmetered, and the only
                way to see this envelope without sending a real ``q``. ``?example=1`` is the plain case;
                ``?example=list`` names the others. Every example body carries ``x_plinth.example``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/search"),
            query_params=[
                param[str]("q", q),
                param[JurisdictionModelOrStr | None]("jurisdiction", jurisdiction),
                param[str | None]("state", state),
                param[int | None]("limit", limit),
                param[int | None]("min", min_),
                param[int | None]("max", max_),
                param[str | None]("strict", strict),
                param[str | None]("example", example),
            ],
            decoder=json_decoder[ApiV1SearchResponse],
            error_mapper=get_api_v1_search_error_mapper,
            request_options=request_options,
        )

    def search_organizations(
        self,
        q: str,
        *,
        state: str | None = None,
        mode: ModeModelOrStr | None = ModeModel.TEXT,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiSearchResponse, RawError]:
        """Entity resolution — the step that precedes every other call when you have a name rather than an EIN. Searches
        every US grantmaking foundation and funded nonprofit. **No API key required and not metered.**

        Args:
            q: Search text. Fewer than 2 characters returns an empty result set.
            state: Narrow to a US state, two-letter code.
            mode: text is keyword matching; semantic/hybrid add vector matching and fall back to text if unavailable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/search"),
            query_params=[
                param[str]("q", q), param[str | None]("state", state), param[ModeModelOrStr | None]("mode", mode)
            ],
            decoder=json_decoder[ApiSearchResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncResolveWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_api_v1_search(
        self,
        q: str,
        *,
        jurisdiction: JurisdictionModelOrStr | None = JurisdictionModel.US,
        state: str | None = None,
        limit: int | None = 20,
        min_: int | None = None,
        max_: int | None = None,
        strict: str | None = None,
        example: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SearchResponse, GetApiV1SearchErrorBody]:
        """Entity resolution — the step that precedes every other call when you have a name rather than an EIN. Searches
        every US grantmaking foundation and funded nonprofit, or the Canadian charities register under
        ``jurisdiction=ca``. **No API key required and not metered.**

        ``q`` also accepts an EIN (``131684331`` or ``13-1684331``), which resolves against the index directly rather
        than as text. A parameter this endpoint does not accept comes back named in ``x_plinth.warnings``, and
        ``strict=1`` turns that into a 400 — the same contract as the grant endpoints. Omitting ``q`` is a 400 rather
        than an empty result set, because an empty result set is indistinguishable from a genuine miss.

        Args:
            q: Search text. Fewer than 2 characters returns an empty result set.
            jurisdiction: Which register to search: ``us`` (IRS, the default) or ``ca`` (CRA). Case-insensitive. One
                register per query, because ``revenue`` is the filing's own figure and the two currencies are never
                combined. Any other value is a 400, as is a value that contradicts the namespace of an organization key
                passed as ``q``.
            state: Narrow to a two-letter region code — a US state, or a province or territory under
                ``jurisdiction=ca``. Case-insensitive; anything else is reported in x_plinth.warnings rather than
                applied as a filter that cannot match.
            limit: Rows to return. Capped at 50 — this endpoint resolves names, it does not page the corpus.
            min_: Lowest total revenue, whole units of the filing's own currency — US dollars, or Canadian dollars under
                ``jurisdiction=ca``, which is stated back in x_plinth.warnings. Applied server-side, so it cannot drop
                matches past the cut.
            max_: Highest total revenue, in the same currency as ``min``.
            strict: strict=1 turns any parameter this endpoint does not accept into a 400 instead of a warning.
            example: Return a canned example response instead of querying the index — keyless, unmetered, and the only
                way to see this envelope without sending a real ``q``. ``?example=1`` is the plain case;
                ``?example=list`` names the others. Every example body carries ``x_plinth.example``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/search"),
            query_params=[
                param[str]("q", q),
                param[JurisdictionModelOrStr | None]("jurisdiction", jurisdiction),
                param[str | None]("state", state),
                param[int | None]("limit", limit),
                param[int | None]("min", min_),
                param[int | None]("max", max_),
                param[str | None]("strict", strict),
                param[str | None]("example", example),
            ],
            decoder=async_json_decoder[ApiV1SearchResponse],
            error_mapper=get_api_v1_search_error_mapper,
            request_options=request_options,
        )

    async def search_organizations(
        self,
        q: str,
        *,
        state: str | None = None,
        mode: ModeModelOrStr | None = ModeModel.TEXT,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiSearchResponse, RawError]:
        """Entity resolution — the step that precedes every other call when you have a name rather than an EIN. Searches
        every US grantmaking foundation and funded nonprofit. **No API key required and not metered.**

        Args:
            q: Search text. Fewer than 2 characters returns an empty result set.
            state: Narrow to a US state, two-letter code.
            mode: text is keyword matching; semantic/hybrid add vector matching and fall back to text if unavailable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/search"),
            query_params=[
                param[str]("q", q), param[str | None]("state", state), param[ModeModelOrStr | None]("mode", mode)
            ],
            decoder=async_json_decoder[ApiSearchResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
