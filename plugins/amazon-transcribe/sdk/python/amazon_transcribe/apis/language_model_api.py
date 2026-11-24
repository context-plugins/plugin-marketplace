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
from ..errors.create_language_model_error import CreateLanguageModelErrorBody, create_language_model_error_mapper
from ..errors.delete_language_model_error import DeleteLanguageModelErrorBody, delete_language_model_error_mapper
from ..errors.describe_language_model_error import DescribeLanguageModelErrorBody, describe_language_model_error_mapper
from ..errors.list_language_models_error import ListLanguageModelsErrorBody, list_language_models_error_mapper
from ..errors.update_language_model_error import UpdateLanguageModelErrorBody, update_language_model_error_mapper
from ..models.enums.x_amz_target1_amazon_transcribe_service_language_model_api import (
    XAmzTarget1AmazonTranscribeServiceLanguageModelApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_transcribe_service_language_model_api import (
    XAmzTarget2AmazonTranscribeServiceLanguageModelApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_transcribe_service_language_model_api import (
    XAmzTarget3AmazonTranscribeServiceLanguageModelApiOrStr,
)
from ..models.enums.x_amz_target4_amazon_transcribe_service_language_model_api import (
    XAmzTarget4AmazonTranscribeServiceLanguageModelApiOrStr,
)
from ..models.enums.x_amz_target_amazon_transcribe_service_language_model_api import (
    XAmzTargetAmazonTranscribeServiceLanguageModelApiOrStr,
)
from ..server.server import Server


class LanguageModelApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = LanguageModelApiWithRawResponse(client, server, auth)

    def create_language_model(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceLanguageModelApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a new custom language model. When creating a new custom language model, you must specify: If you want
        a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model The
        location of your training and tuning files (this must be an Amazon S3 URI) The language of your model A unique
        name for your model

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.create_language_model(x_amz_target, request_options=request_options))

    def delete_language_model(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceLanguageModelApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a custom language model. To use this operation, specify the name of the language model you want to
        delete using ModelName. custom language model names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_language_model(x_amz_target, request_options=request_options))

    def describe_language_model(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceLanguageModelApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provides information about the specified custom language model. This operation also shows if the base
        language model that you used to create your custom language model has been updated. If Amazon Transcribe has
        updated the base model, you can create a new custom language model using the updated base model. If you tried to
        create a new custom language model and the request wasn't successful, you can use DescribeLanguageModel to help
        identify the reason for this failure.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.describe_language_model(x_amz_target, request_options=request_options))

    def list_language_models(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceLanguageModelApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provides a list of custom language models that match the specified criteria. If no criteria are specified,
        all custom language models are returned. To get detailed information about a specific custom language model, use
        the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_language_models(x_amz_target, request_options=request_options))

    def update_language_model(
        self,
        x_amz_target: XAmzTarget4AmazonTranscribeServiceLanguageModelApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Updates the encryption configuration for an existing custom language model. You can use this operation to
        change the KMS key used to encrypt your model artifacts. The model artifacts are re-encrypted in place. No model
        training is required. Your custom language model must not be in the IN_PROGRESS state when you call this
        operation. You cannot submit another update while a previous update is in progress. Use to check the current
        state of your model. Your custom language model remains available for transcription jobs while the update is
        being processed.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_language_model(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> LanguageModelApiWithRawResponse:
        return self._with_raw_response


class AsyncLanguageModelApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncLanguageModelApiWithRawResponse(client, server, auth)

    async def create_language_model(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceLanguageModelApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a new custom language model. When creating a new custom language model, you must specify: If you want
        a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model The
        location of your training and tuning files (this must be an Amazon S3 URI) The language of your model A unique
        name for your model

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
            await self._with_raw_response.create_language_model(x_amz_target, request_options=request_options)
        )

    async def delete_language_model(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceLanguageModelApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a custom language model. To use this operation, specify the name of the language model you want to
        delete using ModelName. custom language model names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_language_model(x_amz_target, request_options=request_options)
        )

    async def describe_language_model(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceLanguageModelApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provides information about the specified custom language model. This operation also shows if the base
        language model that you used to create your custom language model has been updated. If Amazon Transcribe has
        updated the base model, you can create a new custom language model using the updated base model. If you tried to
        create a new custom language model and the request wasn't successful, you can use DescribeLanguageModel to help
        identify the reason for this failure.

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
            await self._with_raw_response.describe_language_model(x_amz_target, request_options=request_options)
        )

    async def list_language_models(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceLanguageModelApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provides a list of custom language models that match the specified criteria. If no criteria are specified,
        all custom language models are returned. To get detailed information about a specific custom language model, use
        the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_language_models(x_amz_target, request_options=request_options))

    async def update_language_model(
        self,
        x_amz_target: XAmzTarget4AmazonTranscribeServiceLanguageModelApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Updates the encryption configuration for an existing custom language model. You can use this operation to
        change the KMS key used to encrypt your model artifacts. The model artifacts are re-encrypted in place. No model
        training is required. Your custom language model must not be in the IN_PROGRESS state when you call this
        operation. You cannot submit another update while a previous update is in progress. Use to check the current
        state of your model. Your custom language model remains available for transcription jobs while the update is
        being processed.

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
            await self._with_raw_response.update_language_model(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncLanguageModelApiWithRawResponse:
        return self._with_raw_response


class LanguageModelApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_language_model(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceLanguageModelApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateLanguageModelErrorBody]:
        """Creates a new custom language model. When creating a new custom language model, you must specify: If you want
        a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model The
        location of your training and tuning files (this must be an Amazon S3 URI) The language of your model A unique
        name for your model

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateLanguageModel"),
            headers=[
                param[XAmzTargetAmazonTranscribeServiceLanguageModelApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_language_model_error_mapper,
            request_options=request_options,
        )

    def delete_language_model(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceLanguageModelApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteLanguageModelErrorBody]:
        """Deletes a custom language model. To use this operation, specify the name of the language model you want to
        delete using ModelName. custom language model names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteLanguageModel"),
            headers=[
                param[XAmzTarget1AmazonTranscribeServiceLanguageModelApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_language_model_error_mapper,
            request_options=request_options,
        )

    def describe_language_model(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceLanguageModelApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeLanguageModelErrorBody]:
        """Provides information about the specified custom language model. This operation also shows if the base
        language model that you used to create your custom language model has been updated. If Amazon Transcribe has
        updated the base model, you can create a new custom language model using the updated base model. If you tried to
        create a new custom language model and the request wasn't successful, you can use DescribeLanguageModel to help
        identify the reason for this failure.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeLanguageModel"),
            headers=[
                param[XAmzTarget2AmazonTranscribeServiceLanguageModelApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_language_model_error_mapper,
            request_options=request_options,
        )

    def list_language_models(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceLanguageModelApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListLanguageModelsErrorBody]:
        """Provides a list of custom language models that match the specified criteria. If no criteria are specified,
        all custom language models are returned. To get detailed information about a specific custom language model, use
        the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListLanguageModels"),
            headers=[
                param[XAmzTarget3AmazonTranscribeServiceLanguageModelApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_language_models_error_mapper,
            request_options=request_options,
        )

    def update_language_model(
        self,
        x_amz_target: XAmzTarget4AmazonTranscribeServiceLanguageModelApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateLanguageModelErrorBody]:
        """Updates the encryption configuration for an existing custom language model. You can use this operation to
        change the KMS key used to encrypt your model artifacts. The model artifacts are re-encrypted in place. No model
        training is required. Your custom language model must not be in the IN_PROGRESS state when you call this
        operation. You cannot submit another update while a previous update is in progress. Use to check the current
        state of your model. Your custom language model remains available for transcription jobs while the update is
        being processed.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateLanguageModel"),
            headers=[
                param[XAmzTarget4AmazonTranscribeServiceLanguageModelApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_language_model_error_mapper,
            request_options=request_options,
        )


class AsyncLanguageModelApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_language_model(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceLanguageModelApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateLanguageModelErrorBody]:
        """Creates a new custom language model. When creating a new custom language model, you must specify: If you want
        a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model The
        location of your training and tuning files (this must be an Amazon S3 URI) The language of your model A unique
        name for your model

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateLanguageModel"),
            headers=[
                param[XAmzTargetAmazonTranscribeServiceLanguageModelApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_language_model_error_mapper,
            request_options=request_options,
        )

    async def delete_language_model(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceLanguageModelApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteLanguageModelErrorBody]:
        """Deletes a custom language model. To use this operation, specify the name of the language model you want to
        delete using ModelName. custom language model names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteLanguageModel"),
            headers=[
                param[XAmzTarget1AmazonTranscribeServiceLanguageModelApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_language_model_error_mapper,
            request_options=request_options,
        )

    async def describe_language_model(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceLanguageModelApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeLanguageModelErrorBody]:
        """Provides information about the specified custom language model. This operation also shows if the base
        language model that you used to create your custom language model has been updated. If Amazon Transcribe has
        updated the base model, you can create a new custom language model using the updated base model. If you tried to
        create a new custom language model and the request wasn't successful, you can use DescribeLanguageModel to help
        identify the reason for this failure.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeLanguageModel"),
            headers=[
                param[XAmzTarget2AmazonTranscribeServiceLanguageModelApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_language_model_error_mapper,
            request_options=request_options,
        )

    async def list_language_models(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceLanguageModelApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListLanguageModelsErrorBody]:
        """Provides a list of custom language models that match the specified criteria. If no criteria are specified,
        all custom language models are returned. To get detailed information about a specific custom language model, use
        the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListLanguageModels"),
            headers=[
                param[XAmzTarget3AmazonTranscribeServiceLanguageModelApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_language_models_error_mapper,
            request_options=request_options,
        )

    async def update_language_model(
        self,
        x_amz_target: XAmzTarget4AmazonTranscribeServiceLanguageModelApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateLanguageModelErrorBody]:
        """Updates the encryption configuration for an existing custom language model. You can use this operation to
        change the KMS key used to encrypt your model artifacts. The model artifacts are re-encrypted in place. No model
        training is required. Your custom language model must not be in the IN_PROGRESS state when you call this
        operation. You cannot submit another update while a previous update is in progress. Use to check the current
        state of your model. Your custom language model remains available for transcription jobs while the update is
        being processed.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateLanguageModel"),
            headers=[
                param[XAmzTarget4AmazonTranscribeServiceLanguageModelApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_language_model_error_mapper,
            request_options=request_options,
        )
