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
from ..errors.humannameparser_error import HumannameparserErrorBody, humannameparser_error_mapper
from ..errors.rsstojson_error import RsstojsonErrorBody, rsstojson_error_mapper
from ..errors.streetaddressparser_error import StreetaddressparserErrorBody, streetaddressparser_error_mapper
from ..errors.useragentparser_error import UseragentparserErrorBody, useragentparser_error_mapper
from ..models.v1_humannameparser_response import V1HumannameparserResponse
from ..models.v1_rsstojson_request import V1RsstojsonRequest, V1RsstojsonRequestDict
from ..models.v1_rsstojson_response import V1RsstojsonResponse
from ..models.v1_streetaddressparser_response import V1StreetaddressparserResponse
from ..models.v1_useragentparser_request import V1UseragentparserRequest, V1UseragentparserRequestDict
from ..models.v1_useragentparser_response import V1UseragentparserResponse
from ..server.server import Server


class Parsers:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ParsersWithRawResponse(client, server, auth)

    def humannameparser(
        self, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1HumannameparserResponse:
        """Parse a human name into its components

        Args:
            name: The human name to parse
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.humannameparser(name, request_options=request_options))

    def rsstojson(
        self, body: V1RsstojsonRequest | V1RsstojsonRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1RsstojsonResponse:
        """RSS to JSON is a simple tool for converting RSS feeds into JSON format. It returns the RSS feed in JSON
        format.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.rsstojson(body, request_options=request_options))

    def streetaddressparser(
        self, address: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1StreetaddressparserResponse:
        """Parse the components of a street address

        Args:
            address: The street address to parse
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.streetaddressparser(address, request_options=request_options))

    def useragentparser(
        self,
        body: V1UseragentparserRequest | V1UseragentparserRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1UseragentparserResponse:
        """Parse the user agent string to get browser, OS, and more

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.useragentparser(body, request_options=request_options))

    @property
    def with_raw_response(self) -> ParsersWithRawResponse:
        return self._with_raw_response


class AsyncParsers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncParsersWithRawResponse(client, server, auth)

    async def humannameparser(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1HumannameparserResponse:
        """Parse a human name into its components

        Args:
            name: The human name to parse
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.humannameparser(name, request_options=request_options))

    async def rsstojson(
        self,
        body: V1RsstojsonRequest | V1RsstojsonRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1RsstojsonResponse:
        """RSS to JSON is a simple tool for converting RSS feeds into JSON format. It returns the RSS feed in JSON
        format.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.rsstojson(body, request_options=request_options))

    async def streetaddressparser(
        self, address: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1StreetaddressparserResponse:
        """Parse the components of a street address

        Args:
            address: The street address to parse
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.streetaddressparser(address, request_options=request_options))

    async def useragentparser(
        self,
        body: V1UseragentparserRequest | V1UseragentparserRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1UseragentparserResponse:
        """Parse the user agent string to get browser, OS, and more

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.useragentparser(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncParsersWithRawResponse:
        return self._with_raw_response


class ParsersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def humannameparser(
        self, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1HumannameparserResponse, HumannameparserErrorBody]:
        """Parse a human name into its components

        Args:
            name: The human name to parse
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/humannameparser"),
            query_params=[param[str]("name", name)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1HumannameparserResponse],
            error_mapper=humannameparser_error_mapper,
            request_options=request_options,
        )

    def rsstojson(
        self, body: V1RsstojsonRequest | V1RsstojsonRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1RsstojsonResponse, RsstojsonErrorBody]:
        """RSS to JSON is a simple tool for converting RSS feeds into JSON format. It returns the RSS feed in JSON
        format.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/rsstojson"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1RsstojsonRequest | V1RsstojsonRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1RsstojsonResponse],
            error_mapper=rsstojson_error_mapper,
            request_options=request_options,
        )

    def streetaddressparser(
        self, address: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1StreetaddressparserResponse, StreetaddressparserErrorBody]:
        """Parse the components of a street address

        Args:
            address: The street address to parse
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/streetaddressparser"),
            query_params=[param[str]("address", address)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1StreetaddressparserResponse],
            error_mapper=streetaddressparser_error_mapper,
            request_options=request_options,
        )

    def useragentparser(
        self,
        body: V1UseragentparserRequest | V1UseragentparserRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UseragentparserResponse, UseragentparserErrorBody]:
        """Parse the user agent string to get browser, OS, and more

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/useragentparser"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1UseragentparserRequest | V1UseragentparserRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1UseragentparserResponse],
            error_mapper=useragentparser_error_mapper,
            request_options=request_options,
        )


class AsyncParsersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def humannameparser(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1HumannameparserResponse, HumannameparserErrorBody]:
        """Parse a human name into its components

        Args:
            name: The human name to parse
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/humannameparser"),
            query_params=[param[str]("name", name)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1HumannameparserResponse],
            error_mapper=humannameparser_error_mapper,
            request_options=request_options,
        )

    async def rsstojson(
        self,
        body: V1RsstojsonRequest | V1RsstojsonRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RsstojsonResponse, RsstojsonErrorBody]:
        """RSS to JSON is a simple tool for converting RSS feeds into JSON format. It returns the RSS feed in JSON
        format.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/rsstojson"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1RsstojsonRequest | V1RsstojsonRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1RsstojsonResponse],
            error_mapper=rsstojson_error_mapper,
            request_options=request_options,
        )

    async def streetaddressparser(
        self, address: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1StreetaddressparserResponse, StreetaddressparserErrorBody]:
        """Parse the components of a street address

        Args:
            address: The street address to parse
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/streetaddressparser"),
            query_params=[param[str]("address", address)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1StreetaddressparserResponse],
            error_mapper=streetaddressparser_error_mapper,
            request_options=request_options,
        )

    async def useragentparser(
        self,
        body: V1UseragentparserRequest | V1UseragentparserRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UseragentparserResponse, UseragentparserErrorBody]:
        """Parse the user agent string to get browser, OS, and more

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/useragentparser"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1UseragentparserRequest | V1UseragentparserRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1UseragentparserResponse],
            error_mapper=useragentparser_error_mapper,
            request_options=request_options,
        )
