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
    async_empty_response,
    empty_response,
    param,
    unwrap,
)
from ..errors.create_vocabulary_filter_error import (
    CreateVocabularyFilterErrorBody,
    create_vocabulary_filter_error_mapper,
)
from ..errors.delete_vocabulary_filter_error import (
    DeleteVocabularyFilterErrorBody,
    delete_vocabulary_filter_error_mapper,
)
from ..errors.get_vocabulary_filter_error import GetVocabularyFilterErrorBody, get_vocabulary_filter_error_mapper
from ..errors.list_vocabulary_filters_error import ListVocabularyFiltersErrorBody, list_vocabulary_filters_error_mapper
from ..errors.update_vocabulary_filter_error import (
    UpdateVocabularyFilterErrorBody,
    update_vocabulary_filter_error_mapper,
)
from ..models.enums.x_amz_target1_amazon_transcribe_service_vocabulary_filter_api import (
    XAmzTarget1AmazonTranscribeServiceVocabularyFilterApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_transcribe_service_vocabulary_filter_api import (
    XAmzTarget2AmazonTranscribeServiceVocabularyFilterApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_transcribe_service_vocabulary_filter_api import (
    XAmzTarget3AmazonTranscribeServiceVocabularyFilterApiOrStr,
)
from ..models.enums.x_amz_target4_amazon_transcribe_service_vocabulary_filter_api import (
    XAmzTarget4AmazonTranscribeServiceVocabularyFilterApiOrStr,
)
from ..models.enums.x_amz_target_amazon_transcribe_service_vocabulary_filter_api import (
    XAmzTargetAmazonTranscribeServiceVocabularyFilterApiOrStr,
)
from ..server.server import Server


class VocabularyFilter:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = VocabularyFilterWithRawResponse(client, server, auth)

    def create_vocabulary_filter(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceVocabularyFilterApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a new custom vocabulary filter. You can use custom vocabulary filters to mask, delete, or flag
        specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in
        transcripts. Each language has a character set that contains all allowed characters for that specific language.
        If you use unsupported characters, your custom vocabulary filter request fails. Refer to Character Sets for
        Custom Vocabularies to get the character set for your language. For more information, see Vocabulary filtering.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.create_vocabulary_filter(x_amz_target, request_options=request_options))

    def delete_vocabulary_filter(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceVocabularyFilterApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter
        you want to delete using VocabularyFilterName. Custom vocabulary filter names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.delete_vocabulary_filter(x_amz_target, request_options=request_options))

    def get_vocabulary_filter(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceVocabularyFilterApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provides information about the specified custom vocabulary filter. To get a list of your custom vocabulary
        filters, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.get_vocabulary_filter(x_amz_target, request_options=request_options))

    def list_vocabulary_filters(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceVocabularyFilterApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified,
        all custom vocabularies are returned. To get detailed information about a specific custom vocabulary filter, use
        the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_vocabulary_filters(x_amz_target, request_options=request_options))

    def update_vocabulary_filter(
        self,
        x_amz_target: XAmzTarget4AmazonTranscribeServiceVocabularyFilterApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites
        all previous entries; you cannot append new terms onto an existing custom vocabulary filter. You must include
        either Words or VocabularyFilterFileUri in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_vocabulary_filter(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> VocabularyFilterWithRawResponse:
        return self._with_raw_response


class AsyncVocabularyFilter:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncVocabularyFilterWithRawResponse(client, server, auth)

    async def create_vocabulary_filter(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceVocabularyFilterApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a new custom vocabulary filter. You can use custom vocabulary filters to mask, delete, or flag
        specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in
        transcripts. Each language has a character set that contains all allowed characters for that specific language.
        If you use unsupported characters, your custom vocabulary filter request fails. Refer to Character Sets for
        Custom Vocabularies to get the character set for your language. For more information, see Vocabulary filtering.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_vocabulary_filter(x_amz_target, request_options=request_options)
        )

    async def delete_vocabulary_filter(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceVocabularyFilterApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter
        you want to delete using VocabularyFilterName. Custom vocabulary filter names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_vocabulary_filter(x_amz_target, request_options=request_options)
        )

    async def get_vocabulary_filter(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceVocabularyFilterApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provides information about the specified custom vocabulary filter. To get a list of your custom vocabulary
        filters, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_vocabulary_filter(x_amz_target, request_options=request_options)
        )

    async def list_vocabulary_filters(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceVocabularyFilterApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified,
        all custom vocabularies are returned. To get detailed information about a specific custom vocabulary filter, use
        the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_vocabulary_filters(x_amz_target, request_options=request_options)
        )

    async def update_vocabulary_filter(
        self,
        x_amz_target: XAmzTarget4AmazonTranscribeServiceVocabularyFilterApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites
        all previous entries; you cannot append new terms onto an existing custom vocabulary filter. You must include
        either Words or VocabularyFilterFileUri in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_vocabulary_filter(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncVocabularyFilterWithRawResponse:
        return self._with_raw_response


class VocabularyFilterWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_vocabulary_filter(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceVocabularyFilterApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateVocabularyFilterErrorBody]:
        """Creates a new custom vocabulary filter. You can use custom vocabulary filters to mask, delete, or flag
        specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in
        transcripts. Each language has a character set that contains all allowed characters for that specific language.
        If you use unsupported characters, your custom vocabulary filter request fails. Refer to Character Sets for
        Custom Vocabularies to get the character set for your language. For more information, see Vocabulary filtering.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateVocabularyFilter"),
            headers=[
                param[XAmzTargetAmazonTranscribeServiceVocabularyFilterApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_vocabulary_filter_error_mapper,
            request_options=request_options,
        )

    def delete_vocabulary_filter(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceVocabularyFilterApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteVocabularyFilterErrorBody]:
        """Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter
        you want to delete using VocabularyFilterName. Custom vocabulary filter names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteVocabularyFilter"),
            headers=[
                param[XAmzTarget1AmazonTranscribeServiceVocabularyFilterApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_vocabulary_filter_error_mapper,
            request_options=request_options,
        )

    def get_vocabulary_filter(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceVocabularyFilterApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetVocabularyFilterErrorBody]:
        """Provides information about the specified custom vocabulary filter. To get a list of your custom vocabulary
        filters, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetVocabularyFilter"),
            headers=[
                param[XAmzTarget2AmazonTranscribeServiceVocabularyFilterApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_vocabulary_filter_error_mapper,
            request_options=request_options,
        )

    def list_vocabulary_filters(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceVocabularyFilterApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListVocabularyFiltersErrorBody]:
        """Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified,
        all custom vocabularies are returned. To get detailed information about a specific custom vocabulary filter, use
        the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListVocabularyFilters"),
            headers=[
                param[XAmzTarget3AmazonTranscribeServiceVocabularyFilterApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_vocabulary_filters_error_mapper,
            request_options=request_options,
        )

    def update_vocabulary_filter(
        self,
        x_amz_target: XAmzTarget4AmazonTranscribeServiceVocabularyFilterApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateVocabularyFilterErrorBody]:
        """Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites
        all previous entries; you cannot append new terms onto an existing custom vocabulary filter. You must include
        either Words or VocabularyFilterFileUri in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateVocabularyFilter"),
            headers=[
                param[XAmzTarget4AmazonTranscribeServiceVocabularyFilterApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_vocabulary_filter_error_mapper,
            request_options=request_options,
        )


class AsyncVocabularyFilterWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_vocabulary_filter(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceVocabularyFilterApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateVocabularyFilterErrorBody]:
        """Creates a new custom vocabulary filter. You can use custom vocabulary filters to mask, delete, or flag
        specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in
        transcripts. Each language has a character set that contains all allowed characters for that specific language.
        If you use unsupported characters, your custom vocabulary filter request fails. Refer to Character Sets for
        Custom Vocabularies to get the character set for your language. For more information, see Vocabulary filtering.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateVocabularyFilter"),
            headers=[
                param[XAmzTargetAmazonTranscribeServiceVocabularyFilterApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_vocabulary_filter_error_mapper,
            request_options=request_options,
        )

    async def delete_vocabulary_filter(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceVocabularyFilterApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteVocabularyFilterErrorBody]:
        """Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter
        you want to delete using VocabularyFilterName. Custom vocabulary filter names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteVocabularyFilter"),
            headers=[
                param[XAmzTarget1AmazonTranscribeServiceVocabularyFilterApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_vocabulary_filter_error_mapper,
            request_options=request_options,
        )

    async def get_vocabulary_filter(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceVocabularyFilterApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetVocabularyFilterErrorBody]:
        """Provides information about the specified custom vocabulary filter. To get a list of your custom vocabulary
        filters, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetVocabularyFilter"),
            headers=[
                param[XAmzTarget2AmazonTranscribeServiceVocabularyFilterApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_vocabulary_filter_error_mapper,
            request_options=request_options,
        )

    async def list_vocabulary_filters(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceVocabularyFilterApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListVocabularyFiltersErrorBody]:
        """Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified,
        all custom vocabularies are returned. To get detailed information about a specific custom vocabulary filter, use
        the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListVocabularyFilters"),
            headers=[
                param[XAmzTarget3AmazonTranscribeServiceVocabularyFilterApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_vocabulary_filters_error_mapper,
            request_options=request_options,
        )

    async def update_vocabulary_filter(
        self,
        x_amz_target: XAmzTarget4AmazonTranscribeServiceVocabularyFilterApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateVocabularyFilterErrorBody]:
        """Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites
        all previous entries; you cannot append new terms onto an existing custom vocabulary filter. You must include
        either Words or VocabularyFilterFileUri in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateVocabularyFilter"),
            headers=[
                param[XAmzTarget4AmazonTranscribeServiceVocabularyFilterApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_vocabulary_filter_error_mapper,
            request_options=request_options,
        )
