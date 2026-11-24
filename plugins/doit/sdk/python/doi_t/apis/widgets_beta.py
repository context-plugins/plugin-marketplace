from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_widget_error import GetWidgetErrorBody, get_widget_error_mapper
from ..errors.list_widgets_error import ListWidgetsErrorBody, list_widgets_error_mapper
from ..models.widget import Widget
from ..models.widget_list import WidgetList
from ..server.server import Server


class WidgetsBeta:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WidgetsBetaWithRawResponse(client, server, auth)

    def get_widget(
        self, widget_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> Widget:
        """Returns the latest precomputed cached result for one widget. This read does not refresh or recompute the
        widget synchronously.

        Use either the customer-specific ``id`` returned by the list-widgets operation or one of these stable aliases:

        - ``current-month-cloud-spend`` — total cloud spend accumulated during the current calendar month.
        - ``current-month-cloud-forecast`` — forecast of total cloud spend for the current calendar month.

        The two concrete alias requests are:

        - ``GET https://api.doit.com/analytics/v1/widgets/current-month-cloud-spend``
        - ``GET https://api.doit.com/analytics/v1/widgets/current-month-cloud-forecast``

        Authenticate with ``Authorization: Bearer ``. Omit ``X-Tenant-Id`` when the credential resolves to one customer.
        When the credential can act on multiple customers, send ``X-Tenant-Id: `` to select the customer. A ``403``
        response means the caller or selected customer is not authorized or entitled to use this API.

        The result's ``period.endTime`` is exclusive. Monetary ``amount`` values are decimal strings and ``currency``
        values are ISO 4217 currency codes. ``monthToMonthGrowthPercentage`` and ``monthToMonthGrowthAmount`` are both
        ``null`` when no comparable prior-period value exists.

        Args:
            widget_id: Stable widget alias or customer-specific widget ID returned by listWidgets. Use
                current-month-cloud-spend for current-month accumulated spend or current-month-cloud-forecast for the
                current-month forecast.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The widget and its latest precomputed result.

        Raises:
            ApiError: Missing or invalid credentials. Authenticated but not authorized to perform this request. The
                widget identifier is unknown, no cached result is available yet, or the customer has no billing data.
                Inspect ``code`` to choose the recovery action. The cached result cannot be served or an unexpected
                internal error occurred. Inspect ``code``; contact DoiT support with the ``Request-Id`` for
                non-retryable or persistent errors. The last background computation failed. This error is retryable;
                retry later. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_widget(widget_id, x_tenant_id=x_tenant_id, request_options=request_options)
        )

    def list_widgets(
        self, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> WidgetList:
        """Returns the complete catalogue of preset widgets supported by the Analytics Widgets API. Each entry contains
        a customer-specific ``id`` and a stable customer-facing ``alias``; either value can be passed to the get-widget
        operation. An ``id`` can vary by customer or service tier, while an ``alias`` remains stable.

        Authenticate with ``Authorization: Bearer ``. Omit ``X-Tenant-Id`` when the credential resolves to one customer.
        When the credential can act on multiple customers, send ``X-Tenant-Id: `` to select the customer. A ``403``
        response means the caller or selected customer is not authorized or entitled to use this API.

        Args:
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The complete supported widget catalogue.

        Raises:
            ApiError: Missing or invalid credentials. Authenticated but not authorized to perform this request.
                Unexpected server error. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(self._with_raw_response.list_widgets(x_tenant_id=x_tenant_id, request_options=request_options))

    @property
    def with_raw_response(self) -> WidgetsBetaWithRawResponse:
        return self._with_raw_response


class AsyncWidgetsBeta:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWidgetsBetaWithRawResponse(client, server, auth)

    async def get_widget(
        self,
        widget_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Widget:
        """Returns the latest precomputed cached result for one widget. This read does not refresh or recompute the
        widget synchronously.

        Use either the customer-specific ``id`` returned by the list-widgets operation or one of these stable aliases:

        - ``current-month-cloud-spend`` — total cloud spend accumulated during the current calendar month.
        - ``current-month-cloud-forecast`` — forecast of total cloud spend for the current calendar month.

        The two concrete alias requests are:

        - ``GET https://api.doit.com/analytics/v1/widgets/current-month-cloud-spend``
        - ``GET https://api.doit.com/analytics/v1/widgets/current-month-cloud-forecast``

        Authenticate with ``Authorization: Bearer ``. Omit ``X-Tenant-Id`` when the credential resolves to one customer.
        When the credential can act on multiple customers, send ``X-Tenant-Id: `` to select the customer. A ``403``
        response means the caller or selected customer is not authorized or entitled to use this API.

        The result's ``period.endTime`` is exclusive. Monetary ``amount`` values are decimal strings and ``currency``
        values are ISO 4217 currency codes. ``monthToMonthGrowthPercentage`` and ``monthToMonthGrowthAmount`` are both
        ``null`` when no comparable prior-period value exists.

        Args:
            widget_id: Stable widget alias or customer-specific widget ID returned by listWidgets. Use
                current-month-cloud-spend for current-month accumulated spend or current-month-cloud-forecast for the
                current-month forecast.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The widget and its latest precomputed result.

        Raises:
            ApiError: Missing or invalid credentials. Authenticated but not authorized to perform this request. The
                widget identifier is unknown, no cached result is available yet, or the customer has no billing data.
                Inspect ``code`` to choose the recovery action. The cached result cannot be served or an unexpected
                internal error occurred. Inspect ``code``; contact DoiT support with the ``Request-Id`` for
                non-retryable or persistent errors. The last background computation failed. This error is retryable;
                retry later. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_widget(
                widget_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def list_widgets(
        self, *, x_tenant_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WidgetList:
        """Returns the complete catalogue of preset widgets supported by the Analytics Widgets API. Each entry contains
        a customer-specific ``id`` and a stable customer-facing ``alias``; either value can be passed to the get-widget
        operation. An ``id`` can vary by customer or service tier, while an ``alias`` remains stable.

        Authenticate with ``Authorization: Bearer ``. Omit ``X-Tenant-Id`` when the credential resolves to one customer.
        When the credential can act on multiple customers, send ``X-Tenant-Id: `` to select the customer. A ``403``
        response means the caller or selected customer is not authorized or entitled to use this API.

        Args:
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The complete supported widget catalogue.

        Raises:
            ApiError: Missing or invalid credentials. Authenticated but not authorized to perform this request.
                Unexpected server error. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_widgets(x_tenant_id=x_tenant_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncWidgetsBetaWithRawResponse:
        return self._with_raw_response


class WidgetsBetaWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_widget(
        self, widget_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Widget, GetWidgetErrorBody]:
        """Returns the latest precomputed cached result for one widget. This read does not refresh or recompute the
        widget synchronously.

        Use either the customer-specific ``id`` returned by the list-widgets operation or one of these stable aliases:

        - ``current-month-cloud-spend`` — total cloud spend accumulated during the current calendar month.
        - ``current-month-cloud-forecast`` — forecast of total cloud spend for the current calendar month.

        The two concrete alias requests are:

        - ``GET https://api.doit.com/analytics/v1/widgets/current-month-cloud-spend``
        - ``GET https://api.doit.com/analytics/v1/widgets/current-month-cloud-forecast``

        Authenticate with ``Authorization: Bearer ``. Omit ``X-Tenant-Id`` when the credential resolves to one customer.
        When the credential can act on multiple customers, send ``X-Tenant-Id: `` to select the customer. A ``403``
        response means the caller or selected customer is not authorized or entitled to use this API.

        The result's ``period.endTime`` is exclusive. Monetary ``amount`` values are decimal strings and ``currency``
        values are ISO 4217 currency codes. ``monthToMonthGrowthPercentage`` and ``monthToMonthGrowthAmount`` are both
        ``null`` when no comparable prior-period value exists.

        Args:
            widget_id: Stable widget alias or customer-specific widget ID returned by listWidgets. Use
                current-month-cloud-spend for current-month accumulated spend or current-month-cloud-forecast for the
                current-month forecast.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/widgets/{widgetId}"),
            path_params=[param[str]("widgetId", widget_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Widget],
            error_mapper=get_widget_error_mapper,
            request_options=request_options,
        )

    def list_widgets(
        self, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WidgetList, ListWidgetsErrorBody]:
        """Returns the complete catalogue of preset widgets supported by the Analytics Widgets API. Each entry contains
        a customer-specific ``id`` and a stable customer-facing ``alias``; either value can be passed to the get-widget
        operation. An ``id`` can vary by customer or service tier, while an ``alias`` remains stable.

        Authenticate with ``Authorization: Bearer ``. Omit ``X-Tenant-Id`` when the credential resolves to one customer.
        When the credential can act on multiple customers, send ``X-Tenant-Id: `` to select the customer. A ``403``
        response means the caller or selected customer is not authorized or entitled to use this API.

        Args:
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/widgets"),
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[WidgetList],
            error_mapper=list_widgets_error_mapper,
            request_options=request_options,
        )


class AsyncWidgetsBetaWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_widget(
        self,
        widget_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Widget, GetWidgetErrorBody]:
        """Returns the latest precomputed cached result for one widget. This read does not refresh or recompute the
        widget synchronously.

        Use either the customer-specific ``id`` returned by the list-widgets operation or one of these stable aliases:

        - ``current-month-cloud-spend`` — total cloud spend accumulated during the current calendar month.
        - ``current-month-cloud-forecast`` — forecast of total cloud spend for the current calendar month.

        The two concrete alias requests are:

        - ``GET https://api.doit.com/analytics/v1/widgets/current-month-cloud-spend``
        - ``GET https://api.doit.com/analytics/v1/widgets/current-month-cloud-forecast``

        Authenticate with ``Authorization: Bearer ``. Omit ``X-Tenant-Id`` when the credential resolves to one customer.
        When the credential can act on multiple customers, send ``X-Tenant-Id: `` to select the customer. A ``403``
        response means the caller or selected customer is not authorized or entitled to use this API.

        The result's ``period.endTime`` is exclusive. Monetary ``amount`` values are decimal strings and ``currency``
        values are ISO 4217 currency codes. ``monthToMonthGrowthPercentage`` and ``monthToMonthGrowthAmount`` are both
        ``null`` when no comparable prior-period value exists.

        Args:
            widget_id: Stable widget alias or customer-specific widget ID returned by listWidgets. Use
                current-month-cloud-spend for current-month accumulated spend or current-month-cloud-forecast for the
                current-month forecast.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/widgets/{widgetId}"),
            path_params=[param[str]("widgetId", widget_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Widget],
            error_mapper=get_widget_error_mapper,
            request_options=request_options,
        )

    async def list_widgets(
        self, *, x_tenant_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WidgetList, ListWidgetsErrorBody]:
        """Returns the complete catalogue of preset widgets supported by the Analytics Widgets API. Each entry contains
        a customer-specific ``id`` and a stable customer-facing ``alias``; either value can be passed to the get-widget
        operation. An ``id`` can vary by customer or service tier, while an ``alias`` remains stable.

        Authenticate with ``Authorization: Bearer ``. Omit ``X-Tenant-Id`` when the credential resolves to one customer.
        When the credential can act on multiple customers, send ``X-Tenant-Id: `` to select the customer. A ``403``
        response means the caller or selected customer is not authorized or entitled to use this API.

        Args:
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/widgets"),
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[WidgetList],
            error_mapper=list_widgets_error_mapper,
            request_options=request_options,
        )
