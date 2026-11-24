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
from ..errors.delete_medical_scribe_job_error import (
    DeleteMedicalScribeJobErrorBody,
    delete_medical_scribe_job_error_mapper,
)
from ..errors.get_medical_scribe_job_error import GetMedicalScribeJobErrorBody, get_medical_scribe_job_error_mapper
from ..errors.list_medical_scribe_jobs_error import (
    ListMedicalScribeJobsErrorBody,
    list_medical_scribe_jobs_error_mapper,
)
from ..errors.start_medical_scribe_job_error import (
    StartMedicalScribeJobErrorBody,
    start_medical_scribe_job_error_mapper,
)
from ..models.enums.x_amz_target1_amazon_transcribe_service_medical_scribe_job_api import (
    XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_transcribe_service_medical_scribe_job_api import (
    XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_transcribe_service_medical_scribe_job_api import (
    XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApiOrStr,
)
from ..models.enums.x_amz_target_amazon_transcribe_service_medical_scribe_job_api import (
    XAmzTargetAmazonTranscribeServiceMedicalScribeJobApiOrStr,
)
from ..server.server import Server


class MedicalScribeJobApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MedicalScribeJobApiWithRawResponse(client, server, auth)

    def delete_medical_scribe_job(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceMedicalScribeJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a Medical Scribe job. To use this operation, specify the name of the job you want to delete using
        MedicalScribeJobName. Job names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_medical_scribe_job(x_amz_target, request_options=request_options))

    def get_medical_scribe_job(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provides information about the specified Medical Scribe job. To view the status of the specified medical
        transcription job, check the MedicalScribeJobStatus field. If the status is COMPLETED, the job is finished. You
        can find the results at the location specified in MedicalScribeOutput. If the status is FAILED, FailureReason
        provides details on why your Medical Scribe job failed. To get a list of your Medical Scribe jobs, use the
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.get_medical_scribe_job(x_amz_target, request_options=request_options))

    def list_medical_scribe_jobs(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provides a list of Medical Scribe jobs that match the specified criteria. If no criteria are specified, all
        Medical Scribe jobs are returned. To get detailed information about a specific Medical Scribe job, use the
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_medical_scribe_jobs(x_amz_target, request_options=request_options))

    def start_medical_scribe_job(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Transcribes patient-clinician conversations and generates clinical notes. Amazon Web Services HealthScribe
        automatically provides rich conversation transcripts, identifies speaker roles, classifies dialogues, extracts
        medical terms, and generates preliminary clinical notes. To learn more about these features, refer to Amazon Web
        Services HealthScribe. To make a StartMedicalScribeJob request, you must first upload your media file into an
        Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must
        include the following parameters in your StartMedicalTranscriptionJob request: DataAccessRoleArn: The ARN of an
        IAM role with the these minimum permissions: read permission on input file Amazon S3 bucket specified in Media,
        write permission on the Amazon S3 bucket specified in OutputBucketName, and full permissions on the KMS key
        specified in OutputEncryptionKMSKeyId (if set). The role should also allow transcribe.amazonaws.com to assume
        it. Media (MediaFileUri): The Amazon S3 location of your media file. MedicalScribeJobName: A custom name you
        create for your MedicalScribe job that is unique within your Amazon Web Services account. OutputBu

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.start_medical_scribe_job(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> MedicalScribeJobApiWithRawResponse:
        return self._with_raw_response


class AsyncMedicalScribeJobApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMedicalScribeJobApiWithRawResponse(client, server, auth)

    async def delete_medical_scribe_job(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceMedicalScribeJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a Medical Scribe job. To use this operation, specify the name of the job you want to delete using
        MedicalScribeJobName. Job names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_medical_scribe_job(x_amz_target, request_options=request_options)
        )

    async def get_medical_scribe_job(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provides information about the specified Medical Scribe job. To view the status of the specified medical
        transcription job, check the MedicalScribeJobStatus field. If the status is COMPLETED, the job is finished. You
        can find the results at the location specified in MedicalScribeOutput. If the status is FAILED, FailureReason
        provides details on why your Medical Scribe job failed. To get a list of your Medical Scribe jobs, use the
        operation.

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
            await self._with_raw_response.get_medical_scribe_job(x_amz_target, request_options=request_options)
        )

    async def list_medical_scribe_jobs(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provides a list of Medical Scribe jobs that match the specified criteria. If no criteria are specified, all
        Medical Scribe jobs are returned. To get detailed information about a specific Medical Scribe job, use the
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_medical_scribe_jobs(x_amz_target, request_options=request_options)
        )

    async def start_medical_scribe_job(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Transcribes patient-clinician conversations and generates clinical notes. Amazon Web Services HealthScribe
        automatically provides rich conversation transcripts, identifies speaker roles, classifies dialogues, extracts
        medical terms, and generates preliminary clinical notes. To learn more about these features, refer to Amazon Web
        Services HealthScribe. To make a StartMedicalScribeJob request, you must first upload your media file into an
        Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must
        include the following parameters in your StartMedicalTranscriptionJob request: DataAccessRoleArn: The ARN of an
        IAM role with the these minimum permissions: read permission on input file Amazon S3 bucket specified in Media,
        write permission on the Amazon S3 bucket specified in OutputBucketName, and full permissions on the KMS key
        specified in OutputEncryptionKMSKeyId (if set). The role should also allow transcribe.amazonaws.com to assume
        it. Media (MediaFileUri): The Amazon S3 location of your media file. MedicalScribeJobName: A custom name you
        create for your MedicalScribe job that is unique within your Amazon Web Services account. OutputBu

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
            await self._with_raw_response.start_medical_scribe_job(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncMedicalScribeJobApiWithRawResponse:
        return self._with_raw_response


class MedicalScribeJobApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_medical_scribe_job(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceMedicalScribeJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteMedicalScribeJobErrorBody]:
        """Deletes a Medical Scribe job. To use this operation, specify the name of the job you want to delete using
        MedicalScribeJobName. Job names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteMedicalScribeJob"),
            headers=[
                param[XAmzTargetAmazonTranscribeServiceMedicalScribeJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_medical_scribe_job_error_mapper,
            request_options=request_options,
        )

    def get_medical_scribe_job(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetMedicalScribeJobErrorBody]:
        """Provides information about the specified Medical Scribe job. To view the status of the specified medical
        transcription job, check the MedicalScribeJobStatus field. If the status is COMPLETED, the job is finished. You
        can find the results at the location specified in MedicalScribeOutput. If the status is FAILED, FailureReason
        provides details on why your Medical Scribe job failed. To get a list of your Medical Scribe jobs, use the
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetMedicalScribeJob"),
            headers=[
                param[XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_medical_scribe_job_error_mapper,
            request_options=request_options,
        )

    def list_medical_scribe_jobs(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListMedicalScribeJobsErrorBody]:
        """Provides a list of Medical Scribe jobs that match the specified criteria. If no criteria are specified, all
        Medical Scribe jobs are returned. To get detailed information about a specific Medical Scribe job, use the
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListMedicalScribeJobs"),
            headers=[
                param[XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_medical_scribe_jobs_error_mapper,
            request_options=request_options,
        )

    def start_medical_scribe_job(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartMedicalScribeJobErrorBody]:
        """Transcribes patient-clinician conversations and generates clinical notes. Amazon Web Services HealthScribe
        automatically provides rich conversation transcripts, identifies speaker roles, classifies dialogues, extracts
        medical terms, and generates preliminary clinical notes. To learn more about these features, refer to Amazon Web
        Services HealthScribe. To make a StartMedicalScribeJob request, you must first upload your media file into an
        Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must
        include the following parameters in your StartMedicalTranscriptionJob request: DataAccessRoleArn: The ARN of an
        IAM role with the these minimum permissions: read permission on input file Amazon S3 bucket specified in Media,
        write permission on the Amazon S3 bucket specified in OutputBucketName, and full permissions on the KMS key
        specified in OutputEncryptionKMSKeyId (if set). The role should also allow transcribe.amazonaws.com to assume
        it. Media (MediaFileUri): The Amazon S3 location of your media file. MedicalScribeJobName: A custom name you
        create for your MedicalScribe job that is unique within your Amazon Web Services account. OutputBu

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartMedicalScribeJob"),
            headers=[
                param[XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_medical_scribe_job_error_mapper,
            request_options=request_options,
        )


class AsyncMedicalScribeJobApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_medical_scribe_job(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceMedicalScribeJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteMedicalScribeJobErrorBody]:
        """Deletes a Medical Scribe job. To use this operation, specify the name of the job you want to delete using
        MedicalScribeJobName. Job names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteMedicalScribeJob"),
            headers=[
                param[XAmzTargetAmazonTranscribeServiceMedicalScribeJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_medical_scribe_job_error_mapper,
            request_options=request_options,
        )

    async def get_medical_scribe_job(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetMedicalScribeJobErrorBody]:
        """Provides information about the specified Medical Scribe job. To view the status of the specified medical
        transcription job, check the MedicalScribeJobStatus field. If the status is COMPLETED, the job is finished. You
        can find the results at the location specified in MedicalScribeOutput. If the status is FAILED, FailureReason
        provides details on why your Medical Scribe job failed. To get a list of your Medical Scribe jobs, use the
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetMedicalScribeJob"),
            headers=[
                param[XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_medical_scribe_job_error_mapper,
            request_options=request_options,
        )

    async def list_medical_scribe_jobs(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListMedicalScribeJobsErrorBody]:
        """Provides a list of Medical Scribe jobs that match the specified criteria. If no criteria are specified, all
        Medical Scribe jobs are returned. To get detailed information about a specific Medical Scribe job, use the
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListMedicalScribeJobs"),
            headers=[
                param[XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_medical_scribe_jobs_error_mapper,
            request_options=request_options,
        )

    async def start_medical_scribe_job(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartMedicalScribeJobErrorBody]:
        """Transcribes patient-clinician conversations and generates clinical notes. Amazon Web Services HealthScribe
        automatically provides rich conversation transcripts, identifies speaker roles, classifies dialogues, extracts
        medical terms, and generates preliminary clinical notes. To learn more about these features, refer to Amazon Web
        Services HealthScribe. To make a StartMedicalScribeJob request, you must first upload your media file into an
        Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must
        include the following parameters in your StartMedicalTranscriptionJob request: DataAccessRoleArn: The ARN of an
        IAM role with the these minimum permissions: read permission on input file Amazon S3 bucket specified in Media,
        write permission on the Amazon S3 bucket specified in OutputBucketName, and full permissions on the KMS key
        specified in OutputEncryptionKMSKeyId (if set). The role should also allow transcribe.amazonaws.com to assume
        it. Media (MediaFileUri): The Amazon S3 location of your media file. MedicalScribeJobName: A custom name you
        create for your MedicalScribe job that is unique within your Amazon Web Services account. OutputBu

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartMedicalScribeJob"),
            headers=[
                param[XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_medical_scribe_job_error_mapper,
            request_options=request_options,
        )
