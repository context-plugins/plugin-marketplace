from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.monitor_create import MonitorCreate, MonitorCreateDict
from ..models.monitor_list import MonitorList
from ..models.monitor_resource import MonitorResource
from ..server.server import Server


class Monitors:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MonitorsWithRawResponse(client, server, auth)

    def create_monitor(
        self, body: MonitorCreate | MonitorCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> MonitorResource:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created monitor.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_monitor(body, request_options=request_options))

    def delete_monitor(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Removed.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_monitor(id_, request_options=request_options))

    def get_monitor(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> MonitorResource:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Monitor.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_monitor(id_, request_options=request_options))

    def get_monitor_availability(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Availability summary.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_monitor_availability(id_, request_options=request_options))

    def get_monitor_response_times(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Response time series.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_monitor_response_times(id_, request_options=request_options))

    def list_monitors(
        self,
        *,
        per_page: int | None = None,
        page: int | None = None,
        url: str | None = None,
        pronounceable_name: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MonitorList:
        """Send a ``GET`` request.

        Args:
            per_page: Value sent with the request.
            page: Value sent with the request.
            url: Value sent with the request.
            pronounceable_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of monitors.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_monitors(
                per_page=per_page,
                page=page,
                url=url,
                pronounceable_name=pronounceable_name,
                request_options=request_options,
            ),
        )

    def update_monitor(
        self, id_: str, body: MonitorCreate | MonitorCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> MonitorResource:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated monitor.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_monitor(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> MonitorsWithRawResponse:
        return self._with_raw_response


class AsyncMonitors:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMonitorsWithRawResponse(client, server, auth)

    async def create_monitor(
        self, body: MonitorCreate | MonitorCreateDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MonitorResource:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created monitor.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_monitor(body, request_options=request_options))

    async def delete_monitor(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Removed.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_monitor(id_, request_options=request_options))

    async def get_monitor(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MonitorResource:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Monitor.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_monitor(id_, request_options=request_options))

    async def get_monitor_availability(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Availability summary.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_monitor_availability(id_, request_options=request_options))

    async def get_monitor_response_times(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Response time series.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_monitor_response_times(id_, request_options=request_options))

    async def list_monitors(
        self,
        *,
        per_page: int | None = None,
        page: int | None = None,
        url: str | None = None,
        pronounceable_name: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MonitorList:
        """Send a ``GET`` request.

        Args:
            per_page: Value sent with the request.
            page: Value sent with the request.
            url: Value sent with the request.
            pronounceable_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of monitors.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_monitors(
                per_page=per_page,
                page=page,
                url=url,
                pronounceable_name=pronounceable_name,
                request_options=request_options,
            ),
        )

    async def update_monitor(
        self,
        id_: str,
        body: MonitorCreate | MonitorCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MonitorResource:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated monitor.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_monitor(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncMonitorsWithRawResponse:
        return self._with_raw_response


class MonitorsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_monitor(
        self, body: MonitorCreate | MonitorCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MonitorResource, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/monitors"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MonitorCreate | MonitorCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[MonitorResource],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_monitor(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/monitors/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_monitor(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MonitorResource, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/monitors/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[MonitorResource],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_monitor_availability(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/monitors/{id}/availability"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_monitor_response_times(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/monitors/{id}/response-times"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_monitors(
        self,
        *,
        per_page: int | None = None,
        page: int | None = None,
        url: str | None = None,
        pronounceable_name: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MonitorList, RawError]:
        """Send a ``GET`` request.

        Args:
            per_page: Value sent with the request.
            page: Value sent with the request.
            url: Value sent with the request.
            pronounceable_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/monitors"),
            query_params=[
                param[int | None]("per_page", per_page),
                param[int | None]("page", page),
                param[str | None]("url", url),
                param[str | None]("pronounceable_name", pronounceable_name),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[MonitorList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_monitor(
        self, id_: str, body: MonitorCreate | MonitorCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MonitorResource, RawError]:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/monitors/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MonitorCreate | MonitorCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[MonitorResource],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncMonitorsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_monitor(
        self, body: MonitorCreate | MonitorCreateDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MonitorResource, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/monitors"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MonitorCreate | MonitorCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[MonitorResource],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_monitor(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/monitors/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_monitor(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MonitorResource, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/monitors/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[MonitorResource],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_monitor_availability(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/monitors/{id}/availability"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_monitor_response_times(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/monitors/{id}/response-times"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_monitors(
        self,
        *,
        per_page: int | None = None,
        page: int | None = None,
        url: str | None = None,
        pronounceable_name: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MonitorList, RawError]:
        """Send a ``GET`` request.

        Args:
            per_page: Value sent with the request.
            page: Value sent with the request.
            url: Value sent with the request.
            pronounceable_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/monitors"),
            query_params=[
                param[int | None]("per_page", per_page),
                param[int | None]("page", page),
                param[str | None]("url", url),
                param[str | None]("pronounceable_name", pronounceable_name),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[MonitorList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_monitor(
        self,
        id_: str,
        body: MonitorCreate | MonitorCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MonitorResource, RawError]:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/monitors/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MonitorCreate | MonitorCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[MonitorResource],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
