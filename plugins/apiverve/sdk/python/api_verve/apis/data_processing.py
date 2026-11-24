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
from ..errors.counter_error import CounterErrorBody, counter_error_mapper
from ..errors.htmltotext_error import HtmltotextErrorBody, htmltotext_error_mapper
from ..errors.metadataextractor_error import MetadataextractorErrorBody, metadataextractor_error_mapper
from ..errors.morsecode_error import MorsecodeErrorBody, morsecode_error_mapper
from ..errors.murmurhash_error import MurmurhashErrorBody, murmurhash_error_mapper
from ..errors.sqlexplainer_error import SqlexplainerErrorBody, sqlexplainer_error_mapper
from ..models.v1_counter_response import V1CounterResponse
from ..models.v1_htmltotext_request import V1HtmltotextRequest, V1HtmltotextRequestDict
from ..models.v1_htmltotext_response import V1HtmltotextResponse
from ..models.v1_metadataextractor_request import V1MetadataextractorRequest, V1MetadataextractorRequestDict
from ..models.v1_metadataextractor_response import V1MetadataextractorResponse
from ..models.v1_morsecode_request import V1MorsecodeRequest, V1MorsecodeRequestDict
from ..models.v1_morsecode_response import V1MorsecodeResponse
from ..models.v1_murmurhash_request import V1MurmurhashRequest, V1MurmurhashRequestDict
from ..models.v1_murmurhash_response import V1MurmurhashResponse
from ..models.v1_sqlexplainer_request import V1SqlexplainerRequest, V1SqlexplainerRequestDict
from ..models.v1_sqlexplainer_response import V1SqlexplainerResponse
from ..server.server import Server


class DataProcessing:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DataProcessingWithRawResponse(client, server, auth)

    def counter(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> V1CounterResponse:
        """Get the current value of the counter

        Args:
            id_: The ID of the counter (e.g., test_counter)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.counter(id_, request_options=request_options))

    def htmltotext(
        self,
        body: V1HtmltotextRequest | V1HtmltotextRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1HtmltotextResponse:
        """Convert HTML to text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.htmltotext(body, request_options=request_options))

    def metadataextractor(
        self,
        body: V1MetadataextractorRequest | V1MetadataextractorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1MetadataextractorResponse:
        """Extract metadata from a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.metadataextractor(body, request_options=request_options))

    def morsecode(
        self, body: V1MorsecodeRequest | V1MorsecodeRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1MorsecodeResponse:
        """Morse Code is a simple tool for encoding and decoding Morse code. It returns the encoded or decoded Morse
        code.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.morsecode(body, request_options=request_options))

    def murmurhash(
        self,
        body: V1MurmurhashRequest | V1MurmurhashRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1MurmurhashResponse:
        """Generate a MurmurHash3 hash

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.murmurhash(body, request_options=request_options))

    def sqlexplainer(
        self,
        body: V1SqlexplainerRequest | V1SqlexplainerRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1SqlexplainerResponse:
        """Get a plain English explanation of a SQL query

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.sqlexplainer(body, request_options=request_options))

    @property
    def with_raw_response(self) -> DataProcessingWithRawResponse:
        return self._with_raw_response


class AsyncDataProcessing:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDataProcessingWithRawResponse(client, server, auth)

    async def counter(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1CounterResponse:
        """Get the current value of the counter

        Args:
            id_: The ID of the counter (e.g., test_counter)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.counter(id_, request_options=request_options))

    async def htmltotext(
        self,
        body: V1HtmltotextRequest | V1HtmltotextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1HtmltotextResponse:
        """Convert HTML to text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.htmltotext(body, request_options=request_options))

    async def metadataextractor(
        self,
        body: V1MetadataextractorRequest | V1MetadataextractorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1MetadataextractorResponse:
        """Extract metadata from a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.metadataextractor(body, request_options=request_options))

    async def morsecode(
        self,
        body: V1MorsecodeRequest | V1MorsecodeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1MorsecodeResponse:
        """Morse Code is a simple tool for encoding and decoding Morse code. It returns the encoded or decoded Morse
        code.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.morsecode(body, request_options=request_options))

    async def murmurhash(
        self,
        body: V1MurmurhashRequest | V1MurmurhashRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1MurmurhashResponse:
        """Generate a MurmurHash3 hash

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.murmurhash(body, request_options=request_options))

    async def sqlexplainer(
        self,
        body: V1SqlexplainerRequest | V1SqlexplainerRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1SqlexplainerResponse:
        """Get a plain English explanation of a SQL query

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.sqlexplainer(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDataProcessingWithRawResponse:
        return self._with_raw_response


class DataProcessingWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def counter(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CounterResponse, CounterErrorBody]:
        """Get the current value of the counter

        Args:
            id_: The ID of the counter (e.g., test_counter)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/counter"),
            query_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CounterResponse],
            error_mapper=counter_error_mapper,
            request_options=request_options,
        )

    def htmltotext(
        self,
        body: V1HtmltotextRequest | V1HtmltotextRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1HtmltotextResponse, HtmltotextErrorBody]:
        """Convert HTML to text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/htmltotext"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1HtmltotextRequest | V1HtmltotextRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1HtmltotextResponse],
            error_mapper=htmltotext_error_mapper,
            request_options=request_options,
        )

    def metadataextractor(
        self,
        body: V1MetadataextractorRequest | V1MetadataextractorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MetadataextractorResponse, MetadataextractorErrorBody]:
        """Extract metadata from a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/metadataextractor"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MetadataextractorRequest | V1MetadataextractorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MetadataextractorResponse],
            error_mapper=metadataextractor_error_mapper,
            request_options=request_options,
        )

    def morsecode(
        self, body: V1MorsecodeRequest | V1MorsecodeRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1MorsecodeResponse, MorsecodeErrorBody]:
        """Morse Code is a simple tool for encoding and decoding Morse code. It returns the encoded or decoded Morse
        code.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/morsecode"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MorsecodeRequest | V1MorsecodeRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MorsecodeResponse],
            error_mapper=morsecode_error_mapper,
            request_options=request_options,
        )

    def murmurhash(
        self,
        body: V1MurmurhashRequest | V1MurmurhashRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MurmurhashResponse, MurmurhashErrorBody]:
        """Generate a MurmurHash3 hash

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/murmurhash"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MurmurhashRequest | V1MurmurhashRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MurmurhashResponse],
            error_mapper=murmurhash_error_mapper,
            request_options=request_options,
        )

    def sqlexplainer(
        self,
        body: V1SqlexplainerRequest | V1SqlexplainerRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SqlexplainerResponse, SqlexplainerErrorBody]:
        """Get a plain English explanation of a SQL query

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/sqlexplainer"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SqlexplainerRequest | V1SqlexplainerRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SqlexplainerResponse],
            error_mapper=sqlexplainer_error_mapper,
            request_options=request_options,
        )


class AsyncDataProcessingWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def counter(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CounterResponse, CounterErrorBody]:
        """Get the current value of the counter

        Args:
            id_: The ID of the counter (e.g., test_counter)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/counter"),
            query_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CounterResponse],
            error_mapper=counter_error_mapper,
            request_options=request_options,
        )

    async def htmltotext(
        self,
        body: V1HtmltotextRequest | V1HtmltotextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1HtmltotextResponse, HtmltotextErrorBody]:
        """Convert HTML to text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/htmltotext"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1HtmltotextRequest | V1HtmltotextRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1HtmltotextResponse],
            error_mapper=htmltotext_error_mapper,
            request_options=request_options,
        )

    async def metadataextractor(
        self,
        body: V1MetadataextractorRequest | V1MetadataextractorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MetadataextractorResponse, MetadataextractorErrorBody]:
        """Extract metadata from a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/metadataextractor"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MetadataextractorRequest | V1MetadataextractorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MetadataextractorResponse],
            error_mapper=metadataextractor_error_mapper,
            request_options=request_options,
        )

    async def morsecode(
        self,
        body: V1MorsecodeRequest | V1MorsecodeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MorsecodeResponse, MorsecodeErrorBody]:
        """Morse Code is a simple tool for encoding and decoding Morse code. It returns the encoded or decoded Morse
        code.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/morsecode"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MorsecodeRequest | V1MorsecodeRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MorsecodeResponse],
            error_mapper=morsecode_error_mapper,
            request_options=request_options,
        )

    async def murmurhash(
        self,
        body: V1MurmurhashRequest | V1MurmurhashRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MurmurhashResponse, MurmurhashErrorBody]:
        """Generate a MurmurHash3 hash

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/murmurhash"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MurmurhashRequest | V1MurmurhashRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MurmurhashResponse],
            error_mapper=murmurhash_error_mapper,
            request_options=request_options,
        )

    async def sqlexplainer(
        self,
        body: V1SqlexplainerRequest | V1SqlexplainerRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SqlexplainerResponse, SqlexplainerErrorBody]:
        """Get a plain English explanation of a SQL query

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/sqlexplainer"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SqlexplainerRequest | V1SqlexplainerRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SqlexplainerResponse],
            error_mapper=sqlexplainer_error_mapper,
            request_options=request_options,
        )
