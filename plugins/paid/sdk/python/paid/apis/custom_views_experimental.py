from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_custom_view_error import CreateCustomViewErrorBody, create_custom_view_error_mapper
from ..errors.get_custom_view_data_error import GetCustomViewDataErrorBody, get_custom_view_data_error_mapper
from ..errors.get_custom_view_embed_token_error import (
    GetCustomViewEmbedTokenErrorBody,
    get_custom_view_embed_token_error_mapper,
)
from ..errors.get_custom_view_error import GetCustomViewErrorBody, get_custom_view_error_mapper
from ..errors.list_custom_views_error import ListCustomViewsErrorBody, list_custom_views_error_mapper
from ..errors.publish_custom_view_error import PublishCustomViewErrorBody, publish_custom_view_error_mapper
from ..errors.update_custom_view_error import UpdateCustomViewErrorBody, update_custom_view_error_mapper
from ..errors.update_custom_view_period_error import (
    UpdateCustomViewPeriodErrorBody,
    update_custom_view_period_error_mapper,
)
from ..models.create_custom_view_request import CreateCustomViewRequest, CreateCustomViewRequestDict
from ..models.custom_view import CustomView
from ..models.custom_view_detail import CustomViewDetail
from ..models.custom_view_embed_token_response import CustomViewEmbedTokenResponse
from ..models.custom_view_list_response import CustomViewListResponse
from ..models.enums.experimental_views_display_id_data_get_parameters_period_kind import (
    ExperimentalViewsDisplayIdDataGetParametersPeriodKindOrStr,
)
from ..models.enums.experimental_views_display_id_data_get_parameters_period_unit import (
    ExperimentalViewsDisplayIdDataGetParametersPeriodUnitOrStr,
)
from ..models.update_custom_view_period_request import UpdateCustomViewPeriodRequest, UpdateCustomViewPeriodRequestDict
from ..models.update_custom_view_request import UpdateCustomViewRequest, UpdateCustomViewRequestDict
from ..models.view_data_response import ViewDataResponse
from ..server.server import Server


class CustomViewsExperimental:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = CustomViewsExperimentalWithRawResponse(client, server)

    def create_custom_view(
        self,
        authorization: str,
        *,
        body: CreateCustomViewRequest | CreateCustomViewRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomView:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        ⚠️ Only call this when the user has EXPLICITLY asked to save or create the view. After generating or previewing
        a dashboard, do NOT automatically save a draft — show it to the user and wait for them to ask you to save it.
        Creating saves a DRAFT only; it is NOT permission to publish — never chain a publish onto a create. After
        saving, hand the user the previewUrl and wait for their feedback before doing anything else. Saves named
        analytics queries + a self-contained HTML render bundle as a DRAFT custom view. **Call
        getCustomViewAuthoringGuide (GET /experimental/views/authoring-guide) first** — it returns the full guide and a
        copy-paste interactive template. Key rules: (1) Do NOT add a customer filter to the SQL — the database scopes
        every query to the viewing customer at embed time. (2) Each query's SQL must be SELECT-only; return
        clearly-named columns. Compute metric VALUES in SQL (e.g. (count()*2)/5 AS custom_metric) — derive a number in
        the render bundle only when it depends on user interaction (toggle/filter/hover) or is pure formatting of a
        value a query already returns. (3) The render bundle must be SELF-CONTAINED — inline all CSS/JS/charting, NO
        external loads or fetch (the sandbox has connect-src 'none'); it must listen for the ``paid:data`` message (data
        keyed by query id) and re-render on each one. (4) Make it INTERACTIVE — mousemove hover tooltips and at least
        one addEventListener-wired control that re-renders (a static chart feels broken). (5) The render bundle is the
        single source of truth — BEFORE saving, preview the EXACT bundle in the user's current client (call
        getCustomViewPreviewHarness with your bundle + sample data and render the HTML it returns) and show it to the
        user; that preview in the current client is how the user first sees the dashboard. Do NOT save a draft just to
        preview it in Paid — creating writes to the user's real account and is never a preview step. Do NOT build a
        separate chart, and only show numbers that come from a declared query. (6) A view is a FULL dashboard — include
        as many charts/KPIs as the analysis has. Keep every element derived from the single viewing customer (KPIs,
        trends, type mix); drop only cross-customer comparisons (rankings, share-of-total, 'N customers'). Don't
        simplify to one chart. (7) To make the date range adjustable (e.g. the user says 'last month'), write the date
        boundary as ``{period_start:DateTime}`` / ``{period_end:DateTime}`` placeholders in the SQL and pass a default
        ``period`` (relative like {kind:'relative',unit:'month',amount:1}, or absolute start/end). The org user can then
        change it in Paid without re-authoring. A query using the placeholders REQUIRES a period. Do NOT add your own
        date-range picker to the render bundle — Paid owns the timeframe and the bundle receives already-filtered data;
        a second in-bundle picker cannot re-run the SQL. (8) Check your draft with validateCustomView (POST
        /experimental/views/validate) BEFORE asking the user to save — it runs these same gates without persisting and
        reports every problem at once. The response returns a ``previewUrl`` — give it to the user so they can open the
        new view in Paid.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.create_custom_view(authorization, body=body, request_options=request_options)
        )

    def get_custom_view(
        self, display_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CustomViewDetail:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Returns the view's name, status, query ids, and the author render bundle for the owning organization (DRAFT or
        PUBLISHED). Used by the trusted preview/embed frame to render the sandbox; the per-customer data is fetched
        separately via /:displayId/data.

        Args:
            display_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_custom_view(display_id, authorization, request_options=request_options)
        )

    def get_custom_view_data(
        self,
        display_id: str,
        authorization: str,
        *,
        customer_id: str | None = None,
        period_kind: ExperimentalViewsDisplayIdDataGetParametersPeriodKindOrStr | None = None,
        period_unit: ExperimentalViewsDisplayIdDataGetParametersPeriodUnitOrStr | None = None,
        period_amount: int | None = None,
        period_start: str | None = None,
        period_end: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ViewDataResponse:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Runs every stored query of the view on the read-only analytics database and returns the result sets keyed by
        query id. For a customer-scoped view (the default), the query is scoped to the caller's organization AND the
        given ``customerId`` (both enforced as ClickHouse row filters) — ``customerId`` is required. For an
        organization-scoped view, the data is org-wide (scoped only to the caller's organization) and ``customerId`` is
        ignored. The scope is enforced by the database — it cannot be widened by the stored SQL.

        Args:
            display_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            customer_id: Customer to scope the data to (dev/preview only; the embed derives this from the verified
                token). Required for customer-scoped views; ignored for organization-scoped views (their data is
                org-wide).
            period_kind: Override the view's default date range for this request only. 'relative' = rolling window (set
                periodUnit + periodAmount); 'absolute' = fixed range (set periodStart + periodEnd).
            period_unit: relative override only: unit of the rolling window.
            period_amount: relative override only: how many units back from today.
            period_start: absolute override only: inclusive start date (YYYY-MM-DD).
            period_end: absolute override only: inclusive end date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 408 429 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_custom_view_data(
                display_id,
                authorization,
                customer_id=customer_id,
                period_kind=period_kind,
                period_unit=period_unit,
                period_amount=period_amount,
                period_start=period_start,
                period_end=period_end,
                request_options=request_options,
            ),
        )

    def get_custom_view_embed_token(
        self,
        display_id: str,
        customer_id: str,
        authorization: str,
        *,
        ttl_seconds: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomViewEmbedTokenResponse:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Mints a short-lived, customer-scoped token for embedding a published custom view. Call this from your server
        with your API key, then pass the returned token to the embed SDK. Organization-scoped views cannot be embedded
        per-customer — this returns a 400 (``ORG_SCOPED_VIEW_NOT_EMBEDDABLE``) for one.

        Args:
            display_id: Value sent with the request.
            customer_id: The customer to scope the view to: external id, Paid display id (cus_…), or internal id.
            authorization: API Key authentication using Bearer token
            ttl_seconds: Token lifetime in seconds (capped at 3600).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_custom_view_embed_token(
                display_id, customer_id, authorization, ttl_seconds=ttl_seconds, request_options=request_options
            ),
        )

    def list_custom_views(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CustomViewListResponse:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Lists the organization's custom views (newest first) with lightweight summary info — name, status, query count,
        default date range, created date. Does not return the SQL or render bundle; fetch a single view via
        getCustomView for those.

        Args:
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.list_custom_views(authorization, request_options=request_options))

    def publish_custom_view(
        self,
        display_id: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomView:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        ⚠️ Never publish as an automatic follow-up to creating or generating a view. Only call this after you have shown
        the user the built/previewed view and they have EXPLICITLY approved publishing — building and publishing are
        separate user decisions, and answering an earlier question (e.g. the view's scope) is NOT publish approval.
        Flips the view from DRAFT to PUBLISHED. Only PUBLISHED views are served on the embed data path — this is the
        gate that stops an unreviewed view reaching end-customers. Idempotent: publishing an already-published view is a
        no-op success. The response returns a ``previewUrl`` — give it to the user so they can open the view in Paid.

        Args:
            display_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.publish_custom_view(
                display_id, authorization, body=body, request_options=request_options
            ),
        )

    def update_custom_view(
        self,
        display_id: str,
        authorization: str,
        *,
        body: UpdateCustomViewRequest | UpdateCustomViewRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomView:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Partially updates a view. Omitted fields are left unchanged. For REVISIONS, prefer the incremental fields —
        ``bundleEdits`` (exact search-and-replace on the stored render bundle) and ``queryUpserts``/``queryRemovals``
        (per-query changes) — so you transmit only what changed instead of re-sending the whole payload. The
        full-replacement fields remain for rewrites: ``renderBundle``, and ``queries`` (a FULL replacement of the query
        list — never drop queries the user didn't ask to remove). Replacement and incremental forms of the same aspect
        cannot be combined. The resulting SQL and bundle pass the same validation as createCustomView (SELECT-only, size
        cap, self-contained, paid:data listener). Works on DRAFT or PUBLISHED views — published embeds pick the change
        up on their next load.

        Args:
            display_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_custom_view(
                display_id, authorization, body=body, request_options=request_options
            ),
        )

    def update_custom_view_period(
        self,
        display_id: str,
        authorization: str,
        *,
        body: UpdateCustomViewPeriodRequest | UpdateCustomViewPeriodRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomView:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Updates the view's default date range (the period applied to queries that use the ``{period_start:DateTime}`` /
        ``{period_end:DateTime}`` placeholders). Accepts a relative rolling window (e.g. last 30 days) or a fixed
        start/end range. Lets the period be changed after deployment without re-authoring the SQL. Applies to DRAFT or
        PUBLISHED views.

        Args:
            display_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_custom_view_period(
                display_id, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CustomViewsExperimentalWithRawResponse:
        return self._with_raw_response


class AsyncCustomViewsExperimental:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncCustomViewsExperimentalWithRawResponse(client, server)

    async def create_custom_view(
        self,
        authorization: str,
        *,
        body: CreateCustomViewRequest | CreateCustomViewRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomView:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        ⚠️ Only call this when the user has EXPLICITLY asked to save or create the view. After generating or previewing
        a dashboard, do NOT automatically save a draft — show it to the user and wait for them to ask you to save it.
        Creating saves a DRAFT only; it is NOT permission to publish — never chain a publish onto a create. After
        saving, hand the user the previewUrl and wait for their feedback before doing anything else. Saves named
        analytics queries + a self-contained HTML render bundle as a DRAFT custom view. **Call
        getCustomViewAuthoringGuide (GET /experimental/views/authoring-guide) first** — it returns the full guide and a
        copy-paste interactive template. Key rules: (1) Do NOT add a customer filter to the SQL — the database scopes
        every query to the viewing customer at embed time. (2) Each query's SQL must be SELECT-only; return
        clearly-named columns. Compute metric VALUES in SQL (e.g. (count()*2)/5 AS custom_metric) — derive a number in
        the render bundle only when it depends on user interaction (toggle/filter/hover) or is pure formatting of a
        value a query already returns. (3) The render bundle must be SELF-CONTAINED — inline all CSS/JS/charting, NO
        external loads or fetch (the sandbox has connect-src 'none'); it must listen for the ``paid:data`` message (data
        keyed by query id) and re-render on each one. (4) Make it INTERACTIVE — mousemove hover tooltips and at least
        one addEventListener-wired control that re-renders (a static chart feels broken). (5) The render bundle is the
        single source of truth — BEFORE saving, preview the EXACT bundle in the user's current client (call
        getCustomViewPreviewHarness with your bundle + sample data and render the HTML it returns) and show it to the
        user; that preview in the current client is how the user first sees the dashboard. Do NOT save a draft just to
        preview it in Paid — creating writes to the user's real account and is never a preview step. Do NOT build a
        separate chart, and only show numbers that come from a declared query. (6) A view is a FULL dashboard — include
        as many charts/KPIs as the analysis has. Keep every element derived from the single viewing customer (KPIs,
        trends, type mix); drop only cross-customer comparisons (rankings, share-of-total, 'N customers'). Don't
        simplify to one chart. (7) To make the date range adjustable (e.g. the user says 'last month'), write the date
        boundary as ``{period_start:DateTime}`` / ``{period_end:DateTime}`` placeholders in the SQL and pass a default
        ``period`` (relative like {kind:'relative',unit:'month',amount:1}, or absolute start/end). The org user can then
        change it in Paid without re-authoring. A query using the placeholders REQUIRES a period. Do NOT add your own
        date-range picker to the render bundle — Paid owns the timeframe and the bundle receives already-filtered data;
        a second in-bundle picker cannot re-run the SQL. (8) Check your draft with validateCustomView (POST
        /experimental/views/validate) BEFORE asking the user to save — it runs these same gates without persisting and
        reports every problem at once. The response returns a ``previewUrl`` — give it to the user so they can open the
        new view in Paid.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_custom_view(authorization, body=body, request_options=request_options)
        )

    async def get_custom_view(
        self, display_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CustomViewDetail:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Returns the view's name, status, query ids, and the author render bundle for the owning organization (DRAFT or
        PUBLISHED). Used by the trusted preview/embed frame to render the sandbox; the per-customer data is fetched
        separately via /:displayId/data.

        Args:
            display_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_custom_view(display_id, authorization, request_options=request_options)
        )

    async def get_custom_view_data(
        self,
        display_id: str,
        authorization: str,
        *,
        customer_id: str | None = None,
        period_kind: ExperimentalViewsDisplayIdDataGetParametersPeriodKindOrStr | None = None,
        period_unit: ExperimentalViewsDisplayIdDataGetParametersPeriodUnitOrStr | None = None,
        period_amount: int | None = None,
        period_start: str | None = None,
        period_end: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ViewDataResponse:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Runs every stored query of the view on the read-only analytics database and returns the result sets keyed by
        query id. For a customer-scoped view (the default), the query is scoped to the caller's organization AND the
        given ``customerId`` (both enforced as ClickHouse row filters) — ``customerId`` is required. For an
        organization-scoped view, the data is org-wide (scoped only to the caller's organization) and ``customerId`` is
        ignored. The scope is enforced by the database — it cannot be widened by the stored SQL.

        Args:
            display_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            customer_id: Customer to scope the data to (dev/preview only; the embed derives this from the verified
                token). Required for customer-scoped views; ignored for organization-scoped views (their data is
                org-wide).
            period_kind: Override the view's default date range for this request only. 'relative' = rolling window (set
                periodUnit + periodAmount); 'absolute' = fixed range (set periodStart + periodEnd).
            period_unit: relative override only: unit of the rolling window.
            period_amount: relative override only: how many units back from today.
            period_start: absolute override only: inclusive start date (YYYY-MM-DD).
            period_end: absolute override only: inclusive end date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 408 429 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_custom_view_data(
                display_id,
                authorization,
                customer_id=customer_id,
                period_kind=period_kind,
                period_unit=period_unit,
                period_amount=period_amount,
                period_start=period_start,
                period_end=period_end,
                request_options=request_options,
            ),
        )

    async def get_custom_view_embed_token(
        self,
        display_id: str,
        customer_id: str,
        authorization: str,
        *,
        ttl_seconds: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomViewEmbedTokenResponse:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Mints a short-lived, customer-scoped token for embedding a published custom view. Call this from your server
        with your API key, then pass the returned token to the embed SDK. Organization-scoped views cannot be embedded
        per-customer — this returns a 400 (``ORG_SCOPED_VIEW_NOT_EMBEDDABLE``) for one.

        Args:
            display_id: Value sent with the request.
            customer_id: The customer to scope the view to: external id, Paid display id (cus_…), or internal id.
            authorization: API Key authentication using Bearer token
            ttl_seconds: Token lifetime in seconds (capped at 3600).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_custom_view_embed_token(
                display_id, customer_id, authorization, ttl_seconds=ttl_seconds, request_options=request_options
            ),
        )

    async def list_custom_views(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CustomViewListResponse:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Lists the organization's custom views (newest first) with lightweight summary info — name, status, query count,
        default date range, created date. Does not return the SQL or render bundle; fetch a single view via
        getCustomView for those.

        Args:
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.list_custom_views(authorization, request_options=request_options))

    async def publish_custom_view(
        self,
        display_id: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomView:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        ⚠️ Never publish as an automatic follow-up to creating or generating a view. Only call this after you have shown
        the user the built/previewed view and they have EXPLICITLY approved publishing — building and publishing are
        separate user decisions, and answering an earlier question (e.g. the view's scope) is NOT publish approval.
        Flips the view from DRAFT to PUBLISHED. Only PUBLISHED views are served on the embed data path — this is the
        gate that stops an unreviewed view reaching end-customers. Idempotent: publishing an already-published view is a
        no-op success. The response returns a ``previewUrl`` — give it to the user so they can open the view in Paid.

        Args:
            display_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.publish_custom_view(
                display_id, authorization, body=body, request_options=request_options
            ),
        )

    async def update_custom_view(
        self,
        display_id: str,
        authorization: str,
        *,
        body: UpdateCustomViewRequest | UpdateCustomViewRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomView:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Partially updates a view. Omitted fields are left unchanged. For REVISIONS, prefer the incremental fields —
        ``bundleEdits`` (exact search-and-replace on the stored render bundle) and ``queryUpserts``/``queryRemovals``
        (per-query changes) — so you transmit only what changed instead of re-sending the whole payload. The
        full-replacement fields remain for rewrites: ``renderBundle``, and ``queries`` (a FULL replacement of the query
        list — never drop queries the user didn't ask to remove). Replacement and incremental forms of the same aspect
        cannot be combined. The resulting SQL and bundle pass the same validation as createCustomView (SELECT-only, size
        cap, self-contained, paid:data listener). Works on DRAFT or PUBLISHED views — published embeds pick the change
        up on their next load.

        Args:
            display_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_custom_view(
                display_id, authorization, body=body, request_options=request_options
            ),
        )

    async def update_custom_view_period(
        self,
        display_id: str,
        authorization: str,
        *,
        body: UpdateCustomViewPeriodRequest | UpdateCustomViewPeriodRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomView:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Updates the view's default date range (the period applied to queries that use the ``{period_start:DateTime}`` /
        ``{period_end:DateTime}`` placeholders). Accepts a relative rolling window (e.g. last 30 days) or a fixed
        start/end range. Lets the period be changed after deployment without re-authoring the SQL. Applies to DRAFT or
        PUBLISHED views.

        Args:
            display_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_custom_view_period(
                display_id, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCustomViewsExperimentalWithRawResponse:
        return self._with_raw_response


class CustomViewsExperimentalWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_custom_view(
        self,
        authorization: str,
        *,
        body: CreateCustomViewRequest | CreateCustomViewRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomView, CreateCustomViewErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        ⚠️ Only call this when the user has EXPLICITLY asked to save or create the view. After generating or previewing
        a dashboard, do NOT automatically save a draft — show it to the user and wait for them to ask you to save it.
        Creating saves a DRAFT only; it is NOT permission to publish — never chain a publish onto a create. After
        saving, hand the user the previewUrl and wait for their feedback before doing anything else. Saves named
        analytics queries + a self-contained HTML render bundle as a DRAFT custom view. **Call
        getCustomViewAuthoringGuide (GET /experimental/views/authoring-guide) first** — it returns the full guide and a
        copy-paste interactive template. Key rules: (1) Do NOT add a customer filter to the SQL — the database scopes
        every query to the viewing customer at embed time. (2) Each query's SQL must be SELECT-only; return
        clearly-named columns. Compute metric VALUES in SQL (e.g. (count()*2)/5 AS custom_metric) — derive a number in
        the render bundle only when it depends on user interaction (toggle/filter/hover) or is pure formatting of a
        value a query already returns. (3) The render bundle must be SELF-CONTAINED — inline all CSS/JS/charting, NO
        external loads or fetch (the sandbox has connect-src 'none'); it must listen for the ``paid:data`` message (data
        keyed by query id) and re-render on each one. (4) Make it INTERACTIVE — mousemove hover tooltips and at least
        one addEventListener-wired control that re-renders (a static chart feels broken). (5) The render bundle is the
        single source of truth — BEFORE saving, preview the EXACT bundle in the user's current client (call
        getCustomViewPreviewHarness with your bundle + sample data and render the HTML it returns) and show it to the
        user; that preview in the current client is how the user first sees the dashboard. Do NOT save a draft just to
        preview it in Paid — creating writes to the user's real account and is never a preview step. Do NOT build a
        separate chart, and only show numbers that come from a declared query. (6) A view is a FULL dashboard — include
        as many charts/KPIs as the analysis has. Keep every element derived from the single viewing customer (KPIs,
        trends, type mix); drop only cross-customer comparisons (rankings, share-of-total, 'N customers'). Don't
        simplify to one chart. (7) To make the date range adjustable (e.g. the user says 'last month'), write the date
        boundary as ``{period_start:DateTime}`` / ``{period_end:DateTime}`` placeholders in the SQL and pass a default
        ``period`` (relative like {kind:'relative',unit:'month',amount:1}, or absolute start/end). The org user can then
        change it in Paid without re-authoring. A query using the placeholders REQUIRES a period. Do NOT add your own
        date-range picker to the render bundle — Paid owns the timeframe and the bundle receives already-filtered data;
        a second in-bundle picker cannot re-run the SQL. (8) Check your draft with validateCustomView (POST
        /experimental/views/validate) BEFORE asking the user to save — it runs these same gates without persisting and
        reports every problem at once. The response returns a ``previewUrl`` — give it to the user so they can open the
        new view in Paid.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/experimental/views/"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCustomViewRequest | CreateCustomViewRequestDict | None](body),
            decoder=json_decoder[CustomView],
            error_mapper=create_custom_view_error_mapper,
            request_options=request_options,
        )

    def get_custom_view(
        self, display_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomViewDetail, GetCustomViewErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Returns the view's name, status, query ids, and the author render bundle for the owning organization (DRAFT or
        PUBLISHED). Used by the trusted preview/embed frame to render the sandbox; the per-customer data is fetched
        separately via /:displayId/data.

        Args:
            display_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/experimental/views/{displayId}"),
            path_params=[param[str]("displayId", display_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[CustomViewDetail],
            error_mapper=get_custom_view_error_mapper,
            request_options=request_options,
        )

    def get_custom_view_data(
        self,
        display_id: str,
        authorization: str,
        *,
        customer_id: str | None = None,
        period_kind: ExperimentalViewsDisplayIdDataGetParametersPeriodKindOrStr | None = None,
        period_unit: ExperimentalViewsDisplayIdDataGetParametersPeriodUnitOrStr | None = None,
        period_amount: int | None = None,
        period_start: str | None = None,
        period_end: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ViewDataResponse, GetCustomViewDataErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Runs every stored query of the view on the read-only analytics database and returns the result sets keyed by
        query id. For a customer-scoped view (the default), the query is scoped to the caller's organization AND the
        given ``customerId`` (both enforced as ClickHouse row filters) — ``customerId`` is required. For an
        organization-scoped view, the data is org-wide (scoped only to the caller's organization) and ``customerId`` is
        ignored. The scope is enforced by the database — it cannot be widened by the stored SQL.

        Args:
            display_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            customer_id: Customer to scope the data to (dev/preview only; the embed derives this from the verified
                token). Required for customer-scoped views; ignored for organization-scoped views (their data is
                org-wide).
            period_kind: Override the view's default date range for this request only. 'relative' = rolling window (set
                periodUnit + periodAmount); 'absolute' = fixed range (set periodStart + periodEnd).
            period_unit: relative override only: unit of the rolling window.
            period_amount: relative override only: how many units back from today.
            period_start: absolute override only: inclusive start date (YYYY-MM-DD).
            period_end: absolute override only: inclusive end date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api(
                "/experimental/views/{displayId}/data"
            ),
            path_params=[param[str]("displayId", display_id)],
            query_params=[
                param[str | None]("customerId", customer_id),
                param[ExperimentalViewsDisplayIdDataGetParametersPeriodKindOrStr | None]("periodKind", period_kind),
                param[ExperimentalViewsDisplayIdDataGetParametersPeriodUnitOrStr | None]("periodUnit", period_unit),
                param[int | None]("periodAmount", period_amount),
                param[str | None]("periodStart", period_start),
                param[str | None]("periodEnd", period_end),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[ViewDataResponse],
            error_mapper=get_custom_view_data_error_mapper,
            request_options=request_options,
        )

    def get_custom_view_embed_token(
        self,
        display_id: str,
        customer_id: str,
        authorization: str,
        *,
        ttl_seconds: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomViewEmbedTokenResponse, GetCustomViewEmbedTokenErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Mints a short-lived, customer-scoped token for embedding a published custom view. Call this from your server
        with your API key, then pass the returned token to the embed SDK. Organization-scoped views cannot be embedded
        per-customer — this returns a 400 (``ORG_SCOPED_VIEW_NOT_EMBEDDABLE``) for one.

        Args:
            display_id: Value sent with the request.
            customer_id: The customer to scope the view to: external id, Paid display id (cus_…), or internal id.
            authorization: API Key authentication using Bearer token
            ttl_seconds: Token lifetime in seconds (capped at 3600).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api(
                "/experimental/views/{displayId}/embed-token"
            ),
            path_params=[param[str]("displayId", display_id)],
            query_params=[param[str]("customerId", customer_id), param[int | None]("ttlSeconds", ttl_seconds)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[CustomViewEmbedTokenResponse],
            error_mapper=get_custom_view_embed_token_error_mapper,
            request_options=request_options,
        )

    def list_custom_views(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomViewListResponse, ListCustomViewsErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Lists the organization's custom views (newest first) with lightweight summary info — name, status, query count,
        default date range, created date. Does not return the SQL or render bundle; fetch a single view via
        getCustomView for those.

        Args:
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/experimental/views/"),
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[CustomViewListResponse],
            error_mapper=list_custom_views_error_mapper,
            request_options=request_options,
        )

    def publish_custom_view(
        self,
        display_id: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomView, PublishCustomViewErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        ⚠️ Never publish as an automatic follow-up to creating or generating a view. Only call this after you have shown
        the user the built/previewed view and they have EXPLICITLY approved publishing — building and publishing are
        separate user decisions, and answering an earlier question (e.g. the view's scope) is NOT publish approval.
        Flips the view from DRAFT to PUBLISHED. Only PUBLISHED views are served on the embed data path — this is the
        gate that stops an unreviewed view reaching end-customers. Idempotent: publishing an already-published view is a
        no-op success. The response returns a ``previewUrl`` — give it to the user so they can open the view in Paid.

        Args:
            display_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api(
                "/experimental/views/{displayId}/publish"
            ),
            path_params=[param[str]("displayId", display_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            decoder=json_decoder[CustomView],
            error_mapper=publish_custom_view_error_mapper,
            request_options=request_options,
        )

    def update_custom_view(
        self,
        display_id: str,
        authorization: str,
        *,
        body: UpdateCustomViewRequest | UpdateCustomViewRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomView, UpdateCustomViewErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Partially updates a view. Omitted fields are left unchanged. For REVISIONS, prefer the incremental fields —
        ``bundleEdits`` (exact search-and-replace on the stored render bundle) and ``queryUpserts``/``queryRemovals``
        (per-query changes) — so you transmit only what changed instead of re-sending the whole payload. The
        full-replacement fields remain for rewrites: ``renderBundle``, and ``queries`` (a FULL replacement of the query
        list — never drop queries the user didn't ask to remove). Replacement and incremental forms of the same aspect
        cannot be combined. The resulting SQL and bundle pass the same validation as createCustomView (SELECT-only, size
        cap, self-contained, paid:data listener). Works on DRAFT or PUBLISHED views — published embeds pick the change
        up on their next load.

        Args:
            display_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_reference_analytics_experimental_api("/experimental/views/{displayId}"),
            path_params=[param[str]("displayId", display_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCustomViewRequest | UpdateCustomViewRequestDict | None](body),
            decoder=json_decoder[CustomView],
            error_mapper=update_custom_view_error_mapper,
            request_options=request_options,
        )

    def update_custom_view_period(
        self,
        display_id: str,
        authorization: str,
        *,
        body: UpdateCustomViewPeriodRequest | UpdateCustomViewPeriodRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomView, UpdateCustomViewPeriodErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Updates the view's default date range (the period applied to queries that use the ``{period_start:DateTime}`` /
        ``{period_end:DateTime}`` placeholders). Accepts a relative rolling window (e.g. last 30 days) or a fixed
        start/end range. Lets the period be changed after deployment without re-authoring the SQL. Applies to DRAFT or
        PUBLISHED views.

        Args:
            display_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_reference_analytics_experimental_api(
                "/experimental/views/{displayId}/period"
            ),
            path_params=[param[str]("displayId", display_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCustomViewPeriodRequest | UpdateCustomViewPeriodRequestDict | None](body),
            decoder=json_decoder[CustomView],
            error_mapper=update_custom_view_period_error_mapper,
            request_options=request_options,
        )


class AsyncCustomViewsExperimentalWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_custom_view(
        self,
        authorization: str,
        *,
        body: CreateCustomViewRequest | CreateCustomViewRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomView, CreateCustomViewErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        ⚠️ Only call this when the user has EXPLICITLY asked to save or create the view. After generating or previewing
        a dashboard, do NOT automatically save a draft — show it to the user and wait for them to ask you to save it.
        Creating saves a DRAFT only; it is NOT permission to publish — never chain a publish onto a create. After
        saving, hand the user the previewUrl and wait for their feedback before doing anything else. Saves named
        analytics queries + a self-contained HTML render bundle as a DRAFT custom view. **Call
        getCustomViewAuthoringGuide (GET /experimental/views/authoring-guide) first** — it returns the full guide and a
        copy-paste interactive template. Key rules: (1) Do NOT add a customer filter to the SQL — the database scopes
        every query to the viewing customer at embed time. (2) Each query's SQL must be SELECT-only; return
        clearly-named columns. Compute metric VALUES in SQL (e.g. (count()*2)/5 AS custom_metric) — derive a number in
        the render bundle only when it depends on user interaction (toggle/filter/hover) or is pure formatting of a
        value a query already returns. (3) The render bundle must be SELF-CONTAINED — inline all CSS/JS/charting, NO
        external loads or fetch (the sandbox has connect-src 'none'); it must listen for the ``paid:data`` message (data
        keyed by query id) and re-render on each one. (4) Make it INTERACTIVE — mousemove hover tooltips and at least
        one addEventListener-wired control that re-renders (a static chart feels broken). (5) The render bundle is the
        single source of truth — BEFORE saving, preview the EXACT bundle in the user's current client (call
        getCustomViewPreviewHarness with your bundle + sample data and render the HTML it returns) and show it to the
        user; that preview in the current client is how the user first sees the dashboard. Do NOT save a draft just to
        preview it in Paid — creating writes to the user's real account and is never a preview step. Do NOT build a
        separate chart, and only show numbers that come from a declared query. (6) A view is a FULL dashboard — include
        as many charts/KPIs as the analysis has. Keep every element derived from the single viewing customer (KPIs,
        trends, type mix); drop only cross-customer comparisons (rankings, share-of-total, 'N customers'). Don't
        simplify to one chart. (7) To make the date range adjustable (e.g. the user says 'last month'), write the date
        boundary as ``{period_start:DateTime}`` / ``{period_end:DateTime}`` placeholders in the SQL and pass a default
        ``period`` (relative like {kind:'relative',unit:'month',amount:1}, or absolute start/end). The org user can then
        change it in Paid without re-authoring. A query using the placeholders REQUIRES a period. Do NOT add your own
        date-range picker to the render bundle — Paid owns the timeframe and the bundle receives already-filtered data;
        a second in-bundle picker cannot re-run the SQL. (8) Check your draft with validateCustomView (POST
        /experimental/views/validate) BEFORE asking the user to save — it runs these same gates without persisting and
        reports every problem at once. The response returns a ``previewUrl`` — give it to the user so they can open the
        new view in Paid.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/experimental/views/"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCustomViewRequest | CreateCustomViewRequestDict | None](body),
            decoder=async_json_decoder[CustomView],
            error_mapper=create_custom_view_error_mapper,
            request_options=request_options,
        )

    async def get_custom_view(
        self, display_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CustomViewDetail, GetCustomViewErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Returns the view's name, status, query ids, and the author render bundle for the owning organization (DRAFT or
        PUBLISHED). Used by the trusted preview/embed frame to render the sandbox; the per-customer data is fetched
        separately via /:displayId/data.

        Args:
            display_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/experimental/views/{displayId}"),
            path_params=[param[str]("displayId", display_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[CustomViewDetail],
            error_mapper=get_custom_view_error_mapper,
            request_options=request_options,
        )

    async def get_custom_view_data(
        self,
        display_id: str,
        authorization: str,
        *,
        customer_id: str | None = None,
        period_kind: ExperimentalViewsDisplayIdDataGetParametersPeriodKindOrStr | None = None,
        period_unit: ExperimentalViewsDisplayIdDataGetParametersPeriodUnitOrStr | None = None,
        period_amount: int | None = None,
        period_start: str | None = None,
        period_end: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ViewDataResponse, GetCustomViewDataErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Runs every stored query of the view on the read-only analytics database and returns the result sets keyed by
        query id. For a customer-scoped view (the default), the query is scoped to the caller's organization AND the
        given ``customerId`` (both enforced as ClickHouse row filters) — ``customerId`` is required. For an
        organization-scoped view, the data is org-wide (scoped only to the caller's organization) and ``customerId`` is
        ignored. The scope is enforced by the database — it cannot be widened by the stored SQL.

        Args:
            display_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            customer_id: Customer to scope the data to (dev/preview only; the embed derives this from the verified
                token). Required for customer-scoped views; ignored for organization-scoped views (their data is
                org-wide).
            period_kind: Override the view's default date range for this request only. 'relative' = rolling window (set
                periodUnit + periodAmount); 'absolute' = fixed range (set periodStart + periodEnd).
            period_unit: relative override only: unit of the rolling window.
            period_amount: relative override only: how many units back from today.
            period_start: absolute override only: inclusive start date (YYYY-MM-DD).
            period_end: absolute override only: inclusive end date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api(
                "/experimental/views/{displayId}/data"
            ),
            path_params=[param[str]("displayId", display_id)],
            query_params=[
                param[str | None]("customerId", customer_id),
                param[ExperimentalViewsDisplayIdDataGetParametersPeriodKindOrStr | None]("periodKind", period_kind),
                param[ExperimentalViewsDisplayIdDataGetParametersPeriodUnitOrStr | None]("periodUnit", period_unit),
                param[int | None]("periodAmount", period_amount),
                param[str | None]("periodStart", period_start),
                param[str | None]("periodEnd", period_end),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[ViewDataResponse],
            error_mapper=get_custom_view_data_error_mapper,
            request_options=request_options,
        )

    async def get_custom_view_embed_token(
        self,
        display_id: str,
        customer_id: str,
        authorization: str,
        *,
        ttl_seconds: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomViewEmbedTokenResponse, GetCustomViewEmbedTokenErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Mints a short-lived, customer-scoped token for embedding a published custom view. Call this from your server
        with your API key, then pass the returned token to the embed SDK. Organization-scoped views cannot be embedded
        per-customer — this returns a 400 (``ORG_SCOPED_VIEW_NOT_EMBEDDABLE``) for one.

        Args:
            display_id: Value sent with the request.
            customer_id: The customer to scope the view to: external id, Paid display id (cus_…), or internal id.
            authorization: API Key authentication using Bearer token
            ttl_seconds: Token lifetime in seconds (capped at 3600).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api(
                "/experimental/views/{displayId}/embed-token"
            ),
            path_params=[param[str]("displayId", display_id)],
            query_params=[param[str]("customerId", customer_id), param[int | None]("ttlSeconds", ttl_seconds)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[CustomViewEmbedTokenResponse],
            error_mapper=get_custom_view_embed_token_error_mapper,
            request_options=request_options,
        )

    async def list_custom_views(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CustomViewListResponse, ListCustomViewsErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Lists the organization's custom views (newest first) with lightweight summary info — name, status, query count,
        default date range, created date. Does not return the SQL or render bundle; fetch a single view via
        getCustomView for those.

        Args:
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/experimental/views/"),
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[CustomViewListResponse],
            error_mapper=list_custom_views_error_mapper,
            request_options=request_options,
        )

    async def publish_custom_view(
        self,
        display_id: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomView, PublishCustomViewErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        ⚠️ Never publish as an automatic follow-up to creating or generating a view. Only call this after you have shown
        the user the built/previewed view and they have EXPLICITLY approved publishing — building and publishing are
        separate user decisions, and answering an earlier question (e.g. the view's scope) is NOT publish approval.
        Flips the view from DRAFT to PUBLISHED. Only PUBLISHED views are served on the embed data path — this is the
        gate that stops an unreviewed view reaching end-customers. Idempotent: publishing an already-published view is a
        no-op success. The response returns a ``previewUrl`` — give it to the user so they can open the view in Paid.

        Args:
            display_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api(
                "/experimental/views/{displayId}/publish"
            ),
            path_params=[param[str]("displayId", display_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            decoder=async_json_decoder[CustomView],
            error_mapper=publish_custom_view_error_mapper,
            request_options=request_options,
        )

    async def update_custom_view(
        self,
        display_id: str,
        authorization: str,
        *,
        body: UpdateCustomViewRequest | UpdateCustomViewRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomView, UpdateCustomViewErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Partially updates a view. Omitted fields are left unchanged. For REVISIONS, prefer the incremental fields —
        ``bundleEdits`` (exact search-and-replace on the stored render bundle) and ``queryUpserts``/``queryRemovals``
        (per-query changes) — so you transmit only what changed instead of re-sending the whole payload. The
        full-replacement fields remain for rewrites: ``renderBundle``, and ``queries`` (a FULL replacement of the query
        list — never drop queries the user didn't ask to remove). Replacement and incremental forms of the same aspect
        cannot be combined. The resulting SQL and bundle pass the same validation as createCustomView (SELECT-only, size
        cap, self-contained, paid:data listener). Works on DRAFT or PUBLISHED views — published embeds pick the change
        up on their next load.

        Args:
            display_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_reference_analytics_experimental_api("/experimental/views/{displayId}"),
            path_params=[param[str]("displayId", display_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCustomViewRequest | UpdateCustomViewRequestDict | None](body),
            decoder=async_json_decoder[CustomView],
            error_mapper=update_custom_view_error_mapper,
            request_options=request_options,
        )

    async def update_custom_view_period(
        self,
        display_id: str,
        authorization: str,
        *,
        body: UpdateCustomViewPeriodRequest | UpdateCustomViewPeriodRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomView, UpdateCustomViewPeriodErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Updates the view's default date range (the period applied to queries that use the ``{period_start:DateTime}`` /
        ``{period_end:DateTime}`` placeholders). Accepts a relative rolling window (e.g. last 30 days) or a fixed
        start/end range. Lets the period be changed after deployment without re-authoring the SQL. Applies to DRAFT or
        PUBLISHED views.

        Args:
            display_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_reference_analytics_experimental_api(
                "/experimental/views/{displayId}/period"
            ),
            path_params=[param[str]("displayId", display_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCustomViewPeriodRequest | UpdateCustomViewPeriodRequestDict | None](body),
            decoder=async_json_decoder[CustomView],
            error_mapper=update_custom_view_period_error_mapper,
            request_options=request_options,
        )
