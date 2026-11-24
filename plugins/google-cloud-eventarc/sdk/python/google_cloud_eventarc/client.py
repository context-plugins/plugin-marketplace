from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType
from typing import Any
from uuid import UUID, uuid4

from typing_extensions import Self

from .auth import AuthSchemes, Oauth2Scope
from .base_client import DEFAULT_TIMEOUT, BaseGoogleCloudEventarcClient
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
from .errors.eventarc_projects_locations_channel_connections_create_error import (
    EventarcProjectsLocationsChannelConnectionsCreateErrorBody,
    eventarc_projects_locations_channel_connections_create_error_mapper,
)
from .errors.eventarc_projects_locations_channel_connections_delete_error import (
    EventarcProjectsLocationsChannelConnectionsDeleteErrorBody,
    eventarc_projects_locations_channel_connections_delete_error_mapper,
)
from .errors.eventarc_projects_locations_channel_connections_get_error import (
    EventarcProjectsLocationsChannelConnectionsGetErrorBody,
    eventarc_projects_locations_channel_connections_get_error_mapper,
)
from .errors.eventarc_projects_locations_channel_connections_get_iam_policy_error import (
    EventarcProjectsLocationsChannelConnectionsGetIamPolicyErrorBody,
    eventarc_projects_locations_channel_connections_get_iam_policy_error_mapper,
)
from .errors.eventarc_projects_locations_channel_connections_list_error import (
    EventarcProjectsLocationsChannelConnectionsListErrorBody,
    eventarc_projects_locations_channel_connections_list_error_mapper,
)
from .errors.eventarc_projects_locations_channel_connections_set_iam_policy_error import (
    EventarcProjectsLocationsChannelConnectionsSetIamPolicyErrorBody,
    eventarc_projects_locations_channel_connections_set_iam_policy_error_mapper,
)
from .errors.eventarc_projects_locations_channel_connections_test_iam_permissions_error import (
    EventarcProjectsLocationsChannelConnectionsTestIamPermissionsErrorBody,
    eventarc_projects_locations_channel_connections_test_iam_permissions_error_mapper,
)
from .errors.eventarc_projects_locations_channels_create_error import (
    EventarcProjectsLocationsChannelsCreateErrorBody,
    eventarc_projects_locations_channels_create_error_mapper,
)
from .errors.eventarc_projects_locations_channels_delete_error import (
    EventarcProjectsLocationsChannelsDeleteErrorBody,
    eventarc_projects_locations_channels_delete_error_mapper,
)
from .errors.eventarc_projects_locations_channels_get_error import (
    EventarcProjectsLocationsChannelsGetErrorBody,
    eventarc_projects_locations_channels_get_error_mapper,
)
from .errors.eventarc_projects_locations_channels_get_iam_policy_error import (
    EventarcProjectsLocationsChannelsGetIamPolicyErrorBody,
    eventarc_projects_locations_channels_get_iam_policy_error_mapper,
)
from .errors.eventarc_projects_locations_channels_list_error import (
    EventarcProjectsLocationsChannelsListErrorBody,
    eventarc_projects_locations_channels_list_error_mapper,
)
from .errors.eventarc_projects_locations_channels_patch_error import (
    EventarcProjectsLocationsChannelsPatchErrorBody,
    eventarc_projects_locations_channels_patch_error_mapper,
)
from .errors.eventarc_projects_locations_channels_set_iam_policy_error import (
    EventarcProjectsLocationsChannelsSetIamPolicyErrorBody,
    eventarc_projects_locations_channels_set_iam_policy_error_mapper,
)
from .errors.eventarc_projects_locations_channels_test_iam_permissions_error import (
    EventarcProjectsLocationsChannelsTestIamPermissionsErrorBody,
    eventarc_projects_locations_channels_test_iam_permissions_error_mapper,
)
from .errors.eventarc_projects_locations_enrollments_create_error import (
    EventarcProjectsLocationsEnrollmentsCreateErrorBody,
    eventarc_projects_locations_enrollments_create_error_mapper,
)
from .errors.eventarc_projects_locations_enrollments_delete_error import (
    EventarcProjectsLocationsEnrollmentsDeleteErrorBody,
    eventarc_projects_locations_enrollments_delete_error_mapper,
)
from .errors.eventarc_projects_locations_enrollments_get_error import (
    EventarcProjectsLocationsEnrollmentsGetErrorBody,
    eventarc_projects_locations_enrollments_get_error_mapper,
)
from .errors.eventarc_projects_locations_enrollments_get_iam_policy_error import (
    EventarcProjectsLocationsEnrollmentsGetIamPolicyErrorBody,
    eventarc_projects_locations_enrollments_get_iam_policy_error_mapper,
)
from .errors.eventarc_projects_locations_enrollments_list_error import (
    EventarcProjectsLocationsEnrollmentsListErrorBody,
    eventarc_projects_locations_enrollments_list_error_mapper,
)
from .errors.eventarc_projects_locations_enrollments_patch_error import (
    EventarcProjectsLocationsEnrollmentsPatchErrorBody,
    eventarc_projects_locations_enrollments_patch_error_mapper,
)
from .errors.eventarc_projects_locations_enrollments_set_iam_policy_error import (
    EventarcProjectsLocationsEnrollmentsSetIamPolicyErrorBody,
    eventarc_projects_locations_enrollments_set_iam_policy_error_mapper,
)
from .errors.eventarc_projects_locations_enrollments_test_iam_permissions_error import (
    EventarcProjectsLocationsEnrollmentsTestIamPermissionsErrorBody,
    eventarc_projects_locations_enrollments_test_iam_permissions_error_mapper,
)
from .errors.eventarc_projects_locations_get_error import (
    EventarcProjectsLocationsGetErrorBody,
    eventarc_projects_locations_get_error_mapper,
)
from .errors.eventarc_projects_locations_get_google_channel_config_error import (
    EventarcProjectsLocationsGetGoogleChannelConfigErrorBody,
    eventarc_projects_locations_get_google_channel_config_error_mapper,
)
from .errors.eventarc_projects_locations_google_api_sources_create_error import (
    EventarcProjectsLocationsGoogleApiSourcesCreateErrorBody,
    eventarc_projects_locations_google_api_sources_create_error_mapper,
)
from .errors.eventarc_projects_locations_google_api_sources_delete_error import (
    EventarcProjectsLocationsGoogleApiSourcesDeleteErrorBody,
    eventarc_projects_locations_google_api_sources_delete_error_mapper,
)
from .errors.eventarc_projects_locations_google_api_sources_get_error import (
    EventarcProjectsLocationsGoogleApiSourcesGetErrorBody,
    eventarc_projects_locations_google_api_sources_get_error_mapper,
)
from .errors.eventarc_projects_locations_google_api_sources_get_iam_policy_error import (
    EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyErrorBody,
    eventarc_projects_locations_google_api_sources_get_iam_policy_error_mapper,
)
from .errors.eventarc_projects_locations_google_api_sources_list_error import (
    EventarcProjectsLocationsGoogleApiSourcesListErrorBody,
    eventarc_projects_locations_google_api_sources_list_error_mapper,
)
from .errors.eventarc_projects_locations_google_api_sources_patch_error import (
    EventarcProjectsLocationsGoogleApiSourcesPatchErrorBody,
    eventarc_projects_locations_google_api_sources_patch_error_mapper,
)
from .errors.eventarc_projects_locations_google_api_sources_set_iam_policy_error import (
    EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyErrorBody,
    eventarc_projects_locations_google_api_sources_set_iam_policy_error_mapper,
)
from .errors.eventarc_projects_locations_google_api_sources_test_iam_permissions_error import (
    EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsErrorBody,
    eventarc_projects_locations_google_api_sources_test_iam_permissions_error_mapper,
)
from .errors.eventarc_projects_locations_list_error import (
    EventarcProjectsLocationsListErrorBody,
    eventarc_projects_locations_list_error_mapper,
)
from .errors.eventarc_projects_locations_message_buses_create_error import (
    EventarcProjectsLocationsMessageBusesCreateErrorBody,
    eventarc_projects_locations_message_buses_create_error_mapper,
)
from .errors.eventarc_projects_locations_message_buses_delete_error import (
    EventarcProjectsLocationsMessageBusesDeleteErrorBody,
    eventarc_projects_locations_message_buses_delete_error_mapper,
)
from .errors.eventarc_projects_locations_message_buses_get_error import (
    EventarcProjectsLocationsMessageBusesGetErrorBody,
    eventarc_projects_locations_message_buses_get_error_mapper,
)
from .errors.eventarc_projects_locations_message_buses_get_iam_policy_error import (
    EventarcProjectsLocationsMessageBusesGetIamPolicyErrorBody,
    eventarc_projects_locations_message_buses_get_iam_policy_error_mapper,
)
from .errors.eventarc_projects_locations_message_buses_list_enrollments_error import (
    EventarcProjectsLocationsMessageBusesListEnrollmentsErrorBody,
    eventarc_projects_locations_message_buses_list_enrollments_error_mapper,
)
from .errors.eventarc_projects_locations_message_buses_list_error import (
    EventarcProjectsLocationsMessageBusesListErrorBody,
    eventarc_projects_locations_message_buses_list_error_mapper,
)
from .errors.eventarc_projects_locations_message_buses_patch_error import (
    EventarcProjectsLocationsMessageBusesPatchErrorBody,
    eventarc_projects_locations_message_buses_patch_error_mapper,
)
from .errors.eventarc_projects_locations_message_buses_set_iam_policy_error import (
    EventarcProjectsLocationsMessageBusesSetIamPolicyErrorBody,
    eventarc_projects_locations_message_buses_set_iam_policy_error_mapper,
)
from .errors.eventarc_projects_locations_message_buses_test_iam_permissions_error import (
    EventarcProjectsLocationsMessageBusesTestIamPermissionsErrorBody,
    eventarc_projects_locations_message_buses_test_iam_permissions_error_mapper,
)
from .errors.eventarc_projects_locations_operations_cancel_error import (
    EventarcProjectsLocationsOperationsCancelErrorBody,
    eventarc_projects_locations_operations_cancel_error_mapper,
)
from .errors.eventarc_projects_locations_operations_delete_error import (
    EventarcProjectsLocationsOperationsDeleteErrorBody,
    eventarc_projects_locations_operations_delete_error_mapper,
)
from .errors.eventarc_projects_locations_operations_get_error import (
    EventarcProjectsLocationsOperationsGetErrorBody,
    eventarc_projects_locations_operations_get_error_mapper,
)
from .errors.eventarc_projects_locations_operations_list_error import (
    EventarcProjectsLocationsOperationsListErrorBody,
    eventarc_projects_locations_operations_list_error_mapper,
)
from .errors.eventarc_projects_locations_pipelines_create_error import (
    EventarcProjectsLocationsPipelinesCreateErrorBody,
    eventarc_projects_locations_pipelines_create_error_mapper,
)
from .errors.eventarc_projects_locations_pipelines_delete_error import (
    EventarcProjectsLocationsPipelinesDeleteErrorBody,
    eventarc_projects_locations_pipelines_delete_error_mapper,
)
from .errors.eventarc_projects_locations_pipelines_get_error import (
    EventarcProjectsLocationsPipelinesGetErrorBody,
    eventarc_projects_locations_pipelines_get_error_mapper,
)
from .errors.eventarc_projects_locations_pipelines_get_iam_policy_error import (
    EventarcProjectsLocationsPipelinesGetIamPolicyErrorBody,
    eventarc_projects_locations_pipelines_get_iam_policy_error_mapper,
)
from .errors.eventarc_projects_locations_pipelines_list_error import (
    EventarcProjectsLocationsPipelinesListErrorBody,
    eventarc_projects_locations_pipelines_list_error_mapper,
)
from .errors.eventarc_projects_locations_pipelines_patch_error import (
    EventarcProjectsLocationsPipelinesPatchErrorBody,
    eventarc_projects_locations_pipelines_patch_error_mapper,
)
from .errors.eventarc_projects_locations_pipelines_set_iam_policy_error import (
    EventarcProjectsLocationsPipelinesSetIamPolicyErrorBody,
    eventarc_projects_locations_pipelines_set_iam_policy_error_mapper,
)
from .errors.eventarc_projects_locations_pipelines_test_iam_permissions_error import (
    EventarcProjectsLocationsPipelinesTestIamPermissionsErrorBody,
    eventarc_projects_locations_pipelines_test_iam_permissions_error_mapper,
)
from .errors.eventarc_projects_locations_providers_get_error import (
    EventarcProjectsLocationsProvidersGetErrorBody,
    eventarc_projects_locations_providers_get_error_mapper,
)
from .errors.eventarc_projects_locations_providers_list_error import (
    EventarcProjectsLocationsProvidersListErrorBody,
    eventarc_projects_locations_providers_list_error_mapper,
)
from .errors.eventarc_projects_locations_triggers_create_error import (
    EventarcProjectsLocationsTriggersCreateErrorBody,
    eventarc_projects_locations_triggers_create_error_mapper,
)
from .errors.eventarc_projects_locations_triggers_delete_error import (
    EventarcProjectsLocationsTriggersDeleteErrorBody,
    eventarc_projects_locations_triggers_delete_error_mapper,
)
from .errors.eventarc_projects_locations_triggers_get_error import (
    EventarcProjectsLocationsTriggersGetErrorBody,
    eventarc_projects_locations_triggers_get_error_mapper,
)
from .errors.eventarc_projects_locations_triggers_get_iam_policy_error import (
    EventarcProjectsLocationsTriggersGetIamPolicyErrorBody,
    eventarc_projects_locations_triggers_get_iam_policy_error_mapper,
)
from .errors.eventarc_projects_locations_triggers_list_error import (
    EventarcProjectsLocationsTriggersListErrorBody,
    eventarc_projects_locations_triggers_list_error_mapper,
)
from .errors.eventarc_projects_locations_triggers_patch_error import (
    EventarcProjectsLocationsTriggersPatchErrorBody,
    eventarc_projects_locations_triggers_patch_error_mapper,
)
from .errors.eventarc_projects_locations_triggers_set_iam_policy_error import (
    EventarcProjectsLocationsTriggersSetIamPolicyErrorBody,
    eventarc_projects_locations_triggers_set_iam_policy_error_mapper,
)
from .errors.eventarc_projects_locations_triggers_test_iam_permissions_error import (
    EventarcProjectsLocationsTriggersTestIamPermissionsErrorBody,
    eventarc_projects_locations_triggers_test_iam_permissions_error_mapper,
)
from .errors.eventarc_projects_locations_update_google_channel_config_error import (
    EventarcProjectsLocationsUpdateGoogleChannelConfigErrorBody,
    eventarc_projects_locations_update_google_channel_config_error_mapper,
)
from .models.channel import Channel, ChannelDict
from .models.channel_connection import ChannelConnection, ChannelConnectionDict
from .models.enrollment import Enrollment, EnrollmentDict
from .models.google_api_source import GoogleApiSource, GoogleApiSourceDict
from .models.google_channel_config import GoogleChannelConfig, GoogleChannelConfigDict
from .models.google_longrunning_list_operations_response import GoogleLongrunningListOperationsResponse
from .models.google_longrunning_operation import GoogleLongrunningOperation
from .models.list_channel_connections_response import ListChannelConnectionsResponse
from .models.list_channels_response import ListChannelsResponse
from .models.list_enrollments_response import ListEnrollmentsResponse
from .models.list_google_api_sources_response import ListGoogleApiSourcesResponse
from .models.list_locations_response import ListLocationsResponse
from .models.list_message_bus_enrollments_response import ListMessageBusEnrollmentsResponse
from .models.list_message_buses_response import ListMessageBusesResponse
from .models.list_pipelines_response import ListPipelinesResponse
from .models.list_providers_response import ListProvidersResponse
from .models.list_triggers_response import ListTriggersResponse
from .models.location import Location
from .models.message_bus import MessageBus, MessageBusDict
from .models.pipeline import Pipeline, PipelineDict
from .models.policy import Policy
from .models.provider import Provider
from .models.set_iam_policy_request import SetIamPolicyRequest, SetIamPolicyRequestDict
from .models.test_iam_permissions_request import TestIamPermissionsRequest, TestIamPermissionsRequestDict
from .models.test_iam_permissions_response import TestIamPermissionsResponse
from .models.trigger import Trigger, TriggerDict
from .server.server import Server
from .server.server_config import ServerConfigOrDict


class GoogleCloudEventarcClient(BaseGoogleCloudEventarcClient[RawClient]):
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
                param[str]("User-Agent", "GoogleCloudEventarcClient/v1 Python"),
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

    def eventarc_projects_locations_channel_connections_create(
        self,
        projects_id: str,
        locations_id: str,
        body: ChannelConnection | ChannelConnectionDict,
        *,
        channel_connection_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Create a new ChannelConnection in a particular project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            channel_connection_id: Required. The user-provided ID to be assigned to the channel connection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_channel_connections_create(
                projects_id,
                locations_id,
                body,
                channel_connection_id=channel_connection_id,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_channel_connections_delete(
        self,
        projects_id: str,
        locations_id: str,
        channel_connections_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Delete a single ChannelConnection.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channel_connections_id: Resource name segment (channelConnectionsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_channel_connections_delete(
                projects_id, locations_id, channel_connections_id, request_options=request_options
            ),
        )

    def eventarc_projects_locations_channel_connections_get(
        self,
        projects_id: str,
        locations_id: str,
        channel_connections_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ChannelConnection:
        """Get a single ChannelConnection.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channel_connections_id: Resource name segment (channelConnectionsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_channel_connections_get(
                projects_id, locations_id, channel_connections_id, request_options=request_options
            ),
        )

    def eventarc_projects_locations_channel_connections_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        channel_connections_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Policy:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channel_connections_id: Resource name segment (channelConnectionsId).
            options_requested_policy_version: Optional. The maximum policy version that will be used to format the
                policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests
                for policies with any conditional role bindings must specify version 3. Policies with no conditional
                role bindings may specify any valid value or leave the field unset. The policy in the response might use
                the policy version that you specified, or it might use a lower policy version. For example, if you
                specify version 3, but the policy has no conditional role bindings, the response uses version 1. To
                learn which resources support conditions in their IAM policies, see the `IAM documentation
                <https://cloud.google.com/iam/help/conditions/resource-policies>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_channel_connections_get_iam_policy(
                projects_id,
                locations_id,
                channel_connections_id,
                options_requested_policy_version=options_requested_policy_version,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_channel_connections_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListChannelConnectionsResponse:
        """List channel connections.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: The maximum number of channel connections to return on each page. Note: The service may send
                fewer responses.
            page_token: The page token; provide the value from the ``next_page_token`` field in a previous
                ``ListChannelConnections`` call to retrieve the subsequent page. When paginating, all other parameters
                provided to ``ListChannelConnetions`` match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_channel_connections_list(
                projects_id, locations_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    def eventarc_projects_locations_channel_connections_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        channel_connections_id: str,
        body: SetIamPolicyRequest | SetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Policy:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channel_connections_id: Resource name segment (channelConnectionsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_channel_connections_set_iam_policy(
                projects_id, locations_id, channel_connections_id, body, request_options=request_options
            ),
        )

    def eventarc_projects_locations_channel_connections_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        channel_connections_id: str,
        body: TestIamPermissionsRequest | TestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TestIamPermissionsResponse:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channel_connections_id: Resource name segment (channelConnectionsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_channel_connections_test_iam_permissions(
                projects_id, locations_id, channel_connections_id, body, request_options=request_options
            ),
        )

    def eventarc_projects_locations_channels_create(
        self,
        projects_id: str,
        locations_id: str,
        body: Channel | ChannelDict,
        *,
        channel_id: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Create a new channel in a particular project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            channel_id: Required. The user-provided ID to be assigned to the channel.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_channels_create(
                projects_id,
                locations_id,
                body,
                channel_id=channel_id,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_channels_delete(
        self,
        projects_id: str,
        locations_id: str,
        channels_id: str,
        *,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Delete a single channel.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channels_id: Resource name segment (channelsId).
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_channels_delete(
                projects_id, locations_id, channels_id, validate_only=validate_only, request_options=request_options
            ),
        )

    def eventarc_projects_locations_channels_get(
        self,
        projects_id: str,
        locations_id: str,
        channels_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Channel:
        """Get a single Channel.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channels_id: Resource name segment (channelsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_channels_get(
                projects_id, locations_id, channels_id, request_options=request_options
            ),
        )

    def eventarc_projects_locations_channels_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        channels_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Policy:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channels_id: Resource name segment (channelsId).
            options_requested_policy_version: Optional. The maximum policy version that will be used to format the
                policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests
                for policies with any conditional role bindings must specify version 3. Policies with no conditional
                role bindings may specify any valid value or leave the field unset. The policy in the response might use
                the policy version that you specified, or it might use a lower policy version. For example, if you
                specify version 3, but the policy has no conditional role bindings, the response uses version 1. To
                learn which resources support conditions in their IAM policies, see the `IAM documentation
                <https://cloud.google.com/iam/help/conditions/resource-policies>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_channels_get_iam_policy(
                projects_id,
                locations_id,
                channels_id,
                options_requested_policy_version=options_requested_policy_version,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_channels_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListChannelsResponse:
        """List channels.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            order_by: The sorting order of the resources returned. Value should be a comma-separated list of fields. The
                default sorting order is ascending. To specify descending order for a field, append a ``desc`` suffix;
                for example: ``name desc, channel_id``.
            page_size: The maximum number of channels to return on each page. Note: The service may send fewer.
            page_token: The page token; provide the value from the ``next_page_token`` field in a previous
                ``ListChannels`` call to retrieve the subsequent page. When paginating, all other parameters provided to
                ``ListChannels`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_channels_list(
                projects_id,
                locations_id,
                order_by=order_by,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_channels_patch(
        self,
        projects_id: str,
        locations_id: str,
        channels_id: str,
        body: Channel | ChannelDict,
        *,
        update_mask: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Update a single channel.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channels_id: Resource name segment (channelsId).
            body: The request body.
            update_mask: The fields to be updated; only fields explicitly provided are updated. If no field mask is
                provided, all provided fields in the request are updated. To update all fields, provide a field mask of
                "*".
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_channels_patch(
                projects_id,
                locations_id,
                channels_id,
                body,
                update_mask=update_mask,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_channels_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        channels_id: str,
        body: SetIamPolicyRequest | SetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Policy:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channels_id: Resource name segment (channelsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_channels_set_iam_policy(
                projects_id, locations_id, channels_id, body, request_options=request_options
            ),
        )

    def eventarc_projects_locations_channels_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        channels_id: str,
        body: TestIamPermissionsRequest | TestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TestIamPermissionsResponse:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channels_id: Resource name segment (channelsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_channels_test_iam_permissions(
                projects_id, locations_id, channels_id, body, request_options=request_options
            ),
        )

    def eventarc_projects_locations_enrollments_create(
        self,
        projects_id: str,
        locations_id: str,
        body: Enrollment | EnrollmentDict,
        *,
        enrollment_id: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Create a new Enrollment in a particular project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            enrollment_id: Required. The user-provided ID to be assigned to the Enrollment. It should match the format
                ``^`a-z <[a-z0-9-]{0,61}[a-z0-9]>`__?$``.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_enrollments_create(
                projects_id,
                locations_id,
                body,
                enrollment_id=enrollment_id,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_enrollments_delete(
        self,
        projects_id: str,
        locations_id: str,
        enrollments_id: str,
        *,
        allow_missing: bool | None = None,
        etag: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Delete a single Enrollment.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            enrollments_id: Resource name segment (enrollmentsId).
            allow_missing: Optional. If set to true, and the Enrollment is not found, the request will succeed but no
                action will be taken on the server.
            etag: Optional. If provided, the Enrollment will only be deleted if the etag matches the current etag on the
                resource.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_enrollments_delete(
                projects_id,
                locations_id,
                enrollments_id,
                allow_missing=allow_missing,
                etag=etag,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_enrollments_get(
        self,
        projects_id: str,
        locations_id: str,
        enrollments_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Enrollment:
        """Get a single Enrollment.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            enrollments_id: Resource name segment (enrollmentsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_enrollments_get(
                projects_id, locations_id, enrollments_id, request_options=request_options
            ),
        )

    def eventarc_projects_locations_enrollments_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        enrollments_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Policy:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            enrollments_id: Resource name segment (enrollmentsId).
            options_requested_policy_version: Optional. The maximum policy version that will be used to format the
                policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests
                for policies with any conditional role bindings must specify version 3. Policies with no conditional
                role bindings may specify any valid value or leave the field unset. The policy in the response might use
                the policy version that you specified, or it might use a lower policy version. For example, if you
                specify version 3, but the policy has no conditional role bindings, the response uses version 1. To
                learn which resources support conditions in their IAM policies, see the `IAM documentation
                <https://cloud.google.com/iam/help/conditions/resource-policies>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_enrollments_get_iam_policy(
                projects_id,
                locations_id,
                enrollments_id,
                options_requested_policy_version=options_requested_policy_version,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_enrollments_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListEnrollmentsResponse:
        """List Enrollments.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. The filter field that the list request will filter on. Possible filtersare described in
                https://google.aip.dev/160.
            order_by: Optional. The sorting order of the resources returned. Value should be a comma-separated list of
                fields. The default sorting order is ascending. To specify descending order for a field, append a
                ``desc`` suffix; for example: ``name desc, update_time``.
            page_size: Optional. The maximum number of results to return on each page. Note: The service may send fewer.
            page_token: Optional. The page token; provide the value from the ``next_page_token`` field in a previous
                call to retrieve the subsequent page. When paginating, all other parameters provided must match the
                previous call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_enrollments_list(
                projects_id,
                locations_id,
                filter_=filter_,
                order_by=order_by,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_enrollments_patch(
        self,
        projects_id: str,
        locations_id: str,
        enrollments_id: str,
        body: Enrollment | EnrollmentDict,
        *,
        allow_missing: bool | None = None,
        update_mask: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Update a single Enrollment.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            enrollments_id: Resource name segment (enrollmentsId).
            body: The request body.
            allow_missing: Optional. If set to true, and the Enrollment is not found, a new Enrollment will be created.
                In this situation, ``update_mask`` is ignored.
            update_mask: Optional. The fields to be updated; only fields explicitly provided are updated. If no field
                mask is provided, all provided fields in the request are updated. To update all fields, provide a field
                mask of "*".
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_enrollments_patch(
                projects_id,
                locations_id,
                enrollments_id,
                body,
                allow_missing=allow_missing,
                update_mask=update_mask,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_enrollments_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        enrollments_id: str,
        body: SetIamPolicyRequest | SetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Policy:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            enrollments_id: Resource name segment (enrollmentsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_enrollments_set_iam_policy(
                projects_id, locations_id, enrollments_id, body, request_options=request_options
            ),
        )

    def eventarc_projects_locations_enrollments_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        enrollments_id: str,
        body: TestIamPermissionsRequest | TestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TestIamPermissionsResponse:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            enrollments_id: Resource name segment (enrollmentsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_enrollments_test_iam_permissions(
                projects_id, locations_id, enrollments_id, body, request_options=request_options
            ),
        )

    def eventarc_projects_locations_get(
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
            self.with_raw_response.eventarc_projects_locations_get(
                projects_id, locations_id, request_options=request_options
            ),
        )

    def eventarc_projects_locations_get_google_channel_config(
        self, projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GoogleChannelConfig:
        """Get a GoogleChannelConfig. The name of the GoogleChannelConfig in the response is ALWAYS coded with
        projectID.

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
            self.with_raw_response.eventarc_projects_locations_get_google_channel_config(
                projects_id, locations_id, request_options=request_options
            ),
        )

    def eventarc_projects_locations_google_api_sources_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleApiSource | GoogleApiSourceDict,
        *,
        google_api_source_id: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Create a new GoogleApiSource in a particular project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            google_api_source_id: Required. The user-provided ID to be assigned to the GoogleApiSource. It should match
                the format ``^`a-z <[a-z0-9-]{0,61}[a-z0-9]>`__?$``.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_google_api_sources_create(
                projects_id,
                locations_id,
                body,
                google_api_source_id=google_api_source_id,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_google_api_sources_delete(
        self,
        projects_id: str,
        locations_id: str,
        google_api_sources_id: str,
        *,
        allow_missing: bool | None = None,
        etag: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Delete a single GoogleApiSource.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            google_api_sources_id: Resource name segment (googleApiSourcesId).
            allow_missing: Optional. If set to true, and the GoogleApiSource is not found, the request will succeed but
                no action will be taken on the server.
            etag: Optional. If provided, the GoogleApiSource will only be deleted if the etag matches the current etag
                on the resource.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_google_api_sources_delete(
                projects_id,
                locations_id,
                google_api_sources_id,
                allow_missing=allow_missing,
                etag=etag,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_google_api_sources_get(
        self,
        projects_id: str,
        locations_id: str,
        google_api_sources_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleApiSource:
        """Get a single GoogleApiSource.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            google_api_sources_id: Resource name segment (googleApiSourcesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_google_api_sources_get(
                projects_id, locations_id, google_api_sources_id, request_options=request_options
            ),
        )

    def eventarc_projects_locations_google_api_sources_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        google_api_sources_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Policy:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            google_api_sources_id: Resource name segment (googleApiSourcesId).
            options_requested_policy_version: Optional. The maximum policy version that will be used to format the
                policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests
                for policies with any conditional role bindings must specify version 3. Policies with no conditional
                role bindings may specify any valid value or leave the field unset. The policy in the response might use
                the policy version that you specified, or it might use a lower policy version. For example, if you
                specify version 3, but the policy has no conditional role bindings, the response uses version 1. To
                learn which resources support conditions in their IAM policies, see the `IAM documentation
                <https://cloud.google.com/iam/help/conditions/resource-policies>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_google_api_sources_get_iam_policy(
                projects_id,
                locations_id,
                google_api_sources_id,
                options_requested_policy_version=options_requested_policy_version,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_google_api_sources_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListGoogleApiSourcesResponse:
        """List GoogleApiSources.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. The filter field that the list request will filter on. Possible filtersare described in
                https://google.aip.dev/160.
            order_by: Optional. The sorting order of the resources returned. Value should be a comma-separated list of
                fields. The default sorting order is ascending. To specify descending order for a field, append a
                ``desc`` suffix; for example: ``name desc, update_time``.
            page_size: Optional. The maximum number of results to return on each page. Note: The service may send fewer.
            page_token: Optional. The page token; provide the value from the ``next_page_token`` field in a previous
                call to retrieve the subsequent page. When paginating, all other parameters provided must match the
                previous call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_google_api_sources_list(
                projects_id,
                locations_id,
                filter_=filter_,
                order_by=order_by,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_google_api_sources_patch(
        self,
        projects_id: str,
        locations_id: str,
        google_api_sources_id: str,
        body: GoogleApiSource | GoogleApiSourceDict,
        *,
        allow_missing: bool | None = None,
        update_mask: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Update a single GoogleApiSource.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            google_api_sources_id: Resource name segment (googleApiSourcesId).
            body: The request body.
            allow_missing: Optional. If set to true, and the GoogleApiSource is not found, a new GoogleApiSource will be
                created. In this situation, ``update_mask`` is ignored.
            update_mask: Optional. The fields to be updated; only fields explicitly provided are updated. If no field
                mask is provided, all provided fields in the request are updated. To update all fields, provide a field
                mask of "*".
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_google_api_sources_patch(
                projects_id,
                locations_id,
                google_api_sources_id,
                body,
                allow_missing=allow_missing,
                update_mask=update_mask,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_google_api_sources_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        google_api_sources_id: str,
        body: SetIamPolicyRequest | SetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Policy:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            google_api_sources_id: Resource name segment (googleApiSourcesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_google_api_sources_set_iam_policy(
                projects_id, locations_id, google_api_sources_id, body, request_options=request_options
            ),
        )

    def eventarc_projects_locations_google_api_sources_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        google_api_sources_id: str,
        body: TestIamPermissionsRequest | TestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TestIamPermissionsResponse:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            google_api_sources_id: Resource name segment (googleApiSourcesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_google_api_sources_test_iam_permissions(
                projects_id, locations_id, google_api_sources_id, body, request_options=request_options
            ),
        )

    def eventarc_projects_locations_list(
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
            self.with_raw_response.eventarc_projects_locations_list(
                projects_id,
                extra_location_types=extra_location_types,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_message_buses_create(
        self,
        projects_id: str,
        locations_id: str,
        body: MessageBus | MessageBusDict,
        *,
        message_bus_id: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Create a new MessageBus in a particular project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            message_bus_id: Required. The user-provided ID to be assigned to the MessageBus. It should match the format
                ``^`a-z <[a-z0-9-]{0,61}[a-z0-9]>`__?$``.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_message_buses_create(
                projects_id,
                locations_id,
                body,
                message_bus_id=message_bus_id,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_message_buses_delete(
        self,
        projects_id: str,
        locations_id: str,
        message_buses_id: str,
        *,
        allow_missing: bool | None = None,
        etag: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Delete a single message bus.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            message_buses_id: Resource name segment (messageBusesId).
            allow_missing: Optional. If set to true, and the MessageBus is not found, the request will succeed but no
                action will be taken on the server.
            etag: Optional. If provided, the MessageBus will only be deleted if the etag matches the current etag on the
                resource.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_message_buses_delete(
                projects_id,
                locations_id,
                message_buses_id,
                allow_missing=allow_missing,
                etag=etag,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_message_buses_get(
        self,
        projects_id: str,
        locations_id: str,
        message_buses_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MessageBus:
        """Get a single MessageBus.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            message_buses_id: Resource name segment (messageBusesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_message_buses_get(
                projects_id, locations_id, message_buses_id, request_options=request_options
            ),
        )

    def eventarc_projects_locations_message_buses_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        message_buses_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Policy:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            message_buses_id: Resource name segment (messageBusesId).
            options_requested_policy_version: Optional. The maximum policy version that will be used to format the
                policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests
                for policies with any conditional role bindings must specify version 3. Policies with no conditional
                role bindings may specify any valid value or leave the field unset. The policy in the response might use
                the policy version that you specified, or it might use a lower policy version. For example, if you
                specify version 3, but the policy has no conditional role bindings, the response uses version 1. To
                learn which resources support conditions in their IAM policies, see the `IAM documentation
                <https://cloud.google.com/iam/help/conditions/resource-policies>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_message_buses_get_iam_policy(
                projects_id,
                locations_id,
                message_buses_id,
                options_requested_policy_version=options_requested_policy_version,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_message_buses_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListMessageBusesResponse:
        """List message buses.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. The filter field that the list request will filter on. Possible filtersare described in
                https://google.aip.dev/160.
            order_by: Optional. The sorting order of the resources returned. Value should be a comma-separated list of
                fields. The default sorting order is ascending. To specify descending order for a field, append a
                ``desc`` suffix; for example: ``name desc, update_time``.
            page_size: Optional. The maximum number of results to return on each page. Note: The service may send fewer.
            page_token: Optional. The page token; provide the value from the ``next_page_token`` field in a previous
                call to retrieve the subsequent page. When paginating, all other parameters provided must match the
                previous call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_message_buses_list(
                projects_id,
                locations_id,
                filter_=filter_,
                order_by=order_by,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_message_buses_list_enrollments(
        self,
        projects_id: str,
        locations_id: str,
        message_buses_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListMessageBusEnrollmentsResponse:
        """List message bus enrollments.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            message_buses_id: Resource name segment (messageBusesId).
            page_size: Optional. The maximum number of results to return on each page. Note: The service may send fewer.
            page_token: Optional. The page token; provide the value from the ``next_page_token`` field in a previous
                call to retrieve the subsequent page. When paginating, all other parameters provided must match the
                previous call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_message_buses_list_enrollments(
                projects_id,
                locations_id,
                message_buses_id,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_message_buses_patch(
        self,
        projects_id: str,
        locations_id: str,
        message_buses_id: str,
        body: MessageBus | MessageBusDict,
        *,
        allow_missing: bool | None = None,
        update_mask: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Update a single message bus.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            message_buses_id: Resource name segment (messageBusesId).
            body: The request body.
            allow_missing: Optional. If set to true, and the MessageBus is not found, a new MessageBus will be created.
                In this situation, ``update_mask`` is ignored.
            update_mask: Optional. The fields to be updated; only fields explicitly provided are updated. If no field
                mask is provided, all provided fields in the request are updated. To update all fields, provide a field
                mask of "*".
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_message_buses_patch(
                projects_id,
                locations_id,
                message_buses_id,
                body,
                allow_missing=allow_missing,
                update_mask=update_mask,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_message_buses_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        message_buses_id: str,
        body: SetIamPolicyRequest | SetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Policy:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            message_buses_id: Resource name segment (messageBusesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_message_buses_set_iam_policy(
                projects_id, locations_id, message_buses_id, body, request_options=request_options
            ),
        )

    def eventarc_projects_locations_message_buses_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        message_buses_id: str,
        body: TestIamPermissionsRequest | TestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TestIamPermissionsResponse:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            message_buses_id: Resource name segment (messageBusesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_message_buses_test_iam_permissions(
                projects_id, locations_id, message_buses_id, body, request_options=request_options
            ),
        )

    def eventarc_projects_locations_operations_cancel(
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
            self.with_raw_response.eventarc_projects_locations_operations_cancel(
                projects_id, locations_id, operations_id, body, request_options=request_options
            ),
        )

    def eventarc_projects_locations_operations_delete(
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
            self.with_raw_response.eventarc_projects_locations_operations_delete(
                projects_id, locations_id, operations_id, request_options=request_options
            ),
        )

    def eventarc_projects_locations_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
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
            self.with_raw_response.eventarc_projects_locations_operations_get(
                projects_id, locations_id, operations_id, request_options=request_options
            ),
        )

    def eventarc_projects_locations_operations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningListOperationsResponse:
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
            self.with_raw_response.eventarc_projects_locations_operations_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                return_partial_success=return_partial_success,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_pipelines_create(
        self,
        projects_id: str,
        locations_id: str,
        body: Pipeline | PipelineDict,
        *,
        pipeline_id: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Create a new Pipeline in a particular project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            pipeline_id: Required. The user-provided ID to be assigned to the Pipeline. It should match the format
                ``^`a-z <[a-z0-9-]{0,61}[a-z0-9]>`__?$``.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_pipelines_create(
                projects_id,
                locations_id,
                body,
                pipeline_id=pipeline_id,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_pipelines_delete(
        self,
        projects_id: str,
        locations_id: str,
        pipelines_id: str,
        *,
        allow_missing: bool | None = None,
        etag: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Delete a single pipeline.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            pipelines_id: Resource name segment (pipelinesId).
            allow_missing: Optional. If set to true, and the Pipeline is not found, the request will succeed but no
                action will be taken on the server.
            etag: Optional. If provided, the Pipeline will only be deleted if the etag matches the current etag on the
                resource.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_pipelines_delete(
                projects_id,
                locations_id,
                pipelines_id,
                allow_missing=allow_missing,
                etag=etag,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_pipelines_get(
        self,
        projects_id: str,
        locations_id: str,
        pipelines_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Pipeline:
        """Get a single Pipeline.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            pipelines_id: Resource name segment (pipelinesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_pipelines_get(
                projects_id, locations_id, pipelines_id, request_options=request_options
            ),
        )

    def eventarc_projects_locations_pipelines_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        pipelines_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Policy:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            pipelines_id: Resource name segment (pipelinesId).
            options_requested_policy_version: Optional. The maximum policy version that will be used to format the
                policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests
                for policies with any conditional role bindings must specify version 3. Policies with no conditional
                role bindings may specify any valid value or leave the field unset. The policy in the response might use
                the policy version that you specified, or it might use a lower policy version. For example, if you
                specify version 3, but the policy has no conditional role bindings, the response uses version 1. To
                learn which resources support conditions in their IAM policies, see the `IAM documentation
                <https://cloud.google.com/iam/help/conditions/resource-policies>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_pipelines_get_iam_policy(
                projects_id,
                locations_id,
                pipelines_id,
                options_requested_policy_version=options_requested_policy_version,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_pipelines_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListPipelinesResponse:
        """List pipelines.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. The filter field that the list request will filter on. Possible filters are described in
                https://google.aip.dev/160.
            order_by: Optional. The sorting order of the resources returned. Value should be a comma-separated list of
                fields. The default sorting order is ascending. To specify descending order for a field, append a
                ``desc`` suffix; for example: ``name desc, update_time``.
            page_size: Optional. The maximum number of results to return on each page. Note: The service may send fewer.
            page_token: Optional. The page token; provide the value from the ``next_page_token`` field in a previous
                call to retrieve the subsequent page. When paginating, all other parameters provided must match the
                previous call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_pipelines_list(
                projects_id,
                locations_id,
                filter_=filter_,
                order_by=order_by,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_pipelines_patch(
        self,
        projects_id: str,
        locations_id: str,
        pipelines_id: str,
        body: Pipeline | PipelineDict,
        *,
        allow_missing: bool | None = None,
        update_mask: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Update a single pipeline.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            pipelines_id: Resource name segment (pipelinesId).
            body: The request body.
            allow_missing: Optional. If set to true, and the Pipeline is not found, a new Pipeline will be created. In
                this situation, ``update_mask`` is ignored.
            update_mask: Optional. The fields to be updated; only fields explicitly provided are updated. If no field
                mask is provided, all provided fields in the request are updated. To update all fields, provide a field
                mask of "*".
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_pipelines_patch(
                projects_id,
                locations_id,
                pipelines_id,
                body,
                allow_missing=allow_missing,
                update_mask=update_mask,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_pipelines_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        pipelines_id: str,
        body: SetIamPolicyRequest | SetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Policy:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            pipelines_id: Resource name segment (pipelinesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_pipelines_set_iam_policy(
                projects_id, locations_id, pipelines_id, body, request_options=request_options
            ),
        )

    def eventarc_projects_locations_pipelines_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        pipelines_id: str,
        body: TestIamPermissionsRequest | TestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TestIamPermissionsResponse:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            pipelines_id: Resource name segment (pipelinesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_pipelines_test_iam_permissions(
                projects_id, locations_id, pipelines_id, body, request_options=request_options
            ),
        )

    def eventarc_projects_locations_providers_get(
        self,
        projects_id: str,
        locations_id: str,
        providers_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Provider:
        """Get a single Provider.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            providers_id: Resource name segment (providersId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_providers_get(
                projects_id, locations_id, providers_id, request_options=request_options
            ),
        )

    def eventarc_projects_locations_providers_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListProvidersResponse:
        """List providers.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: The filter field that the list request will filter on.
            order_by: The sorting order of the resources returned. Value should be a comma-separated list of fields. The
                default sorting oder is ascending. To specify descending order for a field, append a ``desc`` suffix;
                for example: ``name desc, _id``.
            page_size: The maximum number of providers to return on each page.
            page_token: The page token; provide the value from the ``next_page_token`` field in a previous
                ``ListProviders`` call to retrieve the subsequent page. When paginating, all other parameters provided
                to ``ListProviders`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_providers_list(
                projects_id,
                locations_id,
                filter_=filter_,
                order_by=order_by,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_triggers_create(
        self,
        projects_id: str,
        locations_id: str,
        body: Trigger | TriggerDict,
        *,
        trigger_id: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Create a new trigger in a particular project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            trigger_id: Required. The user-provided ID to be assigned to the trigger.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_triggers_create(
                projects_id,
                locations_id,
                body,
                trigger_id=trigger_id,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_triggers_delete(
        self,
        projects_id: str,
        locations_id: str,
        triggers_id: str,
        *,
        allow_missing: bool | None = None,
        etag: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Delete a single trigger.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            triggers_id: Resource name segment (triggersId).
            allow_missing: If set to true, and the trigger is not found, the request will succeed but no action will be
                taken on the server.
            etag: If provided, the trigger will only be deleted if the etag matches the current etag on the resource.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_triggers_delete(
                projects_id,
                locations_id,
                triggers_id,
                allow_missing=allow_missing,
                etag=etag,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_triggers_get(
        self,
        projects_id: str,
        locations_id: str,
        triggers_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Trigger:
        """Get a single trigger.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            triggers_id: Resource name segment (triggersId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_triggers_get(
                projects_id, locations_id, triggers_id, request_options=request_options
            ),
        )

    def eventarc_projects_locations_triggers_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        triggers_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Policy:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            triggers_id: Resource name segment (triggersId).
            options_requested_policy_version: Optional. The maximum policy version that will be used to format the
                policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests
                for policies with any conditional role bindings must specify version 3. Policies with no conditional
                role bindings may specify any valid value or leave the field unset. The policy in the response might use
                the policy version that you specified, or it might use a lower policy version. For example, if you
                specify version 3, but the policy has no conditional role bindings, the response uses version 1. To
                learn which resources support conditions in their IAM policies, see the `IAM documentation
                <https://cloud.google.com/iam/help/conditions/resource-policies>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_triggers_get_iam_policy(
                projects_id,
                locations_id,
                triggers_id,
                options_requested_policy_version=options_requested_policy_version,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_triggers_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListTriggersResponse:
        """List triggers.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Filter field. Used to filter the Triggers to be listed. Possible filters are described in
                https://google.aip.dev/160. For example, using "?filter=destination:gke" would list only Triggers with a
                gke destination.
            order_by: The sorting order of the resources returned. Value should be a comma-separated list of fields. The
                default sorting order is ascending. To specify descending order for a field, append a ``desc`` suffix;
                for example: ``name desc, trigger_id``.
            page_size: The maximum number of triggers to return on each page. Note: The service may send fewer.
            page_token: The page token; provide the value from the ``next_page_token`` field in a previous
                ``ListTriggers`` call to retrieve the subsequent page. When paginating, all other parameters provided to
                ``ListTriggers`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_triggers_list(
                projects_id,
                locations_id,
                filter_=filter_,
                order_by=order_by,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_triggers_patch(
        self,
        projects_id: str,
        locations_id: str,
        triggers_id: str,
        body: Trigger | TriggerDict,
        *,
        allow_missing: bool | None = None,
        update_mask: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Update a single trigger.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            triggers_id: Resource name segment (triggersId).
            body: The request body.
            allow_missing: If set to true, and the trigger is not found, a new trigger will be created. In this
                situation, ``update_mask`` is ignored.
            update_mask: The fields to be updated; only fields explicitly provided are updated. If no field mask is
                provided, all provided fields in the request are updated. To update all fields, provide a field mask of
                "*".
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_triggers_patch(
                projects_id,
                locations_id,
                triggers_id,
                body,
                allow_missing=allow_missing,
                update_mask=update_mask,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def eventarc_projects_locations_triggers_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        triggers_id: str,
        body: SetIamPolicyRequest | SetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Policy:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            triggers_id: Resource name segment (triggersId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_triggers_set_iam_policy(
                projects_id, locations_id, triggers_id, body, request_options=request_options
            ),
        )

    def eventarc_projects_locations_triggers_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        triggers_id: str,
        body: TestIamPermissionsRequest | TestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TestIamPermissionsResponse:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            triggers_id: Resource name segment (triggersId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_triggers_test_iam_permissions(
                projects_id, locations_id, triggers_id, body, request_options=request_options
            ),
        )

    def eventarc_projects_locations_update_google_channel_config(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleChannelConfig | GoogleChannelConfigDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleChannelConfig:
        """Update a single GoogleChannelConfig

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            update_mask: The fields to be updated; only fields explicitly provided are updated. If no field mask is
                provided, all provided fields in the request are updated. To update all fields, provide a field mask of
                "*".
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.eventarc_projects_locations_update_google_channel_config(
                projects_id, locations_id, body, update_mask=update_mask, request_options=request_options
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
    def eventarc_projects_locations_channel_connections_create(
        self,
        projects_id: str,
        locations_id: str,
        body: ChannelConnection | ChannelConnectionDict,
        *,
        channel_connection_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsChannelConnectionsCreateErrorBody]:
        """Create a new ChannelConnection in a particular project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            channel_connection_id: Required. The user-provided ID to be assigned to the channel connection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/channelConnections"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("channelConnectionId", channel_connection_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ChannelConnection | ChannelConnectionDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_channel_connections_create_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_channel_connections_delete(
        self,
        projects_id: str,
        locations_id: str,
        channel_connections_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsChannelConnectionsDeleteErrorBody]:
        """Delete a single ChannelConnection.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channel_connections_id: Resource name segment (channelConnectionsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("channelConnectionsId", channel_connections_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_channel_connections_delete_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_channel_connections_get(
        self,
        projects_id: str,
        locations_id: str,
        channel_connections_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ChannelConnection, EventarcProjectsLocationsChannelConnectionsGetErrorBody]:
        """Get a single ChannelConnection.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channel_connections_id: Resource name segment (channelConnectionsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("channelConnectionsId", channel_connections_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ChannelConnection],
            error_mapper=eventarc_projects_locations_channel_connections_get_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_channel_connections_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        channel_connections_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Policy, EventarcProjectsLocationsChannelConnectionsGetIamPolicyErrorBody]:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channel_connections_id: Resource name segment (channelConnectionsId).
            options_requested_policy_version: Optional. The maximum policy version that will be used to format the
                policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests
                for policies with any conditional role bindings must specify version 3. Policies with no conditional
                role bindings may specify any valid value or leave the field unset. The policy in the response might use
                the policy version that you specified, or it might use a lower policy version. For example, if you
                specify version 3, but the policy has no conditional role bindings, the response uses version 1. To
                learn which resources support conditions in their IAM policies, see the `IAM documentation
                <https://cloud.google.com/iam/help/conditions/resource-policies>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}:getIamPolicy",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("channelConnectionsId", channel_connections_id),
            ],
            query_params=[param[int | None]("options.requestedPolicyVersion", options_requested_policy_version)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Policy],
            error_mapper=eventarc_projects_locations_channel_connections_get_iam_policy_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_channel_connections_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListChannelConnectionsResponse, EventarcProjectsLocationsChannelConnectionsListErrorBody]:
        """List channel connections.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: The maximum number of channel connections to return on each page. Note: The service may send
                fewer responses.
            page_token: The page token; provide the value from the ``next_page_token`` field in a previous
                ``ListChannelConnections`` call to retrieve the subsequent page. When paginating, all other parameters
                provided to ``ListChannelConnetions`` match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/channelConnections"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListChannelConnectionsResponse],
            error_mapper=eventarc_projects_locations_channel_connections_list_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_channel_connections_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        channel_connections_id: str,
        body: SetIamPolicyRequest | SetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Policy, EventarcProjectsLocationsChannelConnectionsSetIamPolicyErrorBody]:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channel_connections_id: Resource name segment (channelConnectionsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}:setIamPolicy",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("channelConnectionsId", channel_connections_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SetIamPolicyRequest | SetIamPolicyRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Policy],
            error_mapper=eventarc_projects_locations_channel_connections_set_iam_policy_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_channel_connections_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        channel_connections_id: str,
        body: TestIamPermissionsRequest | TestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsChannelConnectionsTestIamPermissionsErrorBody]:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channel_connections_id: Resource name segment (channelConnectionsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}:testIamPermissions",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("channelConnectionsId", channel_connections_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TestIamPermissionsRequest | TestIamPermissionsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[TestIamPermissionsResponse],
            error_mapper=eventarc_projects_locations_channel_connections_test_iam_permissions_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_channels_create(
        self,
        projects_id: str,
        locations_id: str,
        body: Channel | ChannelDict,
        *,
        channel_id: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsChannelsCreateErrorBody]:
        """Create a new channel in a particular project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            channel_id: Required. The user-provided ID to be assigned to the channel.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/channels"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("channelId", channel_id), param[bool | None]("validateOnly", validate_only)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Channel | ChannelDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_channels_create_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_channels_delete(
        self,
        projects_id: str,
        locations_id: str,
        channels_id: str,
        *,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsChannelsDeleteErrorBody]:
        """Delete a single channel.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channels_id: Resource name segment (channelsId).
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("channelsId", channels_id),
            ],
            query_params=[param[bool | None]("validateOnly", validate_only)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_channels_delete_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_channels_get(
        self,
        projects_id: str,
        locations_id: str,
        channels_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Channel, EventarcProjectsLocationsChannelsGetErrorBody]:
        """Get a single Channel.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channels_id: Resource name segment (channelsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("channelsId", channels_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Channel],
            error_mapper=eventarc_projects_locations_channels_get_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_channels_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        channels_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Policy, EventarcProjectsLocationsChannelsGetIamPolicyErrorBody]:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channels_id: Resource name segment (channelsId).
            options_requested_policy_version: Optional. The maximum policy version that will be used to format the
                policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests
                for policies with any conditional role bindings must specify version 3. Policies with no conditional
                role bindings may specify any valid value or leave the field unset. The policy in the response might use
                the policy version that you specified, or it might use a lower policy version. For example, if you
                specify version 3, but the policy has no conditional role bindings, the response uses version 1. To
                learn which resources support conditions in their IAM policies, see the `IAM documentation
                <https://cloud.google.com/iam/help/conditions/resource-policies>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}:getIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("channelsId", channels_id),
            ],
            query_params=[param[int | None]("options.requestedPolicyVersion", options_requested_policy_version)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Policy],
            error_mapper=eventarc_projects_locations_channels_get_iam_policy_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_channels_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListChannelsResponse, EventarcProjectsLocationsChannelsListErrorBody]:
        """List channels.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            order_by: The sorting order of the resources returned. Value should be a comma-separated list of fields. The
                default sorting order is ascending. To specify descending order for a field, append a ``desc`` suffix;
                for example: ``name desc, channel_id``.
            page_size: The maximum number of channels to return on each page. Note: The service may send fewer.
            page_token: The page token; provide the value from the ``next_page_token`` field in a previous
                ``ListChannels`` call to retrieve the subsequent page. When paginating, all other parameters provided to
                ``ListChannels`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/channels"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("orderBy", order_by),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListChannelsResponse],
            error_mapper=eventarc_projects_locations_channels_list_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_channels_patch(
        self,
        projects_id: str,
        locations_id: str,
        channels_id: str,
        body: Channel | ChannelDict,
        *,
        update_mask: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsChannelsPatchErrorBody]:
        """Update a single channel.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channels_id: Resource name segment (channelsId).
            body: The request body.
            update_mask: The fields to be updated; only fields explicitly provided are updated. If no field mask is
                provided, all provided fields in the request are updated. To update all fields, provide a field mask of
                "*".
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("channelsId", channels_id),
            ],
            query_params=[
                param[str | None]("updateMask", update_mask), param[bool | None]("validateOnly", validate_only)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Channel | ChannelDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_channels_patch_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_channels_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        channels_id: str,
        body: SetIamPolicyRequest | SetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Policy, EventarcProjectsLocationsChannelsSetIamPolicyErrorBody]:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channels_id: Resource name segment (channelsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}:setIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("channelsId", channels_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SetIamPolicyRequest | SetIamPolicyRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Policy],
            error_mapper=eventarc_projects_locations_channels_set_iam_policy_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_channels_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        channels_id: str,
        body: TestIamPermissionsRequest | TestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsChannelsTestIamPermissionsErrorBody]:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            channels_id: Resource name segment (channelsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}:testIamPermissions"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("channelsId", channels_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TestIamPermissionsRequest | TestIamPermissionsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[TestIamPermissionsResponse],
            error_mapper=eventarc_projects_locations_channels_test_iam_permissions_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_enrollments_create(
        self,
        projects_id: str,
        locations_id: str,
        body: Enrollment | EnrollmentDict,
        *,
        enrollment_id: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsEnrollmentsCreateErrorBody]:
        """Create a new Enrollment in a particular project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            enrollment_id: Required. The user-provided ID to be assigned to the Enrollment. It should match the format
                ``^`a-z <[a-z0-9-]{0,61}[a-z0-9]>`__?$``.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/enrollments"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("enrollmentId", enrollment_id), param[bool | None]("validateOnly", validate_only)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Enrollment | EnrollmentDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_enrollments_create_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_enrollments_delete(
        self,
        projects_id: str,
        locations_id: str,
        enrollments_id: str,
        *,
        allow_missing: bool | None = None,
        etag: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsEnrollmentsDeleteErrorBody]:
        """Delete a single Enrollment.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            enrollments_id: Resource name segment (enrollmentsId).
            allow_missing: Optional. If set to true, and the Enrollment is not found, the request will succeed but no
                action will be taken on the server.
            etag: Optional. If provided, the Enrollment will only be deleted if the etag matches the current etag on the
                resource.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("enrollmentsId", enrollments_id),
            ],
            query_params=[
                param[bool | None]("allowMissing", allow_missing),
                param[str | None]("etag", etag),
                param[bool | None]("validateOnly", validate_only),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_enrollments_delete_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_enrollments_get(
        self,
        projects_id: str,
        locations_id: str,
        enrollments_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Enrollment, EventarcProjectsLocationsEnrollmentsGetErrorBody]:
        """Get a single Enrollment.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            enrollments_id: Resource name segment (enrollmentsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("enrollmentsId", enrollments_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Enrollment],
            error_mapper=eventarc_projects_locations_enrollments_get_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_enrollments_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        enrollments_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Policy, EventarcProjectsLocationsEnrollmentsGetIamPolicyErrorBody]:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            enrollments_id: Resource name segment (enrollmentsId).
            options_requested_policy_version: Optional. The maximum policy version that will be used to format the
                policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests
                for policies with any conditional role bindings must specify version 3. Policies with no conditional
                role bindings may specify any valid value or leave the field unset. The policy in the response might use
                the policy version that you specified, or it might use a lower policy version. For example, if you
                specify version 3, but the policy has no conditional role bindings, the response uses version 1. To
                learn which resources support conditions in their IAM policies, see the `IAM documentation
                <https://cloud.google.com/iam/help/conditions/resource-policies>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}:getIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("enrollmentsId", enrollments_id),
            ],
            query_params=[param[int | None]("options.requestedPolicyVersion", options_requested_policy_version)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Policy],
            error_mapper=eventarc_projects_locations_enrollments_get_iam_policy_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_enrollments_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListEnrollmentsResponse, EventarcProjectsLocationsEnrollmentsListErrorBody]:
        """List Enrollments.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. The filter field that the list request will filter on. Possible filtersare described in
                https://google.aip.dev/160.
            order_by: Optional. The sorting order of the resources returned. Value should be a comma-separated list of
                fields. The default sorting order is ascending. To specify descending order for a field, append a
                ``desc`` suffix; for example: ``name desc, update_time``.
            page_size: Optional. The maximum number of results to return on each page. Note: The service may send fewer.
            page_token: Optional. The page token; provide the value from the ``next_page_token`` field in a previous
                call to retrieve the subsequent page. When paginating, all other parameters provided must match the
                previous call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/enrollments"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[str | None]("orderBy", order_by),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListEnrollmentsResponse],
            error_mapper=eventarc_projects_locations_enrollments_list_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_enrollments_patch(
        self,
        projects_id: str,
        locations_id: str,
        enrollments_id: str,
        body: Enrollment | EnrollmentDict,
        *,
        allow_missing: bool | None = None,
        update_mask: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsEnrollmentsPatchErrorBody]:
        """Update a single Enrollment.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            enrollments_id: Resource name segment (enrollmentsId).
            body: The request body.
            allow_missing: Optional. If set to true, and the Enrollment is not found, a new Enrollment will be created.
                In this situation, ``update_mask`` is ignored.
            update_mask: Optional. The fields to be updated; only fields explicitly provided are updated. If no field
                mask is provided, all provided fields in the request are updated. To update all fields, provide a field
                mask of "*".
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("enrollmentsId", enrollments_id),
            ],
            query_params=[
                param[bool | None]("allowMissing", allow_missing),
                param[str | None]("updateMask", update_mask),
                param[bool | None]("validateOnly", validate_only),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Enrollment | EnrollmentDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_enrollments_patch_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_enrollments_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        enrollments_id: str,
        body: SetIamPolicyRequest | SetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Policy, EventarcProjectsLocationsEnrollmentsSetIamPolicyErrorBody]:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            enrollments_id: Resource name segment (enrollmentsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}:setIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("enrollmentsId", enrollments_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SetIamPolicyRequest | SetIamPolicyRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Policy],
            error_mapper=eventarc_projects_locations_enrollments_set_iam_policy_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_enrollments_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        enrollments_id: str,
        body: TestIamPermissionsRequest | TestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsEnrollmentsTestIamPermissionsErrorBody]:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            enrollments_id: Resource name segment (enrollmentsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}:testIamPermissions"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("enrollmentsId", enrollments_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TestIamPermissionsRequest | TestIamPermissionsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[TestIamPermissionsResponse],
            error_mapper=eventarc_projects_locations_enrollments_test_iam_permissions_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_get(
        self, projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Location, EventarcProjectsLocationsGetErrorBody]:
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
            error_mapper=eventarc_projects_locations_get_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_get_google_channel_config(
        self, projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleChannelConfig, EventarcProjectsLocationsGetGoogleChannelConfigErrorBody]:
        """Get a GoogleChannelConfig. The name of the GoogleChannelConfig in the response is ALWAYS coded with
        projectID.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/googleChannelConfig"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleChannelConfig],
            error_mapper=eventarc_projects_locations_get_google_channel_config_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_google_api_sources_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleApiSource | GoogleApiSourceDict,
        *,
        google_api_source_id: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsGoogleApiSourcesCreateErrorBody]:
        """Create a new GoogleApiSource in a particular project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            google_api_source_id: Required. The user-provided ID to be assigned to the GoogleApiSource. It should match
                the format ``^`a-z <[a-z0-9-]{0,61}[a-z0-9]>`__?$``.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("googleApiSourceId", google_api_source_id),
                param[bool | None]("validateOnly", validate_only),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleApiSource | GoogleApiSourceDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_google_api_sources_create_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_google_api_sources_delete(
        self,
        projects_id: str,
        locations_id: str,
        google_api_sources_id: str,
        *,
        allow_missing: bool | None = None,
        etag: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsGoogleApiSourcesDeleteErrorBody]:
        """Delete a single GoogleApiSource.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            google_api_sources_id: Resource name segment (googleApiSourcesId).
            allow_missing: Optional. If set to true, and the GoogleApiSource is not found, the request will succeed but
                no action will be taken on the server.
            etag: Optional. If provided, the GoogleApiSource will only be deleted if the etag matches the current etag
                on the resource.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("googleApiSourcesId", google_api_sources_id),
            ],
            query_params=[
                param[bool | None]("allowMissing", allow_missing),
                param[str | None]("etag", etag),
                param[bool | None]("validateOnly", validate_only),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_google_api_sources_delete_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_google_api_sources_get(
        self,
        projects_id: str,
        locations_id: str,
        google_api_sources_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleApiSource, EventarcProjectsLocationsGoogleApiSourcesGetErrorBody]:
        """Get a single GoogleApiSource.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            google_api_sources_id: Resource name segment (googleApiSourcesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("googleApiSourcesId", google_api_sources_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleApiSource],
            error_mapper=eventarc_projects_locations_google_api_sources_get_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_google_api_sources_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        google_api_sources_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Policy, EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyErrorBody]:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            google_api_sources_id: Resource name segment (googleApiSourcesId).
            options_requested_policy_version: Optional. The maximum policy version that will be used to format the
                policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests
                for policies with any conditional role bindings must specify version 3. Policies with no conditional
                role bindings may specify any valid value or leave the field unset. The policy in the response might use
                the policy version that you specified, or it might use a lower policy version. For example, if you
                specify version 3, but the policy has no conditional role bindings, the response uses version 1. To
                learn which resources support conditions in their IAM policies, see the `IAM documentation
                <https://cloud.google.com/iam/help/conditions/resource-policies>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}:getIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("googleApiSourcesId", google_api_sources_id),
            ],
            query_params=[param[int | None]("options.requestedPolicyVersion", options_requested_policy_version)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Policy],
            error_mapper=eventarc_projects_locations_google_api_sources_get_iam_policy_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_google_api_sources_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListGoogleApiSourcesResponse, EventarcProjectsLocationsGoogleApiSourcesListErrorBody]:
        """List GoogleApiSources.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. The filter field that the list request will filter on. Possible filtersare described in
                https://google.aip.dev/160.
            order_by: Optional. The sorting order of the resources returned. Value should be a comma-separated list of
                fields. The default sorting order is ascending. To specify descending order for a field, append a
                ``desc`` suffix; for example: ``name desc, update_time``.
            page_size: Optional. The maximum number of results to return on each page. Note: The service may send fewer.
            page_token: Optional. The page token; provide the value from the ``next_page_token`` field in a previous
                call to retrieve the subsequent page. When paginating, all other parameters provided must match the
                previous call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[str | None]("orderBy", order_by),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListGoogleApiSourcesResponse],
            error_mapper=eventarc_projects_locations_google_api_sources_list_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_google_api_sources_patch(
        self,
        projects_id: str,
        locations_id: str,
        google_api_sources_id: str,
        body: GoogleApiSource | GoogleApiSourceDict,
        *,
        allow_missing: bool | None = None,
        update_mask: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsGoogleApiSourcesPatchErrorBody]:
        """Update a single GoogleApiSource.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            google_api_sources_id: Resource name segment (googleApiSourcesId).
            body: The request body.
            allow_missing: Optional. If set to true, and the GoogleApiSource is not found, a new GoogleApiSource will be
                created. In this situation, ``update_mask`` is ignored.
            update_mask: Optional. The fields to be updated; only fields explicitly provided are updated. If no field
                mask is provided, all provided fields in the request are updated. To update all fields, provide a field
                mask of "*".
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("googleApiSourcesId", google_api_sources_id),
            ],
            query_params=[
                param[bool | None]("allowMissing", allow_missing),
                param[str | None]("updateMask", update_mask),
                param[bool | None]("validateOnly", validate_only),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleApiSource | GoogleApiSourceDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_google_api_sources_patch_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_google_api_sources_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        google_api_sources_id: str,
        body: SetIamPolicyRequest | SetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Policy, EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyErrorBody]:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            google_api_sources_id: Resource name segment (googleApiSourcesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}:setIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("googleApiSourcesId", google_api_sources_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SetIamPolicyRequest | SetIamPolicyRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Policy],
            error_mapper=eventarc_projects_locations_google_api_sources_set_iam_policy_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_google_api_sources_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        google_api_sources_id: str,
        body: TestIamPermissionsRequest | TestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsErrorBody]:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            google_api_sources_id: Resource name segment (googleApiSourcesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}:testIamPermissions",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("googleApiSourcesId", google_api_sources_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TestIamPermissionsRequest | TestIamPermissionsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[TestIamPermissionsResponse],
            error_mapper=eventarc_projects_locations_google_api_sources_test_iam_permissions_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_list(
        self,
        projects_id: str,
        *,
        extra_location_types: list[str] | None = None,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListLocationsResponse, EventarcProjectsLocationsListErrorBody]:
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
            error_mapper=eventarc_projects_locations_list_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_message_buses_create(
        self,
        projects_id: str,
        locations_id: str,
        body: MessageBus | MessageBusDict,
        *,
        message_bus_id: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsMessageBusesCreateErrorBody]:
        """Create a new MessageBus in a particular project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            message_bus_id: Required. The user-provided ID to be assigned to the MessageBus. It should match the format
                ``^`a-z <[a-z0-9-]{0,61}[a-z0-9]>`__?$``.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/messageBuses"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("messageBusId", message_bus_id), param[bool | None]("validateOnly", validate_only)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MessageBus | MessageBusDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_message_buses_create_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_message_buses_delete(
        self,
        projects_id: str,
        locations_id: str,
        message_buses_id: str,
        *,
        allow_missing: bool | None = None,
        etag: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsMessageBusesDeleteErrorBody]:
        """Delete a single message bus.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            message_buses_id: Resource name segment (messageBusesId).
            allow_missing: Optional. If set to true, and the MessageBus is not found, the request will succeed but no
                action will be taken on the server.
            etag: Optional. If provided, the MessageBus will only be deleted if the etag matches the current etag on the
                resource.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("messageBusesId", message_buses_id),
            ],
            query_params=[
                param[bool | None]("allowMissing", allow_missing),
                param[str | None]("etag", etag),
                param[bool | None]("validateOnly", validate_only),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_message_buses_delete_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_message_buses_get(
        self,
        projects_id: str,
        locations_id: str,
        message_buses_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MessageBus, EventarcProjectsLocationsMessageBusesGetErrorBody]:
        """Get a single MessageBus.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            message_buses_id: Resource name segment (messageBusesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("messageBusesId", message_buses_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[MessageBus],
            error_mapper=eventarc_projects_locations_message_buses_get_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_message_buses_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        message_buses_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Policy, EventarcProjectsLocationsMessageBusesGetIamPolicyErrorBody]:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            message_buses_id: Resource name segment (messageBusesId).
            options_requested_policy_version: Optional. The maximum policy version that will be used to format the
                policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests
                for policies with any conditional role bindings must specify version 3. Policies with no conditional
                role bindings may specify any valid value or leave the field unset. The policy in the response might use
                the policy version that you specified, or it might use a lower policy version. For example, if you
                specify version 3, but the policy has no conditional role bindings, the response uses version 1. To
                learn which resources support conditions in their IAM policies, see the `IAM documentation
                <https://cloud.google.com/iam/help/conditions/resource-policies>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}:getIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("messageBusesId", message_buses_id),
            ],
            query_params=[param[int | None]("options.requestedPolicyVersion", options_requested_policy_version)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Policy],
            error_mapper=eventarc_projects_locations_message_buses_get_iam_policy_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_message_buses_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListMessageBusesResponse, EventarcProjectsLocationsMessageBusesListErrorBody]:
        """List message buses.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. The filter field that the list request will filter on. Possible filtersare described in
                https://google.aip.dev/160.
            order_by: Optional. The sorting order of the resources returned. Value should be a comma-separated list of
                fields. The default sorting order is ascending. To specify descending order for a field, append a
                ``desc`` suffix; for example: ``name desc, update_time``.
            page_size: Optional. The maximum number of results to return on each page. Note: The service may send fewer.
            page_token: Optional. The page token; provide the value from the ``next_page_token`` field in a previous
                call to retrieve the subsequent page. When paginating, all other parameters provided must match the
                previous call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/messageBuses"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[str | None]("orderBy", order_by),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListMessageBusesResponse],
            error_mapper=eventarc_projects_locations_message_buses_list_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_message_buses_list_enrollments(
        self,
        projects_id: str,
        locations_id: str,
        message_buses_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListMessageBusEnrollmentsResponse, EventarcProjectsLocationsMessageBusesListEnrollmentsErrorBody]:
        """List message bus enrollments.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            message_buses_id: Resource name segment (messageBusesId).
            page_size: Optional. The maximum number of results to return on each page. Note: The service may send fewer.
            page_token: Optional. The page token; provide the value from the ``next_page_token`` field in a previous
                call to retrieve the subsequent page. When paginating, all other parameters provided must match the
                previous call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}:listEnrollments"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("messageBusesId", message_buses_id),
            ],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListMessageBusEnrollmentsResponse],
            error_mapper=eventarc_projects_locations_message_buses_list_enrollments_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_message_buses_patch(
        self,
        projects_id: str,
        locations_id: str,
        message_buses_id: str,
        body: MessageBus | MessageBusDict,
        *,
        allow_missing: bool | None = None,
        update_mask: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsMessageBusesPatchErrorBody]:
        """Update a single message bus.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            message_buses_id: Resource name segment (messageBusesId).
            body: The request body.
            allow_missing: Optional. If set to true, and the MessageBus is not found, a new MessageBus will be created.
                In this situation, ``update_mask`` is ignored.
            update_mask: Optional. The fields to be updated; only fields explicitly provided are updated. If no field
                mask is provided, all provided fields in the request are updated. To update all fields, provide a field
                mask of "*".
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("messageBusesId", message_buses_id),
            ],
            query_params=[
                param[bool | None]("allowMissing", allow_missing),
                param[str | None]("updateMask", update_mask),
                param[bool | None]("validateOnly", validate_only),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MessageBus | MessageBusDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_message_buses_patch_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_message_buses_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        message_buses_id: str,
        body: SetIamPolicyRequest | SetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Policy, EventarcProjectsLocationsMessageBusesSetIamPolicyErrorBody]:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            message_buses_id: Resource name segment (messageBusesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}:setIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("messageBusesId", message_buses_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SetIamPolicyRequest | SetIamPolicyRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Policy],
            error_mapper=eventarc_projects_locations_message_buses_set_iam_policy_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_message_buses_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        message_buses_id: str,
        body: TestIamPermissionsRequest | TestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsMessageBusesTestIamPermissionsErrorBody]:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            message_buses_id: Resource name segment (messageBusesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}:testIamPermissions"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("messageBusesId", message_buses_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TestIamPermissionsRequest | TestIamPermissionsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[TestIamPermissionsResponse],
            error_mapper=eventarc_projects_locations_message_buses_test_iam_permissions_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_operations_cancel(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, EventarcProjectsLocationsOperationsCancelErrorBody]:
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
            error_mapper=eventarc_projects_locations_operations_cancel_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_operations_delete(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, EventarcProjectsLocationsOperationsDeleteErrorBody]:
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
            error_mapper=eventarc_projects_locations_operations_delete_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsOperationsGetErrorBody]:
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
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_operations_get_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_operations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningListOperationsResponse, EventarcProjectsLocationsOperationsListErrorBody]:
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
            decoder=json_decoder[GoogleLongrunningListOperationsResponse],
            error_mapper=eventarc_projects_locations_operations_list_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_pipelines_create(
        self,
        projects_id: str,
        locations_id: str,
        body: Pipeline | PipelineDict,
        *,
        pipeline_id: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsPipelinesCreateErrorBody]:
        """Create a new Pipeline in a particular project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            pipeline_id: Required. The user-provided ID to be assigned to the Pipeline. It should match the format
                ``^`a-z <[a-z0-9-]{0,61}[a-z0-9]>`__?$``.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/pipelines"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("pipelineId", pipeline_id), param[bool | None]("validateOnly", validate_only)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Pipeline | PipelineDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_pipelines_create_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_pipelines_delete(
        self,
        projects_id: str,
        locations_id: str,
        pipelines_id: str,
        *,
        allow_missing: bool | None = None,
        etag: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsPipelinesDeleteErrorBody]:
        """Delete a single pipeline.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            pipelines_id: Resource name segment (pipelinesId).
            allow_missing: Optional. If set to true, and the Pipeline is not found, the request will succeed but no
                action will be taken on the server.
            etag: Optional. If provided, the Pipeline will only be deleted if the etag matches the current etag on the
                resource.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pipelinesId", pipelines_id),
            ],
            query_params=[
                param[bool | None]("allowMissing", allow_missing),
                param[str | None]("etag", etag),
                param[bool | None]("validateOnly", validate_only),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_pipelines_delete_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_pipelines_get(
        self,
        projects_id: str,
        locations_id: str,
        pipelines_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Pipeline, EventarcProjectsLocationsPipelinesGetErrorBody]:
        """Get a single Pipeline.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            pipelines_id: Resource name segment (pipelinesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pipelinesId", pipelines_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Pipeline],
            error_mapper=eventarc_projects_locations_pipelines_get_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_pipelines_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        pipelines_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Policy, EventarcProjectsLocationsPipelinesGetIamPolicyErrorBody]:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            pipelines_id: Resource name segment (pipelinesId).
            options_requested_policy_version: Optional. The maximum policy version that will be used to format the
                policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests
                for policies with any conditional role bindings must specify version 3. Policies with no conditional
                role bindings may specify any valid value or leave the field unset. The policy in the response might use
                the policy version that you specified, or it might use a lower policy version. For example, if you
                specify version 3, but the policy has no conditional role bindings, the response uses version 1. To
                learn which resources support conditions in their IAM policies, see the `IAM documentation
                <https://cloud.google.com/iam/help/conditions/resource-policies>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}:getIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pipelinesId", pipelines_id),
            ],
            query_params=[param[int | None]("options.requestedPolicyVersion", options_requested_policy_version)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Policy],
            error_mapper=eventarc_projects_locations_pipelines_get_iam_policy_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_pipelines_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListPipelinesResponse, EventarcProjectsLocationsPipelinesListErrorBody]:
        """List pipelines.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. The filter field that the list request will filter on. Possible filters are described in
                https://google.aip.dev/160.
            order_by: Optional. The sorting order of the resources returned. Value should be a comma-separated list of
                fields. The default sorting order is ascending. To specify descending order for a field, append a
                ``desc`` suffix; for example: ``name desc, update_time``.
            page_size: Optional. The maximum number of results to return on each page. Note: The service may send fewer.
            page_token: Optional. The page token; provide the value from the ``next_page_token`` field in a previous
                call to retrieve the subsequent page. When paginating, all other parameters provided must match the
                previous call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/pipelines"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[str | None]("orderBy", order_by),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListPipelinesResponse],
            error_mapper=eventarc_projects_locations_pipelines_list_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_pipelines_patch(
        self,
        projects_id: str,
        locations_id: str,
        pipelines_id: str,
        body: Pipeline | PipelineDict,
        *,
        allow_missing: bool | None = None,
        update_mask: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsPipelinesPatchErrorBody]:
        """Update a single pipeline.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            pipelines_id: Resource name segment (pipelinesId).
            body: The request body.
            allow_missing: Optional. If set to true, and the Pipeline is not found, a new Pipeline will be created. In
                this situation, ``update_mask`` is ignored.
            update_mask: Optional. The fields to be updated; only fields explicitly provided are updated. If no field
                mask is provided, all provided fields in the request are updated. To update all fields, provide a field
                mask of "*".
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pipelinesId", pipelines_id),
            ],
            query_params=[
                param[bool | None]("allowMissing", allow_missing),
                param[str | None]("updateMask", update_mask),
                param[bool | None]("validateOnly", validate_only),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Pipeline | PipelineDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_pipelines_patch_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_pipelines_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        pipelines_id: str,
        body: SetIamPolicyRequest | SetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Policy, EventarcProjectsLocationsPipelinesSetIamPolicyErrorBody]:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            pipelines_id: Resource name segment (pipelinesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}:setIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pipelinesId", pipelines_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SetIamPolicyRequest | SetIamPolicyRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Policy],
            error_mapper=eventarc_projects_locations_pipelines_set_iam_policy_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_pipelines_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        pipelines_id: str,
        body: TestIamPermissionsRequest | TestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsPipelinesTestIamPermissionsErrorBody]:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            pipelines_id: Resource name segment (pipelinesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}:testIamPermissions"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pipelinesId", pipelines_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TestIamPermissionsRequest | TestIamPermissionsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[TestIamPermissionsResponse],
            error_mapper=eventarc_projects_locations_pipelines_test_iam_permissions_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_providers_get(
        self,
        projects_id: str,
        locations_id: str,
        providers_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Provider, EventarcProjectsLocationsProvidersGetErrorBody]:
        """Get a single Provider.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            providers_id: Resource name segment (providersId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/providers/{providersId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("providersId", providers_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Provider],
            error_mapper=eventarc_projects_locations_providers_get_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_providers_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListProvidersResponse, EventarcProjectsLocationsProvidersListErrorBody]:
        """List providers.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: The filter field that the list request will filter on.
            order_by: The sorting order of the resources returned. Value should be a comma-separated list of fields. The
                default sorting oder is ascending. To specify descending order for a field, append a ``desc`` suffix;
                for example: ``name desc, _id``.
            page_size: The maximum number of providers to return on each page.
            page_token: The page token; provide the value from the ``next_page_token`` field in a previous
                ``ListProviders`` call to retrieve the subsequent page. When paginating, all other parameters provided
                to ``ListProviders`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/providers"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[str | None]("orderBy", order_by),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListProvidersResponse],
            error_mapper=eventarc_projects_locations_providers_list_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_triggers_create(
        self,
        projects_id: str,
        locations_id: str,
        body: Trigger | TriggerDict,
        *,
        trigger_id: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsTriggersCreateErrorBody]:
        """Create a new trigger in a particular project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            trigger_id: Required. The user-provided ID to be assigned to the trigger.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/triggers"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("triggerId", trigger_id), param[bool | None]("validateOnly", validate_only)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Trigger | TriggerDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_triggers_create_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_triggers_delete(
        self,
        projects_id: str,
        locations_id: str,
        triggers_id: str,
        *,
        allow_missing: bool | None = None,
        etag: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsTriggersDeleteErrorBody]:
        """Delete a single trigger.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            triggers_id: Resource name segment (triggersId).
            allow_missing: If set to true, and the trigger is not found, the request will succeed but no action will be
                taken on the server.
            etag: If provided, the trigger will only be deleted if the etag matches the current etag on the resource.
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("triggersId", triggers_id),
            ],
            query_params=[
                param[bool | None]("allowMissing", allow_missing),
                param[str | None]("etag", etag),
                param[bool | None]("validateOnly", validate_only),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_triggers_delete_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_triggers_get(
        self,
        projects_id: str,
        locations_id: str,
        triggers_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Trigger, EventarcProjectsLocationsTriggersGetErrorBody]:
        """Get a single trigger.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            triggers_id: Resource name segment (triggersId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("triggersId", triggers_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Trigger],
            error_mapper=eventarc_projects_locations_triggers_get_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_triggers_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        triggers_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Policy, EventarcProjectsLocationsTriggersGetIamPolicyErrorBody]:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            triggers_id: Resource name segment (triggersId).
            options_requested_policy_version: Optional. The maximum policy version that will be used to format the
                policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests
                for policies with any conditional role bindings must specify version 3. Policies with no conditional
                role bindings may specify any valid value or leave the field unset. The policy in the response might use
                the policy version that you specified, or it might use a lower policy version. For example, if you
                specify version 3, but the policy has no conditional role bindings, the response uses version 1. To
                learn which resources support conditions in their IAM policies, see the `IAM documentation
                <https://cloud.google.com/iam/help/conditions/resource-policies>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}:getIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("triggersId", triggers_id),
            ],
            query_params=[param[int | None]("options.requestedPolicyVersion", options_requested_policy_version)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Policy],
            error_mapper=eventarc_projects_locations_triggers_get_iam_policy_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_triggers_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTriggersResponse, EventarcProjectsLocationsTriggersListErrorBody]:
        """List triggers.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Filter field. Used to filter the Triggers to be listed. Possible filters are described in
                https://google.aip.dev/160. For example, using "?filter=destination:gke" would list only Triggers with a
                gke destination.
            order_by: The sorting order of the resources returned. Value should be a comma-separated list of fields. The
                default sorting order is ascending. To specify descending order for a field, append a ``desc`` suffix;
                for example: ``name desc, trigger_id``.
            page_size: The maximum number of triggers to return on each page. Note: The service may send fewer.
            page_token: The page token; provide the value from the ``next_page_token`` field in a previous
                ``ListTriggers`` call to retrieve the subsequent page. When paginating, all other parameters provided to
                ``ListTriggers`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/triggers"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[str | None]("orderBy", order_by),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListTriggersResponse],
            error_mapper=eventarc_projects_locations_triggers_list_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_triggers_patch(
        self,
        projects_id: str,
        locations_id: str,
        triggers_id: str,
        body: Trigger | TriggerDict,
        *,
        allow_missing: bool | None = None,
        update_mask: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsTriggersPatchErrorBody]:
        """Update a single trigger.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            triggers_id: Resource name segment (triggersId).
            body: The request body.
            allow_missing: If set to true, and the trigger is not found, a new trigger will be created. In this
                situation, ``update_mask`` is ignored.
            update_mask: The fields to be updated; only fields explicitly provided are updated. If no field mask is
                provided, all provided fields in the request are updated. To update all fields, provide a field mask of
                "*".
            validate_only: Optional. If set, validate the request and preview the review, but do not post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("triggersId", triggers_id),
            ],
            query_params=[
                param[bool | None]("allowMissing", allow_missing),
                param[str | None]("updateMask", update_mask),
                param[bool | None]("validateOnly", validate_only),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Trigger | TriggerDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=eventarc_projects_locations_triggers_patch_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_triggers_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        triggers_id: str,
        body: SetIamPolicyRequest | SetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Policy, EventarcProjectsLocationsTriggersSetIamPolicyErrorBody]:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            triggers_id: Resource name segment (triggersId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}:setIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("triggersId", triggers_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SetIamPolicyRequest | SetIamPolicyRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Policy],
            error_mapper=eventarc_projects_locations_triggers_set_iam_policy_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_triggers_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        triggers_id: str,
        body: TestIamPermissionsRequest | TestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsTriggersTestIamPermissionsErrorBody]:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            triggers_id: Resource name segment (triggersId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}:testIamPermissions"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("triggersId", triggers_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TestIamPermissionsRequest | TestIamPermissionsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[TestIamPermissionsResponse],
            error_mapper=eventarc_projects_locations_triggers_test_iam_permissions_error_mapper,
            request_options=request_options,
        )

    def eventarc_projects_locations_update_google_channel_config(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleChannelConfig | GoogleChannelConfigDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleChannelConfig, EventarcProjectsLocationsUpdateGoogleChannelConfigErrorBody]:
        """Update a single GoogleChannelConfig

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            update_mask: The fields to be updated; only fields explicitly provided are updated. If no field mask is
                provided, all provided fields in the request are updated. To update all fields, provide a field mask of
                "*".
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/googleChannelConfig"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleChannelConfig | GoogleChannelConfigDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleChannelConfig],
            error_mapper=eventarc_projects_locations_update_google_channel_config_error_mapper,
            request_options=request_options,
        )


Client = GoogleCloudEventarcClient
