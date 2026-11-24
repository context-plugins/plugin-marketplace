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
    empty_response,
    json_body,
    param,
    raw_error_response,
    unwrap,
)
from ..models.incident_create import IncidentCreate, IncidentCreateDict
from ..server.server import Server


class Incidents:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = IncidentsWithRawResponse(client, server, auth)

    def acknowledge_incident(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Acknowledged.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.acknowledge_incident(id_, request_options=request_options))

    def create_incident(
        self, body: IncidentCreate | IncidentCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created incident.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_incident(body, request_options=request_options))

    def delete_incident(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Removed.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_incident(id_, request_options=request_options))

    def escalate_incident(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Escalated.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.escalate_incident(id_, request_options=request_options))

    def get_incident(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Incident.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_incident(id_, request_options=request_options))

    def get_incident_timeline(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Timeline entries.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_incident_timeline(id_, request_options=request_options))

    def list_incidents(
        self,
        *,
        per_page: int | None = None,
        page: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``GET`` request.

        Args:
            per_page: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of incidents.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_incidents(per_page=per_page, page=page, request_options=request_options)
        )

    def reopen_incident(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Reopened.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.reopen_incident(id_, request_options=request_options))

    def resolve_incident(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resolved.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.resolve_incident(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> IncidentsWithRawResponse:
        return self._with_raw_response


class AsyncIncidents:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncIncidentsWithRawResponse(client, server, auth)

    async def acknowledge_incident(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Acknowledged.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.acknowledge_incident(id_, request_options=request_options))

    async def create_incident(
        self, body: IncidentCreate | IncidentCreateDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created incident.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_incident(body, request_options=request_options))

    async def delete_incident(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Removed.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_incident(id_, request_options=request_options))

    async def escalate_incident(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Escalated.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.escalate_incident(id_, request_options=request_options))

    async def get_incident(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Incident.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_incident(id_, request_options=request_options))

    async def get_incident_timeline(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Timeline entries.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_incident_timeline(id_, request_options=request_options))

    async def list_incidents(
        self,
        *,
        per_page: int | None = None,
        page: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``GET`` request.

        Args:
            per_page: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of incidents.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_incidents(per_page=per_page, page=page, request_options=request_options)
        )

    async def reopen_incident(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Reopened.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.reopen_incident(id_, request_options=request_options))

    async def resolve_incident(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resolved.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.resolve_incident(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncIncidentsWithRawResponse:
        return self._with_raw_response


class IncidentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def acknowledge_incident(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/incidents/{id}/acknowledge"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def create_incident(
        self, body: IncidentCreate | IncidentCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/incidents"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IncidentCreate | IncidentCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_incident(
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
            url_template=self._server.default("/incidents/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def escalate_incident(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/incidents/{id}/escalate"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_incident(
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
            url_template=self._server.default("/incidents/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_incident_timeline(
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
            url_template=self._server.default("/incidents/{id}/timeline"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_incidents(
        self,
        *,
        per_page: int | None = None,
        page: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            per_page: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/incidents"),
            query_params=[param[int | None]("per_page", per_page), param[int | None]("page", page)],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def reopen_incident(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/incidents/{id}/reopen"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def resolve_incident(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/incidents/{id}/resolve"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncIncidentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def acknowledge_incident(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/incidents/{id}/acknowledge"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def create_incident(
        self, body: IncidentCreate | IncidentCreateDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/incidents"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IncidentCreate | IncidentCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_incident(
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
            url_template=self._server.default("/incidents/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def escalate_incident(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/incidents/{id}/escalate"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_incident(
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
            url_template=self._server.default("/incidents/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_incident_timeline(
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
            url_template=self._server.default("/incidents/{id}/timeline"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_incidents(
        self,
        *,
        per_page: int | None = None,
        page: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            per_page: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/incidents"),
            query_params=[param[int | None]("per_page", per_page), param[int | None]("page", page)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def reopen_incident(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/incidents/{id}/reopen"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def resolve_incident(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/incidents/{id}/resolve"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
