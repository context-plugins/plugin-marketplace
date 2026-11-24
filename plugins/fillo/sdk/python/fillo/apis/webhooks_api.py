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
from ..errors.create_form_webhook_error import CreateFormWebhookErrorBody, create_form_webhook_error_mapper
from ..errors.delete_form_webhook_error import DeleteFormWebhookErrorBody, delete_form_webhook_error_mapper
from ..errors.list_form_webhooks_error import ListFormWebhooksErrorBody, list_form_webhooks_error_mapper
from ..errors.update_form_webhook_error import UpdateFormWebhookErrorBody, update_form_webhook_error_mapper
from ..models.api_v1_manage_forms_webhooks_request import (
    ApiV1ManageFormsWebhooksRequest,
    ApiV1ManageFormsWebhooksRequestDict,
)
from ..models.api_v1_manage_forms_webhooks_request1 import (
    ApiV1ManageFormsWebhooksRequest1,
    ApiV1ManageFormsWebhooksRequest1Dict,
)
from ..models.api_v1_manage_forms_webhooks_response import ApiV1ManageFormsWebhooksResponse
from ..models.api_v1_manage_forms_webhooks_response1 import ApiV1ManageFormsWebhooksResponse1
from ..models.api_v1_manage_forms_webhooks_response2 import ApiV1ManageFormsWebhooksResponse2
from ..models.webhook_created import WebhookCreated
from ..server.server import Server


class WebhooksApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WebhooksApiWithRawResponse(client, server, auth)

    def create_form_webhook(
        self,
        form: str,
        body: ApiV1ManageFormsWebhooksRequest | ApiV1ManageFormsWebhooksRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WebhookCreated:
        """Register a signed webhook with optional receiver authentication. The response includes the Fillo signing
        secret ONCE; neither it nor a receiver credential is retrievable again. Delivery URLs are SSRF-guarded and must
        be http(s). Scope: webhooks:manage.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created webhook, with its signing secret shown once.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_form_webhook(form, body, request_options=request_options))

    def delete_form_webhook(
        self, form: str, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageFormsWebhooksResponse2:
        """Remove one of the form's signed webhooks. Scope: webhooks:manage.

        Args:
            form: A form id or slug.
            id_: A webhook id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted.

        Raises:
            ApiError: Missing, malformed, unknown, revoked, or expired key. The key is valid but lacks the required
                scope. No such resource in this project (returned instead of 403 for ids in other projects). Per-key
                (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After
                header. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_form_webhook(form, id_, request_options=request_options))

    def list_form_webhooks(
        self, form: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageFormsWebhooksResponse:
        """The form's signed webhooks (Zapier subscriptions excluded). Signing and receiver-authentication secrets are
        never returned. Scope: webhooks:manage.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The form's webhooks.

        Raises:
            ApiError: Missing, malformed, unknown, revoked, or expired key. The key is valid but lacks the required
                scope. No such resource in this project (returned instead of 403 for ids in other projects). Per-key
                (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After
                header. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_form_webhooks(form, request_options=request_options))

    def update_form_webhook(
        self,
        form: str,
        id_: str,
        body: ApiV1ManageFormsWebhooksRequest1 | ApiV1ManageFormsWebhooksRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ManageFormsWebhooksResponse1:
        """Turn draft.abandoned delivery on or off, replace receiver authentication, or remove it with
        authentication.type none. Receiver credentials remain write-only. Scope: webhooks:manage.

        Args:
            form: A form id or slug.
            id_: A webhook id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The webhook's updated event set.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_form_webhook(form, id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> WebhooksApiWithRawResponse:
        return self._with_raw_response


class AsyncWebhooksApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWebhooksApiWithRawResponse(client, server, auth)

    async def create_form_webhook(
        self,
        form: str,
        body: ApiV1ManageFormsWebhooksRequest | ApiV1ManageFormsWebhooksRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhookCreated:
        """Register a signed webhook with optional receiver authentication. The response includes the Fillo signing
        secret ONCE; neither it nor a receiver credential is retrievable again. Delivery URLs are SSRF-guarded and must
        be http(s). Scope: webhooks:manage.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created webhook, with its signing secret shown once.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_form_webhook(form, body, request_options=request_options))

    async def delete_form_webhook(
        self, form: str, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ManageFormsWebhooksResponse2:
        """Remove one of the form's signed webhooks. Scope: webhooks:manage.

        Args:
            form: A form id or slug.
            id_: A webhook id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted.

        Raises:
            ApiError: Missing, malformed, unknown, revoked, or expired key. The key is valid but lacks the required
                scope. No such resource in this project (returned instead of 403 for ids in other projects). Per-key
                (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After
                header. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_form_webhook(form, id_, request_options=request_options))

    async def list_form_webhooks(
        self, form: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ManageFormsWebhooksResponse:
        """The form's signed webhooks (Zapier subscriptions excluded). Signing and receiver-authentication secrets are
        never returned. Scope: webhooks:manage.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The form's webhooks.

        Raises:
            ApiError: Missing, malformed, unknown, revoked, or expired key. The key is valid but lacks the required
                scope. No such resource in this project (returned instead of 403 for ids in other projects). Per-key
                (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After
                header. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_form_webhooks(form, request_options=request_options))

    async def update_form_webhook(
        self,
        form: str,
        id_: str,
        body: ApiV1ManageFormsWebhooksRequest1 | ApiV1ManageFormsWebhooksRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageFormsWebhooksResponse1:
        """Turn draft.abandoned delivery on or off, replace receiver authentication, or remove it with
        authentication.type none. Receiver credentials remain write-only. Scope: webhooks:manage.

        Args:
            form: A form id or slug.
            id_: A webhook id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The webhook's updated event set.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_form_webhook(form, id_, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncWebhooksApiWithRawResponse:
        return self._with_raw_response


class WebhooksApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_form_webhook(
        self,
        form: str,
        body: ApiV1ManageFormsWebhooksRequest | ApiV1ManageFormsWebhooksRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookCreated, CreateFormWebhookErrorBody]:
        """Register a signed webhook with optional receiver authentication. The response includes the Fillo signing
        secret ONCE; neither it nor a receiver credential is retrievable again. Delivery URLs are SSRF-guarded and must
        be http(s). Scope: webhooks:manage.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/manage/forms/{form}/webhooks"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageFormsWebhooksRequest | ApiV1ManageFormsWebhooksRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[WebhookCreated],
            error_mapper=create_form_webhook_error_mapper,
            request_options=request_options,
        )

    def delete_form_webhook(
        self, form: str, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageFormsWebhooksResponse2, DeleteFormWebhookErrorBody]:
        """Remove one of the form's signed webhooks. Scope: webhooks:manage.

        Args:
            form: A form id or slug.
            id_: A webhook id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/forms/{form}/webhooks/{id}"),
            path_params=[param[str]("form", form), param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageFormsWebhooksResponse2],
            error_mapper=delete_form_webhook_error_mapper,
            request_options=request_options,
        )

    def list_form_webhooks(
        self, form: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageFormsWebhooksResponse, ListFormWebhooksErrorBody]:
        """The form's signed webhooks (Zapier subscriptions excluded). Signing and receiver-authentication secrets are
        never returned. Scope: webhooks:manage.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/forms/{form}/webhooks"),
            path_params=[param[str]("form", form)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageFormsWebhooksResponse],
            error_mapper=list_form_webhooks_error_mapper,
            request_options=request_options,
        )

    def update_form_webhook(
        self,
        form: str,
        id_: str,
        body: ApiV1ManageFormsWebhooksRequest1 | ApiV1ManageFormsWebhooksRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageFormsWebhooksResponse1, UpdateFormWebhookErrorBody]:
        """Turn draft.abandoned delivery on or off, replace receiver authentication, or remove it with
        authentication.type none. Receiver credentials remain write-only. Scope: webhooks:manage.

        Args:
            form: A form id or slug.
            id_: A webhook id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/manage/forms/{form}/webhooks/{id}"),
            path_params=[param[str]("form", form), param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageFormsWebhooksRequest1 | ApiV1ManageFormsWebhooksRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageFormsWebhooksResponse1],
            error_mapper=update_form_webhook_error_mapper,
            request_options=request_options,
        )


class AsyncWebhooksApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_form_webhook(
        self,
        form: str,
        body: ApiV1ManageFormsWebhooksRequest | ApiV1ManageFormsWebhooksRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookCreated, CreateFormWebhookErrorBody]:
        """Register a signed webhook with optional receiver authentication. The response includes the Fillo signing
        secret ONCE; neither it nor a receiver credential is retrievable again. Delivery URLs are SSRF-guarded and must
        be http(s). Scope: webhooks:manage.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/manage/forms/{form}/webhooks"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageFormsWebhooksRequest | ApiV1ManageFormsWebhooksRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[WebhookCreated],
            error_mapper=create_form_webhook_error_mapper,
            request_options=request_options,
        )

    async def delete_form_webhook(
        self, form: str, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageFormsWebhooksResponse2, DeleteFormWebhookErrorBody]:
        """Remove one of the form's signed webhooks. Scope: webhooks:manage.

        Args:
            form: A form id or slug.
            id_: A webhook id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/forms/{form}/webhooks/{id}"),
            path_params=[param[str]("form", form), param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageFormsWebhooksResponse2],
            error_mapper=delete_form_webhook_error_mapper,
            request_options=request_options,
        )

    async def list_form_webhooks(
        self, form: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageFormsWebhooksResponse, ListFormWebhooksErrorBody]:
        """The form's signed webhooks (Zapier subscriptions excluded). Signing and receiver-authentication secrets are
        never returned. Scope: webhooks:manage.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/forms/{form}/webhooks"),
            path_params=[param[str]("form", form)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageFormsWebhooksResponse],
            error_mapper=list_form_webhooks_error_mapper,
            request_options=request_options,
        )

    async def update_form_webhook(
        self,
        form: str,
        id_: str,
        body: ApiV1ManageFormsWebhooksRequest1 | ApiV1ManageFormsWebhooksRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageFormsWebhooksResponse1, UpdateFormWebhookErrorBody]:
        """Turn draft.abandoned delivery on or off, replace receiver authentication, or remove it with
        authentication.type none. Receiver credentials remain write-only. Scope: webhooks:manage.

        Args:
            form: A form id or slug.
            id_: A webhook id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/manage/forms/{form}/webhooks/{id}"),
            path_params=[param[str]("form", form), param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageFormsWebhooksRequest1 | ApiV1ManageFormsWebhooksRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageFormsWebhooksResponse1],
            error_mapper=update_form_webhook_error_mapper,
            request_options=request_options,
        )
