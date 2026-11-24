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
from ..errors.get_media_analysis_job_error import GetMediaAnalysisJobErrorBody, get_media_analysis_job_error_mapper
from ..errors.list_media_analysis_jobs_error import (
    ListMediaAnalysisJobsErrorBody,
    list_media_analysis_jobs_error_mapper,
)
from ..errors.start_media_analysis_job_error import (
    StartMediaAnalysisJobErrorBody,
    start_media_analysis_job_error_mapper,
)
from ..models.enums.x_amz_target1_amazon_rekognition_media_analysis_job_api import (
    XAmzTarget1AmazonRekognitionMediaAnalysisJobApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_rekognition_media_analysis_job_api import (
    XAmzTarget2AmazonRekognitionMediaAnalysisJobApiOrStr,
)
from ..models.enums.x_amz_target_amazon_rekognition_media_analysis_job_api import (
    XAmzTargetAmazonRekognitionMediaAnalysisJobApiOrStr,
)
from ..server.server import Server


class MediaAnalysisJob:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MediaAnalysisJobWithRawResponse(client, server, auth)

    def get_media_analysis_job(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionMediaAnalysisJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Retrieves the results for a given media analysis job. Takes a JobId
        returned by StartMediaAnalysisJob.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_media_analysis_job(x_amz_target, request_options=request_options))

    def list_media_analysis_jobs(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionMediaAnalysisJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Returns a list of media analysis jobs. Results are sorted by
        CreationTimestamp in descending order.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidPaginationTokenException; InvalidParameterException;
                ProvisionedThroughputExceededException InternalServerError; ThrottlingException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.list_media_analysis_jobs(x_amz_target, request_options=request_options))

    def start_media_analysis_job(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionMediaAnalysisJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Initiates a new media analysis job. Accepts a manifest file in an Amazon
        S3 bucket. The output is a manifest file and a summary of the manifest stored in the Amazon S3 bucket.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; IdempotentParameterMismatchException; InvalidManifestException;
                InvalidParameterException; InvalidS3ObjectException; LimitExceededException;
                ProvisionedThroughputExceededException; ResourceNotFoundException; ResourceNotReadyException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.start_media_analysis_job(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> MediaAnalysisJobWithRawResponse:
        return self._with_raw_response


class AsyncMediaAnalysisJob:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMediaAnalysisJobWithRawResponse(client, server, auth)

    async def get_media_analysis_job(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionMediaAnalysisJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Retrieves the results for a given media analysis job. Takes a JobId
        returned by StartMediaAnalysisJob.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_media_analysis_job(x_amz_target, request_options=request_options)
        )

    async def list_media_analysis_jobs(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionMediaAnalysisJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Returns a list of media analysis jobs. Results are sorted by
        CreationTimestamp in descending order.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidPaginationTokenException; InvalidParameterException;
                ProvisionedThroughputExceededException InternalServerError; ThrottlingException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_media_analysis_jobs(x_amz_target, request_options=request_options)
        )

    async def start_media_analysis_job(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionMediaAnalysisJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Initiates a new media analysis job. Accepts a manifest file in an Amazon
        S3 bucket. The output is a manifest file and a summary of the manifest stored in the Amazon S3 bucket.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; IdempotentParameterMismatchException; InvalidManifestException;
                InvalidParameterException; InvalidS3ObjectException; LimitExceededException;
                ProvisionedThroughputExceededException; ResourceNotFoundException; ResourceNotReadyException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.start_media_analysis_job(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncMediaAnalysisJobWithRawResponse:
        return self._with_raw_response


class MediaAnalysisJobWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_media_analysis_job(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionMediaAnalysisJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetMediaAnalysisJobErrorBody]:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Retrieves the results for a given media analysis job. Takes a JobId
        returned by StartMediaAnalysisJob.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetMediaAnalysisJob"),
            headers=[
                param[XAmzTargetAmazonRekognitionMediaAnalysisJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_media_analysis_job_error_mapper,
            request_options=request_options,
        )

    def list_media_analysis_jobs(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionMediaAnalysisJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListMediaAnalysisJobsErrorBody]:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Returns a list of media analysis jobs. Results are sorted by
        CreationTimestamp in descending order.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListMediaAnalysisJobs"),
            headers=[
                param[XAmzTarget1AmazonRekognitionMediaAnalysisJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_media_analysis_jobs_error_mapper,
            request_options=request_options,
        )

    def start_media_analysis_job(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionMediaAnalysisJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartMediaAnalysisJobErrorBody]:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Initiates a new media analysis job. Accepts a manifest file in an Amazon
        S3 bucket. The output is a manifest file and a summary of the manifest stored in the Amazon S3 bucket.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartMediaAnalysisJob"),
            headers=[
                param[XAmzTarget2AmazonRekognitionMediaAnalysisJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_media_analysis_job_error_mapper,
            request_options=request_options,
        )


class AsyncMediaAnalysisJobWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_media_analysis_job(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionMediaAnalysisJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetMediaAnalysisJobErrorBody]:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Retrieves the results for a given media analysis job. Takes a JobId
        returned by StartMediaAnalysisJob.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetMediaAnalysisJob"),
            headers=[
                param[XAmzTargetAmazonRekognitionMediaAnalysisJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_media_analysis_job_error_mapper,
            request_options=request_options,
        )

    async def list_media_analysis_jobs(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionMediaAnalysisJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListMediaAnalysisJobsErrorBody]:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Returns a list of media analysis jobs. Results are sorted by
        CreationTimestamp in descending order.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListMediaAnalysisJobs"),
            headers=[
                param[XAmzTarget1AmazonRekognitionMediaAnalysisJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_media_analysis_jobs_error_mapper,
            request_options=request_options,
        )

    async def start_media_analysis_job(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionMediaAnalysisJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartMediaAnalysisJobErrorBody]:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Initiates a new media analysis job. Accepts a manifest file in an Amazon
        S3 bucket. The output is a manifest file and a summary of the manifest stored in the Amazon S3 bucket.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartMediaAnalysisJob"),
            headers=[
                param[XAmzTarget2AmazonRekognitionMediaAnalysisJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_media_analysis_job_error_mapper,
            request_options=request_options,
        )
