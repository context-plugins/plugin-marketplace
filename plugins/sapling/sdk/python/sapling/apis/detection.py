from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.sapling_ai_detect_error import SaplingAiDetectErrorBody, sapling_ai_detect_error_mapper
from ..errors.sapling_ai_detect_url_error import SaplingAiDetectUrlErrorBody, sapling_ai_detect_url_error_mapper
from ..errors.sapling_aidetect_docx_error import SaplingAidetectDocxErrorBody, sapling_aidetect_docx_error_mapper
from ..errors.sapling_aidetect_file_error import SaplingAidetectFileErrorBody, sapling_aidetect_file_error_mapper
from ..errors.sapling_aidetect_pdf_error import SaplingAidetectPdfErrorBody, sapling_aidetect_pdf_error_mapper
from ..errors.sapling_detect_language_error import SaplingDetectLanguageErrorBody, sapling_detect_language_error_mapper
from ..errors.sapling_detect_pii_error import SaplingDetectPiiErrorBody, sapling_detect_pii_error_mapper
from ..errors.sapling_ner_error import SaplingNerErrorBody, sapling_ner_error_mapper
from ..errors.sapling_profanity_error import SaplingProfanityErrorBody, sapling_profanity_error_mapper
from ..errors.sapling_safety_error import SaplingSafetyErrorBody, sapling_safety_error_mapper
from ..models.api_v1_aidetect_response import ApiV1AidetectResponse
from ..models.api_v1_docx_aidetect_response import ApiV1DocxAidetectResponse
from ..models.api_v1_file_aidetect_response import ApiV1FileAidetectResponse
from ..models.api_v1_langdetect_response import ApiV1LangdetectResponse
from ..models.api_v1_ner_response import ApiV1NerResponse
from ..models.api_v1_pdf_aidetect_response import ApiV1PdfAidetectResponse
from ..models.api_v1_pii_request import ApiV1PiiRequest, ApiV1PiiRequestDict
from ..models.api_v1_pii_response import ApiV1PiiResponse
from ..models.api_v1_profanity_request import ApiV1ProfanityRequest, ApiV1ProfanityRequestDict
from ..models.api_v1_profanity_response import ApiV1ProfanityResponse
from ..models.api_v1_safety_response import ApiV1SafetyResponse
from ..models.api_v1_url_aidetect_request import ApiV1UrlAidetectRequest, ApiV1UrlAidetectRequestDict
from ..models.api_v1_url_aidetect_response import ApiV1UrlAidetectResponse
from ..models.unions.api_v1_aidetect_request2 import ApiV1AidetectRequest2, ApiV1AidetectRequest2Dict
from ..models.unions.api_v1_langdetect_request2 import ApiV1LangdetectRequest2, ApiV1LangdetectRequest2Dict
from ..models.unions.api_v1_ner_request2 import ApiV1NerRequest2, ApiV1NerRequest2Dict
from ..models.unions.api_v1_safety_request2 import ApiV1SafetyRequest2, ApiV1SafetyRequest2Dict
from ..server.server import Server


class Detection:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DetectionWithRawResponse(client, server, auth)

    def sapling_ai_detect(
        self,
        body: ApiV1AidetectRequest2 | ApiV1AidetectRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AidetectResponse:
        """Score how likely a text is to be AI-generated. Returns an overall score between 0 (likely human-written) and
        1 (likely AI-generated), ai_fraction (the share of the text in sentences scoring >= 0.5, which flags partially
        AI-written documents), a verdict (human, mixed or ai), segments (character offsets of the AI-scored passages),
        low_confidence with low_confidence_reasons (short_text, list_format: inputs where false positives are more
        likely, so hedge the result), plus per-sentence scores by default. Provide at least ~50 characters of text for a
        meaningful score; 500+ characters of prose is most reliable. English, Dutch, French, German, Italian, Japanese,
        Portuguese and Spanish are supported: the language is detected automatically (or set it with lang), text in the
        non-English languages is scored by a multilingual model, and the response's version field names the model that
        scored the text. Other languages are scored by the English model and are less reliable.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/detector/ A batch
            (``texts``) request answers {"results": [...]} instead: one single-text response per input text, in input
            order.

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check). NOTE:
                on this endpoint a TRANSIENT upstream model/service failure is also reported as a 400 whose msg starts
                with "Unexpected error" — that case is not a caller error and is safe to retry after a short delay.
                Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.)
                Payment required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases).
                Request body over 4MB. Note the body uses ``message`` and ``result`` keys, not the usual ``msg``.
                Applies to requests authenticated via the Authorization header; a body-key-only request over the limit
                fails authentication instead (401), because the key cannot be read from the oversized body. Rate
                limited. Wait retry_after seconds (also in the Retry-After header) and retry. If retry_after is absent,
                the request exceeds the bucket capacity and can never succeed unchanged. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. Temporarily unable to serve the request (e.g. model
                servers saturated). Honor Retry-After and retry. ``error`` is ``Error | PaymentRequired1 |
                PayloadTooLarge1 | RateLimited1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_ai_detect(body, request_options=request_options))

    def sapling_ai_detect_url(
        self,
        body: ApiV1UrlAidetectRequest | ApiV1UrlAidetectRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1UrlAidetectResponse:
        """Fetch a public web page (or a linked .pdf, .docx, .pptx, .odt, .txt or .md document) and score how likely its
        main text is to be AI-generated. Use this instead of sapling_ai_detect when you have a link rather than the
        text: Sapling fetches the page itself, drops navigation, headers, footers, forms and hidden elements, and scores
        only the main readable text (the largest , else ). Returns the same fields as sapling_ai_detect (score from 0 =
        likely human to 1 = likely AI, ai_fraction, verdict, segments, low_confidence, per-sentence scores by default,
        and the scored text) plus source: the final URL after redirects, the page title, its content type, the number of
        characters scored (and billed) and whether the page was truncated. Only http(s) URLs that resolve to public
        addresses are fetched. A page that is down, blocks automated requests, or has no readable text is reported as an
        error, not a score. For long pages set sent_scores=false to keep the result small.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/detector/

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check). NOTE:
                on this endpoint a TRANSIENT upstream model/service failure is also reported as a 400 whose msg starts
                with "Unexpected error" — that case is not a caller error and is safe to retry after a short delay.
                Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.)
                Payment required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases).
                Request body over 4MB. Note the body uses ``message`` and ``result`` keys, not the usual ``msg``.
                Applies to requests authenticated via the Authorization header; a body-key-only request over the limit
                fails authentication instead (401), because the key cannot be read from the oversized body. The page was
                fetched but cannot be scored: a non-2xx HTTP status, an unsupported content type, an oversized or
                unreadable document, or no readable text. Rate limited. Wait retry_after seconds (also in the
                Retry-After header) and retry. If retry_after is absent, the request exceeds the bucket capacity and can
                never succeed unchanged. Unexpected server error. Report persistent occurrences to support@sapling.ai.
                The URL could not be fetched (timeout or connection failure); safe to retry later. Temporarily unable to
                serve the request (e.g. model servers saturated). Honor Retry-After and retry. ``error`` is ``Error |
                PaymentRequired1 | PayloadTooLarge1 | RateLimited1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_ai_detect_url(body, request_options=request_options))

    def sapling_aidetect_docx(
        self,
        file: FileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: FileInput | None = None,
        return_usage: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1DocxAidetectResponse:
        """Upload a .docx; its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence
        scores. Billed like /api/v1/aidetect.

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
            Same shape as /api/v1/aidetect with sent_scores and score_string enabled.

        Raises:
            ApiError: Missing ``file`` part, unsupported extension, or the document could not be read (empty, encrypted,
                corrupt, or no extractable text). Body: {"error": "<reason>"}. A request with no API key at all also
                answers 400 {"error": "Unauthenticated"}. A transient scoring failure also answers 400 {"error":
                "Unexpected error"}; that case is safe to retry after a short delay. Missing or invalid API key or OAuth
                access token. (An EXPIRED key or subscription answers 402, not 401.) Payment required. Two distinct
                cases share this status. (1) A PERMANENT block — an expired API key or subscription, or exhausted
                quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as re-authenticating or
                retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A TEMPORARY free-trial
                block — a trial-only key that hit its daily character cap: this clears on its own when the cap resets at
                the next UTC midnight, its ``Retry-After`` states that actual reset, and the body carries a matching
                numeric ``retry_after`` field (whose presence also distinguishes the two cases). MCP OAuth access tokens
                are not accepted by this operation; send an API key. The uploaded file is over 30MB. Body: {"error":
                "<reason>"}. Too many uploads in the last minute. No Retry-After or rate-limit headers are sent; back
                off and retry. Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error``
                is ``ApiV1DocxAidetect400Error1 | Error | PaymentRequired1 | ApiV1DocxAidetect413Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.sapling_aidetect_docx(
                file,
                return_usage_query=return_usage_query,
                key=key,
                json_params=json_params,
                return_usage=return_usage,
                request_options=request_options,
            ),
        )

    def sapling_aidetect_file(
        self,
        file: FileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: FileInput | None = None,
        return_usage: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1FileAidetectResponse:
        """Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, chosen by file extension, up to 30MB);
        its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence scores. PPTX text is
        read in slide order without speaker notes; ODT drops footnotes, comments and tracked deletions; HTML is
        flattened to its visible text. Billed like /api/v1/aidetect.

        Args:
            file: The document to upload.
            return_usage_query: Value sent with the request.
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
            json_params: Optional JSON object (send it as a file part or form field): {"zero_retention": true} keeps no
                copy of the extracted text (no result cache or certificate hash, usage logged without text), as on
                /api/v1/aidetect; {"create_report": true} also saves the result as a shareable report and adds report
                (and report_skip_reason when none was made), as on /api/v1/aidetect.
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
            Same shape as /api/v1/aidetect with sent_scores and score_string enabled.

        Raises:
            ApiError: Missing ``file`` part, unsupported extension, or the document could not be read (empty, encrypted,
                corrupt, or no extractable text). Body: {"error": "<reason>"}. A request with no API key at all also
                answers 400 {"error": "Unauthenticated"}. A transient scoring failure also answers 400 {"error":
                "Unexpected error"}; that case is safe to retry after a short delay. A non-boolean zero_retention or
                create_report, or create_report with zero_retention or without a private API key, answers 400 {"error":
                "<reason>"}. Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers
                402, not 401.) Payment required. Two distinct cases share this status. (1) A PERMANENT block — an
                expired API key or subscription, or exhausted quota/prepaid credits: renew or top up at
                https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its ``Retry-After`` is
                a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that hit its daily
                character cap: this clears on its own when the cap resets at the next UTC midnight, its ``Retry-After``
                states that actual reset, and the body carries a matching numeric ``retry_after`` field (whose presence
                also distinguishes the two cases). MCP OAuth access tokens are not accepted by this operation; send an
                API key. The uploaded file is over 30MB. Body: {"error": "<reason>"}. Too many uploads in the last
                minute. No Retry-After or rate-limit headers are sent; back off and retry. Unexpected server error.
                Report persistent occurrences to support@sapling.ai. ``error`` is ``ApiV1FileAidetect400Error1 | Error |
                PaymentRequired1 | ApiV1FileAidetect413Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.sapling_aidetect_file(
                file,
                return_usage_query=return_usage_query,
                key=key,
                json_params=json_params,
                return_usage=return_usage,
                request_options=request_options,
            ),
        )

    def sapling_aidetect_pdf(
        self,
        file: FileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: FileInput | None = None,
        return_usage: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PdfAidetectResponse:
        """Upload a PDF; its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence
        scores. Billed like /api/v1/aidetect.

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
            Same shape as /api/v1/aidetect with sent_scores and score_string enabled.

        Raises:
            ApiError: Missing ``file`` part, unsupported extension, or the document could not be read (empty, encrypted,
                corrupt, or no extractable text). Body: {"error": "<reason>"}. A request with no API key at all also
                answers 400 {"error": "Unauthenticated"}. A transient scoring failure also answers 400 {"error":
                "Unexpected error"}; that case is safe to retry after a short delay. Missing or invalid API key or OAuth
                access token. (An EXPIRED key or subscription answers 402, not 401.) Payment required. Two distinct
                cases share this status. (1) A PERMANENT block — an expired API key or subscription, or exhausted
                quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as re-authenticating or
                retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A TEMPORARY free-trial
                block — a trial-only key that hit its daily character cap: this clears on its own when the cap resets at
                the next UTC midnight, its ``Retry-After`` states that actual reset, and the body carries a matching
                numeric ``retry_after`` field (whose presence also distinguishes the two cases). MCP OAuth access tokens
                are not accepted by this operation; send an API key. The uploaded file is over 30MB. Body: {"error":
                "<reason>"}. Too many uploads in the last minute. No Retry-After or rate-limit headers are sent; back
                off and retry. Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error``
                is ``ApiV1PdfAidetect400Error1 | Error | PaymentRequired1 | ApiV1PdfAidetect413Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.sapling_aidetect_pdf(
                file,
                return_usage_query=return_usage_query,
                key=key,
                json_params=json_params,
                return_usage=return_usage,
                request_options=request_options,
            ),
        )

    def sapling_detect_language(
        self,
        body: ApiV1LangdetectRequest2 | ApiV1LangdetectRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1LangdetectResponse:
        """Detect the language a text is written in. Returns an ISO 639-1 code, a confidence value, reliable (the
        recommended threshold: true when the confidence is high and the text has enough letters; short inputs like "OK"
        are never reliable) and script, the dominant writing system as an ISO 15924 code (e.g. Latn, Cyrl, Hani, Jpan).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/langdetect/ A batch
            (``texts``) request answers {"results": [...]} instead: one single-text response per input text, in input
            order.

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check). NOTE:
                on this endpoint a TRANSIENT upstream model/service failure is also reported as a 400 whose msg starts
                with "Unexpected error" — that case is not a caller error and is safe to retry after a short delay.
                Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.)
                Payment required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). Rate
                limited. Wait retry_after seconds (also in the Retry-After header) and retry. If retry_after is absent,
                the request exceeds the bucket capacity and can never succeed unchanged. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. Temporarily unable to serve the request (e.g. model
                servers saturated). Honor Retry-After and retry. ``error`` is ``Error | PaymentRequired1 | RateLimited1
                | RawError``."""
        return unwrap(self._with_raw_response.sapling_detect_language(body, request_options=request_options))

    def sapling_detect_pii(
        self, body: ApiV1PiiRequest | ApiV1PiiRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1PiiResponse:
        """Detect personally identifiable information (emails, phone numbers, US SSNs, credit card numbers, IP
        addresses, IBANs, US bank routing numbers) in a text. Detection of those types is deterministic (regex +
        checksum validation, no ML), and every entity comes with exact character offsets (start/end) into the submitted
        text. Set redact=true to also receive redacted_text: the input with each entity replaced by a placeholder like
        [EMAIL]. Person names, organizations, and locations/street addresses are NOT detected by default: list
        person/organization/location in types explicitly to add LLM-backed detection of them (slower, and the text is
        then capped at 10000 characters).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/pii/

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check such as
                a size limit or empty text). Validator rejections prefix ``msg`` with "400 Bad Request:". Missing or
                invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.) Payment
                required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases).
                Request body over 4MB. Note the body uses ``message`` and ``result`` keys, not the usual ``msg``.
                Applies to requests authenticated via the Authorization header; a body-key-only request over the limit
                fails authentication instead (401), because the key cannot be read from the oversized body. Rate
                limited. Wait retry_after seconds (also in the Retry-After header) and retry. If retry_after is absent,
                the request exceeds the bucket capacity and can never succeed unchanged. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. The upstream model call failed or returned an unusable
                result. The response is neither cached nor billed; safe to retry after a short delay. Temporarily unable
                to serve the request (e.g. model servers saturated). Honor Retry-After and retry. ``error`` is ``Error |
                PaymentRequired1 | PayloadTooLarge1 | RateLimited1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_detect_pii(body, request_options=request_options))

    def sapling_ner(
        self, body: ApiV1NerRequest2 | ApiV1NerRequest2Dict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1NerResponse:
        """Find named entities in a text — people, organizations, locations, dates, times, money amounts, percentages,
        quantities, products, events — with character spans. Returns entities (each with its verbatim text, type, and
        start/end offsets into the exact submitted text) and types (the distinct types found). Every entity is a span
        the text actually contains — invented mentions are dropped. Offsets index the submitted text as-is (nothing is
        stripped or normalized), so they can be applied directly to your copy of the document. Use types to restrict
        recognition to a subset. Complements sapling_detect_pii: that tool finds checksum-validated identifiers (emails,
        cards, IBANs...), this one finds names and real-world references.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/ner/ A batch (``texts``)
            request answers {"results": [...]} instead: one single-text response per input text, in input order.

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check such as
                a size limit or empty text). Validator rejections prefix ``msg`` with "400 Bad Request:". Missing or
                invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.) Payment
                required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases).
                Request body over 4MB. Note the body uses ``message`` and ``result`` keys, not the usual ``msg``.
                Applies to requests authenticated via the Authorization header; a body-key-only request over the limit
                fails authentication instead (401), because the key cannot be read from the oversized body. Rate
                limited. Wait retry_after seconds (also in the Retry-After header) and retry. If retry_after is absent,
                the request exceeds the bucket capacity and can never succeed unchanged. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. The upstream model call failed or returned an unusable
                result. The response is neither cached nor billed; safe to retry after a short delay. Temporarily unable
                to serve the request (e.g. model servers saturated). Honor Retry-After and retry. ``error`` is ``Error |
                PaymentRequired1 | PayloadTooLarge1 | RateLimited1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_ner(body, request_options=request_options))

    def sapling_profanity(
        self,
        body: ApiV1ProfanityRequest | ApiV1ProfanityRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ProfanityResponse:
        """Split text on whitespace and label each token 1 (profane) or 0. Not billed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Tokens and aligned labels.

        Raises:
            ApiError: Missing or empty text ("Missing arguments."). Missing or invalid API key or OAuth access token.
                (An EXPIRED key or subscription answers 402, not 401.) Payment required. Two distinct cases share this
                status. (1) A PERMANENT block — an expired API key or subscription, or exhausted quota/prepaid credits:
                renew or top up at https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its
                ``Retry-After`` is a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that
                hit its daily character cap: this clears on its own when the cap resets at the next UTC midnight, its
                ``Retry-After`` states that actual reset, and the body carries a matching numeric ``retry_after`` field
                (whose presence also distinguishes the two cases). MCP OAuth access tokens are not accepted by this
                operation; send an API key. Rate limited. Wait retry_after seconds (also in the Retry-After header) and
                retry. If retry_after is absent, the request exceeds the bucket capacity and can never succeed
                unchanged. Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error`` is
                ``Error | PaymentRequired1 | RateLimited1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_profanity(body, request_options=request_options))

    def sapling_safety(
        self,
        body: ApiV1SafetyRequest2 | ApiV1SafetyRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SafetyResponse:
        """Score a text for unsafe content across seven categories — toxicity, profanity, harassment, hate_speech,
        self_harm, sexual, violence — each as a 0-1 probability. Returns scores (all seven), flagged (whether any
        category reached the threshold, default 0.5) and flagged_categories. With spans=true, also returns spans: the
        specific offending passages, each with its text, start/end offsets into the submitted text, per-category scores
        and flagged_categories — use it to highlight, quote, or redact just the violating passage instead of rejecting
        the whole text.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/safety/ A batch
            (``texts``) request answers {"results": [...]} instead: one single-text response per input text, in input
            order.

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check). NOTE:
                on this endpoint a TRANSIENT upstream model/service failure is also reported as a 400 whose msg starts
                with "Unexpected error" — that case is not a caller error and is safe to retry after a short delay.
                Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.)
                Payment required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases).
                Request body over 4MB. Note the body uses ``message`` and ``result`` keys, not the usual ``msg``.
                Applies to requests authenticated via the Authorization header; a body-key-only request over the limit
                fails authentication instead (401), because the key cannot be read from the oversized body. Rate
                limited. Wait retry_after seconds (also in the Retry-After header) and retry. If retry_after is absent,
                the request exceeds the bucket capacity and can never succeed unchanged. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. Temporarily unable to serve the request (e.g. model
                servers saturated). Honor Retry-After and retry. ``error`` is ``Error | PaymentRequired1 |
                PayloadTooLarge1 | RateLimited1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_safety(body, request_options=request_options))

    @property
    def with_raw_response(self) -> DetectionWithRawResponse:
        return self._with_raw_response


class AsyncDetection:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDetectionWithRawResponse(client, server, auth)

    async def sapling_ai_detect(
        self,
        body: ApiV1AidetectRequest2 | ApiV1AidetectRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AidetectResponse:
        """Score how likely a text is to be AI-generated. Returns an overall score between 0 (likely human-written) and
        1 (likely AI-generated), ai_fraction (the share of the text in sentences scoring >= 0.5, which flags partially
        AI-written documents), a verdict (human, mixed or ai), segments (character offsets of the AI-scored passages),
        low_confidence with low_confidence_reasons (short_text, list_format: inputs where false positives are more
        likely, so hedge the result), plus per-sentence scores by default. Provide at least ~50 characters of text for a
        meaningful score; 500+ characters of prose is most reliable. English, Dutch, French, German, Italian, Japanese,
        Portuguese and Spanish are supported: the language is detected automatically (or set it with lang), text in the
        non-English languages is scored by a multilingual model, and the response's version field names the model that
        scored the text. Other languages are scored by the English model and are less reliable.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/detector/ A batch
            (``texts``) request answers {"results": [...]} instead: one single-text response per input text, in input
            order.

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check). NOTE:
                on this endpoint a TRANSIENT upstream model/service failure is also reported as a 400 whose msg starts
                with "Unexpected error" — that case is not a caller error and is safe to retry after a short delay.
                Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.)
                Payment required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases).
                Request body over 4MB. Note the body uses ``message`` and ``result`` keys, not the usual ``msg``.
                Applies to requests authenticated via the Authorization header; a body-key-only request over the limit
                fails authentication instead (401), because the key cannot be read from the oversized body. Rate
                limited. Wait retry_after seconds (also in the Retry-After header) and retry. If retry_after is absent,
                the request exceeds the bucket capacity and can never succeed unchanged. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. Temporarily unable to serve the request (e.g. model
                servers saturated). Honor Retry-After and retry. ``error`` is ``Error | PaymentRequired1 |
                PayloadTooLarge1 | RateLimited1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_ai_detect(body, request_options=request_options))

    async def sapling_ai_detect_url(
        self,
        body: ApiV1UrlAidetectRequest | ApiV1UrlAidetectRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1UrlAidetectResponse:
        """Fetch a public web page (or a linked .pdf, .docx, .pptx, .odt, .txt or .md document) and score how likely its
        main text is to be AI-generated. Use this instead of sapling_ai_detect when you have a link rather than the
        text: Sapling fetches the page itself, drops navigation, headers, footers, forms and hidden elements, and scores
        only the main readable text (the largest , else ). Returns the same fields as sapling_ai_detect (score from 0 =
        likely human to 1 = likely AI, ai_fraction, verdict, segments, low_confidence, per-sentence scores by default,
        and the scored text) plus source: the final URL after redirects, the page title, its content type, the number of
        characters scored (and billed) and whether the page was truncated. Only http(s) URLs that resolve to public
        addresses are fetched. A page that is down, blocks automated requests, or has no readable text is reported as an
        error, not a score. For long pages set sent_scores=false to keep the result small.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/detector/

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check). NOTE:
                on this endpoint a TRANSIENT upstream model/service failure is also reported as a 400 whose msg starts
                with "Unexpected error" — that case is not a caller error and is safe to retry after a short delay.
                Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.)
                Payment required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases).
                Request body over 4MB. Note the body uses ``message`` and ``result`` keys, not the usual ``msg``.
                Applies to requests authenticated via the Authorization header; a body-key-only request over the limit
                fails authentication instead (401), because the key cannot be read from the oversized body. The page was
                fetched but cannot be scored: a non-2xx HTTP status, an unsupported content type, an oversized or
                unreadable document, or no readable text. Rate limited. Wait retry_after seconds (also in the
                Retry-After header) and retry. If retry_after is absent, the request exceeds the bucket capacity and can
                never succeed unchanged. Unexpected server error. Report persistent occurrences to support@sapling.ai.
                The URL could not be fetched (timeout or connection failure); safe to retry later. Temporarily unable to
                serve the request (e.g. model servers saturated). Honor Retry-After and retry. ``error`` is ``Error |
                PaymentRequired1 | PayloadTooLarge1 | RateLimited1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_ai_detect_url(body, request_options=request_options))

    async def sapling_aidetect_docx(
        self,
        file: AsyncFileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: AsyncFileInput | None = None,
        return_usage: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1DocxAidetectResponse:
        """Upload a .docx; its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence
        scores. Billed like /api/v1/aidetect.

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
            Same shape as /api/v1/aidetect with sent_scores and score_string enabled.

        Raises:
            ApiError: Missing ``file`` part, unsupported extension, or the document could not be read (empty, encrypted,
                corrupt, or no extractable text). Body: {"error": "<reason>"}. A request with no API key at all also
                answers 400 {"error": "Unauthenticated"}. A transient scoring failure also answers 400 {"error":
                "Unexpected error"}; that case is safe to retry after a short delay. Missing or invalid API key or OAuth
                access token. (An EXPIRED key or subscription answers 402, not 401.) Payment required. Two distinct
                cases share this status. (1) A PERMANENT block — an expired API key or subscription, or exhausted
                quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as re-authenticating or
                retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A TEMPORARY free-trial
                block — a trial-only key that hit its daily character cap: this clears on its own when the cap resets at
                the next UTC midnight, its ``Retry-After`` states that actual reset, and the body carries a matching
                numeric ``retry_after`` field (whose presence also distinguishes the two cases). MCP OAuth access tokens
                are not accepted by this operation; send an API key. The uploaded file is over 30MB. Body: {"error":
                "<reason>"}. Too many uploads in the last minute. No Retry-After or rate-limit headers are sent; back
                off and retry. Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error``
                is ``ApiV1DocxAidetect400Error1 | Error | PaymentRequired1 | ApiV1DocxAidetect413Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_aidetect_docx(
                file,
                return_usage_query=return_usage_query,
                key=key,
                json_params=json_params,
                return_usage=return_usage,
                request_options=request_options,
            ),
        )

    async def sapling_aidetect_file(
        self,
        file: AsyncFileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: AsyncFileInput | None = None,
        return_usage: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1FileAidetectResponse:
        """Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, chosen by file extension, up to 30MB);
        its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence scores. PPTX text is
        read in slide order without speaker notes; ODT drops footnotes, comments and tracked deletions; HTML is
        flattened to its visible text. Billed like /api/v1/aidetect.

        Args:
            file: The document to upload.
            return_usage_query: Value sent with the request.
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
            json_params: Optional JSON object (send it as a file part or form field): {"zero_retention": true} keeps no
                copy of the extracted text (no result cache or certificate hash, usage logged without text), as on
                /api/v1/aidetect; {"create_report": true} also saves the result as a shareable report and adds report
                (and report_skip_reason when none was made), as on /api/v1/aidetect.
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
            Same shape as /api/v1/aidetect with sent_scores and score_string enabled.

        Raises:
            ApiError: Missing ``file`` part, unsupported extension, or the document could not be read (empty, encrypted,
                corrupt, or no extractable text). Body: {"error": "<reason>"}. A request with no API key at all also
                answers 400 {"error": "Unauthenticated"}. A transient scoring failure also answers 400 {"error":
                "Unexpected error"}; that case is safe to retry after a short delay. A non-boolean zero_retention or
                create_report, or create_report with zero_retention or without a private API key, answers 400 {"error":
                "<reason>"}. Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers
                402, not 401.) Payment required. Two distinct cases share this status. (1) A PERMANENT block — an
                expired API key or subscription, or exhausted quota/prepaid credits: renew or top up at
                https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its ``Retry-After`` is
                a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that hit its daily
                character cap: this clears on its own when the cap resets at the next UTC midnight, its ``Retry-After``
                states that actual reset, and the body carries a matching numeric ``retry_after`` field (whose presence
                also distinguishes the two cases). MCP OAuth access tokens are not accepted by this operation; send an
                API key. The uploaded file is over 30MB. Body: {"error": "<reason>"}. Too many uploads in the last
                minute. No Retry-After or rate-limit headers are sent; back off and retry. Unexpected server error.
                Report persistent occurrences to support@sapling.ai. ``error`` is ``ApiV1FileAidetect400Error1 | Error |
                PaymentRequired1 | ApiV1FileAidetect413Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_aidetect_file(
                file,
                return_usage_query=return_usage_query,
                key=key,
                json_params=json_params,
                return_usage=return_usage,
                request_options=request_options,
            ),
        )

    async def sapling_aidetect_pdf(
        self,
        file: AsyncFileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: AsyncFileInput | None = None,
        return_usage: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PdfAidetectResponse:
        """Upload a PDF; its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence
        scores. Billed like /api/v1/aidetect.

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
            Same shape as /api/v1/aidetect with sent_scores and score_string enabled.

        Raises:
            ApiError: Missing ``file`` part, unsupported extension, or the document could not be read (empty, encrypted,
                corrupt, or no extractable text). Body: {"error": "<reason>"}. A request with no API key at all also
                answers 400 {"error": "Unauthenticated"}. A transient scoring failure also answers 400 {"error":
                "Unexpected error"}; that case is safe to retry after a short delay. Missing or invalid API key or OAuth
                access token. (An EXPIRED key or subscription answers 402, not 401.) Payment required. Two distinct
                cases share this status. (1) A PERMANENT block — an expired API key or subscription, or exhausted
                quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as re-authenticating or
                retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A TEMPORARY free-trial
                block — a trial-only key that hit its daily character cap: this clears on its own when the cap resets at
                the next UTC midnight, its ``Retry-After`` states that actual reset, and the body carries a matching
                numeric ``retry_after`` field (whose presence also distinguishes the two cases). MCP OAuth access tokens
                are not accepted by this operation; send an API key. The uploaded file is over 30MB. Body: {"error":
                "<reason>"}. Too many uploads in the last minute. No Retry-After or rate-limit headers are sent; back
                off and retry. Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error``
                is ``ApiV1PdfAidetect400Error1 | Error | PaymentRequired1 | ApiV1PdfAidetect413Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_aidetect_pdf(
                file,
                return_usage_query=return_usage_query,
                key=key,
                json_params=json_params,
                return_usage=return_usage,
                request_options=request_options,
            ),
        )

    async def sapling_detect_language(
        self,
        body: ApiV1LangdetectRequest2 | ApiV1LangdetectRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1LangdetectResponse:
        """Detect the language a text is written in. Returns an ISO 639-1 code, a confidence value, reliable (the
        recommended threshold: true when the confidence is high and the text has enough letters; short inputs like "OK"
        are never reliable) and script, the dominant writing system as an ISO 15924 code (e.g. Latn, Cyrl, Hani, Jpan).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/langdetect/ A batch
            (``texts``) request answers {"results": [...]} instead: one single-text response per input text, in input
            order.

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check). NOTE:
                on this endpoint a TRANSIENT upstream model/service failure is also reported as a 400 whose msg starts
                with "Unexpected error" — that case is not a caller error and is safe to retry after a short delay.
                Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.)
                Payment required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). Rate
                limited. Wait retry_after seconds (also in the Retry-After header) and retry. If retry_after is absent,
                the request exceeds the bucket capacity and can never succeed unchanged. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. Temporarily unable to serve the request (e.g. model
                servers saturated). Honor Retry-After and retry. ``error`` is ``Error | PaymentRequired1 | RateLimited1
                | RawError``."""
        return unwrap(await self._with_raw_response.sapling_detect_language(body, request_options=request_options))

    async def sapling_detect_pii(
        self, body: ApiV1PiiRequest | ApiV1PiiRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1PiiResponse:
        """Detect personally identifiable information (emails, phone numbers, US SSNs, credit card numbers, IP
        addresses, IBANs, US bank routing numbers) in a text. Detection of those types is deterministic (regex +
        checksum validation, no ML), and every entity comes with exact character offsets (start/end) into the submitted
        text. Set redact=true to also receive redacted_text: the input with each entity replaced by a placeholder like
        [EMAIL]. Person names, organizations, and locations/street addresses are NOT detected by default: list
        person/organization/location in types explicitly to add LLM-backed detection of them (slower, and the text is
        then capped at 10000 characters).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/pii/

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check such as
                a size limit or empty text). Validator rejections prefix ``msg`` with "400 Bad Request:". Missing or
                invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.) Payment
                required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases).
                Request body over 4MB. Note the body uses ``message`` and ``result`` keys, not the usual ``msg``.
                Applies to requests authenticated via the Authorization header; a body-key-only request over the limit
                fails authentication instead (401), because the key cannot be read from the oversized body. Rate
                limited. Wait retry_after seconds (also in the Retry-After header) and retry. If retry_after is absent,
                the request exceeds the bucket capacity and can never succeed unchanged. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. The upstream model call failed or returned an unusable
                result. The response is neither cached nor billed; safe to retry after a short delay. Temporarily unable
                to serve the request (e.g. model servers saturated). Honor Retry-After and retry. ``error`` is ``Error |
                PaymentRequired1 | PayloadTooLarge1 | RateLimited1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_detect_pii(body, request_options=request_options))

    async def sapling_ner(
        self, body: ApiV1NerRequest2 | ApiV1NerRequest2Dict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1NerResponse:
        """Find named entities in a text — people, organizations, locations, dates, times, money amounts, percentages,
        quantities, products, events — with character spans. Returns entities (each with its verbatim text, type, and
        start/end offsets into the exact submitted text) and types (the distinct types found). Every entity is a span
        the text actually contains — invented mentions are dropped. Offsets index the submitted text as-is (nothing is
        stripped or normalized), so they can be applied directly to your copy of the document. Use types to restrict
        recognition to a subset. Complements sapling_detect_pii: that tool finds checksum-validated identifiers (emails,
        cards, IBANs...), this one finds names and real-world references.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/ner/ A batch (``texts``)
            request answers {"results": [...]} instead: one single-text response per input text, in input order.

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check such as
                a size limit or empty text). Validator rejections prefix ``msg`` with "400 Bad Request:". Missing or
                invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.) Payment
                required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases).
                Request body over 4MB. Note the body uses ``message`` and ``result`` keys, not the usual ``msg``.
                Applies to requests authenticated via the Authorization header; a body-key-only request over the limit
                fails authentication instead (401), because the key cannot be read from the oversized body. Rate
                limited. Wait retry_after seconds (also in the Retry-After header) and retry. If retry_after is absent,
                the request exceeds the bucket capacity and can never succeed unchanged. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. The upstream model call failed or returned an unusable
                result. The response is neither cached nor billed; safe to retry after a short delay. Temporarily unable
                to serve the request (e.g. model servers saturated). Honor Retry-After and retry. ``error`` is ``Error |
                PaymentRequired1 | PayloadTooLarge1 | RateLimited1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_ner(body, request_options=request_options))

    async def sapling_profanity(
        self,
        body: ApiV1ProfanityRequest | ApiV1ProfanityRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ProfanityResponse:
        """Split text on whitespace and label each token 1 (profane) or 0. Not billed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Tokens and aligned labels.

        Raises:
            ApiError: Missing or empty text ("Missing arguments."). Missing or invalid API key or OAuth access token.
                (An EXPIRED key or subscription answers 402, not 401.) Payment required. Two distinct cases share this
                status. (1) A PERMANENT block — an expired API key or subscription, or exhausted quota/prepaid credits:
                renew or top up at https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its
                ``Retry-After`` is a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that
                hit its daily character cap: this clears on its own when the cap resets at the next UTC midnight, its
                ``Retry-After`` states that actual reset, and the body carries a matching numeric ``retry_after`` field
                (whose presence also distinguishes the two cases). MCP OAuth access tokens are not accepted by this
                operation; send an API key. Rate limited. Wait retry_after seconds (also in the Retry-After header) and
                retry. If retry_after is absent, the request exceeds the bucket capacity and can never succeed
                unchanged. Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error`` is
                ``Error | PaymentRequired1 | RateLimited1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_profanity(body, request_options=request_options))

    async def sapling_safety(
        self,
        body: ApiV1SafetyRequest2 | ApiV1SafetyRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SafetyResponse:
        """Score a text for unsafe content across seven categories — toxicity, profanity, harassment, hate_speech,
        self_harm, sexual, violence — each as a 0-1 probability. Returns scores (all seven), flagged (whether any
        category reached the threshold, default 0.5) and flagged_categories. With spans=true, also returns spans: the
        specific offending passages, each with its text, start/end offsets into the submitted text, per-category scores
        and flagged_categories — use it to highlight, quote, or redact just the violating passage instead of rejecting
        the whole text.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/safety/ A batch
            (``texts``) request answers {"results": [...]} instead: one single-text response per input text, in input
            order.

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check). NOTE:
                on this endpoint a TRANSIENT upstream model/service failure is also reported as a 400 whose msg starts
                with "Unexpected error" — that case is not a caller error and is safe to retry after a short delay.
                Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.)
                Payment required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases).
                Request body over 4MB. Note the body uses ``message`` and ``result`` keys, not the usual ``msg``.
                Applies to requests authenticated via the Authorization header; a body-key-only request over the limit
                fails authentication instead (401), because the key cannot be read from the oversized body. Rate
                limited. Wait retry_after seconds (also in the Retry-After header) and retry. If retry_after is absent,
                the request exceeds the bucket capacity and can never succeed unchanged. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. Temporarily unable to serve the request (e.g. model
                servers saturated). Honor Retry-After and retry. ``error`` is ``Error | PaymentRequired1 |
                PayloadTooLarge1 | RateLimited1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_safety(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDetectionWithRawResponse:
        return self._with_raw_response


class DetectionWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def sapling_ai_detect(
        self,
        body: ApiV1AidetectRequest2 | ApiV1AidetectRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AidetectResponse, SaplingAiDetectErrorBody]:
        """Score how likely a text is to be AI-generated. Returns an overall score between 0 (likely human-written) and
        1 (likely AI-generated), ai_fraction (the share of the text in sentences scoring >= 0.5, which flags partially
        AI-written documents), a verdict (human, mixed or ai), segments (character offsets of the AI-scored passages),
        low_confidence with low_confidence_reasons (short_text, list_format: inputs where false positives are more
        likely, so hedge the result), plus per-sentence scores by default. Provide at least ~50 characters of text for a
        meaningful score; 500+ characters of prose is most reliable. English, Dutch, French, German, Italian, Japanese,
        Portuguese and Spanish are supported: the language is detected automatically (or set it with lang), text in the
        non-English languages is scored by a multilingual model, and the response's version field names the model that
        scored the text. Other languages are scored by the English model and are less reliable.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/aidetect"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AidetectRequest2 | ApiV1AidetectRequest2Dict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1AidetectResponse],
            error_mapper=sapling_ai_detect_error_mapper,
            request_options=request_options,
        )

    def sapling_ai_detect_url(
        self,
        body: ApiV1UrlAidetectRequest | ApiV1UrlAidetectRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1UrlAidetectResponse, SaplingAiDetectUrlErrorBody]:
        """Fetch a public web page (or a linked .pdf, .docx, .pptx, .odt, .txt or .md document) and score how likely its
        main text is to be AI-generated. Use this instead of sapling_ai_detect when you have a link rather than the
        text: Sapling fetches the page itself, drops navigation, headers, footers, forms and hidden elements, and scores
        only the main readable text (the largest , else ). Returns the same fields as sapling_ai_detect (score from 0 =
        likely human to 1 = likely AI, ai_fraction, verdict, segments, low_confidence, per-sentence scores by default,
        and the scored text) plus source: the final URL after redirects, the page title, its content type, the number of
        characters scored (and billed) and whether the page was truncated. Only http(s) URLs that resolve to public
        addresses are fetched. A page that is down, blocks automated requests, or has no readable text is reported as an
        error, not a score. For long pages set sent_scores=false to keep the result small.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/url-aidetect"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1UrlAidetectRequest | ApiV1UrlAidetectRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1UrlAidetectResponse],
            error_mapper=sapling_ai_detect_url_error_mapper,
            request_options=request_options,
        )

    def sapling_aidetect_docx(
        self,
        file: FileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: FileInput | None = None,
        return_usage: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1DocxAidetectResponse, SaplingAidetectDocxErrorBody]:
        """Upload a .docx; its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence
        scores. Billed like /api/v1/aidetect.

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
            url_template=self._server.default("/api/v1/docx-aidetect"),
            query_params=[param[bool | None]("return_usage", return_usage_query), param[str | None]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                file_part("file", file),
                file_part("jsonParams", json_params) if json_params is not None else None,
                param[bool | None]("return_usage", return_usage),
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1DocxAidetectResponse],
            error_mapper=sapling_aidetect_docx_error_mapper,
            request_options=request_options,
        )

    def sapling_aidetect_file(
        self,
        file: FileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: FileInput | None = None,
        return_usage: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1FileAidetectResponse, SaplingAidetectFileErrorBody]:
        """Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, chosen by file extension, up to 30MB);
        its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence scores. PPTX text is
        read in slide order without speaker notes; ODT drops footnotes, comments and tracked deletions; HTML is
        flattened to its visible text. Billed like /api/v1/aidetect.

        Args:
            file: The document to upload.
            return_usage_query: Value sent with the request.
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
            json_params: Optional JSON object (send it as a file part or form field): {"zero_retention": true} keeps no
                copy of the extracted text (no result cache or certificate hash, usage logged without text), as on
                /api/v1/aidetect; {"create_report": true} also saves the result as a shareable report and adds report
                (and report_skip_reason when none was made), as on /api/v1/aidetect.
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
            url_template=self._server.default("/api/v1/file-aidetect"),
            query_params=[param[bool | None]("return_usage", return_usage_query), param[str | None]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                file_part("file", file),
                file_part("jsonParams", json_params) if json_params is not None else None,
                param[bool | None]("return_usage", return_usage),
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1FileAidetectResponse],
            error_mapper=sapling_aidetect_file_error_mapper,
            request_options=request_options,
        )

    def sapling_aidetect_pdf(
        self,
        file: FileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: FileInput | None = None,
        return_usage: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PdfAidetectResponse, SaplingAidetectPdfErrorBody]:
        """Upload a PDF; its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence
        scores. Billed like /api/v1/aidetect.

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
            url_template=self._server.default("/api/v1/pdf-aidetect"),
            query_params=[param[bool | None]("return_usage", return_usage_query), param[str | None]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                file_part("file", file),
                file_part("jsonParams", json_params) if json_params is not None else None,
                param[bool | None]("return_usage", return_usage),
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1PdfAidetectResponse],
            error_mapper=sapling_aidetect_pdf_error_mapper,
            request_options=request_options,
        )

    def sapling_detect_language(
        self,
        body: ApiV1LangdetectRequest2 | ApiV1LangdetectRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1LangdetectResponse, SaplingDetectLanguageErrorBody]:
        """Detect the language a text is written in. Returns an ISO 639-1 code, a confidence value, reliable (the
        recommended threshold: true when the confidence is high and the text has enough letters; short inputs like "OK"
        are never reliable) and script, the dominant writing system as an ISO 15924 code (e.g. Latn, Cyrl, Hani, Jpan).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/langdetect"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1LangdetectRequest2 | ApiV1LangdetectRequest2Dict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1LangdetectResponse],
            error_mapper=sapling_detect_language_error_mapper,
            request_options=request_options,
        )

    def sapling_detect_pii(
        self, body: ApiV1PiiRequest | ApiV1PiiRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PiiResponse, SaplingDetectPiiErrorBody]:
        """Detect personally identifiable information (emails, phone numbers, US SSNs, credit card numbers, IP
        addresses, IBANs, US bank routing numbers) in a text. Detection of those types is deterministic (regex +
        checksum validation, no ML), and every entity comes with exact character offsets (start/end) into the submitted
        text. Set redact=true to also receive redacted_text: the input with each entity replaced by a placeholder like
        [EMAIL]. Person names, organizations, and locations/street addresses are NOT detected by default: list
        person/organization/location in types explicitly to add LLM-backed detection of them (slower, and the text is
        then capped at 10000 characters).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/pii"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PiiRequest | ApiV1PiiRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1PiiResponse],
            error_mapper=sapling_detect_pii_error_mapper,
            request_options=request_options,
        )

    def sapling_ner(
        self, body: ApiV1NerRequest2 | ApiV1NerRequest2Dict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1NerResponse, SaplingNerErrorBody]:
        """Find named entities in a text — people, organizations, locations, dates, times, money amounts, percentages,
        quantities, products, events — with character spans. Returns entities (each with its verbatim text, type, and
        start/end offsets into the exact submitted text) and types (the distinct types found). Every entity is a span
        the text actually contains — invented mentions are dropped. Offsets index the submitted text as-is (nothing is
        stripped or normalized), so they can be applied directly to your copy of the document. Use types to restrict
        recognition to a subset. Complements sapling_detect_pii: that tool finds checksum-validated identifiers (emails,
        cards, IBANs...), this one finds names and real-world references.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/ner"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1NerRequest2 | ApiV1NerRequest2Dict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1NerResponse],
            error_mapper=sapling_ner_error_mapper,
            request_options=request_options,
        )

    def sapling_profanity(
        self,
        body: ApiV1ProfanityRequest | ApiV1ProfanityRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ProfanityResponse, SaplingProfanityErrorBody]:
        """Split text on whitespace and label each token 1 (profane) or 0. Not billed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/profanity"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ProfanityRequest | ApiV1ProfanityRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ProfanityResponse],
            error_mapper=sapling_profanity_error_mapper,
            request_options=request_options,
        )

    def sapling_safety(
        self,
        body: ApiV1SafetyRequest2 | ApiV1SafetyRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SafetyResponse, SaplingSafetyErrorBody]:
        """Score a text for unsafe content across seven categories — toxicity, profanity, harassment, hate_speech,
        self_harm, sexual, violence — each as a 0-1 probability. Returns scores (all seven), flagged (whether any
        category reached the threshold, default 0.5) and flagged_categories. With spans=true, also returns spans: the
        specific offending passages, each with its text, start/end offsets into the submitted text, per-category scores
        and flagged_categories — use it to highlight, quote, or redact just the violating passage instead of rejecting
        the whole text.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/safety"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SafetyRequest2 | ApiV1SafetyRequest2Dict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1SafetyResponse],
            error_mapper=sapling_safety_error_mapper,
            request_options=request_options,
        )


class AsyncDetectionWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def sapling_ai_detect(
        self,
        body: ApiV1AidetectRequest2 | ApiV1AidetectRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AidetectResponse, SaplingAiDetectErrorBody]:
        """Score how likely a text is to be AI-generated. Returns an overall score between 0 (likely human-written) and
        1 (likely AI-generated), ai_fraction (the share of the text in sentences scoring >= 0.5, which flags partially
        AI-written documents), a verdict (human, mixed or ai), segments (character offsets of the AI-scored passages),
        low_confidence with low_confidence_reasons (short_text, list_format: inputs where false positives are more
        likely, so hedge the result), plus per-sentence scores by default. Provide at least ~50 characters of text for a
        meaningful score; 500+ characters of prose is most reliable. English, Dutch, French, German, Italian, Japanese,
        Portuguese and Spanish are supported: the language is detected automatically (or set it with lang), text in the
        non-English languages is scored by a multilingual model, and the response's version field names the model that
        scored the text. Other languages are scored by the English model and are less reliable.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/aidetect"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AidetectRequest2 | ApiV1AidetectRequest2Dict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1AidetectResponse],
            error_mapper=sapling_ai_detect_error_mapper,
            request_options=request_options,
        )

    async def sapling_ai_detect_url(
        self,
        body: ApiV1UrlAidetectRequest | ApiV1UrlAidetectRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1UrlAidetectResponse, SaplingAiDetectUrlErrorBody]:
        """Fetch a public web page (or a linked .pdf, .docx, .pptx, .odt, .txt or .md document) and score how likely its
        main text is to be AI-generated. Use this instead of sapling_ai_detect when you have a link rather than the
        text: Sapling fetches the page itself, drops navigation, headers, footers, forms and hidden elements, and scores
        only the main readable text (the largest , else ). Returns the same fields as sapling_ai_detect (score from 0 =
        likely human to 1 = likely AI, ai_fraction, verdict, segments, low_confidence, per-sentence scores by default,
        and the scored text) plus source: the final URL after redirects, the page title, its content type, the number of
        characters scored (and billed) and whether the page was truncated. Only http(s) URLs that resolve to public
        addresses are fetched. A page that is down, blocks automated requests, or has no readable text is reported as an
        error, not a score. For long pages set sent_scores=false to keep the result small.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/url-aidetect"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1UrlAidetectRequest | ApiV1UrlAidetectRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1UrlAidetectResponse],
            error_mapper=sapling_ai_detect_url_error_mapper,
            request_options=request_options,
        )

    async def sapling_aidetect_docx(
        self,
        file: AsyncFileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: AsyncFileInput | None = None,
        return_usage: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1DocxAidetectResponse, SaplingAidetectDocxErrorBody]:
        """Upload a .docx; its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence
        scores. Billed like /api/v1/aidetect.

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
            url_template=self._server.default("/api/v1/docx-aidetect"),
            query_params=[param[bool | None]("return_usage", return_usage_query), param[str | None]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                file_part("file", file),
                file_part("jsonParams", json_params) if json_params is not None else None,
                param[bool | None]("return_usage", return_usage),
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1DocxAidetectResponse],
            error_mapper=sapling_aidetect_docx_error_mapper,
            request_options=request_options,
        )

    async def sapling_aidetect_file(
        self,
        file: AsyncFileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: AsyncFileInput | None = None,
        return_usage: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1FileAidetectResponse, SaplingAidetectFileErrorBody]:
        """Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, chosen by file extension, up to 30MB);
        its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence scores. PPTX text is
        read in slide order without speaker notes; ODT drops footnotes, comments and tracked deletions; HTML is
        flattened to its visible text. Billed like /api/v1/aidetect.

        Args:
            file: The document to upload.
            return_usage_query: Value sent with the request.
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
            json_params: Optional JSON object (send it as a file part or form field): {"zero_retention": true} keeps no
                copy of the extracted text (no result cache or certificate hash, usage logged without text), as on
                /api/v1/aidetect; {"create_report": true} also saves the result as a shareable report and adds report
                (and report_skip_reason when none was made), as on /api/v1/aidetect.
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
            url_template=self._server.default("/api/v1/file-aidetect"),
            query_params=[param[bool | None]("return_usage", return_usage_query), param[str | None]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                file_part("file", file),
                file_part("jsonParams", json_params) if json_params is not None else None,
                param[bool | None]("return_usage", return_usage),
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1FileAidetectResponse],
            error_mapper=sapling_aidetect_file_error_mapper,
            request_options=request_options,
        )

    async def sapling_aidetect_pdf(
        self,
        file: AsyncFileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: AsyncFileInput | None = None,
        return_usage: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PdfAidetectResponse, SaplingAidetectPdfErrorBody]:
        """Upload a PDF; its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence
        scores. Billed like /api/v1/aidetect.

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
            url_template=self._server.default("/api/v1/pdf-aidetect"),
            query_params=[param[bool | None]("return_usage", return_usage_query), param[str | None]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                file_part("file", file),
                file_part("jsonParams", json_params) if json_params is not None else None,
                param[bool | None]("return_usage", return_usage),
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1PdfAidetectResponse],
            error_mapper=sapling_aidetect_pdf_error_mapper,
            request_options=request_options,
        )

    async def sapling_detect_language(
        self,
        body: ApiV1LangdetectRequest2 | ApiV1LangdetectRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1LangdetectResponse, SaplingDetectLanguageErrorBody]:
        """Detect the language a text is written in. Returns an ISO 639-1 code, a confidence value, reliable (the
        recommended threshold: true when the confidence is high and the text has enough letters; short inputs like "OK"
        are never reliable) and script, the dominant writing system as an ISO 15924 code (e.g. Latn, Cyrl, Hani, Jpan).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/langdetect"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1LangdetectRequest2 | ApiV1LangdetectRequest2Dict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1LangdetectResponse],
            error_mapper=sapling_detect_language_error_mapper,
            request_options=request_options,
        )

    async def sapling_detect_pii(
        self, body: ApiV1PiiRequest | ApiV1PiiRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PiiResponse, SaplingDetectPiiErrorBody]:
        """Detect personally identifiable information (emails, phone numbers, US SSNs, credit card numbers, IP
        addresses, IBANs, US bank routing numbers) in a text. Detection of those types is deterministic (regex +
        checksum validation, no ML), and every entity comes with exact character offsets (start/end) into the submitted
        text. Set redact=true to also receive redacted_text: the input with each entity replaced by a placeholder like
        [EMAIL]. Person names, organizations, and locations/street addresses are NOT detected by default: list
        person/organization/location in types explicitly to add LLM-backed detection of them (slower, and the text is
        then capped at 10000 characters).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/pii"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PiiRequest | ApiV1PiiRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1PiiResponse],
            error_mapper=sapling_detect_pii_error_mapper,
            request_options=request_options,
        )

    async def sapling_ner(
        self, body: ApiV1NerRequest2 | ApiV1NerRequest2Dict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1NerResponse, SaplingNerErrorBody]:
        """Find named entities in a text — people, organizations, locations, dates, times, money amounts, percentages,
        quantities, products, events — with character spans. Returns entities (each with its verbatim text, type, and
        start/end offsets into the exact submitted text) and types (the distinct types found). Every entity is a span
        the text actually contains — invented mentions are dropped. Offsets index the submitted text as-is (nothing is
        stripped or normalized), so they can be applied directly to your copy of the document. Use types to restrict
        recognition to a subset. Complements sapling_detect_pii: that tool finds checksum-validated identifiers (emails,
        cards, IBANs...), this one finds names and real-world references.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/ner"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1NerRequest2 | ApiV1NerRequest2Dict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1NerResponse],
            error_mapper=sapling_ner_error_mapper,
            request_options=request_options,
        )

    async def sapling_profanity(
        self,
        body: ApiV1ProfanityRequest | ApiV1ProfanityRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ProfanityResponse, SaplingProfanityErrorBody]:
        """Split text on whitespace and label each token 1 (profane) or 0. Not billed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/profanity"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ProfanityRequest | ApiV1ProfanityRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ProfanityResponse],
            error_mapper=sapling_profanity_error_mapper,
            request_options=request_options,
        )

    async def sapling_safety(
        self,
        body: ApiV1SafetyRequest2 | ApiV1SafetyRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SafetyResponse, SaplingSafetyErrorBody]:
        """Score a text for unsafe content across seven categories — toxicity, profanity, harassment, hate_speech,
        self_harm, sexual, violence — each as a 0-1 probability. Returns scores (all seven), flagged (whether any
        category reached the threshold, default 0.5) and flagged_categories. With spans=true, also returns spans: the
        specific offending passages, each with its text, start/end offsets into the submitted text, per-category scores
        and flagged_categories — use it to highlight, quote, or redact just the violating passage instead of rejecting
        the whole text.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/safety"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SafetyRequest2 | ApiV1SafetyRequest2Dict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1SafetyResponse],
            error_mapper=sapling_safety_error_mapper,
            request_options=request_options,
        )
