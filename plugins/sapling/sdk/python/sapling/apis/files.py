from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileInput,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileInput,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    file_part,
    json_body,
    json_decoder,
    multipart_body,
    param,
    unwrap,
)
from ..errors.sapling_chunk_html_error import SaplingChunkHtmlErrorBody, sapling_chunk_html_error_mapper
from ..errors.sapling_chunk_text_error import SaplingChunkTextErrorBody, sapling_chunk_text_error_mapper
from ..errors.sapling_docx_to_text_error import SaplingDocxToTextErrorBody, sapling_docx_to_text_error_mapper
from ..errors.sapling_pdf_to_text_error import SaplingPdfToTextErrorBody, sapling_pdf_to_text_error_mapper
from ..models.api_v1_ingest_chunk_html_request import ApiV1IngestChunkHtmlRequest, ApiV1IngestChunkHtmlRequestDict
from ..models.api_v1_ingest_chunk_html_response import ApiV1IngestChunkHtmlResponse
from ..models.api_v1_ingest_chunk_text_request import ApiV1IngestChunkTextRequest, ApiV1IngestChunkTextRequestDict
from ..models.api_v1_ingest_chunk_text_response import ApiV1IngestChunkTextResponse
from ..models.api_v1_ingest_docx_to_text_response import ApiV1IngestDocxToTextResponse
from ..models.api_v1_ingest_pdf_to_text_response import ApiV1IngestPdfToTextResponse
from ..server.server import Server


class Files:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FilesWithRawResponse(client, server, auth)

    def sapling_chunk_html(
        self,
        body: ApiV1IngestChunkHtmlRequest | ApiV1IngestChunkHtmlRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1IngestChunkHtmlResponse:
        """Like chunk_text, for HTML input. Not billed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Chunks in document order.

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check such as
                a size limit or empty text). Validator rejections prefix ``msg`` with "400 Bad Request:". Missing or
                invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.) Payment
                required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). MCP
                OAuth access tokens are not accepted by this operation; send an API key. Request body over 4MB. Note the
                body uses ``message`` and ``result`` keys, not the usual ``msg``. Applies to requests authenticated via
                the Authorization header; a body-key-only request over the limit fails authentication instead (401),
                because the key cannot be read from the oversized body. Unexpected server error. Report persistent
                occurrences to support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 |
                RawError``."""
        return unwrap(self._with_raw_response.sapling_chunk_html(body, request_options=request_options))

    def sapling_chunk_text(
        self,
        body: ApiV1IngestChunkTextRequest | ApiV1IngestChunkTextRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1IngestChunkTextResponse:
        """Split long text into overlapping chunks no longer than ``max_length``, preferring sentence and whitespace
        boundaries. Not billed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Chunks in document order.

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check such as
                a size limit or empty text). Validator rejections prefix ``msg`` with "400 Bad Request:". Missing or
                invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.) Payment
                required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). MCP
                OAuth access tokens are not accepted by this operation; send an API key. Request body over 4MB. Note the
                body uses ``message`` and ``result`` keys, not the usual ``msg``. Applies to requests authenticated via
                the Authorization header; a body-key-only request over the limit fails authentication instead (401),
                because the key cannot be read from the oversized body. Unexpected server error. Report persistent
                occurrences to support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 |
                RawError``."""
        return unwrap(self._with_raw_response.sapling_chunk_text(body, request_options=request_options))

    def sapling_docx_to_text(
        self,
        file: FileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: FileInput | None = None,
        return_usage: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1IngestDocxToTextResponse:
        """Upload a .docx and receive its text, tables included in document order. Not billed.

        Args:
            file: The document to upload.
            return_usage_query: Value sent with the request.
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
            json_params: Optional part carrying a JSON object, e.g. {"key": "<API key>", "return_usage": true}, as an
                alternative to the query or header credential. Send it as a file part.
            return_usage: When true, a successful JSON-object response additionally carries "usage": {"characters": <n>}
                — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for
                logographic languages is included, so CJK requests report more than their raw length). Repeat texts
                inside the billing deduplication window are still counted here even though they are not re-charged, so
                the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g.
                bare-array response formats) cannot carry the field. An existing usage field (such as account/status or
                completion token usage) is preserved unchanged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extracted text.

        Raises:
            ApiError: Missing ``file`` part, unsupported extension, or the document could not be read (empty, encrypted,
                corrupt, or no extractable text). Body: {"error": "<reason>"}. A request with no API key at all also
                answers 400 {"error": "Unauthenticated"}. Missing or invalid API key or OAuth access token. (An EXPIRED
                key or subscription answers 402, not 401.) Payment required. Two distinct cases share this status. (1) A
                PERMANENT block — an expired API key or subscription, or exhausted quota/prepaid credits: renew or top
                up at https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its
                ``Retry-After`` is a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that
                hit its daily character cap: this clears on its own when the cap resets at the next UTC midnight, its
                ``Retry-After`` states that actual reset, and the body carries a matching numeric ``retry_after`` field
                (whose presence also distinguishes the two cases). MCP OAuth access tokens are not accepted by this
                operation; send an API key. The uploaded file is over 30MB. Body: {"error": "<reason>"}. Too many
                uploads in the last minute. No Retry-After or rate-limit headers are sent; back off and retry.
                Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error`` is
                ``ApiV1IngestDocxToText400Error1 | Error | PaymentRequired1 | ApiV1IngestDocxToText413Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.sapling_docx_to_text(
                file,
                return_usage_query=return_usage_query,
                key=key,
                json_params=json_params,
                return_usage=return_usage,
                request_options=request_options,
            ),
        )

    def sapling_pdf_to_text(
        self,
        file: FileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: FileInput | None = None,
        return_usage: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1IngestPdfToTextResponse:
        """Upload a PDF and receive its text, with layout line breaks and hyphenation repaired. Owner-locked PDFs are
        decrypted transparently; image-only PDFs answer 400. Not billed.

        Args:
            file: The document to upload.
            return_usage_query: Value sent with the request.
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
            json_params: Optional part carrying a JSON object, e.g. {"key": "<API key>", "return_usage": true}, as an
                alternative to the query or header credential. Send it as a file part.
            return_usage: When true, a successful JSON-object response additionally carries "usage": {"characters": <n>}
                — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for
                logographic languages is included, so CJK requests report more than their raw length). Repeat texts
                inside the billing deduplication window are still counted here even though they are not re-charged, so
                the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g.
                bare-array response formats) cannot carry the field. An existing usage field (such as account/status or
                completion token usage) is preserved unchanged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extracted text.

        Raises:
            ApiError: Missing ``file`` part, unsupported extension, or the document could not be read (empty, encrypted,
                corrupt, or no extractable text). Body: {"error": "<reason>"}. A request with no API key at all also
                answers 400 {"error": "Unauthenticated"}. Missing or invalid API key or OAuth access token. (An EXPIRED
                key or subscription answers 402, not 401.) Payment required. Two distinct cases share this status. (1) A
                PERMANENT block — an expired API key or subscription, or exhausted quota/prepaid credits: renew or top
                up at https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its
                ``Retry-After`` is a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that
                hit its daily character cap: this clears on its own when the cap resets at the next UTC midnight, its
                ``Retry-After`` states that actual reset, and the body carries a matching numeric ``retry_after`` field
                (whose presence also distinguishes the two cases). MCP OAuth access tokens are not accepted by this
                operation; send an API key. The uploaded file is over 30MB. Body: {"error": "<reason>"}. Too many
                uploads in the last minute. No Retry-After or rate-limit headers are sent; back off and retry.
                Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error`` is
                ``ApiV1IngestPdfToText400Error1 | Error | PaymentRequired1 | ApiV1IngestPdfToText413Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.sapling_pdf_to_text(
                file,
                return_usage_query=return_usage_query,
                key=key,
                json_params=json_params,
                return_usage=return_usage,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> FilesWithRawResponse:
        return self._with_raw_response


class AsyncFiles:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFilesWithRawResponse(client, server, auth)

    async def sapling_chunk_html(
        self,
        body: ApiV1IngestChunkHtmlRequest | ApiV1IngestChunkHtmlRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1IngestChunkHtmlResponse:
        """Like chunk_text, for HTML input. Not billed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Chunks in document order.

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check such as
                a size limit or empty text). Validator rejections prefix ``msg`` with "400 Bad Request:". Missing or
                invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.) Payment
                required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). MCP
                OAuth access tokens are not accepted by this operation; send an API key. Request body over 4MB. Note the
                body uses ``message`` and ``result`` keys, not the usual ``msg``. Applies to requests authenticated via
                the Authorization header; a body-key-only request over the limit fails authentication instead (401),
                because the key cannot be read from the oversized body. Unexpected server error. Report persistent
                occurrences to support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 |
                RawError``."""
        return unwrap(await self._with_raw_response.sapling_chunk_html(body, request_options=request_options))

    async def sapling_chunk_text(
        self,
        body: ApiV1IngestChunkTextRequest | ApiV1IngestChunkTextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1IngestChunkTextResponse:
        """Split long text into overlapping chunks no longer than ``max_length``, preferring sentence and whitespace
        boundaries. Not billed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Chunks in document order.

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check such as
                a size limit or empty text). Validator rejections prefix ``msg`` with "400 Bad Request:". Missing or
                invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.) Payment
                required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). MCP
                OAuth access tokens are not accepted by this operation; send an API key. Request body over 4MB. Note the
                body uses ``message`` and ``result`` keys, not the usual ``msg``. Applies to requests authenticated via
                the Authorization header; a body-key-only request over the limit fails authentication instead (401),
                because the key cannot be read from the oversized body. Unexpected server error. Report persistent
                occurrences to support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 |
                RawError``."""
        return unwrap(await self._with_raw_response.sapling_chunk_text(body, request_options=request_options))

    async def sapling_docx_to_text(
        self,
        file: AsyncFileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: AsyncFileInput | None = None,
        return_usage: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1IngestDocxToTextResponse:
        """Upload a .docx and receive its text, tables included in document order. Not billed.

        Args:
            file: The document to upload.
            return_usage_query: Value sent with the request.
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
            json_params: Optional part carrying a JSON object, e.g. {"key": "<API key>", "return_usage": true}, as an
                alternative to the query or header credential. Send it as a file part.
            return_usage: When true, a successful JSON-object response additionally carries "usage": {"characters": <n>}
                — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for
                logographic languages is included, so CJK requests report more than their raw length). Repeat texts
                inside the billing deduplication window are still counted here even though they are not re-charged, so
                the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g.
                bare-array response formats) cannot carry the field. An existing usage field (such as account/status or
                completion token usage) is preserved unchanged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extracted text.

        Raises:
            ApiError: Missing ``file`` part, unsupported extension, or the document could not be read (empty, encrypted,
                corrupt, or no extractable text). Body: {"error": "<reason>"}. A request with no API key at all also
                answers 400 {"error": "Unauthenticated"}. Missing or invalid API key or OAuth access token. (An EXPIRED
                key or subscription answers 402, not 401.) Payment required. Two distinct cases share this status. (1) A
                PERMANENT block — an expired API key or subscription, or exhausted quota/prepaid credits: renew or top
                up at https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its
                ``Retry-After`` is a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that
                hit its daily character cap: this clears on its own when the cap resets at the next UTC midnight, its
                ``Retry-After`` states that actual reset, and the body carries a matching numeric ``retry_after`` field
                (whose presence also distinguishes the two cases). MCP OAuth access tokens are not accepted by this
                operation; send an API key. The uploaded file is over 30MB. Body: {"error": "<reason>"}. Too many
                uploads in the last minute. No Retry-After or rate-limit headers are sent; back off and retry.
                Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error`` is
                ``ApiV1IngestDocxToText400Error1 | Error | PaymentRequired1 | ApiV1IngestDocxToText413Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_docx_to_text(
                file,
                return_usage_query=return_usage_query,
                key=key,
                json_params=json_params,
                return_usage=return_usage,
                request_options=request_options,
            ),
        )

    async def sapling_pdf_to_text(
        self,
        file: AsyncFileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: AsyncFileInput | None = None,
        return_usage: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1IngestPdfToTextResponse:
        """Upload a PDF and receive its text, with layout line breaks and hyphenation repaired. Owner-locked PDFs are
        decrypted transparently; image-only PDFs answer 400. Not billed.

        Args:
            file: The document to upload.
            return_usage_query: Value sent with the request.
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
            json_params: Optional part carrying a JSON object, e.g. {"key": "<API key>", "return_usage": true}, as an
                alternative to the query or header credential. Send it as a file part.
            return_usage: When true, a successful JSON-object response additionally carries "usage": {"characters": <n>}
                — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for
                logographic languages is included, so CJK requests report more than their raw length). Repeat texts
                inside the billing deduplication window are still counted here even though they are not re-charged, so
                the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g.
                bare-array response formats) cannot carry the field. An existing usage field (such as account/status or
                completion token usage) is preserved unchanged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extracted text.

        Raises:
            ApiError: Missing ``file`` part, unsupported extension, or the document could not be read (empty, encrypted,
                corrupt, or no extractable text). Body: {"error": "<reason>"}. A request with no API key at all also
                answers 400 {"error": "Unauthenticated"}. Missing or invalid API key or OAuth access token. (An EXPIRED
                key or subscription answers 402, not 401.) Payment required. Two distinct cases share this status. (1) A
                PERMANENT block — an expired API key or subscription, or exhausted quota/prepaid credits: renew or top
                up at https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its
                ``Retry-After`` is a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that
                hit its daily character cap: this clears on its own when the cap resets at the next UTC midnight, its
                ``Retry-After`` states that actual reset, and the body carries a matching numeric ``retry_after`` field
                (whose presence also distinguishes the two cases). MCP OAuth access tokens are not accepted by this
                operation; send an API key. The uploaded file is over 30MB. Body: {"error": "<reason>"}. Too many
                uploads in the last minute. No Retry-After or rate-limit headers are sent; back off and retry.
                Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error`` is
                ``ApiV1IngestPdfToText400Error1 | Error | PaymentRequired1 | ApiV1IngestPdfToText413Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_pdf_to_text(
                file,
                return_usage_query=return_usage_query,
                key=key,
                json_params=json_params,
                return_usage=return_usage,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncFilesWithRawResponse:
        return self._with_raw_response


class FilesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def sapling_chunk_html(
        self,
        body: ApiV1IngestChunkHtmlRequest | ApiV1IngestChunkHtmlRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1IngestChunkHtmlResponse, SaplingChunkHtmlErrorBody]:
        """Like chunk_text, for HTML input. Not billed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/ingest/chunk_html"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1IngestChunkHtmlRequest | ApiV1IngestChunkHtmlRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1IngestChunkHtmlResponse],
            error_mapper=sapling_chunk_html_error_mapper,
            request_options=request_options,
        )

    def sapling_chunk_text(
        self,
        body: ApiV1IngestChunkTextRequest | ApiV1IngestChunkTextRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1IngestChunkTextResponse, SaplingChunkTextErrorBody]:
        """Split long text into overlapping chunks no longer than ``max_length``, preferring sentence and whitespace
        boundaries. Not billed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/ingest/chunk_text"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1IngestChunkTextRequest | ApiV1IngestChunkTextRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1IngestChunkTextResponse],
            error_mapper=sapling_chunk_text_error_mapper,
            request_options=request_options,
        )

    def sapling_docx_to_text(
        self,
        file: FileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: FileInput | None = None,
        return_usage: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1IngestDocxToTextResponse, SaplingDocxToTextErrorBody]:
        """Upload a .docx and receive its text, tables included in document order. Not billed.

        Args:
            file: The document to upload.
            return_usage_query: Value sent with the request.
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
            json_params: Optional part carrying a JSON object, e.g. {"key": "<API key>", "return_usage": true}, as an
                alternative to the query or header credential. Send it as a file part.
            return_usage: When true, a successful JSON-object response additionally carries "usage": {"characters": <n>}
                — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for
                logographic languages is included, so CJK requests report more than their raw length). Repeat texts
                inside the billing deduplication window are still counted here even though they are not re-charged, so
                the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g.
                bare-array response formats) cannot carry the field. An existing usage field (such as account/status or
                completion token usage) is preserved unchanged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/ingest/docx_to_text"),
            query_params=[param[bool | None]("return_usage", return_usage_query), param[str | None]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                file_part("file", file),
                file_part("jsonParams", json_params) if json_params is not None else None,
                param[bool | None]("return_usage", return_usage),
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1IngestDocxToTextResponse],
            error_mapper=sapling_docx_to_text_error_mapper,
            request_options=request_options,
        )

    def sapling_pdf_to_text(
        self,
        file: FileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: FileInput | None = None,
        return_usage: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1IngestPdfToTextResponse, SaplingPdfToTextErrorBody]:
        """Upload a PDF and receive its text, with layout line breaks and hyphenation repaired. Owner-locked PDFs are
        decrypted transparently; image-only PDFs answer 400. Not billed.

        Args:
            file: The document to upload.
            return_usage_query: Value sent with the request.
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
            json_params: Optional part carrying a JSON object, e.g. {"key": "<API key>", "return_usage": true}, as an
                alternative to the query or header credential. Send it as a file part.
            return_usage: When true, a successful JSON-object response additionally carries "usage": {"characters": <n>}
                — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for
                logographic languages is included, so CJK requests report more than their raw length). Repeat texts
                inside the billing deduplication window are still counted here even though they are not re-charged, so
                the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g.
                bare-array response formats) cannot carry the field. An existing usage field (such as account/status or
                completion token usage) is preserved unchanged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/ingest/pdf_to_text"),
            query_params=[param[bool | None]("return_usage", return_usage_query), param[str | None]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                file_part("file", file),
                file_part("jsonParams", json_params) if json_params is not None else None,
                param[bool | None]("return_usage", return_usage),
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1IngestPdfToTextResponse],
            error_mapper=sapling_pdf_to_text_error_mapper,
            request_options=request_options,
        )


class AsyncFilesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def sapling_chunk_html(
        self,
        body: ApiV1IngestChunkHtmlRequest | ApiV1IngestChunkHtmlRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1IngestChunkHtmlResponse, SaplingChunkHtmlErrorBody]:
        """Like chunk_text, for HTML input. Not billed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/ingest/chunk_html"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1IngestChunkHtmlRequest | ApiV1IngestChunkHtmlRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1IngestChunkHtmlResponse],
            error_mapper=sapling_chunk_html_error_mapper,
            request_options=request_options,
        )

    async def sapling_chunk_text(
        self,
        body: ApiV1IngestChunkTextRequest | ApiV1IngestChunkTextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1IngestChunkTextResponse, SaplingChunkTextErrorBody]:
        """Split long text into overlapping chunks no longer than ``max_length``, preferring sentence and whitespace
        boundaries. Not billed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/ingest/chunk_text"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1IngestChunkTextRequest | ApiV1IngestChunkTextRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1IngestChunkTextResponse],
            error_mapper=sapling_chunk_text_error_mapper,
            request_options=request_options,
        )

    async def sapling_docx_to_text(
        self,
        file: AsyncFileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: AsyncFileInput | None = None,
        return_usage: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1IngestDocxToTextResponse, SaplingDocxToTextErrorBody]:
        """Upload a .docx and receive its text, tables included in document order. Not billed.

        Args:
            file: The document to upload.
            return_usage_query: Value sent with the request.
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
            json_params: Optional part carrying a JSON object, e.g. {"key": "<API key>", "return_usage": true}, as an
                alternative to the query or header credential. Send it as a file part.
            return_usage: When true, a successful JSON-object response additionally carries "usage": {"characters": <n>}
                — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for
                logographic languages is included, so CJK requests report more than their raw length). Repeat texts
                inside the billing deduplication window are still counted here even though they are not re-charged, so
                the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g.
                bare-array response formats) cannot carry the field. An existing usage field (such as account/status or
                completion token usage) is preserved unchanged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/ingest/docx_to_text"),
            query_params=[param[bool | None]("return_usage", return_usage_query), param[str | None]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                file_part("file", file),
                file_part("jsonParams", json_params) if json_params is not None else None,
                param[bool | None]("return_usage", return_usage),
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1IngestDocxToTextResponse],
            error_mapper=sapling_docx_to_text_error_mapper,
            request_options=request_options,
        )

    async def sapling_pdf_to_text(
        self,
        file: AsyncFileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: AsyncFileInput | None = None,
        return_usage: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1IngestPdfToTextResponse, SaplingPdfToTextErrorBody]:
        """Upload a PDF and receive its text, with layout line breaks and hyphenation repaired. Owner-locked PDFs are
        decrypted transparently; image-only PDFs answer 400. Not billed.

        Args:
            file: The document to upload.
            return_usage_query: Value sent with the request.
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
            json_params: Optional part carrying a JSON object, e.g. {"key": "<API key>", "return_usage": true}, as an
                alternative to the query or header credential. Send it as a file part.
            return_usage: When true, a successful JSON-object response additionally carries "usage": {"characters": <n>}
                — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for
                logographic languages is included, so CJK requests report more than their raw length). Repeat texts
                inside the billing deduplication window are still counted here even though they are not re-charged, so
                the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g.
                bare-array response formats) cannot carry the field. An existing usage field (such as account/status or
                completion token usage) is preserved unchanged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/ingest/pdf_to_text"),
            query_params=[param[bool | None]("return_usage", return_usage_query), param[str | None]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                file_part("file", file),
                file_part("jsonParams", json_params) if json_params is not None else None,
                param[bool | None]("return_usage", return_usage),
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1IngestPdfToTextResponse],
            error_mapper=sapling_pdf_to_text_error_mapper,
            request_options=request_options,
        )
