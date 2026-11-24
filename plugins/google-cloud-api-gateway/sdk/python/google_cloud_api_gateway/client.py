from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType
from typing import Any
from uuid import UUID, uuid4

from typing_extensions import Self

from .auth import AuthSchemes, Oauth2Scope
from .base_client import DEFAULT_TIMEOUT, BaseGoogleCloudApiGatewayClient
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
from .errors.apigateway_projects_locations_apis_configs_create_error import (
    ApigatewayProjectsLocationsApisConfigsCreateErrorBody,
    apigateway_projects_locations_apis_configs_create_error_mapper,
)
from .errors.apigateway_projects_locations_apis_configs_delete_error import (
    ApigatewayProjectsLocationsApisConfigsDeleteErrorBody,
    apigateway_projects_locations_apis_configs_delete_error_mapper,
)
from .errors.apigateway_projects_locations_apis_configs_get_error import (
    ApigatewayProjectsLocationsApisConfigsGetErrorBody,
    apigateway_projects_locations_apis_configs_get_error_mapper,
)
from .errors.apigateway_projects_locations_apis_configs_get_iam_policy_error import (
    ApigatewayProjectsLocationsApisConfigsGetIamPolicyErrorBody,
    apigateway_projects_locations_apis_configs_get_iam_policy_error_mapper,
)
from .errors.apigateway_projects_locations_apis_configs_list_error import (
    ApigatewayProjectsLocationsApisConfigsListErrorBody,
    apigateway_projects_locations_apis_configs_list_error_mapper,
)
from .errors.apigateway_projects_locations_apis_configs_patch_error import (
    ApigatewayProjectsLocationsApisConfigsPatchErrorBody,
    apigateway_projects_locations_apis_configs_patch_error_mapper,
)
from .errors.apigateway_projects_locations_apis_configs_set_iam_policy_error import (
    ApigatewayProjectsLocationsApisConfigsSetIamPolicyErrorBody,
    apigateway_projects_locations_apis_configs_set_iam_policy_error_mapper,
)
from .errors.apigateway_projects_locations_apis_configs_test_iam_permissions_error import (
    ApigatewayProjectsLocationsApisConfigsTestIamPermissionsErrorBody,
    apigateway_projects_locations_apis_configs_test_iam_permissions_error_mapper,
)
from .errors.apigateway_projects_locations_apis_create_error import (
    ApigatewayProjectsLocationsApisCreateErrorBody,
    apigateway_projects_locations_apis_create_error_mapper,
)
from .errors.apigateway_projects_locations_apis_delete_error import (
    ApigatewayProjectsLocationsApisDeleteErrorBody,
    apigateway_projects_locations_apis_delete_error_mapper,
)
from .errors.apigateway_projects_locations_apis_get_error import (
    ApigatewayProjectsLocationsApisGetErrorBody,
    apigateway_projects_locations_apis_get_error_mapper,
)
from .errors.apigateway_projects_locations_apis_get_iam_policy_error import (
    ApigatewayProjectsLocationsApisGetIamPolicyErrorBody,
    apigateway_projects_locations_apis_get_iam_policy_error_mapper,
)
from .errors.apigateway_projects_locations_apis_list_error import (
    ApigatewayProjectsLocationsApisListErrorBody,
    apigateway_projects_locations_apis_list_error_mapper,
)
from .errors.apigateway_projects_locations_apis_patch_error import (
    ApigatewayProjectsLocationsApisPatchErrorBody,
    apigateway_projects_locations_apis_patch_error_mapper,
)
from .errors.apigateway_projects_locations_apis_set_iam_policy_error import (
    ApigatewayProjectsLocationsApisSetIamPolicyErrorBody,
    apigateway_projects_locations_apis_set_iam_policy_error_mapper,
)
from .errors.apigateway_projects_locations_apis_test_iam_permissions_error import (
    ApigatewayProjectsLocationsApisTestIamPermissionsErrorBody,
    apigateway_projects_locations_apis_test_iam_permissions_error_mapper,
)
from .errors.apigateway_projects_locations_gateways_create_error import (
    ApigatewayProjectsLocationsGatewaysCreateErrorBody,
    apigateway_projects_locations_gateways_create_error_mapper,
)
from .errors.apigateway_projects_locations_gateways_delete_error import (
    ApigatewayProjectsLocationsGatewaysDeleteErrorBody,
    apigateway_projects_locations_gateways_delete_error_mapper,
)
from .errors.apigateway_projects_locations_gateways_get_error import (
    ApigatewayProjectsLocationsGatewaysGetErrorBody,
    apigateway_projects_locations_gateways_get_error_mapper,
)
from .errors.apigateway_projects_locations_gateways_get_iam_policy_error import (
    ApigatewayProjectsLocationsGatewaysGetIamPolicyErrorBody,
    apigateway_projects_locations_gateways_get_iam_policy_error_mapper,
)
from .errors.apigateway_projects_locations_gateways_list_error import (
    ApigatewayProjectsLocationsGatewaysListErrorBody,
    apigateway_projects_locations_gateways_list_error_mapper,
)
from .errors.apigateway_projects_locations_gateways_patch_error import (
    ApigatewayProjectsLocationsGatewaysPatchErrorBody,
    apigateway_projects_locations_gateways_patch_error_mapper,
)
from .errors.apigateway_projects_locations_gateways_set_iam_policy_error import (
    ApigatewayProjectsLocationsGatewaysSetIamPolicyErrorBody,
    apigateway_projects_locations_gateways_set_iam_policy_error_mapper,
)
from .errors.apigateway_projects_locations_gateways_test_iam_permissions_error import (
    ApigatewayProjectsLocationsGatewaysTestIamPermissionsErrorBody,
    apigateway_projects_locations_gateways_test_iam_permissions_error_mapper,
)
from .errors.apigateway_projects_locations_get_error import (
    ApigatewayProjectsLocationsGetErrorBody,
    apigateway_projects_locations_get_error_mapper,
)
from .errors.apigateway_projects_locations_list_error import (
    ApigatewayProjectsLocationsListErrorBody,
    apigateway_projects_locations_list_error_mapper,
)
from .errors.apigateway_projects_locations_operations_cancel_error import (
    ApigatewayProjectsLocationsOperationsCancelErrorBody,
    apigateway_projects_locations_operations_cancel_error_mapper,
)
from .errors.apigateway_projects_locations_operations_delete_error import (
    ApigatewayProjectsLocationsOperationsDeleteErrorBody,
    apigateway_projects_locations_operations_delete_error_mapper,
)
from .errors.apigateway_projects_locations_operations_get_error import (
    ApigatewayProjectsLocationsOperationsGetErrorBody,
    apigateway_projects_locations_operations_get_error_mapper,
)
from .errors.apigateway_projects_locations_operations_list_error import (
    ApigatewayProjectsLocationsOperationsListErrorBody,
    apigateway_projects_locations_operations_list_error_mapper,
)
from .models.apigateway_api import ApigatewayApi, ApigatewayApiDict
from .models.apigateway_api_config import ApigatewayApiConfig, ApigatewayApiConfigDict
from .models.apigateway_gateway import ApigatewayGateway, ApigatewayGatewayDict
from .models.apigateway_list_api_configs_response import ApigatewayListApiConfigsResponse
from .models.apigateway_list_apis_response import ApigatewayListApisResponse
from .models.apigateway_list_gateways_response import ApigatewayListGatewaysResponse
from .models.apigateway_list_locations_response import ApigatewayListLocationsResponse
from .models.apigateway_list_operations_response import ApigatewayListOperationsResponse
from .models.apigateway_location import ApigatewayLocation
from .models.apigateway_operation import ApigatewayOperation
from .models.apigateway_policy import ApigatewayPolicy
from .models.apigateway_set_iam_policy_request import ApigatewaySetIamPolicyRequest, ApigatewaySetIamPolicyRequestDict
from .models.apigateway_test_iam_permissions_request import (
    ApigatewayTestIamPermissionsRequest,
    ApigatewayTestIamPermissionsRequestDict,
)
from .models.apigateway_test_iam_permissions_response import ApigatewayTestIamPermissionsResponse
from .models.enums.view import ViewOrStr
from .server.server import Server
from .server.server_config import ServerConfigOrDict


class GoogleCloudApiGatewayClient(BaseGoogleCloudApiGatewayClient[RawClient]):
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
                param[str]("User-Agent", "GoogleCloudApiGatewayClient/v1 Python"),
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

    def apigateway_projects_locations_apis_configs_create(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        body: ApigatewayApiConfig | ApigatewayApiConfigDict,
        *,
        api_config_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayOperation:
        """Creates a new ApiConfig in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            body: The request body.
            api_config_id: Required. Identifier to assign to the API Config. Must be unique within scope of the parent
                resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_apis_configs_create(
                projects_id, locations_id, apis_id, body, api_config_id=api_config_id, request_options=request_options
            ),
        )

    def apigateway_projects_locations_apis_configs_delete(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        configs_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayOperation:
        """Deletes a single ApiConfig.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            configs_id: Resource name segment (configsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_apis_configs_delete(
                projects_id, locations_id, apis_id, configs_id, request_options=request_options
            ),
        )

    def apigateway_projects_locations_apis_configs_get(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        configs_id: str,
        *,
        view: ViewOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayApiConfig:
        """Gets details of a single ApiConfig.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            configs_id: Resource name segment (configsId).
            view: Optional. Specifies which fields of the API Config are returned in the response. Defaults to ``BASIC``
                view.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_apis_configs_get(
                projects_id, locations_id, apis_id, configs_id, view=view, request_options=request_options
            ),
        )

    def apigateway_projects_locations_apis_configs_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        configs_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayPolicy:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            configs_id: Resource name segment (configsId).
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
            self.with_raw_response.apigateway_projects_locations_apis_configs_get_iam_policy(
                projects_id,
                locations_id,
                apis_id,
                configs_id,
                options_requested_policy_version=options_requested_policy_version,
                request_options=request_options,
            ),
        )

    def apigateway_projects_locations_apis_configs_list(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayListApiConfigsResponse:
        """Lists ApiConfigs in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            filter_: Optional. Filter.
            order_by: Optional. Order by parameters.
            page_size: Optional. Page size.
            page_token: Optional. Page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_apis_configs_list(
                projects_id,
                locations_id,
                apis_id,
                filter_=filter_,
                order_by=order_by,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def apigateway_projects_locations_apis_configs_patch(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        configs_id: str,
        body: ApigatewayApiConfig | ApigatewayApiConfigDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayOperation:
        """Updates the parameters of a single ApiConfig.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            configs_id: Resource name segment (configsId).
            body: The request body.
            update_mask: Optional. Field mask is used to specify the fields to be overwritten in the ApiConfig resource
                by the update. The fields specified in the update_mask are relative to the resource, not the full
                request. A field will be overwritten if it is in the mask. The request fails if ``update_mask`` is
                missing or empty.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_apis_configs_patch(
                projects_id,
                locations_id,
                apis_id,
                configs_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    def apigateway_projects_locations_apis_configs_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        configs_id: str,
        body: ApigatewaySetIamPolicyRequest | ApigatewaySetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayPolicy:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            configs_id: Resource name segment (configsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_apis_configs_set_iam_policy(
                projects_id, locations_id, apis_id, configs_id, body, request_options=request_options
            ),
        )

    def apigateway_projects_locations_apis_configs_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        configs_id: str,
        body: ApigatewayTestIamPermissionsRequest | ApigatewayTestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayTestIamPermissionsResponse:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            configs_id: Resource name segment (configsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_apis_configs_test_iam_permissions(
                projects_id, locations_id, apis_id, configs_id, body, request_options=request_options
            ),
        )

    def apigateway_projects_locations_apis_create(
        self,
        projects_id: str,
        locations_id: str,
        body: ApigatewayApi | ApigatewayApiDict,
        *,
        api_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayOperation:
        """Creates a new Api in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            api_id: Required. Identifier to assign to the API. Must be unique within scope of the parent resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_apis_create(
                projects_id, locations_id, body, api_id=api_id, request_options=request_options
            ),
        )

    def apigateway_projects_locations_apis_delete(
        self, projects_id: str, locations_id: str, apis_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApigatewayOperation:
        """Deletes a single Api.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_apis_delete(
                projects_id, locations_id, apis_id, request_options=request_options
            ),
        )

    def apigateway_projects_locations_apis_get(
        self, projects_id: str, locations_id: str, apis_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApigatewayApi:
        """Gets details of a single Api.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_apis_get(
                projects_id, locations_id, apis_id, request_options=request_options
            ),
        )

    def apigateway_projects_locations_apis_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayPolicy:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
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
            self.with_raw_response.apigateway_projects_locations_apis_get_iam_policy(
                projects_id,
                locations_id,
                apis_id,
                options_requested_policy_version=options_requested_policy_version,
                request_options=request_options,
            ),
        )

    def apigateway_projects_locations_apis_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayListApisResponse:
        """Lists Apis in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. Filter.
            order_by: Optional. Order by parameters.
            page_size: Optional. Page size.
            page_token: Optional. Page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_apis_list(
                projects_id,
                locations_id,
                filter_=filter_,
                order_by=order_by,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def apigateway_projects_locations_apis_patch(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        body: ApigatewayApi | ApigatewayApiDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayOperation:
        """Updates the parameters of a single Api.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            body: The request body.
            update_mask: Optional. Field mask is used to specify the fields to be overwritten in the Api resource by the
                update. The fields specified in the update_mask are relative to the resource, not the full request. A
                field will be overwritten if it is in the mask. The request fails if ``update_mask`` is missing or
                empty.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_apis_patch(
                projects_id, locations_id, apis_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    def apigateway_projects_locations_apis_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        body: ApigatewaySetIamPolicyRequest | ApigatewaySetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayPolicy:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_apis_set_iam_policy(
                projects_id, locations_id, apis_id, body, request_options=request_options
            ),
        )

    def apigateway_projects_locations_apis_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        body: ApigatewayTestIamPermissionsRequest | ApigatewayTestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayTestIamPermissionsResponse:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_apis_test_iam_permissions(
                projects_id, locations_id, apis_id, body, request_options=request_options
            ),
        )

    def apigateway_projects_locations_gateways_create(
        self,
        projects_id: str,
        locations_id: str,
        body: ApigatewayGateway | ApigatewayGatewayDict,
        *,
        gateway_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayOperation:
        """Creates a new Gateway in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            gateway_id: Required. Identifier to assign to the Gateway. Must be unique within scope of the parent
                resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_gateways_create(
                projects_id, locations_id, body, gateway_id=gateway_id, request_options=request_options
            ),
        )

    def apigateway_projects_locations_gateways_delete(
        self,
        projects_id: str,
        locations_id: str,
        gateways_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayOperation:
        """Deletes a single Gateway.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            gateways_id: Resource name segment (gatewaysId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_gateways_delete(
                projects_id, locations_id, gateways_id, request_options=request_options
            ),
        )

    def apigateway_projects_locations_gateways_get(
        self,
        projects_id: str,
        locations_id: str,
        gateways_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayGateway:
        """Gets details of a single Gateway.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            gateways_id: Resource name segment (gatewaysId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_gateways_get(
                projects_id, locations_id, gateways_id, request_options=request_options
            ),
        )

    def apigateway_projects_locations_gateways_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        gateways_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayPolicy:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            gateways_id: Resource name segment (gatewaysId).
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
            self.with_raw_response.apigateway_projects_locations_gateways_get_iam_policy(
                projects_id,
                locations_id,
                gateways_id,
                options_requested_policy_version=options_requested_policy_version,
                request_options=request_options,
            ),
        )

    def apigateway_projects_locations_gateways_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayListGatewaysResponse:
        """Lists Gateways in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. Filter.
            order_by: Optional. Order by parameters.
            page_size: Optional. Page size.
            page_token: Optional. Page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_gateways_list(
                projects_id,
                locations_id,
                filter_=filter_,
                order_by=order_by,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def apigateway_projects_locations_gateways_patch(
        self,
        projects_id: str,
        locations_id: str,
        gateways_id: str,
        body: ApigatewayGateway | ApigatewayGatewayDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayOperation:
        """Updates the parameters of a single Gateway.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            gateways_id: Resource name segment (gatewaysId).
            body: The request body.
            update_mask: Optional. Field mask is used to specify the fields to be overwritten in the Gateway resource by
                the update. The fields specified in the update_mask are relative to the resource, not the full request.
                A field will be overwritten if it is in the mask. The request fails if ``update_mask`` is missing or
                empty.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_gateways_patch(
                projects_id, locations_id, gateways_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    def apigateway_projects_locations_gateways_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        gateways_id: str,
        body: ApigatewaySetIamPolicyRequest | ApigatewaySetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayPolicy:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            gateways_id: Resource name segment (gatewaysId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_gateways_set_iam_policy(
                projects_id, locations_id, gateways_id, body, request_options=request_options
            ),
        )

    def apigateway_projects_locations_gateways_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        gateways_id: str,
        body: ApigatewayTestIamPermissionsRequest | ApigatewayTestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayTestIamPermissionsResponse:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            gateways_id: Resource name segment (gatewaysId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.apigateway_projects_locations_gateways_test_iam_permissions(
                projects_id, locations_id, gateways_id, body, request_options=request_options
            ),
        )

    def apigateway_projects_locations_get(
        self, projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApigatewayLocation:
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
            self.with_raw_response.apigateway_projects_locations_get(
                projects_id, locations_id, request_options=request_options
            ),
        )

    def apigateway_projects_locations_list(
        self,
        projects_id: str,
        *,
        extra_location_types: list[str] | None = None,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayListLocationsResponse:
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
            self.with_raw_response.apigateway_projects_locations_list(
                projects_id,
                extra_location_types=extra_location_types,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def apigateway_projects_locations_operations_cancel(
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
            self.with_raw_response.apigateway_projects_locations_operations_cancel(
                projects_id, locations_id, operations_id, body, request_options=request_options
            ),
        )

    def apigateway_projects_locations_operations_delete(
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
            self.with_raw_response.apigateway_projects_locations_operations_delete(
                projects_id, locations_id, operations_id, request_options=request_options
            ),
        )

    def apigateway_projects_locations_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayOperation:
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
            self.with_raw_response.apigateway_projects_locations_operations_get(
                projects_id, locations_id, operations_id, request_options=request_options
            ),
        )

    def apigateway_projects_locations_operations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApigatewayListOperationsResponse:
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
            self.with_raw_response.apigateway_projects_locations_operations_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                return_partial_success=return_partial_success,
                request_options=request_options,
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
    def apigateway_projects_locations_apis_configs_create(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        body: ApigatewayApiConfig | ApigatewayApiConfigDict,
        *,
        api_config_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsApisConfigsCreateErrorBody]:
        """Creates a new ApiConfig in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            body: The request body.
            api_config_id: Required. Identifier to assign to the API Config. Must be unique within scope of the parent
                resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
            ],
            query_params=[param[str | None]("apiConfigId", api_config_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApigatewayApiConfig | ApigatewayApiConfigDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayOperation],
            error_mapper=apigateway_projects_locations_apis_configs_create_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_apis_configs_delete(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        configs_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsApisConfigsDeleteErrorBody]:
        """Deletes a single ApiConfig.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            configs_id: Resource name segment (configsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("configsId", configs_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayOperation],
            error_mapper=apigateway_projects_locations_apis_configs_delete_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_apis_configs_get(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        configs_id: str,
        *,
        view: ViewOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayApiConfig, ApigatewayProjectsLocationsApisConfigsGetErrorBody]:
        """Gets details of a single ApiConfig.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            configs_id: Resource name segment (configsId).
            view: Optional. Specifies which fields of the API Config are returned in the response. Defaults to ``BASIC``
                view.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("configsId", configs_id),
            ],
            query_params=[param[ViewOrStr | None]("view", view)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayApiConfig],
            error_mapper=apigateway_projects_locations_apis_configs_get_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_apis_configs_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        configs_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayPolicy, ApigatewayProjectsLocationsApisConfigsGetIamPolicyErrorBody]:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            configs_id: Resource name segment (configsId).
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
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}:getIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("configsId", configs_id),
            ],
            query_params=[param[int | None]("options.requestedPolicyVersion", options_requested_policy_version)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayPolicy],
            error_mapper=apigateway_projects_locations_apis_configs_get_iam_policy_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_apis_configs_list(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayListApiConfigsResponse, ApigatewayProjectsLocationsApisConfigsListErrorBody]:
        """Lists ApiConfigs in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            filter_: Optional. Filter.
            order_by: Optional. Order by parameters.
            page_size: Optional. Page size.
            page_token: Optional. Page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
            ],
            query_params=[
                param[str | None]("filter", filter_),
                param[str | None]("orderBy", order_by),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayListApiConfigsResponse],
            error_mapper=apigateway_projects_locations_apis_configs_list_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_apis_configs_patch(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        configs_id: str,
        body: ApigatewayApiConfig | ApigatewayApiConfigDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsApisConfigsPatchErrorBody]:
        """Updates the parameters of a single ApiConfig.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            configs_id: Resource name segment (configsId).
            body: The request body.
            update_mask: Optional. Field mask is used to specify the fields to be overwritten in the ApiConfig resource
                by the update. The fields specified in the update_mask are relative to the resource, not the full
                request. A field will be overwritten if it is in the mask. The request fails if ``update_mask`` is
                missing or empty.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("configsId", configs_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApigatewayApiConfig | ApigatewayApiConfigDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayOperation],
            error_mapper=apigateway_projects_locations_apis_configs_patch_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_apis_configs_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        configs_id: str,
        body: ApigatewaySetIamPolicyRequest | ApigatewaySetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayPolicy, ApigatewayProjectsLocationsApisConfigsSetIamPolicyErrorBody]:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            configs_id: Resource name segment (configsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}:setIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("configsId", configs_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApigatewaySetIamPolicyRequest | ApigatewaySetIamPolicyRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayPolicy],
            error_mapper=apigateway_projects_locations_apis_configs_set_iam_policy_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_apis_configs_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        configs_id: str,
        body: ApigatewayTestIamPermissionsRequest | ApigatewayTestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ApigatewayTestIamPermissionsResponse, ApigatewayProjectsLocationsApisConfigsTestIamPermissionsErrorBody
    ]:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            configs_id: Resource name segment (configsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}:testIamPermissions"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("configsId", configs_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApigatewayTestIamPermissionsRequest | ApigatewayTestIamPermissionsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayTestIamPermissionsResponse],
            error_mapper=apigateway_projects_locations_apis_configs_test_iam_permissions_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_apis_create(
        self,
        projects_id: str,
        locations_id: str,
        body: ApigatewayApi | ApigatewayApiDict,
        *,
        api_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsApisCreateErrorBody]:
        """Creates a new Api in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            api_id: Required. Identifier to assign to the API. Must be unique within scope of the parent resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/apis"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApigatewayApi | ApigatewayApiDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayOperation],
            error_mapper=apigateway_projects_locations_apis_create_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_apis_delete(
        self, projects_id: str, locations_id: str, apis_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsApisDeleteErrorBody]:
        """Deletes a single Api.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayOperation],
            error_mapper=apigateway_projects_locations_apis_delete_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_apis_get(
        self, projects_id: str, locations_id: str, apis_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApigatewayApi, ApigatewayProjectsLocationsApisGetErrorBody]:
        """Gets details of a single Api.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayApi],
            error_mapper=apigateway_projects_locations_apis_get_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_apis_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayPolicy, ApigatewayProjectsLocationsApisGetIamPolicyErrorBody]:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
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
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}:getIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
            ],
            query_params=[param[int | None]("options.requestedPolicyVersion", options_requested_policy_version)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayPolicy],
            error_mapper=apigateway_projects_locations_apis_get_iam_policy_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_apis_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayListApisResponse, ApigatewayProjectsLocationsApisListErrorBody]:
        """Lists Apis in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. Filter.
            order_by: Optional. Order by parameters.
            page_size: Optional. Page size.
            page_token: Optional. Page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/apis"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[str | None]("orderBy", order_by),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayListApisResponse],
            error_mapper=apigateway_projects_locations_apis_list_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_apis_patch(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        body: ApigatewayApi | ApigatewayApiDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsApisPatchErrorBody]:
        """Updates the parameters of a single Api.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            body: The request body.
            update_mask: Optional. Field mask is used to specify the fields to be overwritten in the Api resource by the
                update. The fields specified in the update_mask are relative to the resource, not the full request. A
                field will be overwritten if it is in the mask. The request fails if ``update_mask`` is missing or
                empty.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApigatewayApi | ApigatewayApiDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayOperation],
            error_mapper=apigateway_projects_locations_apis_patch_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_apis_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        body: ApigatewaySetIamPolicyRequest | ApigatewaySetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayPolicy, ApigatewayProjectsLocationsApisSetIamPolicyErrorBody]:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}:setIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApigatewaySetIamPolicyRequest | ApigatewaySetIamPolicyRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayPolicy],
            error_mapper=apigateway_projects_locations_apis_set_iam_policy_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_apis_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        body: ApigatewayTestIamPermissionsRequest | ApigatewayTestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayTestIamPermissionsResponse, ApigatewayProjectsLocationsApisTestIamPermissionsErrorBody]:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}:testIamPermissions"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApigatewayTestIamPermissionsRequest | ApigatewayTestIamPermissionsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayTestIamPermissionsResponse],
            error_mapper=apigateway_projects_locations_apis_test_iam_permissions_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_gateways_create(
        self,
        projects_id: str,
        locations_id: str,
        body: ApigatewayGateway | ApigatewayGatewayDict,
        *,
        gateway_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsGatewaysCreateErrorBody]:
        """Creates a new Gateway in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            gateway_id: Required. Identifier to assign to the Gateway. Must be unique within scope of the parent
                resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/gateways"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("gatewayId", gateway_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApigatewayGateway | ApigatewayGatewayDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayOperation],
            error_mapper=apigateway_projects_locations_gateways_create_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_gateways_delete(
        self,
        projects_id: str,
        locations_id: str,
        gateways_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsGatewaysDeleteErrorBody]:
        """Deletes a single Gateway.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            gateways_id: Resource name segment (gatewaysId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("gatewaysId", gateways_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayOperation],
            error_mapper=apigateway_projects_locations_gateways_delete_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_gateways_get(
        self,
        projects_id: str,
        locations_id: str,
        gateways_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayGateway, ApigatewayProjectsLocationsGatewaysGetErrorBody]:
        """Gets details of a single Gateway.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            gateways_id: Resource name segment (gatewaysId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("gatewaysId", gateways_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayGateway],
            error_mapper=apigateway_projects_locations_gateways_get_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_gateways_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        gateways_id: str,
        *,
        options_requested_policy_version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayPolicy, ApigatewayProjectsLocationsGatewaysGetIamPolicyErrorBody]:
        """Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not
        have a policy set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            gateways_id: Resource name segment (gatewaysId).
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
                "/v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}:getIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("gatewaysId", gateways_id),
            ],
            query_params=[param[int | None]("options.requestedPolicyVersion", options_requested_policy_version)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayPolicy],
            error_mapper=apigateway_projects_locations_gateways_get_iam_policy_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_gateways_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayListGatewaysResponse, ApigatewayProjectsLocationsGatewaysListErrorBody]:
        """Lists Gateways in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. Filter.
            order_by: Optional. Order by parameters.
            page_size: Optional. Page size.
            page_token: Optional. Page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/gateways"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[str | None]("orderBy", order_by),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayListGatewaysResponse],
            error_mapper=apigateway_projects_locations_gateways_list_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_gateways_patch(
        self,
        projects_id: str,
        locations_id: str,
        gateways_id: str,
        body: ApigatewayGateway | ApigatewayGatewayDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsGatewaysPatchErrorBody]:
        """Updates the parameters of a single Gateway.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            gateways_id: Resource name segment (gatewaysId).
            body: The request body.
            update_mask: Optional. Field mask is used to specify the fields to be overwritten in the Gateway resource by
                the update. The fields specified in the update_mask are relative to the resource, not the full request.
                A field will be overwritten if it is in the mask. The request fails if ``update_mask`` is missing or
                empty.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("gatewaysId", gateways_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApigatewayGateway | ApigatewayGatewayDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayOperation],
            error_mapper=apigateway_projects_locations_gateways_patch_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_gateways_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        gateways_id: str,
        body: ApigatewaySetIamPolicyRequest | ApigatewaySetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayPolicy, ApigatewayProjectsLocationsGatewaysSetIamPolicyErrorBody]:
        """Sets the access control policy on the specified resource. Replaces any existing policy. Can return
        ``NOT_FOUND``, ``INVALID_ARGUMENT``, and ``PERMISSION_DENIED`` errors.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            gateways_id: Resource name segment (gatewaysId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}:setIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("gatewaysId", gateways_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApigatewaySetIamPolicyRequest | ApigatewaySetIamPolicyRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayPolicy],
            error_mapper=apigateway_projects_locations_gateways_set_iam_policy_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_gateways_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        gateways_id: str,
        body: ApigatewayTestIamPermissionsRequest | ApigatewayTestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ApigatewayTestIamPermissionsResponse, ApigatewayProjectsLocationsGatewaysTestIamPermissionsErrorBody
    ]:
        """Returns permissions that a caller has on the specified resource. If the resource does not exist, this will
        return an empty set of permissions, not a ``NOT_FOUND`` error. Note: This operation is designed to be used for
        building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail
        open" without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            gateways_id: Resource name segment (gatewaysId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}:testIamPermissions"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("gatewaysId", gateways_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApigatewayTestIamPermissionsRequest | ApigatewayTestIamPermissionsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ApigatewayTestIamPermissionsResponse],
            error_mapper=apigateway_projects_locations_gateways_test_iam_permissions_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_get(
        self, projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApigatewayLocation, ApigatewayProjectsLocationsGetErrorBody]:
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
            decoder=json_decoder[ApigatewayLocation],
            error_mapper=apigateway_projects_locations_get_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_list(
        self,
        projects_id: str,
        *,
        extra_location_types: list[str] | None = None,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayListLocationsResponse, ApigatewayProjectsLocationsListErrorBody]:
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
            decoder=json_decoder[ApigatewayListLocationsResponse],
            error_mapper=apigateway_projects_locations_list_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_operations_cancel(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApigatewayProjectsLocationsOperationsCancelErrorBody]:
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
            error_mapper=apigateway_projects_locations_operations_cancel_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_operations_delete(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApigatewayProjectsLocationsOperationsDeleteErrorBody]:
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
            error_mapper=apigateway_projects_locations_operations_delete_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsOperationsGetErrorBody]:
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
            decoder=json_decoder[ApigatewayOperation],
            error_mapper=apigateway_projects_locations_operations_get_error_mapper,
            request_options=request_options,
        )

    def apigateway_projects_locations_operations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApigatewayListOperationsResponse, ApigatewayProjectsLocationsOperationsListErrorBody]:
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
            decoder=json_decoder[ApigatewayListOperationsResponse],
            error_mapper=apigateway_projects_locations_operations_list_error_mapper,
            request_options=request_options,
        )


Client = GoogleCloudApiGatewayClient
