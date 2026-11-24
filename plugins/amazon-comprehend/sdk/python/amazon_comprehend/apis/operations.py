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
from ..errors.classify_document2_error import ClassifyDocument2ErrorBody, classify_document2_error_mapper
from ..errors.contains_pii_entities2_error import ContainsPiiEntities2ErrorBody, contains_pii_entities2_error_mapper
from ..errors.detect_dominant_language2_error import (
    DetectDominantLanguage2ErrorBody,
    detect_dominant_language2_error_mapper,
)
from ..errors.detect_entities2_error import DetectEntities2ErrorBody, detect_entities2_error_mapper
from ..errors.detect_key_phrases2_error import DetectKeyPhrases2ErrorBody, detect_key_phrases2_error_mapper
from ..errors.detect_pii_entities2_error import DetectPiiEntities2ErrorBody, detect_pii_entities2_error_mapper
from ..errors.detect_sentiment2_error import DetectSentiment2ErrorBody, detect_sentiment2_error_mapper
from ..errors.detect_syntax2_error import DetectSyntax2ErrorBody, detect_syntax2_error_mapper
from ..errors.detect_targeted_sentiment2_error import (
    DetectTargetedSentiment2ErrorBody,
    detect_targeted_sentiment2_error_mapper,
)
from ..errors.detect_toxic_content_error import DetectToxicContentErrorBody, detect_toxic_content_error_mapper
from ..models.enums.x_amz_target1_amazon_comprehend_operations_api import XAmzTarget1AmazonComprehendOperationsApiOrStr
from ..models.enums.x_amz_target2_amazon_comprehend_operations_api import XAmzTarget2AmazonComprehendOperationsApiOrStr
from ..models.enums.x_amz_target3_amazon_comprehend_operations_api import XAmzTarget3AmazonComprehendOperationsApiOrStr
from ..models.enums.x_amz_target4_amazon_comprehend_operations_api import XAmzTarget4AmazonComprehendOperationsApiOrStr
from ..models.enums.x_amz_target5_amazon_comprehend_operations_api import XAmzTarget5AmazonComprehendOperationsApiOrStr
from ..models.enums.x_amz_target6_amazon_comprehend_operations_api import XAmzTarget6AmazonComprehendOperationsApiOrStr
from ..models.enums.x_amz_target7_amazon_comprehend_operations_api import XAmzTarget7AmazonComprehendOperationsApiOrStr
from ..models.enums.x_amz_target8_amazon_comprehend_operations_api import XAmzTarget8AmazonComprehendOperationsApiOrStr
from ..models.enums.x_amz_target9_amazon_comprehend_operations_api import XAmzTarget9AmazonComprehendOperationsApiOrStr
from ..models.enums.x_amz_target_amazon_comprehend_operations_api import XAmzTargetAmazonComprehendOperationsApiOrStr
from ..server.server import Server


class Operations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OperationsWithRawResponse(client, server, auth)

    def classify_document2(
        self,
        x_amz_target: XAmzTargetAmazonComprehendOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a classification request to analyze a single document in real-time. ClassifyDocument supports the
        following model types: Custom classifier - a custom model that you have created and trained. For input, you can
        provide plain text, a single-page document (PDF, Word, or image), or Amazon Textract API output. For more
        information, see Custom classification in the Amazon Comprehend Developer Guide. Prompt safety classifier -
        Amazon Comprehend provides a pre-trained model for classifying input prompts for generative AI applications. For
        input, you provide English plain text input. For prompt safety classification, the response includes only the
        Classes field. For more information about prompt safety classifiers, see Prompt safety classification in the
        Amazon Comprehend Developer Guide. If the system detects errors while processing a page in the input document,
        the API response includes an Errors field that describes the errors. If the system detects a document-level
        error in your input document, the API returns an InvalidRequestException error response. For details about this
        exception, see Errors in semi-structured documents in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException
                ResourceUnavailableException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.classify_document2(x_amz_target, request_options=request_options))

    def contains_pii_entities2(
        self,
        x_amz_target: XAmzTarget1AmazonComprehendOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of
        identified PII entity types such as name, address, bank account number, or phone number.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.contains_pii_entities2(x_amz_target, request_options=request_options))

    def detect_dominant_language2(
        self,
        x_amz_target: XAmzTarget2AmazonComprehendOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can
        detect, see Amazon Comprehend Supported Languages.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.detect_dominant_language2(x_amz_target, request_options=request_options))

    def detect_entities2(
        self,
        x_amz_target: XAmzTarget3AmazonComprehendOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have
        a custom entity recognition model. When detecting named entities using the pre-trained model, use plain text as
        the input. For more information about named entities, see Entities in the Comprehend Developer Guide. When you
        use a custom entity recognition model, you can input plain text or you can upload a single-page input document
        (text, PDF, Word, or image). If the system detects errors while processing a page in the input document, the API
        response includes an entry in Errors for each error. If the system detects a document-level error in your input
        document, the API returns an InvalidRequestException error response. For details about this exception, see
        Errors in semi-structured documents in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ResourceUnavailableException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_entities2(x_amz_target, request_options=request_options))

    def detect_key_phrases2(
        self,
        x_amz_target: XAmzTarget4AmazonComprehendOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Detects the key noun phrases found in the text.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_key_phrases2(x_amz_target, request_options=request_options))

    def detect_pii_entities2(
        self,
        x_amz_target: XAmzTarget5AmazonComprehendOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Inspects the input text for entities that contain personally identifiable information (PII) and returns
        information about them.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_pii_entities2(x_amz_target, request_options=request_options))

    def detect_sentiment2(
        self,
        x_amz_target: XAmzTarget6AmazonComprehendOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_sentiment2(x_amz_target, request_options=request_options))

    def detect_syntax2(
        self,
        x_amz_target: XAmzTarget7AmazonComprehendOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Inspects text for syntax and the part of speech of words in the document. For more information, see Syntax in
        the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_syntax2(x_amz_target, request_options=request_options))

    def detect_targeted_sentiment2(
        self,
        x_amz_target: XAmzTarget8AmazonComprehendOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Inspects the input text and returns a sentiment analysis for each entity identified in the text. For more
        information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_targeted_sentiment2(x_amz_target, request_options=request_options))

    def detect_toxic_content(
        self,
        x_amz_target: XAmzTarget9AmazonComprehendOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Performs toxicity analysis on the list of text strings that you provide as input. The API response contains a
        results list that matches the size of the input list. For more information about toxicity detection, see
        Toxicity detection in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_toxic_content(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> OperationsWithRawResponse:
        return self._with_raw_response


class AsyncOperations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOperationsWithRawResponse(client, server, auth)

    async def classify_document2(
        self,
        x_amz_target: XAmzTargetAmazonComprehendOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a classification request to analyze a single document in real-time. ClassifyDocument supports the
        following model types: Custom classifier - a custom model that you have created and trained. For input, you can
        provide plain text, a single-page document (PDF, Word, or image), or Amazon Textract API output. For more
        information, see Custom classification in the Amazon Comprehend Developer Guide. Prompt safety classifier -
        Amazon Comprehend provides a pre-trained model for classifying input prompts for generative AI applications. For
        input, you provide English plain text input. For prompt safety classification, the response includes only the
        Classes field. For more information about prompt safety classifiers, see Prompt safety classification in the
        Amazon Comprehend Developer Guide. If the system detects errors while processing a page in the input document,
        the API response includes an Errors field that describes the errors. If the system detects a document-level
        error in your input document, the API returns an InvalidRequestException error response. For details about this
        exception, see Errors in semi-structured documents in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException
                ResourceUnavailableException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.classify_document2(x_amz_target, request_options=request_options))

    async def contains_pii_entities2(
        self,
        x_amz_target: XAmzTarget1AmazonComprehendOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of
        identified PII entity types such as name, address, bank account number, or phone number.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.contains_pii_entities2(x_amz_target, request_options=request_options)
        )

    async def detect_dominant_language2(
        self,
        x_amz_target: XAmzTarget2AmazonComprehendOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can
        detect, see Amazon Comprehend Supported Languages.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.detect_dominant_language2(x_amz_target, request_options=request_options)
        )

    async def detect_entities2(
        self,
        x_amz_target: XAmzTarget3AmazonComprehendOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have
        a custom entity recognition model. When detecting named entities using the pre-trained model, use plain text as
        the input. For more information about named entities, see Entities in the Comprehend Developer Guide. When you
        use a custom entity recognition model, you can input plain text or you can upload a single-page input document
        (text, PDF, Word, or image). If the system detects errors while processing a page in the input document, the API
        response includes an entry in Errors for each error. If the system detects a document-level error in your input
        document, the API returns an InvalidRequestException error response. For details about this exception, see
        Errors in semi-structured documents in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ResourceUnavailableException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.detect_entities2(x_amz_target, request_options=request_options))

    async def detect_key_phrases2(
        self,
        x_amz_target: XAmzTarget4AmazonComprehendOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Detects the key noun phrases found in the text.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.detect_key_phrases2(x_amz_target, request_options=request_options))

    async def detect_pii_entities2(
        self,
        x_amz_target: XAmzTarget5AmazonComprehendOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Inspects the input text for entities that contain personally identifiable information (PII) and returns
        information about them.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.detect_pii_entities2(x_amz_target, request_options=request_options))

    async def detect_sentiment2(
        self,
        x_amz_target: XAmzTarget6AmazonComprehendOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.detect_sentiment2(x_amz_target, request_options=request_options))

    async def detect_syntax2(
        self,
        x_amz_target: XAmzTarget7AmazonComprehendOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Inspects text for syntax and the part of speech of words in the document. For more information, see Syntax in
        the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.detect_syntax2(x_amz_target, request_options=request_options))

    async def detect_targeted_sentiment2(
        self,
        x_amz_target: XAmzTarget8AmazonComprehendOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Inspects the input text and returns a sentiment analysis for each entity identified in the text. For more
        information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.detect_targeted_sentiment2(x_amz_target, request_options=request_options)
        )

    async def detect_toxic_content(
        self,
        x_amz_target: XAmzTarget9AmazonComprehendOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Performs toxicity analysis on the list of text strings that you provide as input. The API response contains a
        results list that matches the size of the input list. For more information about toxicity detection, see
        Toxicity detection in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.detect_toxic_content(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncOperationsWithRawResponse:
        return self._with_raw_response


class OperationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def classify_document2(
        self,
        x_amz_target: XAmzTargetAmazonComprehendOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ClassifyDocument2ErrorBody]:
        """Creates a classification request to analyze a single document in real-time. ClassifyDocument supports the
        following model types: Custom classifier - a custom model that you have created and trained. For input, you can
        provide plain text, a single-page document (PDF, Word, or image), or Amazon Textract API output. For more
        information, see Custom classification in the Amazon Comprehend Developer Guide. Prompt safety classifier -
        Amazon Comprehend provides a pre-trained model for classifying input prompts for generative AI applications. For
        input, you provide English plain text input. For prompt safety classification, the response includes only the
        Classes field. For more information about prompt safety classifiers, see Prompt safety classification in the
        Amazon Comprehend Developer Guide. If the system detects errors while processing a page in the input document,
        the API response includes an Errors field that describes the errors. If the system detects a document-level
        error in your input document, the API returns an InvalidRequestException error response. For details about this
        exception, see Errors in semi-structured documents in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ClassifyDocument"),
            headers=[
                param[XAmzTargetAmazonComprehendOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=classify_document2_error_mapper,
            request_options=request_options,
        )

    def contains_pii_entities2(
        self,
        x_amz_target: XAmzTarget1AmazonComprehendOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ContainsPiiEntities2ErrorBody]:
        """Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of
        identified PII entity types such as name, address, bank account number, or phone number.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ContainsPiiEntities"),
            headers=[
                param[XAmzTarget1AmazonComprehendOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=contains_pii_entities2_error_mapper,
            request_options=request_options,
        )

    def detect_dominant_language2(
        self,
        x_amz_target: XAmzTarget2AmazonComprehendOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectDominantLanguage2ErrorBody]:
        """Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can
        detect, see Amazon Comprehend Supported Languages.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectDominantLanguage"),
            headers=[
                param[XAmzTarget2AmazonComprehendOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_dominant_language2_error_mapper,
            request_options=request_options,
        )

    def detect_entities2(
        self,
        x_amz_target: XAmzTarget3AmazonComprehendOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectEntities2ErrorBody]:
        """Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have
        a custom entity recognition model. When detecting named entities using the pre-trained model, use plain text as
        the input. For more information about named entities, see Entities in the Comprehend Developer Guide. When you
        use a custom entity recognition model, you can input plain text or you can upload a single-page input document
        (text, PDF, Word, or image). If the system detects errors while processing a page in the input document, the API
        response includes an entry in Errors for each error. If the system detects a document-level error in your input
        document, the API returns an InvalidRequestException error response. For details about this exception, see
        Errors in semi-structured documents in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectEntities"),
            headers=[
                param[XAmzTarget3AmazonComprehendOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_entities2_error_mapper,
            request_options=request_options,
        )

    def detect_key_phrases2(
        self,
        x_amz_target: XAmzTarget4AmazonComprehendOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectKeyPhrases2ErrorBody]:
        """Detects the key noun phrases found in the text.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectKeyPhrases"),
            headers=[
                param[XAmzTarget4AmazonComprehendOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_key_phrases2_error_mapper,
            request_options=request_options,
        )

    def detect_pii_entities2(
        self,
        x_amz_target: XAmzTarget5AmazonComprehendOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectPiiEntities2ErrorBody]:
        """Inspects the input text for entities that contain personally identifiable information (PII) and returns
        information about them.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectPiiEntities"),
            headers=[
                param[XAmzTarget5AmazonComprehendOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_pii_entities2_error_mapper,
            request_options=request_options,
        )

    def detect_sentiment2(
        self,
        x_amz_target: XAmzTarget6AmazonComprehendOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectSentiment2ErrorBody]:
        """Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectSentiment"),
            headers=[
                param[XAmzTarget6AmazonComprehendOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_sentiment2_error_mapper,
            request_options=request_options,
        )

    def detect_syntax2(
        self,
        x_amz_target: XAmzTarget7AmazonComprehendOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectSyntax2ErrorBody]:
        """Inspects text for syntax and the part of speech of words in the document. For more information, see Syntax in
        the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectSyntax"),
            headers=[
                param[XAmzTarget7AmazonComprehendOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_syntax2_error_mapper,
            request_options=request_options,
        )

    def detect_targeted_sentiment2(
        self,
        x_amz_target: XAmzTarget8AmazonComprehendOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectTargetedSentiment2ErrorBody]:
        """Inspects the input text and returns a sentiment analysis for each entity identified in the text. For more
        information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectTargetedSentiment"),
            headers=[
                param[XAmzTarget8AmazonComprehendOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_targeted_sentiment2_error_mapper,
            request_options=request_options,
        )

    def detect_toxic_content(
        self,
        x_amz_target: XAmzTarget9AmazonComprehendOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectToxicContentErrorBody]:
        """Performs toxicity analysis on the list of text strings that you provide as input. The API response contains a
        results list that matches the size of the input list. For more information about toxicity detection, see
        Toxicity detection in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectToxicContent"),
            headers=[
                param[XAmzTarget9AmazonComprehendOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_toxic_content_error_mapper,
            request_options=request_options,
        )


class AsyncOperationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def classify_document2(
        self,
        x_amz_target: XAmzTargetAmazonComprehendOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ClassifyDocument2ErrorBody]:
        """Creates a classification request to analyze a single document in real-time. ClassifyDocument supports the
        following model types: Custom classifier - a custom model that you have created and trained. For input, you can
        provide plain text, a single-page document (PDF, Word, or image), or Amazon Textract API output. For more
        information, see Custom classification in the Amazon Comprehend Developer Guide. Prompt safety classifier -
        Amazon Comprehend provides a pre-trained model for classifying input prompts for generative AI applications. For
        input, you provide English plain text input. For prompt safety classification, the response includes only the
        Classes field. For more information about prompt safety classifiers, see Prompt safety classification in the
        Amazon Comprehend Developer Guide. If the system detects errors while processing a page in the input document,
        the API response includes an Errors field that describes the errors. If the system detects a document-level
        error in your input document, the API returns an InvalidRequestException error response. For details about this
        exception, see Errors in semi-structured documents in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ClassifyDocument"),
            headers=[
                param[XAmzTargetAmazonComprehendOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=classify_document2_error_mapper,
            request_options=request_options,
        )

    async def contains_pii_entities2(
        self,
        x_amz_target: XAmzTarget1AmazonComprehendOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ContainsPiiEntities2ErrorBody]:
        """Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of
        identified PII entity types such as name, address, bank account number, or phone number.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ContainsPiiEntities"),
            headers=[
                param[XAmzTarget1AmazonComprehendOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=contains_pii_entities2_error_mapper,
            request_options=request_options,
        )

    async def detect_dominant_language2(
        self,
        x_amz_target: XAmzTarget2AmazonComprehendOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectDominantLanguage2ErrorBody]:
        """Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can
        detect, see Amazon Comprehend Supported Languages.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectDominantLanguage"),
            headers=[
                param[XAmzTarget2AmazonComprehendOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_dominant_language2_error_mapper,
            request_options=request_options,
        )

    async def detect_entities2(
        self,
        x_amz_target: XAmzTarget3AmazonComprehendOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectEntities2ErrorBody]:
        """Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have
        a custom entity recognition model. When detecting named entities using the pre-trained model, use plain text as
        the input. For more information about named entities, see Entities in the Comprehend Developer Guide. When you
        use a custom entity recognition model, you can input plain text or you can upload a single-page input document
        (text, PDF, Word, or image). If the system detects errors while processing a page in the input document, the API
        response includes an entry in Errors for each error. If the system detects a document-level error in your input
        document, the API returns an InvalidRequestException error response. For details about this exception, see
        Errors in semi-structured documents in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectEntities"),
            headers=[
                param[XAmzTarget3AmazonComprehendOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_entities2_error_mapper,
            request_options=request_options,
        )

    async def detect_key_phrases2(
        self,
        x_amz_target: XAmzTarget4AmazonComprehendOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectKeyPhrases2ErrorBody]:
        """Detects the key noun phrases found in the text.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectKeyPhrases"),
            headers=[
                param[XAmzTarget4AmazonComprehendOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_key_phrases2_error_mapper,
            request_options=request_options,
        )

    async def detect_pii_entities2(
        self,
        x_amz_target: XAmzTarget5AmazonComprehendOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectPiiEntities2ErrorBody]:
        """Inspects the input text for entities that contain personally identifiable information (PII) and returns
        information about them.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectPiiEntities"),
            headers=[
                param[XAmzTarget5AmazonComprehendOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_pii_entities2_error_mapper,
            request_options=request_options,
        )

    async def detect_sentiment2(
        self,
        x_amz_target: XAmzTarget6AmazonComprehendOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectSentiment2ErrorBody]:
        """Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectSentiment"),
            headers=[
                param[XAmzTarget6AmazonComprehendOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_sentiment2_error_mapper,
            request_options=request_options,
        )

    async def detect_syntax2(
        self,
        x_amz_target: XAmzTarget7AmazonComprehendOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectSyntax2ErrorBody]:
        """Inspects text for syntax and the part of speech of words in the document. For more information, see Syntax in
        the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectSyntax"),
            headers=[
                param[XAmzTarget7AmazonComprehendOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_syntax2_error_mapper,
            request_options=request_options,
        )

    async def detect_targeted_sentiment2(
        self,
        x_amz_target: XAmzTarget8AmazonComprehendOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectTargetedSentiment2ErrorBody]:
        """Inspects the input text and returns a sentiment analysis for each entity identified in the text. For more
        information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectTargetedSentiment"),
            headers=[
                param[XAmzTarget8AmazonComprehendOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_targeted_sentiment2_error_mapper,
            request_options=request_options,
        )

    async def detect_toxic_content(
        self,
        x_amz_target: XAmzTarget9AmazonComprehendOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectToxicContentErrorBody]:
        """Performs toxicity analysis on the list of text strings that you provide as input. The API response contains a
        results list that matches the size of the input list. For more information about toxicity detection, see
        Toxicity detection in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectToxicContent"),
            headers=[
                param[XAmzTarget9AmazonComprehendOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_toxic_content_error_mapper,
            request_options=request_options,
        )
