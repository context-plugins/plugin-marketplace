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
from ..errors.get_label_detection_error import GetLabelDetectionErrorBody, get_label_detection_error_mapper
from ..errors.start_label_detection_error import StartLabelDetectionErrorBody, start_label_detection_error_mapper
from ..models.enums.x_amz_target1_amazon_rekognition_stored_video_analysis_api import (
    XAmzTarget1AmazonRekognitionStoredVideoAnalysisApiOrStr,
)
from ..models.enums.x_amz_target_amazon_rekognition_stored_video_analysis_api import (
    XAmzTargetAmazonRekognitionStoredVideoAnalysisApiOrStr,
)
from ..server.server import Server


class StoredVideoAnalysis:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = StoredVideoAnalysisWithRawResponse(client, server, auth)

    def get_label_detection(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionStoredVideoAnalysisApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Gets the label detection results of a Amazon Rekognition Video analysis started by StartLabelDetection. The
        label detection operation is started by a call to StartLabelDetection which returns a job identifier (JobId).
        When the label detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon
        Simple Notification Service topic registered in the initial call to StartlabelDetection. To get the results of
        the label detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED.
        If so, call GetLabelDetection and pass the job identifier (JobId) from the initial call to StartLabelDetection.
        GetLabelDetection returns an array of detected labels (Labels) sorted by the time the labels were detected. You
        can also sort by the label name by specifying NAME for the SortBy input parameter. If there is no NAME
        specified, the default sort is by timestamp. You can select how results are aggregated by using the AggregateBy
        input parameter. The default aggregation method is TIMESTAMPS. You can also aggregate by SEGMENTS, which
        aggregates all instances of labels detected in a given segment. The returned Labels array may include the

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidPaginationTokenException; InvalidParameterException;
                ProvisionedThroughputExceededException; ResourceNotFoundException InternalServerError;
                ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_label_detection(x_amz_target, request_options=request_options))

    def start_label_detection(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionStoredVideoAnalysisApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Starts asynchronous detection of labels in a stored video. Amazon Rekognition Video can detect labels in a
        video. Labels are instances of real-world entities. This includes objects like flower, tree, and table; events
        like wedding, graduation, and birthday party; concepts like landscape, evening, and nature; and activities like
        a person getting out of a car or a person skiing. The video must be stored in an Amazon S3 bucket. Use Video to
        specify the bucket name and the filename of the video. StartLabelDetection returns a job identifier (JobId)
        which you use to get the results of the operation. When label detection is finished, Amazon Rekognition Video
        publishes a completion status to the Amazon Simple Notification Service topic that you specify in
        NotificationChannel. To get the results of the label detection operation, first check that the status value
        published to the Amazon SNS topic is SUCCEEDED. If so, call GetLabelDetection and pass the job identifier
        (JobId) from the initial call to StartLabelDetection. Optional Parameters StartLabelDetection has the
        GENERAL_LABELS Feature applied by default. This feature allows you to provide filtering criteria to the Settings
        parameter. Yo

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; IdempotentParameterMismatchException; InvalidParameterException;
                InvalidS3ObjectException; LimitExceededException; ProvisionedThroughputExceededException;
                VideoTooLargeException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.start_label_detection(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> StoredVideoAnalysisWithRawResponse:
        return self._with_raw_response


class AsyncStoredVideoAnalysis:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncStoredVideoAnalysisWithRawResponse(client, server, auth)

    async def get_label_detection(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionStoredVideoAnalysisApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Gets the label detection results of a Amazon Rekognition Video analysis started by StartLabelDetection. The
        label detection operation is started by a call to StartLabelDetection which returns a job identifier (JobId).
        When the label detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon
        Simple Notification Service topic registered in the initial call to StartlabelDetection. To get the results of
        the label detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED.
        If so, call GetLabelDetection and pass the job identifier (JobId) from the initial call to StartLabelDetection.
        GetLabelDetection returns an array of detected labels (Labels) sorted by the time the labels were detected. You
        can also sort by the label name by specifying NAME for the SortBy input parameter. If there is no NAME
        specified, the default sort is by timestamp. You can select how results are aggregated by using the AggregateBy
        input parameter. The default aggregation method is TIMESTAMPS. You can also aggregate by SEGMENTS, which
        aggregates all instances of labels detected in a given segment. The returned Labels array may include the

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidPaginationTokenException; InvalidParameterException;
                ProvisionedThroughputExceededException; ResourceNotFoundException InternalServerError;
                ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_label_detection(x_amz_target, request_options=request_options))

    async def start_label_detection(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionStoredVideoAnalysisApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Starts asynchronous detection of labels in a stored video. Amazon Rekognition Video can detect labels in a
        video. Labels are instances of real-world entities. This includes objects like flower, tree, and table; events
        like wedding, graduation, and birthday party; concepts like landscape, evening, and nature; and activities like
        a person getting out of a car or a person skiing. The video must be stored in an Amazon S3 bucket. Use Video to
        specify the bucket name and the filename of the video. StartLabelDetection returns a job identifier (JobId)
        which you use to get the results of the operation. When label detection is finished, Amazon Rekognition Video
        publishes a completion status to the Amazon Simple Notification Service topic that you specify in
        NotificationChannel. To get the results of the label detection operation, first check that the status value
        published to the Amazon SNS topic is SUCCEEDED. If so, call GetLabelDetection and pass the job identifier
        (JobId) from the initial call to StartLabelDetection. Optional Parameters StartLabelDetection has the
        GENERAL_LABELS Feature applied by default. This feature allows you to provide filtering criteria to the Settings
        parameter. Yo

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; IdempotentParameterMismatchException; InvalidParameterException;
                InvalidS3ObjectException; LimitExceededException; ProvisionedThroughputExceededException;
                VideoTooLargeException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.start_label_detection(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncStoredVideoAnalysisWithRawResponse:
        return self._with_raw_response


class StoredVideoAnalysisWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_label_detection(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionStoredVideoAnalysisApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetLabelDetectionErrorBody]:
        """Gets the label detection results of a Amazon Rekognition Video analysis started by StartLabelDetection. The
        label detection operation is started by a call to StartLabelDetection which returns a job identifier (JobId).
        When the label detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon
        Simple Notification Service topic registered in the initial call to StartlabelDetection. To get the results of
        the label detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED.
        If so, call GetLabelDetection and pass the job identifier (JobId) from the initial call to StartLabelDetection.
        GetLabelDetection returns an array of detected labels (Labels) sorted by the time the labels were detected. You
        can also sort by the label name by specifying NAME for the SortBy input parameter. If there is no NAME
        specified, the default sort is by timestamp. You can select how results are aggregated by using the AggregateBy
        input parameter. The default aggregation method is TIMESTAMPS. You can also aggregate by SEGMENTS, which
        aggregates all instances of labels detected in a given segment. The returned Labels array may include the

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetLabelDetection"),
            headers=[
                param[XAmzTargetAmazonRekognitionStoredVideoAnalysisApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_label_detection_error_mapper,
            request_options=request_options,
        )

    def start_label_detection(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionStoredVideoAnalysisApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartLabelDetectionErrorBody]:
        """Starts asynchronous detection of labels in a stored video. Amazon Rekognition Video can detect labels in a
        video. Labels are instances of real-world entities. This includes objects like flower, tree, and table; events
        like wedding, graduation, and birthday party; concepts like landscape, evening, and nature; and activities like
        a person getting out of a car or a person skiing. The video must be stored in an Amazon S3 bucket. Use Video to
        specify the bucket name and the filename of the video. StartLabelDetection returns a job identifier (JobId)
        which you use to get the results of the operation. When label detection is finished, Amazon Rekognition Video
        publishes a completion status to the Amazon Simple Notification Service topic that you specify in
        NotificationChannel. To get the results of the label detection operation, first check that the status value
        published to the Amazon SNS topic is SUCCEEDED. If so, call GetLabelDetection and pass the job identifier
        (JobId) from the initial call to StartLabelDetection. Optional Parameters StartLabelDetection has the
        GENERAL_LABELS Feature applied by default. This feature allows you to provide filtering criteria to the Settings
        parameter. Yo

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartLabelDetection"),
            headers=[
                param[XAmzTarget1AmazonRekognitionStoredVideoAnalysisApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_label_detection_error_mapper,
            request_options=request_options,
        )


class AsyncStoredVideoAnalysisWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_label_detection(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionStoredVideoAnalysisApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetLabelDetectionErrorBody]:
        """Gets the label detection results of a Amazon Rekognition Video analysis started by StartLabelDetection. The
        label detection operation is started by a call to StartLabelDetection which returns a job identifier (JobId).
        When the label detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon
        Simple Notification Service topic registered in the initial call to StartlabelDetection. To get the results of
        the label detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED.
        If so, call GetLabelDetection and pass the job identifier (JobId) from the initial call to StartLabelDetection.
        GetLabelDetection returns an array of detected labels (Labels) sorted by the time the labels were detected. You
        can also sort by the label name by specifying NAME for the SortBy input parameter. If there is no NAME
        specified, the default sort is by timestamp. You can select how results are aggregated by using the AggregateBy
        input parameter. The default aggregation method is TIMESTAMPS. You can also aggregate by SEGMENTS, which
        aggregates all instances of labels detected in a given segment. The returned Labels array may include the

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetLabelDetection"),
            headers=[
                param[XAmzTargetAmazonRekognitionStoredVideoAnalysisApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_label_detection_error_mapper,
            request_options=request_options,
        )

    async def start_label_detection(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionStoredVideoAnalysisApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartLabelDetectionErrorBody]:
        """Starts asynchronous detection of labels in a stored video. Amazon Rekognition Video can detect labels in a
        video. Labels are instances of real-world entities. This includes objects like flower, tree, and table; events
        like wedding, graduation, and birthday party; concepts like landscape, evening, and nature; and activities like
        a person getting out of a car or a person skiing. The video must be stored in an Amazon S3 bucket. Use Video to
        specify the bucket name and the filename of the video. StartLabelDetection returns a job identifier (JobId)
        which you use to get the results of the operation. When label detection is finished, Amazon Rekognition Video
        publishes a completion status to the Amazon Simple Notification Service topic that you specify in
        NotificationChannel. To get the results of the label detection operation, first check that the status value
        published to the Amazon SNS topic is SUCCEEDED. If so, call GetLabelDetection and pass the job identifier
        (JobId) from the initial call to StartLabelDetection. Optional Parameters StartLabelDetection has the
        GENERAL_LABELS Feature applied by default. This feature allows you to provide filtering criteria to the Settings
        parameter. Yo

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartLabelDetection"),
            headers=[
                param[XAmzTarget1AmazonRekognitionStoredVideoAnalysisApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_label_detection_error_mapper,
            request_options=request_options,
        )
