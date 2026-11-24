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
    empty_response,
    file_part,
    multipart_body,
    param,
    unwrap,
)
from ..errors.delete_lock_file_error import DeleteLockFileErrorBody, delete_lock_file_error_mapper
from ..errors.upload_lock_file_error import UploadLockFileErrorBody, upload_lock_file_error_mapper
from ..server.server import Server


class PackageDependencies:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PackageDependenciesWithRawResponse(client, server, auth)

    def delete_lock_file(
        self, component_id: str, source_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete all the package dependencies associated with a particular source.The ``sourceId`` parameter needs to
        be Base64 encoded.

        Args:
            component_id: Value sent with the request.
            source_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the file upload is successful.

        Raises:
            ApiError: Returned if the request is not valid. Returned if the user is not permitted to modify the given
                component. Returned if the component is not found. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_lock_file(component_id, source_id, request_options=request_options)
        )

    def upload_lock_file(
        self,
        source_id: str,
        base_source_url: str,
        component_id: str,
        file: FileInput,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        r"""Upload package dependencies for a component.

        The file with package dependency information. Currently, we only accept package-lock.json files that are below
        2MB. \
        \
        The baseSourceUrl should be a url link to your lock file, ideally with "#lines-" appended at the end, if from
        Bitbucket, or "#L" appended if a GitHub link. This will let link to specific lines in your lock file where
        dependencies were found. \
        \
        The sourceId should be a string that uniquely identifies the given lock file. We recommend using the filepath to
        the lock file, with the "/" characters replaced with "_" characters.

        Example: This curl command uploads a lock file to populate package dependencies for the component. ```bash curl
        --request PUT \ --url 'https://your-domain.atlassian.net/gateway/api/compass/v1/package_dependencies/lock_file'
        \ --user 'email@example.com:' \ --header 'Content-Type: multipart/form-data' \ --form
        file=@/path/to/file/package-lock.json;type=application/json --form componentId= --form baseSourceUrl= --form
        sourceId=
        ```

        Args:
            source_id: Value sent with the request.
            base_source_url: Value sent with the request.
            component_id: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the file upload is successful.

        Raises:
            ApiError: Returned if the request is not valid. Returned if the user is not permitted to modify the given
                component. Returned if the component is not found. Returned if the uploaded file type is not accepted
                and/or file content cannot be parsed. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.upload_lock_file(
                source_id, base_source_url, component_id, file, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PackageDependenciesWithRawResponse:
        return self._with_raw_response


class AsyncPackageDependencies:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPackageDependenciesWithRawResponse(client, server, auth)

    async def delete_lock_file(
        self, component_id: str, source_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete all the package dependencies associated with a particular source.The ``sourceId`` parameter needs to
        be Base64 encoded.

        Args:
            component_id: Value sent with the request.
            source_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the file upload is successful.

        Raises:
            ApiError: Returned if the request is not valid. Returned if the user is not permitted to modify the given
                component. Returned if the component is not found. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_lock_file(component_id, source_id, request_options=request_options)
        )

    async def upload_lock_file(
        self,
        source_id: str,
        base_source_url: str,
        component_id: str,
        file: AsyncFileInput,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        r"""Upload package dependencies for a component.

        The file with package dependency information. Currently, we only accept package-lock.json files that are below
        2MB. \
        \
        The baseSourceUrl should be a url link to your lock file, ideally with "#lines-" appended at the end, if from
        Bitbucket, or "#L" appended if a GitHub link. This will let link to specific lines in your lock file where
        dependencies were found. \
        \
        The sourceId should be a string that uniquely identifies the given lock file. We recommend using the filepath to
        the lock file, with the "/" characters replaced with "_" characters.

        Example: This curl command uploads a lock file to populate package dependencies for the component. ```bash curl
        --request PUT \ --url 'https://your-domain.atlassian.net/gateway/api/compass/v1/package_dependencies/lock_file'
        \ --user 'email@example.com:' \ --header 'Content-Type: multipart/form-data' \ --form
        file=@/path/to/file/package-lock.json;type=application/json --form componentId= --form baseSourceUrl= --form
        sourceId=
        ```

        Args:
            source_id: Value sent with the request.
            base_source_url: Value sent with the request.
            component_id: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the file upload is successful.

        Raises:
            ApiError: Returned if the request is not valid. Returned if the user is not permitted to modify the given
                component. Returned if the component is not found. Returned if the uploaded file type is not accepted
                and/or file content cannot be parsed. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.upload_lock_file(
                source_id, base_source_url, component_id, file, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPackageDependenciesWithRawResponse:
        return self._with_raw_response


class PackageDependenciesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_lock_file(
        self, component_id: str, source_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteLockFileErrorBody]:
        """Delete all the package dependencies associated with a particular source.The ``sourceId`` parameter needs to
        be Base64 encoded.

        Args:
            component_id: Value sent with the request.
            source_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/compass/v1/package_dependencies/lock_file/{componentId}/{sourceId}"),
            path_params=[param[str]("componentId", component_id), param[str]("sourceId", source_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=empty_response,
            error_mapper=delete_lock_file_error_mapper,
            request_options=request_options,
        )

    def upload_lock_file(
        self,
        source_id: str,
        base_source_url: str,
        component_id: str,
        file: FileInput,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UploadLockFileErrorBody]:
        r"""Upload package dependencies for a component.

        The file with package dependency information. Currently, we only accept package-lock.json files that are below
        2MB. \
        \
        The baseSourceUrl should be a url link to your lock file, ideally with "#lines-" appended at the end, if from
        Bitbucket, or "#L" appended if a GitHub link. This will let link to specific lines in your lock file where
        dependencies were found. \
        \
        The sourceId should be a string that uniquely identifies the given lock file. We recommend using the filepath to
        the lock file, with the "/" characters replaced with "_" characters.

        Example: This curl command uploads a lock file to populate package dependencies for the component. ```bash curl
        --request PUT \ --url 'https://your-domain.atlassian.net/gateway/api/compass/v1/package_dependencies/lock_file'
        \ --user 'email@example.com:' \ --header 'Content-Type: multipart/form-data' \ --form
        file=@/path/to/file/package-lock.json;type=application/json --form componentId= --form baseSourceUrl= --form
        sourceId=
        ```

        Args:
            source_id: Value sent with the request.
            base_source_url: Value sent with the request.
            component_id: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/compass/v1/package_dependencies/lock_file"),
            query_params=[
                param[str]("sourceId", source_id),
                param[str]("baseSourceUrl", base_source_url),
                param[str]("componentId", component_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("file", file)),
            auth_scheme=self._auth.basic_auth,
            decoder=empty_response,
            error_mapper=upload_lock_file_error_mapper,
            request_options=request_options,
        )


class AsyncPackageDependenciesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_lock_file(
        self, component_id: str, source_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteLockFileErrorBody]:
        """Delete all the package dependencies associated with a particular source.The ``sourceId`` parameter needs to
        be Base64 encoded.

        Args:
            component_id: Value sent with the request.
            source_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/compass/v1/package_dependencies/lock_file/{componentId}/{sourceId}"),
            path_params=[param[str]("componentId", component_id), param[str]("sourceId", source_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=async_empty_response,
            error_mapper=delete_lock_file_error_mapper,
            request_options=request_options,
        )

    async def upload_lock_file(
        self,
        source_id: str,
        base_source_url: str,
        component_id: str,
        file: AsyncFileInput,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UploadLockFileErrorBody]:
        r"""Upload package dependencies for a component.

        The file with package dependency information. Currently, we only accept package-lock.json files that are below
        2MB. \
        \
        The baseSourceUrl should be a url link to your lock file, ideally with "#lines-" appended at the end, if from
        Bitbucket, or "#L" appended if a GitHub link. This will let link to specific lines in your lock file where
        dependencies were found. \
        \
        The sourceId should be a string that uniquely identifies the given lock file. We recommend using the filepath to
        the lock file, with the "/" characters replaced with "_" characters.

        Example: This curl command uploads a lock file to populate package dependencies for the component. ```bash curl
        --request PUT \ --url 'https://your-domain.atlassian.net/gateway/api/compass/v1/package_dependencies/lock_file'
        \ --user 'email@example.com:' \ --header 'Content-Type: multipart/form-data' \ --form
        file=@/path/to/file/package-lock.json;type=application/json --form componentId= --form baseSourceUrl= --form
        sourceId=
        ```

        Args:
            source_id: Value sent with the request.
            base_source_url: Value sent with the request.
            component_id: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/compass/v1/package_dependencies/lock_file"),
            query_params=[
                param[str]("sourceId", source_id),
                param[str]("baseSourceUrl", base_source_url),
                param[str]("componentId", component_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("file", file)),
            auth_scheme=self._auth.basic_auth,
            decoder=async_empty_response,
            error_mapper=upload_lock_file_error_mapper,
            request_options=request_options,
        )
