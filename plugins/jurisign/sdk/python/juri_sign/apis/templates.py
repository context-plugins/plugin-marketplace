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
from ..errors.create_sign_request_from_template_error import (
    CreateSignRequestFromTemplateErrorBody,
    create_sign_request_from_template_error_mapper,
)
from ..errors.delete_template_error import DeleteTemplateErrorBody, delete_template_error_mapper
from ..errors.get_template_error import GetTemplateErrorBody, get_template_error_mapper
from ..errors.list_templates_error import ListTemplatesErrorBody, list_templates_error_mapper
from ..models.message_response import MessageResponse
from ..models.templates_response import TemplatesResponse
from ..models.templates_response1 import TemplatesResponse1
from ..models.templates_sign_requests_request import TemplatesSignRequestsRequest, TemplatesSignRequestsRequestDict
from ..models.templates_sign_requests_response import TemplatesSignRequestsResponse
from ..server.server import Server


class Templates:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TemplatesWithRawResponse(client, server, auth)

    def create_sign_request_from_template(
        self,
        id_: UUID,
        *,
        body: TemplatesSignRequestsRequest | TemplatesSignRequestsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TemplatesSignRequestsResponse:
        """Create a signature request from a template, reusing its signers, signature zones, and (if present) its own
        copy of the document. Subject, message, expiry and redirect_url can be overridden. If the template has no
        document of its own, ``document_id`` is required.

        Args:
            id_: Resource UUID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sign request created from template

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found Validation error ``error`` is ``MessageResponse
                | ValidationError1 | RawError``."""
        return unwrap(
            self._with_raw_response.create_sign_request_from_template(id_, body=body, request_options=request_options)
        )

    def delete_template(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> MessageResponse:
        """Delete a template and its own copy of the PDF, if any.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Template deleted

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_template(id_, request_options=request_options))

    def get_template(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> TemplatesResponse1:
        """Retrieve full details of a template, including signers and signature zones.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Template details

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(self._with_raw_response.get_template(id_, request_options=request_options))

    def list_templates(
        self, *, per_page: int | None = 20, page: int | None = 1, request_options: RequestOptionsOrDict | None = None
    ) -> TemplatesResponse:
        """Retrieve reusable sign request templates for your organization.

        Args:
            per_page: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Templates list

        Raises:
            ApiError: Missing or invalid Bearer token ``error`` is ``MessageResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_templates(per_page=per_page, page=page, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> TemplatesWithRawResponse:
        return self._with_raw_response


class AsyncTemplates:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTemplatesWithRawResponse(client, server, auth)

    async def create_sign_request_from_template(
        self,
        id_: UUID,
        *,
        body: TemplatesSignRequestsRequest | TemplatesSignRequestsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TemplatesSignRequestsResponse:
        """Create a signature request from a template, reusing its signers, signature zones, and (if present) its own
        copy of the document. Subject, message, expiry and redirect_url can be overridden. If the template has no
        document of its own, ``document_id`` is required.

        Args:
            id_: Resource UUID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sign request created from template

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found Validation error ``error`` is ``MessageResponse
                | ValidationError1 | RawError``."""
        return unwrap(
            await self._with_raw_response.create_sign_request_from_template(
                id_, body=body, request_options=request_options
            ),
        )

    async def delete_template(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Delete a template and its own copy of the PDF, if any.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Template deleted

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(await self._with_raw_response.delete_template(id_, request_options=request_options))

    async def get_template(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TemplatesResponse1:
        """Retrieve full details of a template, including signers and signature zones.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Template details

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_template(id_, request_options=request_options))

    async def list_templates(
        self,
        *,
        per_page: int | None = 20,
        page: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TemplatesResponse:
        """Retrieve reusable sign request templates for your organization.

        Args:
            per_page: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Templates list

        Raises:
            ApiError: Missing or invalid Bearer token ``error`` is ``MessageResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_templates(per_page=per_page, page=page, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncTemplatesWithRawResponse:
        return self._with_raw_response


class TemplatesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_sign_request_from_template(
        self,
        id_: UUID,
        *,
        body: TemplatesSignRequestsRequest | TemplatesSignRequestsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TemplatesSignRequestsResponse, CreateSignRequestFromTemplateErrorBody]:
        """Create a signature request from a template, reusing its signers, signature zones, and (if present) its own
        copy of the document. Subject, message, expiry and redirect_url can be overridden. If the template has no
        document of its own, ``document_id`` is required.

        Args:
            id_: Resource UUID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/templates/{id}/sign-requests"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TemplatesSignRequestsRequest | TemplatesSignRequestsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TemplatesSignRequestsResponse],
            error_mapper=create_sign_request_from_template_error_mapper,
            request_options=request_options,
        )

    def delete_template(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteTemplateErrorBody]:
        """Delete a template and its own copy of the PDF, if any.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/templates/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[MessageResponse],
            error_mapper=delete_template_error_mapper,
            request_options=request_options,
        )

    def get_template(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TemplatesResponse1, GetTemplateErrorBody]:
        """Retrieve full details of a template, including signers and signature zones.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/templates/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TemplatesResponse1],
            error_mapper=get_template_error_mapper,
            request_options=request_options,
        )

    def list_templates(
        self, *, per_page: int | None = 20, page: int | None = 1, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TemplatesResponse, ListTemplatesErrorBody]:
        """Retrieve reusable sign request templates for your organization.

        Args:
            per_page: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/templates"),
            query_params=[param[int | None]("per_page", per_page), param[int | None]("page", page)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TemplatesResponse],
            error_mapper=list_templates_error_mapper,
            request_options=request_options,
        )


class AsyncTemplatesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_sign_request_from_template(
        self,
        id_: UUID,
        *,
        body: TemplatesSignRequestsRequest | TemplatesSignRequestsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TemplatesSignRequestsResponse, CreateSignRequestFromTemplateErrorBody]:
        """Create a signature request from a template, reusing its signers, signature zones, and (if present) its own
        copy of the document. Subject, message, expiry and redirect_url can be overridden. If the template has no
        document of its own, ``document_id`` is required.

        Args:
            id_: Resource UUID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/templates/{id}/sign-requests"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TemplatesSignRequestsRequest | TemplatesSignRequestsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TemplatesSignRequestsResponse],
            error_mapper=create_sign_request_from_template_error_mapper,
            request_options=request_options,
        )

    async def delete_template(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteTemplateErrorBody]:
        """Delete a template and its own copy of the PDF, if any.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/templates/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=delete_template_error_mapper,
            request_options=request_options,
        )

    async def get_template(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TemplatesResponse1, GetTemplateErrorBody]:
        """Retrieve full details of a template, including signers and signature zones.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/templates/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TemplatesResponse1],
            error_mapper=get_template_error_mapper,
            request_options=request_options,
        )

    async def list_templates(
        self,
        *,
        per_page: int | None = 20,
        page: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TemplatesResponse, ListTemplatesErrorBody]:
        """Retrieve reusable sign request templates for your organization.

        Args:
            per_page: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/templates"),
            query_params=[param[int | None]("per_page", per_page), param[int | None]("page", page)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TemplatesResponse],
            error_mapper=list_templates_error_mapper,
            request_options=request_options,
        )
