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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.sapling_accept_edit_error import SaplingAcceptEditErrorBody, sapling_accept_edit_error_mapper
from ..errors.sapling_add_custom_filter_error import (
    SaplingAddCustomFilterErrorBody,
    sapling_add_custom_filter_error_mapper,
)
from ..errors.sapling_add_custom_mapping_error import (
    SaplingAddCustomMappingErrorBody,
    sapling_add_custom_mapping_error_mapper,
)
from ..errors.sapling_add_dictionary_entry_error import (
    SaplingAddDictionaryEntryErrorBody,
    sapling_add_dictionary_entry_error_mapper,
)
from ..errors.sapling_delete_custom_filter_error import (
    SaplingDeleteCustomFilterErrorBody,
    sapling_delete_custom_filter_error_mapper,
)
from ..errors.sapling_delete_custom_mapping_error import (
    SaplingDeleteCustomMappingErrorBody,
    sapling_delete_custom_mapping_error_mapper,
)
from ..errors.sapling_delete_dictionary_entry_error import (
    SaplingDeleteDictionaryEntryErrorBody,
    sapling_delete_dictionary_entry_error_mapper,
)
from ..errors.sapling_grammar_check_error import SaplingGrammarCheckErrorBody, sapling_grammar_check_error_mapper
from ..errors.sapling_list_custom_filters_error import (
    SaplingListCustomFiltersErrorBody,
    sapling_list_custom_filters_error_mapper,
)
from ..errors.sapling_list_custom_mappings_error import (
    SaplingListCustomMappingsErrorBody,
    sapling_list_custom_mappings_error_mapper,
)
from ..errors.sapling_list_dictionary_error import SaplingListDictionaryErrorBody, sapling_list_dictionary_error_mapper
from ..errors.sapling_reject_edit_error import SaplingRejectEditErrorBody, sapling_reject_edit_error_mapper
from ..errors.sapling_spellcheck_error import SaplingSpellcheckErrorBody, sapling_spellcheck_error_mapper
from ..models.api_v1_custom_filter_request import ApiV1CustomFilterRequest, ApiV1CustomFilterRequestDict
from ..models.api_v1_custom_filter_response import ApiV1CustomFilterResponse
from ..models.api_v1_custom_filter_response1 import ApiV1CustomFilterResponse1
from ..models.api_v1_custom_mapping_request import ApiV1CustomMappingRequest, ApiV1CustomMappingRequestDict
from ..models.api_v1_custom_mapping_response import ApiV1CustomMappingResponse
from ..models.api_v1_custom_mapping_response1 import ApiV1CustomMappingResponse1
from ..models.api_v1_dictionary_request import ApiV1DictionaryRequest, ApiV1DictionaryRequestDict
from ..models.api_v1_dictionary_response import ApiV1DictionaryResponse
from ..models.api_v1_dictionary_response1 import ApiV1DictionaryResponse1
from ..models.api_v1_edits_accept_request import ApiV1EditsAcceptRequest, ApiV1EditsAcceptRequestDict
from ..models.api_v1_edits_accept_response import ApiV1EditsAcceptResponse
from ..models.api_v1_edits_reject_request import ApiV1EditsRejectRequest, ApiV1EditsRejectRequestDict
from ..models.api_v1_edits_reject_response import ApiV1EditsRejectResponse
from ..models.api_v1_edits_request import ApiV1EditsRequest, ApiV1EditsRequestDict
from ..models.api_v1_edits_response import ApiV1EditsResponse
from ..models.api_v1_spellcheck_request import ApiV1SpellcheckRequest, ApiV1SpellcheckRequestDict
from ..models.api_v1_spellcheck_response import ApiV1SpellcheckResponse
from ..server.server import Server


class Proofreading:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProofreadingWithRawResponse(client, server, auth)

    def sapling_accept_edit(
        self,
        edit_hash: UUID,
        body: ApiV1EditsAcceptRequest | ApiV1EditsAcceptRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1EditsAcceptResponse:
        """Report that the user accepted a suggestion returned by /api/v1/edits or /api/v1/spellcheck. Feedback improves
        the suggestions shown to that user. The body must be a non-empty JSON object; include ``user_id`` or the
        feedback is not recorded.

        Args:
            edit_hash: The edit's ``id`` from /edits.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Acknowledged.

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
                ``ApiV1EditsAcceptResponse11 | Error | PaymentRequired1 | PayloadTooLarge1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_accept_edit(edit_hash, body, request_options=request_options))

    def sapling_add_custom_filter(
        self,
        body: ApiV1CustomFilterRequest | ApiV1CustomFilterRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CustomFilterResponse1:
        """Suppress suggestions that change ``inp`` into ``out``. Note the request keys are ``inp``/``out`` while
        responses use ``input``/``output``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created filter.

        Raises:
            ApiError: Invalid request: both inp and out blank, inp equal to out, duplicate rule, more than two digits in
                inp, or a rule that must be marked case sensitive. Missing or invalid API key or OAuth access token. (An
                EXPIRED key or subscription answers 402, not 401.) Payment required. Two distinct cases share this
                status. (1) A PERMANENT block — an expired API key or subscription, or exhausted quota/prepaid credits:
                renew or top up at https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its
                ``Retry-After`` is a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that
                hit its daily character cap: this clears on its own when the cap resets at the next UTC midnight, its
                ``Retry-After`` states that actual reset, and the body carries a matching numeric ``retry_after`` field
                (whose presence also distinguishes the two cases). MCP OAuth access tokens are not accepted by this
                operation; send an API key. Request body over 4MB. Note the body uses ``message`` and ``result`` keys,
                not the usual ``msg``. Applies to requests authenticated via the Authorization header; a body-key-only
                request over the limit fails authentication instead (401), because the key cannot be read from the
                oversized body. Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error``
                is ``Error | PaymentRequired1 | PayloadTooLarge1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_add_custom_filter(body, request_options=request_options))

    def sapling_add_custom_mapping(
        self,
        body: ApiV1CustomMappingRequest | ApiV1CustomMappingRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CustomMappingResponse1:
        """Suggest ``mapping`` whenever ``entry`` appears in checked text.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created mapping.

        Raises:
            ApiError: Invalid request, duplicate rule, entry equal to mapping, an entry with more than two digits, or a
                rule that must be marked case sensitive. Missing or invalid API key or OAuth access token. (An EXPIRED
                key or subscription answers 402, not 401.) Payment required. Two distinct cases share this status. (1) A
                PERMANENT block — an expired API key or subscription, or exhausted quota/prepaid credits: renew or top
                up at https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its
                ``Retry-After`` is a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that
                hit its daily character cap: this clears on its own when the cap resets at the next UTC midnight, its
                ``Retry-After`` states that actual reset, and the body carries a matching numeric ``retry_after`` field
                (whose presence also distinguishes the two cases). MCP OAuth access tokens are not accepted by this
                operation; send an API key. Request body over 4MB. Note the body uses ``message`` and ``result`` keys,
                not the usual ``msg``. Applies to requests authenticated via the Authorization header; a body-key-only
                request over the limit fails authentication instead (401), because the key cannot be read from the
                oversized body. Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error``
                is ``Error | PaymentRequired1 | PayloadTooLarge1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_add_custom_mapping(body, request_options=request_options))

    def sapling_add_dictionary_entry(
        self,
        body: ApiV1DictionaryRequest | ApiV1DictionaryRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1DictionaryResponse1:
        """Add a word the grammar and spelling checkers should accept.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created entry.

        Raises:
            ApiError: Invalid request, duplicate entry ("Entry already exists."), or an entry with more than two digits.
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
                because the key cannot be read from the oversized body. Unexpected server error. Report persistent
                occurrences to support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 |
                RawError``."""
        return unwrap(self._with_raw_response.sapling_add_dictionary_entry(body, request_options=request_options))

    def sapling_delete_custom_filter(
        self, filter_id: UUID, *, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Remove a filter by the ``id`` returned when listing or adding it.

        Args:
            filter_id: Custom filter id.
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted. Empty body.

        Raises:
            ApiError: The id is malformed, or no entry with this id belongs to the authenticated account (this endpoint
                answers 400, not 404). Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription
                answers 402, not 401.) Payment required. Two distinct cases share this status. (1) A PERMANENT block —
                an expired API key or subscription, or exhausted quota/prepaid credits: renew or top up at
                https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its ``Retry-After`` is
                a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that hit its daily
                character cap: this clears on its own when the cap resets at the next UTC midnight, its ``Retry-After``
                states that actual reset, and the body carries a matching numeric ``retry_after`` field (whose presence
                also distinguishes the two cases). MCP OAuth access tokens are not accepted by this operation; send an
                API key. Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error`` is
                ``Error | PaymentRequired1 | RawError``."""
        return unwrap(
            self._with_raw_response.sapling_delete_custom_filter(
                filter_id, return_usage=return_usage, request_options=request_options
            ),
        )

    def sapling_delete_custom_mapping(
        self,
        mapping_id: UUID,
        *,
        return_usage: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Remove a mapping by the ``id`` returned when listing or adding it.

        Args:
            mapping_id: Custom mapping id.
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted. Empty body.

        Raises:
            ApiError: The id is malformed, or no entry with this id belongs to the authenticated account (this endpoint
                answers 400, not 404). Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription
                answers 402, not 401.) Payment required. Two distinct cases share this status. (1) A PERMANENT block —
                an expired API key or subscription, or exhausted quota/prepaid credits: renew or top up at
                https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its ``Retry-After`` is
                a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that hit its daily
                character cap: this clears on its own when the cap resets at the next UTC midnight, its ``Retry-After``
                states that actual reset, and the body carries a matching numeric ``retry_after`` field (whose presence
                also distinguishes the two cases). MCP OAuth access tokens are not accepted by this operation; send an
                API key. Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error`` is
                ``Error | PaymentRequired1 | RawError``."""
        return unwrap(
            self._with_raw_response.sapling_delete_custom_mapping(
                mapping_id, return_usage=return_usage, request_options=request_options
            ),
        )

    def sapling_delete_dictionary_entry(
        self, entry_id: UUID, *, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Remove an entry by the ``id`` returned when listing or adding it.

        Args:
            entry_id: Dictionary entry id.
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted. Empty body.

        Raises:
            ApiError: The id is malformed, or no entry with this id belongs to the authenticated account (this endpoint
                answers 400, not 404). Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription
                answers 402, not 401.) Payment required. Two distinct cases share this status. (1) A PERMANENT block —
                an expired API key or subscription, or exhausted quota/prepaid credits: renew or top up at
                https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its ``Retry-After`` is
                a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that hit its daily
                character cap: this clears on its own when the cap resets at the next UTC midnight, its ``Retry-After``
                states that actual reset, and the body carries a matching numeric ``retry_after`` field (whose presence
                also distinguishes the two cases). MCP OAuth access tokens are not accepted by this operation; send an
                API key. Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error`` is
                ``Error | PaymentRequired1 | RawError``."""
        return unwrap(
            self._with_raw_response.sapling_delete_dictionary_entry(
                entry_id, return_usage=return_usage, request_options=request_options
            ),
        )

    def sapling_grammar_check(
        self, body: ApiV1EditsRequest | ApiV1EditsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1EditsResponse:
        """Check text for grammar, spelling, and style issues. Returns a list of suggested edits, each with the
        sentence, character span (start/end), replacement text, and an error type. Set auto_apply=true to also receive
        applied_text: the input with all suggested edits already applied (useful to return a corrected document in one
        call). Set include_error_categories=false to skip error classification and get only the corrections and offsets
        back (faster and lighter when you only need to apply fixes). Supports many languages via the lang parameter. If
        the result carries a degraded object it is partial: some sentences may be missing some or all of their
        corrections (the edits returned are still valid); call again for a complete result.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/edits-overview/ With
            noformat=true (the SDK response shape) the body is a bare array of edit objects instead. A partial result
            (some corrections may be missing) adds a ``degraded`` object; retry for a complete result.

        Raises:
            ApiError: Invalid request, as for the other endpoints — but this operation also answers a
                sentence-tokenization outage with an empty JSON array body and status 400. That array case is a
                TRANSIENT upstream failure, not a caller error, and is safe to retry after a short delay. Treat the
                status code as authoritative and tolerate both body shapes. Missing or invalid API key or OAuth access
                token. (An EXPIRED key or subscription answers 402, not 401.) Payment required. Two distinct cases share
                this status. (1) A PERMANENT block — an expired API key or subscription, or exhausted quota/prepaid
                credits: renew or top up at https://sapling.ai/api_settings, as re-authenticating or retrying will not
                help; its ``Retry-After`` is a conservative backoff hint. (2) A TEMPORARY free-trial block — a
                trial-only key that hit its daily character cap: this clears on its own when the cap resets at the next
                UTC midnight, its ``Retry-After`` states that actual reset, and the body carries a matching numeric
                ``retry_after`` field (whose presence also distinguishes the two cases). The team_id option names a team
                that does not exist or that the API key's user is not a member of. Request body over 4MB. Note the body
                uses ``message`` and ``result`` keys, not the usual ``msg``. Applies to requests authenticated via the
                Authorization header; a body-key-only request over the limit fails authentication instead (401), because
                the key cannot be read from the oversized body. Rate limited. Wait retry_after seconds (also in the
                Retry-After header) and retry. If retry_after is absent, the request exceeds the bucket capacity and can
                never succeed unchanged. Unexpected server error. Report persistent occurrences to support@sapling.ai.
                Temporarily unable to serve the request (e.g. model servers saturated). Honor Retry-After and retry.
                ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 | RateLimited1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_grammar_check(body, request_options=request_options))

    def sapling_list_custom_filters(
        self, *, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1CustomFilterResponse:
        """Rules that suppress a specific suggestion (input -> output) from /api/v1/edits.

        Args:
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Custom filters.

        Raises:
            ApiError: Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not
                401.) Payment required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key
                or subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings,
                as re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2)
                A TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). MCP
                OAuth access tokens are not accepted by this operation; send an API key. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | RawError``."""
        return unwrap(
            self._with_raw_response.sapling_list_custom_filters(
                return_usage=return_usage, request_options=request_options
            ),
        )

    def sapling_list_custom_mappings(
        self, *, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1CustomMappingResponse:
        """Custom replacement rules (entry -> mapping) applied as suggestions by /api/v1/edits.

        Args:
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Custom mappings.

        Raises:
            ApiError: Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not
                401.) Payment required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key
                or subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings,
                as re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2)
                A TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). MCP
                OAuth access tokens are not accepted by this operation; send an API key. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | RawError``."""
        return unwrap(
            self._with_raw_response.sapling_list_custom_mappings(
                return_usage=return_usage, request_options=request_options
            ),
        )

    def sapling_list_dictionary(
        self, *, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None
    ) -> list[ApiV1DictionaryResponse]:
        """Words the grammar and spelling checkers accept as correct for this account. Returns a bare JSON array sorted
        by entry.

        Args:
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Dictionary entries.

        Raises:
            ApiError: Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not
                401.) Payment required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key
                or subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings,
                as re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2)
                A TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). MCP
                OAuth access tokens are not accepted by this operation; send an API key. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | RawError``."""
        return unwrap(
            self._with_raw_response.sapling_list_dictionary(return_usage=return_usage, request_options=request_options)
        )

    def sapling_reject_edit(
        self,
        edit_hash: UUID,
        body: ApiV1EditsRejectRequest | ApiV1EditsRejectRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1EditsRejectResponse:
        """Report that the user rejected a suggestion returned by /api/v1/edits or /api/v1/spellcheck; similar
        suggestions are then suppressed for that user. The body must be a non-empty JSON object; include ``user_id`` or
        the feedback is not recorded.

        Args:
            edit_hash: The edit's ``id`` from /edits.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Acknowledged.

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
                ``ApiV1EditsRejectResponse11 | Error | PaymentRequired1 | PayloadTooLarge1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_reject_edit(edit_hash, body, request_options=request_options))

    def sapling_spellcheck(
        self,
        body: ApiV1SpellcheckRequest | ApiV1SpellcheckRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SpellcheckResponse:
        """Check text for spelling errors only (no grammar or style suggestions). Returns edits in the same format as
        sapling_grammar_check. Faster and cheaper than a full grammar check when only misspellings matter. A result
        carrying a degraded object is partial; call again for a complete result.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/spellcheck/ With
            noformat=true (the SDK response shape) the body is a bare array of edit objects instead. A partial result
            (some corrections may be missing) adds a ``degraded`` object; retry for a complete result.

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check such as
                a size limit or empty text). Validator rejections prefix ``msg`` with "400 Bad Request:". Missing or
                invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.) Payment
                required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). The
                team_id option names a team that does not exist or that the API key's user is not a member of. Request
                body over 4MB. Note the body uses ``message`` and ``result`` keys, not the usual ``msg``. Applies to
                requests authenticated via the Authorization header; a body-key-only request over the limit fails
                authentication instead (401), because the key cannot be read from the oversized body. Rate limited. Wait
                retry_after seconds (also in the Retry-After header) and retry. If retry_after is absent, the request
                exceeds the bucket capacity and can never succeed unchanged. Unexpected server error. Report persistent
                occurrences to support@sapling.ai. Temporarily unable to serve the request (e.g. model servers
                saturated). Honor Retry-After and retry. ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 |
                RateLimited1 | RawError``."""
        return unwrap(self._with_raw_response.sapling_spellcheck(body, request_options=request_options))

    @property
    def with_raw_response(self) -> ProofreadingWithRawResponse:
        return self._with_raw_response


class AsyncProofreading:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProofreadingWithRawResponse(client, server, auth)

    async def sapling_accept_edit(
        self,
        edit_hash: UUID,
        body: ApiV1EditsAcceptRequest | ApiV1EditsAcceptRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1EditsAcceptResponse:
        """Report that the user accepted a suggestion returned by /api/v1/edits or /api/v1/spellcheck. Feedback improves
        the suggestions shown to that user. The body must be a non-empty JSON object; include ``user_id`` or the
        feedback is not recorded.

        Args:
            edit_hash: The edit's ``id`` from /edits.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Acknowledged.

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
                ``ApiV1EditsAcceptResponse11 | Error | PaymentRequired1 | PayloadTooLarge1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_accept_edit(edit_hash, body, request_options=request_options)
        )

    async def sapling_add_custom_filter(
        self,
        body: ApiV1CustomFilterRequest | ApiV1CustomFilterRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CustomFilterResponse1:
        """Suppress suggestions that change ``inp`` into ``out``. Note the request keys are ``inp``/``out`` while
        responses use ``input``/``output``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created filter.

        Raises:
            ApiError: Invalid request: both inp and out blank, inp equal to out, duplicate rule, more than two digits in
                inp, or a rule that must be marked case sensitive. Missing or invalid API key or OAuth access token. (An
                EXPIRED key or subscription answers 402, not 401.) Payment required. Two distinct cases share this
                status. (1) A PERMANENT block — an expired API key or subscription, or exhausted quota/prepaid credits:
                renew or top up at https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its
                ``Retry-After`` is a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that
                hit its daily character cap: this clears on its own when the cap resets at the next UTC midnight, its
                ``Retry-After`` states that actual reset, and the body carries a matching numeric ``retry_after`` field
                (whose presence also distinguishes the two cases). MCP OAuth access tokens are not accepted by this
                operation; send an API key. Request body over 4MB. Note the body uses ``message`` and ``result`` keys,
                not the usual ``msg``. Applies to requests authenticated via the Authorization header; a body-key-only
                request over the limit fails authentication instead (401), because the key cannot be read from the
                oversized body. Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error``
                is ``Error | PaymentRequired1 | PayloadTooLarge1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_add_custom_filter(body, request_options=request_options))

    async def sapling_add_custom_mapping(
        self,
        body: ApiV1CustomMappingRequest | ApiV1CustomMappingRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CustomMappingResponse1:
        """Suggest ``mapping`` whenever ``entry`` appears in checked text.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created mapping.

        Raises:
            ApiError: Invalid request, duplicate rule, entry equal to mapping, an entry with more than two digits, or a
                rule that must be marked case sensitive. Missing or invalid API key or OAuth access token. (An EXPIRED
                key or subscription answers 402, not 401.) Payment required. Two distinct cases share this status. (1) A
                PERMANENT block — an expired API key or subscription, or exhausted quota/prepaid credits: renew or top
                up at https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its
                ``Retry-After`` is a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that
                hit its daily character cap: this clears on its own when the cap resets at the next UTC midnight, its
                ``Retry-After`` states that actual reset, and the body carries a matching numeric ``retry_after`` field
                (whose presence also distinguishes the two cases). MCP OAuth access tokens are not accepted by this
                operation; send an API key. Request body over 4MB. Note the body uses ``message`` and ``result`` keys,
                not the usual ``msg``. Applies to requests authenticated via the Authorization header; a body-key-only
                request over the limit fails authentication instead (401), because the key cannot be read from the
                oversized body. Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error``
                is ``Error | PaymentRequired1 | PayloadTooLarge1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_add_custom_mapping(body, request_options=request_options))

    async def sapling_add_dictionary_entry(
        self,
        body: ApiV1DictionaryRequest | ApiV1DictionaryRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1DictionaryResponse1:
        """Add a word the grammar and spelling checkers should accept.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created entry.

        Raises:
            ApiError: Invalid request, duplicate entry ("Entry already exists."), or an entry with more than two digits.
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
                because the key cannot be read from the oversized body. Unexpected server error. Report persistent
                occurrences to support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 |
                RawError``."""
        return unwrap(await self._with_raw_response.sapling_add_dictionary_entry(body, request_options=request_options))

    async def sapling_delete_custom_filter(
        self,
        filter_id: UUID,
        *,
        return_usage: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Remove a filter by the ``id`` returned when listing or adding it.

        Args:
            filter_id: Custom filter id.
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted. Empty body.

        Raises:
            ApiError: The id is malformed, or no entry with this id belongs to the authenticated account (this endpoint
                answers 400, not 404). Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription
                answers 402, not 401.) Payment required. Two distinct cases share this status. (1) A PERMANENT block —
                an expired API key or subscription, or exhausted quota/prepaid credits: renew or top up at
                https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its ``Retry-After`` is
                a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that hit its daily
                character cap: this clears on its own when the cap resets at the next UTC midnight, its ``Retry-After``
                states that actual reset, and the body carries a matching numeric ``retry_after`` field (whose presence
                also distinguishes the two cases). MCP OAuth access tokens are not accepted by this operation; send an
                API key. Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error`` is
                ``Error | PaymentRequired1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_delete_custom_filter(
                filter_id, return_usage=return_usage, request_options=request_options
            ),
        )

    async def sapling_delete_custom_mapping(
        self,
        mapping_id: UUID,
        *,
        return_usage: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Remove a mapping by the ``id`` returned when listing or adding it.

        Args:
            mapping_id: Custom mapping id.
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted. Empty body.

        Raises:
            ApiError: The id is malformed, or no entry with this id belongs to the authenticated account (this endpoint
                answers 400, not 404). Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription
                answers 402, not 401.) Payment required. Two distinct cases share this status. (1) A PERMANENT block —
                an expired API key or subscription, or exhausted quota/prepaid credits: renew or top up at
                https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its ``Retry-After`` is
                a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that hit its daily
                character cap: this clears on its own when the cap resets at the next UTC midnight, its ``Retry-After``
                states that actual reset, and the body carries a matching numeric ``retry_after`` field (whose presence
                also distinguishes the two cases). MCP OAuth access tokens are not accepted by this operation; send an
                API key. Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error`` is
                ``Error | PaymentRequired1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_delete_custom_mapping(
                mapping_id, return_usage=return_usage, request_options=request_options
            ),
        )

    async def sapling_delete_dictionary_entry(
        self,
        entry_id: UUID,
        *,
        return_usage: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Remove an entry by the ``id`` returned when listing or adding it.

        Args:
            entry_id: Dictionary entry id.
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted. Empty body.

        Raises:
            ApiError: The id is malformed, or no entry with this id belongs to the authenticated account (this endpoint
                answers 400, not 404). Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription
                answers 402, not 401.) Payment required. Two distinct cases share this status. (1) A PERMANENT block —
                an expired API key or subscription, or exhausted quota/prepaid credits: renew or top up at
                https://sapling.ai/api_settings, as re-authenticating or retrying will not help; its ``Retry-After`` is
                a conservative backoff hint. (2) A TEMPORARY free-trial block — a trial-only key that hit its daily
                character cap: this clears on its own when the cap resets at the next UTC midnight, its ``Retry-After``
                states that actual reset, and the body carries a matching numeric ``retry_after`` field (whose presence
                also distinguishes the two cases). MCP OAuth access tokens are not accepted by this operation; send an
                API key. Unexpected server error. Report persistent occurrences to support@sapling.ai. ``error`` is
                ``Error | PaymentRequired1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_delete_dictionary_entry(
                entry_id, return_usage=return_usage, request_options=request_options
            ),
        )

    async def sapling_grammar_check(
        self,
        body: ApiV1EditsRequest | ApiV1EditsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1EditsResponse:
        """Check text for grammar, spelling, and style issues. Returns a list of suggested edits, each with the
        sentence, character span (start/end), replacement text, and an error type. Set auto_apply=true to also receive
        applied_text: the input with all suggested edits already applied (useful to return a corrected document in one
        call). Set include_error_categories=false to skip error classification and get only the corrections and offsets
        back (faster and lighter when you only need to apply fixes). Supports many languages via the lang parameter. If
        the result carries a degraded object it is partial: some sentences may be missing some or all of their
        corrections (the edits returned are still valid); call again for a complete result.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/edits-overview/ With
            noformat=true (the SDK response shape) the body is a bare array of edit objects instead. A partial result
            (some corrections may be missing) adds a ``degraded`` object; retry for a complete result.

        Raises:
            ApiError: Invalid request, as for the other endpoints — but this operation also answers a
                sentence-tokenization outage with an empty JSON array body and status 400. That array case is a
                TRANSIENT upstream failure, not a caller error, and is safe to retry after a short delay. Treat the
                status code as authoritative and tolerate both body shapes. Missing or invalid API key or OAuth access
                token. (An EXPIRED key or subscription answers 402, not 401.) Payment required. Two distinct cases share
                this status. (1) A PERMANENT block — an expired API key or subscription, or exhausted quota/prepaid
                credits: renew or top up at https://sapling.ai/api_settings, as re-authenticating or retrying will not
                help; its ``Retry-After`` is a conservative backoff hint. (2) A TEMPORARY free-trial block — a
                trial-only key that hit its daily character cap: this clears on its own when the cap resets at the next
                UTC midnight, its ``Retry-After`` states that actual reset, and the body carries a matching numeric
                ``retry_after`` field (whose presence also distinguishes the two cases). The team_id option names a team
                that does not exist or that the API key's user is not a member of. Request body over 4MB. Note the body
                uses ``message`` and ``result`` keys, not the usual ``msg``. Applies to requests authenticated via the
                Authorization header; a body-key-only request over the limit fails authentication instead (401), because
                the key cannot be read from the oversized body. Rate limited. Wait retry_after seconds (also in the
                Retry-After header) and retry. If retry_after is absent, the request exceeds the bucket capacity and can
                never succeed unchanged. Unexpected server error. Report persistent occurrences to support@sapling.ai.
                Temporarily unable to serve the request (e.g. model servers saturated). Honor Retry-After and retry.
                ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 | RateLimited1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_grammar_check(body, request_options=request_options))

    async def sapling_list_custom_filters(
        self, *, return_usage: bool | None = False, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1CustomFilterResponse:
        """Rules that suppress a specific suggestion (input -> output) from /api/v1/edits.

        Args:
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Custom filters.

        Raises:
            ApiError: Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not
                401.) Payment required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key
                or subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings,
                as re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2)
                A TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). MCP
                OAuth access tokens are not accepted by this operation; send an API key. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_list_custom_filters(
                return_usage=return_usage, request_options=request_options
            ),
        )

    async def sapling_list_custom_mappings(
        self, *, return_usage: bool | None = False, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1CustomMappingResponse:
        """Custom replacement rules (entry -> mapping) applied as suggestions by /api/v1/edits.

        Args:
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Custom mappings.

        Raises:
            ApiError: Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not
                401.) Payment required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key
                or subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings,
                as re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2)
                A TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). MCP
                OAuth access tokens are not accepted by this operation; send an API key. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_list_custom_mappings(
                return_usage=return_usage, request_options=request_options
            ),
        )

    async def sapling_list_dictionary(
        self, *, return_usage: bool | None = False, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[ApiV1DictionaryResponse]:
        """Words the grammar and spelling checkers accept as correct for this account. Returns a bare JSON array sorted
        by entry.

        Args:
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Dictionary entries.

        Raises:
            ApiError: Missing or invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not
                401.) Payment required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key
                or subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings,
                as re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2)
                A TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). MCP
                OAuth access tokens are not accepted by this operation; send an API key. Unexpected server error. Report
                persistent occurrences to support@sapling.ai. ``error`` is ``Error | PaymentRequired1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_list_dictionary(
                return_usage=return_usage, request_options=request_options
            ),
        )

    async def sapling_reject_edit(
        self,
        edit_hash: UUID,
        body: ApiV1EditsRejectRequest | ApiV1EditsRejectRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1EditsRejectResponse:
        """Report that the user rejected a suggestion returned by /api/v1/edits or /api/v1/spellcheck; similar
        suggestions are then suppressed for that user. The body must be a non-empty JSON object; include ``user_id`` or
        the feedback is not recorded.

        Args:
            edit_hash: The edit's ``id`` from /edits.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Acknowledged.

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
                ``ApiV1EditsRejectResponse11 | Error | PaymentRequired1 | PayloadTooLarge1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sapling_reject_edit(edit_hash, body, request_options=request_options)
        )

    async def sapling_spellcheck(
        self,
        body: ApiV1SpellcheckRequest | ApiV1SpellcheckRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SpellcheckResponse:
        """Check text for spelling errors only (no grammar or style suggestions). Returns edits in the same format as
        sapling_grammar_check. Faster and cheaper than a full grammar check when only misspellings matter. A result
        carrying a degraded object is partial; call again for a complete result.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/spellcheck/ With
            noformat=true (the SDK response shape) the body is a bare array of edit objects instead. A partial result
            (some corrections may be missing) adds a ``degraded`` object; retry for a complete result.

        Raises:
            ApiError: Invalid request (malformed JSON, a missing or invalid argument, or an endpoint-level check such as
                a size limit or empty text). Validator rejections prefix ``msg`` with "400 Bad Request:". Missing or
                invalid API key or OAuth access token. (An EXPIRED key or subscription answers 402, not 401.) Payment
                required. Two distinct cases share this status. (1) A PERMANENT block — an expired API key or
                subscription, or exhausted quota/prepaid credits: renew or top up at https://sapling.ai/api_settings, as
                re-authenticating or retrying will not help; its ``Retry-After`` is a conservative backoff hint. (2) A
                TEMPORARY free-trial block — a trial-only key that hit its daily character cap: this clears on its own
                when the cap resets at the next UTC midnight, its ``Retry-After`` states that actual reset, and the body
                carries a matching numeric ``retry_after`` field (whose presence also distinguishes the two cases). The
                team_id option names a team that does not exist or that the API key's user is not a member of. Request
                body over 4MB. Note the body uses ``message`` and ``result`` keys, not the usual ``msg``. Applies to
                requests authenticated via the Authorization header; a body-key-only request over the limit fails
                authentication instead (401), because the key cannot be read from the oversized body. Rate limited. Wait
                retry_after seconds (also in the Retry-After header) and retry. If retry_after is absent, the request
                exceeds the bucket capacity and can never succeed unchanged. Unexpected server error. Report persistent
                occurrences to support@sapling.ai. Temporarily unable to serve the request (e.g. model servers
                saturated). Honor Retry-After and retry. ``error`` is ``Error | PaymentRequired1 | PayloadTooLarge1 |
                RateLimited1 | RawError``."""
        return unwrap(await self._with_raw_response.sapling_spellcheck(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncProofreadingWithRawResponse:
        return self._with_raw_response


class ProofreadingWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def sapling_accept_edit(
        self,
        edit_hash: UUID,
        body: ApiV1EditsAcceptRequest | ApiV1EditsAcceptRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1EditsAcceptResponse, SaplingAcceptEditErrorBody]:
        """Report that the user accepted a suggestion returned by /api/v1/edits or /api/v1/spellcheck. Feedback improves
        the suggestions shown to that user. The body must be a non-empty JSON object; include ``user_id`` or the
        feedback is not recorded.

        Args:
            edit_hash: The edit's ``id`` from /edits.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/edits/{edit_hash}/accept"),
            path_params=[param[UUID]("edit_hash", edit_hash)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1EditsAcceptRequest | ApiV1EditsAcceptRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1EditsAcceptResponse],
            error_mapper=sapling_accept_edit_error_mapper,
            request_options=request_options,
        )

    def sapling_add_custom_filter(
        self,
        body: ApiV1CustomFilterRequest | ApiV1CustomFilterRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CustomFilterResponse1, SaplingAddCustomFilterErrorBody]:
        """Suppress suggestions that change ``inp`` into ``out``. Note the request keys are ``inp``/``out`` while
        responses use ``input``/``output``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/custom_filter"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1CustomFilterRequest | ApiV1CustomFilterRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CustomFilterResponse1],
            error_mapper=sapling_add_custom_filter_error_mapper,
            request_options=request_options,
        )

    def sapling_add_custom_mapping(
        self,
        body: ApiV1CustomMappingRequest | ApiV1CustomMappingRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CustomMappingResponse1, SaplingAddCustomMappingErrorBody]:
        """Suggest ``mapping`` whenever ``entry`` appears in checked text.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/custom_mapping"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1CustomMappingRequest | ApiV1CustomMappingRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CustomMappingResponse1],
            error_mapper=sapling_add_custom_mapping_error_mapper,
            request_options=request_options,
        )

    def sapling_add_dictionary_entry(
        self,
        body: ApiV1DictionaryRequest | ApiV1DictionaryRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1DictionaryResponse1, SaplingAddDictionaryEntryErrorBody]:
        """Add a word the grammar and spelling checkers should accept.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/dictionary"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1DictionaryRequest | ApiV1DictionaryRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1DictionaryResponse1],
            error_mapper=sapling_add_dictionary_entry_error_mapper,
            request_options=request_options,
        )

    def sapling_delete_custom_filter(
        self, filter_id: UUID, *, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, SaplingDeleteCustomFilterErrorBody]:
        """Remove a filter by the ``id`` returned when listing or adding it.

        Args:
            filter_id: Custom filter id.
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/custom_filter/{filter_id}"),
            path_params=[param[UUID]("filter_id", filter_id)],
            query_params=[param[bool | None]("return_usage", return_usage)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.api_key_query),
            decoder=empty_response,
            error_mapper=sapling_delete_custom_filter_error_mapper,
            request_options=request_options,
        )

    def sapling_delete_custom_mapping(
        self,
        mapping_id: UUID,
        *,
        return_usage: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SaplingDeleteCustomMappingErrorBody]:
        """Remove a mapping by the ``id`` returned when listing or adding it.

        Args:
            mapping_id: Custom mapping id.
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/custom_mapping/{mapping_id}"),
            path_params=[param[UUID]("mapping_id", mapping_id)],
            query_params=[param[bool | None]("return_usage", return_usage)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.api_key_query),
            decoder=empty_response,
            error_mapper=sapling_delete_custom_mapping_error_mapper,
            request_options=request_options,
        )

    def sapling_delete_dictionary_entry(
        self, entry_id: UUID, *, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, SaplingDeleteDictionaryEntryErrorBody]:
        """Remove an entry by the ``id`` returned when listing or adding it.

        Args:
            entry_id: Dictionary entry id.
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/dictionary/{entry_id}"),
            path_params=[param[UUID]("entry_id", entry_id)],
            query_params=[param[bool | None]("return_usage", return_usage)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.api_key_query),
            decoder=empty_response,
            error_mapper=sapling_delete_dictionary_entry_error_mapper,
            request_options=request_options,
        )

    def sapling_grammar_check(
        self, body: ApiV1EditsRequest | ApiV1EditsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1EditsResponse, SaplingGrammarCheckErrorBody]:
        """Check text for grammar, spelling, and style issues. Returns a list of suggested edits, each with the
        sentence, character span (start/end), replacement text, and an error type. Set auto_apply=true to also receive
        applied_text: the input with all suggested edits already applied (useful to return a corrected document in one
        call). Set include_error_categories=false to skip error classification and get only the corrections and offsets
        back (faster and lighter when you only need to apply fixes). Supports many languages via the lang parameter. If
        the result carries a degraded object it is partial: some sentences may be missing some or all of their
        corrections (the edits returned are still valid); call again for a complete result.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/edits"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1EditsRequest | ApiV1EditsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1EditsResponse],
            error_mapper=sapling_grammar_check_error_mapper,
            request_options=request_options,
        )

    def sapling_list_custom_filters(
        self, *, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CustomFilterResponse, SaplingListCustomFiltersErrorBody]:
        """Rules that suppress a specific suggestion (input -> output) from /api/v1/edits.

        Args:
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/custom_filter"),
            query_params=[param[bool | None]("return_usage", return_usage)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.api_key_query),
            decoder=json_decoder[ApiV1CustomFilterResponse],
            error_mapper=sapling_list_custom_filters_error_mapper,
            request_options=request_options,
        )

    def sapling_list_custom_mappings(
        self, *, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CustomMappingResponse, SaplingListCustomMappingsErrorBody]:
        """Custom replacement rules (entry -> mapping) applied as suggestions by /api/v1/edits.

        Args:
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/custom_mapping"),
            query_params=[param[bool | None]("return_usage", return_usage)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.api_key_query),
            decoder=json_decoder[ApiV1CustomMappingResponse],
            error_mapper=sapling_list_custom_mappings_error_mapper,
            request_options=request_options,
        )

    def sapling_list_dictionary(
        self, *, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[ApiV1DictionaryResponse], SaplingListDictionaryErrorBody]:
        """Words the grammar and spelling checkers accept as correct for this account. Returns a bare JSON array sorted
        by entry.

        Args:
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/dictionary"),
            query_params=[param[bool | None]("return_usage", return_usage)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.api_key_query),
            decoder=json_decoder[list[ApiV1DictionaryResponse]],
            error_mapper=sapling_list_dictionary_error_mapper,
            request_options=request_options,
        )

    def sapling_reject_edit(
        self,
        edit_hash: UUID,
        body: ApiV1EditsRejectRequest | ApiV1EditsRejectRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1EditsRejectResponse, SaplingRejectEditErrorBody]:
        """Report that the user rejected a suggestion returned by /api/v1/edits or /api/v1/spellcheck; similar
        suggestions are then suppressed for that user. The body must be a non-empty JSON object; include ``user_id`` or
        the feedback is not recorded.

        Args:
            edit_hash: The edit's ``id`` from /edits.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/edits/{edit_hash}/reject"),
            path_params=[param[UUID]("edit_hash", edit_hash)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1EditsRejectRequest | ApiV1EditsRejectRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1EditsRejectResponse],
            error_mapper=sapling_reject_edit_error_mapper,
            request_options=request_options,
        )

    def sapling_spellcheck(
        self,
        body: ApiV1SpellcheckRequest | ApiV1SpellcheckRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SpellcheckResponse, SaplingSpellcheckErrorBody]:
        """Check text for spelling errors only (no grammar or style suggestions). Returns edits in the same format as
        sapling_grammar_check. Faster and cheaper than a full grammar check when only misspellings matter. A result
        carrying a degraded object is partial; call again for a complete result.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/spellcheck"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SpellcheckRequest | ApiV1SpellcheckRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ApiV1SpellcheckResponse],
            error_mapper=sapling_spellcheck_error_mapper,
            request_options=request_options,
        )


class AsyncProofreadingWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def sapling_accept_edit(
        self,
        edit_hash: UUID,
        body: ApiV1EditsAcceptRequest | ApiV1EditsAcceptRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1EditsAcceptResponse, SaplingAcceptEditErrorBody]:
        """Report that the user accepted a suggestion returned by /api/v1/edits or /api/v1/spellcheck. Feedback improves
        the suggestions shown to that user. The body must be a non-empty JSON object; include ``user_id`` or the
        feedback is not recorded.

        Args:
            edit_hash: The edit's ``id`` from /edits.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/edits/{edit_hash}/accept"),
            path_params=[param[UUID]("edit_hash", edit_hash)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1EditsAcceptRequest | ApiV1EditsAcceptRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1EditsAcceptResponse],
            error_mapper=sapling_accept_edit_error_mapper,
            request_options=request_options,
        )

    async def sapling_add_custom_filter(
        self,
        body: ApiV1CustomFilterRequest | ApiV1CustomFilterRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CustomFilterResponse1, SaplingAddCustomFilterErrorBody]:
        """Suppress suggestions that change ``inp`` into ``out``. Note the request keys are ``inp``/``out`` while
        responses use ``input``/``output``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/custom_filter"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1CustomFilterRequest | ApiV1CustomFilterRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CustomFilterResponse1],
            error_mapper=sapling_add_custom_filter_error_mapper,
            request_options=request_options,
        )

    async def sapling_add_custom_mapping(
        self,
        body: ApiV1CustomMappingRequest | ApiV1CustomMappingRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CustomMappingResponse1, SaplingAddCustomMappingErrorBody]:
        """Suggest ``mapping`` whenever ``entry`` appears in checked text.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/custom_mapping"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1CustomMappingRequest | ApiV1CustomMappingRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CustomMappingResponse1],
            error_mapper=sapling_add_custom_mapping_error_mapper,
            request_options=request_options,
        )

    async def sapling_add_dictionary_entry(
        self,
        body: ApiV1DictionaryRequest | ApiV1DictionaryRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1DictionaryResponse1, SaplingAddDictionaryEntryErrorBody]:
        """Add a word the grammar and spelling checkers should accept.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/dictionary"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1DictionaryRequest | ApiV1DictionaryRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1DictionaryResponse1],
            error_mapper=sapling_add_dictionary_entry_error_mapper,
            request_options=request_options,
        )

    async def sapling_delete_custom_filter(
        self,
        filter_id: UUID,
        *,
        return_usage: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SaplingDeleteCustomFilterErrorBody]:
        """Remove a filter by the ``id`` returned when listing or adding it.

        Args:
            filter_id: Custom filter id.
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/custom_filter/{filter_id}"),
            path_params=[param[UUID]("filter_id", filter_id)],
            query_params=[param[bool | None]("return_usage", return_usage)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.api_key_query),
            decoder=async_empty_response,
            error_mapper=sapling_delete_custom_filter_error_mapper,
            request_options=request_options,
        )

    async def sapling_delete_custom_mapping(
        self,
        mapping_id: UUID,
        *,
        return_usage: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SaplingDeleteCustomMappingErrorBody]:
        """Remove a mapping by the ``id`` returned when listing or adding it.

        Args:
            mapping_id: Custom mapping id.
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/custom_mapping/{mapping_id}"),
            path_params=[param[UUID]("mapping_id", mapping_id)],
            query_params=[param[bool | None]("return_usage", return_usage)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.api_key_query),
            decoder=async_empty_response,
            error_mapper=sapling_delete_custom_mapping_error_mapper,
            request_options=request_options,
        )

    async def sapling_delete_dictionary_entry(
        self,
        entry_id: UUID,
        *,
        return_usage: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SaplingDeleteDictionaryEntryErrorBody]:
        """Remove an entry by the ``id`` returned when listing or adding it.

        Args:
            entry_id: Dictionary entry id.
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/dictionary/{entry_id}"),
            path_params=[param[UUID]("entry_id", entry_id)],
            query_params=[param[bool | None]("return_usage", return_usage)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.api_key_query),
            decoder=async_empty_response,
            error_mapper=sapling_delete_dictionary_entry_error_mapper,
            request_options=request_options,
        )

    async def sapling_grammar_check(
        self,
        body: ApiV1EditsRequest | ApiV1EditsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1EditsResponse, SaplingGrammarCheckErrorBody]:
        """Check text for grammar, spelling, and style issues. Returns a list of suggested edits, each with the
        sentence, character span (start/end), replacement text, and an error type. Set auto_apply=true to also receive
        applied_text: the input with all suggested edits already applied (useful to return a corrected document in one
        call). Set include_error_categories=false to skip error classification and get only the corrections and offsets
        back (faster and lighter when you only need to apply fixes). Supports many languages via the lang parameter. If
        the result carries a degraded object it is partial: some sentences may be missing some or all of their
        corrections (the edits returned are still valid); call again for a complete result.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/edits"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1EditsRequest | ApiV1EditsRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1EditsResponse],
            error_mapper=sapling_grammar_check_error_mapper,
            request_options=request_options,
        )

    async def sapling_list_custom_filters(
        self, *, return_usage: bool | None = False, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CustomFilterResponse, SaplingListCustomFiltersErrorBody]:
        """Rules that suppress a specific suggestion (input -> output) from /api/v1/edits.

        Args:
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/custom_filter"),
            query_params=[param[bool | None]("return_usage", return_usage)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.api_key_query),
            decoder=async_json_decoder[ApiV1CustomFilterResponse],
            error_mapper=sapling_list_custom_filters_error_mapper,
            request_options=request_options,
        )

    async def sapling_list_custom_mappings(
        self, *, return_usage: bool | None = False, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CustomMappingResponse, SaplingListCustomMappingsErrorBody]:
        """Custom replacement rules (entry -> mapping) applied as suggestions by /api/v1/edits.

        Args:
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/custom_mapping"),
            query_params=[param[bool | None]("return_usage", return_usage)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.api_key_query),
            decoder=async_json_decoder[ApiV1CustomMappingResponse],
            error_mapper=sapling_list_custom_mappings_error_mapper,
            request_options=request_options,
        )

    async def sapling_list_dictionary(
        self, *, return_usage: bool | None = False, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[ApiV1DictionaryResponse], SaplingListDictionaryErrorBody]:
        """Words the grammar and spelling checkers accept as correct for this account. Returns a bare JSON array sorted
        by entry.

        Args:
            return_usage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/dictionary"),
            query_params=[param[bool | None]("return_usage", return_usage)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.api_key_query),
            decoder=async_json_decoder[list[ApiV1DictionaryResponse]],
            error_mapper=sapling_list_dictionary_error_mapper,
            request_options=request_options,
        )

    async def sapling_reject_edit(
        self,
        edit_hash: UUID,
        body: ApiV1EditsRejectRequest | ApiV1EditsRejectRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1EditsRejectResponse, SaplingRejectEditErrorBody]:
        """Report that the user rejected a suggestion returned by /api/v1/edits or /api/v1/spellcheck; similar
        suggestions are then suppressed for that user. The body must be a non-empty JSON object; include ``user_id`` or
        the feedback is not recorded.

        Args:
            edit_hash: The edit's ``id`` from /edits.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/edits/{edit_hash}/reject"),
            path_params=[param[UUID]("edit_hash", edit_hash)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1EditsRejectRequest | ApiV1EditsRejectRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1EditsRejectResponse],
            error_mapper=sapling_reject_edit_error_mapper,
            request_options=request_options,
        )

    async def sapling_spellcheck(
        self,
        body: ApiV1SpellcheckRequest | ApiV1SpellcheckRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SpellcheckResponse, SaplingSpellcheckErrorBody]:
        """Check text for spelling errors only (no grammar or style suggestions). Returns edits in the same format as
        sapling_grammar_check. Faster and cheaper than a full grammar check when only misspellings matter. A result
        carrying a degraded object is partial; call again for a complete result.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/spellcheck"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SpellcheckRequest | ApiV1SpellcheckRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ApiV1SpellcheckResponse],
            error_mapper=sapling_spellcheck_error_mapper,
            request_options=request_options,
        )
