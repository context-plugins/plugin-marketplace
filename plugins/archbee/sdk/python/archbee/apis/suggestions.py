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
from ..errors.discard_suggestion_document_error import (
    DiscardSuggestionDocumentErrorBody,
    discard_suggestion_document_error_mapper,
)
from ..errors.merge_suggestion_into_main_document_error import (
    MergeSuggestionIntoMainDocumentErrorBody,
    merge_suggestion_into_main_document_error_mapper,
)
from ..models.suggest_change_discard_request import SuggestChangeDiscardRequest, SuggestChangeDiscardRequestDict
from ..models.suggest_change_discard_response import SuggestChangeDiscardResponse
from ..models.suggest_change_merge_request import SuggestChangeMergeRequest, SuggestChangeMergeRequestDict
from ..models.suggest_change_merge_response import SuggestChangeMergeResponse
from ..server.server import Server


class Suggestions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SuggestionsWithRawResponse(client, server, auth)

    def discard_suggestion_document(
        self,
        body: SuggestChangeDiscardRequest | SuggestChangeDiscardRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuggestChangeDiscardResponse:
        """Discard and delete a suggestion document without merging it into the base document. The suggestion document
        must have a docId starting with 'SUGGEST-'.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Suggestion successfully discarded

        Raises:
            ApiError: Bad Request ``error`` is ``SuggestChangeDiscard400Error1 | RawError``."""
        return unwrap(self._with_raw_response.discard_suggestion_document(body, request_options=request_options))

    def merge_suggestion_into_main_document(
        self,
        body: SuggestChangeMergeRequest | SuggestChangeMergeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuggestChangeMergeResponse:
        """Merge a suggestion document into the base document. The suggestion document must have a docId starting with
        'SUGGEST-'.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Suggestion successfully merged

        Raises:
            ApiError: Bad Request ``error`` is ``SuggestChangeMerge400Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.merge_suggestion_into_main_document(body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> SuggestionsWithRawResponse:
        return self._with_raw_response


class AsyncSuggestions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSuggestionsWithRawResponse(client, server, auth)

    async def discard_suggestion_document(
        self,
        body: SuggestChangeDiscardRequest | SuggestChangeDiscardRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuggestChangeDiscardResponse:
        """Discard and delete a suggestion document without merging it into the base document. The suggestion document
        must have a docId starting with 'SUGGEST-'.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Suggestion successfully discarded

        Raises:
            ApiError: Bad Request ``error`` is ``SuggestChangeDiscard400Error1 | RawError``."""
        return unwrap(await self._with_raw_response.discard_suggestion_document(body, request_options=request_options))

    async def merge_suggestion_into_main_document(
        self,
        body: SuggestChangeMergeRequest | SuggestChangeMergeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuggestChangeMergeResponse:
        """Merge a suggestion document into the base document. The suggestion document must have a docId starting with
        'SUGGEST-'.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Suggestion successfully merged

        Raises:
            ApiError: Bad Request ``error`` is ``SuggestChangeMerge400Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.merge_suggestion_into_main_document(body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncSuggestionsWithRawResponse:
        return self._with_raw_response


class SuggestionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def discard_suggestion_document(
        self,
        body: SuggestChangeDiscardRequest | SuggestChangeDiscardRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuggestChangeDiscardResponse, DiscardSuggestionDocumentErrorBody]:
        """Discard and delete a suggestion document without merging it into the base document. The suggestion document
        must have a docId starting with 'SUGGEST-'.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/suggest-change/discard"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SuggestChangeDiscardRequest | SuggestChangeDiscardRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuggestChangeDiscardResponse],
            error_mapper=discard_suggestion_document_error_mapper,
            request_options=request_options,
        )

    def merge_suggestion_into_main_document(
        self,
        body: SuggestChangeMergeRequest | SuggestChangeMergeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuggestChangeMergeResponse, MergeSuggestionIntoMainDocumentErrorBody]:
        """Merge a suggestion document into the base document. The suggestion document must have a docId starting with
        'SUGGEST-'.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/suggest-change/merge"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SuggestChangeMergeRequest | SuggestChangeMergeRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuggestChangeMergeResponse],
            error_mapper=merge_suggestion_into_main_document_error_mapper,
            request_options=request_options,
        )


class AsyncSuggestionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def discard_suggestion_document(
        self,
        body: SuggestChangeDiscardRequest | SuggestChangeDiscardRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuggestChangeDiscardResponse, DiscardSuggestionDocumentErrorBody]:
        """Discard and delete a suggestion document without merging it into the base document. The suggestion document
        must have a docId starting with 'SUGGEST-'.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/suggest-change/discard"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SuggestChangeDiscardRequest | SuggestChangeDiscardRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuggestChangeDiscardResponse],
            error_mapper=discard_suggestion_document_error_mapper,
            request_options=request_options,
        )

    async def merge_suggestion_into_main_document(
        self,
        body: SuggestChangeMergeRequest | SuggestChangeMergeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuggestChangeMergeResponse, MergeSuggestionIntoMainDocumentErrorBody]:
        """Merge a suggestion document into the base document. The suggestion document must have a docId starting with
        'SUGGEST-'.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/suggest-change/merge"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SuggestChangeMergeRequest | SuggestChangeMergeRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuggestChangeMergeResponse],
            error_mapper=merge_suggestion_into_main_document_error_mapper,
            request_options=request_options,
        )
