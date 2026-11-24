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
from ..errors.create_cloudflow_connection_error import (
    CreateCloudflowConnectionErrorBody,
    create_cloudflow_connection_error_mapper,
)
from ..errors.delete_cloudflow_connection_error import (
    DeleteCloudflowConnectionErrorBody,
    delete_cloudflow_connection_error_mapper,
)
from ..errors.get_cloudflow_connection_error import (
    GetCloudflowConnectionErrorBody,
    get_cloudflow_connection_error_mapper,
)
from ..errors.list_cloudflow_connections_error import (
    ListCloudflowConnectionsErrorBody,
    list_cloudflow_connections_error_mapper,
)
from ..errors.update_cloudflow_connection_error import (
    UpdateCloudflowConnectionErrorBody,
    update_cloudflow_connection_error_mapper,
)
from ..models.cloudflow_connection import CloudflowConnection
from ..models.cloudflow_connection_list_response import CloudflowConnectionListResponse
from ..models.cloudflow_v1_connections_request import CloudflowV1ConnectionsRequest, CloudflowV1ConnectionsRequestDict
from ..models.cloudflow_v1_connections_request1 import (
    CloudflowV1ConnectionsRequest1,
    CloudflowV1ConnectionsRequest1Dict,
)
from ..server.server import Server


class Connections:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ConnectionsWithRawResponse(client, server, auth)

    def create_cloudflow_connection(
        self,
        body: CloudflowV1ConnectionsRequest | CloudflowV1ConnectionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CloudflowConnection:
        """Creates a new cloud provider connection. Exactly one of ``gcpConfig`` or ``awsConfig`` must be supplied.
        Returns ``400 invalid_connection_config`` when both or neither are present.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.create_cloudflow_connection(body, request_options=request_options))

    def delete_cloudflow_connection(
        self, connection_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a connection. Returns 409 if the connection is referenced by one or more flows.

        Args:
            connection_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content — connection deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Conflict — connection is in use by one or more flows.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                CloudflowV1Connections409Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.delete_cloudflow_connection(connection_id, request_options=request_options)
        )

    def get_cloudflow_connection(
        self, connection_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CloudflowConnection:
        """Returns a single connection by ID.

        Args:
            connection_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_cloudflow_connection(connection_id, request_options=request_options))

    def list_cloudflow_connections(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CloudflowConnectionListResponse:
        """Returns a cursor-paginated list of cloud provider connections for the authenticated tenant.

        Args:
            max_results: Maximum number of connections to return (1–100). Defaults to 50.
            page_token: Pagination cursor returned by a previous call.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_cloudflow_connections(
                max_results=max_results, page_token=page_token, request_options=request_options
            ),
        )

    def update_cloudflow_connection(
        self,
        connection_id: str,
        body: CloudflowV1ConnectionsRequest1 | CloudflowV1ConnectionsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CloudflowConnection:
        """Partially updates a connection. All fields are optional. At most one of ``gcpConfig`` or ``awsConfig`` may be
        set per request.

        Args:
            connection_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_cloudflow_connection(connection_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ConnectionsWithRawResponse:
        return self._with_raw_response


class AsyncConnections:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncConnectionsWithRawResponse(client, server, auth)

    async def create_cloudflow_connection(
        self,
        body: CloudflowV1ConnectionsRequest | CloudflowV1ConnectionsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CloudflowConnection:
        """Creates a new cloud provider connection. Exactly one of ``gcpConfig`` or ``awsConfig`` must be supplied.
        Returns ``400 invalid_connection_config`` when both or neither are present.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.create_cloudflow_connection(body, request_options=request_options))

    async def delete_cloudflow_connection(
        self, connection_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a connection. Returns 409 if the connection is referenced by one or more flows.

        Args:
            connection_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content — connection deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Conflict — connection is in use by one or more flows.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                CloudflowV1Connections409Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_cloudflow_connection(connection_id, request_options=request_options)
        )

    async def get_cloudflow_connection(
        self, connection_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CloudflowConnection:
        """Returns a single connection by ID.

        Args:
            connection_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_cloudflow_connection(connection_id, request_options=request_options)
        )

    async def list_cloudflow_connections(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CloudflowConnectionListResponse:
        """Returns a cursor-paginated list of cloud provider connections for the authenticated tenant.

        Args:
            max_results: Maximum number of connections to return (1–100). Defaults to 50.
            page_token: Pagination cursor returned by a previous call.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_cloudflow_connections(
                max_results=max_results, page_token=page_token, request_options=request_options
            ),
        )

    async def update_cloudflow_connection(
        self,
        connection_id: str,
        body: CloudflowV1ConnectionsRequest1 | CloudflowV1ConnectionsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CloudflowConnection:
        """Partially updates a connection. All fields are optional. At most one of ``gcpConfig`` or ``awsConfig`` may be
        set per request.

        Args:
            connection_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_cloudflow_connection(
                connection_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncConnectionsWithRawResponse:
        return self._with_raw_response


class ConnectionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_cloudflow_connection(
        self,
        body: CloudflowV1ConnectionsRequest | CloudflowV1ConnectionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudflowConnection, CreateCloudflowConnectionErrorBody]:
        """Creates a new cloud provider connection. Exactly one of ``gcpConfig`` or ``awsConfig`` must be supplied.
        Returns ``400 invalid_connection_config`` when both or neither are present.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/cloudflow/v1/connections"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CloudflowV1ConnectionsRequest | CloudflowV1ConnectionsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudflowConnection],
            error_mapper=create_cloudflow_connection_error_mapper,
            request_options=request_options,
        )

    def delete_cloudflow_connection(
        self, connection_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteCloudflowConnectionErrorBody]:
        """Deletes a connection. Returns 409 if the connection is referenced by one or more flows.

        Args:
            connection_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/cloudflow/v1/connections/{connectionId}"),
            path_params=[param[str]("connectionId", connection_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=delete_cloudflow_connection_error_mapper,
            request_options=request_options,
        )

    def get_cloudflow_connection(
        self, connection_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CloudflowConnection, GetCloudflowConnectionErrorBody]:
        """Returns a single connection by ID.

        Args:
            connection_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cloudflow/v1/connections/{connectionId}"),
            path_params=[param[str]("connectionId", connection_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudflowConnection],
            error_mapper=get_cloudflow_connection_error_mapper,
            request_options=request_options,
        )

    def list_cloudflow_connections(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudflowConnectionListResponse, ListCloudflowConnectionsErrorBody]:
        """Returns a cursor-paginated list of cloud provider connections for the authenticated tenant.

        Args:
            max_results: Maximum number of connections to return (1–100). Defaults to 50.
            page_token: Pagination cursor returned by a previous call.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cloudflow/v1/connections"),
            query_params=[param[int | None]("maxResults", max_results), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudflowConnectionListResponse],
            error_mapper=list_cloudflow_connections_error_mapper,
            request_options=request_options,
        )

    def update_cloudflow_connection(
        self,
        connection_id: str,
        body: CloudflowV1ConnectionsRequest1 | CloudflowV1ConnectionsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudflowConnection, UpdateCloudflowConnectionErrorBody]:
        """Partially updates a connection. All fields are optional. At most one of ``gcpConfig`` or ``awsConfig`` may be
        set per request.

        Args:
            connection_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/cloudflow/v1/connections/{connectionId}"),
            path_params=[param[str]("connectionId", connection_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CloudflowV1ConnectionsRequest1 | CloudflowV1ConnectionsRequest1Dict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudflowConnection],
            error_mapper=update_cloudflow_connection_error_mapper,
            request_options=request_options,
        )


class AsyncConnectionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_cloudflow_connection(
        self,
        body: CloudflowV1ConnectionsRequest | CloudflowV1ConnectionsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudflowConnection, CreateCloudflowConnectionErrorBody]:
        """Creates a new cloud provider connection. Exactly one of ``gcpConfig`` or ``awsConfig`` must be supplied.
        Returns ``400 invalid_connection_config`` when both or neither are present.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/cloudflow/v1/connections"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CloudflowV1ConnectionsRequest | CloudflowV1ConnectionsRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudflowConnection],
            error_mapper=create_cloudflow_connection_error_mapper,
            request_options=request_options,
        )

    async def delete_cloudflow_connection(
        self, connection_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteCloudflowConnectionErrorBody]:
        """Deletes a connection. Returns 409 if the connection is referenced by one or more flows.

        Args:
            connection_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/cloudflow/v1/connections/{connectionId}"),
            path_params=[param[str]("connectionId", connection_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=delete_cloudflow_connection_error_mapper,
            request_options=request_options,
        )

    async def get_cloudflow_connection(
        self, connection_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CloudflowConnection, GetCloudflowConnectionErrorBody]:
        """Returns a single connection by ID.

        Args:
            connection_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cloudflow/v1/connections/{connectionId}"),
            path_params=[param[str]("connectionId", connection_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudflowConnection],
            error_mapper=get_cloudflow_connection_error_mapper,
            request_options=request_options,
        )

    async def list_cloudflow_connections(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudflowConnectionListResponse, ListCloudflowConnectionsErrorBody]:
        """Returns a cursor-paginated list of cloud provider connections for the authenticated tenant.

        Args:
            max_results: Maximum number of connections to return (1–100). Defaults to 50.
            page_token: Pagination cursor returned by a previous call.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cloudflow/v1/connections"),
            query_params=[param[int | None]("maxResults", max_results), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudflowConnectionListResponse],
            error_mapper=list_cloudflow_connections_error_mapper,
            request_options=request_options,
        )

    async def update_cloudflow_connection(
        self,
        connection_id: str,
        body: CloudflowV1ConnectionsRequest1 | CloudflowV1ConnectionsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudflowConnection, UpdateCloudflowConnectionErrorBody]:
        """Partially updates a connection. All fields are optional. At most one of ``gcpConfig`` or ``awsConfig`` may be
        set per request.

        Args:
            connection_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/cloudflow/v1/connections/{connectionId}"),
            path_params=[param[str]("connectionId", connection_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CloudflowV1ConnectionsRequest1 | CloudflowV1ConnectionsRequest1Dict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudflowConnection],
            error_mapper=update_cloudflow_connection_error_mapper,
            request_options=request_options,
        )
