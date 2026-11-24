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
from ..errors.redact_error import RedactErrorBody, redact_error_mapper
from ..errors.unsubscribe_error import UnsubscribeErrorBody, unsubscribe_error_mapper
from ..models.api_v2_compliance_redact_request import ApiV2ComplianceRedactRequest, ApiV2ComplianceRedactRequestDict
from ..models.api_v2_compliance_redact_response import ApiV2ComplianceRedactResponse
from ..models.api_v2_compliance_unsubscribe_request import (
    ApiV2ComplianceUnsubscribeRequest,
    ApiV2ComplianceUnsubscribeRequestDict,
)
from ..models.api_v2_compliance_unsubscribe_response import ApiV2ComplianceUnsubscribeResponse
from ..server.server import Server


class Compliance:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ComplianceWithRawResponse(client, server, auth)

    def redact(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2ComplianceRedactRequest | ApiV2ComplianceRedactRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2ComplianceRedactResponse:
        """Note: When passed an email, phone number, Shopify customer ID, or Postscript subscriber ID, this endpoint
        will also unsubscribe the subscriber if they have an active subscription

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            202

        Raises:
            ApiError: 403 ``error`` is ``ApiV2ComplianceRedact403Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.redact(
                x_postscript_shop_token=x_postscript_shop_token, body=body, request_options=request_options
            ),
        )

    def unsubscribe(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2ComplianceUnsubscribeRequest | ApiV2ComplianceUnsubscribeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2ComplianceUnsubscribeResponse:
        """Opt outs subscribers from Postscript messaging.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            202

        Raises:
            ApiError: 403 ``error`` is ``ApiV2ComplianceUnsubscribe403Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.unsubscribe(
                x_postscript_shop_token=x_postscript_shop_token, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ComplianceWithRawResponse:
        return self._with_raw_response


class AsyncCompliance:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncComplianceWithRawResponse(client, server, auth)

    async def redact(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2ComplianceRedactRequest | ApiV2ComplianceRedactRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2ComplianceRedactResponse:
        """Note: When passed an email, phone number, Shopify customer ID, or Postscript subscriber ID, this endpoint
        will also unsubscribe the subscriber if they have an active subscription

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            202

        Raises:
            ApiError: 403 ``error`` is ``ApiV2ComplianceRedact403Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.redact(
                x_postscript_shop_token=x_postscript_shop_token, body=body, request_options=request_options
            ),
        )

    async def unsubscribe(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2ComplianceUnsubscribeRequest | ApiV2ComplianceUnsubscribeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2ComplianceUnsubscribeResponse:
        """Opt outs subscribers from Postscript messaging.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            202

        Raises:
            ApiError: 403 ``error`` is ``ApiV2ComplianceUnsubscribe403Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.unsubscribe(
                x_postscript_shop_token=x_postscript_shop_token, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncComplianceWithRawResponse:
        return self._with_raw_response


class ComplianceWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def redact(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2ComplianceRedactRequest | ApiV2ComplianceRedactRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2ComplianceRedactResponse, RedactErrorBody]:
        """Note: When passed an email, phone number, Shopify customer ID, or Postscript subscriber ID, this endpoint
        will also unsubscribe the subscriber if they have an active subscription

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v2/compliance/redact"),
            headers=[
                param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ApiV2ComplianceRedactRequest | ApiV2ComplianceRedactRequestDict | None](body),
            auth_scheme=self._auth.sec0,
            decoder=json_decoder[ApiV2ComplianceRedactResponse],
            error_mapper=redact_error_mapper,
            request_options=request_options,
        )

    def unsubscribe(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2ComplianceUnsubscribeRequest | ApiV2ComplianceUnsubscribeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2ComplianceUnsubscribeResponse, UnsubscribeErrorBody]:
        """Opt outs subscribers from Postscript messaging.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v2/compliance/unsubscribe"),
            headers=[
                param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ApiV2ComplianceUnsubscribeRequest | ApiV2ComplianceUnsubscribeRequestDict | None](body),
            auth_scheme=self._auth.sec0,
            decoder=json_decoder[ApiV2ComplianceUnsubscribeResponse],
            error_mapper=unsubscribe_error_mapper,
            request_options=request_options,
        )


class AsyncComplianceWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def redact(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2ComplianceRedactRequest | ApiV2ComplianceRedactRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2ComplianceRedactResponse, RedactErrorBody]:
        """Note: When passed an email, phone number, Shopify customer ID, or Postscript subscriber ID, this endpoint
        will also unsubscribe the subscriber if they have an active subscription

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v2/compliance/redact"),
            headers=[
                param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ApiV2ComplianceRedactRequest | ApiV2ComplianceRedactRequestDict | None](body),
            auth_scheme=self._auth.sec0,
            decoder=async_json_decoder[ApiV2ComplianceRedactResponse],
            error_mapper=redact_error_mapper,
            request_options=request_options,
        )

    async def unsubscribe(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2ComplianceUnsubscribeRequest | ApiV2ComplianceUnsubscribeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2ComplianceUnsubscribeResponse, UnsubscribeErrorBody]:
        """Opt outs subscribers from Postscript messaging.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v2/compliance/unsubscribe"),
            headers=[
                param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ApiV2ComplianceUnsubscribeRequest | ApiV2ComplianceUnsubscribeRequestDict | None](body),
            auth_scheme=self._auth.sec0,
            decoder=async_json_decoder[ApiV2ComplianceUnsubscribeResponse],
            error_mapper=unsubscribe_error_mapper,
            request_options=request_options,
        )
