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
from ..errors.create_medical_vocabulary_error import (
    CreateMedicalVocabularyErrorBody,
    create_medical_vocabulary_error_mapper,
)
from ..errors.delete_medical_vocabulary_error import (
    DeleteMedicalVocabularyErrorBody,
    delete_medical_vocabulary_error_mapper,
)
from ..errors.get_medical_vocabulary_error import GetMedicalVocabularyErrorBody, get_medical_vocabulary_error_mapper
from ..errors.list_medical_vocabularies_error import (
    ListMedicalVocabulariesErrorBody,
    list_medical_vocabularies_error_mapper,
)
from ..errors.update_medical_vocabulary_error import (
    UpdateMedicalVocabularyErrorBody,
    update_medical_vocabulary_error_mapper,
)
from ..models.enums.x_amz_target1_amazon_transcribe_service_medical_vocabulary_api import (
    XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_transcribe_service_medical_vocabulary_api import (
    XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_transcribe_service_medical_vocabulary_api import (
    XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApiOrStr,
)
from ..models.enums.x_amz_target4_amazon_transcribe_service_medical_vocabulary_api import (
    XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApiOrStr,
)
from ..models.enums.x_amz_target_amazon_transcribe_service_medical_vocabulary_api import (
    XAmzTargetAmazonTranscribeServiceMedicalVocabularyApiOrStr,
)
from ..server.server import Server


class MedicalVocabulary:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MedicalVocabularyWithRawResponse(client, server, auth)

    def create_medical_vocabulary(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceMedicalVocabularyApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a new custom medical vocabulary. Before creating a new custom medical vocabulary, you must first
        upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from ,
        where you can include a list of terms within your request using the Phrases flag; CreateMedicalVocabulary does
        not support the Phrases flag and only accepts vocabularies in table format. Each language has a character set
        that contains all allowed characters for that specific language. If you use unsupported characters, your custom
        vocabulary request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your
        language. For more information, see Custom vocabularies.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.create_medical_vocabulary(x_amz_target, request_options=request_options))

    def delete_medical_vocabulary(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you
        want to delete using VocabularyName. Custom vocabulary names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.delete_medical_vocabulary(x_amz_target, request_options=request_options))

    def get_medical_vocabulary(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provides information about the specified custom medical vocabulary. To view the status of the specified
        custom medical vocabulary, check the VocabularyState field. If the status is READY, your custom vocabulary is
        available to use. If the status is FAILED, FailureReason provides details on why your vocabulary failed. To get
        a list of your custom medical vocabularies, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.get_medical_vocabulary(x_amz_target, request_options=request_options))

    def list_medical_vocabularies(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are
        specified, all custom medical vocabularies are returned. To get detailed information about a specific custom
        medical vocabulary, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_medical_vocabularies(x_amz_target, request_options=request_options))

    def update_medical_vocabulary(
        self,
        x_amz_target: XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Updates an existing custom medical vocabulary with new values. This operation overwrites all existing
        information with your new values; you cannot append new terms onto an existing custom vocabulary.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_medical_vocabulary(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> MedicalVocabularyWithRawResponse:
        return self._with_raw_response


class AsyncMedicalVocabulary:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMedicalVocabularyWithRawResponse(client, server, auth)

    async def create_medical_vocabulary(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceMedicalVocabularyApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a new custom medical vocabulary. Before creating a new custom medical vocabulary, you must first
        upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from ,
        where you can include a list of terms within your request using the Phrases flag; CreateMedicalVocabulary does
        not support the Phrases flag and only accepts vocabularies in table format. Each language has a character set
        that contains all allowed characters for that specific language. If you use unsupported characters, your custom
        vocabulary request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your
        language. For more information, see Custom vocabularies.

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
            await self._with_raw_response.create_medical_vocabulary(x_amz_target, request_options=request_options)
        )

    async def delete_medical_vocabulary(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you
        want to delete using VocabularyName. Custom vocabulary names are case sensitive.

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
            await self._with_raw_response.delete_medical_vocabulary(x_amz_target, request_options=request_options)
        )

    async def get_medical_vocabulary(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provides information about the specified custom medical vocabulary. To view the status of the specified
        custom medical vocabulary, check the VocabularyState field. If the status is READY, your custom vocabulary is
        available to use. If the status is FAILED, FailureReason provides details on why your vocabulary failed. To get
        a list of your custom medical vocabularies, use the operation.

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
            await self._with_raw_response.get_medical_vocabulary(x_amz_target, request_options=request_options)
        )

    async def list_medical_vocabularies(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are
        specified, all custom medical vocabularies are returned. To get detailed information about a specific custom
        medical vocabulary, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_medical_vocabularies(x_amz_target, request_options=request_options)
        )

    async def update_medical_vocabulary(
        self,
        x_amz_target: XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Updates an existing custom medical vocabulary with new values. This operation overwrites all existing
        information with your new values; you cannot append new terms onto an existing custom vocabulary.

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
            await self._with_raw_response.update_medical_vocabulary(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncMedicalVocabularyWithRawResponse:
        return self._with_raw_response


class MedicalVocabularyWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_medical_vocabulary(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceMedicalVocabularyApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateMedicalVocabularyErrorBody]:
        """Creates a new custom medical vocabulary. Before creating a new custom medical vocabulary, you must first
        upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from ,
        where you can include a list of terms within your request using the Phrases flag; CreateMedicalVocabulary does
        not support the Phrases flag and only accepts vocabularies in table format. Each language has a character set
        that contains all allowed characters for that specific language. If you use unsupported characters, your custom
        vocabulary request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your
        language. For more information, see Custom vocabularies.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateMedicalVocabulary"),
            headers=[
                param[XAmzTargetAmazonTranscribeServiceMedicalVocabularyApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_medical_vocabulary_error_mapper,
            request_options=request_options,
        )

    def delete_medical_vocabulary(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteMedicalVocabularyErrorBody]:
        """Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you
        want to delete using VocabularyName. Custom vocabulary names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteMedicalVocabulary"),
            headers=[
                param[XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_medical_vocabulary_error_mapper,
            request_options=request_options,
        )

    def get_medical_vocabulary(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetMedicalVocabularyErrorBody]:
        """Provides information about the specified custom medical vocabulary. To view the status of the specified
        custom medical vocabulary, check the VocabularyState field. If the status is READY, your custom vocabulary is
        available to use. If the status is FAILED, FailureReason provides details on why your vocabulary failed. To get
        a list of your custom medical vocabularies, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetMedicalVocabulary"),
            headers=[
                param[XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_medical_vocabulary_error_mapper,
            request_options=request_options,
        )

    def list_medical_vocabularies(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListMedicalVocabulariesErrorBody]:
        """Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are
        specified, all custom medical vocabularies are returned. To get detailed information about a specific custom
        medical vocabulary, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListMedicalVocabularies"),
            headers=[
                param[XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_medical_vocabularies_error_mapper,
            request_options=request_options,
        )

    def update_medical_vocabulary(
        self,
        x_amz_target: XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateMedicalVocabularyErrorBody]:
        """Updates an existing custom medical vocabulary with new values. This operation overwrites all existing
        information with your new values; you cannot append new terms onto an existing custom vocabulary.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateMedicalVocabulary"),
            headers=[
                param[XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_medical_vocabulary_error_mapper,
            request_options=request_options,
        )


class AsyncMedicalVocabularyWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_medical_vocabulary(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceMedicalVocabularyApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateMedicalVocabularyErrorBody]:
        """Creates a new custom medical vocabulary. Before creating a new custom medical vocabulary, you must first
        upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from ,
        where you can include a list of terms within your request using the Phrases flag; CreateMedicalVocabulary does
        not support the Phrases flag and only accepts vocabularies in table format. Each language has a character set
        that contains all allowed characters for that specific language. If you use unsupported characters, your custom
        vocabulary request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your
        language. For more information, see Custom vocabularies.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateMedicalVocabulary"),
            headers=[
                param[XAmzTargetAmazonTranscribeServiceMedicalVocabularyApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_medical_vocabulary_error_mapper,
            request_options=request_options,
        )

    async def delete_medical_vocabulary(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteMedicalVocabularyErrorBody]:
        """Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you
        want to delete using VocabularyName. Custom vocabulary names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteMedicalVocabulary"),
            headers=[
                param[XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_medical_vocabulary_error_mapper,
            request_options=request_options,
        )

    async def get_medical_vocabulary(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetMedicalVocabularyErrorBody]:
        """Provides information about the specified custom medical vocabulary. To view the status of the specified
        custom medical vocabulary, check the VocabularyState field. If the status is READY, your custom vocabulary is
        available to use. If the status is FAILED, FailureReason provides details on why your vocabulary failed. To get
        a list of your custom medical vocabularies, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetMedicalVocabulary"),
            headers=[
                param[XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_medical_vocabulary_error_mapper,
            request_options=request_options,
        )

    async def list_medical_vocabularies(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListMedicalVocabulariesErrorBody]:
        """Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are
        specified, all custom medical vocabularies are returned. To get detailed information about a specific custom
        medical vocabulary, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListMedicalVocabularies"),
            headers=[
                param[XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_medical_vocabularies_error_mapper,
            request_options=request_options,
        )

    async def update_medical_vocabulary(
        self,
        x_amz_target: XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateMedicalVocabularyErrorBody]:
        """Updates an existing custom medical vocabulary with new values. This operation overwrites all existing
        information with your new values; you cannot append new terms onto an existing custom vocabulary.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateMedicalVocabulary"),
            headers=[
                param[XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_medical_vocabulary_error_mapper,
            request_options=request_options,
        )
