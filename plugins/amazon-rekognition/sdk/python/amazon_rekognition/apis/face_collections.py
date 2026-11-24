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
from ..errors.create_collection_error import CreateCollectionErrorBody, create_collection_error_mapper
from ..errors.index_faces_error import IndexFacesErrorBody, index_faces_error_mapper
from ..errors.list_collections_error import ListCollectionsErrorBody, list_collections_error_mapper
from ..models.enums.x_amz_target1_amazon_rekognition_face_collections_api import (
    XAmzTarget1AmazonRekognitionFaceCollectionsApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_rekognition_face_collections_api import (
    XAmzTarget2AmazonRekognitionFaceCollectionsApiOrStr,
)
from ..models.enums.x_amz_target_amazon_rekognition_face_collections_api import (
    XAmzTargetAmazonRekognitionFaceCollectionsApiOrStr,
)
from ..server.server import Server


class FaceCollections:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FaceCollectionsWithRawResponse(client, server, auth)

    def create_collection(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionFaceCollectionsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a collection in an AWS Region. You can add faces to the collection using the IndexFaces operation.
        For example, you might create collections, one for each of your application users. A user can then index faces
        using the IndexFaces operation and persist results in a specific collection. Then, a user can search the
        collection for faces in the user-specific container. When you create a collection, it is associated with the
        latest version of the face model version. Collection names are case-sensitive. This operation requires
        permissions to perform the rekognition:CreateCollection action. If you want to tag your collection, you also
        require permission to perform the rekognition:TagResource operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceAlreadyExistsException; ServiceQuotaExceededException InternalServerError; ThrottlingException
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_collection(x_amz_target, request_options=request_options))

    def index_faces(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFaceCollectionsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Detects faces in the input image and adds them to the specified collection. Amazon Rekognition doesn't save
        the actual faces that are detected. Instead, the underlying detection algorithm first detects the faces in the
        input image. For each face, the algorithm extracts facial features into a feature vector, and stores it in the
        backend database. Amazon Rekognition uses feature vectors when it performs face match and search operations
        using the SearchFaces and SearchFacesByImage operations. For more information, see Adding faces to a collection
        in the Amazon Rekognition Developer Guide. To get the number of faces in a collection, call DescribeCollection.
        If you're using version 1.0 of the face detection model, IndexFaces indexes the 15 largest faces in the input
        image. Later versions of the face detection model index the 100 largest faces in the input image. If you're
        using version 4 or later of the face model, image orientation information is not returned in the
        OrientationCorrection field. To determine which version of the model you're using, call DescribeCollection and
        supply the collection ID. You can also get the model version from the value of FaceModelVersion in the response

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException;
                ResourceNotFoundException; ServiceQuotaExceededException InternalServerError; ThrottlingException
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.index_faces(x_amz_target, request_options=request_options))

    def list_collections(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionFaceCollectionsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns list of collection IDs in your account. If the result is truncated, the response also provides a
        NextToken that you can use in the subsequent request to fetch the next set of collection IDs. For an example,
        see Listing collections in the Amazon Rekognition Developer Guide. This operation requires permissions to
        perform the rekognition:ListCollections action.

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
        return unwrap(self._with_raw_response.list_collections(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> FaceCollectionsWithRawResponse:
        return self._with_raw_response


class AsyncFaceCollections:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFaceCollectionsWithRawResponse(client, server, auth)

    async def create_collection(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionFaceCollectionsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a collection in an AWS Region. You can add faces to the collection using the IndexFaces operation.
        For example, you might create collections, one for each of your application users. A user can then index faces
        using the IndexFaces operation and persist results in a specific collection. Then, a user can search the
        collection for faces in the user-specific container. When you create a collection, it is associated with the
        latest version of the face model version. Collection names are case-sensitive. This operation requires
        permissions to perform the rekognition:CreateCollection action. If you want to tag your collection, you also
        require permission to perform the rekognition:TagResource operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceAlreadyExistsException; ServiceQuotaExceededException InternalServerError; ThrottlingException
                ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_collection(x_amz_target, request_options=request_options))

    async def index_faces(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFaceCollectionsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Detects faces in the input image and adds them to the specified collection. Amazon Rekognition doesn't save
        the actual faces that are detected. Instead, the underlying detection algorithm first detects the faces in the
        input image. For each face, the algorithm extracts facial features into a feature vector, and stores it in the
        backend database. Amazon Rekognition uses feature vectors when it performs face match and search operations
        using the SearchFaces and SearchFacesByImage operations. For more information, see Adding faces to a collection
        in the Amazon Rekognition Developer Guide. To get the number of faces in a collection, call DescribeCollection.
        If you're using version 1.0 of the face detection model, IndexFaces indexes the 15 largest faces in the input
        image. Later versions of the face detection model index the 100 largest faces in the input image. If you're
        using version 4 or later of the face model, image orientation information is not returned in the
        OrientationCorrection field. To determine which version of the model you're using, call DescribeCollection and
        supply the collection ID. You can also get the model version from the value of FaceModelVersion in the response

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException;
                ResourceNotFoundException; ServiceQuotaExceededException InternalServerError; ThrottlingException
                ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.index_faces(x_amz_target, request_options=request_options))

    async def list_collections(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionFaceCollectionsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns list of collection IDs in your account. If the result is truncated, the response also provides a
        NextToken that you can use in the subsequent request to fetch the next set of collection IDs. For an example,
        see Listing collections in the Amazon Rekognition Developer Guide. This operation requires permissions to
        perform the rekognition:ListCollections action.

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
        return unwrap(await self._with_raw_response.list_collections(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncFaceCollectionsWithRawResponse:
        return self._with_raw_response


class FaceCollectionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_collection(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionFaceCollectionsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateCollectionErrorBody]:
        """Creates a collection in an AWS Region. You can add faces to the collection using the IndexFaces operation.
        For example, you might create collections, one for each of your application users. A user can then index faces
        using the IndexFaces operation and persist results in a specific collection. Then, a user can search the
        collection for faces in the user-specific container. When you create a collection, it is associated with the
        latest version of the face model version. Collection names are case-sensitive. This operation requires
        permissions to perform the rekognition:CreateCollection action. If you want to tag your collection, you also
        require permission to perform the rekognition:TagResource operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateCollection"),
            headers=[
                param[XAmzTarget1AmazonRekognitionFaceCollectionsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_collection_error_mapper,
            request_options=request_options,
        )

    def index_faces(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFaceCollectionsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, IndexFacesErrorBody]:
        """Detects faces in the input image and adds them to the specified collection. Amazon Rekognition doesn't save
        the actual faces that are detected. Instead, the underlying detection algorithm first detects the faces in the
        input image. For each face, the algorithm extracts facial features into a feature vector, and stores it in the
        backend database. Amazon Rekognition uses feature vectors when it performs face match and search operations
        using the SearchFaces and SearchFacesByImage operations. For more information, see Adding faces to a collection
        in the Amazon Rekognition Developer Guide. To get the number of faces in a collection, call DescribeCollection.
        If you're using version 1.0 of the face detection model, IndexFaces indexes the 15 largest faces in the input
        image. Later versions of the face detection model index the 100 largest faces in the input image. If you're
        using version 4 or later of the face model, image orientation information is not returned in the
        OrientationCorrection field. To determine which version of the model you're using, call DescribeCollection and
        supply the collection ID. You can also get the model version from the value of FaceModelVersion in the response

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#IndexFaces"),
            headers=[
                param[XAmzTargetAmazonRekognitionFaceCollectionsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=index_faces_error_mapper,
            request_options=request_options,
        )

    def list_collections(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionFaceCollectionsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListCollectionsErrorBody]:
        """Returns list of collection IDs in your account. If the result is truncated, the response also provides a
        NextToken that you can use in the subsequent request to fetch the next set of collection IDs. For an example,
        see Listing collections in the Amazon Rekognition Developer Guide. This operation requires permissions to
        perform the rekognition:ListCollections action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListCollections"),
            headers=[
                param[XAmzTarget2AmazonRekognitionFaceCollectionsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_collections_error_mapper,
            request_options=request_options,
        )


class AsyncFaceCollectionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_collection(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionFaceCollectionsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateCollectionErrorBody]:
        """Creates a collection in an AWS Region. You can add faces to the collection using the IndexFaces operation.
        For example, you might create collections, one for each of your application users. A user can then index faces
        using the IndexFaces operation and persist results in a specific collection. Then, a user can search the
        collection for faces in the user-specific container. When you create a collection, it is associated with the
        latest version of the face model version. Collection names are case-sensitive. This operation requires
        permissions to perform the rekognition:CreateCollection action. If you want to tag your collection, you also
        require permission to perform the rekognition:TagResource operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateCollection"),
            headers=[
                param[XAmzTarget1AmazonRekognitionFaceCollectionsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_collection_error_mapper,
            request_options=request_options,
        )

    async def index_faces(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFaceCollectionsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, IndexFacesErrorBody]:
        """Detects faces in the input image and adds them to the specified collection. Amazon Rekognition doesn't save
        the actual faces that are detected. Instead, the underlying detection algorithm first detects the faces in the
        input image. For each face, the algorithm extracts facial features into a feature vector, and stores it in the
        backend database. Amazon Rekognition uses feature vectors when it performs face match and search operations
        using the SearchFaces and SearchFacesByImage operations. For more information, see Adding faces to a collection
        in the Amazon Rekognition Developer Guide. To get the number of faces in a collection, call DescribeCollection.
        If you're using version 1.0 of the face detection model, IndexFaces indexes the 15 largest faces in the input
        image. Later versions of the face detection model index the 100 largest faces in the input image. If you're
        using version 4 or later of the face model, image orientation information is not returned in the
        OrientationCorrection field. To determine which version of the model you're using, call DescribeCollection and
        supply the collection ID. You can also get the model version from the value of FaceModelVersion in the response

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#IndexFaces"),
            headers=[
                param[XAmzTargetAmazonRekognitionFaceCollectionsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=index_faces_error_mapper,
            request_options=request_options,
        )

    async def list_collections(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionFaceCollectionsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListCollectionsErrorBody]:
        """Returns list of collection IDs in your account. If the result is truncated, the response also provides a
        NextToken that you can use in the subsequent request to fetch the next set of collection IDs. For an example,
        see Listing collections in the Amazon Rekognition Developer Guide. This operation requires permissions to
        perform the rekognition:ListCollections action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListCollections"),
            headers=[
                param[XAmzTarget2AmazonRekognitionFaceCollectionsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_collections_error_mapper,
            request_options=request_options,
        )
