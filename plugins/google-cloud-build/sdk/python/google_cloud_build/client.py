from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType
from typing import Any
from uuid import UUID, uuid4

from typing_extensions import Self

from .auth import AuthSchemes, Oauth2Scope
from .base_client import DEFAULT_TIMEOUT, BaseGoogleCloudBuildClient
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
from .errors.cloudbuild_projects_locations_connections_create_error import (
    CloudbuildProjectsLocationsConnectionsCreateErrorBody,
    cloudbuild_projects_locations_connections_create_error_mapper,
)
from .errors.cloudbuild_projects_locations_connections_delete_error import (
    CloudbuildProjectsLocationsConnectionsDeleteErrorBody,
    cloudbuild_projects_locations_connections_delete_error_mapper,
)
from .errors.cloudbuild_projects_locations_connections_fetch_linkable_repositories_error import (
    CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesErrorBody,
    cloudbuild_projects_locations_connections_fetch_linkable_repositories_error_mapper,
)
from .errors.cloudbuild_projects_locations_connections_get_error import (
    CloudbuildProjectsLocationsConnectionsGetErrorBody,
    cloudbuild_projects_locations_connections_get_error_mapper,
)
from .errors.cloudbuild_projects_locations_connections_get_iam_policy_error import (
    CloudbuildProjectsLocationsConnectionsGetIamPolicyErrorBody,
    cloudbuild_projects_locations_connections_get_iam_policy_error_mapper,
)
from .errors.cloudbuild_projects_locations_connections_list_error import (
    CloudbuildProjectsLocationsConnectionsListErrorBody,
    cloudbuild_projects_locations_connections_list_error_mapper,
)
from .errors.cloudbuild_projects_locations_connections_patch_error import (
    CloudbuildProjectsLocationsConnectionsPatchErrorBody,
    cloudbuild_projects_locations_connections_patch_error_mapper,
)
from .errors.cloudbuild_projects_locations_connections_process_webhook_error import (
    CloudbuildProjectsLocationsConnectionsProcessWebhookErrorBody,
    cloudbuild_projects_locations_connections_process_webhook_error_mapper,
)
from .errors.cloudbuild_projects_locations_connections_repositories_access_read_token_error import (
    CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenErrorBody,
    cloudbuild_projects_locations_connections_repositories_access_read_token_error_mapper,
)
from .errors.cloudbuild_projects_locations_connections_repositories_access_read_write_token_error import (
    CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenErrorBody,
    cloudbuild_projects_locations_connections_repositories_access_read_write_token_error_mapper,
)
from .errors.cloudbuild_projects_locations_connections_repositories_batch_create_error import (
    CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateErrorBody,
    cloudbuild_projects_locations_connections_repositories_batch_create_error_mapper,
)
from .errors.cloudbuild_projects_locations_connections_repositories_create_error import (
    CloudbuildProjectsLocationsConnectionsRepositoriesCreateErrorBody,
    cloudbuild_projects_locations_connections_repositories_create_error_mapper,
)
from .errors.cloudbuild_projects_locations_connections_repositories_delete_error import (
    CloudbuildProjectsLocationsConnectionsRepositoriesDeleteErrorBody,
    cloudbuild_projects_locations_connections_repositories_delete_error_mapper,
)
from .errors.cloudbuild_projects_locations_connections_repositories_fetch_git_refs_error import (
    CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsErrorBody,
    cloudbuild_projects_locations_connections_repositories_fetch_git_refs_error_mapper,
)
from .errors.cloudbuild_projects_locations_connections_repositories_get_error import (
    CloudbuildProjectsLocationsConnectionsRepositoriesGetErrorBody,
    cloudbuild_projects_locations_connections_repositories_get_error_mapper,
)
from .errors.cloudbuild_projects_locations_connections_repositories_list_error import (
    CloudbuildProjectsLocationsConnectionsRepositoriesListErrorBody,
    cloudbuild_projects_locations_connections_repositories_list_error_mapper,
)
from .errors.cloudbuild_projects_locations_connections_set_iam_policy_error import (
    CloudbuildProjectsLocationsConnectionsSetIamPolicyErrorBody,
    cloudbuild_projects_locations_connections_set_iam_policy_error_mapper,
)
from .errors.cloudbuild_projects_locations_connections_test_iam_permissions_error import (
    CloudbuildProjectsLocationsConnectionsTestIamPermissionsErrorBody,
    cloudbuild_projects_locations_connections_test_iam_permissions_error_mapper,
)
from .errors.cloudbuild_projects_locations_get_error import (
    CloudbuildProjectsLocationsGetErrorBody,
    cloudbuild_projects_locations_get_error_mapper,
)
from .errors.cloudbuild_projects_locations_list_error import (
    CloudbuildProjectsLocationsListErrorBody,
    cloudbuild_projects_locations_list_error_mapper,
)
from .errors.cloudbuild_projects_locations_operations_cancel_error import (
    CloudbuildProjectsLocationsOperationsCancelErrorBody,
    cloudbuild_projects_locations_operations_cancel_error_mapper,
)
from .errors.cloudbuild_projects_locations_operations_get_error import (
    CloudbuildProjectsLocationsOperationsGetErrorBody,
    cloudbuild_projects_locations_operations_get_error_mapper,
)
from .models.batch_create_repositories_request import BatchCreateRepositoriesRequest, BatchCreateRepositoriesRequestDict
from .models.connection import Connection, ConnectionDict
from .models.enums.ref_type import RefTypeOrStr
from .models.fetch_git_refs_response import FetchGitRefsResponse
from .models.fetch_linkable_repositories_response import FetchLinkableRepositoriesResponse
from .models.fetch_read_token_response import FetchReadTokenResponse
from .models.fetch_read_write_token_response import FetchReadWriteTokenResponse
from .models.http_body import HttpBody, HttpBodyDict
from .models.list_connections_response import ListConnectionsResponse
from .models.list_locations_response import ListLocationsResponse
from .models.list_repositories_response import ListRepositoriesResponse
from .models.location import Location
from .models.operation import Operation
from .models.policy import Policy
from .models.repository import Repository, RepositoryDict
from .models.set_iam_policy_request import SetIamPolicyRequest, SetIamPolicyRequestDict
from .models.test_iam_permissions_request import TestIamPermissionsRequest, TestIamPermissionsRequestDict
from .models.test_iam_permissions_response import TestIamPermissionsResponse
from .server.server import Server
from .server.server_config import ServerConfigOrDict


class GoogleCloudBuildClient(BaseGoogleCloudBuildClient[RawClient]):
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
                param[str]("User-Agent", "GoogleCloudBuildClient/v2 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "v2"),
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

    def cloudbuild_projects_locations_connections_create(
        self,
        projects_id: str,
        locations_id: str,
        body: Connection | ConnectionDict,
        *,
        connection_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Creates a Connection.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            connection_id: Required. The ID to use for the Connection, which will become the final component of the
                Connection's resource name. Names must be unique per-project per-location. Allows alphanumeric
                characters and any of -._~%!$&'()*+,;=@.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudbuild_projects_locations_connections_create(
                projects_id, locations_id, body, connection_id=connection_id, request_options=request_options
            ),
        )

    def cloudbuild_projects_locations_connections_delete(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        *,
        etag: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Deletes a single connection.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            etag: The current etag of the connection. If an etag is provided and does not match the current etag of the
                connection, deletion will be blocked and an ABORTED error will be returned.
            validate_only: If set, validate the request, but do not actually post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudbuild_projects_locations_connections_delete(
                projects_id,
                locations_id,
                connections_id,
                etag=etag,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def cloudbuild_projects_locations_connections_fetch_linkable_repositories(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FetchLinkableRepositoriesResponse:
        """FetchLinkableRepositories get repositories from SCM that are accessible and could be added to the connection.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            page_size: Number of results to return in the list. Default to 20.
            page_token: Page start.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudbuild_projects_locations_connections_fetch_linkable_repositories(
                projects_id,
                locations_id,
                connections_id,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def cloudbuild_projects_locations_connections_get(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Connection:
        """Gets details of a single connection.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudbuild_projects_locations_connections_get(
                projects_id, locations_id, connections_id, request_options=request_options
            ),
        )

    def cloudbuild_projects_locations_connections_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Policy:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
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
            self.with_raw_response.cloudbuild_projects_locations_connections_get_iam_policy(
                projects_id,
                locations_id,
                connections_id,
                options_requested_policy_version=options_requested_policy_version,
                request_options=request_options,
            ),
        )

    def cloudbuild_projects_locations_connections_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListConnectionsResponse:
        """Lists Connections in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: Number of results to return in the list.
            page_token: Page start.
            return_partial_success: Optional. If set to true, the response will return partial results when some regions
                are unreachable. If set to false, the response will fail if any region is unreachable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudbuild_projects_locations_connections_list(
                projects_id,
                locations_id,
                page_size=page_size,
                page_token=page_token,
                return_partial_success=return_partial_success,
                request_options=request_options,
            ),
        )

    def cloudbuild_projects_locations_connections_patch(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        body: Connection | ConnectionDict,
        *,
        allow_missing: bool | None = None,
        etag: str | None = None,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Updates a single connection.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            body: The request body.
            allow_missing: If set to true, and the connection is not found a new connection will be created. In this
                situation ``update_mask`` is ignored. The creation will succeed only if the input connection has all the
                necessary information (e.g a github_config with both user_oauth_token and installation_id properties).
            etag: The current etag of the connection. If an etag is provided and does not match the current etag of the
                connection, update will be blocked and an ABORTED error will be returned.
            update_mask: The list of fields to be updated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudbuild_projects_locations_connections_patch(
                projects_id,
                locations_id,
                connections_id,
                body,
                allow_missing=allow_missing,
                etag=etag,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    def cloudbuild_projects_locations_connections_process_webhook(
        self,
        projects_id: str,
        locations_id: str,
        body: HttpBody | HttpBodyDict,
        *,
        webhook_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """ProcessWebhook is called by the external SCM for notifying of events.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            webhook_key: Arbitrary additional key to find the matching repository for a webhook event if needed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudbuild_projects_locations_connections_process_webhook(
                projects_id, locations_id, body, webhook_key=webhook_key, request_options=request_options
            ),
        )

    def cloudbuild_projects_locations_connections_repositories_access_read_token(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        repositories_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FetchReadTokenResponse:
        """Fetches read token of a given repository.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            repositories_id: Resource name segment (repositoriesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudbuild_projects_locations_connections_repositories_access_read_token(
                projects_id, locations_id, connections_id, repositories_id, body, request_options=request_options
            ),
        )

    def cloudbuild_projects_locations_connections_repositories_access_read_write_token(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        repositories_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FetchReadWriteTokenResponse:
        """Fetches read/write token of a given repository.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            repositories_id: Resource name segment (repositoriesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudbuild_projects_locations_connections_repositories_access_read_write_token(
                projects_id, locations_id, connections_id, repositories_id, body, request_options=request_options
            ),
        )

    def cloudbuild_projects_locations_connections_repositories_batch_create(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        body: BatchCreateRepositoriesRequest | BatchCreateRepositoriesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Creates multiple repositories inside a connection.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudbuild_projects_locations_connections_repositories_batch_create(
                projects_id, locations_id, connections_id, body, request_options=request_options
            ),
        )

    def cloudbuild_projects_locations_connections_repositories_create(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        body: Repository | RepositoryDict,
        *,
        repository_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Creates a Repository.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            body: The request body.
            repository_id: Required. The ID to use for the repository, which will become the final component of the
                repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters
                and any of -._~%!$&'()*+,;=@.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudbuild_projects_locations_connections_repositories_create(
                projects_id,
                locations_id,
                connections_id,
                body,
                repository_id=repository_id,
                request_options=request_options,
            ),
        )

    def cloudbuild_projects_locations_connections_repositories_delete(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        repositories_id: str,
        *,
        etag: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Deletes a single repository.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            repositories_id: Resource name segment (repositoriesId).
            etag: The current etag of the repository. If an etag is provided and does not match the current etag of the
                repository, deletion will be blocked and an ABORTED error will be returned.
            validate_only: If set, validate the request, but do not actually post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudbuild_projects_locations_connections_repositories_delete(
                projects_id,
                locations_id,
                connections_id,
                repositories_id,
                etag=etag,
                validate_only=validate_only,
                request_options=request_options,
            ),
        )

    def cloudbuild_projects_locations_connections_repositories_fetch_git_refs(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        repositories_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        ref_type: RefTypeOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FetchGitRefsResponse:
        """Fetch the list of branches or tags for a given repository.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            repositories_id: Resource name segment (repositoriesId).
            page_size: Optional. Number of results to return in the list. Default to 20.
            page_token: Optional. Page start.
            ref_type: Type of refs to fetch
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudbuild_projects_locations_connections_repositories_fetch_git_refs(
                projects_id,
                locations_id,
                connections_id,
                repositories_id,
                page_size=page_size,
                page_token=page_token,
                ref_type=ref_type,
                request_options=request_options,
            ),
        )

    def cloudbuild_projects_locations_connections_repositories_get(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        repositories_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Repository:
        """Gets details of a single repository.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            repositories_id: Resource name segment (repositoriesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudbuild_projects_locations_connections_repositories_get(
                projects_id, locations_id, connections_id, repositories_id, request_options=request_options
            ),
        )

    def cloudbuild_projects_locations_connections_repositories_list(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListRepositoriesResponse:
        """Lists Repositories in a given connection.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            filter_: A filter expression that filters resources listed in the response. Expressions must follow API
                improvement proposal `AIP-160 <https://google.aip.dev/160>`__. e.g.
                ``remote_uri:"https://github.com*"``.
            page_size: Number of results to return in the list.
            page_token: Page start.
            return_partial_success: Optional. If set to true, the response will return partial results when some regions
                are unreachable. If set to false, the response will fail if any region is unreachable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudbuild_projects_locations_connections_repositories_list(
                projects_id,
                locations_id,
                connections_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                return_partial_success=return_partial_success,
                request_options=request_options,
            ),
        )

    def cloudbuild_projects_locations_connections_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        body: SetIamPolicyRequest | SetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Policy:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudbuild_projects_locations_connections_set_iam_policy(
                projects_id, locations_id, connections_id, body, request_options=request_options
            ),
        )

    def cloudbuild_projects_locations_connections_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
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
            connections_id: Resource name segment (connectionsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudbuild_projects_locations_connections_test_iam_permissions(
                projects_id, locations_id, connections_id, body, request_options=request_options
            ),
        )

    def cloudbuild_projects_locations_get(
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
            self.with_raw_response.cloudbuild_projects_locations_get(
                projects_id, locations_id, request_options=request_options
            ),
        )

    def cloudbuild_projects_locations_list(
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
            self.with_raw_response.cloudbuild_projects_locations_list(
                projects_id,
                extra_location_types=extra_location_types,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def cloudbuild_projects_locations_operations_cancel(
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
            self.with_raw_response.cloudbuild_projects_locations_operations_cancel(
                projects_id, locations_id, operations_id, body, request_options=request_options
            ),
        )

    def cloudbuild_projects_locations_operations_get(
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
            self.with_raw_response.cloudbuild_projects_locations_operations_get(
                projects_id, locations_id, operations_id, request_options=request_options
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
    def cloudbuild_projects_locations_connections_create(
        self,
        projects_id: str,
        locations_id: str,
        body: Connection | ConnectionDict,
        *,
        connection_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, CloudbuildProjectsLocationsConnectionsCreateErrorBody]:
        """Creates a Connection.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            connection_id: Required. The ID to use for the Connection, which will become the final component of the
                Connection's resource name. Names must be unique per-project per-location. Allows alphanumeric
                characters and any of -._~%!$&'()*+,;=@.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/projects/{projectsId}/locations/{locationsId}/connections"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("connectionId", connection_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Connection | ConnectionDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=cloudbuild_projects_locations_connections_create_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_connections_delete(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        *,
        etag: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, CloudbuildProjectsLocationsConnectionsDeleteErrorBody]:
        """Deletes a single connection.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            etag: The current etag of the connection. If an etag is provided and does not match the current etag of the
                connection, deletion will be blocked and an ABORTED error will be returned.
            validate_only: If set, validate the request, but do not actually post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("connectionsId", connections_id),
            ],
            query_params=[param[str | None]("etag", etag), param[bool | None]("validateOnly", validate_only)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=cloudbuild_projects_locations_connections_delete_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_connections_fetch_linkable_repositories(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        FetchLinkableRepositoriesResponse, CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesErrorBody
    ]:
        """FetchLinkableRepositories get repositories from SCM that are accessible and could be added to the connection.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            page_size: Number of results to return in the list. Default to 20.
            page_token: Page start.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:fetchLinkableRepositories",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("connectionsId", connections_id),
            ],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[FetchLinkableRepositoriesResponse],
            error_mapper=cloudbuild_projects_locations_connections_fetch_linkable_repositories_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_connections_get(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Connection, CloudbuildProjectsLocationsConnectionsGetErrorBody]:
        """Gets details of a single connection.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("connectionsId", connections_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Connection],
            error_mapper=cloudbuild_projects_locations_connections_get_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_connections_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Policy, CloudbuildProjectsLocationsConnectionsGetIamPolicyErrorBody]:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
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
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:getIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("connectionsId", connections_id),
            ],
            query_params=[param[int | None]("options.requestedPolicyVersion", options_requested_policy_version)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Policy],
            error_mapper=cloudbuild_projects_locations_connections_get_iam_policy_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_connections_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListConnectionsResponse, CloudbuildProjectsLocationsConnectionsListErrorBody]:
        """Lists Connections in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: Number of results to return in the list.
            page_token: Page start.
            return_partial_success: Optional. If set to true, the response will return partial results when some regions
                are unreachable. If set to false, the response will fail if any region is unreachable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{projectsId}/locations/{locationsId}/connections"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[bool | None]("returnPartialSuccess", return_partial_success),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListConnectionsResponse],
            error_mapper=cloudbuild_projects_locations_connections_list_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_connections_patch(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        body: Connection | ConnectionDict,
        *,
        allow_missing: bool | None = None,
        etag: str | None = None,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, CloudbuildProjectsLocationsConnectionsPatchErrorBody]:
        """Updates a single connection.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            body: The request body.
            allow_missing: If set to true, and the connection is not found a new connection will be created. In this
                situation ``update_mask`` is ignored. The creation will succeed only if the input connection has all the
                necessary information (e.g a github_config with both user_oauth_token and installation_id properties).
            etag: The current etag of the connection. If an etag is provided and does not match the current etag of the
                connection, update will be blocked and an ABORTED error will be returned.
            update_mask: The list of fields to be updated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("connectionsId", connections_id),
            ],
            query_params=[
                param[bool | None]("allowMissing", allow_missing),
                param[str | None]("etag", etag),
                param[str | None]("updateMask", update_mask),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Connection | ConnectionDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=cloudbuild_projects_locations_connections_patch_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_connections_process_webhook(
        self,
        projects_id: str,
        locations_id: str,
        body: HttpBody | HttpBodyDict,
        *,
        webhook_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, CloudbuildProjectsLocationsConnectionsProcessWebhookErrorBody]:
        """ProcessWebhook is called by the external SCM for notifying of events.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            webhook_key: Arbitrary additional key to find the matching repository for a webhook event if needed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections:processWebhook"
            ),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("webhookKey", webhook_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[HttpBody | HttpBodyDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[Any],
            error_mapper=cloudbuild_projects_locations_connections_process_webhook_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_connections_repositories_access_read_token(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        repositories_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FetchReadTokenResponse, CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenErrorBody]:
        """Fetches read token of a given repository.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            repositories_id: Resource name segment (repositoriesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}:accessReadToken",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("connectionsId", connections_id),
                param[str]("repositoriesId", repositories_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[FetchReadTokenResponse],
            error_mapper=cloudbuild_projects_locations_connections_repositories_access_read_token_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_connections_repositories_access_read_write_token(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        repositories_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        FetchReadWriteTokenResponse, CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenErrorBody
    ]:
        """Fetches read/write token of a given repository.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            repositories_id: Resource name segment (repositoriesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}:accessReadWriteToken",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("connectionsId", connections_id),
                param[str]("repositoriesId", repositories_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[FetchReadWriteTokenResponse],
            error_mapper=cloudbuild_projects_locations_connections_repositories_access_read_write_token_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_connections_repositories_batch_create(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        body: BatchCreateRepositoriesRequest | BatchCreateRepositoriesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateErrorBody]:
        """Creates multiple repositories inside a connection.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories:batchCreate"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("connectionsId", connections_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchCreateRepositoriesRequest | BatchCreateRepositoriesRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=cloudbuild_projects_locations_connections_repositories_batch_create_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_connections_repositories_create(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        body: Repository | RepositoryDict,
        *,
        repository_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, CloudbuildProjectsLocationsConnectionsRepositoriesCreateErrorBody]:
        """Creates a Repository.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            body: The request body.
            repository_id: Required. The ID to use for the repository, which will become the final component of the
                repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters
                and any of -._~%!$&'()*+,;=@.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("connectionsId", connections_id),
            ],
            query_params=[param[str | None]("repositoryId", repository_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Repository | RepositoryDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=cloudbuild_projects_locations_connections_repositories_create_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_connections_repositories_delete(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        repositories_id: str,
        *,
        etag: str | None = None,
        validate_only: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, CloudbuildProjectsLocationsConnectionsRepositoriesDeleteErrorBody]:
        """Deletes a single repository.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            repositories_id: Resource name segment (repositoriesId).
            etag: The current etag of the repository. If an etag is provided and does not match the current etag of the
                repository, deletion will be blocked and an ABORTED error will be returned.
            validate_only: If set, validate the request, but do not actually post it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("connectionsId", connections_id),
                param[str]("repositoriesId", repositories_id),
            ],
            query_params=[param[str | None]("etag", etag), param[bool | None]("validateOnly", validate_only)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=cloudbuild_projects_locations_connections_repositories_delete_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_connections_repositories_fetch_git_refs(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        repositories_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        ref_type: RefTypeOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FetchGitRefsResponse, CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsErrorBody]:
        """Fetch the list of branches or tags for a given repository.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            repositories_id: Resource name segment (repositoriesId).
            page_size: Optional. Number of results to return in the list. Default to 20.
            page_token: Optional. Page start.
            ref_type: Type of refs to fetch
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}:fetchGitRefs",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("connectionsId", connections_id),
                param[str]("repositoriesId", repositories_id),
            ],
            query_params=[
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[RefTypeOrStr | None]("refType", ref_type),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[FetchGitRefsResponse],
            error_mapper=cloudbuild_projects_locations_connections_repositories_fetch_git_refs_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_connections_repositories_get(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        repositories_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Repository, CloudbuildProjectsLocationsConnectionsRepositoriesGetErrorBody]:
        """Gets details of a single repository.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            repositories_id: Resource name segment (repositoriesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("connectionsId", connections_id),
                param[str]("repositoriesId", repositories_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Repository],
            error_mapper=cloudbuild_projects_locations_connections_repositories_get_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_connections_repositories_list(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListRepositoriesResponse, CloudbuildProjectsLocationsConnectionsRepositoriesListErrorBody]:
        """Lists Repositories in a given connection.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            filter_: A filter expression that filters resources listed in the response. Expressions must follow API
                improvement proposal `AIP-160 <https://google.aip.dev/160>`__. e.g.
                ``remote_uri:"https://github.com*"``.
            page_size: Number of results to return in the list.
            page_token: Page start.
            return_partial_success: Optional. If set to true, the response will return partial results when some regions
                are unreachable. If set to false, the response will fail if any region is unreachable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("connectionsId", connections_id),
            ],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[bool | None]("returnPartialSuccess", return_partial_success),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListRepositoriesResponse],
            error_mapper=cloudbuild_projects_locations_connections_repositories_list_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_connections_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        body: SetIamPolicyRequest | SetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Policy, CloudbuildProjectsLocationsConnectionsSetIamPolicyErrorBody]:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:setIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("connectionsId", connections_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SetIamPolicyRequest | SetIamPolicyRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Policy],
            error_mapper=cloudbuild_projects_locations_connections_set_iam_policy_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_connections_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        connections_id: str,
        body: TestIamPermissionsRequest | TestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TestIamPermissionsResponse, CloudbuildProjectsLocationsConnectionsTestIamPermissionsErrorBody]:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            connections_id: Resource name segment (connectionsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:testIamPermissions"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("connectionsId", connections_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TestIamPermissionsRequest | TestIamPermissionsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[TestIamPermissionsResponse],
            error_mapper=cloudbuild_projects_locations_connections_test_iam_permissions_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_get(
        self, projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Location, CloudbuildProjectsLocationsGetErrorBody]:
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
            url_template=self._server.default("/v2/projects/{projectsId}/locations/{locationsId}"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Location],
            error_mapper=cloudbuild_projects_locations_get_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_list(
        self,
        projects_id: str,
        *,
        extra_location_types: list[str] | None = None,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListLocationsResponse, CloudbuildProjectsLocationsListErrorBody]:
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
            url_template=self._server.default("/v2/projects/{projectsId}/locations"),
            path_params=[param[str]("projectsId", projects_id)],
            query_params=[
                param[list[str] | None]("extraLocationTypes", extra_location_types),
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListLocationsResponse],
            error_mapper=cloudbuild_projects_locations_list_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_operations_cancel(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, CloudbuildProjectsLocationsOperationsCancelErrorBody]:
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
                "/v2/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel"
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
            error_mapper=cloudbuild_projects_locations_operations_cancel_error_mapper,
            request_options=request_options,
        )

    def cloudbuild_projects_locations_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, CloudbuildProjectsLocationsOperationsGetErrorBody]:
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
                "/v2/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("operationsId", operations_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=cloudbuild_projects_locations_operations_get_error_mapper,
            request_options=request_options,
        )


Client = GoogleCloudBuildClient
