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
from ..errors.delete_medical_transcription_job_error import (
    DeleteMedicalTranscriptionJobErrorBody,
    delete_medical_transcription_job_error_mapper,
)
from ..errors.get_medical_transcription_job_error import (
    GetMedicalTranscriptionJobErrorBody,
    get_medical_transcription_job_error_mapper,
)
from ..errors.list_medical_transcription_jobs_error import (
    ListMedicalTranscriptionJobsErrorBody,
    list_medical_transcription_jobs_error_mapper,
)
from ..errors.start_medical_transcription_job_error import (
    StartMedicalTranscriptionJobErrorBody,
    start_medical_transcription_job_error_mapper,
)
from ..models.enums.x_amz_target1_amazon_transcribe_service_medical_transcription_job_api import (
    XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_transcribe_service_medical_transcription_job_api import (
    XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_transcribe_service_medical_transcription_job_api import (
    XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
)
from ..models.enums.x_amz_target_amazon_transcribe_service_medical_transcription_job_api import (
    XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
)
from ..server.server import Server


class MedicalTranscriptionJobApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MedicalTranscriptionJobApiWithRawResponse(client, server, auth)

    def delete_medical_transcription_job(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete
        using MedicalTranscriptionJobName. Job names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_medical_transcription_job(x_amz_target, request_options=request_options)
        )

    def get_medical_transcription_job(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provides information about the specified medical transcription job. To view the status of the specified
        medical transcription job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is
        finished. You can find the results at the location specified in TranscriptFileUri. If the status is FAILED,
        FailureReason provides details on why your transcription job failed. To get a list of your medical transcription
        jobs, use the operation.

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
            self._with_raw_response.get_medical_transcription_job(x_amz_target, request_options=request_options)
        )

    def list_medical_transcription_jobs(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provides a list of medical transcription jobs that match the specified criteria. If no criteria are
        specified, all medical transcription jobs are returned. To get detailed information about a specific medical
        transcription job, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_medical_transcription_jobs(x_amz_target, request_options=request_options)
        )

    def start_medical_transcription_job(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters
        you choose to include in your request. In addition to many standard transcription features, Amazon Transcribe
        Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags
        to personal health information (PHI). To learn more about these features, refer to How Amazon Transcribe Medical
        works. To make a StartMedicalTranscriptionJob request, you must first upload your media file into an Amazon S3
        bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the
        following parameters in your StartMedicalTranscriptionJob request: region: The Amazon Web Services Region where
        you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer
        to Amazon Transcribe endpoints and quotas. MedicalTranscriptionJobName: A custom name you create for your
        transcription job that is unique within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3
        location of your media file. LanguageCode: This must be en-US. OutputBucketName: The Amazon S3

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
            self._with_raw_response.start_medical_transcription_job(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> MedicalTranscriptionJobApiWithRawResponse:
        return self._with_raw_response


class AsyncMedicalTranscriptionJobApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMedicalTranscriptionJobApiWithRawResponse(client, server, auth)

    async def delete_medical_transcription_job(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete
        using MedicalTranscriptionJobName. Job names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_medical_transcription_job(
                x_amz_target, request_options=request_options
            ),
        )

    async def get_medical_transcription_job(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provides information about the specified medical transcription job. To view the status of the specified
        medical transcription job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is
        finished. You can find the results at the location specified in TranscriptFileUri. If the status is FAILED,
        FailureReason provides details on why your transcription job failed. To get a list of your medical transcription
        jobs, use the operation.

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
            await self._with_raw_response.get_medical_transcription_job(x_amz_target, request_options=request_options)
        )

    async def list_medical_transcription_jobs(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provides a list of medical transcription jobs that match the specified criteria. If no criteria are
        specified, all medical transcription jobs are returned. To get detailed information about a specific medical
        transcription job, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_medical_transcription_jobs(x_amz_target, request_options=request_options)
        )

    async def start_medical_transcription_job(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters
        you choose to include in your request. In addition to many standard transcription features, Amazon Transcribe
        Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags
        to personal health information (PHI). To learn more about these features, refer to How Amazon Transcribe Medical
        works. To make a StartMedicalTranscriptionJob request, you must first upload your media file into an Amazon S3
        bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the
        following parameters in your StartMedicalTranscriptionJob request: region: The Amazon Web Services Region where
        you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer
        to Amazon Transcribe endpoints and quotas. MedicalTranscriptionJobName: A custom name you create for your
        transcription job that is unique within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3
        location of your media file. LanguageCode: This must be en-US. OutputBucketName: The Amazon S3

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
            await self._with_raw_response.start_medical_transcription_job(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncMedicalTranscriptionJobApiWithRawResponse:
        return self._with_raw_response


class MedicalTranscriptionJobApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_medical_transcription_job(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteMedicalTranscriptionJobErrorBody]:
        """Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete
        using MedicalTranscriptionJobName. Job names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteMedicalTranscriptionJob"),
            headers=[
                param[XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_medical_transcription_job_error_mapper,
            request_options=request_options,
        )

    def get_medical_transcription_job(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetMedicalTranscriptionJobErrorBody]:
        """Provides information about the specified medical transcription job. To view the status of the specified
        medical transcription job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is
        finished. You can find the results at the location specified in TranscriptFileUri. If the status is FAILED,
        FailureReason provides details on why your transcription job failed. To get a list of your medical transcription
        jobs, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetMedicalTranscriptionJob"),
            headers=[
                param[XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_medical_transcription_job_error_mapper,
            request_options=request_options,
        )

    def list_medical_transcription_jobs(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListMedicalTranscriptionJobsErrorBody]:
        """Provides a list of medical transcription jobs that match the specified criteria. If no criteria are
        specified, all medical transcription jobs are returned. To get detailed information about a specific medical
        transcription job, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListMedicalTranscriptionJobs"),
            headers=[
                param[XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_medical_transcription_jobs_error_mapper,
            request_options=request_options,
        )

    def start_medical_transcription_job(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartMedicalTranscriptionJobErrorBody]:
        """Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters
        you choose to include in your request. In addition to many standard transcription features, Amazon Transcribe
        Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags
        to personal health information (PHI). To learn more about these features, refer to How Amazon Transcribe Medical
        works. To make a StartMedicalTranscriptionJob request, you must first upload your media file into an Amazon S3
        bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the
        following parameters in your StartMedicalTranscriptionJob request: region: The Amazon Web Services Region where
        you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer
        to Amazon Transcribe endpoints and quotas. MedicalTranscriptionJobName: A custom name you create for your
        transcription job that is unique within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3
        location of your media file. LanguageCode: This must be en-US. OutputBucketName: The Amazon S3

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartMedicalTranscriptionJob"),
            headers=[
                param[XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_medical_transcription_job_error_mapper,
            request_options=request_options,
        )


class AsyncMedicalTranscriptionJobApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_medical_transcription_job(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteMedicalTranscriptionJobErrorBody]:
        """Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete
        using MedicalTranscriptionJobName. Job names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteMedicalTranscriptionJob"),
            headers=[
                param[XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_medical_transcription_job_error_mapper,
            request_options=request_options,
        )

    async def get_medical_transcription_job(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetMedicalTranscriptionJobErrorBody]:
        """Provides information about the specified medical transcription job. To view the status of the specified
        medical transcription job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is
        finished. You can find the results at the location specified in TranscriptFileUri. If the status is FAILED,
        FailureReason provides details on why your transcription job failed. To get a list of your medical transcription
        jobs, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetMedicalTranscriptionJob"),
            headers=[
                param[XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_medical_transcription_job_error_mapper,
            request_options=request_options,
        )

    async def list_medical_transcription_jobs(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListMedicalTranscriptionJobsErrorBody]:
        """Provides a list of medical transcription jobs that match the specified criteria. If no criteria are
        specified, all medical transcription jobs are returned. To get detailed information about a specific medical
        transcription job, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListMedicalTranscriptionJobs"),
            headers=[
                param[XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_medical_transcription_jobs_error_mapper,
            request_options=request_options,
        )

    async def start_medical_transcription_job(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartMedicalTranscriptionJobErrorBody]:
        """Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters
        you choose to include in your request. In addition to many standard transcription features, Amazon Transcribe
        Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags
        to personal health information (PHI). To learn more about these features, refer to How Amazon Transcribe Medical
        works. To make a StartMedicalTranscriptionJob request, you must first upload your media file into an Amazon S3
        bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the
        following parameters in your StartMedicalTranscriptionJob request: region: The Amazon Web Services Region where
        you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer
        to Amazon Transcribe endpoints and quotas. MedicalTranscriptionJobName: A custom name you create for your
        transcription job that is unique within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3
        location of your media file. LanguageCode: This must be en-US. OutputBucketName: The Amazon S3

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartMedicalTranscriptionJob"),
            headers=[
                param[XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_medical_transcription_job_error_mapper,
            request_options=request_options,
        )
