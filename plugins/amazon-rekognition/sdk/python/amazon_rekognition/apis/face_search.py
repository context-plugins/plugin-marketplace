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
from ..errors.get_face_search_error import GetFaceSearchErrorBody, get_face_search_error_mapper
from ..errors.search_faces_by_image2_error import SearchFacesByImage2ErrorBody, search_faces_by_image2_error_mapper
from ..errors.start_face_search_error import StartFaceSearchErrorBody, start_face_search_error_mapper
from ..models.enums.x_amz_target1_amazon_rekognition_face_search_api import (
    XAmzTarget1AmazonRekognitionFaceSearchApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_rekognition_face_search_api import (
    XAmzTarget2AmazonRekognitionFaceSearchApiOrStr,
)
from ..models.enums.x_amz_target_amazon_rekognition_face_search_api import XAmzTargetAmazonRekognitionFaceSearchApiOrStr
from ..server.server import Server


class FaceSearch:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FaceSearchWithRawResponse(client, server, auth)

    def get_face_search(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFaceSearchApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Gets the face search results for Amazon Rekognition Video face search started by StartFaceSearch. The search
        returns faces in a collection that match the faces of persons detected in a video. It also includes the time(s)
        that faces are matched in the video. Face search in a video is an asynchronous operation. You start face search
        by calling to StartFaceSearch which returns a job identifier (JobId). When the search operation finishes, Amazon
        Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in
        the initial call to StartFaceSearch. To get the search results, first check that the status value published to
        the Amazon SNS topic is SUCCEEDED. If so, call GetFaceSearch and pass the job identifier (JobId) from the
        initial call to StartFaceSearch. For more information, see Searching Faces in a Collection in the Amazon
        Rekognition Developer Guide. The search results are retured in an array, Persons, of PersonMatch objects.
        EachPersonMatch element contains details about the matching faces in the input collection, person information
        (facial attributes, bounding boxes, and person identifer) for the matched person, and the time the person

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
        return unwrap(self._with_raw_response.get_face_search(x_amz_target, request_options=request_options))

    def search_faces_by_image2(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionFaceSearchApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """For a given input image, first detects the largest face in the image, and then searches the specified
        collection for matching faces. The operation compares the features of the input face with faces in the specified
        collection. To search for all faces in an input image, you might first call the IndexFaces operation, and then
        use the face IDs returned in subsequent calls to the SearchFaces operation. You can also call the DetectFaces
        operation and use the bounding boxes in the response to make face crops, which then you can pass in to the
        SearchFacesByImage operation. You pass the input image either as base64-encoded image bytes or as a reference to
        an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image
        bytes is not supported. The image must be either a PNG or JPEG formatted file. The response returns an array of
        faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an
        array of metadata for each face match found. Along with the metadata, the response also includes a similarity
        indicating how similar the face is to the input face. In the response, the operation also returns the bo

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.search_faces_by_image2(x_amz_target, request_options=request_options))

    def start_face_search(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionFaceSearchApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Starts the asynchronous search for faces in a collection that match the faces of persons detected in a stored
        video. The video must be stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of
        the video. StartFaceSearch returns a job identifier (JobId) which you use to get the search results once the
        search has completed. When searching is finished, Amazon Rekognition Video publishes a completion status to the
        Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the search results,
        first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceSearch and
        pass the job identifier (JobId) from the initial call to StartFaceSearch. For more information, see Searching
        stored videos for faces.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; IdempotentParameterMismatchException; InvalidParameterException;
                InvalidS3ObjectException; LimitExceededException; ProvisionedThroughputExceededException;
                ResourceNotFoundException; VideoTooLargeException InternalServerError; ThrottlingException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.start_face_search(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> FaceSearchWithRawResponse:
        return self._with_raw_response


class AsyncFaceSearch:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFaceSearchWithRawResponse(client, server, auth)

    async def get_face_search(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFaceSearchApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Gets the face search results for Amazon Rekognition Video face search started by StartFaceSearch. The search
        returns faces in a collection that match the faces of persons detected in a video. It also includes the time(s)
        that faces are matched in the video. Face search in a video is an asynchronous operation. You start face search
        by calling to StartFaceSearch which returns a job identifier (JobId). When the search operation finishes, Amazon
        Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in
        the initial call to StartFaceSearch. To get the search results, first check that the status value published to
        the Amazon SNS topic is SUCCEEDED. If so, call GetFaceSearch and pass the job identifier (JobId) from the
        initial call to StartFaceSearch. For more information, see Searching Faces in a Collection in the Amazon
        Rekognition Developer Guide. The search results are retured in an array, Persons, of PersonMatch objects.
        EachPersonMatch element contains details about the matching faces in the input collection, person information
        (facial attributes, bounding boxes, and person identifer) for the matched person, and the time the person

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
        return unwrap(await self._with_raw_response.get_face_search(x_amz_target, request_options=request_options))

    async def search_faces_by_image2(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionFaceSearchApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """For a given input image, first detects the largest face in the image, and then searches the specified
        collection for matching faces. The operation compares the features of the input face with faces in the specified
        collection. To search for all faces in an input image, you might first call the IndexFaces operation, and then
        use the face IDs returned in subsequent calls to the SearchFaces operation. You can also call the DetectFaces
        operation and use the bounding boxes in the response to make face crops, which then you can pass in to the
        SearchFacesByImage operation. You pass the input image either as base64-encoded image bytes or as a reference to
        an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image
        bytes is not supported. The image must be either a PNG or JPEG formatted file. The response returns an array of
        faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an
        array of metadata for each face match found. Along with the metadata, the response also includes a similarity
        indicating how similar the face is to the input face. In the response, the operation also returns the bo

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.search_faces_by_image2(x_amz_target, request_options=request_options)
        )

    async def start_face_search(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionFaceSearchApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Starts the asynchronous search for faces in a collection that match the faces of persons detected in a stored
        video. The video must be stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of
        the video. StartFaceSearch returns a job identifier (JobId) which you use to get the search results once the
        search has completed. When searching is finished, Amazon Rekognition Video publishes a completion status to the
        Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the search results,
        first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceSearch and
        pass the job identifier (JobId) from the initial call to StartFaceSearch. For more information, see Searching
        stored videos for faces.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; IdempotentParameterMismatchException; InvalidParameterException;
                InvalidS3ObjectException; LimitExceededException; ProvisionedThroughputExceededException;
                ResourceNotFoundException; VideoTooLargeException InternalServerError; ThrottlingException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.start_face_search(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncFaceSearchWithRawResponse:
        return self._with_raw_response


class FaceSearchWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_face_search(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFaceSearchApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetFaceSearchErrorBody]:
        """Gets the face search results for Amazon Rekognition Video face search started by StartFaceSearch. The search
        returns faces in a collection that match the faces of persons detected in a video. It also includes the time(s)
        that faces are matched in the video. Face search in a video is an asynchronous operation. You start face search
        by calling to StartFaceSearch which returns a job identifier (JobId). When the search operation finishes, Amazon
        Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in
        the initial call to StartFaceSearch. To get the search results, first check that the status value published to
        the Amazon SNS topic is SUCCEEDED. If so, call GetFaceSearch and pass the job identifier (JobId) from the
        initial call to StartFaceSearch. For more information, see Searching Faces in a Collection in the Amazon
        Rekognition Developer Guide. The search results are retured in an array, Persons, of PersonMatch objects.
        EachPersonMatch element contains details about the matching faces in the input collection, person information
        (facial attributes, bounding boxes, and person identifer) for the matched person, and the time the person

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetFaceSearch"),
            headers=[
                param[XAmzTargetAmazonRekognitionFaceSearchApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_face_search_error_mapper,
            request_options=request_options,
        )

    def search_faces_by_image2(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionFaceSearchApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SearchFacesByImage2ErrorBody]:
        """For a given input image, first detects the largest face in the image, and then searches the specified
        collection for matching faces. The operation compares the features of the input face with faces in the specified
        collection. To search for all faces in an input image, you might first call the IndexFaces operation, and then
        use the face IDs returned in subsequent calls to the SearchFaces operation. You can also call the DetectFaces
        operation and use the bounding boxes in the response to make face crops, which then you can pass in to the
        SearchFacesByImage operation. You pass the input image either as base64-encoded image bytes or as a reference to
        an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image
        bytes is not supported. The image must be either a PNG or JPEG formatted file. The response returns an array of
        faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an
        array of metadata for each face match found. Along with the metadata, the response also includes a similarity
        indicating how similar the face is to the input face. In the response, the operation also returns the bo

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SearchFacesByImage"),
            headers=[
                param[XAmzTarget2AmazonRekognitionFaceSearchApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=search_faces_by_image2_error_mapper,
            request_options=request_options,
        )

    def start_face_search(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionFaceSearchApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartFaceSearchErrorBody]:
        """Starts the asynchronous search for faces in a collection that match the faces of persons detected in a stored
        video. The video must be stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of
        the video. StartFaceSearch returns a job identifier (JobId) which you use to get the search results once the
        search has completed. When searching is finished, Amazon Rekognition Video publishes a completion status to the
        Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the search results,
        first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceSearch and
        pass the job identifier (JobId) from the initial call to StartFaceSearch. For more information, see Searching
        stored videos for faces.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartFaceSearch"),
            headers=[
                param[XAmzTarget1AmazonRekognitionFaceSearchApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_face_search_error_mapper,
            request_options=request_options,
        )


class AsyncFaceSearchWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_face_search(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFaceSearchApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetFaceSearchErrorBody]:
        """Gets the face search results for Amazon Rekognition Video face search started by StartFaceSearch. The search
        returns faces in a collection that match the faces of persons detected in a video. It also includes the time(s)
        that faces are matched in the video. Face search in a video is an asynchronous operation. You start face search
        by calling to StartFaceSearch which returns a job identifier (JobId). When the search operation finishes, Amazon
        Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in
        the initial call to StartFaceSearch. To get the search results, first check that the status value published to
        the Amazon SNS topic is SUCCEEDED. If so, call GetFaceSearch and pass the job identifier (JobId) from the
        initial call to StartFaceSearch. For more information, see Searching Faces in a Collection in the Amazon
        Rekognition Developer Guide. The search results are retured in an array, Persons, of PersonMatch objects.
        EachPersonMatch element contains details about the matching faces in the input collection, person information
        (facial attributes, bounding boxes, and person identifer) for the matched person, and the time the person

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetFaceSearch"),
            headers=[
                param[XAmzTargetAmazonRekognitionFaceSearchApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_face_search_error_mapper,
            request_options=request_options,
        )

    async def search_faces_by_image2(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionFaceSearchApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SearchFacesByImage2ErrorBody]:
        """For a given input image, first detects the largest face in the image, and then searches the specified
        collection for matching faces. The operation compares the features of the input face with faces in the specified
        collection. To search for all faces in an input image, you might first call the IndexFaces operation, and then
        use the face IDs returned in subsequent calls to the SearchFaces operation. You can also call the DetectFaces
        operation and use the bounding boxes in the response to make face crops, which then you can pass in to the
        SearchFacesByImage operation. You pass the input image either as base64-encoded image bytes or as a reference to
        an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image
        bytes is not supported. The image must be either a PNG or JPEG formatted file. The response returns an array of
        faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an
        array of metadata for each face match found. Along with the metadata, the response also includes a similarity
        indicating how similar the face is to the input face. In the response, the operation also returns the bo

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SearchFacesByImage"),
            headers=[
                param[XAmzTarget2AmazonRekognitionFaceSearchApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=search_faces_by_image2_error_mapper,
            request_options=request_options,
        )

    async def start_face_search(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionFaceSearchApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartFaceSearchErrorBody]:
        """Starts the asynchronous search for faces in a collection that match the faces of persons detected in a stored
        video. The video must be stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of
        the video. StartFaceSearch returns a job identifier (JobId) which you use to get the search results once the
        search has completed. When searching is finished, Amazon Rekognition Video publishes a completion status to the
        Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the search results,
        first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceSearch and
        pass the job identifier (JobId) from the initial call to StartFaceSearch. For more information, see Searching
        stored videos for faces.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartFaceSearch"),
            headers=[
                param[XAmzTarget1AmazonRekognitionFaceSearchApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_face_search_error_mapper,
            request_options=request_options,
        )
