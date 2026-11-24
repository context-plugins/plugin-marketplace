from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType
from uuid import UUID, uuid4

from typing_extensions import Self

from .base_client import DEFAULT_TIMEOUT, BaseForceDreamClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiResult,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    BaseRawResponse,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    async_empty_response,
    json_body,
    param,
    unwrap,
)
from .errors.anomaly_detection_error import AnomalyDetectionErrorBody, anomaly_detection_error_mapper
from .errors.classification_error import ClassificationErrorBody, classification_error_mapper
from .errors.code_generation_error import CodeGenerationErrorBody, code_generation_error_mapper
from .errors.fraud_signal_error import FraudSignalErrorBody, fraud_signal_error_mapper
from .errors.lead_score_error import LeadScoreErrorBody, lead_score_error_mapper
from .errors.model_inference_error import ModelInferenceErrorBody, model_inference_error_mapper
from .errors.prompt_template_error import PromptTemplateErrorBody, prompt_template_error_mapper
from .errors.proof_of_work_error import ProofOfWorkErrorBody, proof_of_work_error_mapper
from .errors.security_scan_error import SecurityScanErrorBody, security_scan_error_mapper
from .errors.semantic_cache_error import SemanticCacheErrorBody, semantic_cache_error_mapper
from .errors.sentiment_feed_error import SentimentFeedErrorBody, sentiment_feed_error_mapper
from .errors.summarization_error import SummarizationErrorBody, summarization_error_mapper
from .errors.tax_jar_lookup_error import TaxJarLookupErrorBody, tax_jar_lookup_error_mapper
from .errors.translation_error import TranslationErrorBody, translation_error_mapper
from .errors.validation_error import ValidationErrorBody, validation_error_mapper
from .models.v1_oracle_anomaly_detection_request import (
    V1OracleAnomalyDetectionRequest,
    V1OracleAnomalyDetectionRequestDict,
)
from .models.v1_oracle_classification_request import V1OracleClassificationRequest, V1OracleClassificationRequestDict
from .models.v1_oracle_code_generation_request import V1OracleCodeGenerationRequest, V1OracleCodeGenerationRequestDict
from .models.v1_oracle_fraud_signal_request import V1OracleFraudSignalRequest, V1OracleFraudSignalRequestDict
from .models.v1_oracle_lead_score_request import V1OracleLeadScoreRequest, V1OracleLeadScoreRequestDict
from .models.v1_oracle_model_inference_request import V1OracleModelInferenceRequest, V1OracleModelInferenceRequestDict
from .models.v1_oracle_prompt_template_request import V1OraclePromptTemplateRequest, V1OraclePromptTemplateRequestDict
from .models.v1_oracle_proof_of_work_request import V1OracleProofOfWorkRequest, V1OracleProofOfWorkRequestDict
from .models.v1_oracle_security_scan_request import V1OracleSecurityScanRequest, V1OracleSecurityScanRequestDict
from .models.v1_oracle_semantic_cache_request import V1OracleSemanticCacheRequest, V1OracleSemanticCacheRequestDict
from .models.v1_oracle_sentiment_feed_request import V1OracleSentimentFeedRequest, V1OracleSentimentFeedRequestDict
from .models.v1_oracle_summarization_request import V1OracleSummarizationRequest, V1OracleSummarizationRequestDict
from .models.v1_oracle_tax_jar_lookup_request import V1OracleTaxJarLookupRequest, V1OracleTaxJarLookupRequestDict
from .models.v1_oracle_translation_request import V1OracleTranslationRequest, V1OracleTranslationRequestDict
from .models.v1_oracle_validation_request import V1OracleValidationRequest, V1OracleValidationRequestDict
from .server.server import Server


class AsyncForceDreamClient(BaseForceDreamClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "ForceDreamClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )

    @cached_property
    def with_raw_response(self) -> AsyncApiWithRawResponse:
        return AsyncApiWithRawResponse(self._raw_client, self._server)

    async def anomaly_detection(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleAnomalyDetectionRequest | V1OracleAnomalyDetectionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Data returned after payment

        Raises:
            ApiError: Payment required — see payment.payment_link ``error`` is ``RawError``."""
        return unwrap(
            await self.with_raw_response.anomaly_detection(
                x_payment_intent_id=x_payment_intent_id, body=body, request_options=request_options
            ),
        )

    async def classification(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleClassificationRequest | V1OracleClassificationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Data returned after payment

        Raises:
            ApiError: Payment required — see payment.payment_link ``error`` is ``RawError``."""
        return unwrap(
            await self.with_raw_response.classification(
                x_payment_intent_id=x_payment_intent_id, body=body, request_options=request_options
            ),
        )

    async def code_generation(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleCodeGenerationRequest | V1OracleCodeGenerationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Data returned after payment

        Raises:
            ApiError: Payment required — see payment.payment_link ``error`` is ``RawError``."""
        return unwrap(
            await self.with_raw_response.code_generation(
                x_payment_intent_id=x_payment_intent_id, body=body, request_options=request_options
            ),
        )

    async def fraud_signal(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleFraudSignalRequest | V1OracleFraudSignalRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Data returned after payment

        Raises:
            ApiError: Payment required — see payment.payment_link ``error`` is ``RawError``."""
        return unwrap(
            await self.with_raw_response.fraud_signal(
                x_payment_intent_id=x_payment_intent_id, body=body, request_options=request_options
            ),
        )

    async def lead_score(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleLeadScoreRequest | V1OracleLeadScoreRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Data returned after payment

        Raises:
            ApiError: Payment required — see payment.payment_link ``error`` is ``RawError``."""
        return unwrap(
            await self.with_raw_response.lead_score(
                x_payment_intent_id=x_payment_intent_id, body=body, request_options=request_options
            ),
        )

    async def model_inference(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleModelInferenceRequest | V1OracleModelInferenceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Data returned after payment

        Raises:
            ApiError: Payment required — see payment.payment_link ``error`` is ``RawError``."""
        return unwrap(
            await self.with_raw_response.model_inference(
                x_payment_intent_id=x_payment_intent_id, body=body, request_options=request_options
            ),
        )

    async def prompt_template(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OraclePromptTemplateRequest | V1OraclePromptTemplateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Data returned after payment

        Raises:
            ApiError: Payment required — see payment.payment_link ``error`` is ``RawError``."""
        return unwrap(
            await self.with_raw_response.prompt_template(
                x_payment_intent_id=x_payment_intent_id, body=body, request_options=request_options
            ),
        )

    async def proof_of_work(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleProofOfWorkRequest | V1OracleProofOfWorkRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Data returned after payment

        Raises:
            ApiError: Payment required — see payment.payment_link ``error`` is ``RawError``."""
        return unwrap(
            await self.with_raw_response.proof_of_work(
                x_payment_intent_id=x_payment_intent_id, body=body, request_options=request_options
            ),
        )

    async def security_scan(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleSecurityScanRequest | V1OracleSecurityScanRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Data returned after payment

        Raises:
            ApiError: Payment required — see payment.payment_link ``error`` is ``RawError``."""
        return unwrap(
            await self.with_raw_response.security_scan(
                x_payment_intent_id=x_payment_intent_id, body=body, request_options=request_options
            ),
        )

    async def semantic_cache(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleSemanticCacheRequest | V1OracleSemanticCacheRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Data returned after payment

        Raises:
            ApiError: Payment required — see payment.payment_link ``error`` is ``RawError``."""
        return unwrap(
            await self.with_raw_response.semantic_cache(
                x_payment_intent_id=x_payment_intent_id, body=body, request_options=request_options
            ),
        )

    async def sentiment_feed(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleSentimentFeedRequest | V1OracleSentimentFeedRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Data returned after payment

        Raises:
            ApiError: Payment required — see payment.payment_link ``error`` is ``RawError``."""
        return unwrap(
            await self.with_raw_response.sentiment_feed(
                x_payment_intent_id=x_payment_intent_id, body=body, request_options=request_options
            ),
        )

    async def summarization(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleSummarizationRequest | V1OracleSummarizationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Data returned after payment

        Raises:
            ApiError: Payment required — see payment.payment_link ``error`` is ``RawError``."""
        return unwrap(
            await self.with_raw_response.summarization(
                x_payment_intent_id=x_payment_intent_id, body=body, request_options=request_options
            ),
        )

    async def tax_jar_lookup(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleTaxJarLookupRequest | V1OracleTaxJarLookupRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Data returned after payment

        Raises:
            ApiError: Payment required — see payment.payment_link ``error`` is ``RawError``."""
        return unwrap(
            await self.with_raw_response.tax_jar_lookup(
                x_payment_intent_id=x_payment_intent_id, body=body, request_options=request_options
            ),
        )

    async def translation(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleTranslationRequest | V1OracleTranslationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Data returned after payment

        Raises:
            ApiError: Payment required — see payment.payment_link ``error`` is ``RawError``."""
        return unwrap(
            await self.with_raw_response.translation(
                x_payment_intent_id=x_payment_intent_id, body=body, request_options=request_options
            ),
        )

    async def validation(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleValidationRequest | V1OracleValidationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Data returned after payment

        Raises:
            ApiError: Payment required — see payment.payment_link ``error`` is ``RawError``."""
        return unwrap(
            await self.with_raw_response.validation(
                x_payment_intent_id=x_payment_intent_id, body=body, request_options=request_options
            ),
        )

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


class AsyncApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def anomaly_detection(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleAnomalyDetectionRequest | V1OracleAnomalyDetectionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AnomalyDetectionErrorBody]:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/oracle/anomaly_detection"),
            headers=[
                param[str | None]("X-Payment-Intent-Id", x_payment_intent_id), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[V1OracleAnomalyDetectionRequest | V1OracleAnomalyDetectionRequestDict | None](body),
            decoder=async_empty_response,
            error_mapper=anomaly_detection_error_mapper,
            request_options=request_options,
        )

    async def classification(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleClassificationRequest | V1OracleClassificationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ClassificationErrorBody]:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/oracle/classification"),
            headers=[
                param[str | None]("X-Payment-Intent-Id", x_payment_intent_id), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[V1OracleClassificationRequest | V1OracleClassificationRequestDict | None](body),
            decoder=async_empty_response,
            error_mapper=classification_error_mapper,
            request_options=request_options,
        )

    async def code_generation(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleCodeGenerationRequest | V1OracleCodeGenerationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CodeGenerationErrorBody]:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/oracle/code_generation"),
            headers=[
                param[str | None]("X-Payment-Intent-Id", x_payment_intent_id), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[V1OracleCodeGenerationRequest | V1OracleCodeGenerationRequestDict | None](body),
            decoder=async_empty_response,
            error_mapper=code_generation_error_mapper,
            request_options=request_options,
        )

    async def fraud_signal(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleFraudSignalRequest | V1OracleFraudSignalRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, FraudSignalErrorBody]:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/oracle/fraud_signal"),
            headers=[
                param[str | None]("X-Payment-Intent-Id", x_payment_intent_id), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[V1OracleFraudSignalRequest | V1OracleFraudSignalRequestDict | None](body),
            decoder=async_empty_response,
            error_mapper=fraud_signal_error_mapper,
            request_options=request_options,
        )

    async def lead_score(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleLeadScoreRequest | V1OracleLeadScoreRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, LeadScoreErrorBody]:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/oracle/lead_score"),
            headers=[
                param[str | None]("X-Payment-Intent-Id", x_payment_intent_id), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[V1OracleLeadScoreRequest | V1OracleLeadScoreRequestDict | None](body),
            decoder=async_empty_response,
            error_mapper=lead_score_error_mapper,
            request_options=request_options,
        )

    async def model_inference(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleModelInferenceRequest | V1OracleModelInferenceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ModelInferenceErrorBody]:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/oracle/model_inference"),
            headers=[
                param[str | None]("X-Payment-Intent-Id", x_payment_intent_id), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[V1OracleModelInferenceRequest | V1OracleModelInferenceRequestDict | None](body),
            decoder=async_empty_response,
            error_mapper=model_inference_error_mapper,
            request_options=request_options,
        )

    async def prompt_template(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OraclePromptTemplateRequest | V1OraclePromptTemplateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PromptTemplateErrorBody]:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/oracle/prompt_template"),
            headers=[
                param[str | None]("X-Payment-Intent-Id", x_payment_intent_id), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[V1OraclePromptTemplateRequest | V1OraclePromptTemplateRequestDict | None](body),
            decoder=async_empty_response,
            error_mapper=prompt_template_error_mapper,
            request_options=request_options,
        )

    async def proof_of_work(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleProofOfWorkRequest | V1OracleProofOfWorkRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ProofOfWorkErrorBody]:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/oracle/proof_of_work"),
            headers=[
                param[str | None]("X-Payment-Intent-Id", x_payment_intent_id), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[V1OracleProofOfWorkRequest | V1OracleProofOfWorkRequestDict | None](body),
            decoder=async_empty_response,
            error_mapper=proof_of_work_error_mapper,
            request_options=request_options,
        )

    async def security_scan(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleSecurityScanRequest | V1OracleSecurityScanRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SecurityScanErrorBody]:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/oracle/security_scan"),
            headers=[
                param[str | None]("X-Payment-Intent-Id", x_payment_intent_id), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[V1OracleSecurityScanRequest | V1OracleSecurityScanRequestDict | None](body),
            decoder=async_empty_response,
            error_mapper=security_scan_error_mapper,
            request_options=request_options,
        )

    async def semantic_cache(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleSemanticCacheRequest | V1OracleSemanticCacheRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SemanticCacheErrorBody]:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/oracle/semantic_cache"),
            headers=[
                param[str | None]("X-Payment-Intent-Id", x_payment_intent_id), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[V1OracleSemanticCacheRequest | V1OracleSemanticCacheRequestDict | None](body),
            decoder=async_empty_response,
            error_mapper=semantic_cache_error_mapper,
            request_options=request_options,
        )

    async def sentiment_feed(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleSentimentFeedRequest | V1OracleSentimentFeedRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SentimentFeedErrorBody]:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/oracle/sentiment_feed"),
            headers=[
                param[str | None]("X-Payment-Intent-Id", x_payment_intent_id), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[V1OracleSentimentFeedRequest | V1OracleSentimentFeedRequestDict | None](body),
            decoder=async_empty_response,
            error_mapper=sentiment_feed_error_mapper,
            request_options=request_options,
        )

    async def summarization(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleSummarizationRequest | V1OracleSummarizationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SummarizationErrorBody]:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/oracle/summarization"),
            headers=[
                param[str | None]("X-Payment-Intent-Id", x_payment_intent_id), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[V1OracleSummarizationRequest | V1OracleSummarizationRequestDict | None](body),
            decoder=async_empty_response,
            error_mapper=summarization_error_mapper,
            request_options=request_options,
        )

    async def tax_jar_lookup(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleTaxJarLookupRequest | V1OracleTaxJarLookupRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TaxJarLookupErrorBody]:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/oracle/tax_jar_lookup"),
            headers=[
                param[str | None]("X-Payment-Intent-Id", x_payment_intent_id), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[V1OracleTaxJarLookupRequest | V1OracleTaxJarLookupRequestDict | None](body),
            decoder=async_empty_response,
            error_mapper=tax_jar_lookup_error_mapper,
            request_options=request_options,
        )

    async def translation(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleTranslationRequest | V1OracleTranslationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TranslationErrorBody]:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/oracle/translation"),
            headers=[
                param[str | None]("X-Payment-Intent-Id", x_payment_intent_id), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[V1OracleTranslationRequest | V1OracleTranslationRequestDict | None](body),
            decoder=async_empty_response,
            error_mapper=translation_error_mapper,
            request_options=request_options,
        )

    async def validation(
        self,
        *,
        x_payment_intent_id: str | None = None,
        body: V1OracleValidationRequest | V1OracleValidationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ValidationErrorBody]:
        """Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

        Args:
            x_payment_intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/oracle/validation"),
            headers=[
                param[str | None]("X-Payment-Intent-Id", x_payment_intent_id), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[V1OracleValidationRequest | V1OracleValidationRequestDict | None](body),
            decoder=async_empty_response,
            error_mapper=validation_error_mapper,
            request_options=request_options,
        )


AsyncClient = AsyncForceDreamClient
