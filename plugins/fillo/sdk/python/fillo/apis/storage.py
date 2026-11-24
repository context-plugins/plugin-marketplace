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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_form_storage_error import GetFormStorageErrorBody, get_form_storage_error_mapper
from ..errors.list_form_storage_folders_error import (
    ListFormStorageFoldersErrorBody,
    list_form_storage_folders_error_mapper,
)
from ..errors.reset_form_storage_folder_error import (
    ResetFormStorageFolderErrorBody,
    reset_form_storage_folder_error_mapper,
)
from ..errors.set_form_storage_error import SetFormStorageErrorBody, set_form_storage_error_mapper
from ..errors.set_form_storage_folder_error import SetFormStorageFolderErrorBody, set_form_storage_folder_error_mapper
from ..models.api_v1_manage_forms_storage_folder_request import (
    ApiV1ManageFormsStorageFolderRequest,
    ApiV1ManageFormsStorageFolderRequestDict,
)
from ..models.api_v1_manage_forms_storage_folder_response import ApiV1ManageFormsStorageFolderResponse
from ..models.api_v1_manage_forms_storage_request import (
    ApiV1ManageFormsStorageRequest,
    ApiV1ManageFormsStorageRequestDict,
)
from ..models.drive_folder_listing import DriveFolderListing
from ..models.form_storage import FormStorage
from ..server.server import Server


class Storage:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = StorageWithRawResponse(client, server, auth)

    def get_form_storage(self, form: str, *, request_options: RequestOptionsOrDict | None = None) -> FormStorage:
        """Where this form's uploads land: the destination pinned on the form, the stored record, and what an upload
        would ``resolve`` to right now (including Fillo's short-lived transit staging). Scope: storage:manage.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The form's storage destination.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_form_storage(form, request_options=request_options))

    def list_form_storage_folders(
        self, form: str, *, q: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> DriveFolderListing:
        """The Drive folder this form's uploads land in, plus the connected account's writable My Drive folders so an
        agent can choose without guessing an id. Shared drives are not offered. Scope: storage:manage.

        Args:
            form: A form id or slug.
            q: Filter the folder list by name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current folder and the account's writable folders.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry
                after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_form_storage_folders(form, q=q, request_options=request_options))

    def reset_form_storage_folder(
        self, form: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageFormsStorageFolderResponse:
        """Return the form to its automatic per-form Drive folder. Files already uploaded stay where they are. Scope:
        storage:manage.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Automatic placement restored; both folder keys are null.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry
                after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.reset_form_storage_folder(form, request_options=request_options))

    def set_form_storage(
        self,
        form: str,
        body: ApiV1ManageFormsStorageRequest | ApiV1ManageFormsStorageRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FormStorage:
        """Pin where this form's uploads land. ``transit`` and ``none`` clear the per-form choice so the form follows
        the workspace default. A destination whose provider is not connected is a 409, as is clearing storage on a live
        form that collects files. Scope: storage:manage.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The form's storage destination after the change.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.set_form_storage(form, body, request_options=request_options))

    def set_form_storage_folder(
        self,
        form: str,
        body: ApiV1ManageFormsStorageFolderRequest | ApiV1ManageFormsStorageFolderRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ManageFormsStorageFolderResponse:
        """Send this form's new uploads to a folder on the connected Google account. Existing files stay where they are.
        A folder the connected account cannot write to, or one owned by a different account, is a 409. Scope:
        storage:manage.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The selected folder.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.set_form_storage_folder(form, body, request_options=request_options))

    @property
    def with_raw_response(self) -> StorageWithRawResponse:
        return self._with_raw_response


class AsyncStorage:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncStorageWithRawResponse(client, server, auth)

    async def get_form_storage(
        self, form: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FormStorage:
        """Where this form's uploads land: the destination pinned on the form, the stored record, and what an upload
        would ``resolve`` to right now (including Fillo's short-lived transit staging). Scope: storage:manage.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The form's storage destination.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_form_storage(form, request_options=request_options))

    async def list_form_storage_folders(
        self, form: str, *, q: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DriveFolderListing:
        """The Drive folder this form's uploads land in, plus the connected account's writable My Drive folders so an
        agent can choose without guessing an id. Shared drives are not offered. Scope: storage:manage.

        Args:
            form: A form id or slug.
            q: Filter the folder list by name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current folder and the account's writable folders.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry
                after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_form_storage_folders(form, q=q, request_options=request_options)
        )

    async def reset_form_storage_folder(
        self, form: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ManageFormsStorageFolderResponse:
        """Return the form to its automatic per-form Drive folder. Files already uploaded stay where they are. Scope:
        storage:manage.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Automatic placement restored; both folder keys are null.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry
                after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.reset_form_storage_folder(form, request_options=request_options))

    async def set_form_storage(
        self,
        form: str,
        body: ApiV1ManageFormsStorageRequest | ApiV1ManageFormsStorageRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FormStorage:
        """Pin where this form's uploads land. ``transit`` and ``none`` clear the per-form choice so the form follows
        the workspace default. A destination whose provider is not connected is a 409, as is clearing storage on a live
        form that collects files. Scope: storage:manage.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The form's storage destination after the change.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.set_form_storage(form, body, request_options=request_options))

    async def set_form_storage_folder(
        self,
        form: str,
        body: ApiV1ManageFormsStorageFolderRequest | ApiV1ManageFormsStorageFolderRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageFormsStorageFolderResponse:
        """Send this form's new uploads to a folder on the connected Google account. Existing files stay where they are.
        A folder the connected account cannot write to, or one owned by a different account, is a 409. Scope:
        storage:manage.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The selected folder.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.set_form_storage_folder(form, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncStorageWithRawResponse:
        return self._with_raw_response


class StorageWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_form_storage(
        self, form: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FormStorage, GetFormStorageErrorBody]:
        """Where this form's uploads land: the destination pinned on the form, the stored record, and what an upload
        would ``resolve`` to right now (including Fillo's short-lived transit staging). Scope: storage:manage.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/forms/{form}/storage"),
            path_params=[param[str]("form", form)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[FormStorage],
            error_mapper=get_form_storage_error_mapper,
            request_options=request_options,
        )

    def list_form_storage_folders(
        self, form: str, *, q: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DriveFolderListing, ListFormStorageFoldersErrorBody]:
        """The Drive folder this form's uploads land in, plus the connected account's writable My Drive folders so an
        agent can choose without guessing an id. Shared drives are not offered. Scope: storage:manage.

        Args:
            form: A form id or slug.
            q: Filter the folder list by name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/forms/{form}/storage/folder"),
            path_params=[param[str]("form", form)],
            query_params=[param[str | None]("q", q)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DriveFolderListing],
            error_mapper=list_form_storage_folders_error_mapper,
            request_options=request_options,
        )

    def reset_form_storage_folder(
        self, form: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageFormsStorageFolderResponse, ResetFormStorageFolderErrorBody]:
        """Return the form to its automatic per-form Drive folder. Files already uploaded stay where they are. Scope:
        storage:manage.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/forms/{form}/storage/folder"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageFormsStorageFolderResponse],
            error_mapper=reset_form_storage_folder_error_mapper,
            request_options=request_options,
        )

    def set_form_storage(
        self,
        form: str,
        body: ApiV1ManageFormsStorageRequest | ApiV1ManageFormsStorageRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FormStorage, SetFormStorageErrorBody]:
        """Pin where this form's uploads land. ``transit`` and ``none`` clear the per-form choice so the form follows
        the workspace default. A destination whose provider is not connected is a 409, as is clearing storage on a live
        form that collects files. Scope: storage:manage.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/manage/forms/{form}/storage"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageFormsStorageRequest | ApiV1ManageFormsStorageRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[FormStorage],
            error_mapper=set_form_storage_error_mapper,
            request_options=request_options,
        )

    def set_form_storage_folder(
        self,
        form: str,
        body: ApiV1ManageFormsStorageFolderRequest | ApiV1ManageFormsStorageFolderRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageFormsStorageFolderResponse, SetFormStorageFolderErrorBody]:
        """Send this form's new uploads to a folder on the connected Google account. Existing files stay where they are.
        A folder the connected account cannot write to, or one owned by a different account, is a 409. Scope:
        storage:manage.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/manage/forms/{form}/storage/folder"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageFormsStorageFolderRequest | ApiV1ManageFormsStorageFolderRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageFormsStorageFolderResponse],
            error_mapper=set_form_storage_folder_error_mapper,
            request_options=request_options,
        )


class AsyncStorageWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_form_storage(
        self, form: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FormStorage, GetFormStorageErrorBody]:
        """Where this form's uploads land: the destination pinned on the form, the stored record, and what an upload
        would ``resolve`` to right now (including Fillo's short-lived transit staging). Scope: storage:manage.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/forms/{form}/storage"),
            path_params=[param[str]("form", form)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[FormStorage],
            error_mapper=get_form_storage_error_mapper,
            request_options=request_options,
        )

    async def list_form_storage_folders(
        self, form: str, *, q: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DriveFolderListing, ListFormStorageFoldersErrorBody]:
        """The Drive folder this form's uploads land in, plus the connected account's writable My Drive folders so an
        agent can choose without guessing an id. Shared drives are not offered. Scope: storage:manage.

        Args:
            form: A form id or slug.
            q: Filter the folder list by name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/forms/{form}/storage/folder"),
            path_params=[param[str]("form", form)],
            query_params=[param[str | None]("q", q)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DriveFolderListing],
            error_mapper=list_form_storage_folders_error_mapper,
            request_options=request_options,
        )

    async def reset_form_storage_folder(
        self, form: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageFormsStorageFolderResponse, ResetFormStorageFolderErrorBody]:
        """Return the form to its automatic per-form Drive folder. Files already uploaded stay where they are. Scope:
        storage:manage.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/forms/{form}/storage/folder"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageFormsStorageFolderResponse],
            error_mapper=reset_form_storage_folder_error_mapper,
            request_options=request_options,
        )

    async def set_form_storage(
        self,
        form: str,
        body: ApiV1ManageFormsStorageRequest | ApiV1ManageFormsStorageRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FormStorage, SetFormStorageErrorBody]:
        """Pin where this form's uploads land. ``transit`` and ``none`` clear the per-form choice so the form follows
        the workspace default. A destination whose provider is not connected is a 409, as is clearing storage on a live
        form that collects files. Scope: storage:manage.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/manage/forms/{form}/storage"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageFormsStorageRequest | ApiV1ManageFormsStorageRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[FormStorage],
            error_mapper=set_form_storage_error_mapper,
            request_options=request_options,
        )

    async def set_form_storage_folder(
        self,
        form: str,
        body: ApiV1ManageFormsStorageFolderRequest | ApiV1ManageFormsStorageFolderRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageFormsStorageFolderResponse, SetFormStorageFolderErrorBody]:
        """Send this form's new uploads to a folder on the connected Google account. Existing files stay where they are.
        A folder the connected account cannot write to, or one owned by a different account, is a 409. Scope:
        storage:manage.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/manage/forms/{form}/storage/folder"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageFormsStorageFolderRequest | ApiV1ManageFormsStorageFolderRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageFormsStorageFolderResponse],
            error_mapper=set_form_storage_folder_error_mapper,
            request_options=request_options,
        )
