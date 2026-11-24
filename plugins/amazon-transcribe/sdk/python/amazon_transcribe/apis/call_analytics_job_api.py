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
from ..errors.delete_call_analytics_job_error import (
    DeleteCallAnalyticsJobErrorBody,
    delete_call_analytics_job_error_mapper,
)
from ..errors.get_call_analytics_job_error import GetCallAnalyticsJobErrorBody, get_call_analytics_job_error_mapper
from ..errors.list_call_analytics_jobs_error import (
    ListCallAnalyticsJobsErrorBody,
    list_call_analytics_jobs_error_mapper,
)
from ..errors.start_call_analytics_job_error import (
    StartCallAnalyticsJobErrorBody,
    start_call_analytics_job_error_mapper,
)
from ..models.enums.x_amz_target1_amazon_transcribe_service_call_analytics_job_api import (
    XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_transcribe_service_call_analytics_job_api import (
    XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_transcribe_service_call_analytics_job_api import (
    XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApiOrStr,
)
from ..models.enums.x_amz_target_amazon_transcribe_service_call_analytics_job_api import (
    XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApiOrStr,
)
from ..server.server import Server


class CallAnalyticsJobApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CallAnalyticsJobApiWithRawResponse(client, server, auth)

    def delete_call_analytics_job(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using
        CallAnalyticsJobName. Job names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_call_analytics_job(x_amz_target, request_options=request_options))

    def get_call_analytics_job(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provides information about the specified Call Analytics job. To view the job's status, refer to
        CallAnalyticsJobStatus. If the status is COMPLETED, the job is finished. You can find your completed transcript
        at the URI specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your
        transcription job failed. If you enabled personally identifiable information (PII) redaction, the redacted
        transcript appears at the location specified in RedactedTranscriptFileUri. If you chose to redact the audio in
        your media file, you can find your redacted media file at the location specified in RedactedMediaFileUri. To get
        a list of your Call Analytics jobs, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.get_call_analytics_job(x_amz_target, request_options=request_options))

    def list_call_analytics_jobs(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all
        Call Analytics jobs are returned. To get detailed information about a specific Call Analytics job, use the
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_call_analytics_jobs(x_amz_target, request_options=request_options))

    def start_call_analytics_job(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Transcribes the audio from a customer service call and applies any additional Request Parameters you choose
        to include in your request. In addition to many standard transcription features, Call Analytics provides you
        with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript
        and your audio file. You can also apply custom categories to flag specified conditions. To learn more about
        these features and insights, refer to Analyzing call center audio with Call Analytics. If you want to apply
        categories to your Call Analytics job, you must create them before submitting your job request. Categories
        cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call
        Analytics categories, see Creating categories for post-call transcriptions and Creating categories for real-time
        transcriptions. To make a StartCallAnalyticsJob request, you must first upload your media file into an Amazon S3
        bucket; you can then specify the Amazon S3 location of the file using the Media parameter. Job queuing is
        available for Call Analytics jobs. If you pass a DataAccessRoleArn in your request and you exceed your

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.start_call_analytics_job(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> CallAnalyticsJobApiWithRawResponse:
        return self._with_raw_response


class AsyncCallAnalyticsJobApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCallAnalyticsJobApiWithRawResponse(client, server, auth)

    async def delete_call_analytics_job(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using
        CallAnalyticsJobName. Job names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_call_analytics_job(x_amz_target, request_options=request_options)
        )

    async def get_call_analytics_job(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provides information about the specified Call Analytics job. To view the job's status, refer to
        CallAnalyticsJobStatus. If the status is COMPLETED, the job is finished. You can find your completed transcript
        at the URI specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your
        transcription job failed. If you enabled personally identifiable information (PII) redaction, the redacted
        transcript appears at the location specified in RedactedTranscriptFileUri. If you chose to redact the audio in
        your media file, you can find your redacted media file at the location specified in RedactedMediaFileUri. To get
        a list of your Call Analytics jobs, use the operation.

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
            await self._with_raw_response.get_call_analytics_job(x_amz_target, request_options=request_options)
        )

    async def list_call_analytics_jobs(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all
        Call Analytics jobs are returned. To get detailed information about a specific Call Analytics job, use the
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
            await self._with_raw_response.list_call_analytics_jobs(x_amz_target, request_options=request_options)
        )

    async def start_call_analytics_job(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Transcribes the audio from a customer service call and applies any additional Request Parameters you choose
        to include in your request. In addition to many standard transcription features, Call Analytics provides you
        with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript
        and your audio file. You can also apply custom categories to flag specified conditions. To learn more about
        these features and insights, refer to Analyzing call center audio with Call Analytics. If you want to apply
        categories to your Call Analytics job, you must create them before submitting your job request. Categories
        cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call
        Analytics categories, see Creating categories for post-call transcriptions and Creating categories for real-time
        transcriptions. To make a StartCallAnalyticsJob request, you must first upload your media file into an Amazon S3
        bucket; you can then specify the Amazon S3 location of the file using the Media parameter. Job queuing is
        available for Call Analytics jobs. If you pass a DataAccessRoleArn in your request and you exceed your

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
            await self._with_raw_response.start_call_analytics_job(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCallAnalyticsJobApiWithRawResponse:
        return self._with_raw_response


class CallAnalyticsJobApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_call_analytics_job(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteCallAnalyticsJobErrorBody]:
        """Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using
        CallAnalyticsJobName. Job names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteCallAnalyticsJob"),
            headers=[
                param[XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_call_analytics_job_error_mapper,
            request_options=request_options,
        )

    def get_call_analytics_job(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetCallAnalyticsJobErrorBody]:
        """Provides information about the specified Call Analytics job. To view the job's status, refer to
        CallAnalyticsJobStatus. If the status is COMPLETED, the job is finished. You can find your completed transcript
        at the URI specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your
        transcription job failed. If you enabled personally identifiable information (PII) redaction, the redacted
        transcript appears at the location specified in RedactedTranscriptFileUri. If you chose to redact the audio in
        your media file, you can find your redacted media file at the location specified in RedactedMediaFileUri. To get
        a list of your Call Analytics jobs, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetCallAnalyticsJob"),
            headers=[
                param[XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_call_analytics_job_error_mapper,
            request_options=request_options,
        )

    def list_call_analytics_jobs(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListCallAnalyticsJobsErrorBody]:
        """Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all
        Call Analytics jobs are returned. To get detailed information about a specific Call Analytics job, use the
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListCallAnalyticsJobs"),
            headers=[
                param[XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_call_analytics_jobs_error_mapper,
            request_options=request_options,
        )

    def start_call_analytics_job(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartCallAnalyticsJobErrorBody]:
        """Transcribes the audio from a customer service call and applies any additional Request Parameters you choose
        to include in your request. In addition to many standard transcription features, Call Analytics provides you
        with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript
        and your audio file. You can also apply custom categories to flag specified conditions. To learn more about
        these features and insights, refer to Analyzing call center audio with Call Analytics. If you want to apply
        categories to your Call Analytics job, you must create them before submitting your job request. Categories
        cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call
        Analytics categories, see Creating categories for post-call transcriptions and Creating categories for real-time
        transcriptions. To make a StartCallAnalyticsJob request, you must first upload your media file into an Amazon S3
        bucket; you can then specify the Amazon S3 location of the file using the Media parameter. Job queuing is
        available for Call Analytics jobs. If you pass a DataAccessRoleArn in your request and you exceed your

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartCallAnalyticsJob"),
            headers=[
                param[XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_call_analytics_job_error_mapper,
            request_options=request_options,
        )


class AsyncCallAnalyticsJobApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_call_analytics_job(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteCallAnalyticsJobErrorBody]:
        """Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using
        CallAnalyticsJobName. Job names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteCallAnalyticsJob"),
            headers=[
                param[XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_call_analytics_job_error_mapper,
            request_options=request_options,
        )

    async def get_call_analytics_job(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetCallAnalyticsJobErrorBody]:
        """Provides information about the specified Call Analytics job. To view the job's status, refer to
        CallAnalyticsJobStatus. If the status is COMPLETED, the job is finished. You can find your completed transcript
        at the URI specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your
        transcription job failed. If you enabled personally identifiable information (PII) redaction, the redacted
        transcript appears at the location specified in RedactedTranscriptFileUri. If you chose to redact the audio in
        your media file, you can find your redacted media file at the location specified in RedactedMediaFileUri. To get
        a list of your Call Analytics jobs, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetCallAnalyticsJob"),
            headers=[
                param[XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_call_analytics_job_error_mapper,
            request_options=request_options,
        )

    async def list_call_analytics_jobs(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListCallAnalyticsJobsErrorBody]:
        """Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all
        Call Analytics jobs are returned. To get detailed information about a specific Call Analytics job, use the
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListCallAnalyticsJobs"),
            headers=[
                param[XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_call_analytics_jobs_error_mapper,
            request_options=request_options,
        )

    async def start_call_analytics_job(
        self,
        x_amz_target: XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartCallAnalyticsJobErrorBody]:
        """Transcribes the audio from a customer service call and applies any additional Request Parameters you choose
        to include in your request. In addition to many standard transcription features, Call Analytics provides you
        with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript
        and your audio file. You can also apply custom categories to flag specified conditions. To learn more about
        these features and insights, refer to Analyzing call center audio with Call Analytics. If you want to apply
        categories to your Call Analytics job, you must create them before submitting your job request. Categories
        cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call
        Analytics categories, see Creating categories for post-call transcriptions and Creating categories for real-time
        transcriptions. To make a StartCallAnalyticsJob request, you must first upload your media file into an Amazon S3
        bucket; you can then specify the Amazon S3 location of the file using the Media parameter. Job queuing is
        available for Call Analytics jobs. If you pass a DataAccessRoleArn in your request and you exceed your

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartCallAnalyticsJob"),
            headers=[
                param[XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_call_analytics_job_error_mapper,
            request_options=request_options,
        )
