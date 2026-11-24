from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType
from typing import Any
from uuid import UUID, uuid4

from typing_extensions import Self

from .auth import AuthSchemes, Oauth2Scope
from .base_client import DEFAULT_TIMEOUT, BaseGoogleCloudDatastreamClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AnySchemes,
    ApiKeyQueryScheme,
    ApiResult,
    AuthorizationCodeCredentials,
    AuthorizationCodeCredentialsOrDict,
    AuthorizationCodeTokenSource,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    OAuth2RefreshableScheme,
    RawClient,
    RefreshableTokenSource,
    RequestOptionsOrDict,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    SecuredRawResponse,
    client_secret_basic,
    json_body,
    json_decoder,
    no_auth,
    param,
    unwrap,
)
from .errors.datastream_projects_locations_connection_profiles_create_error import (
    DatastreamProjectsLocationsConnectionProfilesCreateErrorBody,
    datastream_projects_locations_connection_profiles_create_error_mapper,
)
from .errors.datastream_projects_locations_connection_profiles_delete_error import (
    DatastreamProjectsLocationsConnectionProfilesDeleteErrorBody,
    datastream_projects_locations_connection_profiles_delete_error_mapper,
)
from .errors.datastream_projects_locations_connection_profiles_discover_error import (
    DatastreamProjectsLocationsConnectionProfilesDiscoverErrorBody,
    datastream_projects_locations_connection_profiles_discover_error_mapper,
)
from .errors.datastream_projects_locations_connection_profiles_get_error import (
    DatastreamProjectsLocationsConnectionProfilesGetErrorBody,
    datastream_projects_locations_connection_profiles_get_error_mapper,
)
from .errors.datastream_projects_locations_connection_profiles_list_error import (
    DatastreamProjectsLocationsConnectionProfilesListErrorBody,
    datastream_projects_locations_connection_profiles_list_error_mapper,
)
from .errors.datastream_projects_locations_connection_profiles_patch_error import (
    DatastreamProjectsLocationsConnectionProfilesPatchErrorBody,
    datastream_projects_locations_connection_profiles_patch_error_mapper,
)
from .errors.datastream_projects_locations_fetch_static_ips_error import (
    DatastreamProjectsLocationsFetchStaticIpsErrorBody,
    datastream_projects_locations_fetch_static_ips_error_mapper,
)
from .errors.datastream_projects_locations_get_error import (
    DatastreamProjectsLocationsGetErrorBody,
    datastream_projects_locations_get_error_mapper,
)
from .errors.datastream_projects_locations_list_error import (
    DatastreamProjectsLocationsListErrorBody,
    datastream_projects_locations_list_error_mapper,
)
from .errors.datastream_projects_locations_operations_cancel_error import (
    DatastreamProjectsLocationsOperationsCancelErrorBody,
    datastream_projects_locations_operations_cancel_error_mapper,
)
from .errors.datastream_projects_locations_operations_delete_error import (
    DatastreamProjectsLocationsOperationsDeleteErrorBody,
    datastream_projects_locations_operations_delete_error_mapper,
)
from .errors.datastream_projects_locations_operations_get_error import (
    DatastreamProjectsLocationsOperationsGetErrorBody,
    datastream_projects_locations_operations_get_error_mapper,
)
from .errors.datastream_projects_locations_operations_list_error import (
    DatastreamProjectsLocationsOperationsListErrorBody,
    datastream_projects_locations_operations_list_error_mapper,
)
from .errors.datastream_projects_locations_private_connections_create_error import (
    DatastreamProjectsLocationsPrivateConnectionsCreateErrorBody,
    datastream_projects_locations_private_connections_create_error_mapper,
)
from .errors.datastream_projects_locations_private_connections_delete_error import (
    DatastreamProjectsLocationsPrivateConnectionsDeleteErrorBody,
    datastream_projects_locations_private_connections_delete_error_mapper,
)
from .errors.datastream_projects_locations_private_connections_get_error import (
    DatastreamProjectsLocationsPrivateConnectionsGetErrorBody,
    datastream_projects_locations_private_connections_get_error_mapper,
)
from .errors.datastream_projects_locations_private_connections_list_error import (
    DatastreamProjectsLocationsPrivateConnectionsListErrorBody,
    datastream_projects_locations_private_connections_list_error_mapper,
)
from .errors.datastream_projects_locations_private_connections_routes_create_error import (
    DatastreamProjectsLocationsPrivateConnectionsRoutesCreateErrorBody,
    datastream_projects_locations_private_connections_routes_create_error_mapper,
)
from .errors.datastream_projects_locations_private_connections_routes_delete_error import (
    DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteErrorBody,
    datastream_projects_locations_private_connections_routes_delete_error_mapper,
)
from .errors.datastream_projects_locations_private_connections_routes_get_error import (
    DatastreamProjectsLocationsPrivateConnectionsRoutesGetErrorBody,
    datastream_projects_locations_private_connections_routes_get_error_mapper,
)
from .errors.datastream_projects_locations_private_connections_routes_list_error import (
    DatastreamProjectsLocationsPrivateConnectionsRoutesListErrorBody,
    datastream_projects_locations_private_connections_routes_list_error_mapper,
)
from .errors.datastream_projects_locations_streams_create_error import (
    DatastreamProjectsLocationsStreamsCreateErrorBody,
    datastream_projects_locations_streams_create_error_mapper,
)
from .errors.datastream_projects_locations_streams_delete_error import (
    DatastreamProjectsLocationsStreamsDeleteErrorBody,
    datastream_projects_locations_streams_delete_error_mapper,
)
from .errors.datastream_projects_locations_streams_get_error import (
    DatastreamProjectsLocationsStreamsGetErrorBody,
    datastream_projects_locations_streams_get_error_mapper,
)
from .errors.datastream_projects_locations_streams_list_error import (
    DatastreamProjectsLocationsStreamsListErrorBody,
    datastream_projects_locations_streams_list_error_mapper,
)
from .errors.datastream_projects_locations_streams_objects_get_error import (
    DatastreamProjectsLocationsStreamsObjectsGetErrorBody,
    datastream_projects_locations_streams_objects_get_error_mapper,
)
from .errors.datastream_projects_locations_streams_objects_list_error import (
    DatastreamProjectsLocationsStreamsObjectsListErrorBody,
    datastream_projects_locations_streams_objects_list_error_mapper,
)
from .errors.datastream_projects_locations_streams_objects_lookup_error import (
    DatastreamProjectsLocationsStreamsObjectsLookupErrorBody,
    datastream_projects_locations_streams_objects_lookup_error_mapper,
)
from .errors.datastream_projects_locations_streams_objects_start_backfill_job_error import (
    DatastreamProjectsLocationsStreamsObjectsStartBackfillJobErrorBody,
    datastream_projects_locations_streams_objects_start_backfill_job_error_mapper,
)
from .errors.datastream_projects_locations_streams_objects_stop_backfill_job_error import (
    DatastreamProjectsLocationsStreamsObjectsStopBackfillJobErrorBody,
    datastream_projects_locations_streams_objects_stop_backfill_job_error_mapper,
)
from .errors.datastream_projects_locations_streams_patch_error import (
    DatastreamProjectsLocationsStreamsPatchErrorBody,
    datastream_projects_locations_streams_patch_error_mapper,
)
from .errors.datastream_projects_locations_streams_run_error import (
    DatastreamProjectsLocationsStreamsRunErrorBody,
    datastream_projects_locations_streams_run_error_mapper,
)
from .models.connection_profile import ConnectionProfile, ConnectionProfileDict
from .models.discover_connection_profile_request import (
    DiscoverConnectionProfileRequest,
    DiscoverConnectionProfileRequestDict,
)
from .models.discover_connection_profile_response import DiscoverConnectionProfileResponse
from .models.fetch_static_ips_response import FetchStaticIpsResponse
from .models.list_connection_profiles_response import ListConnectionProfilesResponse
from .models.list_locations_response import ListLocationsResponse
from .models.list_operations_response import ListOperationsResponse
from .models.list_private_connections_response import ListPrivateConnectionsResponse
from .models.list_routes_response import ListRoutesResponse
from .models.list_stream_objects_response import ListStreamObjectsResponse
from .models.list_streams_response import ListStreamsResponse
from .models.location import Location
from .models.lookup_stream_object_request import LookupStreamObjectRequest, LookupStreamObjectRequestDict
from .models.operation import Operation
from .models.private_connection import PrivateConnection, PrivateConnectionDict
from .models.route import Route, RouteDict
from .models.run_stream_request import RunStreamRequest, RunStreamRequestDict
from .models.start_backfill_job_request import StartBackfillJobRequest, StartBackfillJobRequestDict
from .models.start_backfill_job_response import StartBackfillJobResponse
from .models.stop_backfill_job_response import StopBackfillJobResponse
from .models.stream import Stream, StreamDict
from .models.stream_object import StreamObject
from .server.server import Server
from .server.server_config import ServerConfigOrDict


class GoogleCloudDatastreamClient(BaseGoogleCloudDatastreamClient[RawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        api_key: str | None = None,
        oauth2: AuthorizationCodeCredentialsOrDict[Oauth2Scope] | None = None,
        oauth2_token_source: RefreshableTokenSource[AuthorizationCodeCredentials[Oauth2Scope]] | None = None,
    ) -> None:
        super().__init__(
            server_config=server_config, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "GoogleCloudDatastreamClient/v1 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "v1"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            api_key=ApiKeyQueryScheme("key", api_key) if api_key is not None else no_auth,
            oauth2=(
                OAuth2RefreshableScheme(
                    credentials=AuthorizationCodeCredentials[Oauth2Scope].coerce(oauth2),
                    source=(
                        oauth2_token_source
                        if oauth2_token_source is not None
                        else AuthorizationCodeTokenSource[Oauth2Scope](
                            client=self._raw_client,
                            authorization_url=self._server.auth_server("/auth"),
                            token_url=self._server.access_token_server("/token"),
                            refresh_url=self._server.access_token_server("/token"),
                            placement=client_secret_basic,
                        )
                    ),
                )
                if oauth2 is not None
                else no_auth
            ),
        )

    @cached_property
    def with_raw_response(self) -> ApiWithRawResponse:
        return ApiWithRawResponse(self._raw_client, self._server, self._auth)

    def datastream_projects_locations_connection_profiles_create(
        self,
        projects_id: str,
        locations_id: str,
        body: ConnectionProfile | ConnectionProfileDict,
        *,
        connection_profile_id: str | None = None,
        force: bool | None = None,
        request_id: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Use this method to create a connection profile in a project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            connection_profile_id: Required. The connection profile identifier.
            force: Optional. Create the connection profile without validating it.
            request_id: Optional. A request ID to identify requests. Specify a unique request ID so that if you must
                retry your request, the server will know to ignore the request if it has already been completed. The
                server will guarantee that for at least 60 minutes since the first request. For example, consider a
                situation where you make an initial request and the request times out. If you make the request again
                with the same request ID, the server can check if original operation with the same request ID was
                received, and if so, will ignore the second request. This prevents clients from accidentally creating
                duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not
                supported (00000000-0000-0000-0000-000000000000).
            validate_only: Optional. Only validate the connection profile, but don't create any resources. The default
                is false.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_connection_profiles_create(
                projects_id,
                locations_id,
                body,
                connection_profile_id=connection_profile_id,
                force=force,
                request_id=request_id,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def datastream_projects_locations_connection_profiles_delete(
        self,
        projects_id: str,
        locations_id: str,
        connection_profiles_id: str,
        *,
        request_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Use this method to delete a connection profile.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connection_profiles_id: Resource name segment (connectionProfilesId).
            request_id: Optional. A request ID to identify requests. Specify a unique request ID so that if you must
                retry your request, the server will know to ignore the request if it has already been completed. The
                server will guarantee that for at least 60 minutes after the first request. For example, consider a
                situation where you make an initial request and the request times out. If you make the request again
                with the same request ID, the server can check if original operation with the same request ID was
                received, and if so, will ignore the second request. This prevents clients from accidentally creating
                duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not
                supported (00000000-0000-0000-0000-000000000000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_connection_profiles_delete(
                projects_id,
                locations_id,
                connection_profiles_id,
                request_id=request_id,
                request_options=request_options,
            ),
        )

    def datastream_projects_locations_connection_profiles_discover(
        self,
        projects_id: str,
        locations_id: str,
        body: DiscoverConnectionProfileRequest | DiscoverConnectionProfileRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DiscoverConnectionProfileResponse:
        """Use this method to discover a connection profile. The discover API call exposes the data objects and metadata
        belonging to the profile. Typically, a request returns children data objects of a parent data object that's
        optionally supplied in the request.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_connection_profiles_discover(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    def datastream_projects_locations_connection_profiles_get(
        self,
        projects_id: str,
        locations_id: str,
        connection_profiles_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ConnectionProfile:
        """Use this method to get details about a connection profile.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connection_profiles_id: Resource name segment (connectionProfilesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_connection_profiles_get(
                projects_id, locations_id, connection_profiles_id, request_options=request_options
            ),
        )

    def datastream_projects_locations_connection_profiles_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListConnectionProfilesResponse:
        """Use this method to list connection profiles created in a project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. Filter request.
            order_by: Optional. Order by fields for the result.
            page_size: Optional. Maximum number of connection profiles to return. If unspecified, at most 50 connection
                profiles will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
            page_token: Optional. Page token received from a previous ``ListConnectionProfiles`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to
                ``ListConnectionProfiles`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_connection_profiles_list(
                projects_id,
                locations_id,
                filter_=filter_,
                order_by=order_by,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def datastream_projects_locations_connection_profiles_patch(
        self,
        projects_id: str,
        locations_id: str,
        connection_profiles_id: str,
        body: ConnectionProfile | ConnectionProfileDict,
        *,
        force: bool | None = None,
        request_id: str | None = None,
        update_mask: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Use this method to update the parameters of a connection profile.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connection_profiles_id: Resource name segment (connectionProfilesId).
            body: The request body.
            force: Optional. Update the connection profile without validating it.
            request_id: Optional. A request ID to identify requests. Specify a unique request ID so that if you must
                retry your request, the server will know to ignore the request if it has already been completed. The
                server will guarantee that for at least 60 minutes since the first request. For example, consider a
                situation where you make an initial request and the request times out. If you make the request again
                with the same request ID, the server can check if original operation with the same request ID was
                received, and if so, will ignore the second request. This prevents clients from accidentally creating
                duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not
                supported (00000000-0000-0000-0000-000000000000).
            update_mask: Optional. Field mask is used to specify the fields to be overwritten in the ConnectionProfile
                resource by the update. The fields specified in the update_mask are relative to the resource, not the
                full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then
                all fields will be overwritten.
            validate_only: Optional. Only validate the connection profile, but don't update any resources. The default
                is false.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_connection_profiles_patch(
                projects_id,
                locations_id,
                connection_profiles_id,
                body,
                force=force,
                request_id=request_id,
                update_mask=update_mask,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def datastream_projects_locations_fetch_static_ips(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FetchStaticIpsResponse:
        """The FetchStaticIps API call exposes the static IP addresses used by Datastream.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: Optional. Maximum number of Ips to return, will likely not be specified.
            page_token: Optional. A page token, received from a previous ``ListStaticIps`` call. will likely not be
                specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_fetch_static_ips(
                projects_id, locations_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    def datastream_projects_locations_get(
        self, projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Location:
        """Gets information about a location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_get(
                projects_id, locations_id, request_options=request_options
            ),
        )

    def datastream_projects_locations_list(
        self,
        projects_id: str,
        *,
        extra_location_types: list[str] | None = None,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListLocationsResponse:
        """Lists information about the supported locations for this service. This method lists locations based on the
        resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If ``name`` is empty,
        the method lists the public locations available to all projects. * **Project-specific locations**: If ``name``
        follows the format ``projects/{project}``, the method lists locations visible to that specific project. This
        includes public, private, or other project-specific locations enabled for the project. For gRPC and client
        library implementations, the resource name is passed as the ``name`` field. For direct service calls, the
        resource name is incorporated into the request path based on the specific service implementation and version.

        Args:
            projects_id: Resource name segment (projectsId).
            extra_location_types: Optional. Do not use this field unless explicitly documented otherwise. This is
                primarily for internal usage.
            filter_: A filter to narrow down results to a preferred subset. The filtering language accepts strings like
                ``"displayName=tokyo"``, and is documented in more detail in `AIP-160 <https://google.aip.dev/160>`__.
            page_size: The maximum number of results to return. If not set, the service selects a default.
            page_token: A page token received from the ``next_page_token`` field in the response. Send that page token
                to receive the subsequent page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_list(
                projects_id,
                extra_location_types=extra_location_types,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def datastream_projects_locations_operations_cancel(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the
        operation, but success is not guaranteed. If the server doesn't support this method, it returns
        ``google.rpc.Code.UNIMPLEMENTED``. Clients can use Operations.GetOperation or other methods to check whether the
        cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the
        operation is not deleted; instead, it becomes an operation with an Operation.error value with a
        google.rpc.Status.code of ``1``, corresponding to ``Code.CANCELLED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_operations_cancel(
                projects_id, locations_id, operations_id, body, request_options=request_options
            ),
        )

    def datastream_projects_locations_operations_delete(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes a long-running operation. This method indicates that the client is no longer interested in the
        operation result. It does not cancel the operation. If the server doesn't support this method, it returns
        ``google.rpc.Code.UNIMPLEMENTED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_operations_delete(
                projects_id, locations_id, operations_id, request_options=request_options
            ),
        )

    def datastream_projects_locations_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Gets the latest state of a long-running operation. Clients can use this method to poll the operation result
        at intervals as recommended by the API service.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_operations_get(
                projects_id, locations_id, operations_id, request_options=request_options
            ),
        )

    def datastream_projects_locations_operations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListOperationsResponse:
        """Lists operations that match the specified filter in the request. If the server doesn't support this method,
        it returns ``UNIMPLEMENTED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: The standard list filter.
            page_size: The standard list page size.
            page_token: The standard list page token.
            return_partial_success: When set to ``true``, operations that are reachable are returned as normal, and
                those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only
                be ``true`` when reading across collections. For example, when ``parent`` is set to
                ``"projects/example/locations/-"``. This field is not supported by default and will result in an
                ``UNIMPLEMENTED`` error if set unless explicitly documented otherwise in service or product specific
                documentation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_operations_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                return_partial_success=return_partial_success,
                request_options=request_options,
            ),
        )

    def datastream_projects_locations_private_connections_create(
        self,
        projects_id: str,
        locations_id: str,
        body: PrivateConnection | PrivateConnectionDict,
        *,
        force: bool | None = None,
        private_connection_id: str | None = None,
        request_id: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Use this method to create a private connectivity configuration.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            force: Optional. If set to true, will skip validations.
            private_connection_id: Required. The private connectivity identifier.
            request_id: Optional. A request ID to identify requests. Specify a unique request ID so that if you must
                retry your request, the server will know to ignore the request if it has already been completed. The
                server will guarantee that for at least 60 minutes since the first request. For example, consider a
                situation where you make an initial request and the request times out. If you make the request again
                with the same request ID, the server can check if original operation with the same request ID was
                received, and if so, will ignore the second request. This prevents clients from accidentally creating
                duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not
                supported (00000000-0000-0000-0000-000000000000).
            validate_only: Optional. When supplied with PSC Interface config, will get/create the tenant project
                required for the customer to allow list and won't actually create the private connection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_private_connections_create(
                projects_id,
                locations_id,
                body,
                force=force,
                private_connection_id=private_connection_id,
                request_id=request_id,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def datastream_projects_locations_private_connections_delete(
        self,
        projects_id: str,
        locations_id: str,
        private_connections_id: str,
        *,
        force: bool | None = None,
        request_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Use this method to delete a private connectivity configuration.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            private_connections_id: Resource name segment (privateConnectionsId).
            force: Optional. If set to true, any child routes that belong to this PrivateConnection will also be
                deleted.
            request_id: Optional. A request ID to identify requests. Specify a unique request ID so that if you must
                retry your request, the server will know to ignore the request if it has already been completed. The
                server will guarantee that for at least 60 minutes after the first request. For example, consider a
                situation where you make an initial request and the request times out. If you make the request again
                with the same request ID, the server can check if original operation with the same request ID was
                received, and if so, will ignore the second request. This prevents clients from accidentally creating
                duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not
                supported (00000000-0000-0000-0000-000000000000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_private_connections_delete(
                projects_id,
                locations_id,
                private_connections_id,
                force=force,
                request_id=request_id,
                request_options=request_options,
            ),
        )

    def datastream_projects_locations_private_connections_get(
        self,
        projects_id: str,
        locations_id: str,
        private_connections_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PrivateConnection:
        """Use this method to get details about a private connectivity configuration.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            private_connections_id: Resource name segment (privateConnectionsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_private_connections_get(
                projects_id, locations_id, private_connections_id, request_options=request_options
            ),
        )

    def datastream_projects_locations_private_connections_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListPrivateConnectionsResponse:
        """Use this method to list private connectivity configurations in a project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. Filter request.
            order_by: Optional. Order by fields for the result.
            page_size: Maximum number of private connectivity configurations to return. If unspecified, at most 50
                private connectivity configurations that will be returned. The maximum value is 1000; values above 1000
                will be coerced to 1000.
            page_token: Optional. Page token received from a previous ``ListPrivateConnections`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to
                ``ListPrivateConnections`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_private_connections_list(
                projects_id,
                locations_id,
                filter_=filter_,
                order_by=order_by,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def datastream_projects_locations_private_connections_routes_create(
        self,
        projects_id: str,
        locations_id: str,
        private_connections_id: str,
        body: Route | RouteDict,
        *,
        request_id: str | None = None,
        route_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Use this method to create a route for a private connectivity configuration in a project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            private_connections_id: Resource name segment (privateConnectionsId).
            body: The request body.
            request_id: Optional. A request ID to identify requests. Specify a unique request ID so that if you must
                retry your request, the server will know to ignore the request if it has already been completed. The
                server will guarantee that for at least 60 minutes since the first request. For example, consider a
                situation where you make an initial request and the request times out. If you make the request again
                with the same request ID, the server can check if original operation with the same request ID was
                received, and if so, will ignore the second request. This prevents clients from accidentally creating
                duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not
                supported (00000000-0000-0000-0000-000000000000).
            route_id: Required. The Route identifier.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_private_connections_routes_create(
                projects_id,
                locations_id,
                private_connections_id,
                body,
                request_id=request_id,
                route_id=route_id,
                request_options=request_options,
            ),
        )

    def datastream_projects_locations_private_connections_routes_delete(
        self,
        projects_id: str,
        locations_id: str,
        private_connections_id: str,
        routes_id: str,
        *,
        request_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Use this method to delete a route.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            private_connections_id: Resource name segment (privateConnectionsId).
            routes_id: Resource name segment (routesId).
            request_id: Optional. A request ID to identify requests. Specify a unique request ID so that if you must
                retry your request, the server will know to ignore the request if it has already been completed. The
                server will guarantee that for at least 60 minutes after the first request. For example, consider a
                situation where you make an initial request and the request times out. If you make the request again
                with the same request ID, the server can check if original operation with the same request ID was
                received, and if so, will ignore the second request. This prevents clients from accidentally creating
                duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not
                supported (00000000-0000-0000-0000-000000000000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_private_connections_routes_delete(
                projects_id,
                locations_id,
                private_connections_id,
                routes_id,
                request_id=request_id,
                request_options=request_options,
            ),
        )

    def datastream_projects_locations_private_connections_routes_get(
        self,
        projects_id: str,
        locations_id: str,
        private_connections_id: str,
        routes_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Route:
        """Use this method to get details about a route.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            private_connections_id: Resource name segment (privateConnectionsId).
            routes_id: Resource name segment (routesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_private_connections_routes_get(
                projects_id, locations_id, private_connections_id, routes_id, request_options=request_options
            ),
        )

    def datastream_projects_locations_private_connections_routes_list(
        self,
        projects_id: str,
        locations_id: str,
        private_connections_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListRoutesResponse:
        """Use this method to list routes created for a private connectivity configuration in a project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            private_connections_id: Resource name segment (privateConnectionsId).
            filter_: Optional. Filter request.
            order_by: Optional. Order by fields for the result.
            page_size: Optional. Maximum number of Routes to return. The service may return fewer than this value. If
                unspecified, at most 50 Routes will be returned. The maximum value is 1000; values above 1000 will be
                coerced to 1000.
            page_token: Optional. Page token received from a previous ``ListRoutes`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters provided to ``ListRoutes`` must match the call
                that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_private_connections_routes_list(
                projects_id,
                locations_id,
                private_connections_id,
                filter_=filter_,
                order_by=order_by,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def datastream_projects_locations_streams_create(
        self,
        projects_id: str,
        locations_id: str,
        body: Stream | StreamDict,
        *,
        force: bool | None = None,
        request_id: str | None = None,
        stream_id: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Use this method to create a stream.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            force: Optional. Create the stream without validating it.
            request_id: Optional. A request ID to identify requests. Specify a unique request ID so that if you must
                retry your request, the server will know to ignore the request if it has already been completed. The
                server will guarantee that for at least 60 minutes since the first request. For example, consider a
                situation where you make an initial request and the request times out. If you make the request again
                with the same request ID, the server can check if original operation with the same request ID was
                received, and if so, will ignore the second request. This prevents clients from accidentally creating
                duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not
                supported (00000000-0000-0000-0000-000000000000).
            stream_id: Required. The stream identifier.
            validate_only: Optional. Only validate the stream, but don't create any resources. The default is false.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_streams_create(
                projects_id,
                locations_id,
                body,
                force=force,
                request_id=request_id,
                stream_id=stream_id,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def datastream_projects_locations_streams_delete(
        self,
        projects_id: str,
        locations_id: str,
        streams_id: str,
        *,
        request_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Use this method to delete a stream.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            streams_id: Resource name segment (streamsId).
            request_id: Optional. A request ID to identify requests. Specify a unique request ID so that if you must
                retry your request, the server will know to ignore the request if it has already been completed. The
                server will guarantee that for at least 60 minutes after the first request. For example, consider a
                situation where you make an initial request and the request times out. If you make the request again
                with the same request ID, the server can check if original operation with the same request ID was
                received, and if so, will ignore the second request. This prevents clients from accidentally creating
                duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not
                supported (00000000-0000-0000-0000-000000000000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_streams_delete(
                projects_id, locations_id, streams_id, request_id=request_id, request_options=request_options
            ),
        )

    def datastream_projects_locations_streams_get(
        self,
        projects_id: str,
        locations_id: str,
        streams_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Stream:
        """Use this method to get details about a stream.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            streams_id: Resource name segment (streamsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_streams_get(
                projects_id, locations_id, streams_id, request_options=request_options
            ),
        )

    def datastream_projects_locations_streams_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListStreamsResponse:
        """Use this method to list streams in a project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. Filter request.
            order_by: Optional. Order by fields for the result.
            page_size: Optional. Maximum number of streams to return. If unspecified, at most 50 streams will be
                returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
            page_token: Optional. Page token received from a previous ``ListStreams`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters provided to ``ListStreams`` must match the call
                that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_streams_list(
                projects_id,
                locations_id,
                filter_=filter_,
                order_by=order_by,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def datastream_projects_locations_streams_objects_get(
        self,
        projects_id: str,
        locations_id: str,
        streams_id: str,
        objects_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StreamObject:
        """Use this method to get details about a stream object.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            streams_id: Resource name segment (streamsId).
            objects_id: Resource name segment (objectsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_streams_objects_get(
                projects_id, locations_id, streams_id, objects_id, request_options=request_options
            ),
        )

    def datastream_projects_locations_streams_objects_list(
        self,
        projects_id: str,
        locations_id: str,
        streams_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListStreamObjectsResponse:
        """Use this method to list the objects of a specific stream.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            streams_id: Resource name segment (streamsId).
            page_size: Optional. Maximum number of objects to return. Default is 50. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. Page token received from a previous ``ListStreamObjectsRequest`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to
                ``ListStreamObjectsRequest`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_streams_objects_list(
                projects_id,
                locations_id,
                streams_id,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def datastream_projects_locations_streams_objects_lookup(
        self,
        projects_id: str,
        locations_id: str,
        streams_id: str,
        body: LookupStreamObjectRequest | LookupStreamObjectRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StreamObject:
        """Use this method to look up a stream object by its source object identifier.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            streams_id: Resource name segment (streamsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_streams_objects_lookup(
                projects_id, locations_id, streams_id, body, request_options=request_options
            ),
        )

    def datastream_projects_locations_streams_objects_start_backfill_job(
        self,
        projects_id: str,
        locations_id: str,
        streams_id: str,
        objects_id: str,
        body: StartBackfillJobRequest | StartBackfillJobRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StartBackfillJobResponse:
        """Use this method to start a backfill job for the specified stream object.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            streams_id: Resource name segment (streamsId).
            objects_id: Resource name segment (objectsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_streams_objects_start_backfill_job(
                projects_id, locations_id, streams_id, objects_id, body, request_options=request_options
            ),
        )

    def datastream_projects_locations_streams_objects_stop_backfill_job(
        self,
        projects_id: str,
        locations_id: str,
        streams_id: str,
        objects_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StopBackfillJobResponse:
        """Use this method to stop a backfill job for the specified stream object.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            streams_id: Resource name segment (streamsId).
            objects_id: Resource name segment (objectsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_streams_objects_stop_backfill_job(
                projects_id, locations_id, streams_id, objects_id, body, request_options=request_options
            ),
        )

    def datastream_projects_locations_streams_patch(
        self,
        projects_id: str,
        locations_id: str,
        streams_id: str,
        body: Stream | StreamDict,
        *,
        force: bool | None = None,
        request_id: str | None = None,
        update_mask: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Use this method to update the configuration of a stream.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            streams_id: Resource name segment (streamsId).
            body: The request body.
            force: Optional. Update the stream without validating it.
            request_id: Optional. A request ID to identify requests. Specify a unique request ID so that if you must
                retry your request, the server will know to ignore the request if it has already been completed. The
                server will guarantee that for at least 60 minutes since the first request. For example, consider a
                situation where you make an initial request and the request times out. If you make the request again
                with the same request ID, the server can check if original operation with the same request ID was
                received, and if so, will ignore the second request. This prevents clients from accidentally creating
                duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not
                supported (00000000-0000-0000-0000-000000000000).
            update_mask: Optional. Field mask is used to specify the fields to be overwritten in the stream resource by
                the update. The fields specified in the update_mask are relative to the resource, not the full request.
                A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields
                will be overwritten.
            validate_only: Optional. Only validate the stream with the changes, without actually updating it. The
                default is false.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_streams_patch(
                projects_id,
                locations_id,
                streams_id,
                body,
                force=force,
                request_id=request_id,
                update_mask=update_mask,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def datastream_projects_locations_streams_run(
        self,
        projects_id: str,
        locations_id: str,
        streams_id: str,
        body: RunStreamRequest | RunStreamRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Use this method to start, resume or recover a stream with a non default CDC strategy.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            streams_id: Resource name segment (streamsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.datastream_projects_locations_streams_run(
                projects_id, locations_id, streams_id, body, request_options=request_options
            ),
        )

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


class ApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def datastream_projects_locations_connection_profiles_create(
        self,
        projects_id: str,
        locations_id: str,
        body: ConnectionProfile | ConnectionProfileDict,
        *,
        connection_profile_id: str | None = None,
        force: bool | None = None,
        request_id: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, DatastreamProjectsLocationsConnectionProfilesCreateErrorBody]:
        """Use this method to create a connection profile in a project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            connection_profile_id: Required. The connection profile identifier.
            force: Optional. Create the connection profile without validating it.
            request_id: Optional. A request ID to identify requests. Specify a unique request ID so that if you must
                retry your request, the server will know to ignore the request if it has already been completed. The
                server will guarantee that for at least 60 minutes since the first request. For example, consider a
                situation where you make an initial request and the request times out. If you make the request again
                with the same request ID, the server can check if original operation with the same request ID was
                received, and if so, will ignore the second request. This prevents clients from accidentally creating
                duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not
                supported (00000000-0000-0000-0000-000000000000).
            validate_only: Optional. Only validate the connection profile, but don't create any resources. The default
                is false.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("connectionProfileId", connection_profile_id),
                param[bool | None]("force", force),
                param[str | None]("requestId", request_id),
                param[bool | None]("validateOnly", validate_only),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ConnectionProfile | ConnectionProfileDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=datastream_projects_locations_connection_profiles_create_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_connection_profiles_delete(
        self,
        projects_id: str,
        locations_id: str,
        connection_profiles_id: str,
        *,
        request_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, DatastreamProjectsLocationsConnectionProfilesDeleteErrorBody]:
        """Use this method to delete a connection profile.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connection_profiles_id: Resource name segment (connectionProfilesId).
            request_id: Optional. A request ID to identify requests. Specify a unique request ID so that if you must
                retry your request, the server will know to ignore the request if it has already been completed. The
                server will guarantee that for at least 60 minutes after the first request. For example, consider a
                situation where you make an initial request and the request times out. If you make the request again
                with the same request ID, the server can check if original operation with the same request ID was
                received, and if so, will ignore the second request. This prevents clients from accidentally creating
                duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not
                supported (00000000-0000-0000-0000-000000000000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles/{connectionProfilesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("connectionProfilesId", connection_profiles_id),
            ],
            query_params=[param[str | None]("requestId", request_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=datastream_projects_locations_connection_profiles_delete_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_connection_profiles_discover(
        self,
        projects_id: str,
        locations_id: str,
        body: DiscoverConnectionProfileRequest | DiscoverConnectionProfileRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DiscoverConnectionProfileResponse, DatastreamProjectsLocationsConnectionProfilesDiscoverErrorBody]:
        """Use this method to discover a connection profile. The discover API call exposes the data objects and metadata
        belonging to the profile. Typically, a request returns children data objects of a parent data object that's
        optionally supplied in the request.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles:discover"
            ),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DiscoverConnectionProfileRequest | DiscoverConnectionProfileRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[DiscoverConnectionProfileResponse],
            error_mapper=datastream_projects_locations_connection_profiles_discover_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_connection_profiles_get(
        self,
        projects_id: str,
        locations_id: str,
        connection_profiles_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ConnectionProfile, DatastreamProjectsLocationsConnectionProfilesGetErrorBody]:
        """Use this method to get details about a connection profile.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connection_profiles_id: Resource name segment (connectionProfilesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles/{connectionProfilesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("connectionProfilesId", connection_profiles_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ConnectionProfile],
            error_mapper=datastream_projects_locations_connection_profiles_get_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_connection_profiles_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListConnectionProfilesResponse, DatastreamProjectsLocationsConnectionProfilesListErrorBody]:
        """Use this method to list connection profiles created in a project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. Filter request.
            order_by: Optional. Order by fields for the result.
            page_size: Optional. Maximum number of connection profiles to return. If unspecified, at most 50 connection
                profiles will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
            page_token: Optional. Page token received from a previous ``ListConnectionProfiles`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to
                ``ListConnectionProfiles`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[str | None]("orderBy", order_by),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListConnectionProfilesResponse],
            error_mapper=datastream_projects_locations_connection_profiles_list_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_connection_profiles_patch(
        self,
        projects_id: str,
        locations_id: str,
        connection_profiles_id: str,
        body: ConnectionProfile | ConnectionProfileDict,
        *,
        force: bool | None = None,
        request_id: str | None = None,
        update_mask: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, DatastreamProjectsLocationsConnectionProfilesPatchErrorBody]:
        """Use this method to update the parameters of a connection profile.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connection_profiles_id: Resource name segment (connectionProfilesId).
            body: The request body.
            force: Optional. Update the connection profile without validating it.
            request_id: Optional. A request ID to identify requests. Specify a unique request ID so that if you must
                retry your request, the server will know to ignore the request if it has already been completed. The
                server will guarantee that for at least 60 minutes since the first request. For example, consider a
                situation where you make an initial request and the request times out. If you make the request again
                with the same request ID, the server can check if original operation with the same request ID was
                received, and if so, will ignore the second request. This prevents clients from accidentally creating
                duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not
                supported (00000000-0000-0000-0000-000000000000).
            update_mask: Optional. Field mask is used to specify the fields to be overwritten in the ConnectionProfile
                resource by the update. The fields specified in the update_mask are relative to the resource, not the
                full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then
                all fields will be overwritten.
            validate_only: Optional. Only validate the connection profile, but don't update any resources. The default
                is false.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles/{connectionProfilesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("connectionProfilesId", connection_profiles_id),
            ],
            query_params=[
                param[bool | None]("force", force),
                param[str | None]("requestId", request_id),
                param[str | None]("updateMask", update_mask),
                param[bool | None]("validateOnly", validate_only),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ConnectionProfile | ConnectionProfileDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=datastream_projects_locations_connection_profiles_patch_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_fetch_static_ips(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FetchStaticIpsResponse, DatastreamProjectsLocationsFetchStaticIpsErrorBody]:
        """The FetchStaticIps API call exposes the static IP addresses used by Datastream.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: Optional. Maximum number of Ips to return, will likely not be specified.
            page_token: Optional. A page token, received from a previous ``ListStaticIps`` call. will likely not be
                specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}:fetchStaticIps"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[FetchStaticIpsResponse],
            error_mapper=datastream_projects_locations_fetch_static_ips_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_get(
        self, projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Location, DatastreamProjectsLocationsGetErrorBody]:
        """Gets information about a location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Location],
            error_mapper=datastream_projects_locations_get_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_list(
        self,
        projects_id: str,
        *,
        extra_location_types: list[str] | None = None,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListLocationsResponse, DatastreamProjectsLocationsListErrorBody]:
        """Lists information about the supported locations for this service. This method lists locations based on the
        resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If ``name`` is empty,
        the method lists the public locations available to all projects. * **Project-specific locations**: If ``name``
        follows the format ``projects/{project}``, the method lists locations visible to that specific project. This
        includes public, private, or other project-specific locations enabled for the project. For gRPC and client
        library implementations, the resource name is passed as the ``name`` field. For direct service calls, the
        resource name is incorporated into the request path based on the specific service implementation and version.

        Args:
            projects_id: Resource name segment (projectsId).
            extra_location_types: Optional. Do not use this field unless explicitly documented otherwise. This is
                primarily for internal usage.
            filter_: A filter to narrow down results to a preferred subset. The filtering language accepts strings like
                ``"displayName=tokyo"``, and is documented in more detail in `AIP-160 <https://google.aip.dev/160>`__.
            page_size: The maximum number of results to return. If not set, the service selects a default.
            page_token: A page token received from the ``next_page_token`` field in the response. Send that page token
                to receive the subsequent page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations"),
            path_params=[param[str]("projectsId", projects_id)],
            query_params=[
                param[list[str] | None]("extraLocationTypes", extra_location_types),
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListLocationsResponse],
            error_mapper=datastream_projects_locations_list_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_operations_cancel(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DatastreamProjectsLocationsOperationsCancelErrorBody]:
        """Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the
        operation, but success is not guaranteed. If the server doesn't support this method, it returns
        ``google.rpc.Code.UNIMPLEMENTED``. Clients can use Operations.GetOperation or other methods to check whether the
        cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the
        operation is not deleted; instead, it becomes an operation with an Operation.error value with a
        google.rpc.Status.code of ``1``, corresponding to ``Code.CANCELLED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("operationsId", operations_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=datastream_projects_locations_operations_cancel_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_operations_delete(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DatastreamProjectsLocationsOperationsDeleteErrorBody]:
        """Deletes a long-running operation. This method indicates that the client is no longer interested in the
        operation result. It does not cancel the operation. If the server doesn't support this method, it returns
        ``google.rpc.Code.UNIMPLEMENTED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("operationsId", operations_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=datastream_projects_locations_operations_delete_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, DatastreamProjectsLocationsOperationsGetErrorBody]:
        """Gets the latest state of a long-running operation. Clients can use this method to poll the operation result
        at intervals as recommended by the API service.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("operationsId", operations_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=datastream_projects_locations_operations_get_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_operations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListOperationsResponse, DatastreamProjectsLocationsOperationsListErrorBody]:
        """Lists operations that match the specified filter in the request. If the server doesn't support this method,
        it returns ``UNIMPLEMENTED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: The standard list filter.
            page_size: The standard list page size.
            page_token: The standard list page token.
            return_partial_success: When set to ``true``, operations that are reachable are returned as normal, and
                those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only
                be ``true`` when reading across collections. For example, when ``parent`` is set to
                ``"projects/example/locations/-"``. This field is not supported by default and will result in an
                ``UNIMPLEMENTED`` error if set unless explicitly documented otherwise in service or product specific
                documentation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/operations"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[bool | None]("returnPartialSuccess", return_partial_success),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListOperationsResponse],
            error_mapper=datastream_projects_locations_operations_list_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_private_connections_create(
        self,
        projects_id: str,
        locations_id: str,
        body: PrivateConnection | PrivateConnectionDict,
        *,
        force: bool | None = None,
        private_connection_id: str | None = None,
        request_id: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, DatastreamProjectsLocationsPrivateConnectionsCreateErrorBody]:
        """Use this method to create a private connectivity configuration.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            force: Optional. If set to true, will skip validations.
            private_connection_id: Required. The private connectivity identifier.
            request_id: Optional. A request ID to identify requests. Specify a unique request ID so that if you must
                retry your request, the server will know to ignore the request if it has already been completed. The
                server will guarantee that for at least 60 minutes since the first request. For example, consider a
                situation where you make an initial request and the request times out. If you make the request again
                with the same request ID, the server can check if original operation with the same request ID was
                received, and if so, will ignore the second request. This prevents clients from accidentally creating
                duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not
                supported (00000000-0000-0000-0000-000000000000).
            validate_only: Optional. When supplied with PSC Interface config, will get/create the tenant project
                required for the customer to allow list and won't actually create the private connection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/privateConnections"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[bool | None]("force", force),
                param[str | None]("privateConnectionId", private_connection_id),
                param[str | None]("requestId", request_id),
                param[bool | None]("validateOnly", validate_only),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PrivateConnection | PrivateConnectionDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=datastream_projects_locations_private_connections_create_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_private_connections_delete(
        self,
        projects_id: str,
        locations_id: str,
        private_connections_id: str,
        *,
        force: bool | None = None,
        request_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, DatastreamProjectsLocationsPrivateConnectionsDeleteErrorBody]:
        """Use this method to delete a private connectivity configuration.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            private_connections_id: Resource name segment (privateConnectionsId).
            force: Optional. If set to true, any child routes that belong to this PrivateConnection will also be
                deleted.
            request_id: Optional. A request ID to identify requests. Specify a unique request ID so that if you must
                retry your request, the server will know to ignore the request if it has already been completed. The
                server will guarantee that for at least 60 minutes after the first request. For example, consider a
                situation where you make an initial request and the request times out. If you make the request again
                with the same request ID, the server can check if original operation with the same request ID was
                received, and if so, will ignore the second request. This prevents clients from accidentally creating
                duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not
                supported (00000000-0000-0000-0000-000000000000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("privateConnectionsId", private_connections_id),
            ],
            query_params=[param[bool | None]("force", force), param[str | None]("requestId", request_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=datastream_projects_locations_private_connections_delete_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_private_connections_get(
        self,
        projects_id: str,
        locations_id: str,
        private_connections_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PrivateConnection, DatastreamProjectsLocationsPrivateConnectionsGetErrorBody]:
        """Use this method to get details about a private connectivity configuration.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            private_connections_id: Resource name segment (privateConnectionsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("privateConnectionsId", private_connections_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[PrivateConnection],
            error_mapper=datastream_projects_locations_private_connections_get_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_private_connections_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListPrivateConnectionsResponse, DatastreamProjectsLocationsPrivateConnectionsListErrorBody]:
        """Use this method to list private connectivity configurations in a project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. Filter request.
            order_by: Optional. Order by fields for the result.
            page_size: Maximum number of private connectivity configurations to return. If unspecified, at most 50
                private connectivity configurations that will be returned. The maximum value is 1000; values above 1000
                will be coerced to 1000.
            page_token: Optional. Page token received from a previous ``ListPrivateConnections`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to
                ``ListPrivateConnections`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/privateConnections"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[str | None]("orderBy", order_by),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListPrivateConnectionsResponse],
            error_mapper=datastream_projects_locations_private_connections_list_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_private_connections_routes_create(
        self,
        projects_id: str,
        locations_id: str,
        private_connections_id: str,
        body: Route | RouteDict,
        *,
        request_id: str | None = None,
        route_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, DatastreamProjectsLocationsPrivateConnectionsRoutesCreateErrorBody]:
        """Use this method to create a route for a private connectivity configuration in a project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            private_connections_id: Resource name segment (privateConnectionsId).
            body: The request body.
            request_id: Optional. A request ID to identify requests. Specify a unique request ID so that if you must
                retry your request, the server will know to ignore the request if it has already been completed. The
                server will guarantee that for at least 60 minutes since the first request. For example, consider a
                situation where you make an initial request and the request times out. If you make the request again
                with the same request ID, the server can check if original operation with the same request ID was
                received, and if so, will ignore the second request. This prevents clients from accidentally creating
                duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not
                supported (00000000-0000-0000-0000-000000000000).
            route_id: Required. The Route identifier.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}/routes"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("privateConnectionsId", private_connections_id),
            ],
            query_params=[param[str | None]("requestId", request_id), param[str | None]("routeId", route_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Route | RouteDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=datastream_projects_locations_private_connections_routes_create_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_private_connections_routes_delete(
        self,
        projects_id: str,
        locations_id: str,
        private_connections_id: str,
        routes_id: str,
        *,
        request_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteErrorBody]:
        """Use this method to delete a route.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            private_connections_id: Resource name segment (privateConnectionsId).
            routes_id: Resource name segment (routesId).
            request_id: Optional. A request ID to identify requests. Specify a unique request ID so that if you must
                retry your request, the server will know to ignore the request if it has already been completed. The
                server will guarantee that for at least 60 minutes after the first request. For example, consider a
                situation where you make an initial request and the request times out. If you make the request again
                with the same request ID, the server can check if original operation with the same request ID was
                received, and if so, will ignore the second request. This prevents clients from accidentally creating
                duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not
                supported (00000000-0000-0000-0000-000000000000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}/routes/{routesId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("privateConnectionsId", private_connections_id),
                param[str]("routesId", routes_id),
            ],
            query_params=[param[str | None]("requestId", request_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=datastream_projects_locations_private_connections_routes_delete_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_private_connections_routes_get(
        self,
        projects_id: str,
        locations_id: str,
        private_connections_id: str,
        routes_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Route, DatastreamProjectsLocationsPrivateConnectionsRoutesGetErrorBody]:
        """Use this method to get details about a route.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            private_connections_id: Resource name segment (privateConnectionsId).
            routes_id: Resource name segment (routesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}/routes/{routesId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("privateConnectionsId", private_connections_id),
                param[str]("routesId", routes_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Route],
            error_mapper=datastream_projects_locations_private_connections_routes_get_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_private_connections_routes_list(
        self,
        projects_id: str,
        locations_id: str,
        private_connections_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListRoutesResponse, DatastreamProjectsLocationsPrivateConnectionsRoutesListErrorBody]:
        """Use this method to list routes created for a private connectivity configuration in a project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            private_connections_id: Resource name segment (privateConnectionsId).
            filter_: Optional. Filter request.
            order_by: Optional. Order by fields for the result.
            page_size: Optional. Maximum number of Routes to return. The service may return fewer than this value. If
                unspecified, at most 50 Routes will be returned. The maximum value is 1000; values above 1000 will be
                coerced to 1000.
            page_token: Optional. Page token received from a previous ``ListRoutes`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters provided to ``ListRoutes`` must match the call
                that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}/routes"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("privateConnectionsId", private_connections_id),
            ],
            query_params=[
                param[str | None]("filter", filter_),
                param[str | None]("orderBy", order_by),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListRoutesResponse],
            error_mapper=datastream_projects_locations_private_connections_routes_list_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_streams_create(
        self,
        projects_id: str,
        locations_id: str,
        body: Stream | StreamDict,
        *,
        force: bool | None = None,
        request_id: str | None = None,
        stream_id: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, DatastreamProjectsLocationsStreamsCreateErrorBody]:
        """Use this method to create a stream.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            force: Optional. Create the stream without validating it.
            request_id: Optional. A request ID to identify requests. Specify a unique request ID so that if you must
                retry your request, the server will know to ignore the request if it has already been completed. The
                server will guarantee that for at least 60 minutes since the first request. For example, consider a
                situation where you make an initial request and the request times out. If you make the request again
                with the same request ID, the server can check if original operation with the same request ID was
                received, and if so, will ignore the second request. This prevents clients from accidentally creating
                duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not
                supported (00000000-0000-0000-0000-000000000000).
            stream_id: Required. The stream identifier.
            validate_only: Optional. Only validate the stream, but don't create any resources. The default is false.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/streams"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[bool | None]("force", force),
                param[str | None]("requestId", request_id),
                param[str | None]("streamId", stream_id),
                param[bool | None]("validateOnly", validate_only),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Stream | StreamDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=datastream_projects_locations_streams_create_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_streams_delete(
        self,
        projects_id: str,
        locations_id: str,
        streams_id: str,
        *,
        request_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, DatastreamProjectsLocationsStreamsDeleteErrorBody]:
        """Use this method to delete a stream.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            streams_id: Resource name segment (streamsId).
            request_id: Optional. A request ID to identify requests. Specify a unique request ID so that if you must
                retry your request, the server will know to ignore the request if it has already been completed. The
                server will guarantee that for at least 60 minutes after the first request. For example, consider a
                situation where you make an initial request and the request times out. If you make the request again
                with the same request ID, the server can check if original operation with the same request ID was
                received, and if so, will ignore the second request. This prevents clients from accidentally creating
                duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not
                supported (00000000-0000-0000-0000-000000000000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("streamsId", streams_id),
            ],
            query_params=[param[str | None]("requestId", request_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=datastream_projects_locations_streams_delete_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_streams_get(
        self,
        projects_id: str,
        locations_id: str,
        streams_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Stream, DatastreamProjectsLocationsStreamsGetErrorBody]:
        """Use this method to get details about a stream.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            streams_id: Resource name segment (streamsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("streamsId", streams_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Stream],
            error_mapper=datastream_projects_locations_streams_get_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_streams_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListStreamsResponse, DatastreamProjectsLocationsStreamsListErrorBody]:
        """Use this method to list streams in a project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. Filter request.
            order_by: Optional. Order by fields for the result.
            page_size: Optional. Maximum number of streams to return. If unspecified, at most 50 streams will be
                returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
            page_token: Optional. Page token received from a previous ``ListStreams`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters provided to ``ListStreams`` must match the call
                that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/streams"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[str | None]("orderBy", order_by),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListStreamsResponse],
            error_mapper=datastream_projects_locations_streams_list_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_streams_objects_get(
        self,
        projects_id: str,
        locations_id: str,
        streams_id: str,
        objects_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StreamObject, DatastreamProjectsLocationsStreamsObjectsGetErrorBody]:
        """Use this method to get details about a stream object.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            streams_id: Resource name segment (streamsId).
            objects_id: Resource name segment (objectsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects/{objectsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("streamsId", streams_id),
                param[str]("objectsId", objects_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[StreamObject],
            error_mapper=datastream_projects_locations_streams_objects_get_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_streams_objects_list(
        self,
        projects_id: str,
        locations_id: str,
        streams_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListStreamObjectsResponse, DatastreamProjectsLocationsStreamsObjectsListErrorBody]:
        """Use this method to list the objects of a specific stream.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            streams_id: Resource name segment (streamsId).
            page_size: Optional. Maximum number of objects to return. Default is 50. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. Page token received from a previous ``ListStreamObjectsRequest`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to
                ``ListStreamObjectsRequest`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("streamsId", streams_id),
            ],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListStreamObjectsResponse],
            error_mapper=datastream_projects_locations_streams_objects_list_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_streams_objects_lookup(
        self,
        projects_id: str,
        locations_id: str,
        streams_id: str,
        body: LookupStreamObjectRequest | LookupStreamObjectRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StreamObject, DatastreamProjectsLocationsStreamsObjectsLookupErrorBody]:
        """Use this method to look up a stream object by its source object identifier.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            streams_id: Resource name segment (streamsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects:lookup"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("streamsId", streams_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[LookupStreamObjectRequest | LookupStreamObjectRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[StreamObject],
            error_mapper=datastream_projects_locations_streams_objects_lookup_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_streams_objects_start_backfill_job(
        self,
        projects_id: str,
        locations_id: str,
        streams_id: str,
        objects_id: str,
        body: StartBackfillJobRequest | StartBackfillJobRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StartBackfillJobResponse, DatastreamProjectsLocationsStreamsObjectsStartBackfillJobErrorBody]:
        """Use this method to start a backfill job for the specified stream object.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            streams_id: Resource name segment (streamsId).
            objects_id: Resource name segment (objectsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects/{objectsId}:startBackfillJob",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("streamsId", streams_id),
                param[str]("objectsId", objects_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartBackfillJobRequest | StartBackfillJobRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[StartBackfillJobResponse],
            error_mapper=datastream_projects_locations_streams_objects_start_backfill_job_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_streams_objects_stop_backfill_job(
        self,
        projects_id: str,
        locations_id: str,
        streams_id: str,
        objects_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StopBackfillJobResponse, DatastreamProjectsLocationsStreamsObjectsStopBackfillJobErrorBody]:
        """Use this method to stop a backfill job for the specified stream object.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            streams_id: Resource name segment (streamsId).
            objects_id: Resource name segment (objectsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects/{objectsId}:stopBackfillJob",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("streamsId", streams_id),
                param[str]("objectsId", objects_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[StopBackfillJobResponse],
            error_mapper=datastream_projects_locations_streams_objects_stop_backfill_job_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_streams_patch(
        self,
        projects_id: str,
        locations_id: str,
        streams_id: str,
        body: Stream | StreamDict,
        *,
        force: bool | None = None,
        request_id: str | None = None,
        update_mask: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, DatastreamProjectsLocationsStreamsPatchErrorBody]:
        """Use this method to update the configuration of a stream.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            streams_id: Resource name segment (streamsId).
            body: The request body.
            force: Optional. Update the stream without validating it.
            request_id: Optional. A request ID to identify requests. Specify a unique request ID so that if you must
                retry your request, the server will know to ignore the request if it has already been completed. The
                server will guarantee that for at least 60 minutes since the first request. For example, consider a
                situation where you make an initial request and the request times out. If you make the request again
                with the same request ID, the server can check if original operation with the same request ID was
                received, and if so, will ignore the second request. This prevents clients from accidentally creating
                duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not
                supported (00000000-0000-0000-0000-000000000000).
            update_mask: Optional. Field mask is used to specify the fields to be overwritten in the stream resource by
                the update. The fields specified in the update_mask are relative to the resource, not the full request.
                A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields
                will be overwritten.
            validate_only: Optional. Only validate the stream with the changes, without actually updating it. The
                default is false.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("streamsId", streams_id),
            ],
            query_params=[
                param[bool | None]("force", force),
                param[str | None]("requestId", request_id),
                param[str | None]("updateMask", update_mask),
                param[bool | None]("validateOnly", validate_only),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Stream | StreamDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=datastream_projects_locations_streams_patch_error_mapper,
            request_options=request_options,
        )

    def datastream_projects_locations_streams_run(
        self,
        projects_id: str,
        locations_id: str,
        streams_id: str,
        body: RunStreamRequest | RunStreamRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, DatastreamProjectsLocationsStreamsRunErrorBody]:
        """Use this method to start, resume or recover a stream with a non default CDC strategy.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            streams_id: Resource name segment (streamsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}:run"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("streamsId", streams_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RunStreamRequest | RunStreamRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=datastream_projects_locations_streams_run_error_mapper,
            request_options=request_options,
        )


Client = GoogleCloudDatastreamClient
