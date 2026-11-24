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
from ..errors.delete_transcription_job_error import (
    DeleteTranscriptionJobErrorBody,
    delete_transcription_job_error_mapper,
)
from ..errors.get_transcription_job_error import GetTranscriptionJobErrorBody, get_transcription_job_error_mapper
from ..errors.list_transcription_jobs_error import ListTranscriptionJobsErrorBody, list_transcription_jobs_error_mapper
from ..errors.start_transcription_job_error import StartTranscriptionJobErrorBody, start_transcription_job_error_mapper
from ..models.enums.x_amz_target1_amazon_transcribe_service_transcription_jobs_api import (
    XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_transcribe_service_transcription_jobs_api import (
    XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_transcribe_service_transcription_jobs_api import (
    XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApiOrStr,
)
from ..models.enums.x_amz_target_amazon_transcribe_service_transcription_jobs_api import (
    XAmzTargetAmazonTranscribeServiceTranscriptionJobsApiOrStr,
)
from ..server.server import Server


class TranscriptionJobs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TranscriptionJobsWithRawResponse(client, server, auth)

    def delete_transcription_job(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceTranscriptionJobsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a transcription job. To use this operation, specify the name of the job you want to delete using
        TranscriptionJobName. Job names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_transcription_job(x_amz_target, request_options=request_options))

    def get_transcription_job(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provides information about the specified transcription job. To view the status of the specified transcription
        job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is finished. You can find the
        results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details
        on why your transcription job failed. If you enabled content redaction, the redacted transcript can be found at
        the location specified in RedactedTranscriptFileUri. To get a list of your transcription jobs, use the
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
        return unwrap(self._with_raw_response.get_transcription_job(x_amz_target, request_options=request_options))

    def list_transcription_jobs(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all
        transcription jobs are returned. To get detailed information about a specific transcription job, use the
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_transcription_jobs(x_amz_target, request_options=request_options))

    def start_transcription_job(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Transcribes the audio from a media file and applies any additional Request Parameters you choose to include
        in your request. To make a StartTranscriptionJob request, you must first upload your media file into an Amazon
        S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include
        the following parameters in your StartTranscriptionJob request: region: The Amazon Web Services Region where you
        are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to
        Amazon Transcribe endpoints and quotas. TranscriptionJobName: A custom name you create for your transcription
        job that is unique within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3 location of your
        media file. One of LanguageCode, IdentifyLanguage, or IdentifyMultipleLanguages: If you know the language of
        your media file, specify it using the LanguageCode parameter; you can find all valid language codes in the
        Supported languages table. If you do not know the languages spoken in your media, use either IdentifyLanguage or
        IdentifyMultipleLanguages and let Amazon Transcribe identify the languages for you.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.start_transcription_job(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> TranscriptionJobsWithRawResponse:
        return self._with_raw_response


class AsyncTranscriptionJobs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTranscriptionJobsWithRawResponse(client, server, auth)

    async def delete_transcription_job(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceTranscriptionJobsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a transcription job. To use this operation, specify the name of the job you want to delete using
        TranscriptionJobName. Job names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_transcription_job(x_amz_target, request_options=request_options)
        )

    async def get_transcription_job(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provides information about the specified transcription job. To view the status of the specified transcription
        job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is finished. You can find the
        results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details
        on why your transcription job failed. If you enabled content redaction, the redacted transcript can be found at
        the location specified in RedactedTranscriptFileUri. To get a list of your transcription jobs, use the
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
            await self._with_raw_response.get_transcription_job(x_amz_target, request_options=request_options)
        )

    async def list_transcription_jobs(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all
        transcription jobs are returned. To get detailed information about a specific transcription job, use the
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
            await self._with_raw_response.list_transcription_jobs(x_amz_target, request_options=request_options)
        )

    async def start_transcription_job(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Transcribes the audio from a media file and applies any additional Request Parameters you choose to include
        in your request. To make a StartTranscriptionJob request, you must first upload your media file into an Amazon
        S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include
        the following parameters in your StartTranscriptionJob request: region: The Amazon Web Services Region where you
        are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to
        Amazon Transcribe endpoints and quotas. TranscriptionJobName: A custom name you create for your transcription
        job that is unique within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3 location of your
        media file. One of LanguageCode, IdentifyLanguage, or IdentifyMultipleLanguages: If you know the language of
        your media file, specify it using the LanguageCode parameter; you can find all valid language codes in the
        Supported languages table. If you do not know the languages spoken in your media, use either IdentifyLanguage or
        IdentifyMultipleLanguages and let Amazon Transcribe identify the languages for you.

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
            await self._with_raw_response.start_transcription_job(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncTranscriptionJobsWithRawResponse:
        return self._with_raw_response


class TranscriptionJobsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_transcription_job(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceTranscriptionJobsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteTranscriptionJobErrorBody]:
        """Deletes a transcription job. To use this operation, specify the name of the job you want to delete using
        TranscriptionJobName. Job names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteTranscriptionJob"),
            headers=[
                param[XAmzTargetAmazonTranscribeServiceTranscriptionJobsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_transcription_job_error_mapper,
            request_options=request_options,
        )

    def get_transcription_job(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetTranscriptionJobErrorBody]:
        """Provides information about the specified transcription job. To view the status of the specified transcription
        job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is finished. You can find the
        results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details
        on why your transcription job failed. If you enabled content redaction, the redacted transcript can be found at
        the location specified in RedactedTranscriptFileUri. To get a list of your transcription jobs, use the
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetTranscriptionJob"),
            headers=[
                param[XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_transcription_job_error_mapper,
            request_options=request_options,
        )

    def list_transcription_jobs(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListTranscriptionJobsErrorBody]:
        """Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all
        transcription jobs are returned. To get detailed information about a specific transcription job, use the
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTranscriptionJobs"),
            headers=[
                param[XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_transcription_jobs_error_mapper,
            request_options=request_options,
        )

    def start_transcription_job(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartTranscriptionJobErrorBody]:
        """Transcribes the audio from a media file and applies any additional Request Parameters you choose to include
        in your request. To make a StartTranscriptionJob request, you must first upload your media file into an Amazon
        S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include
        the following parameters in your StartTranscriptionJob request: region: The Amazon Web Services Region where you
        are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to
        Amazon Transcribe endpoints and quotas. TranscriptionJobName: A custom name you create for your transcription
        job that is unique within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3 location of your
        media file. One of LanguageCode, IdentifyLanguage, or IdentifyMultipleLanguages: If you know the language of
        your media file, specify it using the LanguageCode parameter; you can find all valid language codes in the
        Supported languages table. If you do not know the languages spoken in your media, use either IdentifyLanguage or
        IdentifyMultipleLanguages and let Amazon Transcribe identify the languages for you.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartTranscriptionJob"),
            headers=[
                param[XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_transcription_job_error_mapper,
            request_options=request_options,
        )


class AsyncTranscriptionJobsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_transcription_job(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceTranscriptionJobsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteTranscriptionJobErrorBody]:
        """Deletes a transcription job. To use this operation, specify the name of the job you want to delete using
        TranscriptionJobName. Job names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteTranscriptionJob"),
            headers=[
                param[XAmzTargetAmazonTranscribeServiceTranscriptionJobsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_transcription_job_error_mapper,
            request_options=request_options,
        )

    async def get_transcription_job(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetTranscriptionJobErrorBody]:
        """Provides information about the specified transcription job. To view the status of the specified transcription
        job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is finished. You can find the
        results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details
        on why your transcription job failed. If you enabled content redaction, the redacted transcript can be found at
        the location specified in RedactedTranscriptFileUri. To get a list of your transcription jobs, use the
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetTranscriptionJob"),
            headers=[
                param[XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_transcription_job_error_mapper,
            request_options=request_options,
        )

    async def list_transcription_jobs(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListTranscriptionJobsErrorBody]:
        """Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all
        transcription jobs are returned. To get detailed information about a specific transcription job, use the
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTranscriptionJobs"),
            headers=[
                param[XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_transcription_jobs_error_mapper,
            request_options=request_options,
        )

    async def start_transcription_job(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartTranscriptionJobErrorBody]:
        """Transcribes the audio from a media file and applies any additional Request Parameters you choose to include
        in your request. To make a StartTranscriptionJob request, you must first upload your media file into an Amazon
        S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include
        the following parameters in your StartTranscriptionJob request: region: The Amazon Web Services Region where you
        are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to
        Amazon Transcribe endpoints and quotas. TranscriptionJobName: A custom name you create for your transcription
        job that is unique within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3 location of your
        media file. One of LanguageCode, IdentifyLanguage, or IdentifyMultipleLanguages: If you know the language of
        your media file, specify it using the LanguageCode parameter; you can find all valid language codes in the
        Supported languages table. If you do not know the languages spoken in your media, use either IdentifyLanguage or
        IdentifyMultipleLanguages and let Amazon Transcribe identify the languages for you.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartTranscriptionJob"),
            headers=[
                param[XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_transcription_job_error_mapper,
            request_options=request_options,
        )
