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
from ..errors.csrparser_error import CsrparserErrorBody, csrparser_error_mapper
from ..errors.danevalidator_error import DanevalidatorErrorBody, danevalidator_error_mapper
from ..errors.hashgenerator_error import HashgeneratorErrorBody, hashgenerator_error_mapper
from ..errors.hmac_error import HmacErrorBody, hmac_error_mapper
from ..models.v1_csrparser_request import V1CsrparserRequest, V1CsrparserRequestDict
from ..models.v1_csrparser_response import V1CsrparserResponse
from ..models.v1_danevalidator_request import V1DanevalidatorRequest, V1DanevalidatorRequestDict
from ..models.v1_danevalidator_response import V1DanevalidatorResponse
from ..models.v1_hashgenerator_response import V1HashgeneratorResponse
from ..models.v1_hmac_request import V1HmacRequest, V1HmacRequestDict
from ..models.v1_hmac_response import V1HmacResponse
from ..server.server import Server


class Security:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SecurityWithRawResponse(client, server, auth)

    def csrparser(
        self, body: V1CsrparserRequest | V1CsrparserRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1CsrparserResponse:
        """Parse a Certificate Signing Request and extract information

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.csrparser(body, request_options=request_options))

    def danevalidator(
        self,
        body: V1DanevalidatorRequest | V1DanevalidatorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1DanevalidatorResponse:
        """Validate a DANE/TLSA DNS record

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.danevalidator(body, request_options=request_options))

    def hashgenerator(
        self, text: str, *, algorithms: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1HashgeneratorResponse:
        """Generate cryptographic hashes using multiple algorithms

        Args:
            text: Text to hash
            algorithms: Comma-separated list of algorithms or 'all'
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.hashgenerator(text, algorithms=algorithms, request_options=request_options)
        )

    def hmac(
        self, body: V1HmacRequest | V1HmacRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1HmacResponse:
        """Generate an HMAC signature for a message

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.hmac(body, request_options=request_options))

    @property
    def with_raw_response(self) -> SecurityWithRawResponse:
        return self._with_raw_response


class AsyncSecurity:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSecurityWithRawResponse(client, server, auth)

    async def csrparser(
        self,
        body: V1CsrparserRequest | V1CsrparserRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1CsrparserResponse:
        """Parse a Certificate Signing Request and extract information

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.csrparser(body, request_options=request_options))

    async def danevalidator(
        self,
        body: V1DanevalidatorRequest | V1DanevalidatorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1DanevalidatorResponse:
        """Validate a DANE/TLSA DNS record

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.danevalidator(body, request_options=request_options))

    async def hashgenerator(
        self, text: str, *, algorithms: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1HashgeneratorResponse:
        """Generate cryptographic hashes using multiple algorithms

        Args:
            text: Text to hash
            algorithms: Comma-separated list of algorithms or 'all'
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.hashgenerator(text, algorithms=algorithms, request_options=request_options)
        )

    async def hmac(
        self, body: V1HmacRequest | V1HmacRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1HmacResponse:
        """Generate an HMAC signature for a message

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.hmac(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSecurityWithRawResponse:
        return self._with_raw_response


class SecurityWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def csrparser(
        self, body: V1CsrparserRequest | V1CsrparserRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CsrparserResponse, CsrparserErrorBody]:
        """Parse a Certificate Signing Request and extract information

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/csrparser"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1CsrparserRequest | V1CsrparserRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CsrparserResponse],
            error_mapper=csrparser_error_mapper,
            request_options=request_options,
        )

    def danevalidator(
        self,
        body: V1DanevalidatorRequest | V1DanevalidatorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1DanevalidatorResponse, DanevalidatorErrorBody]:
        """Validate a DANE/TLSA DNS record

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/danevalidator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1DanevalidatorRequest | V1DanevalidatorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DanevalidatorResponse],
            error_mapper=danevalidator_error_mapper,
            request_options=request_options,
        )

    def hashgenerator(
        self, text: str, *, algorithms: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1HashgeneratorResponse, HashgeneratorErrorBody]:
        """Generate cryptographic hashes using multiple algorithms

        Args:
            text: Text to hash
            algorithms: Comma-separated list of algorithms or 'all'
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/hashgenerator"),
            query_params=[param[str]("text", text), param[str | None]("algorithms", algorithms)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1HashgeneratorResponse],
            error_mapper=hashgenerator_error_mapper,
            request_options=request_options,
        )

    def hmac(
        self, body: V1HmacRequest | V1HmacRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1HmacResponse, HmacErrorBody]:
        """Generate an HMAC signature for a message

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/hmac"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1HmacRequest | V1HmacRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1HmacResponse],
            error_mapper=hmac_error_mapper,
            request_options=request_options,
        )


class AsyncSecurityWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def csrparser(
        self,
        body: V1CsrparserRequest | V1CsrparserRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CsrparserResponse, CsrparserErrorBody]:
        """Parse a Certificate Signing Request and extract information

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/csrparser"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1CsrparserRequest | V1CsrparserRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CsrparserResponse],
            error_mapper=csrparser_error_mapper,
            request_options=request_options,
        )

    async def danevalidator(
        self,
        body: V1DanevalidatorRequest | V1DanevalidatorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1DanevalidatorResponse, DanevalidatorErrorBody]:
        """Validate a DANE/TLSA DNS record

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/danevalidator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1DanevalidatorRequest | V1DanevalidatorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DanevalidatorResponse],
            error_mapper=danevalidator_error_mapper,
            request_options=request_options,
        )

    async def hashgenerator(
        self, text: str, *, algorithms: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1HashgeneratorResponse, HashgeneratorErrorBody]:
        """Generate cryptographic hashes using multiple algorithms

        Args:
            text: Text to hash
            algorithms: Comma-separated list of algorithms or 'all'
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/hashgenerator"),
            query_params=[param[str]("text", text), param[str | None]("algorithms", algorithms)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1HashgeneratorResponse],
            error_mapper=hashgenerator_error_mapper,
            request_options=request_options,
        )

    async def hmac(
        self, body: V1HmacRequest | V1HmacRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1HmacResponse, HmacErrorBody]:
        """Generate an HMAC signature for a message

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/hmac"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1HmacRequest | V1HmacRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1HmacResponse],
            error_mapper=hmac_error_mapper,
            request_options=request_options,
        )
