from __future__ import annotations

from uuid import UUID, uuid4

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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_alert_error import CreateAlertErrorBody, create_alert_error_mapper
from ..errors.delete_alert_error import DeleteAlertErrorBody, delete_alert_error_mapper
from ..errors.get_alert_error import GetAlertErrorBody, get_alert_error_mapper
from ..errors.list_alert_slack_channels_error import (
    ListAlertSlackChannelsErrorBody,
    list_alert_slack_channels_error_mapper,
)
from ..errors.list_alerts_error import ListAlertsErrorBody, list_alerts_error_mapper
from ..errors.update_alert_error import UpdateAlertErrorBody, update_alert_error_mapper
from ..models.alert import Alert
from ..models.alert_request import AlertRequest, AlertRequestDict
from ..models.alert_slack_channel_list import AlertSlackChannelList
from ..models.alert_update_request import AlertUpdateRequest, AlertUpdateRequestDict
from ..models.enums.sort_by import SortByOrStr
from ..models.enums.sort_order import SortOrderOrStr
from ..models.external_alert_list import ExternalAlertList
from ..server.server import Server


class Alerts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AlertsWithRawResponse(client, server, auth)

    def create_alert(
        self, body: AlertRequest | AlertRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Alert:
        """Creates a new alert.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_alert(body, request_options=request_options))

    def delete_alert(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Deletes the alert specified by the Id.

        Args:
            id_: Alert ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Alert deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_alert(id_, request_options=request_options))

    def get_alert(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Alert:
        """Returns an alert by the specified Id.

        Args:
            id_: Alert ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Alert returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_alert(id_, request_options=request_options))

    def list_alert_slack_channels(
        self,
        *,
        name_contains: str | None = None,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AlertSlackChannelList:
        """Lists Slack destinations eligible for Alert notifications for the authenticated customer and caller. Returns
        canonical identifiers for recipientsSlackChannels and integration status. User credentials include visible
        private channels; service accounts return public/shared channels only. Results are sorted by stable destination
        identity. Keep nameContains unchanged when following pageToken.

        Args:
            name_contains: Value sent with the request.
            max_results: Value sent with the request.
            page_token: Page token, returned by a previous call, to request the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Eligible channels and connection status.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Slack
                discovery is temporarily unavailable — the workspace is still connected, but the channel lookup failed
                (rate limit, timeout, server error, or network failure) after a server-side retry. This is retryable:
                when Retry-After is present, wait that many seconds and repeat the request unchanged, including
                nameContains and pageToken. When absent, use exponential backoff. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_alert_slack_channels(
                name_contains=name_contains,
                max_results=max_results,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def list_alerts(
        self,
        *,
        sort_by: SortByOrStr | None = None,
        sort_order: SortOrderOrStr | None = None,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        name_contains: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ExternalAlertList:
        """Returns a list of alerts that your account has access to. Alerts are listed in reverse chronological order by
        default.

        Args:
            sort_by: A field by which the results will be sorted.
            sort_order: Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
                descending (highest to lowest).
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. The syntax is ``key:[<value>]``. Multiple filters can be
                connected using a pipe |. See `Filters <https://developer.doit.com/docs/filters>`__. Available filter
                keys: **owner**, **name**
            name_contains: Case-insensitive substring match against the resource name. Combined with the "filter"
                parameter using AND semantics.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_alerts(
                sort_by=sort_by,
                sort_order=sort_order,
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                name_contains=name_contains,
                request_options=request_options,
            ),
        )

    def update_alert(
        self,
        id_: str,
        body: AlertUpdateRequest | AlertUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Alert:
        """Updates the alert specified by the Id.

        Args:
            id_: Alert ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Alert updated.

        Raises:
            ApiError: The alert changed during the update. Retrieve it and retry against its latest settings. Bad
                Request - The server cannot process the request, often due to a malformed request. Unauthorized -
                Invalid API key. Forbidden - The client is not authorized to perform the request. Not Found - The
                requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_alert(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AlertsWithRawResponse:
        return self._with_raw_response


class AsyncAlerts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAlertsWithRawResponse(client, server, auth)

    async def create_alert(
        self, body: AlertRequest | AlertRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Alert:
        """Creates a new alert.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_alert(body, request_options=request_options))

    async def delete_alert(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Deletes the alert specified by the Id.

        Args:
            id_: Alert ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Alert deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_alert(id_, request_options=request_options))

    async def get_alert(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Alert:
        """Returns an alert by the specified Id.

        Args:
            id_: Alert ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Alert returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_alert(id_, request_options=request_options))

    async def list_alert_slack_channels(
        self,
        *,
        name_contains: str | None = None,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AlertSlackChannelList:
        """Lists Slack destinations eligible for Alert notifications for the authenticated customer and caller. Returns
        canonical identifiers for recipientsSlackChannels and integration status. User credentials include visible
        private channels; service accounts return public/shared channels only. Results are sorted by stable destination
        identity. Keep nameContains unchanged when following pageToken.

        Args:
            name_contains: Value sent with the request.
            max_results: Value sent with the request.
            page_token: Page token, returned by a previous call, to request the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Eligible channels and connection status.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Slack
                discovery is temporarily unavailable — the workspace is still connected, but the channel lookup failed
                (rate limit, timeout, server error, or network failure) after a server-side retry. This is retryable:
                when Retry-After is present, wait that many seconds and repeat the request unchanged, including
                nameContains and pageToken. When absent, use exponential backoff. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_alert_slack_channels(
                name_contains=name_contains,
                max_results=max_results,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def list_alerts(
        self,
        *,
        sort_by: SortByOrStr | None = None,
        sort_order: SortOrderOrStr | None = None,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        name_contains: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ExternalAlertList:
        """Returns a list of alerts that your account has access to. Alerts are listed in reverse chronological order by
        default.

        Args:
            sort_by: A field by which the results will be sorted.
            sort_order: Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
                descending (highest to lowest).
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. The syntax is ``key:[<value>]``. Multiple filters can be
                connected using a pipe |. See `Filters <https://developer.doit.com/docs/filters>`__. Available filter
                keys: **owner**, **name**
            name_contains: Case-insensitive substring match against the resource name. Combined with the "filter"
                parameter using AND semantics.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_alerts(
                sort_by=sort_by,
                sort_order=sort_order,
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                name_contains=name_contains,
                request_options=request_options,
            ),
        )

    async def update_alert(
        self,
        id_: str,
        body: AlertUpdateRequest | AlertUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Alert:
        """Updates the alert specified by the Id.

        Args:
            id_: Alert ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Alert updated.

        Raises:
            ApiError: The alert changed during the update. Retrieve it and retry against its latest settings. Bad
                Request - The server cannot process the request, often due to a malformed request. Unauthorized -
                Invalid API key. Forbidden - The client is not authorized to perform the request. Not Found - The
                requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_alert(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAlertsWithRawResponse:
        return self._with_raw_response


class AlertsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_alert(
        self, body: AlertRequest | AlertRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Alert, CreateAlertErrorBody]:
        """Creates a new alert.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/alerts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AlertRequest | AlertRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Alert],
            error_mapper=create_alert_error_mapper,
            request_options=request_options,
        )

    def delete_alert(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAlertErrorBody]:
        """Deletes the alert specified by the Id.

        Args:
            id_: Alert ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/analytics/v1/alerts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=delete_alert_error_mapper,
            request_options=request_options,
        )

    def get_alert(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Alert, GetAlertErrorBody]:
        """Returns an alert by the specified Id.

        Args:
            id_: Alert ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/alerts/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Alert],
            error_mapper=get_alert_error_mapper,
            request_options=request_options,
        )

    def list_alert_slack_channels(
        self,
        *,
        name_contains: str | None = None,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AlertSlackChannelList, ListAlertSlackChannelsErrorBody]:
        """Lists Slack destinations eligible for Alert notifications for the authenticated customer and caller. Returns
        canonical identifiers for recipientsSlackChannels and integration status. User credentials include visible
        private channels; service accounts return public/shared channels only. Results are sorted by stable destination
        identity. Keep nameContains unchanged when following pageToken.

        Args:
            name_contains: Value sent with the request.
            max_results: Value sent with the request.
            page_token: Page token, returned by a previous call, to request the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/alerts/slack-channels"),
            query_params=[
                param[str | None]("nameContains", name_contains),
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AlertSlackChannelList],
            error_mapper=list_alert_slack_channels_error_mapper,
            request_options=request_options,
        )

    def list_alerts(
        self,
        *,
        sort_by: SortByOrStr | None = None,
        sort_order: SortOrderOrStr | None = None,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        name_contains: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ExternalAlertList, ListAlertsErrorBody]:
        """Returns a list of alerts that your account has access to. Alerts are listed in reverse chronological order by
        default.

        Args:
            sort_by: A field by which the results will be sorted.
            sort_order: Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
                descending (highest to lowest).
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. The syntax is ``key:[<value>]``. Multiple filters can be
                connected using a pipe |. See `Filters <https://developer.doit.com/docs/filters>`__. Available filter
                keys: **owner**, **name**
            name_contains: Case-insensitive substring match against the resource name. Combined with the "filter"
                parameter using AND semantics.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/alerts"),
            query_params=[
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
                param[str | None]("nameContains", name_contains),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ExternalAlertList],
            error_mapper=list_alerts_error_mapper,
            request_options=request_options,
        )

    def update_alert(
        self,
        id_: str,
        body: AlertUpdateRequest | AlertUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Alert, UpdateAlertErrorBody]:
        """Updates the alert specified by the Id.

        Args:
            id_: Alert ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/analytics/v1/alerts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AlertUpdateRequest | AlertUpdateRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Alert],
            error_mapper=update_alert_error_mapper,
            request_options=request_options,
        )


class AsyncAlertsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_alert(
        self, body: AlertRequest | AlertRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Alert, CreateAlertErrorBody]:
        """Creates a new alert.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/alerts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AlertRequest | AlertRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Alert],
            error_mapper=create_alert_error_mapper,
            request_options=request_options,
        )

    async def delete_alert(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAlertErrorBody]:
        """Deletes the alert specified by the Id.

        Args:
            id_: Alert ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/analytics/v1/alerts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=delete_alert_error_mapper,
            request_options=request_options,
        )

    async def get_alert(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Alert, GetAlertErrorBody]:
        """Returns an alert by the specified Id.

        Args:
            id_: Alert ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/alerts/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Alert],
            error_mapper=get_alert_error_mapper,
            request_options=request_options,
        )

    async def list_alert_slack_channels(
        self,
        *,
        name_contains: str | None = None,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AlertSlackChannelList, ListAlertSlackChannelsErrorBody]:
        """Lists Slack destinations eligible for Alert notifications for the authenticated customer and caller. Returns
        canonical identifiers for recipientsSlackChannels and integration status. User credentials include visible
        private channels; service accounts return public/shared channels only. Results are sorted by stable destination
        identity. Keep nameContains unchanged when following pageToken.

        Args:
            name_contains: Value sent with the request.
            max_results: Value sent with the request.
            page_token: Page token, returned by a previous call, to request the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/alerts/slack-channels"),
            query_params=[
                param[str | None]("nameContains", name_contains),
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AlertSlackChannelList],
            error_mapper=list_alert_slack_channels_error_mapper,
            request_options=request_options,
        )

    async def list_alerts(
        self,
        *,
        sort_by: SortByOrStr | None = None,
        sort_order: SortOrderOrStr | None = None,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        name_contains: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ExternalAlertList, ListAlertsErrorBody]:
        """Returns a list of alerts that your account has access to. Alerts are listed in reverse chronological order by
        default.

        Args:
            sort_by: A field by which the results will be sorted.
            sort_order: Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
                descending (highest to lowest).
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. The syntax is ``key:[<value>]``. Multiple filters can be
                connected using a pipe |. See `Filters <https://developer.doit.com/docs/filters>`__. Available filter
                keys: **owner**, **name**
            name_contains: Case-insensitive substring match against the resource name. Combined with the "filter"
                parameter using AND semantics.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/alerts"),
            query_params=[
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
                param[str | None]("nameContains", name_contains),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ExternalAlertList],
            error_mapper=list_alerts_error_mapper,
            request_options=request_options,
        )

    async def update_alert(
        self,
        id_: str,
        body: AlertUpdateRequest | AlertUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Alert, UpdateAlertErrorBody]:
        """Updates the alert specified by the Id.

        Args:
            id_: Alert ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/analytics/v1/alerts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AlertUpdateRequest | AlertUpdateRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Alert],
            error_mapper=update_alert_error_mapper,
            request_options=request_options,
        )
