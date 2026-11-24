from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileInput,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileInput,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    file_part,
    json_decoder,
    multipart_body,
    param,
    unwrap,
)
from ..errors.delete_api_spec_error import DeleteApiSpecErrorBody, delete_api_spec_error_mapper
from ..errors.delete_attachment_error import DeleteAttachmentErrorBody, delete_attachment_error_mapper
from ..errors.get_attachment_error import GetAttachmentErrorBody, get_attachment_error_mapper
from ..errors.upload_api_spec_error import UploadApiSpecErrorBody, upload_api_spec_error_mapper
from ..errors.upload_attachment_error import UploadAttachmentErrorBody, upload_attachment_error_mapper
from ..models.attachment import Attachment
from ..server.server import Server


class AttachmentRestController:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AttachmentRestControllerWithRawResponse(client, server, auth)

    def delete_api_spec(self, component_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> str:
        """Delete the API spec file for a component.

        Args:
            component_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the API spec deletion is successful.

        Raises:
            ApiError: Returned if the user is not authorized to delete API specs. Returned if the component is not
                found. ``error`` is ``str | RawError``."""
        return unwrap(self._with_raw_response.delete_api_spec(component_id, request_options=request_options))

    def delete_attachment(
        self, component_id: UUID, forge_app_id: str, key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete file attached to a component. If you need to have attachment upload enabled for your Compass Forge
        app, contact Atlassian support.

        Args:
            component_id: Value sent with the request.
            forge_app_id: Value sent with the request.
            key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the file delete is successful.

        Raises:
            ApiError: Returned if the request is not valid. Returned if the Forge app does not have attachment upload
                enabled. If your Compass Forge app needs this functionality enabled, contact Atlassian support. Returned
                if the component is not found. ``error`` is ``ErrorResponseDto | RawError``."""
        return unwrap(
            self._with_raw_response.delete_attachment(component_id, forge_app_id, key, request_options=request_options)
        )

    def get_attachment(
        self, component_id: UUID, forge_app_id: str, key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Attachment:
        """Get a file attached to a component. If you need to have attachment upload enabled for your Compass Forge app,
        contact Atlassian support.

        Args:
            component_id: Value sent with the request.
            forge_app_id: Value sent with the request.
            key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the file exists.

        Raises:
            ApiError: Returned if the request is not valid. Returned if the Forge app does not have attachment upload
                enabled. If your Compass Forge app needs this functionality enabled, contact Atlassian support. Returned
                if the component or attachment is not found. ``error`` is ``ErrorResponseDto | RawError``."""
        return unwrap(
            self._with_raw_response.get_attachment(component_id, forge_app_id, key, request_options=request_options)
        )

    def upload_api_spec(
        self, component_id: UUID, file: FileInput, *, request_options: RequestOptionsOrDict | None = None
    ) -> str:
        r"""Upload api specs for a component.

        The request body should be a file with the api-spec content.

        Example: This curl command uploads a spec file (swagger.yaml) for the component. ```bash curl --request PUT \
        --url 'https://your-domain.atlassian.net/gateway/api/compass/v1/component/{componentId}/api_specs' \ --user
        'email@example.com:' \ --header 'Content-Type: multipart/form-data' \ --form file=@/path/to/file/swagger.yaml
        ```

        Args:
            component_id: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the file upload is successful.

        Raises:
            ApiError: Returned if the api spec file is not valid. Returned if the user is not authorized to upload API
                specs. Returned if the uploaded file type is not accepted and/or file content cannot be parsed. Accepted
                file types are JSON and YML. ``error`` is ``str | RawError``."""
        return unwrap(self._with_raw_response.upload_api_spec(component_id, file, request_options=request_options))

    def upload_attachment(
        self,
        component_id: UUID,
        forge_app_id: str,
        key: str,
        file: FileInput,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Attachment:
        r"""Attach a file to a component. If you need to have attachment upload enabled for your Compass Forge app,
        contact Atlassian support.

        The request body should be a file.

        Example: This curl command attaches a file to a component. ```bash curl --request PUT \ --url
        'https://your-domain.atlassian.net/gateway/api/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}'
        \ --user 'email@example.com:' \ --header 'Content-Type: multipart/form-data' \ --form
        file=@/path/to/attachment.txt
        ```

        Args:
            component_id: Value sent with the request.
            forge_app_id: Value sent with the request.
            key: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the file upload is successful.

        Raises:
            ApiError: Returned if the request is not valid. Returned if the Forge app does not have attachment upload
                enabled. If your Compass Forge app needs this functionality enabled, contact Atlassian support. Returned
                if the component is not found. Returned if the uploaded file type is not accepted and/or file content
                cannot be parsed. Accepted file types include JSON, YAML, and XML. Returned if the file upload to Optic
                fails for an unexpected reason. ``error`` is ``ErrorResponseDto | RawError``."""
        return unwrap(
            self._with_raw_response.upload_attachment(
                component_id, forge_app_id, key, file, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AttachmentRestControllerWithRawResponse:
        return self._with_raw_response


class AsyncAttachmentRestController:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAttachmentRestControllerWithRawResponse(client, server, auth)

    async def delete_api_spec(
        self, component_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> str:
        """Delete the API spec file for a component.

        Args:
            component_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the API spec deletion is successful.

        Raises:
            ApiError: Returned if the user is not authorized to delete API specs. Returned if the component is not
                found. ``error`` is ``str | RawError``."""
        return unwrap(await self._with_raw_response.delete_api_spec(component_id, request_options=request_options))

    async def delete_attachment(
        self,
        component_id: UUID,
        forge_app_id: str,
        key: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete file attached to a component. If you need to have attachment upload enabled for your Compass Forge
        app, contact Atlassian support.

        Args:
            component_id: Value sent with the request.
            forge_app_id: Value sent with the request.
            key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the file delete is successful.

        Raises:
            ApiError: Returned if the request is not valid. Returned if the Forge app does not have attachment upload
                enabled. If your Compass Forge app needs this functionality enabled, contact Atlassian support. Returned
                if the component is not found. ``error`` is ``ErrorResponseDto | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_attachment(
                component_id, forge_app_id, key, request_options=request_options
            ),
        )

    async def get_attachment(
        self,
        component_id: UUID,
        forge_app_id: str,
        key: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Attachment:
        """Get a file attached to a component. If you need to have attachment upload enabled for your Compass Forge app,
        contact Atlassian support.

        Args:
            component_id: Value sent with the request.
            forge_app_id: Value sent with the request.
            key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the file exists.

        Raises:
            ApiError: Returned if the request is not valid. Returned if the Forge app does not have attachment upload
                enabled. If your Compass Forge app needs this functionality enabled, contact Atlassian support. Returned
                if the component or attachment is not found. ``error`` is ``ErrorResponseDto | RawError``."""
        return unwrap(
            await self._with_raw_response.get_attachment(
                component_id, forge_app_id, key, request_options=request_options
            ),
        )

    async def upload_api_spec(
        self, component_id: UUID, file: AsyncFileInput, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> str:
        r"""Upload api specs for a component.

        The request body should be a file with the api-spec content.

        Example: This curl command uploads a spec file (swagger.yaml) for the component. ```bash curl --request PUT \
        --url 'https://your-domain.atlassian.net/gateway/api/compass/v1/component/{componentId}/api_specs' \ --user
        'email@example.com:' \ --header 'Content-Type: multipart/form-data' \ --form file=@/path/to/file/swagger.yaml
        ```

        Args:
            component_id: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the file upload is successful.

        Raises:
            ApiError: Returned if the api spec file is not valid. Returned if the user is not authorized to upload API
                specs. Returned if the uploaded file type is not accepted and/or file content cannot be parsed. Accepted
                file types are JSON and YML. ``error`` is ``str | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_api_spec(component_id, file, request_options=request_options)
        )

    async def upload_attachment(
        self,
        component_id: UUID,
        forge_app_id: str,
        key: str,
        file: AsyncFileInput,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Attachment:
        r"""Attach a file to a component. If you need to have attachment upload enabled for your Compass Forge app,
        contact Atlassian support.

        The request body should be a file.

        Example: This curl command attaches a file to a component. ```bash curl --request PUT \ --url
        'https://your-domain.atlassian.net/gateway/api/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}'
        \ --user 'email@example.com:' \ --header 'Content-Type: multipart/form-data' \ --form
        file=@/path/to/attachment.txt
        ```

        Args:
            component_id: Value sent with the request.
            forge_app_id: Value sent with the request.
            key: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the file upload is successful.

        Raises:
            ApiError: Returned if the request is not valid. Returned if the Forge app does not have attachment upload
                enabled. If your Compass Forge app needs this functionality enabled, contact Atlassian support. Returned
                if the component is not found. Returned if the uploaded file type is not accepted and/or file content
                cannot be parsed. Accepted file types include JSON, YAML, and XML. Returned if the file upload to Optic
                fails for an unexpected reason. ``error`` is ``ErrorResponseDto | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_attachment(
                component_id, forge_app_id, key, file, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAttachmentRestControllerWithRawResponse:
        return self._with_raw_response


class AttachmentRestControllerWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_api_spec(
        self, component_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[str, DeleteApiSpecErrorBody]:
        """Delete the API spec file for a component.

        Args:
            component_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/compass/v1/component/{componentId}/api_specs"),
            path_params=[param[UUID]("componentId", component_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[str],
            error_mapper=delete_api_spec_error_mapper,
            request_options=request_options,
        )

    def delete_attachment(
        self, component_id: UUID, forge_app_id: str, key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAttachmentErrorBody]:
        """Delete file attached to a component. If you need to have attachment upload enabled for your Compass Forge
        app, contact Atlassian support.

        Args:
            component_id: Value sent with the request.
            forge_app_id: Value sent with the request.
            key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}"),
            path_params=[
                param[UUID]("componentId", component_id), param[str]("forgeAppId", forge_app_id), param[str]("key", key)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=empty_response,
            error_mapper=delete_attachment_error_mapper,
            request_options=request_options,
        )

    def get_attachment(
        self, component_id: UUID, forge_app_id: str, key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Attachment, GetAttachmentErrorBody]:
        """Get a file attached to a component. If you need to have attachment upload enabled for your Compass Forge app,
        contact Atlassian support.

        Args:
            component_id: Value sent with the request.
            forge_app_id: Value sent with the request.
            key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}"),
            path_params=[
                param[UUID]("componentId", component_id), param[str]("forgeAppId", forge_app_id), param[str]("key", key)
            ],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[Attachment],
            error_mapper=get_attachment_error_mapper,
            request_options=request_options,
        )

    def upload_api_spec(
        self, component_id: UUID, file: FileInput, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[str, UploadApiSpecErrorBody]:
        r"""Upload api specs for a component.

        The request body should be a file with the api-spec content.

        Example: This curl command uploads a spec file (swagger.yaml) for the component. ```bash curl --request PUT \
        --url 'https://your-domain.atlassian.net/gateway/api/compass/v1/component/{componentId}/api_specs' \ --user
        'email@example.com:' \ --header 'Content-Type: multipart/form-data' \ --form file=@/path/to/file/swagger.yaml
        ```

        Args:
            component_id: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/compass/v1/component/{componentId}/api_specs"),
            path_params=[param[UUID]("componentId", component_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("file", file)),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[str],
            error_mapper=upload_api_spec_error_mapper,
            request_options=request_options,
        )

    def upload_attachment(
        self,
        component_id: UUID,
        forge_app_id: str,
        key: str,
        file: FileInput,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Attachment, UploadAttachmentErrorBody]:
        r"""Attach a file to a component. If you need to have attachment upload enabled for your Compass Forge app,
        contact Atlassian support.

        The request body should be a file.

        Example: This curl command attaches a file to a component. ```bash curl --request PUT \ --url
        'https://your-domain.atlassian.net/gateway/api/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}'
        \ --user 'email@example.com:' \ --header 'Content-Type: multipart/form-data' \ --form
        file=@/path/to/attachment.txt
        ```

        Args:
            component_id: Value sent with the request.
            forge_app_id: Value sent with the request.
            key: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}"),
            path_params=[
                param[UUID]("componentId", component_id), param[str]("forgeAppId", forge_app_id), param[str]("key", key)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("file", file)),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[Attachment],
            error_mapper=upload_attachment_error_mapper,
            request_options=request_options,
        )


class AsyncAttachmentRestControllerWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_api_spec(
        self, component_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[str, DeleteApiSpecErrorBody]:
        """Delete the API spec file for a component.

        Args:
            component_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/compass/v1/component/{componentId}/api_specs"),
            path_params=[param[UUID]("componentId", component_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[str],
            error_mapper=delete_api_spec_error_mapper,
            request_options=request_options,
        )

    async def delete_attachment(
        self,
        component_id: UUID,
        forge_app_id: str,
        key: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteAttachmentErrorBody]:
        """Delete file attached to a component. If you need to have attachment upload enabled for your Compass Forge
        app, contact Atlassian support.

        Args:
            component_id: Value sent with the request.
            forge_app_id: Value sent with the request.
            key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}"),
            path_params=[
                param[UUID]("componentId", component_id), param[str]("forgeAppId", forge_app_id), param[str]("key", key)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=async_empty_response,
            error_mapper=delete_attachment_error_mapper,
            request_options=request_options,
        )

    async def get_attachment(
        self,
        component_id: UUID,
        forge_app_id: str,
        key: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Attachment, GetAttachmentErrorBody]:
        """Get a file attached to a component. If you need to have attachment upload enabled for your Compass Forge app,
        contact Atlassian support.

        Args:
            component_id: Value sent with the request.
            forge_app_id: Value sent with the request.
            key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}"),
            path_params=[
                param[UUID]("componentId", component_id), param[str]("forgeAppId", forge_app_id), param[str]("key", key)
            ],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[Attachment],
            error_mapper=get_attachment_error_mapper,
            request_options=request_options,
        )

    async def upload_api_spec(
        self, component_id: UUID, file: AsyncFileInput, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[str, UploadApiSpecErrorBody]:
        r"""Upload api specs for a component.

        The request body should be a file with the api-spec content.

        Example: This curl command uploads a spec file (swagger.yaml) for the component. ```bash curl --request PUT \
        --url 'https://your-domain.atlassian.net/gateway/api/compass/v1/component/{componentId}/api_specs' \ --user
        'email@example.com:' \ --header 'Content-Type: multipart/form-data' \ --form file=@/path/to/file/swagger.yaml
        ```

        Args:
            component_id: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/compass/v1/component/{componentId}/api_specs"),
            path_params=[param[UUID]("componentId", component_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("file", file)),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[str],
            error_mapper=upload_api_spec_error_mapper,
            request_options=request_options,
        )

    async def upload_attachment(
        self,
        component_id: UUID,
        forge_app_id: str,
        key: str,
        file: AsyncFileInput,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Attachment, UploadAttachmentErrorBody]:
        r"""Attach a file to a component. If you need to have attachment upload enabled for your Compass Forge app,
        contact Atlassian support.

        The request body should be a file.

        Example: This curl command attaches a file to a component. ```bash curl --request PUT \ --url
        'https://your-domain.atlassian.net/gateway/api/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}'
        \ --user 'email@example.com:' \ --header 'Content-Type: multipart/form-data' \ --form
        file=@/path/to/attachment.txt
        ```

        Args:
            component_id: Value sent with the request.
            forge_app_id: Value sent with the request.
            key: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}"),
            path_params=[
                param[UUID]("componentId", component_id), param[str]("forgeAppId", forge_app_id), param[str]("key", key)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("file", file)),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[Attachment],
            error_mapper=upload_attachment_error_mapper,
            request_options=request_options,
        )
