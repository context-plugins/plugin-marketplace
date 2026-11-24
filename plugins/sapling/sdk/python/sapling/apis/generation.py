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
from ..errors.sapling_accept_completion_error import (
    SaplingAcceptCompletionErrorBody,
    sapling_accept_completion_error_mapper,
)
from ..errors.sapling_autocomplete_error import SaplingAutocompleteErrorBody, sapling_autocomplete_error_mapper
from ..errors.sapling_paraphrase_error import SaplingParaphraseErrorBody, sapling_paraphrase_error_mapper
from ..errors.sapling_rephrase_error import SaplingRephraseErrorBody, sapling_rephrase_error_mapper
from ..errors.sapling_sentence_split_error import SaplingSentenceSplitErrorBody, sapling_sentence_split_error_mapper
from ..errors.sapling_simplify_error import SaplingSimplifyErrorBody, sapling_simplify_error_mapper
from ..errors.sapling_summarize_error import SaplingSummarizeErrorBody, sapling_summarize_error_mapper
from ..errors.sapling_summarize_file_error import SaplingSummarizeFileErrorBody, sapling_summarize_file_error_mapper
from ..errors.sapling_translate_error import SaplingTranslateErrorBody, sapling_translate_error_mapper
from ..models.api_v1_complete_accept_request import ApiV1CompleteAcceptRequest, ApiV1CompleteAcceptRequestDict
from ..models.api_v1_complete_accept_response import ApiV1CompleteAcceptResponse
from ..models.api_v1_complete_request import ApiV1CompleteRequest, ApiV1CompleteRequestDict
from ..models.api_v1_complete_response import ApiV1CompleteResponse
from ..models.api_v1_file_summarize_response import ApiV1FileSummarizeResponse
from ..models.api_v1_paraphrase_request import ApiV1ParaphraseRequest, ApiV1ParaphraseRequestDict
from ..models.api_v1_paraphrase_response import ApiV1ParaphraseResponse
from ..models.api_v1_rephrase_request import ApiV1RephraseRequest, ApiV1RephraseRequestDict
from ..models.api_v1_rephrase_response import ApiV1RephraseResponse
from ..models.api_v1_sentence_split_request import ApiV1SentenceSplitRequest, ApiV1SentenceSplitRequestDict
from ..models.api_v1_sentence_split_response import ApiV1SentenceSplitResponse
from ..models.api_v1_simplify_response import ApiV1SimplifyResponse
from ..models.api_v1_summarize_response import ApiV1SummarizeResponse
from ..models.api_v1_translate_response import ApiV1TranslateResponse
from ..models.unions.api_v1_simplify_request2 import ApiV1SimplifyRequest2, ApiV1SimplifyRequest2Dict
from ..models.unions.api_v1_summarize_request2 import ApiV1SummarizeRequest2, ApiV1SummarizeRequest2Dict
from ..models.unions.api_v1_translate_request2 import ApiV1TranslateRequest2, ApiV1TranslateRequest2Dict
from ..server.server import Server


class Generation:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GenerationWithRawResponse(client, server, auth)

    def sapling_accept_completion(
        self,
        completion_hash: UUID,
        body: ApiV1CompleteAcceptRequest | ApiV1CompleteAcceptRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CompleteAcceptResponse:
        """Report that the user accepted an autocomplete suggestion. ``context`` must be exactly the ``{query,
        completion}`` object the completion hash was computed from — extra keys fail the hash check.

        Args:
            completion_hash: The ``hash`` returned by /api/v1/complete.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recorded.

        Raises:
            ApiError: Invalid request. A malformed id answers {"message": ..., "result": "failure"}; a missing or
                mismatched context answers the {"msg": ...} Error shape, as do malformed JSON or missing arguments.
                Handle both shapes. Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription
                answers 402, not 401.) Payment required. Two distinct cases share this status. (1) A PERMANENT block —
                an expired API key or subscription, or exhausted quota/prepaid credits: renew or top up at
                https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its ``Retry-After`` is
                a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that hit its daily
                character cap: this clears on its own when the cap resets at the next UTC midnight, its ``Retry-After``
                states that actual reset, and the body carries a matching numeric ``retry_after`` field (whose presence
                also distinguishes the two cases). MCP OAuth access tokens are not accepted by this operation; send an
                API key. Request body over 4MB. Note the body uses ``message`` and ``result`` keys, not the usual
                ``msg``. Applies to requests authenticated via the Authorization header; a body-key-only request over
                the limit fails authentication instead (401), because the key cannot be read from the oversized body.
                Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error`` is
                ``ApiV1CompleteAcceptResponse11 | Error | PaymentRequired1 | PayloadTooLarge1 | RawError``."""
        return unwrap(
            self._with_raw_response.sapling_accept_completion(completion_hash, body, request_options=request_options)
        )

    def sapling_autocomplete(
        self,
        body: ApiV1CompleteRequest | ApiV1CompleteRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CompleteResponse:
        """Predict how a partially written sentence continues. Send the trailing text the user has typed as query (200
        characters maximum) and the tool returns the predicted continuation. Requires an API key with autocomplete
        enabled; other keys get an explicit error back.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/autocomplete/ An empty
            JSON array is returned when no completion is available (prediction failed or was shorter than the minimum
            length).

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
                persistent occurrences to support@sapling.ai. Temporarily unable to serve the request (e.g. model
                servers saturated). Honor Retry-After and retry. ``error`` is ``Error | PaymentRequired1 |
                PayloadTooLarge1 | RateLimited1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_autocomplete(body, request_options=request_options))

    def sapling_paraphrase(
        self,
        body: ApiV1ParaphraseRequest | ApiV1ParaphraseRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ParaphraseResponse:
        """DEPRECATED: use /api/v1/rephrase with mapping="paraphrase". Rewrites text with a chosen transformation,
        exactly like /api/v1/rephrase but under its own rate-limit bucket. Input is limited to 4000 characters.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Alternatives: {"results": [{hash, original, replacement, rephrase_type, model_version}]}.

        Raises:
            ApiError: Invalid request (missing/empty text, text over 4000 characters, invalid mapping). A TRANSIENT
                model failure is also reported as a 400 whose msg starts with "Unexpected error" — safe to retry after a
                short delay. Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers
                402, not 401.) Payment required. Two distinct cases share this status. (1) A PERMANENT block — an
                expired API key or subscription, or exhausted quota/prepaid credits: renew or top up at
                https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its ``Retry-After`` is
                a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that hit its daily
                character cap: this clears on its own when the cap resets at the next UTC midnight, its ``Retry-After``
                states that actual reset, and the body carries a matching numeric ``retry_after`` field (whose presence
                also distinguishes the two cases). MCP OAuth access tokens are not accepted by this operation; send an
                API key. Request body over 4MB. Note the body uses ``message`` and ``result`` keys, not the usual
                ``msg``. Applies to requests authenticated via the Authorization header; a body-key-only request over
                the limit fails authentication instead (401), because the key cannot be read from the oversized body.
                Rate limited. Wait retry_after seconds (also in the Retry-After header) and retry. If retry_after is
                absent, the request exceeds the bucket capacity and can never succeed unchanged. The monthly API quota
                answers 429 too, with Retry-After set to the start of next month. On this operation an anonymous (no API
                key) request over the free-usage character cap also answers 429, with no Retry-After header and no
                retry_after field — that request can never succeed unchanged; send an API key or shorten the text
                instead of retrying. Unexpected server error. Report persistent occurrences to support@sapling.ai.
                ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 | ApiV1Paraphrase429Error1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_paraphrase(body, request_options=request_options))

    def sapling_rephrase(
        self,
        body: ApiV1RephraseRequest | ApiV1RephraseRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1RephraseResponse:
        """Generate alternative phrasings of a text. mapping selects the transformation (default "paraphrase");
        num_results controls how many alternatives are returned (default 5).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/rephrase/

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
                the request exceeds the bucket capacity and can never succeed unchanged. On this operation an anonymous
                (no API key) request over the free-usage character cap also answers 429, with no Retry-After header and
                no retry_after field — that request can never succeed unchanged; send an API key or shorten the text
                instead of retrying. Unexpected server error. Report persistent occurrences to support@sapling.ai.
                Temporarily unable to serve the request (e.g. model servers saturated). Honor Retry-After and retry.
                ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 | ApiV1Rephrase429Error1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_rephrase(body, request_options=request_options))

    def sapling_sentence_split(
        self,
        body: ApiV1SentenceSplitRequest | ApiV1SentenceSplitRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SentenceSplitResponse:
        """Rewrite text, breaking run-on sentences into shorter ones. Input is limited to 400 characters.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Alternatives: {"results": [{hash, original, replacement, rephrase_type, model_version}]}. Empty when no
                split improves the text.

        Raises:
            ApiError: Invalid request (missing/empty text, or text over 400 characters). A TRANSIENT model failure is
                also reported as a 400 whose msg starts with "Unexpected error" — safe to retry after a short delay.
                Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.)
                Payment required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). MCP
                OAuth access tokens are not accepted by this operation; send an API key. Request body over 4MB. Note the
                body uses ``message`` and ``result`` keys, not the usual ``msg``. Applies to requests authenticated via
                the Authorization header; a body-key-only request over the limit fails authentication instead (401),
                because the key cannot be read from the oversized body. Rate limited. Wait retry_after seconds (also in
                the Retry-After header) and retry. If retry_after is absent, the request exceeds the bucket capacity and
                can never succeed unchanged. The monthly API quota answers 429 too, with Retry-After set to the start of
                next month. On this operation an anonymous (no API key) request over the free-usage character cap also
                answers 429, with no Retry-After header and no retry_after field — that request can never succeed
                unchanged; send an API key or shorten the text instead of retrying. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1
                | ApiV1SentenceSplit429Error1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_sentence_split(body, request_options=request_options))

    def sapling_simplify(
        self,
        body: ApiV1SimplifyRequest2 | ApiV1SimplifyRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SimplifyResponse:
        """Rewrite a text in plain language at a target reading level, keeping all of its content, structure and
        language (nothing is summarized or dropped). Returns simplified (the rewrite) plus a before/after readability
        block (Flesch-Kincaid grade and reading ease) when the language supports it, so the improvement is verifiable.
        Use preserve_terms for names or defined terms that must survive verbatim. Pairs with
        sapling_readability_statistics for scoring text first.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/simplify/ A batch
            (``texts``) request answers {"results": [...]} instead: one single-text response per input text, in input
            order.

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
        return unwrap(self._with_raw_response.sapling_simplify(body, request_options=request_options))

    def sapling_summarize(
        self,
        body: ApiV1SummarizeRequest2 | ApiV1SummarizeRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SummarizeResponse:
        """Summarize a longer text, webpage or email thread (HTML input is accepted and flattened). Returns a prose
        ``summary`` plus a ``key_points`` list, sized by the optional ``length`` option.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/summarize/ A batch
            (``texts``) request answers {"results": [...]} instead: one single-text response per input text, in input
            order.

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
                the request exceeds the bucket capacity and can never succeed unchanged. On this operation an anonymous
                (no API key) request over the free-usage character cap also answers 429, with no Retry-After header and
                no retry_after field — that request can never succeed unchanged; send an API key or shorten the text
                instead of retrying. Unexpected server error. Report persistent occurrences to support@sapling.ai. The
                upstream model call failed or returned an unusable result. The response is neither cached nor billed;
                safe to retry after a short delay. Temporarily unable to serve the request (e.g. model servers
                saturated). Honor Retry-After and retry. ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 |
                ApiV1Summarize429Error1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_summarize(body, request_options=request_options))

    def sapling_summarize_file(
        self,
        file: FileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: FileInput | None = None,
        return_usage: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1FileSummarizeResponse:
        """Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, up to 30MB) and summarize its text
        exactly like /api/v1/summarize. Options ride the optional jsonParams part. Text past the first 20,000 characters
        is not read; the response ``document`` object reports ``truncated``. Billed like /api/v1/summarize on the
        characters used. Unbilled (trial and public) keys also answer 429 with Retry-After when their per-minute
        generation budget is spent.

        Args:
            file: The document to upload.
            return_usage_query: Value sent with the request.
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
            json_params: Optional JSON object (send it as a file part or form field): {"length": "short" | "medium" |
                "long", "key": "<API key>", "return_usage": true}. ``length`` defaults to "medium", as on
                /api/v1/summarize.
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
            Same shape as a single /api/v1/summarize response, plus ``document``.

        Raises:
            ApiError: Missing/unsupported file, unreadable document, no text ({"error": "<reason>"}), or invalid
                jsonParams/length ({"msg": "<reason>"}). Missing or invalid API key or OAuth access token. (An EXPIRED
                key or subscription answers 402, not 401.) Payment required. Two distinct cases share this status. (1) A
                PERMANENT block — an expired API key or subscription, or exhausted quota/prepaid credits: renew or top
                up at https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its
                ``Retry-After`` is a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that
                hit its daily character cap: this clears on its own when the cap resets at the next UTC midnight, its
                ``Retry-After`` states that actual reset, and the body carries a matching numeric ``retry_after`` field
                (whose presence also distinguishes the two cases). MCP OAuth access tokens are not accepted by this
                operation; send an API key. The uploaded file is over 30MB. Body: {"error": "<reason>"}. Too many
                uploads in the last minute. No Retry-After or rate-limit headers are sent; back off and retry. Unbilled
                (trial and public) keys also answer 429 when their per-minute generation budget is spent; that variant
                sets Retry-After and a numeric retry_after body field, so honor it before retrying. The monthly API
                quota answers 429 too, with Retry-After set to the start of next month. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. The model call failed transiently; nothing was billed.
                Safe to retry. ``error`` is ``ApiV1FileSummarize400Error1 | Error | PaymentRequired1 |
                ApiV1FileSummarize413Error1 | ApiV1FileSummarize429Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.sapling_summarize_file(
                file,
                return_usage_query=return_usage_query,
                key=key,
                json_params=json_params,
                return_usage=return_usage,
                request_options=request_options,
            ),
        )

    def sapling_translate(
        self,
        body: ApiV1TranslateRequest2 | ApiV1TranslateRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1TranslateResponse:
        """Translate a text into a target language with an LLM. Returns translation, the detected source language
        (source_lang code + source_lang_name; the detection is reported, never guessed from the hint) and the normalized
        target (target_lang, target_lang_name). Line breaks, markup and placeholders are preserved in place. target_lang
        and source_lang accept an ISO 639 code ("fr", "zh-TW") or an English language name ("French"); region variants
        zh-CN/zh-TW/zh-HK, pt-BR/pt-PT, en-GB/en-US, fr-CA and es-419 are supported as targets. Optional formality picks
        a formal or informal register where the target language distinguishes them.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/translate/ A batch
            (``texts``) request answers {"results": [...]} instead: one single-text response per input text, in input
            order.

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
        return unwrap(self._with_raw_response.sapling_translate(body, request_options=request_options))

    @property
    def with_raw_response(self) -> GenerationWithRawResponse:
        return self._with_raw_response


class AsyncGeneration:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGenerationWithRawResponse(client, server, auth)

    async def sapling_accept_completion(
        self,
        completion_hash: UUID,
        body: ApiV1CompleteAcceptRequest | ApiV1CompleteAcceptRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CompleteAcceptResponse:
        """Report that the user accepted an autocomplete suggestion. ``context`` must be exactly the ``{query,
        completion}`` object the completion hash was computed from — extra keys fail the hash check.

        Args:
            completion_hash: The ``hash`` returned by /api/v1/complete.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recorded.

        Raises:
            ApiError: Invalid request. A malformed id answers {"message": ..., "result": "failure"}; a missing or
                mismatched context answers the {"msg": ...} Error shape, as do malformed JSON or missing arguments.
                Handle both shapes. Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription
                answers 402, not 401.) Payment required. Two distinct cases share this status. (1) A PERMANENT block —
                an expired API key or subscription, or exhausted quota/prepaid credits: renew or top up at
                https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its ``Retry-After`` is
                a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that hit its daily
                character cap: this clears on its own when the cap resets at the next UTC midnight, its ``Retry-After``
                states that actual reset, and the body carries a matching numeric ``retry_after`` field (whose presence
                also distinguishes the two cases). MCP OAuth access tokens are not accepted by this operation; send an
                API key. Request body over 4MB. Note the body uses ``message`` and ``result`` keys, not the usual
                ``msg``. Applies to requests authenticated via the Authorization header; a body-key-only request over
                the limit fails authentication instead (401), because the key cannot be read from the oversized body.
                Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error`` is
                ``ApiV1CompleteAcceptResponse11 | Error | PaymentRequired1 | PayloadTooLarge1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_accept_completion(
                completion_hash, body, request_options=request_options
            ),
        )

    async def sapling_autocomplete(
        self,
        body: ApiV1CompleteRequest | ApiV1CompleteRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CompleteResponse:
        """Predict how a partially written sentence continues. Send the trailing text the user has typed as query (200
        characters maximum) and the tool returns the predicted continuation. Requires an API key with autocomplete
        enabled; other keys get an explicit error back.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/autocomplete/ An empty
            JSON array is returned when no completion is available (prediction failed or was shorter than the minimum
            length).

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
                persistent occurrences to support@sapling.ai. Temporarily unable to serve the request (e.g. model
                servers saturated). Honor Retry-After and retry. ``error`` is ``Error | PaymentRequired1 |
                PayloadTooLarge1 | RateLimited1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_autocomplete(body, request_options=request_options))

    async def sapling_paraphrase(
        self,
        body: ApiV1ParaphraseRequest | ApiV1ParaphraseRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ParaphraseResponse:
        """DEPRECATED: use /api/v1/rephrase with mapping="paraphrase". Rewrites text with a chosen transformation,
        exactly like /api/v1/rephrase but under its own rate-limit bucket. Input is limited to 4000 characters.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Alternatives: {"results": [{hash, original, replacement, rephrase_type, model_version}]}.

        Raises:
            ApiError: Invalid request (missing/empty text, text over 4000 characters, invalid mapping). A TRANSIENT
                model failure is also reported as a 400 whose msg starts with "Unexpected error" — safe to retry after a
                short delay. Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers
                402, not 401.) Payment required. Two distinct cases share this status. (1) A PERMANENT block — an
                expired API key or subscription, or exhausted quota/prepaid credits: renew or top up at
                https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its ``Retry-After`` is
                a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that hit its daily
                character cap: this clears on its own when the cap resets at the next UTC midnight, its ``Retry-After``
                states that actual reset, and the body carries a matching numeric ``retry_after`` field (whose presence
                also distinguishes the two cases). MCP OAuth access tokens are not accepted by this operation; send an
                API key. Request body over 4MB. Note the body uses ``message`` and ``result`` keys, not the usual
                ``msg``. Applies to requests authenticated via the Authorization header; a body-key-only request over
                the limit fails authentication instead (401), because the key cannot be read from the oversized body.
                Rate limited. Wait retry_after seconds (also in the Retry-After header) and retry. If retry_after is
                absent, the request exceeds the bucket capacity and can never succeed unchanged. The monthly API quota
                answers 429 too, with Retry-After set to the start of next month. On this operation an anonymous (no API
                key) request over the free-usage character cap also answers 429, with no Retry-After header and no
                retry_after field — that request can never succeed unchanged; send an API key or shorten the text
                instead of retrying. Unexpected server error. Report persistent occurrences to support@sapling.ai.
                ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 | ApiV1Paraphrase429Error1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_paraphrase(body, request_options=request_options))

    async def sapling_rephrase(
        self,
        body: ApiV1RephraseRequest | ApiV1RephraseRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1RephraseResponse:
        """Generate alternative phrasings of a text. mapping selects the transformation (default "paraphrase");
        num_results controls how many alternatives are returned (default 5).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/rephrase/

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
                the request exceeds the bucket capacity and can never succeed unchanged. On this operation an anonymous
                (no API key) request over the free-usage character cap also answers 429, with no Retry-After header and
                no retry_after field — that request can never succeed unchanged; send an API key or shorten the text
                instead of retrying. Unexpected server error. Report persistent occurrences to support@sapling.ai.
                Temporarily unable to serve the request (e.g. model servers saturated). Honor Retry-After and retry.
                ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 | ApiV1Rephrase429Error1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_rephrase(body, request_options=request_options))

    async def sapling_sentence_split(
        self,
        body: ApiV1SentenceSplitRequest | ApiV1SentenceSplitRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SentenceSplitResponse:
        """Rewrite text, breaking run-on sentences into shorter ones. Input is limited to 400 characters.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Alternatives: {"results": [{hash, original, replacement, rephrase_type, model_version}]}. Empty when no
                split improves the text.

        Raises:
            ApiError: Invalid request (missing/empty text, or text over 400 characters). A TRANSIENT model failure is
                also reported as a 400 whose msg starts with "Unexpected error" — safe to retry after a short delay.
                Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.)
                Payment required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). MCP
                OAuth access tokens are not accepted by this operation; send an API key. Request body over 4MB. Note the
                body uses ``message`` and ``result`` keys, not the usual ``msg``. Applies to requests authenticated via
                the Authorization header; a body-key-only request over the limit fails authentication instead (401),
                because the key cannot be read from the oversized body. Rate limited. Wait retry_after seconds (also in
                the Retry-After header) and retry. If retry_after is absent, the request exceeds the bucket capacity and
                can never succeed unchanged. The monthly API quota answers 429 too, with Retry-After set to the start of
                next month. On this operation an anonymous (no API key) request over the free-usage character cap also
                answers 429, with no Retry-After header and no retry_after field — that request can never succeed
                unchanged; send an API key or shorten the text instead of retrying. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1
                | ApiV1SentenceSplit429Error1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_sentence_split(body, request_options=request_options))

    async def sapling_simplify(
        self,
        body: ApiV1SimplifyRequest2 | ApiV1SimplifyRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SimplifyResponse:
        """Rewrite a text in plain language at a target reading level, keeping all of its content, structure and
        language (nothing is summarized or dropped). Returns simplified (the rewrite) plus a before/after readability
        block (Flesch-Kincaid grade and reading ease) when the language supports it, so the improvement is verifiable.
        Use preserve_terms for names or defined terms that must survive verbatim. Pairs with
        sapling_readability_statistics for scoring text first.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/simplify/ A batch
            (``texts``) request answers {"results": [...]} instead: one single-text response per input text, in input
            order.

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
        return unwrap(await self._with_raw_response.sapling_simplify(body, request_options=request_options))

    async def sapling_summarize(
        self,
        body: ApiV1SummarizeRequest2 | ApiV1SummarizeRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SummarizeResponse:
        """Summarize a longer text, webpage or email thread (HTML input is accepted and flattened). Returns a prose
        ``summary`` plus a ``key_points`` list, sized by the optional ``length`` option.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/summarize/ A batch
            (``texts``) request answers {"results": [...]} instead: one single-text response per input text, in input
            order.

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
                the request exceeds the bucket capacity and can never succeed unchanged. On this operation an anonymous
                (no API key) request over the free-usage character cap also answers 429, with no Retry-After header and
                no retry_after field — that request can never succeed unchanged; send an API key or shorten the text
                instead of retrying. Unexpected server error. Report persistent occurrences to support@sapling.ai. The
                upstream model call failed or returned an unusable result. The response is neither cached nor billed;
                safe to retry after a short delay. Temporarily unable to serve the request (e.g. model servers
                saturated). Honor Retry-After and retry. ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 |
                ApiV1Summarize429Error1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_summarize(body, request_options=request_options))

    async def sapling_summarize_file(
        self,
        file: AsyncFileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: AsyncFileInput | None = None,
        return_usage: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1FileSummarizeResponse:
        """Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, up to 30MB) and summarize its text
        exactly like /api/v1/summarize. Options ride the optional jsonParams part. Text past the first 20,000 characters
        is not read; the response ``document`` object reports ``truncated``. Billed like /api/v1/summarize on the
        characters used. Unbilled (trial and public) keys also answer 429 with Retry-After when their per-minute
        generation budget is spent.

        Args:
            file: The document to upload.
            return_usage_query: Value sent with the request.
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
            json_params: Optional JSON object (send it as a file part or form field): {"length": "short" | "medium" |
                "long", "key": "<API key>", "return_usage": true}. ``length`` defaults to "medium", as on
                /api/v1/summarize.
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
            Same shape as a single /api/v1/summarize response, plus ``document``.

        Raises:
            ApiError: Missing/unsupported file, unreadable document, no text ({"error": "<reason>"}), or invalid
                jsonParams/length ({"msg": "<reason>"}). Missing or invalid API key or OAuth access token. (An EXPIRED
                key or subscription answers 402, not 401.) Payment required. Two distinct cases share this status. (1) A
                PERMANENT block — an expired API key or subscription, or exhausted quota/prepaid credits: renew or top
                up at https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its
                ``Retry-After`` is a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that
                hit its daily character cap: this clears on its own when the cap resets at the next UTC midnight, its
                ``Retry-After`` states that actual reset, and the body carries a matching numeric ``retry_after`` field
                (whose presence also distinguishes the two cases). MCP OAuth access tokens are not accepted by this
                operation; send an API key. The uploaded file is over 30MB. Body: {"error": "<reason>"}. Too many
                uploads in the last minute. No Retry-After or rate-limit headers are sent; back off and retry. Unbilled
                (trial and public) keys also answer 429 when their per-minute generation budget is spent; that variant
                sets Retry-After and a numeric retry_after body field, so honor it before retrying. The monthly API
                quota answers 429 too, with Retry-After set to the start of next month. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. The model call failed transiently; nothing was billed.
                Safe to retry. ``error`` is ``ApiV1FileSummarize400Error1 | Error | PaymentRequired1 |
                ApiV1FileSummarize413Error1 | ApiV1FileSummarize429Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_summarize_file(
                file,
                return_usage_query=return_usage_query,
                key=key,
                json_params=json_params,
                return_usage=return_usage,
                request_options=request_options,
            ),
        )

    async def sapling_translate(
        self,
        body: ApiV1TranslateRequest2 | ApiV1TranslateRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1TranslateResponse:
        """Translate a text into a target language with an LLM. Returns translation, the detected source language
        (source_lang code + source_lang_name; the detection is reported, never guessed from the hint) and the normalized
        target (target_lang, target_lang_name). Line breaks, markup and placeholders are preserved in place. target_lang
        and source_lang accept an ISO 639 code ("fr", "zh-TW") or an English language name ("French"); region variants
        zh-CN/zh-TW/zh-HK, pt-BR/pt-PT, en-GB/en-US, fr-CA and es-419 are supported as targets. Optional formality picks
        a formal or informal register where the target language distinguishes them.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/translate/ A batch
            (``texts``) request answers {"results": [...]} instead: one single-text response per input text, in input
            order.

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
        return unwrap(await self._with_raw_response.sapling_translate(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncGenerationWithRawResponse:
        return self._with_raw_response


class GenerationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def sapling_accept_completion(
        self,
        completion_hash: UUID,
        body: ApiV1CompleteAcceptRequest | ApiV1CompleteAcceptRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CompleteAcceptResponse, SaplingAcceptCompletionErrorBody]:
        """Report that the user accepted an autocomplete suggestion. ``context`` must be exactly the ``{query,
        completion}`` object the completion hash was computed from — extra keys fail the hash check.

        Args:
            completion_hash: The ``hash`` returned by /api/v1/complete.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/complete/{completion_hash}/accept"),
            path_params=[param[UUID]("completion_hash", completion_hash)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1CompleteAcceptRequest | ApiV1CompleteAcceptRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CompleteAcceptResponse],
            error_mapper=sapling_accept_completion_error_mapper,
            request_options=request_options,
        )

    def sapling_autocomplete(
        self,
        body: ApiV1CompleteRequest | ApiV1CompleteRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CompleteResponse, SaplingAutocompleteErrorBody]:
        """Predict how a partially written sentence continues. Send the trailing text the user has typed as query (200
        characters maximum) and the tool returns the predicted continuation. Requires an API key with autocomplete
        enabled; other keys get an explicit error back.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/complete"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1CompleteRequest | ApiV1CompleteRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1CompleteResponse],
            error_mapper=sapling_autocomplete_error_mapper,
            request_options=request_options,
        )

    def sapling_paraphrase(
        self,
        body: ApiV1ParaphraseRequest | ApiV1ParaphraseRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ParaphraseResponse, SaplingParaphraseErrorBody]:
        """DEPRECATED: use /api/v1/rephrase with mapping="paraphrase". Rewrites text with a chosen transformation,
        exactly like /api/v1/rephrase but under its own rate-limit bucket. Input is limited to 4000 characters.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/paraphrase"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ParaphraseRequest | ApiV1ParaphraseRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ParaphraseResponse],
            error_mapper=sapling_paraphrase_error_mapper,
            request_options=request_options,
        )

    def sapling_rephrase(
        self,
        body: ApiV1RephraseRequest | ApiV1RephraseRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1RephraseResponse, SaplingRephraseErrorBody]:
        """Generate alternative phrasings of a text. mapping selects the transformation (default "paraphrase");
        num_results controls how many alternatives are returned (default 5).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/rephrase"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1RephraseRequest | ApiV1RephraseRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1RephraseResponse],
            error_mapper=sapling_rephrase_error_mapper,
            request_options=request_options,
        )

    def sapling_sentence_split(
        self,
        body: ApiV1SentenceSplitRequest | ApiV1SentenceSplitRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SentenceSplitResponse, SaplingSentenceSplitErrorBody]:
        """Rewrite text, breaking run-on sentences into shorter ones. Input is limited to 400 characters.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/sentence_split"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SentenceSplitRequest | ApiV1SentenceSplitRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1SentenceSplitResponse],
            error_mapper=sapling_sentence_split_error_mapper,
            request_options=request_options,
        )

    def sapling_simplify(
        self,
        body: ApiV1SimplifyRequest2 | ApiV1SimplifyRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SimplifyResponse, SaplingSimplifyErrorBody]:
        """Rewrite a text in plain language at a target reading level, keeping all of its content, structure and
        language (nothing is summarized or dropped). Returns simplified (the rewrite) plus a before/after readability
        block (Flesch-Kincaid grade and reading ease) when the language supports it, so the improvement is verifiable.
        Use preserve_terms for names or defined terms that must survive verbatim. Pairs with
        sapling_readability_statistics for scoring text first.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/simplify"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SimplifyRequest2 | ApiV1SimplifyRequest2Dict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1SimplifyResponse],
            error_mapper=sapling_simplify_error_mapper,
            request_options=request_options,
        )

    def sapling_summarize(
        self,
        body: ApiV1SummarizeRequest2 | ApiV1SummarizeRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SummarizeResponse, SaplingSummarizeErrorBody]:
        """Summarize a longer text, webpage or email thread (HTML input is accepted and flattened). Returns a prose
        ``summary`` plus a ``key_points`` list, sized by the optional ``length`` option.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/summarize"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SummarizeRequest2 | ApiV1SummarizeRequest2Dict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1SummarizeResponse],
            error_mapper=sapling_summarize_error_mapper,
            request_options=request_options,
        )

    def sapling_summarize_file(
        self,
        file: FileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: FileInput | None = None,
        return_usage: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1FileSummarizeResponse, SaplingSummarizeFileErrorBody]:
        """Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, up to 30MB) and summarize its text
        exactly like /api/v1/summarize. Options ride the optional jsonParams part. Text past the first 20,000 characters
        is not read; the response ``document`` object reports ``truncated``. Billed like /api/v1/summarize on the
        characters used. Unbilled (trial and public) keys also answer 429 with Retry-After when their per-minute
        generation budget is spent.

        Args:
            file: The document to upload.
            return_usage_query: Value sent with the request.
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
            json_params: Optional JSON object (send it as a file part or form field): {"length": "short" | "medium" |
                "long", "key": "<API key>", "return_usage": true}. ``length`` defaults to "medium", as on
                /api/v1/summarize.
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
            url_template=self._server.default("/api/v1/file-summarize"),
            query_params=[param[bool | None]("return_usage", return_usage_query), param[str | None]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                file_part("file", file),
                file_part("jsonParams", json_params) if json_params is not None else None,
                param[bool | None]("return_usage", return_usage),
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1FileSummarizeResponse],
            error_mapper=sapling_summarize_file_error_mapper,
            request_options=request_options,
        )

    def sapling_translate(
        self,
        body: ApiV1TranslateRequest2 | ApiV1TranslateRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TranslateResponse, SaplingTranslateErrorBody]:
        """Translate a text into a target language with an LLM. Returns translation, the detected source language
        (source_lang code + source_lang_name; the detection is reported, never guessed from the hint) and the normalized
        target (target_lang, target_lang_name). Line breaks, markup and placeholders are preserved in place. target_lang
        and source_lang accept an ISO 639 code ("fr", "zh-TW") or an English language name ("French"); region variants
        zh-CN/zh-TW/zh-HK, pt-BR/pt-PT, en-GB/en-US, fr-CA and es-419 are supported as targets. Optional formality picks
        a formal or informal register where the target language distinguishes them.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/translate"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TranslateRequest2 | ApiV1TranslateRequest2Dict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1TranslateResponse],
            error_mapper=sapling_translate_error_mapper,
            request_options=request_options,
        )


class AsyncGenerationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def sapling_accept_completion(
        self,
        completion_hash: UUID,
        body: ApiV1CompleteAcceptRequest | ApiV1CompleteAcceptRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CompleteAcceptResponse, SaplingAcceptCompletionErrorBody]:
        """Report that the user accepted an autocomplete suggestion. ``context`` must be exactly the ``{query,
        completion}`` object the completion hash was computed from — extra keys fail the hash check.

        Args:
            completion_hash: The ``hash`` returned by /api/v1/complete.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/complete/{completion_hash}/accept"),
            path_params=[param[UUID]("completion_hash", completion_hash)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1CompleteAcceptRequest | ApiV1CompleteAcceptRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CompleteAcceptResponse],
            error_mapper=sapling_accept_completion_error_mapper,
            request_options=request_options,
        )

    async def sapling_autocomplete(
        self,
        body: ApiV1CompleteRequest | ApiV1CompleteRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CompleteResponse, SaplingAutocompleteErrorBody]:
        """Predict how a partially written sentence continues. Send the trailing text the user has typed as query (200
        characters maximum) and the tool returns the predicted continuation. Requires an API key with autocomplete
        enabled; other keys get an explicit error back.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/complete"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1CompleteRequest | ApiV1CompleteRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1CompleteResponse],
            error_mapper=sapling_autocomplete_error_mapper,
            request_options=request_options,
        )

    async def sapling_paraphrase(
        self,
        body: ApiV1ParaphraseRequest | ApiV1ParaphraseRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ParaphraseResponse, SaplingParaphraseErrorBody]:
        """DEPRECATED: use /api/v1/rephrase with mapping="paraphrase". Rewrites text with a chosen transformation,
        exactly like /api/v1/rephrase but under its own rate-limit bucket. Input is limited to 4000 characters.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/paraphrase"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ParaphraseRequest | ApiV1ParaphraseRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ParaphraseResponse],
            error_mapper=sapling_paraphrase_error_mapper,
            request_options=request_options,
        )

    async def sapling_rephrase(
        self,
        body: ApiV1RephraseRequest | ApiV1RephraseRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1RephraseResponse, SaplingRephraseErrorBody]:
        """Generate alternative phrasings of a text. mapping selects the transformation (default "paraphrase");
        num_results controls how many alternatives are returned (default 5).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/rephrase"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1RephraseRequest | ApiV1RephraseRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1RephraseResponse],
            error_mapper=sapling_rephrase_error_mapper,
            request_options=request_options,
        )

    async def sapling_sentence_split(
        self,
        body: ApiV1SentenceSplitRequest | ApiV1SentenceSplitRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SentenceSplitResponse, SaplingSentenceSplitErrorBody]:
        """Rewrite text, breaking run-on sentences into shorter ones. Input is limited to 400 characters.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/sentence_split"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SentenceSplitRequest | ApiV1SentenceSplitRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1SentenceSplitResponse],
            error_mapper=sapling_sentence_split_error_mapper,
            request_options=request_options,
        )

    async def sapling_simplify(
        self,
        body: ApiV1SimplifyRequest2 | ApiV1SimplifyRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SimplifyResponse, SaplingSimplifyErrorBody]:
        """Rewrite a text in plain language at a target reading level, keeping all of its content, structure and
        language (nothing is summarized or dropped). Returns simplified (the rewrite) plus a before/after readability
        block (Flesch-Kincaid grade and reading ease) when the language supports it, so the improvement is verifiable.
        Use preserve_terms for names or defined terms that must survive verbatim. Pairs with
        sapling_readability_statistics for scoring text first.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/simplify"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SimplifyRequest2 | ApiV1SimplifyRequest2Dict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1SimplifyResponse],
            error_mapper=sapling_simplify_error_mapper,
            request_options=request_options,
        )

    async def sapling_summarize(
        self,
        body: ApiV1SummarizeRequest2 | ApiV1SummarizeRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SummarizeResponse, SaplingSummarizeErrorBody]:
        """Summarize a longer text, webpage or email thread (HTML input is accepted and flattened). Returns a prose
        ``summary`` plus a ``key_points`` list, sized by the optional ``length`` option.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/summarize"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SummarizeRequest2 | ApiV1SummarizeRequest2Dict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1SummarizeResponse],
            error_mapper=sapling_summarize_error_mapper,
            request_options=request_options,
        )

    async def sapling_summarize_file(
        self,
        file: AsyncFileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        json_params: AsyncFileInput | None = None,
        return_usage: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1FileSummarizeResponse, SaplingSummarizeFileErrorBody]:
        """Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, up to 30MB) and summarize its text
        exactly like /api/v1/summarize. Options ride the optional jsonParams part. Text past the first 20,000 characters
        is not read; the response ``document`` object reports ``truncated``. Billed like /api/v1/summarize on the
        characters used. Unbilled (trial and public) keys also answer 429 with Retry-After when their per-minute
        generation budget is spent.

        Args:
            file: The document to upload.
            return_usage_query: Value sent with the request.
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
            json_params: Optional JSON object (send it as a file part or form field): {"length": "short" | "medium" |
                "long", "key": "<API key>", "return_usage": true}. ``length`` defaults to "medium", as on
                /api/v1/summarize.
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
            url_template=self._server.default("/api/v1/file-summarize"),
            query_params=[param[bool | None]("return_usage", return_usage_query), param[str | None]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                file_part("file", file),
                file_part("jsonParams", json_params) if json_params is not None else None,
                param[bool | None]("return_usage", return_usage),
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1FileSummarizeResponse],
            error_mapper=sapling_summarize_file_error_mapper,
            request_options=request_options,
        )

    async def sapling_translate(
        self,
        body: ApiV1TranslateRequest2 | ApiV1TranslateRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TranslateResponse, SaplingTranslateErrorBody]:
        """Translate a text into a target language with an LLM. Returns translation, the detected source language
        (source_lang code + source_lang_name; the detection is reported, never guessed from the hint) and the normalized
        target (target_lang, target_lang_name). Line breaks, markup and placeholders are preserved in place. target_lang
        and source_lang accept an ISO 639 code ("fr", "zh-TW") or an English language name ("French"); region variants
        zh-CN/zh-TW/zh-HK, pt-BR/pt-PT, en-GB/en-US, fr-CA and es-419 are supported as targets. Optional formality picks
        a formal or informal register where the target language distinguishes them.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/translate"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TranslateRequest2 | ApiV1TranslateRequest2Dict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1TranslateResponse],
            error_mapper=sapling_translate_error_mapper,
            request_options=request_options,
        )
