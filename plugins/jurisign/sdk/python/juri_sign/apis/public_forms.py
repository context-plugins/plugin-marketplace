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
from ..errors.create_public_form_error import CreatePublicFormErrorBody, create_public_form_error_mapper
from ..errors.delete_public_form_error import DeletePublicFormErrorBody, delete_public_form_error_mapper
from ..errors.get_public_form_error import GetPublicFormErrorBody, get_public_form_error_mapper
from ..errors.list_public_forms_error import ListPublicFormsErrorBody, list_public_forms_error_mapper
from ..errors.rotate_public_form_token_error import (
    RotatePublicFormTokenErrorBody,
    rotate_public_form_token_error_mapper,
)
from ..errors.update_public_form_error import UpdatePublicFormErrorBody, update_public_form_error_mapper
from ..models.message_response import MessageResponse
from ..models.public_forms_request import PublicFormsRequest, PublicFormsRequestDict
from ..models.public_forms_request1 import PublicFormsRequest1, PublicFormsRequest1Dict
from ..models.public_forms_response import PublicFormsResponse
from ..models.public_forms_response1 import PublicFormsResponse1
from ..models.public_forms_rotate_token_response import PublicFormsRotateTokenResponse
from ..server.server import Server


class PublicForms:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PublicFormsWithRawResponse(client, server, auth)

    def create_public_form(
        self, body: PublicFormsRequest | PublicFormsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicFormsResponse1:
        """Publish a shareable link backed by one of your sign request templates. Anyone opening the link fills in their
        details and becomes the signer of their own signature request, generated on the fly. The template MUST have
        exactly one signer and its own copy of the PDF.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Public form created

        Raises:
            ApiError: Missing or invalid Bearer token Validation error ``error`` is ``MessageResponse | ValidationError1
                | RawError``."""
        return unwrap(self._with_raw_response.create_public_form(body, request_options=request_options))

    def delete_public_form(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> MessageResponse:
        """Send a ``DELETE`` request.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Public form deleted

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_public_form(id_, request_options=request_options))

    def get_public_form(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicFormsResponse1:
        """Send a ``GET`` request.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Public form details

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(self._with_raw_response.get_public_form(id_, request_options=request_options))

    def list_public_forms(
        self, *, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None
    ) -> PublicFormsResponse:
        """Retrieve the shareable public forms (PowerForms) of your organization.

        Args:
            per_page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Public forms list

        Raises:
            ApiError: Missing or invalid Bearer token ``error`` is ``MessageResponse | RawError``."""
        return unwrap(self._with_raw_response.list_public_forms(per_page=per_page, request_options=request_options))

    def rotate_public_form_token(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicFormsRotateTokenResponse:
        """Generate a new public token. The previous link stops working immediately — use this if a link leaked or was
        shared too widely.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            New token generated

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(self._with_raw_response.rotate_public_form_token(id_, request_options=request_options))

    def update_public_form(
        self,
        id_: UUID,
        *,
        body: PublicFormsRequest1 | PublicFormsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicFormsResponse1:
        """Rename, pause/reactivate, change the expiry or the daily cap.

        Args:
            id_: Resource UUID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Public form updated

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(self._with_raw_response.update_public_form(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> PublicFormsWithRawResponse:
        return self._with_raw_response


class AsyncPublicForms:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPublicFormsWithRawResponse(client, server, auth)

    async def create_public_form(
        self,
        body: PublicFormsRequest | PublicFormsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicFormsResponse1:
        """Publish a shareable link backed by one of your sign request templates. Anyone opening the link fills in their
        details and becomes the signer of their own signature request, generated on the fly. The template MUST have
        exactly one signer and its own copy of the PDF.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Public form created

        Raises:
            ApiError: Missing or invalid Bearer token Validation error ``error`` is ``MessageResponse | ValidationError1
                | RawError``."""
        return unwrap(await self._with_raw_response.create_public_form(body, request_options=request_options))

    async def delete_public_form(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Send a ``DELETE`` request.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Public form deleted

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(await self._with_raw_response.delete_public_form(id_, request_options=request_options))

    async def get_public_form(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicFormsResponse1:
        """Send a ``GET`` request.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Public form details

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_public_form(id_, request_options=request_options))

    async def list_public_forms(
        self, *, per_page: int | None = 20, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicFormsResponse:
        """Retrieve the shareable public forms (PowerForms) of your organization.

        Args:
            per_page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Public forms list

        Raises:
            ApiError: Missing or invalid Bearer token ``error`` is ``MessageResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_public_forms(per_page=per_page, request_options=request_options)
        )

    async def rotate_public_form_token(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicFormsRotateTokenResponse:
        """Generate a new public token. The previous link stops working immediately — use this if a link leaked or was
        shared too widely.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            New token generated

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(await self._with_raw_response.rotate_public_form_token(id_, request_options=request_options))

    async def update_public_form(
        self,
        id_: UUID,
        *,
        body: PublicFormsRequest1 | PublicFormsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicFormsResponse1:
        """Rename, pause/reactivate, change the expiry or the daily cap.

        Args:
            id_: Resource UUID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Public form updated

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(await self._with_raw_response.update_public_form(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPublicFormsWithRawResponse:
        return self._with_raw_response


class PublicFormsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_public_form(
        self, body: PublicFormsRequest | PublicFormsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicFormsResponse1, CreatePublicFormErrorBody]:
        """Publish a shareable link backed by one of your sign request templates. Anyone opening the link fills in their
        details and becomes the signer of their own signature request, generated on the fly. The template MUST have
        exactly one signer and its own copy of the PDF.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/public-forms"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicFormsRequest | PublicFormsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PublicFormsResponse1],
            error_mapper=create_public_form_error_mapper,
            request_options=request_options,
        )

    def delete_public_form(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeletePublicFormErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/public-forms/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[MessageResponse],
            error_mapper=delete_public_form_error_mapper,
            request_options=request_options,
        )

    def get_public_form(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicFormsResponse1, GetPublicFormErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/public-forms/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PublicFormsResponse1],
            error_mapper=get_public_form_error_mapper,
            request_options=request_options,
        )

    def list_public_forms(
        self, *, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicFormsResponse, ListPublicFormsErrorBody]:
        """Retrieve the shareable public forms (PowerForms) of your organization.

        Args:
            per_page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/public-forms"),
            query_params=[param[int | None]("per_page", per_page)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PublicFormsResponse],
            error_mapper=list_public_forms_error_mapper,
            request_options=request_options,
        )

    def rotate_public_form_token(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicFormsRotateTokenResponse, RotatePublicFormTokenErrorBody]:
        """Generate a new public token. The previous link stops working immediately — use this if a link leaked or was
        shared too widely.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/public-forms/{id}/rotate-token"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PublicFormsRotateTokenResponse],
            error_mapper=rotate_public_form_token_error_mapper,
            request_options=request_options,
        )

    def update_public_form(
        self,
        id_: UUID,
        *,
        body: PublicFormsRequest1 | PublicFormsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicFormsResponse1, UpdatePublicFormErrorBody]:
        """Rename, pause/reactivate, change the expiry or the daily cap.

        Args:
            id_: Resource UUID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/public-forms/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicFormsRequest1 | PublicFormsRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PublicFormsResponse1],
            error_mapper=update_public_form_error_mapper,
            request_options=request_options,
        )


class AsyncPublicFormsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_public_form(
        self,
        body: PublicFormsRequest | PublicFormsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicFormsResponse1, CreatePublicFormErrorBody]:
        """Publish a shareable link backed by one of your sign request templates. Anyone opening the link fills in their
        details and becomes the signer of their own signature request, generated on the fly. The template MUST have
        exactly one signer and its own copy of the PDF.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/public-forms"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicFormsRequest | PublicFormsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PublicFormsResponse1],
            error_mapper=create_public_form_error_mapper,
            request_options=request_options,
        )

    async def delete_public_form(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeletePublicFormErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/public-forms/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=delete_public_form_error_mapper,
            request_options=request_options,
        )

    async def get_public_form(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicFormsResponse1, GetPublicFormErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/public-forms/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PublicFormsResponse1],
            error_mapper=get_public_form_error_mapper,
            request_options=request_options,
        )

    async def list_public_forms(
        self, *, per_page: int | None = 20, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicFormsResponse, ListPublicFormsErrorBody]:
        """Retrieve the shareable public forms (PowerForms) of your organization.

        Args:
            per_page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/public-forms"),
            query_params=[param[int | None]("per_page", per_page)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PublicFormsResponse],
            error_mapper=list_public_forms_error_mapper,
            request_options=request_options,
        )

    async def rotate_public_form_token(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicFormsRotateTokenResponse, RotatePublicFormTokenErrorBody]:
        """Generate a new public token. The previous link stops working immediately — use this if a link leaked or was
        shared too widely.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/public-forms/{id}/rotate-token"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PublicFormsRotateTokenResponse],
            error_mapper=rotate_public_form_token_error_mapper,
            request_options=request_options,
        )

    async def update_public_form(
        self,
        id_: UUID,
        *,
        body: PublicFormsRequest1 | PublicFormsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicFormsResponse1, UpdatePublicFormErrorBody]:
        """Rename, pause/reactivate, change the expiry or the daily cap.

        Args:
            id_: Resource UUID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/public-forms/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicFormsRequest1 | PublicFormsRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PublicFormsResponse1],
            error_mapper=update_public_form_error_mapper,
            request_options=request_options,
        )
