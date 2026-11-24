from __future__ import annotations

from typing import Any

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_api_status_error import GetApiStatusErrorBody, get_api_status_error_mapper
from ..errors.get_data_dictionary_error import GetDataDictionaryErrorBody, get_data_dictionary_error_mapper
from ..errors.get_key_usage_error import GetKeyUsageErrorBody, get_key_usage_error_mapper
from ..errors.get_meta_index_error import GetMetaIndexErrorBody, get_meta_index_error_mapper
from ..errors.get_open_api_document_error import GetOpenApiDocumentErrorBody, get_open_api_document_error_mapper
from ..errors.get_sandbox_manifest_error import GetSandboxManifestErrorBody, get_sandbox_manifest_error_mapper
from ..models.enums.fill_rates import FillRatesOrStr
from ..models.enums.format import FormatOrStr
from ..server.server import Server


class Meta:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MetaWithRawResponse(client, server, auth)

    def get_api_status(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Live availability of the API and its database dependency, the current contract version, the supported-version
        table, the deprecation policy, and the age of the most recent ingest. Returns 503 when the database probe fails,
        so an uptime monitor sees a non-200. Public and unmetered.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``internal_error`` — The request was accepted and failed on our side. Next: Retry with exponential
                backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check /api/v1/meta/status and
                contact support with the time of the request. ``service_unavailable`` — A backing dependency is
                unreachable. Returned by the status endpoint when its own database probe fails, so uptime monitors see a
                non-200. Next: Treat as transient and retry with backoff. /api/v1/meta/status reports which dependency
                is failing. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_api_status(request_options=request_options))

    def get_data_dictionary(
        self,
        *,
        resource: str | None = None,
        fill_rates: FillRatesOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Every resource and every field: type, meaning, source, how often the field is actually populated, how many
        rows stand behind it, when a row last landed, and the refresh cadence of the feed. Volumes and fill rates are
        measured at request time and each carries the method that produced it — an estimate is never presented as exact.

        Args:
            resource: Limit to one resource key, for example ``associations``.
            fill_rates: ``1`` (default) measures per-field fill rates from planner statistics; ``0`` skips them for a
                faster response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``internal_error`` — The request was accepted and failed on our side.
                Next: Retry with exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes,
                check /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_data_dictionary(
                resource=resource, fill_rates=fill_rates, request_options=request_options
            ),
        )

    def get_key_usage(self, *, days: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Any:
        """What this key has spent this month, what remains, when it resets, which endpoints it called, and its most
        recent errors. Reads the plan from the database at request time. Does not consume quota.

        Args:
            days: Days of daily history to return, 1-90. Default 30.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``internal_error`` — The request was accepted and failed on our side.
                Next: Retry with exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes,
                check /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.get_key_usage(days=days, request_options=request_options))

    def get_meta_index(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Discovery document: every meta endpoint, what it is for, and whether it needs a key.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``internal_error`` — The request was accepted and failed on our side. Next: Retry with exponential
                backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check /api/v1/meta/status and
                contact support with the time of the request. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_meta_index(request_options=request_options))

    def get_open_api_document(
        self, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """The OpenAPI 3.1 description of this API, generated from the same definitions the reference documentation
        renders. ``?format=yaml`` returns YAML for gateways that require it. Public: no key needed, because an evaluator
        has to be able to import the spec before they have one. Presenting a key annotates the document with that key's
        plan and remaining quota.

        Args:
            format_: ``json`` (default) or ``yaml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``internal_error`` — The request was accepted and
                failed on our side. Next: Retry with exponential backoff (1s, 2s, 4s, up to about 30s). If it persists
                past a few minutes, check /api/v1/meta/status and contact support with the time of the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_open_api_document(format_=format_, request_options=request_options))

    def get_sandbox_manifest(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """The published test key, the sandbox base URL, and the fixed record set behind it. Integrate and test a client
        with no account, no plan and no quota consumption, then change the base URL and the key to go live.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``internal_error`` — The request was accepted and failed on our side. Next: Retry with exponential
                backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check /api/v1/meta/status and
                contact support with the time of the request. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_sandbox_manifest(request_options=request_options))

    @property
    def with_raw_response(self) -> MetaWithRawResponse:
        return self._with_raw_response


class AsyncMeta:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMetaWithRawResponse(client, server, auth)

    async def get_api_status(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Live availability of the API and its database dependency, the current contract version, the supported-version
        table, the deprecation policy, and the age of the most recent ingest. Returns 503 when the database probe fails,
        so an uptime monitor sees a non-200. Public and unmetered.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``internal_error`` — The request was accepted and failed on our side. Next: Retry with exponential
                backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check /api/v1/meta/status and
                contact support with the time of the request. ``service_unavailable`` — A backing dependency is
                unreachable. Returned by the status endpoint when its own database probe fails, so uptime monitors see a
                non-200. Next: Treat as transient and retry with backoff. /api/v1/meta/status reports which dependency
                is failing. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_api_status(request_options=request_options))

    async def get_data_dictionary(
        self,
        *,
        resource: str | None = None,
        fill_rates: FillRatesOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Every resource and every field: type, meaning, source, how often the field is actually populated, how many
        rows stand behind it, when a row last landed, and the refresh cadence of the feed. Volumes and fill rates are
        measured at request time and each carries the method that produced it — an estimate is never presented as exact.

        Args:
            resource: Limit to one resource key, for example ``associations``.
            fill_rates: ``1`` (default) measures per-field fill rates from planner statistics; ``0`` skips them for a
                faster response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``internal_error`` — The request was accepted and failed on our side.
                Next: Retry with exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes,
                check /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_data_dictionary(
                resource=resource, fill_rates=fill_rates, request_options=request_options
            ),
        )

    async def get_key_usage(
        self, *, days: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """What this key has spent this month, what remains, when it resets, which endpoints it called, and its most
        recent errors. Reads the plan from the database at request time. Does not consume quota.

        Args:
            days: Days of daily history to return, 1-90. Default 30.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``internal_error`` — The request was accepted and failed on our side.
                Next: Retry with exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes,
                check /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.get_key_usage(days=days, request_options=request_options))

    async def get_meta_index(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Discovery document: every meta endpoint, what it is for, and whether it needs a key.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``internal_error`` — The request was accepted and failed on our side. Next: Retry with exponential
                backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check /api/v1/meta/status and
                contact support with the time of the request. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_meta_index(request_options=request_options))

    async def get_open_api_document(
        self, *, format_: FormatOrStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """The OpenAPI 3.1 description of this API, generated from the same definitions the reference documentation
        renders. ``?format=yaml`` returns YAML for gateways that require it. Public: no key needed, because an evaluator
        has to be able to import the spec before they have one. Presenting a key annotates the document with that key's
        plan and remaining quota.

        Args:
            format_: ``json`` (default) or ``yaml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``internal_error`` — The request was accepted and
                failed on our side. Next: Retry with exponential backoff (1s, 2s, 4s, up to about 30s). If it persists
                past a few minutes, check /api/v1/meta/status and contact support with the time of the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_open_api_document(format_=format_, request_options=request_options)
        )

    async def get_sandbox_manifest(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """The published test key, the sandbox base URL, and the fixed record set behind it. Integrate and test a client
        with no account, no plan and no quota consumption, then change the base URL and the key to go live.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``internal_error`` — The request was accepted and failed on our side. Next: Retry with exponential
                backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check /api/v1/meta/status and
                contact support with the time of the request. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_sandbox_manifest(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncMetaWithRawResponse:
        return self._with_raw_response


class MetaWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_status(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetApiStatusErrorBody]:
        """Live availability of the API and its database dependency, the current contract version, the supported-version
        table, the deprecation policy, and the age of the most recent ingest. Returns 503 when the database probe fails,
        so an uptime monitor sees a non-200. Public and unmetered.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/meta/status"),
            decoder=json_decoder[Any],
            error_mapper=get_api_status_error_mapper,
            request_options=request_options,
        )

    def get_data_dictionary(
        self,
        *,
        resource: str | None = None,
        fill_rates: FillRatesOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetDataDictionaryErrorBody]:
        """Every resource and every field: type, meaning, source, how often the field is actually populated, how many
        rows stand behind it, when a row last landed, and the refresh cadence of the feed. Volumes and fill rates are
        measured at request time and each carries the method that produced it — an estimate is never presented as exact.

        Args:
            resource: Limit to one resource key, for example ``associations``.
            fill_rates: ``1`` (default) measures per-field fill rates from planner statistics; ``0`` skips them for a
                faster response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/meta/dictionary"),
            query_params=[
                param[str | None]("resource", resource), param[FillRatesOrStr | None]("fill_rates", fill_rates)
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Any],
            error_mapper=get_data_dictionary_error_mapper,
            request_options=request_options,
        )

    def get_key_usage(
        self, *, days: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetKeyUsageErrorBody]:
        """What this key has spent this month, what remains, when it resets, which endpoints it called, and its most
        recent errors. Reads the plan from the database at request time. Does not consume quota.

        Args:
            days: Days of daily history to return, 1-90. Default 30.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/meta/usage"),
            query_params=[param[int | None]("days", days)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Any],
            error_mapper=get_key_usage_error_mapper,
            request_options=request_options,
        )

    def get_meta_index(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetMetaIndexErrorBody]:
        """Discovery document: every meta endpoint, what it is for, and whether it needs a key.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/meta"),
            decoder=json_decoder[Any],
            error_mapper=get_meta_index_error_mapper,
            request_options=request_options,
        )

    def get_open_api_document(
        self, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetOpenApiDocumentErrorBody]:
        """The OpenAPI 3.1 description of this API, generated from the same definitions the reference documentation
        renders. ``?format=yaml`` returns YAML for gateways that require it. Public: no key needed, because an evaluator
        has to be able to import the spec before they have one. Presenting a key annotates the document with that key's
        plan and remaining quota.

        Args:
            format_: ``json`` (default) or ``yaml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/openapi"),
            query_params=[param[FormatOrStr | None]("format", format_)],
            decoder=json_decoder[Any],
            error_mapper=get_open_api_document_error_mapper,
            request_options=request_options,
        )

    def get_sandbox_manifest(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetSandboxManifestErrorBody]:
        """The published test key, the sandbox base URL, and the fixed record set behind it. Integrate and test a client
        with no account, no plan and no quota consumption, then change the base URL and the key to go live.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/meta/sandbox"),
            decoder=json_decoder[Any],
            error_mapper=get_sandbox_manifest_error_mapper,
            request_options=request_options,
        )


class AsyncMetaWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_status(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetApiStatusErrorBody]:
        """Live availability of the API and its database dependency, the current contract version, the supported-version
        table, the deprecation policy, and the age of the most recent ingest. Returns 503 when the database probe fails,
        so an uptime monitor sees a non-200. Public and unmetered.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/meta/status"),
            decoder=async_json_decoder[Any],
            error_mapper=get_api_status_error_mapper,
            request_options=request_options,
        )

    async def get_data_dictionary(
        self,
        *,
        resource: str | None = None,
        fill_rates: FillRatesOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetDataDictionaryErrorBody]:
        """Every resource and every field: type, meaning, source, how often the field is actually populated, how many
        rows stand behind it, when a row last landed, and the refresh cadence of the feed. Volumes and fill rates are
        measured at request time and each carries the method that produced it — an estimate is never presented as exact.

        Args:
            resource: Limit to one resource key, for example ``associations``.
            fill_rates: ``1`` (default) measures per-field fill rates from planner statistics; ``0`` skips them for a
                faster response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/meta/dictionary"),
            query_params=[
                param[str | None]("resource", resource), param[FillRatesOrStr | None]("fill_rates", fill_rates)
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Any],
            error_mapper=get_data_dictionary_error_mapper,
            request_options=request_options,
        )

    async def get_key_usage(
        self, *, days: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetKeyUsageErrorBody]:
        """What this key has spent this month, what remains, when it resets, which endpoints it called, and its most
        recent errors. Reads the plan from the database at request time. Does not consume quota.

        Args:
            days: Days of daily history to return, 1-90. Default 30.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/meta/usage"),
            query_params=[param[int | None]("days", days)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Any],
            error_mapper=get_key_usage_error_mapper,
            request_options=request_options,
        )

    async def get_meta_index(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetMetaIndexErrorBody]:
        """Discovery document: every meta endpoint, what it is for, and whether it needs a key.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/meta"),
            decoder=async_json_decoder[Any],
            error_mapper=get_meta_index_error_mapper,
            request_options=request_options,
        )

    async def get_open_api_document(
        self, *, format_: FormatOrStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetOpenApiDocumentErrorBody]:
        """The OpenAPI 3.1 description of this API, generated from the same definitions the reference documentation
        renders. ``?format=yaml`` returns YAML for gateways that require it. Public: no key needed, because an evaluator
        has to be able to import the spec before they have one. Presenting a key annotates the document with that key's
        plan and remaining quota.

        Args:
            format_: ``json`` (default) or ``yaml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/openapi"),
            query_params=[param[FormatOrStr | None]("format", format_)],
            decoder=async_json_decoder[Any],
            error_mapper=get_open_api_document_error_mapper,
            request_options=request_options,
        )

    async def get_sandbox_manifest(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetSandboxManifestErrorBody]:
        """The published test key, the sandbox base URL, and the fixed record set behind it. Integrate and test a client
        with no account, no plan and no quota consumption, then change the base URL and the key to go live.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/meta/sandbox"),
            decoder=async_json_decoder[Any],
            error_mapper=get_sandbox_manifest_error_mapper,
            request_options=request_options,
        )
