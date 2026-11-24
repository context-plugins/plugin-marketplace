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
from ..errors.get_form_deliveries_error import GetFormDeliveriesErrorBody, get_form_deliveries_error_mapper
from ..errors.redeliver_form_responses_error import (
    RedeliverFormResponsesErrorBody,
    redeliver_form_responses_error_mapper,
)
from ..errors.retry_form_deliveries_error import RetryFormDeliveriesErrorBody, retry_form_deliveries_error_mapper
from ..models.api_v1_manage_forms_deliveries_redeliver_request import (
    ApiV1ManageFormsDeliveriesRedeliverRequest,
    ApiV1ManageFormsDeliveriesRedeliverRequestDict,
)
from ..models.api_v1_manage_forms_deliveries_redeliver_response import ApiV1ManageFormsDeliveriesRedeliverResponse
from ..models.api_v1_manage_forms_deliveries_retry_request import (
    ApiV1ManageFormsDeliveriesRetryRequest,
    ApiV1ManageFormsDeliveriesRetryRequestDict,
)
from ..models.api_v1_manage_forms_deliveries_retry_response import ApiV1ManageFormsDeliveriesRetryResponse
from ..models.delivery_health import DeliveryHealth
from ..server.server import Server


class Deliveries:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DeliveriesWithRawResponse(client, server, auth)

    def get_form_deliveries(self, form: str, *, request_options: RequestOptionsOrDict | None = None) -> DeliveryHealth:
        """Per-destination delivery health plus the bounded recent-delivery list — exactly what the form's Activity page
        shows. Counts cover the telemetry retention window, not all time. Destinations are NAMED rather than spelled
        out: a webhook's target URL is the credential that authorizes posting to it, so a connector-owned hook is
        labelled by its connector (“Zapier”, “n8n”) and any other webhook by its host plus a short fingerprint of its
        path. The dashboard's Activity page is where a signed-in member reads the full URL. Scope: responses:manage.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Destination health and recent deliveries.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_form_deliveries(form, request_options=request_options))

    def redeliver_form_responses(
        self,
        form: str,
        body: ApiV1ManageFormsDeliveriesRedeliverRequest | ApiV1ManageFormsDeliveriesRedeliverRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ManageFormsDeliveriesRedeliverResponse:
        """Send responses to every current destination again as a new delivery. This is not a repair: receivers that are
        not idempotent will see duplicates, which makes it outward-facing (Tier B). Held responses are never
        redelivered. Scope: responses:manage.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            How many responses were sent again.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request body exceeded
                the 16 KiB management cap. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit
                exceeded. Retry after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.redeliver_form_responses(form, body, request_options=request_options))

    def retry_form_deliveries(
        self,
        form: str,
        body: ApiV1ManageFormsDeliveriesRetryRequest | ApiV1ManageFormsDeliveriesRetryRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ManageFormsDeliveriesRetryResponse:
        """Repair deliveries that failed or are overdue. Send exactly one target: ``responseIds`` (repair those
        responses' newest occurrence), ``destinationKey`` (one destination's backlog), ``deliveryKind`` + ``deliveryId``
        (one row), or ``all: true`` (the form's whole failed backlog). A retry re-sends work that was already meant to
        go out, so it is routine (Tier A). Scope: responses:manage.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            How many deliveries were queued again.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request body exceeded
                the 16 KiB management cap. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit
                exceeded. Retry after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.retry_form_deliveries(form, body, request_options=request_options))

    @property
    def with_raw_response(self) -> DeliveriesWithRawResponse:
        return self._with_raw_response


class AsyncDeliveries:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDeliveriesWithRawResponse(client, server, auth)

    async def get_form_deliveries(
        self, form: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DeliveryHealth:
        """Per-destination delivery health plus the bounded recent-delivery list — exactly what the form's Activity page
        shows. Counts cover the telemetry retention window, not all time. Destinations are NAMED rather than spelled
        out: a webhook's target URL is the credential that authorizes posting to it, so a connector-owned hook is
        labelled by its connector (“Zapier”, “n8n”) and any other webhook by its host plus a short fingerprint of its
        path. The dashboard's Activity page is where a signed-in member reads the full URL. Scope: responses:manage.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Destination health and recent deliveries.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_form_deliveries(form, request_options=request_options))

    async def redeliver_form_responses(
        self,
        form: str,
        body: ApiV1ManageFormsDeliveriesRedeliverRequest | ApiV1ManageFormsDeliveriesRedeliverRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageFormsDeliveriesRedeliverResponse:
        """Send responses to every current destination again as a new delivery. This is not a repair: receivers that are
        not idempotent will see duplicates, which makes it outward-facing (Tier B). Held responses are never
        redelivered. Scope: responses:manage.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            How many responses were sent again.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request body exceeded
                the 16 KiB management cap. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit
                exceeded. Retry after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.redeliver_form_responses(form, body, request_options=request_options)
        )

    async def retry_form_deliveries(
        self,
        form: str,
        body: ApiV1ManageFormsDeliveriesRetryRequest | ApiV1ManageFormsDeliveriesRetryRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageFormsDeliveriesRetryResponse:
        """Repair deliveries that failed or are overdue. Send exactly one target: ``responseIds`` (repair those
        responses' newest occurrence), ``destinationKey`` (one destination's backlog), ``deliveryKind`` + ``deliveryId``
        (one row), or ``all: true`` (the form's whole failed backlog). A retry re-sends work that was already meant to
        go out, so it is routine (Tier A). Scope: responses:manage.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            How many deliveries were queued again.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request body exceeded
                the 16 KiB management cap. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit
                exceeded. Retry after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.retry_form_deliveries(form, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDeliveriesWithRawResponse:
        return self._with_raw_response


class DeliveriesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_form_deliveries(
        self, form: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DeliveryHealth, GetFormDeliveriesErrorBody]:
        """Per-destination delivery health plus the bounded recent-delivery list — exactly what the form's Activity page
        shows. Counts cover the telemetry retention window, not all time. Destinations are NAMED rather than spelled
        out: a webhook's target URL is the credential that authorizes posting to it, so a connector-owned hook is
        labelled by its connector (“Zapier”, “n8n”) and any other webhook by its host plus a short fingerprint of its
        path. The dashboard's Activity page is where a signed-in member reads the full URL. Scope: responses:manage.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/forms/{form}/deliveries"),
            path_params=[param[str]("form", form)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DeliveryHealth],
            error_mapper=get_form_deliveries_error_mapper,
            request_options=request_options,
        )

    def redeliver_form_responses(
        self,
        form: str,
        body: ApiV1ManageFormsDeliveriesRedeliverRequest | ApiV1ManageFormsDeliveriesRedeliverRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageFormsDeliveriesRedeliverResponse, RedeliverFormResponsesErrorBody]:
        """Send responses to every current destination again as a new delivery. This is not a repair: receivers that are
        not idempotent will see duplicates, which makes it outward-facing (Tier B). Held responses are never
        redelivered. Scope: responses:manage.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/manage/forms/{form}/deliveries/redeliver"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageFormsDeliveriesRedeliverRequest | ApiV1ManageFormsDeliveriesRedeliverRequestDict](
                body
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageFormsDeliveriesRedeliverResponse],
            error_mapper=redeliver_form_responses_error_mapper,
            request_options=request_options,
        )

    def retry_form_deliveries(
        self,
        form: str,
        body: ApiV1ManageFormsDeliveriesRetryRequest | ApiV1ManageFormsDeliveriesRetryRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageFormsDeliveriesRetryResponse, RetryFormDeliveriesErrorBody]:
        """Repair deliveries that failed or are overdue. Send exactly one target: ``responseIds`` (repair those
        responses' newest occurrence), ``destinationKey`` (one destination's backlog), ``deliveryKind`` + ``deliveryId``
        (one row), or ``all: true`` (the form's whole failed backlog). A retry re-sends work that was already meant to
        go out, so it is routine (Tier A). Scope: responses:manage.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/manage/forms/{form}/deliveries/retry"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageFormsDeliveriesRetryRequest | ApiV1ManageFormsDeliveriesRetryRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageFormsDeliveriesRetryResponse],
            error_mapper=retry_form_deliveries_error_mapper,
            request_options=request_options,
        )


class AsyncDeliveriesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_form_deliveries(
        self, form: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DeliveryHealth, GetFormDeliveriesErrorBody]:
        """Per-destination delivery health plus the bounded recent-delivery list — exactly what the form's Activity page
        shows. Counts cover the telemetry retention window, not all time. Destinations are NAMED rather than spelled
        out: a webhook's target URL is the credential that authorizes posting to it, so a connector-owned hook is
        labelled by its connector (“Zapier”, “n8n”) and any other webhook by its host plus a short fingerprint of its
        path. The dashboard's Activity page is where a signed-in member reads the full URL. Scope: responses:manage.

        Args:
            form: A form id or slug.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/forms/{form}/deliveries"),
            path_params=[param[str]("form", form)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DeliveryHealth],
            error_mapper=get_form_deliveries_error_mapper,
            request_options=request_options,
        )

    async def redeliver_form_responses(
        self,
        form: str,
        body: ApiV1ManageFormsDeliveriesRedeliverRequest | ApiV1ManageFormsDeliveriesRedeliverRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageFormsDeliveriesRedeliverResponse, RedeliverFormResponsesErrorBody]:
        """Send responses to every current destination again as a new delivery. This is not a repair: receivers that are
        not idempotent will see duplicates, which makes it outward-facing (Tier B). Held responses are never
        redelivered. Scope: responses:manage.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/manage/forms/{form}/deliveries/redeliver"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageFormsDeliveriesRedeliverRequest | ApiV1ManageFormsDeliveriesRedeliverRequestDict](
                body
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageFormsDeliveriesRedeliverResponse],
            error_mapper=redeliver_form_responses_error_mapper,
            request_options=request_options,
        )

    async def retry_form_deliveries(
        self,
        form: str,
        body: ApiV1ManageFormsDeliveriesRetryRequest | ApiV1ManageFormsDeliveriesRetryRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageFormsDeliveriesRetryResponse, RetryFormDeliveriesErrorBody]:
        """Repair deliveries that failed or are overdue. Send exactly one target: ``responseIds`` (repair those
        responses' newest occurrence), ``destinationKey`` (one destination's backlog), ``deliveryKind`` + ``deliveryId``
        (one row), or ``all: true`` (the form's whole failed backlog). A retry re-sends work that was already meant to
        go out, so it is routine (Tier A). Scope: responses:manage.

        Args:
            form: A form id or slug.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/manage/forms/{form}/deliveries/retry"),
            path_params=[param[str]("form", form)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageFormsDeliveriesRetryRequest | ApiV1ManageFormsDeliveriesRetryRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageFormsDeliveriesRetryResponse],
            error_mapper=retry_form_deliveries_error_mapper,
            request_options=request_options,
        )
