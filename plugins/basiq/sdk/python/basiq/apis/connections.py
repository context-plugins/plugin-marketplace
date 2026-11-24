from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
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
from ..errors.delete_connection_error import DeleteConnectionErrorBody, delete_connection_error_mapper
from ..errors.get_connection_error import GetConnectionErrorBody, get_connection_error_mapper
from ..errors.get_connections_error import GetConnectionsErrorBody, get_connections_error_mapper
from ..errors.purge_connection_data_error import PurgeConnectionDataErrorBody, purge_connection_data_error_mapper
from ..errors.refresh_connection_error import RefreshConnectionErrorBody, refresh_connection_error_mapper
from ..errors.refresh_connections_error import RefreshConnectionsErrorBody, refresh_connections_error_mapper
from ..models.connection_get_response_resource import ConnectionGetResponseResource
from ..models.connection_response_resource import ConnectionResponseResource
from ..models.connections_get_response_resource import ConnectionsGetResponseResource
from ..models.connections_refresh_resource import ConnectionsRefreshResource
from ..server.server import Server


class Connections:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ConnectionsWithRawResponse(client, server, auth)

    def delete_connection(
        self, user_id: str, connection_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes a connection.

        Args:
            user_id: The identifier of the user.
            connection_id: The identifier of the connection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns an empty body if the delete succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error that access is forbidden and tied to the application logic, such as
                insufficient rights to a resource. Returns error indicating that server can't find requested resource.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. Returns error response code indicates that the server is not ready to
                handle the request. ``error`` is ``UsersConnections400Error1 | UsersConnections403Error1 |
                UsersConnections404Error1 | UsersConnections500Error1 | UsersConnections503Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.delete_connection(user_id, connection_id, request_options=request_options)
        )

    def get_connection(
        self, user_id: str, connection_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ConnectionGetResponseResource:
        """Use this to retrieve details of a specific connection. Note that due to security the loginId, password,
        securityCode are never returned.

        Args:
            user_id: The identifier of the user.
            connection_id: The identifier of the connection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns details of a connection.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. Returns error
                response code indicates that the server is not ready to handle the request. ``error`` is
                ``UsersConnections400Error1 | UsersConnections401Error1 | UsersConnections403Error1 |
                UsersConnections404Error1 | UsersConnections500Error1 | UsersConnections503Error1 | RawError``."""
        return unwrap(self._with_raw_response.get_connection(user_id, connection_id, request_options=request_options))

    def get_connections(
        self, user_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ConnectionsGetResponseResource:
        """Returns a list of connections belonging to this user. Each entry in the array is a separate object. If no
        data is returned, the resulting array will be empty.

        Args:
            user_id: User identifier.
            filter_: Connections filters, id, status, institution.id. e.g institution.id.eq('AU00000')
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns details of connections.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error indicating that server can't find requested
                resource. Returns error response code indicates that the server encountered an unexpected condition that
                prevented it from fulfilling the request. Returns error response code indicates that the server is not
                ready to handle the request. ``error`` is ``UsersConnections400Error1 | UsersConnections403Error1 |
                UsersConnections404Error1 | UsersConnections500Error1 | UsersConnections503Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.get_connections(user_id, filter_=filter_, request_options=request_options)
        )

    def purge_connection_data(
        self, user_id: str, connection_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Use this endpoint to remove all user data related to a specific institution. Purging is only applicable for
        active user connections.

        When Enrich data is updated, the Enrich results under transactions won’t automatically reflect these updates. To
        ensure the latest Enrich results are available, partners should first purge and then refresh connections.
        Without this step, any new insight reports generated will not include the latest enriched data.

        > 📘 **Note:** Remember to purge and refresh connections to keep Enrich insights current.

        Args:
            user_id: The identifier of the user.
            connection_id: The identifier of the connection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns an empty body if the delete succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error that access is forbidden and tied to the application logic, such as
                insufficient rights to a resource. Returns error indicating that server can't find requested resource.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. Returns error response code indicates that the server is not ready to
                handle the request. ``error`` is ``UsersConnectionsPurge400Error1 | UsersConnectionsPurge403Error1 |
                UsersConnectionsPurge404Error1 | UsersConnectionsPurge500Error1 | UsersConnectionsPurge503Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.purge_connection_data(user_id, connection_id, request_options=request_options)
        )

    def refresh_connection(
        self, user_id: str, connection_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ConnectionResponseResource:
        """Use this to refresh an existing connection. This will not return a new connection. Instead will return a job
        resource which is resonsible for refreshing the connection and fetching data asynchronously. Use this job
        resource to track the connections progress.

        Args:
            user_id: The identifier of the user.
            connection_id: The identifier of the connection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a created job resource, if the operation succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error that access is forbidden and tied to the application logic, such as
                insufficient rights to a resource. Returns error indicating that server can't find requested resource.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. Returns error response code indicates that the server is not ready to
                handle the request. ``error`` is ``UsersConnectionsRefresh400Error1 | UsersConnectionsRefresh403Error1 |
                UsersConnectionsRefresh404Error1 | UsersConnectionsRefresh500Error1 | UsersConnectionsRefresh503Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.refresh_connection(user_id, connection_id, request_options=request_options)
        )

    def refresh_connections(
        self, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ConnectionsRefreshResource:
        """Use this to refresh all connections belonging to the specified user.

        Args:
            user_id: The identifier of the user.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a created jobs resource, if the operation succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error that access is forbidden and tied to the application logic, such as
                insufficient rights to a resource. Returns error indicating that server can't find requested resource.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. ``error`` is ``UsersConnectionsRefresh400Error1 |
                UsersConnectionsRefresh403Error1 | UsersConnectionsRefresh404Error1 | UsersConnectionsRefresh500Error1 |
                RawError``."""
        return unwrap(self._with_raw_response.refresh_connections(user_id, request_options=request_options))

    @property
    def with_raw_response(self) -> ConnectionsWithRawResponse:
        return self._with_raw_response


class AsyncConnections:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncConnectionsWithRawResponse(client, server, auth)

    async def delete_connection(
        self, user_id: str, connection_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes a connection.

        Args:
            user_id: The identifier of the user.
            connection_id: The identifier of the connection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns an empty body if the delete succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error that access is forbidden and tied to the application logic, such as
                insufficient rights to a resource. Returns error indicating that server can't find requested resource.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. Returns error response code indicates that the server is not ready to
                handle the request. ``error`` is ``UsersConnections400Error1 | UsersConnections403Error1 |
                UsersConnections404Error1 | UsersConnections500Error1 | UsersConnections503Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_connection(user_id, connection_id, request_options=request_options)
        )

    async def get_connection(
        self, user_id: str, connection_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ConnectionGetResponseResource:
        """Use this to retrieve details of a specific connection. Note that due to security the loginId, password,
        securityCode are never returned.

        Args:
            user_id: The identifier of the user.
            connection_id: The identifier of the connection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns details of a connection.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. Returns error
                response code indicates that the server is not ready to handle the request. ``error`` is
                ``UsersConnections400Error1 | UsersConnections401Error1 | UsersConnections403Error1 |
                UsersConnections404Error1 | UsersConnections500Error1 | UsersConnections503Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_connection(user_id, connection_id, request_options=request_options)
        )

    async def get_connections(
        self, user_id: str, *, filter_: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ConnectionsGetResponseResource:
        """Returns a list of connections belonging to this user. Each entry in the array is a separate object. If no
        data is returned, the resulting array will be empty.

        Args:
            user_id: User identifier.
            filter_: Connections filters, id, status, institution.id. e.g institution.id.eq('AU00000')
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns details of connections.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error indicating that server can't find requested
                resource. Returns error response code indicates that the server encountered an unexpected condition that
                prevented it from fulfilling the request. Returns error response code indicates that the server is not
                ready to handle the request. ``error`` is ``UsersConnections400Error1 | UsersConnections403Error1 |
                UsersConnections404Error1 | UsersConnections500Error1 | UsersConnections503Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_connections(user_id, filter_=filter_, request_options=request_options)
        )

    async def purge_connection_data(
        self, user_id: str, connection_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Use this endpoint to remove all user data related to a specific institution. Purging is only applicable for
        active user connections.

        When Enrich data is updated, the Enrich results under transactions won’t automatically reflect these updates. To
        ensure the latest Enrich results are available, partners should first purge and then refresh connections.
        Without this step, any new insight reports generated will not include the latest enriched data.

        > 📘 **Note:** Remember to purge and refresh connections to keep Enrich insights current.

        Args:
            user_id: The identifier of the user.
            connection_id: The identifier of the connection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns an empty body if the delete succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error that access is forbidden and tied to the application logic, such as
                insufficient rights to a resource. Returns error indicating that server can't find requested resource.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. Returns error response code indicates that the server is not ready to
                handle the request. ``error`` is ``UsersConnectionsPurge400Error1 | UsersConnectionsPurge403Error1 |
                UsersConnectionsPurge404Error1 | UsersConnectionsPurge500Error1 | UsersConnectionsPurge503Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.purge_connection_data(user_id, connection_id, request_options=request_options)
        )

    async def refresh_connection(
        self, user_id: str, connection_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ConnectionResponseResource:
        """Use this to refresh an existing connection. This will not return a new connection. Instead will return a job
        resource which is resonsible for refreshing the connection and fetching data asynchronously. Use this job
        resource to track the connections progress.

        Args:
            user_id: The identifier of the user.
            connection_id: The identifier of the connection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a created job resource, if the operation succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error that access is forbidden and tied to the application logic, such as
                insufficient rights to a resource. Returns error indicating that server can't find requested resource.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. Returns error response code indicates that the server is not ready to
                handle the request. ``error`` is ``UsersConnectionsRefresh400Error1 | UsersConnectionsRefresh403Error1 |
                UsersConnectionsRefresh404Error1 | UsersConnectionsRefresh500Error1 | UsersConnectionsRefresh503Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.refresh_connection(user_id, connection_id, request_options=request_options)
        )

    async def refresh_connections(
        self, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ConnectionsRefreshResource:
        """Use this to refresh all connections belonging to the specified user.

        Args:
            user_id: The identifier of the user.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a created jobs resource, if the operation succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error that access is forbidden and tied to the application logic, such as
                insufficient rights to a resource. Returns error indicating that server can't find requested resource.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. ``error`` is ``UsersConnectionsRefresh400Error1 |
                UsersConnectionsRefresh403Error1 | UsersConnectionsRefresh404Error1 | UsersConnectionsRefresh500Error1 |
                RawError``."""
        return unwrap(await self._with_raw_response.refresh_connections(user_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncConnectionsWithRawResponse:
        return self._with_raw_response


class ConnectionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_connection(
        self, user_id: str, connection_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteConnectionErrorBody]:
        """Permanently deletes a connection.

        Args:
            user_id: The identifier of the user.
            connection_id: The identifier of the connection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/users/{userId}/connections/{connectionId}"),
            path_params=[param[str]("userId", user_id), param[str]("connectionId", connection_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.services_token,
            decoder=empty_response,
            error_mapper=delete_connection_error_mapper,
            request_options=request_options,
        )

    def get_connection(
        self, user_id: str, connection_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ConnectionGetResponseResource, GetConnectionErrorBody]:
        """Use this to retrieve details of a specific connection. Note that due to security the loginId, password,
        securityCode are never returned.

        Args:
            user_id: The identifier of the user.
            connection_id: The identifier of the connection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/connections/{connectionId}"),
            path_params=[param[str]("userId", user_id), param[str]("connectionId", connection_id)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[ConnectionGetResponseResource],
            error_mapper=get_connection_error_mapper,
            request_options=request_options,
        )

    def get_connections(
        self, user_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ConnectionsGetResponseResource, GetConnectionsErrorBody]:
        """Returns a list of connections belonging to this user. Each entry in the array is a separate object. If no
        data is returned, the resulting array will be empty.

        Args:
            user_id: User identifier.
            filter_: Connections filters, id, status, institution.id. e.g institution.id.eq('AU00000')
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/connections"),
            path_params=[param[str]("userId", user_id)],
            query_params=[param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[ConnectionsGetResponseResource],
            error_mapper=get_connections_error_mapper,
            request_options=request_options,
        )

    def purge_connection_data(
        self, user_id: str, connection_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, PurgeConnectionDataErrorBody]:
        """Use this endpoint to remove all user data related to a specific institution. Purging is only applicable for
        active user connections.

        When Enrich data is updated, the Enrich results under transactions won’t automatically reflect these updates. To
        ensure the latest Enrich results are available, partners should first purge and then refresh connections.
        Without this step, any new insight reports generated will not include the latest enriched data.

        > 📘 **Note:** Remember to purge and refresh connections to keep Enrich insights current.

        Args:
            user_id: The identifier of the user.
            connection_id: The identifier of the connection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/connections/{connectionId}/purge"),
            path_params=[param[str]("userId", user_id), param[str]("connectionId", connection_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.services_token,
            decoder=empty_response,
            error_mapper=purge_connection_data_error_mapper,
            request_options=request_options,
        )

    def refresh_connection(
        self, user_id: str, connection_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ConnectionResponseResource, RefreshConnectionErrorBody]:
        """Use this to refresh an existing connection. This will not return a new connection. Instead will return a job
        resource which is resonsible for refreshing the connection and fetching data asynchronously. Use this job
        resource to track the connections progress.

        Args:
            user_id: The identifier of the user.
            connection_id: The identifier of the connection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/connections/{connectionId}/refresh"),
            path_params=[param[str]("userId", user_id), param[str]("connectionId", connection_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[ConnectionResponseResource],
            error_mapper=refresh_connection_error_mapper,
            request_options=request_options,
        )

    def refresh_connections(
        self, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ConnectionsRefreshResource, RefreshConnectionsErrorBody]:
        """Use this to refresh all connections belonging to the specified user.

        Args:
            user_id: The identifier of the user.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/connections/refresh"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[ConnectionsRefreshResource],
            error_mapper=refresh_connections_error_mapper,
            request_options=request_options,
        )


class AsyncConnectionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_connection(
        self, user_id: str, connection_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteConnectionErrorBody]:
        """Permanently deletes a connection.

        Args:
            user_id: The identifier of the user.
            connection_id: The identifier of the connection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/users/{userId}/connections/{connectionId}"),
            path_params=[param[str]("userId", user_id), param[str]("connectionId", connection_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.services_token,
            decoder=async_empty_response,
            error_mapper=delete_connection_error_mapper,
            request_options=request_options,
        )

    async def get_connection(
        self, user_id: str, connection_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ConnectionGetResponseResource, GetConnectionErrorBody]:
        """Use this to retrieve details of a specific connection. Note that due to security the loginId, password,
        securityCode are never returned.

        Args:
            user_id: The identifier of the user.
            connection_id: The identifier of the connection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/connections/{connectionId}"),
            path_params=[param[str]("userId", user_id), param[str]("connectionId", connection_id)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[ConnectionGetResponseResource],
            error_mapper=get_connection_error_mapper,
            request_options=request_options,
        )

    async def get_connections(
        self, user_id: str, *, filter_: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ConnectionsGetResponseResource, GetConnectionsErrorBody]:
        """Returns a list of connections belonging to this user. Each entry in the array is a separate object. If no
        data is returned, the resulting array will be empty.

        Args:
            user_id: User identifier.
            filter_: Connections filters, id, status, institution.id. e.g institution.id.eq('AU00000')
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/connections"),
            path_params=[param[str]("userId", user_id)],
            query_params=[param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[ConnectionsGetResponseResource],
            error_mapper=get_connections_error_mapper,
            request_options=request_options,
        )

    async def purge_connection_data(
        self, user_id: str, connection_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, PurgeConnectionDataErrorBody]:
        """Use this endpoint to remove all user data related to a specific institution. Purging is only applicable for
        active user connections.

        When Enrich data is updated, the Enrich results under transactions won’t automatically reflect these updates. To
        ensure the latest Enrich results are available, partners should first purge and then refresh connections.
        Without this step, any new insight reports generated will not include the latest enriched data.

        > 📘 **Note:** Remember to purge and refresh connections to keep Enrich insights current.

        Args:
            user_id: The identifier of the user.
            connection_id: The identifier of the connection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/connections/{connectionId}/purge"),
            path_params=[param[str]("userId", user_id), param[str]("connectionId", connection_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.services_token,
            decoder=async_empty_response,
            error_mapper=purge_connection_data_error_mapper,
            request_options=request_options,
        )

    async def refresh_connection(
        self, user_id: str, connection_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ConnectionResponseResource, RefreshConnectionErrorBody]:
        """Use this to refresh an existing connection. This will not return a new connection. Instead will return a job
        resource which is resonsible for refreshing the connection and fetching data asynchronously. Use this job
        resource to track the connections progress.

        Args:
            user_id: The identifier of the user.
            connection_id: The identifier of the connection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/connections/{connectionId}/refresh"),
            path_params=[param[str]("userId", user_id), param[str]("connectionId", connection_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[ConnectionResponseResource],
            error_mapper=refresh_connection_error_mapper,
            request_options=request_options,
        )

    async def refresh_connections(
        self, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ConnectionsRefreshResource, RefreshConnectionsErrorBody]:
        """Use this to refresh all connections belonging to the specified user.

        Args:
            user_id: The identifier of the user.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/connections/refresh"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[ConnectionsRefreshResource],
            error_mapper=refresh_connections_error_mapper,
            request_options=request_options,
        )
