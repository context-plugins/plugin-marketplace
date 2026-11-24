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
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.add_ssh_key_error import AddSshKeyErrorBody, add_ssh_key_error_mapper
from ..errors.create_checkout_key2_error import CreateCheckoutKey2ErrorBody, create_checkout_key2_error_mapper
from ..errors.delete_checkout_key2_error import DeleteCheckoutKey2ErrorBody, delete_checkout_key2_error_mapper
from ..errors.get_checkout_key2_error import GetCheckoutKey2ErrorBody, get_checkout_key2_error_mapper
from ..errors.list_checkout_keys2_error import ListCheckoutKeys2ErrorBody, list_checkout_keys2_error_mapper
from ..models.checkout_key_circle_ci_rest_api_v1_ssh_key_api import CheckoutKeyCircleCiRestApiV1SshKeyApi
from ..models.enums.vcs_type import VcsTypeOrStr
from ..models.project_project_checkout_key_fingerprint_response import ProjectProjectCheckoutKeyFingerprintResponse
from ..models.project_project_checkout_key_request import (
    ProjectProjectCheckoutKeyRequest,
    ProjectProjectCheckoutKeyRequestDict,
)
from ..models.project_project_ssh_key_request import ProjectProjectSshKeyRequest, ProjectProjectSshKeyRequestDict
from ..server.server import Server


class SshKey:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SshKeyWithRawResponse(client, server, auth)

    def add_ssh_key(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        body: ProjectProjectSshKeyRequest | ProjectProjectSshKeyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Adds an SSH key to the specified project for use in builds.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SSH key added successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.add_ssh_key(vcs_type, username, project, body, request_options=request_options)
        )

    def create_checkout_key2(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        body: ProjectProjectCheckoutKeyRequest | ProjectProjectCheckoutKeyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CheckoutKeyCircleCiRestApiV1SshKeyApi:
        """Creates a new checkout key for the specified project.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Checkout key created successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.create_checkout_key2(
                vcs_type, username, project, body, request_options=request_options
            ),
        )

    def delete_checkout_key2(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        fingerprint: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProjectProjectCheckoutKeyFingerprintResponse:
        """Deletes a checkout key by its fingerprint.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            fingerprint: The fingerprint of the checkout key
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Checkout key deleted successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_checkout_key2(
                vcs_type, username, project, fingerprint, request_options=request_options
            ),
        )

    def get_checkout_key2(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        fingerprint: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CheckoutKeyCircleCiRestApiV1SshKeyApi:
        """Returns a checkout key by its fingerprint.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            fingerprint: The fingerprint of the checkout key
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved checkout key

        Raises:
            ApiError: Unauthorized Checkout key not found ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_checkout_key2(
                vcs_type, username, project, fingerprint, request_options=request_options
            ),
        )

    def list_checkout_keys2(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[CheckoutKeyCircleCiRestApiV1SshKeyApi]:
        """Returns a list of checkout keys for the specified project.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved checkout keys

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_checkout_keys2(vcs_type, username, project, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> SshKeyWithRawResponse:
        return self._with_raw_response


class AsyncSshKey:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSshKeyWithRawResponse(client, server, auth)

    async def add_ssh_key(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        body: ProjectProjectSshKeyRequest | ProjectProjectSshKeyRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Adds an SSH key to the specified project for use in builds.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SSH key added successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.add_ssh_key(
                vcs_type, username, project, body, request_options=request_options
            ),
        )

    async def create_checkout_key2(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        body: ProjectProjectCheckoutKeyRequest | ProjectProjectCheckoutKeyRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CheckoutKeyCircleCiRestApiV1SshKeyApi:
        """Creates a new checkout key for the specified project.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Checkout key created successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_checkout_key2(
                vcs_type, username, project, body, request_options=request_options
            ),
        )

    async def delete_checkout_key2(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        fingerprint: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProjectProjectCheckoutKeyFingerprintResponse:
        """Deletes a checkout key by its fingerprint.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            fingerprint: The fingerprint of the checkout key
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Checkout key deleted successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_checkout_key2(
                vcs_type, username, project, fingerprint, request_options=request_options
            ),
        )

    async def get_checkout_key2(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        fingerprint: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CheckoutKeyCircleCiRestApiV1SshKeyApi:
        """Returns a checkout key by its fingerprint.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            fingerprint: The fingerprint of the checkout key
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved checkout key

        Raises:
            ApiError: Unauthorized Checkout key not found ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_checkout_key2(
                vcs_type, username, project, fingerprint, request_options=request_options
            ),
        )

    async def list_checkout_keys2(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[CheckoutKeyCircleCiRestApiV1SshKeyApi]:
        """Returns a list of checkout keys for the specified project.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved checkout keys

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_checkout_keys2(
                vcs_type, username, project, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSshKeyWithRawResponse:
        return self._with_raw_response


class SshKeyWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def add_ssh_key(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        body: ProjectProjectSshKeyRequest | ProjectProjectSshKeyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AddSshKeyErrorBody]:
        """Adds an SSH key to the specified project for use in builds.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/ssh-key"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProjectProjectSshKeyRequest | ProjectProjectSshKeyRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=add_ssh_key_error_mapper,
            request_options=request_options,
        )

    def create_checkout_key2(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        body: ProjectProjectCheckoutKeyRequest | ProjectProjectCheckoutKeyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CheckoutKeyCircleCiRestApiV1SshKeyApi, CreateCheckoutKey2ErrorBody]:
        """Creates a new checkout key for the specified project.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/checkout-key"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProjectProjectCheckoutKeyRequest | ProjectProjectCheckoutKeyRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[CheckoutKeyCircleCiRestApiV1SshKeyApi],
            error_mapper=create_checkout_key2_error_mapper,
            request_options=request_options,
        )

    def delete_checkout_key2(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        fingerprint: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProjectProjectCheckoutKeyFingerprintResponse, DeleteCheckoutKey2ErrorBody]:
        """Deletes a checkout key by its fingerprint.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            fingerprint: The fingerprint of the checkout key
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/checkout-key/{fingerprint}"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
                param[str]("fingerprint", fingerprint),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[ProjectProjectCheckoutKeyFingerprintResponse],
            error_mapper=delete_checkout_key2_error_mapper,
            request_options=request_options,
        )

    def get_checkout_key2(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        fingerprint: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CheckoutKeyCircleCiRestApiV1SshKeyApi, GetCheckoutKey2ErrorBody]:
        """Returns a checkout key by its fingerprint.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            fingerprint: The fingerprint of the checkout key
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/checkout-key/{fingerprint}"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
                param[str]("fingerprint", fingerprint),
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[CheckoutKeyCircleCiRestApiV1SshKeyApi],
            error_mapper=get_checkout_key2_error_mapper,
            request_options=request_options,
        )

    def list_checkout_keys2(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CheckoutKeyCircleCiRestApiV1SshKeyApi], ListCheckoutKeys2ErrorBody]:
        """Returns a list of checkout keys for the specified project.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/checkout-key"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[CheckoutKeyCircleCiRestApiV1SshKeyApi]],
            error_mapper=list_checkout_keys2_error_mapper,
            request_options=request_options,
        )


class AsyncSshKeyWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def add_ssh_key(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        body: ProjectProjectSshKeyRequest | ProjectProjectSshKeyRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AddSshKeyErrorBody]:
        """Adds an SSH key to the specified project for use in builds.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/ssh-key"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProjectProjectSshKeyRequest | ProjectProjectSshKeyRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=add_ssh_key_error_mapper,
            request_options=request_options,
        )

    async def create_checkout_key2(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        body: ProjectProjectCheckoutKeyRequest | ProjectProjectCheckoutKeyRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CheckoutKeyCircleCiRestApiV1SshKeyApi, CreateCheckoutKey2ErrorBody]:
        """Creates a new checkout key for the specified project.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/checkout-key"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProjectProjectCheckoutKeyRequest | ProjectProjectCheckoutKeyRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[CheckoutKeyCircleCiRestApiV1SshKeyApi],
            error_mapper=create_checkout_key2_error_mapper,
            request_options=request_options,
        )

    async def delete_checkout_key2(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        fingerprint: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProjectProjectCheckoutKeyFingerprintResponse, DeleteCheckoutKey2ErrorBody]:
        """Deletes a checkout key by its fingerprint.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            fingerprint: The fingerprint of the checkout key
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/checkout-key/{fingerprint}"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
                param[str]("fingerprint", fingerprint),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[ProjectProjectCheckoutKeyFingerprintResponse],
            error_mapper=delete_checkout_key2_error_mapper,
            request_options=request_options,
        )

    async def get_checkout_key2(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        fingerprint: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CheckoutKeyCircleCiRestApiV1SshKeyApi, GetCheckoutKey2ErrorBody]:
        """Returns a checkout key by its fingerprint.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            fingerprint: The fingerprint of the checkout key
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/checkout-key/{fingerprint}"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
                param[str]("fingerprint", fingerprint),
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[CheckoutKeyCircleCiRestApiV1SshKeyApi],
            error_mapper=get_checkout_key2_error_mapper,
            request_options=request_options,
        )

    async def list_checkout_keys2(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CheckoutKeyCircleCiRestApiV1SshKeyApi], ListCheckoutKeys2ErrorBody]:
        """Returns a list of checkout keys for the specified project.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/checkout-key"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[CheckoutKeyCircleCiRestApiV1SshKeyApi]],
            error_mapper=list_checkout_keys2_error_mapper,
            request_options=request_options,
        )
