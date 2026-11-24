from __future__ import annotations

from typing import Any
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
from ..errors.discard_form_draft_error import DiscardFormDraftErrorBody, discard_form_draft_error_mapper
from ..errors.duplicate_form_error import DuplicateFormErrorBody, duplicate_form_error_mapper
from ..errors.get_form_error import GetFormErrorBody, get_form_error_mapper
from ..errors.list_form_versions_error import ListFormVersionsErrorBody, list_form_versions_error_mapper
from ..errors.list_forms_error import ListFormsErrorBody, list_forms_error_mapper
from ..errors.rename_form_error import RenameFormErrorBody, rename_form_error_mapper
from ..errors.unpublish_form_error import UnpublishFormErrorBody, unpublish_form_error_mapper
from ..models.api_v1_manage_forms_discard_response import ApiV1ManageFormsDiscardResponse
from ..models.api_v1_manage_forms_duplicate_request import (
    ApiV1ManageFormsDuplicateRequest,
    ApiV1ManageFormsDuplicateRequestDict,
)
from ..models.api_v1_manage_forms_duplicate_response import ApiV1ManageFormsDuplicateResponse
from ..models.api_v1_manage_forms_request import ApiV1ManageFormsRequest, ApiV1ManageFormsRequestDict
from ..models.api_v1_manage_forms_response import ApiV1ManageFormsResponse
from ..models.api_v1_manage_forms_response1 import ApiV1ManageFormsResponse1
from ..models.api_v1_manage_forms_unpublish_response import ApiV1ManageFormsUnpublishResponse
from ..models.api_v1_manage_forms_versions_response import ApiV1ManageFormsVersionsResponse
from ..models.enums.include import IncludeOrStr
from ..models.form_detail import FormDetail
from ..server.server import Server


class Forms:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FormsWithRawResponse(client, server, auth)

    def discard_form_draft(
        self, form: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageFormsDiscardResponse:
        """Drop a published form's staged changes and return the editor to what is live. The live form is untouched, so
        this is routine (Tier A). ``changed: false`` means nothing was staged. Scope: forms:write.

        Args:
            form: A form id or slug.
            body: No input. Any key is a 400.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The live schema that remains.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.discard_form_draft(form, body=body, request_options=request_options))

    def duplicate_form(
        self,
        form: str,
        *,
        body: ApiV1ManageFormsDuplicateRequest | ApiV1ManageFormsDuplicateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ManageFormsDuplicateResponse:
        """Copy a form into the same project as a fresh draft. The copy collects nothing until it is published, which
        keeps this routine (Tier A). A form whose deletion has already started is 410 here and on the CLI twin — one
        check, inside the shared core. Scope: forms:write.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The new draft.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). This form is being deleted
                and can no longer be copied. The request body exceeded the 16 KiB management cap. Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.duplicate_form(form, body=body, request_options=request_options))

    def get_form(
        self, form: str, *, include: IncludeOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FormDetail:
        """The published contract for one form (id or slug): its published schema and settings, plus a hasDraft flag.
        ``?include=draft`` adds the staged revision (``draftSchema``, ``draftTheme``) and the push handle, storage
        destination, and purpose — everything ``fillo pull`` needs — and additionally requires forms:write. Without it
        the draft schema is never exposed. Scope: forms:read.

        Args:
            form: A form id or slug.
            include: Only "draft". Adds the staged revision and requires forms:write as well.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The form's published contract.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_form(form, include=include, request_options=request_options))

    def list_form_versions(
        self, form: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageFormsVersionsResponse:
        """The form's stored schema versions, newest first. Scope: forms:read.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The form's versions.

        Raises:
            ApiError: Missing, malformed, unknown, revoked, or expired key. The key is valid but lacks the required
                scope. No such resource in this project (returned instead of 403 for ids in other projects). Per-key
                (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After
                header. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_form_versions(form, request_options=request_options))

    def list_forms(
        self, *, cursor: str | None = None, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageFormsResponse:
        """Keyset list of the project's forms, newest first. Scope: forms:read.

        Args:
            cursor: The id from a previous page's nextCursor. Omit for the first page.
            limit: Page size, 1–100. Default 50.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of forms.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. Per-key
                (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After
                header. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_forms(cursor=cursor, limit=limit, request_options=request_options))

    def rename_form(
        self,
        form: str,
        body: ApiV1ManageFormsRequest | ApiV1ManageFormsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ManageFormsResponse1:
        """Rename a form and re-derive its slug. Old links keep working and no id changes, which is why this is routine
        (Tier A). Scope: forms:write.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The renamed form.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.rename_form(form, body, request_options=request_options))

    def unpublish_form(
        self, form: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageFormsUnpublishResponse:
        """Take a live form offline: the hosted page and every embed stop accepting responses immediately. Existing
        responses and files are kept, and publishing again brings the form back. Outward-facing (Tier B) — the key
        holder chose forms:write at mint. Idempotent: an already-offline form answers ``changed: false``. Scope:
        forms:write.

        Args:
            form: A form id or slug.
            body: No input. Any key is a 400.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The form, now offline.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.unpublish_form(form, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> FormsWithRawResponse:
        return self._with_raw_response


class AsyncForms:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFormsWithRawResponse(client, server, auth)

    async def discard_form_draft(
        self, form: str, *, body: Any | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ManageFormsDiscardResponse:
        """Drop a published form's staged changes and return the editor to what is live. The live form is untouched, so
        this is routine (Tier A). ``changed: false`` means nothing was staged. Scope: forms:write.

        Args:
            form: A form id or slug.
            body: No input. Any key is a 400.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The live schema that remains.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.discard_form_draft(form, body=body, request_options=request_options)
        )

    async def duplicate_form(
        self,
        form: str,
        *,
        body: ApiV1ManageFormsDuplicateRequest | ApiV1ManageFormsDuplicateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageFormsDuplicateResponse:
        """Copy a form into the same project as a fresh draft. The copy collects nothing until it is published, which
        keeps this routine (Tier A). A form whose deletion has already started is 410 here and on the CLI twin — one
        check, inside the shared core. Scope: forms:write.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The new draft.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). This form is being deleted
                and can no longer be copied. The request body exceeded the 16 KiB management cap. Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.duplicate_form(form, body=body, request_options=request_options))

    async def get_form(
        self,
        form: str,
        *,
        include: IncludeOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FormDetail:
        """The published contract for one form (id or slug): its published schema and settings, plus a hasDraft flag.
        ``?include=draft`` adds the staged revision (``draftSchema``, ``draftTheme``) and the push handle, storage
        destination, and purpose — everything ``fillo pull`` needs — and additionally requires forms:write. Without it
        the draft schema is never exposed. Scope: forms:read.

        Args:
            form: A form id or slug.
            include: Only "draft". Adds the staged revision and requires forms:write as well.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The form's published contract.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_form(form, include=include, request_options=request_options))

    async def list_form_versions(
        self, form: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ManageFormsVersionsResponse:
        """The form's stored schema versions, newest first. Scope: forms:read.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The form's versions.

        Raises:
            ApiError: Missing, malformed, unknown, revoked, or expired key. The key is valid but lacks the required
                scope. No such resource in this project (returned instead of 403 for ids in other projects). Per-key
                (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After
                header. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_form_versions(form, request_options=request_options))

    async def list_forms(
        self,
        *,
        cursor: str | None = None,
        limit: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageFormsResponse:
        """Keyset list of the project's forms, newest first. Scope: forms:read.

        Args:
            cursor: The id from a previous page's nextCursor. Omit for the first page.
            limit: Page size, 1–100. Default 50.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of forms.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. Per-key
                (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After
                header. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_forms(cursor=cursor, limit=limit, request_options=request_options)
        )

    async def rename_form(
        self,
        form: str,
        body: ApiV1ManageFormsRequest | ApiV1ManageFormsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageFormsResponse1:
        """Rename a form and re-derive its slug. Old links keep working and no id changes, which is why this is routine
        (Tier A). Scope: forms:write.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The renamed form.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.rename_form(form, body, request_options=request_options))

    async def unpublish_form(
        self, form: str, *, body: Any | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ManageFormsUnpublishResponse:
        """Take a live form offline: the hosted page and every embed stop accepting responses immediately. Existing
        responses and files are kept, and publishing again brings the form back. Outward-facing (Tier B) — the key
        holder chose forms:write at mint. Idempotent: an already-offline form answers ``changed: false``. Scope:
        forms:write.

        Args:
            form: A form id or slug.
            body: No input. Any key is a 400.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The form, now offline.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.unpublish_form(form, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncFormsWithRawResponse:
        return self._with_raw_response


class FormsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def discard_form_draft(
        self, form: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageFormsDiscardResponse, DiscardFormDraftErrorBody]:
        """Drop a published form's staged changes and return the editor to what is live. The live form is untouched, so
        this is routine (Tier A). ``changed: false`` means nothing was staged. Scope: forms:write.

        Args:
            form: A form id or slug.
            body: No input. Any key is a 400.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/manage/forms/{form}/discard"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageFormsDiscardResponse],
            error_mapper=discard_form_draft_error_mapper,
            request_options=request_options,
        )

    def duplicate_form(
        self,
        form: str,
        *,
        body: ApiV1ManageFormsDuplicateRequest | ApiV1ManageFormsDuplicateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageFormsDuplicateResponse, DuplicateFormErrorBody]:
        """Copy a form into the same project as a fresh draft. The copy collects nothing until it is published, which
        keeps this routine (Tier A). A form whose deletion has already started is 410 here and on the CLI twin — one
        check, inside the shared core. Scope: forms:write.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/manage/forms/{form}/duplicate"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageFormsDuplicateRequest | ApiV1ManageFormsDuplicateRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageFormsDuplicateResponse],
            error_mapper=duplicate_form_error_mapper,
            request_options=request_options,
        )

    def get_form(
        self, form: str, *, include: IncludeOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FormDetail, GetFormErrorBody]:
        """The published contract for one form (id or slug): its published schema and settings, plus a hasDraft flag.
        ``?include=draft`` adds the staged revision (``draftSchema``, ``draftTheme``) and the push handle, storage
        destination, and purpose — everything ``fillo pull`` needs — and additionally requires forms:write. Without it
        the draft schema is never exposed. Scope: forms:read.

        Args:
            form: A form id or slug.
            include: Only "draft". Adds the staged revision and requires forms:write as well.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/forms/{form}"),
            path_params=[param[str]("form", form)],
            query_params=[param[IncludeOrStr | None]("include", include)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[FormDetail],
            error_mapper=get_form_error_mapper,
            request_options=request_options,
        )

    def list_form_versions(
        self, form: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageFormsVersionsResponse, ListFormVersionsErrorBody]:
        """The form's stored schema versions, newest first. Scope: forms:read.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/forms/{form}/versions"),
            path_params=[param[str]("form", form)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageFormsVersionsResponse],
            error_mapper=list_form_versions_error_mapper,
            request_options=request_options,
        )

    def list_forms(
        self, *, cursor: str | None = None, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageFormsResponse, ListFormsErrorBody]:
        """Keyset list of the project's forms, newest first. Scope: forms:read.

        Args:
            cursor: The id from a previous page's nextCursor. Omit for the first page.
            limit: Page size, 1–100. Default 50.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/forms"),
            query_params=[param[str | None]("cursor", cursor), param[int | None]("limit", limit)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageFormsResponse],
            error_mapper=list_forms_error_mapper,
            request_options=request_options,
        )

    def rename_form(
        self,
        form: str,
        body: ApiV1ManageFormsRequest | ApiV1ManageFormsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageFormsResponse1, RenameFormErrorBody]:
        """Rename a form and re-derive its slug. Old links keep working and no id changes, which is why this is routine
        (Tier A). Scope: forms:write.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/manage/forms/{form}"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageFormsRequest | ApiV1ManageFormsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageFormsResponse1],
            error_mapper=rename_form_error_mapper,
            request_options=request_options,
        )

    def unpublish_form(
        self, form: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageFormsUnpublishResponse, UnpublishFormErrorBody]:
        """Take a live form offline: the hosted page and every embed stop accepting responses immediately. Existing
        responses and files are kept, and publishing again brings the form back. Outward-facing (Tier B) — the key
        holder chose forms:write at mint. Idempotent: an already-offline form answers ``changed: false``. Scope:
        forms:write.

        Args:
            form: A form id or slug.
            body: No input. Any key is a 400.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/manage/forms/{form}/unpublish"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageFormsUnpublishResponse],
            error_mapper=unpublish_form_error_mapper,
            request_options=request_options,
        )


class AsyncFormsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def discard_form_draft(
        self, form: str, *, body: Any | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageFormsDiscardResponse, DiscardFormDraftErrorBody]:
        """Drop a published form's staged changes and return the editor to what is live. The live form is untouched, so
        this is routine (Tier A). ``changed: false`` means nothing was staged. Scope: forms:write.

        Args:
            form: A form id or slug.
            body: No input. Any key is a 400.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/manage/forms/{form}/discard"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageFormsDiscardResponse],
            error_mapper=discard_form_draft_error_mapper,
            request_options=request_options,
        )

    async def duplicate_form(
        self,
        form: str,
        *,
        body: ApiV1ManageFormsDuplicateRequest | ApiV1ManageFormsDuplicateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageFormsDuplicateResponse, DuplicateFormErrorBody]:
        """Copy a form into the same project as a fresh draft. The copy collects nothing until it is published, which
        keeps this routine (Tier A). A form whose deletion has already started is 410 here and on the CLI twin — one
        check, inside the shared core. Scope: forms:write.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/manage/forms/{form}/duplicate"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageFormsDuplicateRequest | ApiV1ManageFormsDuplicateRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageFormsDuplicateResponse],
            error_mapper=duplicate_form_error_mapper,
            request_options=request_options,
        )

    async def get_form(
        self,
        form: str,
        *,
        include: IncludeOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FormDetail, GetFormErrorBody]:
        """The published contract for one form (id or slug): its published schema and settings, plus a hasDraft flag.
        ``?include=draft`` adds the staged revision (``draftSchema``, ``draftTheme``) and the push handle, storage
        destination, and purpose — everything ``fillo pull`` needs — and additionally requires forms:write. Without it
        the draft schema is never exposed. Scope: forms:read.

        Args:
            form: A form id or slug.
            include: Only "draft". Adds the staged revision and requires forms:write as well.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/forms/{form}"),
            path_params=[param[str]("form", form)],
            query_params=[param[IncludeOrStr | None]("include", include)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[FormDetail],
            error_mapper=get_form_error_mapper,
            request_options=request_options,
        )

    async def list_form_versions(
        self, form: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageFormsVersionsResponse, ListFormVersionsErrorBody]:
        """The form's stored schema versions, newest first. Scope: forms:read.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/forms/{form}/versions"),
            path_params=[param[str]("form", form)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageFormsVersionsResponse],
            error_mapper=list_form_versions_error_mapper,
            request_options=request_options,
        )

    async def list_forms(
        self,
        *,
        cursor: str | None = None,
        limit: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageFormsResponse, ListFormsErrorBody]:
        """Keyset list of the project's forms, newest first. Scope: forms:read.

        Args:
            cursor: The id from a previous page's nextCursor. Omit for the first page.
            limit: Page size, 1–100. Default 50.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/forms"),
            query_params=[param[str | None]("cursor", cursor), param[int | None]("limit", limit)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageFormsResponse],
            error_mapper=list_forms_error_mapper,
            request_options=request_options,
        )

    async def rename_form(
        self,
        form: str,
        body: ApiV1ManageFormsRequest | ApiV1ManageFormsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageFormsResponse1, RenameFormErrorBody]:
        """Rename a form and re-derive its slug. Old links keep working and no id changes, which is why this is routine
        (Tier A). Scope: forms:write.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/manage/forms/{form}"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageFormsRequest | ApiV1ManageFormsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageFormsResponse1],
            error_mapper=rename_form_error_mapper,
            request_options=request_options,
        )

    async def unpublish_form(
        self, form: str, *, body: Any | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageFormsUnpublishResponse, UnpublishFormErrorBody]:
        """Take a live form offline: the hosted page and every embed stop accepting responses immediately. Existing
        responses and files are kept, and publishing again brings the form back. Outward-facing (Tier B) — the key
        holder chose forms:write at mint. Idempotent: an already-offline form answers ``changed: false``. Scope:
        forms:write.

        Args:
            form: A form id or slug.
            body: No input. Any key is a 400.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/manage/forms/{form}/unpublish"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageFormsUnpublishResponse],
            error_mapper=unpublish_form_error_mapper,
            request_options=request_options,
        )
