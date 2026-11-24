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
from ..errors.create_vocabulary_error import CreateVocabularyErrorBody, create_vocabulary_error_mapper
from ..errors.delete_vocabulary_error import DeleteVocabularyErrorBody, delete_vocabulary_error_mapper
from ..errors.get_vocabulary_error import GetVocabularyErrorBody, get_vocabulary_error_mapper
from ..errors.list_vocabularies_error import ListVocabulariesErrorBody, list_vocabularies_error_mapper
from ..errors.update_vocabulary_error import UpdateVocabularyErrorBody, update_vocabulary_error_mapper
from ..models.enums.x_amz_target1_amazon_transcribe_service_vocabularies_api import (
    XAmzTarget1AmazonTranscribeServiceVocabulariesApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_transcribe_service_vocabularies_api import (
    XAmzTarget2AmazonTranscribeServiceVocabulariesApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_transcribe_service_vocabularies_api import (
    XAmzTarget3AmazonTranscribeServiceVocabulariesApiOrStr,
)
from ..models.enums.x_amz_target4_amazon_transcribe_service_vocabularies_api import (
    XAmzTarget4AmazonTranscribeServiceVocabulariesApiOrStr,
)
from ..models.enums.x_amz_target_amazon_transcribe_service_vocabularies_api import (
    XAmzTargetAmazonTranscribeServiceVocabulariesApiOrStr,
)
from ..server.server import Server


class Vocabularies:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = VocabulariesWithRawResponse(client, server, auth)

    def create_vocabulary(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceVocabulariesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a new custom vocabulary. When creating a new custom vocabulary, you can either upload a text file
        that contains your new entries, phrases, and terms into an Amazon S3 bucket and include the URI in your request.
        Or you can include a list of terms directly in your request using the Phrases flag. Each language has a
        character set that contains all allowed characters for that specific language. If you use unsupported
        characters, your custom vocabulary request fails. Refer to Character Sets for Custom Vocabularies to get the
        character set for your language. For more information, see Custom vocabularies.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.create_vocabulary(x_amz_target, request_options=request_options))

    def delete_vocabulary(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceVocabulariesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a custom vocabulary. To use this operation, specify the name of the custom vocabulary you want to
        delete using VocabularyName. Custom vocabulary names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.delete_vocabulary(x_amz_target, request_options=request_options))

    def get_vocabulary(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceVocabulariesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provides information about the specified custom vocabulary. To view the status of the specified custom
        vocabulary, check the VocabularyState field. If the status is READY, your custom vocabulary is available to use.
        If the status is FAILED, FailureReason provides details on why your custom vocabulary failed. To get a list of
        your custom vocabularies, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.get_vocabulary(x_amz_target, request_options=request_options))

    def list_vocabularies(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceVocabulariesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provides a list of custom vocabularies that match the specified criteria. If no criteria are specified, all
        custom vocabularies are returned. To get detailed information about a specific custom vocabulary, use the
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_vocabularies(x_amz_target, request_options=request_options))

    def update_vocabulary(
        self,
        x_amz_target: XAmzTarget4AmazonTranscribeServiceVocabulariesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Updates an existing custom vocabulary with new values. This operation overwrites all existing information
        with your new values; you cannot append new terms onto an existing custom vocabulary. Your custom vocabulary
        must be in a terminal state (READY or FAILED) before you can update it. You must include either Phrases or
        VocabularyFileUri in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_vocabulary(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> VocabulariesWithRawResponse:
        return self._with_raw_response


class AsyncVocabularies:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncVocabulariesWithRawResponse(client, server, auth)

    async def create_vocabulary(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceVocabulariesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a new custom vocabulary. When creating a new custom vocabulary, you can either upload a text file
        that contains your new entries, phrases, and terms into an Amazon S3 bucket and include the URI in your request.
        Or you can include a list of terms directly in your request using the Phrases flag. Each language has a
        character set that contains all allowed characters for that specific language. If you use unsupported
        characters, your custom vocabulary request fails. Refer to Character Sets for Custom Vocabularies to get the
        character set for your language. For more information, see Custom vocabularies.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.create_vocabulary(x_amz_target, request_options=request_options))

    async def delete_vocabulary(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceVocabulariesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a custom vocabulary. To use this operation, specify the name of the custom vocabulary you want to
        delete using VocabularyName. Custom vocabulary names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.delete_vocabulary(x_amz_target, request_options=request_options))

    async def get_vocabulary(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceVocabulariesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provides information about the specified custom vocabulary. To view the status of the specified custom
        vocabulary, check the VocabularyState field. If the status is READY, your custom vocabulary is available to use.
        If the status is FAILED, FailureReason provides details on why your custom vocabulary failed. To get a list of
        your custom vocabularies, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.get_vocabulary(x_amz_target, request_options=request_options))

    async def list_vocabularies(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceVocabulariesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provides a list of custom vocabularies that match the specified criteria. If no criteria are specified, all
        custom vocabularies are returned. To get detailed information about a specific custom vocabulary, use the
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_vocabularies(x_amz_target, request_options=request_options))

    async def update_vocabulary(
        self,
        x_amz_target: XAmzTarget4AmazonTranscribeServiceVocabulariesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Updates an existing custom vocabulary with new values. This operation overwrites all existing information
        with your new values; you cannot append new terms onto an existing custom vocabulary. Your custom vocabulary
        must be in a terminal state (READY or FAILED) before you can update it. You must include either Phrases or
        VocabularyFileUri in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_vocabulary(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncVocabulariesWithRawResponse:
        return self._with_raw_response


class VocabulariesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_vocabulary(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceVocabulariesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateVocabularyErrorBody]:
        """Creates a new custom vocabulary. When creating a new custom vocabulary, you can either upload a text file
        that contains your new entries, phrases, and terms into an Amazon S3 bucket and include the URI in your request.
        Or you can include a list of terms directly in your request using the Phrases flag. Each language has a
        character set that contains all allowed characters for that specific language. If you use unsupported
        characters, your custom vocabulary request fails. Refer to Character Sets for Custom Vocabularies to get the
        character set for your language. For more information, see Custom vocabularies.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateVocabulary"),
            headers=[
                param[XAmzTargetAmazonTranscribeServiceVocabulariesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_vocabulary_error_mapper,
            request_options=request_options,
        )

    def delete_vocabulary(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceVocabulariesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteVocabularyErrorBody]:
        """Deletes a custom vocabulary. To use this operation, specify the name of the custom vocabulary you want to
        delete using VocabularyName. Custom vocabulary names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteVocabulary"),
            headers=[
                param[XAmzTarget1AmazonTranscribeServiceVocabulariesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_vocabulary_error_mapper,
            request_options=request_options,
        )

    def get_vocabulary(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceVocabulariesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetVocabularyErrorBody]:
        """Provides information about the specified custom vocabulary. To view the status of the specified custom
        vocabulary, check the VocabularyState field. If the status is READY, your custom vocabulary is available to use.
        If the status is FAILED, FailureReason provides details on why your custom vocabulary failed. To get a list of
        your custom vocabularies, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetVocabulary"),
            headers=[
                param[XAmzTarget2AmazonTranscribeServiceVocabulariesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_vocabulary_error_mapper,
            request_options=request_options,
        )

    def list_vocabularies(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceVocabulariesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListVocabulariesErrorBody]:
        """Provides a list of custom vocabularies that match the specified criteria. If no criteria are specified, all
        custom vocabularies are returned. To get detailed information about a specific custom vocabulary, use the
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListVocabularies"),
            headers=[
                param[XAmzTarget3AmazonTranscribeServiceVocabulariesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_vocabularies_error_mapper,
            request_options=request_options,
        )

    def update_vocabulary(
        self,
        x_amz_target: XAmzTarget4AmazonTranscribeServiceVocabulariesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateVocabularyErrorBody]:
        """Updates an existing custom vocabulary with new values. This operation overwrites all existing information
        with your new values; you cannot append new terms onto an existing custom vocabulary. Your custom vocabulary
        must be in a terminal state (READY or FAILED) before you can update it. You must include either Phrases or
        VocabularyFileUri in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateVocabulary"),
            headers=[
                param[XAmzTarget4AmazonTranscribeServiceVocabulariesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_vocabulary_error_mapper,
            request_options=request_options,
        )


class AsyncVocabulariesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_vocabulary(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceVocabulariesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateVocabularyErrorBody]:
        """Creates a new custom vocabulary. When creating a new custom vocabulary, you can either upload a text file
        that contains your new entries, phrases, and terms into an Amazon S3 bucket and include the URI in your request.
        Or you can include a list of terms directly in your request using the Phrases flag. Each language has a
        character set that contains all allowed characters for that specific language. If you use unsupported
        characters, your custom vocabulary request fails. Refer to Character Sets for Custom Vocabularies to get the
        character set for your language. For more information, see Custom vocabularies.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateVocabulary"),
            headers=[
                param[XAmzTargetAmazonTranscribeServiceVocabulariesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_vocabulary_error_mapper,
            request_options=request_options,
        )

    async def delete_vocabulary(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceVocabulariesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteVocabularyErrorBody]:
        """Deletes a custom vocabulary. To use this operation, specify the name of the custom vocabulary you want to
        delete using VocabularyName. Custom vocabulary names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteVocabulary"),
            headers=[
                param[XAmzTarget1AmazonTranscribeServiceVocabulariesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_vocabulary_error_mapper,
            request_options=request_options,
        )

    async def get_vocabulary(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceVocabulariesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetVocabularyErrorBody]:
        """Provides information about the specified custom vocabulary. To view the status of the specified custom
        vocabulary, check the VocabularyState field. If the status is READY, your custom vocabulary is available to use.
        If the status is FAILED, FailureReason provides details on why your custom vocabulary failed. To get a list of
        your custom vocabularies, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetVocabulary"),
            headers=[
                param[XAmzTarget2AmazonTranscribeServiceVocabulariesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_vocabulary_error_mapper,
            request_options=request_options,
        )

    async def list_vocabularies(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceVocabulariesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListVocabulariesErrorBody]:
        """Provides a list of custom vocabularies that match the specified criteria. If no criteria are specified, all
        custom vocabularies are returned. To get detailed information about a specific custom vocabulary, use the
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListVocabularies"),
            headers=[
                param[XAmzTarget3AmazonTranscribeServiceVocabulariesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_vocabularies_error_mapper,
            request_options=request_options,
        )

    async def update_vocabulary(
        self,
        x_amz_target: XAmzTarget4AmazonTranscribeServiceVocabulariesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateVocabularyErrorBody]:
        """Updates an existing custom vocabulary with new values. This operation overwrites all existing information
        with your new values; you cannot append new terms onto an existing custom vocabulary. Your custom vocabulary
        must be in a terminal state (READY or FAILED) before you can update it. You must include either Phrases or
        VocabularyFileUri in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateVocabulary"),
            headers=[
                param[XAmzTarget4AmazonTranscribeServiceVocabulariesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_vocabulary_error_mapper,
            request_options=request_options,
        )
