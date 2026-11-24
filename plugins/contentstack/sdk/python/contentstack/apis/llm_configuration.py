from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.configure_llm_error import ConfigureLlmErrorBody, configure_llm_error_mapper
from ..errors.get_llm_config_error import GetLlmConfigErrorBody, get_llm_config_error_mapper
from ..models.create_llm_config_request import CreateLlmConfigRequest, CreateLlmConfigRequestDict
from ..models.llm_config import LlmConfig
from ..server.server import Server


class LlmConfiguration:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = LlmConfigurationWithRawResponse(client, server, auth)

    def configure_llm(
        self,
        brand_kit_uid: str,
        organization_uid: str,
        body: CreateLlmConfigRequest | CreateLlmConfigRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> LlmConfig:
        """Registers custom API credentials for an LLM provider to enable content generation through the organization's
        own LLM subscription rather than Contentstack's default AI infrastructure.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            LLM configuration saved successfully.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.configure_llm(
                brand_kit_uid, organization_uid, body, request_options=request_options
            ),
        )

    def get_llm_config(
        self, brand_kit_uid: str, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> LlmConfig:
        """Retrieves the custom LLM provider credentials configured for a Brand Kit. This allows organizations to use
        their own LLM API subscriptions for content generation within the Brand Kit.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The LLM configuration for the Brand Kit.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_llm_config(brand_kit_uid, organization_uid, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> LlmConfigurationWithRawResponse:
        return self._with_raw_response


class AsyncLlmConfiguration:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncLlmConfigurationWithRawResponse(client, server, auth)

    async def configure_llm(
        self,
        brand_kit_uid: str,
        organization_uid: str,
        body: CreateLlmConfigRequest | CreateLlmConfigRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> LlmConfig:
        """Registers custom API credentials for an LLM provider to enable content generation through the organization's
        own LLM subscription rather than Contentstack's default AI infrastructure.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            LLM configuration saved successfully.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.configure_llm(
                brand_kit_uid, organization_uid, body, request_options=request_options
            ),
        )

    async def get_llm_config(
        self, brand_kit_uid: str, organization_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> LlmConfig:
        """Retrieves the custom LLM provider credentials configured for a Brand Kit. This allows organizations to use
        their own LLM API subscriptions for content generation within the Brand Kit.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The LLM configuration for the Brand Kit.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_llm_config(
                brand_kit_uid, organization_uid, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncLlmConfigurationWithRawResponse:
        return self._with_raw_response


class LlmConfigurationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def configure_llm(
        self,
        brand_kit_uid: str,
        organization_uid: str,
        body: CreateLlmConfigRequest | CreateLlmConfigRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[LlmConfig, ConfigureLlmErrorBody]:
        """Registers custom API credentials for an LLM provider to enable content generation through the organization's
        own LLM subscription rather than Contentstack's default AI infrastructure.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api(
                "/v1/brand-kits/{brand_kit_uid}/llm-config"
            ),
            path_params=[param[str]("brand_kit_uid", brand_kit_uid)],
            headers=[param[str]("organization_uid", organization_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateLlmConfigRequest | CreateLlmConfigRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[LlmConfig],
            error_mapper=configure_llm_error_mapper,
            request_options=request_options,
        )

    def get_llm_config(
        self, brand_kit_uid: str, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LlmConfig, GetLlmConfigErrorBody]:
        """Retrieves the custom LLM provider credentials configured for a Brand Kit. This allows organizations to use
        their own LLM API subscriptions for content generation within the Brand Kit.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api(
                "/v1/brand-kits/{brand_kit_uid}/llm-config"
            ),
            path_params=[param[str]("brand_kit_uid", brand_kit_uid)],
            headers=[param[str]("organization_uid", organization_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[LlmConfig],
            error_mapper=get_llm_config_error_mapper,
            request_options=request_options,
        )


class AsyncLlmConfigurationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def configure_llm(
        self,
        brand_kit_uid: str,
        organization_uid: str,
        body: CreateLlmConfigRequest | CreateLlmConfigRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[LlmConfig, ConfigureLlmErrorBody]:
        """Registers custom API credentials for an LLM provider to enable content generation through the organization's
        own LLM subscription rather than Contentstack's default AI infrastructure.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api(
                "/v1/brand-kits/{brand_kit_uid}/llm-config"
            ),
            path_params=[param[str]("brand_kit_uid", brand_kit_uid)],
            headers=[param[str]("organization_uid", organization_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateLlmConfigRequest | CreateLlmConfigRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[LlmConfig],
            error_mapper=configure_llm_error_mapper,
            request_options=request_options,
        )

    async def get_llm_config(
        self, brand_kit_uid: str, organization_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[LlmConfig, GetLlmConfigErrorBody]:
        """Retrieves the custom LLM provider credentials configured for a Brand Kit. This allows organizations to use
        their own LLM API subscriptions for content generation within the Brand Kit.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api(
                "/v1/brand-kits/{brand_kit_uid}/llm-config"
            ),
            path_params=[param[str]("brand_kit_uid", brand_kit_uid)],
            headers=[param[str]("organization_uid", organization_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[LlmConfig],
            error_mapper=get_llm_config_error_mapper,
            request_options=request_options,
        )
