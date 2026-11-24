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
from ..errors.get_form_settings_error import GetFormSettingsErrorBody, get_form_settings_error_mapper
from ..errors.update_form_settings_error import UpdateFormSettingsErrorBody, update_form_settings_error_mapper
from ..models.form_settings_envelope import FormSettingsEnvelope
from ..server.server import Server


class Settings:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SettingsWithRawResponse(client, server, auth)

    def get_form_settings(
        self, form: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FormSettingsEnvelope:
        """The form's current operational settings (notifications, receipts, save-and-resume, response limits, and the
        like). Scope: settings:manage.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The form's settings.

        Raises:
            ApiError: Missing, malformed, unknown, revoked, or expired key. The key is valid but lacks the required
                scope. No such resource in this project (returned instead of 403 for ids in other projects). Per-key
                (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After
                header. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_form_settings(form, request_options=request_options))

    def update_form_settings(
        self, form: str, body: Any, *, request_options: RequestOptionsOrDict | None = None
    ) -> FormSettingsEnvelope:
        """Update one or more operational settings. The request body IS the settings patch object, validated and saved
        by the same writer as the dashboard; any key set to null is cleared. Scope: settings:manage — plus forms:write
        whenever the patch names one of the six presentation keys (submitMode, submitLabel, successTitle,
        successMessage, redirectUrl, showProgress), which live inside the form schema rather than beside it. The 403
        names the missing scope.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated settings.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The patch conflicts with
                the form's current state. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit
                exceeded. Retry after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_form_settings(form, body, request_options=request_options))

    @property
    def with_raw_response(self) -> SettingsWithRawResponse:
        return self._with_raw_response


class AsyncSettings:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSettingsWithRawResponse(client, server, auth)

    async def get_form_settings(
        self, form: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FormSettingsEnvelope:
        """The form's current operational settings (notifications, receipts, save-and-resume, response limits, and the
        like). Scope: settings:manage.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The form's settings.

        Raises:
            ApiError: Missing, malformed, unknown, revoked, or expired key. The key is valid but lacks the required
                scope. No such resource in this project (returned instead of 403 for ids in other projects). Per-key
                (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After
                header. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_form_settings(form, request_options=request_options))

    async def update_form_settings(
        self, form: str, body: Any, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FormSettingsEnvelope:
        """Update one or more operational settings. The request body IS the settings patch object, validated and saved
        by the same writer as the dashboard; any key set to null is cleared. Scope: settings:manage — plus forms:write
        whenever the patch names one of the six presentation keys (submitMode, submitLabel, successTitle,
        successMessage, redirectUrl, showProgress), which live inside the form schema rather than beside it. The 403
        names the missing scope.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated settings.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The patch conflicts with
                the form's current state. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit
                exceeded. Retry after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_form_settings(form, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSettingsWithRawResponse:
        return self._with_raw_response


class SettingsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_form_settings(
        self, form: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FormSettingsEnvelope, GetFormSettingsErrorBody]:
        """The form's current operational settings (notifications, receipts, save-and-resume, response limits, and the
        like). Scope: settings:manage.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/forms/{form}/settings"),
            path_params=[param[str]("form", form)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[FormSettingsEnvelope],
            error_mapper=get_form_settings_error_mapper,
            request_options=request_options,
        )

    def update_form_settings(
        self, form: str, body: Any, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FormSettingsEnvelope, UpdateFormSettingsErrorBody]:
        """Update one or more operational settings. The request body IS the settings patch object, validated and saved
        by the same writer as the dashboard; any key set to null is cleared. Scope: settings:manage — plus forms:write
        whenever the patch names one of the six presentation keys (submitMode, submitLabel, successTitle,
        successMessage, redirectUrl, showProgress), which live inside the form schema rather than beside it. The 403
        names the missing scope.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/manage/forms/{form}/settings"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[FormSettingsEnvelope],
            error_mapper=update_form_settings_error_mapper,
            request_options=request_options,
        )


class AsyncSettingsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_form_settings(
        self, form: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FormSettingsEnvelope, GetFormSettingsErrorBody]:
        """The form's current operational settings (notifications, receipts, save-and-resume, response limits, and the
        like). Scope: settings:manage.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/forms/{form}/settings"),
            path_params=[param[str]("form", form)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[FormSettingsEnvelope],
            error_mapper=get_form_settings_error_mapper,
            request_options=request_options,
        )

    async def update_form_settings(
        self, form: str, body: Any, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FormSettingsEnvelope, UpdateFormSettingsErrorBody]:
        """Update one or more operational settings. The request body IS the settings patch object, validated and saved
        by the same writer as the dashboard; any key set to null is cleared. Scope: settings:manage — plus forms:write
        whenever the patch names one of the six presentation keys (submitMode, submitLabel, successTitle,
        successMessage, redirectUrl, showProgress), which live inside the form schema rather than beside it. The 403
        names the missing scope.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/manage/forms/{form}/settings"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[FormSettingsEnvelope],
            error_mapper=update_form_settings_error_mapper,
            request_options=request_options,
        )
