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
from ..errors.sapling_classify_error import SaplingClassifyErrorBody, sapling_classify_error_mapper
from ..errors.sapling_delete_style_ruleset_error import (
    SaplingDeleteStyleRulesetErrorBody,
    sapling_delete_style_ruleset_error_mapper,
)
from ..errors.sapling_extract_error import SaplingExtractErrorBody, sapling_extract_error_mapper
from ..errors.sapling_extract_file_error import SaplingExtractFileErrorBody, sapling_extract_file_error_mapper
from ..errors.sapling_inclusive_error import SaplingInclusiveErrorBody, sapling_inclusive_error_mapper
from ..errors.sapling_list_style_rulesets_error import (
    SaplingListStyleRulesetsErrorBody,
    sapling_list_style_rulesets_error_mapper,
)
from ..errors.sapling_quality_error import SaplingQualityErrorBody, sapling_quality_error_mapper
from ..errors.sapling_readability_statistics_error import (
    SaplingReadabilityStatisticsErrorBody,
    sapling_readability_statistics_error_mapper,
)
from ..errors.sapling_save_style_ruleset_error import (
    SaplingSaveStyleRulesetErrorBody,
    sapling_save_style_ruleset_error_mapper,
)
from ..errors.sapling_sentiment_error import SaplingSentimentErrorBody, sapling_sentiment_error_mapper
from ..errors.sapling_seo_error import SaplingSeoErrorBody, sapling_seo_error_mapper
from ..errors.sapling_similar_terms_error import SaplingSimilarTermsErrorBody, sapling_similar_terms_error_mapper
from ..errors.sapling_styleguide_error import SaplingStyleguideErrorBody, sapling_styleguide_error_mapper
from ..errors.sapling_tone_error import SaplingToneErrorBody, sapling_tone_error_mapper
from ..models.api_v1_classify_response import ApiV1ClassifyResponse
from ..models.api_v1_extract_response import ApiV1ExtractResponse
from ..models.api_v1_file_extract_response import ApiV1FileExtractResponse
from ..models.api_v1_inclusive_response import ApiV1InclusiveResponse
from ..models.api_v1_quality_response import ApiV1QualityResponse
from ..models.api_v1_sentiment_request import ApiV1SentimentRequest, ApiV1SentimentRequestDict
from ..models.api_v1_sentiment_response import ApiV1SentimentResponse
from ..models.api_v1_seo_request import ApiV1SeoRequest, ApiV1SeoRequestDict
from ..models.api_v1_seo_response import ApiV1SeoResponse
from ..models.api_v1_statistics_request import ApiV1StatisticsRequest, ApiV1StatisticsRequestDict
from ..models.api_v1_statistics_response import ApiV1StatisticsResponse
from ..models.api_v1_styleguide_response import ApiV1StyleguideResponse
from ..models.api_v1_styleguide_rulesets_request import (
    ApiV1StyleguideRulesetsRequest,
    ApiV1StyleguideRulesetsRequestDict,
)
from ..models.api_v1_styleguide_rulesets_request1 import (
    ApiV1StyleguideRulesetsRequest1,
    ApiV1StyleguideRulesetsRequest1Dict,
)
from ..models.api_v1_styleguide_rulesets_response import ApiV1StyleguideRulesetsResponse
from ..models.api_v1_styleguide_rulesets_response1 import ApiV1StyleguideRulesetsResponse1
from ..models.api_v1_styleguide_rulesets_response2 import ApiV1StyleguideRulesetsResponse2
from ..models.api_v1_thesaurus_request import ApiV1ThesaurusRequest, ApiV1ThesaurusRequestDict
from ..models.api_v1_thesaurus_response import ApiV1ThesaurusResponse
from ..models.api_v1_tone_request import ApiV1ToneRequest, ApiV1ToneRequestDict
from ..models.api_v1_tone_response import ApiV1ToneResponse
from ..models.unions.api_v1_classify_request2 import ApiV1ClassifyRequest2, ApiV1ClassifyRequest2Dict
from ..models.unions.api_v1_extract_request2 import ApiV1ExtractRequest2, ApiV1ExtractRequest2Dict
from ..models.unions.api_v1_inclusive_request2 import ApiV1InclusiveRequest2, ApiV1InclusiveRequest2Dict
from ..models.unions.api_v1_quality_request2 import ApiV1QualityRequest2, ApiV1QualityRequest2Dict
from ..models.unions.api_v1_styleguide_request4 import ApiV1StyleguideRequest4, ApiV1StyleguideRequest4Dict
from ..server.server import Server


class Analysis:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AnalysisWithRawResponse(client, server, auth)

    def sapling_classify(
        self,
        body: ApiV1ClassifyRequest2 | ApiV1ClassifyRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ClassifyResponse:
        """Classify a text into a set of labels you supply — intent, topic, category, routing queue, sentiment buckets,
        anything — without training data. Returns label (the best match, always one of your labels), labels
        (single-label: just the best match; multi-label: every label whose score >= threshold, possibly empty), scores
        (one {label, score} per input label, descending; a distribution in single-label mode, independent 0-1
        applicability in multi-label mode) and a one-sentence rationale. Labels can be plain names or {name,
        description} objects — a short description per label sharpens borderline decisions. Use context to say what the
        texts are (e.g. "support tickets for a billing product"). 2-20 labels.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/classify/ A batch
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
        return unwrap(self._with_raw_response.sapling_classify(body, request_options=request_options))

    def sapling_delete_style_ruleset(
        self,
        *,
        name: str | None = None,
        key: str | None = None,
        body: ApiV1StyleguideRulesetsRequest | ApiV1StyleguideRulesetsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1StyleguideRulesetsResponse:
        """Delete a saved rule set by name. The name may be sent as a query parameter or as ``name`` in a JSON body.

        Args:
            name: Rule set name (alternatively in the body).
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted.

        Raises:
            ApiError: Missing or invalid name. Missing or invalid API key or OAuth access token. (An EXPIRED key or
                subscription answers 402, not 401.) The public (client-side) API key cannot manage rule sets; use a
                private key. MCP OAuth access tokens are not accepted by this operation; send an API key. A named
                resource in the request does not exist for the authenticated account — e.g. a ``ruleset`` naming a saved
                rule set that was never created, was deleted, or belongs to another account. Correct or create the name;
                retrying unchanged will not help. Rate limited. Wait retry_after seconds (also in the Retry-After
                header) and retry. If retry_after is absent, the request exceeds the bucket capacity and can never
                succeed unchanged. Unexpected server error. Report persistent occurrences to support@sapling.ai.
                ``error`` is ``Error | RateLimited1 | RawError``."""
        return unwrap(
            self._with_raw_response.sapling_delete_style_ruleset(
                name=name, key=key, body=body, request_options=request_options
            ),
        )

    def sapling_extract(
        self,
        body: ApiV1ExtractRequest2 | ApiV1ExtractRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ExtractResponse:
        """Pull structured fields out of unstructured text — invoice numbers, amounts, dates, names, addresses, order
        ids, anything the document actually states — by describing the fields you want. Returns data (a {field: value}
        map, null where the text does not state the field), fields (per-field value, the verbatim evidence span it came
        from, and whether it was found) and missing (the fields the text did not yield). Values are returned in the type
        you declare (string, number, integer, boolean, date as YYYY-MM-DD, or list of strings) and a value that will not
        convert is reported missing rather than returned in the wrong type. This is EXTRACTION, not summarization or
        inference: except for boolean fields, a value must be traceable to a span of the text or it is dropped. Use
        context to say what the document is. 1-20 fields.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/extract/ A batch
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
        return unwrap(self._with_raw_response.sapling_extract(body, request_options=request_options))

    def sapling_extract_file(
        self,
        file: FileInput,
        json_params: FileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        return_usage: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1FileExtractResponse:
        """Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, up to 30MB) and extract caller-named
        fields from its text exactly like /api/v1/extract. Options ride the jsonParams part. Text past the first 10,000
        characters is not read; the response ``document`` object reports ``truncated``. Billed like /api/v1/extract on
        the characters used. Unbilled (trial and public) keys also answer 429 with Retry-After when their per-minute
        generation budget is spent.

        Args:
            file: The document to upload.
            json_params: JSON object (send it as a file part or form field): {"fields": [...], "context": "...", "key":
                "<API key>", "return_usage": true}. ``fields`` (required) and ``context`` take the same values as on
                /api/v1/extract.
            return_usage_query: Value sent with the request.
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
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
            Same shape as a single /api/v1/extract response, plus ``document``.

        Raises:
            ApiError: Missing/unsupported file, unreadable document, no text ({"error": "<reason>"}), or invalid
                jsonParams/fields ({"msg": "<reason>"}). Missing or invalid API key or OAuth access token. (An EXPIRED
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
                sets Retry-After and a numeric retry_after body field, so honor it before retrying. Unexpected server
                error. Report persistent occurrences to support@sapling.ai. The model call failed transiently; nothing
                was billed. Safe to retry. ``error`` is ``ApiV1FileExtract400Error1 | Error | PaymentRequired1 |
                ApiV1FileExtract413Error1 | ApiV1FileExtract429Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.sapling_extract_file(
                file,
                json_params,
                return_usage_query=return_usage_query,
                key=key,
                return_usage=return_usage,
                request_options=request_options,
            ),
        )

    def sapling_inclusive(
        self,
        body: ApiV1InclusiveRequest2 | ApiV1InclusiveRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1InclusiveResponse:
        """Find non-inclusive or biased wording in a text — gendered defaults, ableist idioms, ageist framing, outdated
        terms for groups, classist or appearance-based language. Returns issues, each with the verbatim passage, its
        start/end offsets in the submitted text (null when the passage cannot be located), a category, a severity (low /
        medium / high), a brief note and a neutral replacement suggestion, plus a top-level inclusive boolean. Wording
        is flagged, not topics: text that discusses or quotes a term to critique it is not an issue. Use categories to
        restrict the check to a subset. The text is checked as submitted (markup included), so offsets always index it
        directly.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/inclusive/ A batch
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
        return unwrap(self._with_raw_response.sapling_inclusive(body, request_options=request_options))

    def sapling_list_style_rulesets(
        self, *, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1StyleguideRulesetsResponse1:
        """Rule sets saved for this account (or the key's team), usable by name via the ``ruleset`` option of
        /api/v1/styleguide.

        Args:
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Saved rule sets, ordered by name.

        Raises:
            ApiError: Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not
                401.) The public (client-side) API key cannot manage rule sets; use a private key. MCP OAuth access
                tokens are not accepted by this operation; send an API key. Rate limited. Wait retry_after seconds (also
                in the Retry-After header) and retry. If retry_after is absent, the request exceeds the bucket capacity
                and can never succeed unchanged. Unexpected server error. Report persistent occurrences to
                support@sapling.ai. ``error`` is ``Error | RateLimited1 | RawError``."""
        return unwrap(
            self._with_raw_response.sapling_list_style_rulesets(
                return_usage=return_usage, request_options=request_options
            ),
        )

    def sapling_quality(
        self,
        body: ApiV1QualityRequest2 | ApiV1QualityRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1QualityResponse:
        """Score the writing quality of a text from 1 (poor) to 5 (excellent). Returns score: a fluency/grammaticality
        score from a language model. Set sentence_scores=true to also get a per-sentence breakdown (sentences with
        start/end offsets and their own score) to find the weakest sentences. Set rubric=true for an LLM-judged rubric:
        overall score, per-dimension scores (clarity, coherence, correctness, concision), a summary, and concrete issues
        each with the quoted excerpt, offsets, a note, and a suggested rewrite. rubric=true is billed at a higher rate
        than the plain score.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/quality/ A batch
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
        return unwrap(self._with_raw_response.sapling_quality(body, request_options=request_options))

    def sapling_readability_statistics(
        self,
        body: ApiV1StatisticsRequest | ApiV1StatisticsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1StatisticsResponse:
        """Compute readability statistics for a text: grade-level readability scores, estimated reading time, and counts
        of characters, words, and sentences.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/statistics/

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
                fails authentication instead (401), because the key cannot be read from the oversized body. Unexpected
                server error. Report persistent occurrences to support@sapling.ai. Temporarily unable to serve the
                request (e.g. model servers saturated). Honor Retry-After and retry. ``error`` is ``Error |
                PaymentRequired1 | PayloadTooLarge1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_readability_statistics(body, request_options=request_options))

    def sapling_save_style_ruleset(
        self,
        body: ApiV1StyleguideRulesetsRequest1 | ApiV1StyleguideRulesetsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1StyleguideRulesetsResponse2:
        """Upsert a named rule set (names match case-insensitively). An account can hold up to 100 rule sets.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The saved rule set, and whether it was newly created.

        Raises:
            ApiError: Invalid name or rules, or the 100 rule set limit is reached. Missing or invalid API key or OAuth
                access token. (An EXPIRED key or subscription answers 402, not 401.) The public (client-side) API key
                cannot manage rule sets; use a private key. MCP OAuth access tokens are not accepted by this operation;
                send an API key. Request body over 4MB. Note the body uses ``message`` and ``result`` keys, not the
                usual ``msg``. Applies to requests authenticated via the Authorization header; a body-key-only request
                over the limit fails authentication instead (401), because the key cannot be read from the oversized
                body. Rate limited. Wait retry_after seconds (also in the Retry-After header) and retry. If retry_after
                is absent, the request exceeds the bucket capacity and can never succeed unchanged. Unexpected server
                error. Report persistent occurrences to support@sapling.ai. ``error`` is ``Error | PayloadTooLarge1 |
                RateLimited1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_save_style_ruleset(body, request_options=request_options))

    def sapling_sentiment(
        self,
        body: ApiV1SentimentRequest | ApiV1SentimentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SentimentResponse:
        """Classify the sentiment of a text (positive / neutral / negative). Returns overall and per-sentence sentiment
        with confidence scores.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/sentiment/ A bare JSON
            array (no per-sentence results) is the degraded shape served when sentence tokenization fails upstream.

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
        return unwrap(self._with_raw_response.sapling_sentiment(body, request_options=request_options))

    def sapling_seo(
        self, body: ApiV1SeoRequest | ApiV1SeoRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1SeoResponse:
        """Analyze a page or article for on-page SEO and generate metadata. Returns stats (words, sentences, paragraphs,
        reading time, Flesch reading ease and grade), per-target-keyword count/density/whether it appears in the first
        100 words, top_terms (the most frequent content words and phrases), and suggestions: title-tag candidates (the
        model aims for <=60 chars; any over a 90-char hard cap are dropped), meta-description candidates (aims for
        120-155 chars; hard cap 220), a URL slug (null if none could be derived) and focus-keyword ideas, written in the
        language of the text. Pass keywords to have them worked into the suggestions. Set suggestions=false for the free
        stats-only analysis (suggestions are the billed part). lang (ISO 639-1, default "en") selects the readability
        formulas; unsupported languages get null readability.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/seo/

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
        return unwrap(self._with_raw_response.sapling_seo(body, request_options=request_options))

    def sapling_similar_terms(
        self,
        body: ApiV1ThesaurusRequest | ApiV1ThesaurusRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ThesaurusResponse:
        """Nearest-neighbor terms and synonyms for a word or short phrase (the query is truncated to 100 characters).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Neighbors as [similarity, term] pairs, plus synonyms.

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
                occurrences to support@sapling.ai. The embeddings service failed transiently; safe to retry after a
                short delay. ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_similar_terms(body, request_options=request_options))

    def sapling_styleguide(
        self,
        body: ApiV1StyleguideRequest4 | ApiV1StyleguideRequest4Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1StyleguideResponse:
        """Check a text for compliance with caller-supplied style rules (house style, brand voice, editorial
        guidelines). Returns violations — each with the verbatim offending passage, its start/end offsets in the
        submitted text (null when the passage cannot be located), the violated rule name, a brief note and a compliant
        rewrite suggestion — plus a top-level compliant boolean. Only the listed rules are enforced; an empty violations
        list means the text complies. The text is checked as submitted (markup included), so offsets always index it
        directly. Provide exactly one of rules (inline) or ruleset (the name of a rule set saved via the API).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/styleguide/ A batch
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
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). A
                named resource in the request does not exist for the authenticated account — e.g. a ``ruleset`` naming a
                saved rule set that was never created, was deleted, or belongs to another account. Correct or create the
                name; retrying unchanged will not help. Request body over 4MB. Note the body uses ``message`` and
                ``result`` keys, not the usual ``msg``. Applies to requests authenticated via the Authorization header;
                a body-key-only request over the limit fails authentication instead (401), because the key cannot be
                read from the oversized body. Rate limited. Wait retry_after seconds (also in the Retry-After header)
                and retry. If retry_after is absent, the request exceeds the bucket capacity and can never succeed
                unchanged. Unexpected server error. Report persistent occurrences to support@sapling.ai. The upstream
                model call failed or returned an unusable result. The response is neither cached nor billed; safe to
                retry after a short delay. Temporarily unable to serve the request (e.g. model servers saturated). Honor
                Retry-After and retry. ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 | RateLimited1 |
                RawError``."""
        return unwrap(self._with_raw_response.sapling_styleguide(body, request_options=request_options))

    def sapling_tone(
        self, body: ApiV1ToneRequest | ApiV1ToneRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ToneResponse:
        """Classify the emotional tone of a text (e.g. friendly, confident, sad, angry). Returns overall and
        per-sentence tone labels with confidence scores.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/tone/ A bare JSON array
            (no per-sentence results) is the degraded shape served when sentence tokenization fails upstream.

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
        return unwrap(self._with_raw_response.sapling_tone(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AnalysisWithRawResponse:
        return self._with_raw_response


class AsyncAnalysis:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAnalysisWithRawResponse(client, server, auth)

    async def sapling_classify(
        self,
        body: ApiV1ClassifyRequest2 | ApiV1ClassifyRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ClassifyResponse:
        """Classify a text into a set of labels you supply — intent, topic, category, routing queue, sentiment buckets,
        anything — without training data. Returns label (the best match, always one of your labels), labels
        (single-label: just the best match; multi-label: every label whose score >= threshold, possibly empty), scores
        (one {label, score} per input label, descending; a distribution in single-label mode, independent 0-1
        applicability in multi-label mode) and a one-sentence rationale. Labels can be plain names or {name,
        description} objects — a short description per label sharpens borderline decisions. Use context to say what the
        texts are (e.g. "support tickets for a billing product"). 2-20 labels.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/classify/ A batch
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
        return unwrap(await self._with_raw_response.sapling_classify(body, request_options=request_options))

    async def sapling_delete_style_ruleset(
        self,
        *,
        name: str | None = None,
        key: str | None = None,
        body: ApiV1StyleguideRulesetsRequest | ApiV1StyleguideRulesetsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1StyleguideRulesetsResponse:
        """Delete a saved rule set by name. The name may be sent as a query parameter or as ``name`` in a JSON body.

        Args:
            name: Rule set name (alternatively in the body).
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted.

        Raises:
            ApiError: Missing or invalid name. Missing or invalid API key or OAuth access token. (An EXPIRED key or
                subscription answers 402, not 401.) The public (client-side) API key cannot manage rule sets; use a
                private key. MCP OAuth access tokens are not accepted by this operation; send an API key. A named
                resource in the request does not exist for the authenticated account — e.g. a ``ruleset`` naming a saved
                rule set that was never created, was deleted, or belongs to another account. Correct or create the name;
                retrying unchanged will not help. Rate limited. Wait retry_after seconds (also in the Retry-After
                header) and retry. If retry_after is absent, the request exceeds the bucket capacity and can never
                succeed unchanged. Unexpected server error. Report persistent occurrences to support@sapling.ai.
                ``error`` is ``Error | RateLimited1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_delete_style_ruleset(
                name=name, key=key, body=body, request_options=request_options
            ),
        )

    async def sapling_extract(
        self,
        body: ApiV1ExtractRequest2 | ApiV1ExtractRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ExtractResponse:
        """Pull structured fields out of unstructured text — invoice numbers, amounts, dates, names, addresses, order
        ids, anything the document actually states — by describing the fields you want. Returns data (a {field: value}
        map, null where the text does not state the field), fields (per-field value, the verbatim evidence span it came
        from, and whether it was found) and missing (the fields the text did not yield). Values are returned in the type
        you declare (string, number, integer, boolean, date as YYYY-MM-DD, or list of strings) and a value that will not
        convert is reported missing rather than returned in the wrong type. This is EXTRACTION, not summarization or
        inference: except for boolean fields, a value must be traceable to a span of the text or it is dropped. Use
        context to say what the document is. 1-20 fields.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/extract/ A batch
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
        return unwrap(await self._with_raw_response.sapling_extract(body, request_options=request_options))

    async def sapling_extract_file(
        self,
        file: AsyncFileInput,
        json_params: AsyncFileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        return_usage: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1FileExtractResponse:
        """Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, up to 30MB) and extract caller-named
        fields from its text exactly like /api/v1/extract. Options ride the jsonParams part. Text past the first 10,000
        characters is not read; the response ``document`` object reports ``truncated``. Billed like /api/v1/extract on
        the characters used. Unbilled (trial and public) keys also answer 429 with Retry-After when their per-minute
        generation budget is spent.

        Args:
            file: The document to upload.
            json_params: JSON object (send it as a file part or form field): {"fields": [...], "context": "...", "key":
                "<API key>", "return_usage": true}. ``fields`` (required) and ``context`` take the same values as on
                /api/v1/extract.
            return_usage_query: Value sent with the request.
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
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
            Same shape as a single /api/v1/extract response, plus ``document``.

        Raises:
            ApiError: Missing/unsupported file, unreadable document, no text ({"error": "<reason>"}), or invalid
                jsonParams/fields ({"msg": "<reason>"}). Missing or invalid API key or OAuth access token. (An EXPIRED
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
                sets Retry-After and a numeric retry_after body field, so honor it before retrying. Unexpected server
                error. Report persistent occurrences to support@sapling.ai. The model call failed transiently; nothing
                was billed. Safe to retry. ``error`` is ``ApiV1FileExtract400Error1 | Error | PaymentRequired1 |
                ApiV1FileExtract413Error1 | ApiV1FileExtract429Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_extract_file(
                file,
                json_params,
                return_usage_query=return_usage_query,
                key=key,
                return_usage=return_usage,
                request_options=request_options,
            ),
        )

    async def sapling_inclusive(
        self,
        body: ApiV1InclusiveRequest2 | ApiV1InclusiveRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1InclusiveResponse:
        """Find non-inclusive or biased wording in a text — gendered defaults, ableist idioms, ageist framing, outdated
        terms for groups, classist or appearance-based language. Returns issues, each with the verbatim passage, its
        start/end offsets in the submitted text (null when the passage cannot be located), a category, a severity (low /
        medium / high), a brief note and a neutral replacement suggestion, plus a top-level inclusive boolean. Wording
        is flagged, not topics: text that discusses or quotes a term to critique it is not an issue. Use categories to
        restrict the check to a subset. The text is checked as submitted (markup included), so offsets always index it
        directly.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/inclusive/ A batch
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
        return unwrap(await self._with_raw_response.sapling_inclusive(body, request_options=request_options))

    async def sapling_list_style_rulesets(
        self, *, return_usage: bool | None = False, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1StyleguideRulesetsResponse1:
        """Rule sets saved for this account (or the key's team), usable by name via the ``ruleset`` option of
        /api/v1/styleguide.

        Args:
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Saved rule sets, ordered by name.

        Raises:
            ApiError: Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not
                401.) The public (client-side) API key cannot manage rule sets; use a private key. MCP OAuth access
                tokens are not accepted by this operation; send an API key. Rate limited. Wait retry_after seconds (also
                in the Retry-After header) and retry. If retry_after is absent, the request exceeds the bucket capacity
                and can never succeed unchanged. Unexpected server error. Report persistent occurrences to
                support@sapling.ai. ``error`` is ``Error | RateLimited1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_list_style_rulesets(
                return_usage=return_usage, request_options=request_options
            ),
        )

    async def sapling_quality(
        self,
        body: ApiV1QualityRequest2 | ApiV1QualityRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1QualityResponse:
        """Score the writing quality of a text from 1 (poor) to 5 (excellent). Returns score: a fluency/grammaticality
        score from a language model. Set sentence_scores=true to also get a per-sentence breakdown (sentences with
        start/end offsets and their own score) to find the weakest sentences. Set rubric=true for an LLM-judged rubric:
        overall score, per-dimension scores (clarity, coherence, correctness, concision), a summary, and concrete issues
        each with the quoted excerpt, offsets, a note, and a suggested rewrite. rubric=true is billed at a higher rate
        than the plain score.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/quality/ A batch
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
        return unwrap(await self._with_raw_response.sapling_quality(body, request_options=request_options))

    async def sapling_readability_statistics(
        self,
        body: ApiV1StatisticsRequest | ApiV1StatisticsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1StatisticsResponse:
        """Compute readability statistics for a text: grade-level readability scores, estimated reading time, and counts
        of characters, words, and sentences.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/statistics/

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
                fails authentication instead (401), because the key cannot be read from the oversized body. Unexpected
                server error. Report persistent occurrences to support@sapling.ai. Temporarily unable to serve the
                request (e.g. model servers saturated). Honor Retry-After and retry. ``error`` is ``Error |
                PaymentRequired1 | PayloadTooLarge1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_readability_statistics(body, request_options=request_options)
        )

    async def sapling_save_style_ruleset(
        self,
        body: ApiV1StyleguideRulesetsRequest1 | ApiV1StyleguideRulesetsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1StyleguideRulesetsResponse2:
        """Upsert a named rule set (names match case-insensitively). An account can hold up to 100 rule sets.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The saved rule set, and whether it was newly created.

        Raises:
            ApiError: Invalid name or rules, or the 100 rule set limit is reached. Missing or invalid API key or OAuth
                access token. (An EXPIRED key or subscription answers 402, not 401.) The public (client-side) API key
                cannot manage rule sets; use a private key. MCP OAuth access tokens are not accepted by this operation;
                send an API key. Request body over 4MB. Note the body uses ``message`` and ``result`` keys, not the
                usual ``msg``. Applies to requests authenticated via the Authorization header; a body-key-only request
                over the limit fails authentication instead (401), because the key cannot be read from the oversized
                body. Rate limited. Wait retry_after seconds (also in the Retry-After header) and retry. If retry_after
                is absent, the request exceeds the bucket capacity and can never succeed unchanged. Unexpected server
                error. Report persistent occurrences to support@sapling.ai. ``error`` is ``Error | PayloadTooLarge1 |
                RateLimited1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_save_style_ruleset(body, request_options=request_options))

    async def sapling_sentiment(
        self,
        body: ApiV1SentimentRequest | ApiV1SentimentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SentimentResponse:
        """Classify the sentiment of a text (positive / neutral / negative). Returns overall and per-sentence sentiment
        with confidence scores.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/sentiment/ A bare JSON
            array (no per-sentence results) is the degraded shape served when sentence tokenization fails upstream.

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
        return unwrap(await self._with_raw_response.sapling_sentiment(body, request_options=request_options))

    async def sapling_seo(
        self, body: ApiV1SeoRequest | ApiV1SeoRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1SeoResponse:
        """Analyze a page or article for on-page SEO and generate metadata. Returns stats (words, sentences, paragraphs,
        reading time, Flesch reading ease and grade), per-target-keyword count/density/whether it appears in the first
        100 words, top_terms (the most frequent content words and phrases), and suggestions: title-tag candidates (the
        model aims for <=60 chars; any over a 90-char hard cap are dropped), meta-description candidates (aims for
        120-155 chars; hard cap 220), a URL slug (null if none could be derived) and focus-keyword ideas, written in the
        language of the text. Pass keywords to have them worked into the suggestions. Set suggestions=false for the free
        stats-only analysis (suggestions are the billed part). lang (ISO 639-1, default "en") selects the readability
        formulas; unsupported languages get null readability.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/seo/

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
        return unwrap(await self._with_raw_response.sapling_seo(body, request_options=request_options))

    async def sapling_similar_terms(
        self,
        body: ApiV1ThesaurusRequest | ApiV1ThesaurusRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ThesaurusResponse:
        """Nearest-neighbor terms and synonyms for a word or short phrase (the query is truncated to 100 characters).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Neighbors as [similarity, term] pairs, plus synonyms.

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
                occurrences to support@sapling.ai. The embeddings service failed transiently; safe to retry after a
                short delay. ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_similar_terms(body, request_options=request_options))

    async def sapling_styleguide(
        self,
        body: ApiV1StyleguideRequest4 | ApiV1StyleguideRequest4Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1StyleguideResponse:
        """Check a text for compliance with caller-supplied style rules (house style, brand voice, editorial
        guidelines). Returns violations — each with the verbatim offending passage, its start/end offsets in the
        submitted text (null when the passage cannot be located), the violated rule name, a brief note and a compliant
        rewrite suggestion — plus a top-level compliant boolean. Only the listed rules are enforced; an empty violations
        list means the text complies. The text is checked as submitted (markup included), so offsets always index it
        directly. Provide exactly one of rules (inline) or ruleset (the name of a rule set saved via the API).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/styleguide/ A batch
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
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). A
                named resource in the request does not exist for the authenticated account — e.g. a ``ruleset`` naming a
                saved rule set that was never created, was deleted, or belongs to another account. Correct or create the
                name; retrying unchanged will not help. Request body over 4MB. Note the body uses ``message`` and
                ``result`` keys, not the usual ``msg``. Applies to requests authenticated via the Authorization header;
                a body-key-only request over the limit fails authentication instead (401), because the key cannot be
                read from the oversized body. Rate limited. Wait retry_after seconds (also in the Retry-After header)
                and retry. If retry_after is absent, the request exceeds the bucket capacity and can never succeed
                unchanged. Unexpected server error. Report persistent occurrences to support@sapling.ai. The upstream
                model call failed or returned an unusable result. The response is neither cached nor billed; safe to
                retry after a short delay. Temporarily unable to serve the request (e.g. model servers saturated). Honor
                Retry-After and retry. ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 | RateLimited1 |
                RawError``."""
        return unwrap(await self._with_raw_response.sapling_styleguide(body, request_options=request_options))

    async def sapling_tone(
        self, body: ApiV1ToneRequest | ApiV1ToneRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ToneResponse:
        """Classify the emotional tone of a text (e.g. friendly, confident, sad, angry). Returns overall and
        per-sentence tone labels with confidence scores.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/tone/ A bare JSON array
            (no per-sentence results) is the degraded shape served when sentence tokenization fails upstream.

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
        return unwrap(await self._with_raw_response.sapling_tone(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAnalysisWithRawResponse:
        return self._with_raw_response


class AnalysisWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def sapling_classify(
        self,
        body: ApiV1ClassifyRequest2 | ApiV1ClassifyRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ClassifyResponse, SaplingClassifyErrorBody]:
        """Classify a text into a set of labels you supply — intent, topic, category, routing queue, sentiment buckets,
        anything — without training data. Returns label (the best match, always one of your labels), labels
        (single-label: just the best match; multi-label: every label whose score >= threshold, possibly empty), scores
        (one {label, score} per input label, descending; a distribution in single-label mode, independent 0-1
        applicability in multi-label mode) and a one-sentence rationale. Labels can be plain names or {name,
        description} objects — a short description per label sharpens borderline decisions. Use context to say what the
        texts are (e.g. "support tickets for a billing product"). 2-20 labels.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/classify"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ClassifyRequest2 | ApiV1ClassifyRequest2Dict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1ClassifyResponse],
            error_mapper=sapling_classify_error_mapper,
            request_options=request_options,
        )

    def sapling_delete_style_ruleset(
        self,
        *,
        name: str | None = None,
        key: str | None = None,
        body: ApiV1StyleguideRulesetsRequest | ApiV1StyleguideRulesetsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1StyleguideRulesetsResponse, SaplingDeleteStyleRulesetErrorBody]:
        """Delete a saved rule set by name. The name may be sent as a query parameter or as ``name`` in a JSON body.

        Args:
            name: Rule set name (alternatively in the body).
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/styleguide/rulesets"),
            query_params=[param[str | None]("name", name), param[str | None]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1StyleguideRulesetsRequest | ApiV1StyleguideRulesetsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1StyleguideRulesetsResponse],
            error_mapper=sapling_delete_style_ruleset_error_mapper,
            request_options=request_options,
        )

    def sapling_extract(
        self,
        body: ApiV1ExtractRequest2 | ApiV1ExtractRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ExtractResponse, SaplingExtractErrorBody]:
        """Pull structured fields out of unstructured text — invoice numbers, amounts, dates, names, addresses, order
        ids, anything the document actually states — by describing the fields you want. Returns data (a {field: value}
        map, null where the text does not state the field), fields (per-field value, the verbatim evidence span it came
        from, and whether it was found) and missing (the fields the text did not yield). Values are returned in the type
        you declare (string, number, integer, boolean, date as YYYY-MM-DD, or list of strings) and a value that will not
        convert is reported missing rather than returned in the wrong type. This is EXTRACTION, not summarization or
        inference: except for boolean fields, a value must be traceable to a span of the text or it is dropped. Use
        context to say what the document is. 1-20 fields.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/extract"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ExtractRequest2 | ApiV1ExtractRequest2Dict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1ExtractResponse],
            error_mapper=sapling_extract_error_mapper,
            request_options=request_options,
        )

    def sapling_extract_file(
        self,
        file: FileInput,
        json_params: FileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        return_usage: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1FileExtractResponse, SaplingExtractFileErrorBody]:
        """Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, up to 30MB) and extract caller-named
        fields from its text exactly like /api/v1/extract. Options ride the jsonParams part. Text past the first 10,000
        characters is not read; the response ``document`` object reports ``truncated``. Billed like /api/v1/extract on
        the characters used. Unbilled (trial and public) keys also answer 429 with Retry-After when their per-minute
        generation budget is spent.

        Args:
            file: The document to upload.
            json_params: JSON object (send it as a file part or form field): {"fields": [...], "context": "...", "key":
                "<API key>", "return_usage": true}. ``fields`` (required) and ``context`` take the same values as on
                /api/v1/extract.
            return_usage_query: Value sent with the request.
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
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
            url_template=self._server.default("/api/v1/file-extract"),
            query_params=[param[bool | None]("return_usage", return_usage_query), param[str | None]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                file_part("file", file),
                file_part("jsonParams", json_params),
                param[bool | None]("return_usage", return_usage),
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1FileExtractResponse],
            error_mapper=sapling_extract_file_error_mapper,
            request_options=request_options,
        )

    def sapling_inclusive(
        self,
        body: ApiV1InclusiveRequest2 | ApiV1InclusiveRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1InclusiveResponse, SaplingInclusiveErrorBody]:
        """Find non-inclusive or biased wording in a text — gendered defaults, ableist idioms, ageist framing, outdated
        terms for groups, classist or appearance-based language. Returns issues, each with the verbatim passage, its
        start/end offsets in the submitted text (null when the passage cannot be located), a category, a severity (low /
        medium / high), a brief note and a neutral replacement suggestion, plus a top-level inclusive boolean. Wording
        is flagged, not topics: text that discusses or quotes a term to critique it is not an issue. Use categories to
        restrict the check to a subset. The text is checked as submitted (markup included), so offsets always index it
        directly.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/inclusive"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1InclusiveRequest2 | ApiV1InclusiveRequest2Dict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1InclusiveResponse],
            error_mapper=sapling_inclusive_error_mapper,
            request_options=request_options,
        )

    def sapling_list_style_rulesets(
        self, *, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1StyleguideRulesetsResponse1, SaplingListStyleRulesetsErrorBody]:
        """Rule sets saved for this account (or the key's team), usable by name via the ``ruleset`` option of
        /api/v1/styleguide.

        Args:
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/styleguide/rulesets"),
            query_params=[param[bool | None]("return_usage", return_usage)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.api_key_query),
            decoder=json_decoder[ApiV1StyleguideRulesetsResponse1],
            error_mapper=sapling_list_style_rulesets_error_mapper,
            request_options=request_options,
        )

    def sapling_quality(
        self,
        body: ApiV1QualityRequest2 | ApiV1QualityRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1QualityResponse, SaplingQualityErrorBody]:
        """Score the writing quality of a text from 1 (poor) to 5 (excellent). Returns score: a fluency/grammaticality
        score from a language model. Set sentence_scores=true to also get a per-sentence breakdown (sentences with
        start/end offsets and their own score) to find the weakest sentences. Set rubric=true for an LLM-judged rubric:
        overall score, per-dimension scores (clarity, coherence, correctness, concision), a summary, and concrete issues
        each with the quoted excerpt, offsets, a note, and a suggested rewrite. rubric=true is billed at a higher rate
        than the plain score.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/quality"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1QualityRequest2 | ApiV1QualityRequest2Dict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1QualityResponse],
            error_mapper=sapling_quality_error_mapper,
            request_options=request_options,
        )

    def sapling_readability_statistics(
        self,
        body: ApiV1StatisticsRequest | ApiV1StatisticsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1StatisticsResponse, SaplingReadabilityStatisticsErrorBody]:
        """Compute readability statistics for a text: grade-level readability scores, estimated reading time, and counts
        of characters, words, and sentences.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/statistics"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1StatisticsRequest | ApiV1StatisticsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1StatisticsResponse],
            error_mapper=sapling_readability_statistics_error_mapper,
            request_options=request_options,
        )

    def sapling_save_style_ruleset(
        self,
        body: ApiV1StyleguideRulesetsRequest1 | ApiV1StyleguideRulesetsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1StyleguideRulesetsResponse2, SaplingSaveStyleRulesetErrorBody]:
        """Upsert a named rule set (names match case-insensitively). An account can hold up to 100 rule sets.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/styleguide/rulesets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1StyleguideRulesetsRequest1 | ApiV1StyleguideRulesetsRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1StyleguideRulesetsResponse2],
            error_mapper=sapling_save_style_ruleset_error_mapper,
            request_options=request_options,
        )

    def sapling_sentiment(
        self,
        body: ApiV1SentimentRequest | ApiV1SentimentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SentimentResponse, SaplingSentimentErrorBody]:
        """Classify the sentiment of a text (positive / neutral / negative). Returns overall and per-sentence sentiment
        with confidence scores.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/sentiment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SentimentRequest | ApiV1SentimentRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1SentimentResponse],
            error_mapper=sapling_sentiment_error_mapper,
            request_options=request_options,
        )

    def sapling_seo(
        self, body: ApiV1SeoRequest | ApiV1SeoRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1SeoResponse, SaplingSeoErrorBody]:
        """Analyze a page or article for on-page SEO and generate metadata. Returns stats (words, sentences, paragraphs,
        reading time, Flesch reading ease and grade), per-target-keyword count/density/whether it appears in the first
        100 words, top_terms (the most frequent content words and phrases), and suggestions: title-tag candidates (the
        model aims for <=60 chars; any over a 90-char hard cap are dropped), meta-description candidates (aims for
        120-155 chars; hard cap 220), a URL slug (null if none could be derived) and focus-keyword ideas, written in the
        language of the text. Pass keywords to have them worked into the suggestions. Set suggestions=false for the free
        stats-only analysis (suggestions are the billed part). lang (ISO 639-1, default "en") selects the readability
        formulas; unsupported languages get null readability.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/seo"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SeoRequest | ApiV1SeoRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1SeoResponse],
            error_mapper=sapling_seo_error_mapper,
            request_options=request_options,
        )

    def sapling_similar_terms(
        self,
        body: ApiV1ThesaurusRequest | ApiV1ThesaurusRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ThesaurusResponse, SaplingSimilarTermsErrorBody]:
        """Nearest-neighbor terms and synonyms for a word or short phrase (the query is truncated to 100 characters).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/thesaurus"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ThesaurusRequest | ApiV1ThesaurusRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ThesaurusResponse],
            error_mapper=sapling_similar_terms_error_mapper,
            request_options=request_options,
        )

    def sapling_styleguide(
        self,
        body: ApiV1StyleguideRequest4 | ApiV1StyleguideRequest4Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1StyleguideResponse, SaplingStyleguideErrorBody]:
        """Check a text for compliance with caller-supplied style rules (house style, brand voice, editorial
        guidelines). Returns violations — each with the verbatim offending passage, its start/end offsets in the
        submitted text (null when the passage cannot be located), the violated rule name, a brief note and a compliant
        rewrite suggestion — plus a top-level compliant boolean. Only the listed rules are enforced; an empty violations
        list means the text complies. The text is checked as submitted (markup included), so offsets always index it
        directly. Provide exactly one of rules (inline) or ruleset (the name of a rule set saved via the API).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/styleguide"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1StyleguideRequest4 | ApiV1StyleguideRequest4Dict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1StyleguideResponse],
            error_mapper=sapling_styleguide_error_mapper,
            request_options=request_options,
        )

    def sapling_tone(
        self, body: ApiV1ToneRequest | ApiV1ToneRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ToneResponse, SaplingToneErrorBody]:
        """Classify the emotional tone of a text (e.g. friendly, confident, sad, angry). Returns overall and
        per-sentence tone labels with confidence scores.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tone"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ToneRequest | ApiV1ToneRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1ToneResponse],
            error_mapper=sapling_tone_error_mapper,
            request_options=request_options,
        )


class AsyncAnalysisWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def sapling_classify(
        self,
        body: ApiV1ClassifyRequest2 | ApiV1ClassifyRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ClassifyResponse, SaplingClassifyErrorBody]:
        """Classify a text into a set of labels you supply — intent, topic, category, routing queue, sentiment buckets,
        anything — without training data. Returns label (the best match, always one of your labels), labels
        (single-label: just the best match; multi-label: every label whose score >= threshold, possibly empty), scores
        (one {label, score} per input label, descending; a distribution in single-label mode, independent 0-1
        applicability in multi-label mode) and a one-sentence rationale. Labels can be plain names or {name,
        description} objects — a short description per label sharpens borderline decisions. Use context to say what the
        texts are (e.g. "support tickets for a billing product"). 2-20 labels.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/classify"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ClassifyRequest2 | ApiV1ClassifyRequest2Dict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1ClassifyResponse],
            error_mapper=sapling_classify_error_mapper,
            request_options=request_options,
        )

    async def sapling_delete_style_ruleset(
        self,
        *,
        name: str | None = None,
        key: str | None = None,
        body: ApiV1StyleguideRulesetsRequest | ApiV1StyleguideRulesetsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1StyleguideRulesetsResponse, SaplingDeleteStyleRulesetErrorBody]:
        """Delete a saved rule set by name. The name may be sent as a query parameter or as ``name`` in a JSON body.

        Args:
            name: Rule set name (alternatively in the body).
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/styleguide/rulesets"),
            query_params=[param[str | None]("name", name), param[str | None]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1StyleguideRulesetsRequest | ApiV1StyleguideRulesetsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1StyleguideRulesetsResponse],
            error_mapper=sapling_delete_style_ruleset_error_mapper,
            request_options=request_options,
        )

    async def sapling_extract(
        self,
        body: ApiV1ExtractRequest2 | ApiV1ExtractRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ExtractResponse, SaplingExtractErrorBody]:
        """Pull structured fields out of unstructured text — invoice numbers, amounts, dates, names, addresses, order
        ids, anything the document actually states — by describing the fields you want. Returns data (a {field: value}
        map, null where the text does not state the field), fields (per-field value, the verbatim evidence span it came
        from, and whether it was found) and missing (the fields the text did not yield). Values are returned in the type
        you declare (string, number, integer, boolean, date as YYYY-MM-DD, or list of strings) and a value that will not
        convert is reported missing rather than returned in the wrong type. This is EXTRACTION, not summarization or
        inference: except for boolean fields, a value must be traceable to a span of the text or it is dropped. Use
        context to say what the document is. 1-20 fields.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/extract"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ExtractRequest2 | ApiV1ExtractRequest2Dict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1ExtractResponse],
            error_mapper=sapling_extract_error_mapper,
            request_options=request_options,
        )

    async def sapling_extract_file(
        self,
        file: AsyncFileInput,
        json_params: AsyncFileInput,
        *,
        return_usage_query: bool | None = False,
        key: str | None = None,
        return_usage: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1FileExtractResponse, SaplingExtractFileErrorBody]:
        """Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, up to 30MB) and extract caller-named
        fields from its text exactly like /api/v1/extract. Options ride the jsonParams part. Text past the first 10,000
        characters is not read; the response ``document`` object reports ``truncated``. Billed like /api/v1/extract on
        the characters used. Unbilled (trial and public) keys also answer 429 with Retry-After when their per-minute
        generation budget is spent.

        Args:
            file: The document to upload.
            json_params: JSON object (send it as a file part or form field): {"fields": [...], "context": "...", "key":
                "<API key>", "return_usage": true}. ``fields`` (required) and ``context`` take the same values as on
                /api/v1/extract.
            return_usage_query: Value sent with the request.
            key: Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.
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
            url_template=self._server.default("/api/v1/file-extract"),
            query_params=[param[bool | None]("return_usage", return_usage_query), param[str | None]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                file_part("file", file),
                file_part("jsonParams", json_params),
                param[bool | None]("return_usage", return_usage),
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1FileExtractResponse],
            error_mapper=sapling_extract_file_error_mapper,
            request_options=request_options,
        )

    async def sapling_inclusive(
        self,
        body: ApiV1InclusiveRequest2 | ApiV1InclusiveRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1InclusiveResponse, SaplingInclusiveErrorBody]:
        """Find non-inclusive or biased wording in a text — gendered defaults, ableist idioms, ageist framing, outdated
        terms for groups, classist or appearance-based language. Returns issues, each with the verbatim passage, its
        start/end offsets in the submitted text (null when the passage cannot be located), a category, a severity (low /
        medium / high), a brief note and a neutral replacement suggestion, plus a top-level inclusive boolean. Wording
        is flagged, not topics: text that discusses or quotes a term to critique it is not an issue. Use categories to
        restrict the check to a subset. The text is checked as submitted (markup included), so offsets always index it
        directly.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/inclusive"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1InclusiveRequest2 | ApiV1InclusiveRequest2Dict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1InclusiveResponse],
            error_mapper=sapling_inclusive_error_mapper,
            request_options=request_options,
        )

    async def sapling_list_style_rulesets(
        self, *, return_usage: bool | None = False, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1StyleguideRulesetsResponse1, SaplingListStyleRulesetsErrorBody]:
        """Rule sets saved for this account (or the key's team), usable by name via the ``ruleset`` option of
        /api/v1/styleguide.

        Args:
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/styleguide/rulesets"),
            query_params=[param[bool | None]("return_usage", return_usage)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.api_key_query),
            decoder=async_json_decoder[ApiV1StyleguideRulesetsResponse1],
            error_mapper=sapling_list_style_rulesets_error_mapper,
            request_options=request_options,
        )

    async def sapling_quality(
        self,
        body: ApiV1QualityRequest2 | ApiV1QualityRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1QualityResponse, SaplingQualityErrorBody]:
        """Score the writing quality of a text from 1 (poor) to 5 (excellent). Returns score: a fluency/grammaticality
        score from a language model. Set sentence_scores=true to also get a per-sentence breakdown (sentences with
        start/end offsets and their own score) to find the weakest sentences. Set rubric=true for an LLM-judged rubric:
        overall score, per-dimension scores (clarity, coherence, correctness, concision), a summary, and concrete issues
        each with the quoted excerpt, offsets, a note, and a suggested rewrite. rubric=true is billed at a higher rate
        than the plain score.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/quality"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1QualityRequest2 | ApiV1QualityRequest2Dict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1QualityResponse],
            error_mapper=sapling_quality_error_mapper,
            request_options=request_options,
        )

    async def sapling_readability_statistics(
        self,
        body: ApiV1StatisticsRequest | ApiV1StatisticsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1StatisticsResponse, SaplingReadabilityStatisticsErrorBody]:
        """Compute readability statistics for a text: grade-level readability scores, estimated reading time, and counts
        of characters, words, and sentences.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/statistics"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1StatisticsRequest | ApiV1StatisticsRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1StatisticsResponse],
            error_mapper=sapling_readability_statistics_error_mapper,
            request_options=request_options,
        )

    async def sapling_save_style_ruleset(
        self,
        body: ApiV1StyleguideRulesetsRequest1 | ApiV1StyleguideRulesetsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1StyleguideRulesetsResponse2, SaplingSaveStyleRulesetErrorBody]:
        """Upsert a named rule set (names match case-insensitively). An account can hold up to 100 rule sets.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/styleguide/rulesets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1StyleguideRulesetsRequest1 | ApiV1StyleguideRulesetsRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1StyleguideRulesetsResponse2],
            error_mapper=sapling_save_style_ruleset_error_mapper,
            request_options=request_options,
        )

    async def sapling_sentiment(
        self,
        body: ApiV1SentimentRequest | ApiV1SentimentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SentimentResponse, SaplingSentimentErrorBody]:
        """Classify the sentiment of a text (positive / neutral / negative). Returns overall and per-sentence sentiment
        with confidence scores.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/sentiment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SentimentRequest | ApiV1SentimentRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1SentimentResponse],
            error_mapper=sapling_sentiment_error_mapper,
            request_options=request_options,
        )

    async def sapling_seo(
        self, body: ApiV1SeoRequest | ApiV1SeoRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1SeoResponse, SaplingSeoErrorBody]:
        """Analyze a page or article for on-page SEO and generate metadata. Returns stats (words, sentences, paragraphs,
        reading time, Flesch reading ease and grade), per-target-keyword count/density/whether it appears in the first
        100 words, top_terms (the most frequent content words and phrases), and suggestions: title-tag candidates (the
        model aims for <=60 chars; any over a 90-char hard cap are dropped), meta-description candidates (aims for
        120-155 chars; hard cap 220), a URL slug (null if none could be derived) and focus-keyword ideas, written in the
        language of the text. Pass keywords to have them worked into the suggestions. Set suggestions=false for the free
        stats-only analysis (suggestions are the billed part). lang (ISO 639-1, default "en") selects the readability
        formulas; unsupported languages get null readability.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/seo"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SeoRequest | ApiV1SeoRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1SeoResponse],
            error_mapper=sapling_seo_error_mapper,
            request_options=request_options,
        )

    async def sapling_similar_terms(
        self,
        body: ApiV1ThesaurusRequest | ApiV1ThesaurusRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ThesaurusResponse, SaplingSimilarTermsErrorBody]:
        """Nearest-neighbor terms and synonyms for a word or short phrase (the query is truncated to 100 characters).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/thesaurus"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ThesaurusRequest | ApiV1ThesaurusRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ThesaurusResponse],
            error_mapper=sapling_similar_terms_error_mapper,
            request_options=request_options,
        )

    async def sapling_styleguide(
        self,
        body: ApiV1StyleguideRequest4 | ApiV1StyleguideRequest4Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1StyleguideResponse, SaplingStyleguideErrorBody]:
        """Check a text for compliance with caller-supplied style rules (house style, brand voice, editorial
        guidelines). Returns violations — each with the verbatim offending passage, its start/end offsets in the
        submitted text (null when the passage cannot be located), the violated rule name, a brief note and a compliant
        rewrite suggestion — plus a top-level compliant boolean. Only the listed rules are enforced; an empty violations
        list means the text complies. The text is checked as submitted (markup included), so offsets always index it
        directly. Provide exactly one of rules (inline) or ruleset (the name of a rule set saved via the API).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/styleguide"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1StyleguideRequest4 | ApiV1StyleguideRequest4Dict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1StyleguideResponse],
            error_mapper=sapling_styleguide_error_mapper,
            request_options=request_options,
        )

    async def sapling_tone(
        self, body: ApiV1ToneRequest | ApiV1ToneRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ToneResponse, SaplingToneErrorBody]:
        """Classify the emotional tone of a text (e.g. friendly, confident, sad, angry). Returns overall and
        per-sentence tone labels with confidence scores.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tone"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ToneRequest | ApiV1ToneRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1ToneResponse],
            error_mapper=sapling_tone_error_mapper,
            request_options=request_options,
        )
