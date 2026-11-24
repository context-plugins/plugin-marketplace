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
from ..errors.create_stream_processor_error import CreateStreamProcessorErrorBody, create_stream_processor_error_mapper
from ..errors.delete_stream_processor_error import DeleteStreamProcessorErrorBody, delete_stream_processor_error_mapper
from ..errors.describe_stream_processor_error import (
    DescribeStreamProcessorErrorBody,
    describe_stream_processor_error_mapper,
)
from ..errors.list_stream_processors_error import ListStreamProcessorsErrorBody, list_stream_processors_error_mapper
from ..errors.start_stream_processor_error import StartStreamProcessorErrorBody, start_stream_processor_error_mapper
from ..errors.stop_stream_processor_error import StopStreamProcessorErrorBody, stop_stream_processor_error_mapper
from ..errors.update_stream_processor_error import UpdateStreamProcessorErrorBody, update_stream_processor_error_mapper
from ..models.enums.x_amz_target1_amazon_rekognition_stream_processor_api import (
    XAmzTarget1AmazonRekognitionStreamProcessorApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_rekognition_stream_processor_api import (
    XAmzTarget2AmazonRekognitionStreamProcessorApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_rekognition_stream_processor_api import (
    XAmzTarget3AmazonRekognitionStreamProcessorApiOrStr,
)
from ..models.enums.x_amz_target4_amazon_rekognition_stream_processor_api import (
    XAmzTarget4AmazonRekognitionStreamProcessorApiOrStr,
)
from ..models.enums.x_amz_target5_amazon_rekognition_stream_processor_api import (
    XAmzTarget5AmazonRekognitionStreamProcessorApiOrStr,
)
from ..models.enums.x_amz_target6_amazon_rekognition_stream_processor_api import (
    XAmzTarget6AmazonRekognitionStreamProcessorApiOrStr,
)
from ..models.enums.x_amz_target_amazon_rekognition_stream_processor_api import (
    XAmzTargetAmazonRekognitionStreamProcessorApiOrStr,
)
from ..server.server import Server


class StreamProcessorApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = StreamProcessorApiWithRawResponse(client, server, auth)

    def create_stream_processor(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Creates an Amazon Rekognition stream processor that you can use to detect
        and recognize faces or to detect labels in a streaming video. Amazon Rekognition Video is a consumer of live
        video from Amazon Kinesis Video Streams. There are two different settings for stream processors in Amazon
        Rekognition: detecting faces and detecting labels. If you are creating a stream processor for detecting faces,
        you provide as input a Kinesis video stream (Input) and a Kinesis data stream (Output) stream for receiving the
        output. You must use the FaceSearch option in Settings, specifying the collection that contains the faces you
        want to recognize. After you have finished analyzing a streaming video, use StopStreamProcessor to stop
        processing. If you are creating a stream processor to detect labels, you provide as input a Kinesis video stream
        (Input), Amazon S3 bucket information (Output), and an Amazon SNS topic ARN (NotificationChannel). Y

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; LimitExceededException;
                ProvisionedThroughputExceededException; ResourceInUseException; ServiceQuotaExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_stream_processor(x_amz_target, request_options=request_options))

    def delete_stream_processor(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Deletes the stream processor identified by Name. You assign the value for
        Name when you create the stream processor with CreateStreamProcessor. You might not be able to use the same name
        for a stream processor for a few seconds after calling DeleteStreamProcessor.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceInUseException; ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.delete_stream_processor(x_amz_target, request_options=request_options))

    def describe_stream_processor(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Provides information about a stream processor created by
        CreateStreamProcessor. You can get information about the input and output streams, the input parameters for the
        face recognition being performed, and the current status of the stream processor.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_stream_processor(x_amz_target, request_options=request_options))

    def list_stream_processors(
        self,
        x_amz_target: XAmzTarget3AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Gets a list of stream processors that you have created with
        CreateStreamProcessor.

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
        return unwrap(self._with_raw_response.list_stream_processors(x_amz_target, request_options=request_options))

    def start_stream_processor(
        self,
        x_amz_target: XAmzTarget4AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Starts processing a stream processor. You create a stream processor by
        calling CreateStreamProcessor. To tell StartStreamProcessor which stream processor to start, use the value of
        the Name field specified in the call to CreateStreamProcessor. If you are using a label detection stream
        processor to detect labels, you need to provide a Start selector and a Stop selector to determine the length of
        the stream processing time.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceInUseException; ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.start_stream_processor(x_amz_target, request_options=request_options))

    def stop_stream_processor(
        self,
        x_amz_target: XAmzTarget5AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Stops a running stream processor that was created by
        CreateStreamProcessor.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceInUseException; ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.stop_stream_processor(x_amz_target, request_options=request_options))

    def update_stream_processor(
        self,
        x_amz_target: XAmzTarget6AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Allows you to update a stream processor. You can change some settings and
        regions of interest and delete certain parameters.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceInUseException; ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.update_stream_processor(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> StreamProcessorApiWithRawResponse:
        return self._with_raw_response


class AsyncStreamProcessorApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncStreamProcessorApiWithRawResponse(client, server, auth)

    async def create_stream_processor(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Creates an Amazon Rekognition stream processor that you can use to detect
        and recognize faces or to detect labels in a streaming video. Amazon Rekognition Video is a consumer of live
        video from Amazon Kinesis Video Streams. There are two different settings for stream processors in Amazon
        Rekognition: detecting faces and detecting labels. If you are creating a stream processor for detecting faces,
        you provide as input a Kinesis video stream (Input) and a Kinesis data stream (Output) stream for receiving the
        output. You must use the FaceSearch option in Settings, specifying the collection that contains the faces you
        want to recognize. After you have finished analyzing a streaming video, use StopStreamProcessor to stop
        processing. If you are creating a stream processor to detect labels, you provide as input a Kinesis video stream
        (Input), Amazon S3 bucket information (Output), and an Amazon SNS topic ARN (NotificationChannel). Y

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; LimitExceededException;
                ProvisionedThroughputExceededException; ResourceInUseException; ServiceQuotaExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_stream_processor(x_amz_target, request_options=request_options)
        )

    async def delete_stream_processor(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Deletes the stream processor identified by Name. You assign the value for
        Name when you create the stream processor with CreateStreamProcessor. You might not be able to use the same name
        for a stream processor for a few seconds after calling DeleteStreamProcessor.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceInUseException; ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_stream_processor(x_amz_target, request_options=request_options)
        )

    async def describe_stream_processor(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Provides information about a stream processor created by
        CreateStreamProcessor. You can get information about the input and output streams, the input parameters for the
        face recognition being performed, and the current status of the stream processor.

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
            await self._with_raw_response.describe_stream_processor(x_amz_target, request_options=request_options)
        )

    async def list_stream_processors(
        self,
        x_amz_target: XAmzTarget3AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Gets a list of stream processors that you have created with
        CreateStreamProcessor.

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
            await self._with_raw_response.list_stream_processors(x_amz_target, request_options=request_options)
        )

    async def start_stream_processor(
        self,
        x_amz_target: XAmzTarget4AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Starts processing a stream processor. You create a stream processor by
        calling CreateStreamProcessor. To tell StartStreamProcessor which stream processor to start, use the value of
        the Name field specified in the call to CreateStreamProcessor. If you are using a label detection stream
        processor to detect labels, you need to provide a Start selector and a Stop selector to determine the length of
        the stream processing time.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceInUseException; ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.start_stream_processor(x_amz_target, request_options=request_options)
        )

    async def stop_stream_processor(
        self,
        x_amz_target: XAmzTarget5AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Stops a running stream processor that was created by
        CreateStreamProcessor.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceInUseException; ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.stop_stream_processor(x_amz_target, request_options=request_options)
        )

    async def update_stream_processor(
        self,
        x_amz_target: XAmzTarget6AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Allows you to update a stream processor. You can change some settings and
        regions of interest and delete certain parameters.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceInUseException; ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_stream_processor(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncStreamProcessorApiWithRawResponse:
        return self._with_raw_response


class StreamProcessorApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_stream_processor(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateStreamProcessorErrorBody]:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Creates an Amazon Rekognition stream processor that you can use to detect
        and recognize faces or to detect labels in a streaming video. Amazon Rekognition Video is a consumer of live
        video from Amazon Kinesis Video Streams. There are two different settings for stream processors in Amazon
        Rekognition: detecting faces and detecting labels. If you are creating a stream processor for detecting faces,
        you provide as input a Kinesis video stream (Input) and a Kinesis data stream (Output) stream for receiving the
        output. You must use the FaceSearch option in Settings, specifying the collection that contains the faces you
        want to recognize. After you have finished analyzing a streaming video, use StopStreamProcessor to stop
        processing. If you are creating a stream processor to detect labels, you provide as input a Kinesis video stream
        (Input), Amazon S3 bucket information (Output), and an Amazon SNS topic ARN (NotificationChannel). Y

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateStreamProcessor"),
            headers=[
                param[XAmzTargetAmazonRekognitionStreamProcessorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_stream_processor_error_mapper,
            request_options=request_options,
        )

    def delete_stream_processor(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteStreamProcessorErrorBody]:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Deletes the stream processor identified by Name. You assign the value for
        Name when you create the stream processor with CreateStreamProcessor. You might not be able to use the same name
        for a stream processor for a few seconds after calling DeleteStreamProcessor.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteStreamProcessor"),
            headers=[
                param[XAmzTarget1AmazonRekognitionStreamProcessorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_stream_processor_error_mapper,
            request_options=request_options,
        )

    def describe_stream_processor(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeStreamProcessorErrorBody]:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Provides information about a stream processor created by
        CreateStreamProcessor. You can get information about the input and output streams, the input parameters for the
        face recognition being performed, and the current status of the stream processor.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeStreamProcessor"),
            headers=[
                param[XAmzTarget2AmazonRekognitionStreamProcessorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_stream_processor_error_mapper,
            request_options=request_options,
        )

    def list_stream_processors(
        self,
        x_amz_target: XAmzTarget3AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListStreamProcessorsErrorBody]:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Gets a list of stream processors that you have created with
        CreateStreamProcessor.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListStreamProcessors"),
            headers=[
                param[XAmzTarget3AmazonRekognitionStreamProcessorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_stream_processors_error_mapper,
            request_options=request_options,
        )

    def start_stream_processor(
        self,
        x_amz_target: XAmzTarget4AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartStreamProcessorErrorBody]:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Starts processing a stream processor. You create a stream processor by
        calling CreateStreamProcessor. To tell StartStreamProcessor which stream processor to start, use the value of
        the Name field specified in the call to CreateStreamProcessor. If you are using a label detection stream
        processor to detect labels, you need to provide a Start selector and a Stop selector to determine the length of
        the stream processing time.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartStreamProcessor"),
            headers=[
                param[XAmzTarget4AmazonRekognitionStreamProcessorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_stream_processor_error_mapper,
            request_options=request_options,
        )

    def stop_stream_processor(
        self,
        x_amz_target: XAmzTarget5AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StopStreamProcessorErrorBody]:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Stops a running stream processor that was created by
        CreateStreamProcessor.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopStreamProcessor"),
            headers=[
                param[XAmzTarget5AmazonRekognitionStreamProcessorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=stop_stream_processor_error_mapper,
            request_options=request_options,
        )

    def update_stream_processor(
        self,
        x_amz_target: XAmzTarget6AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateStreamProcessorErrorBody]:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Allows you to update a stream processor. You can change some settings and
        regions of interest and delete certain parameters.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateStreamProcessor"),
            headers=[
                param[XAmzTarget6AmazonRekognitionStreamProcessorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_stream_processor_error_mapper,
            request_options=request_options,
        )


class AsyncStreamProcessorApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_stream_processor(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateStreamProcessorErrorBody]:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Creates an Amazon Rekognition stream processor that you can use to detect
        and recognize faces or to detect labels in a streaming video. Amazon Rekognition Video is a consumer of live
        video from Amazon Kinesis Video Streams. There are two different settings for stream processors in Amazon
        Rekognition: detecting faces and detecting labels. If you are creating a stream processor for detecting faces,
        you provide as input a Kinesis video stream (Input) and a Kinesis data stream (Output) stream for receiving the
        output. You must use the FaceSearch option in Settings, specifying the collection that contains the faces you
        want to recognize. After you have finished analyzing a streaming video, use StopStreamProcessor to stop
        processing. If you are creating a stream processor to detect labels, you provide as input a Kinesis video stream
        (Input), Amazon S3 bucket information (Output), and an Amazon SNS topic ARN (NotificationChannel). Y

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateStreamProcessor"),
            headers=[
                param[XAmzTargetAmazonRekognitionStreamProcessorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_stream_processor_error_mapper,
            request_options=request_options,
        )

    async def delete_stream_processor(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteStreamProcessorErrorBody]:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Deletes the stream processor identified by Name. You assign the value for
        Name when you create the stream processor with CreateStreamProcessor. You might not be able to use the same name
        for a stream processor for a few seconds after calling DeleteStreamProcessor.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteStreamProcessor"),
            headers=[
                param[XAmzTarget1AmazonRekognitionStreamProcessorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_stream_processor_error_mapper,
            request_options=request_options,
        )

    async def describe_stream_processor(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeStreamProcessorErrorBody]:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Provides information about a stream processor created by
        CreateStreamProcessor. You can get information about the input and output streams, the input parameters for the
        face recognition being performed, and the current status of the stream processor.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeStreamProcessor"),
            headers=[
                param[XAmzTarget2AmazonRekognitionStreamProcessorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_stream_processor_error_mapper,
            request_options=request_options,
        )

    async def list_stream_processors(
        self,
        x_amz_target: XAmzTarget3AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListStreamProcessorsErrorBody]:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Gets a list of stream processors that you have created with
        CreateStreamProcessor.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListStreamProcessors"),
            headers=[
                param[XAmzTarget3AmazonRekognitionStreamProcessorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_stream_processors_error_mapper,
            request_options=request_options,
        )

    async def start_stream_processor(
        self,
        x_amz_target: XAmzTarget4AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartStreamProcessorErrorBody]:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Starts processing a stream processor. You create a stream processor by
        calling CreateStreamProcessor. To tell StartStreamProcessor which stream processor to start, use the value of
        the Name field specified in the call to CreateStreamProcessor. If you are using a label detection stream
        processor to detect labels, you need to provide a Start selector and a Stop selector to determine the length of
        the stream processing time.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartStreamProcessor"),
            headers=[
                param[XAmzTarget4AmazonRekognitionStreamProcessorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_stream_processor_error_mapper,
            request_options=request_options,
        )

    async def stop_stream_processor(
        self,
        x_amz_target: XAmzTarget5AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StopStreamProcessorErrorBody]:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Stops a running stream processor that was created by
        CreateStreamProcessor.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopStreamProcessor"),
            headers=[
                param[XAmzTarget5AmazonRekognitionStreamProcessorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=stop_stream_processor_error_mapper,
            request_options=request_options,
        )

    async def update_stream_processor(
        self,
        x_amz_target: XAmzTarget6AmazonRekognitionStreamProcessorApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateStreamProcessorErrorBody]:
        """Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers.
        For more information, see Rekognition feature availability changes. This change does not impact the availability
        of other Amazon Rekognition features. Allows you to update a stream processor. You can change some settings and
        regions of interest and delete certain parameters.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateStreamProcessor"),
            headers=[
                param[XAmzTarget6AmazonRekognitionStreamProcessorApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_stream_processor_error_mapper,
            request_options=request_options,
        )
