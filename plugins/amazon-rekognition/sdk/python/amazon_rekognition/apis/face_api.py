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
from ..errors.associate_faces_error import AssociateFacesErrorBody, associate_faces_error_mapper
from ..errors.delete_faces_error import DeleteFacesErrorBody, delete_faces_error_mapper
from ..errors.disassociate_faces_error import DisassociateFacesErrorBody, disassociate_faces_error_mapper
from ..errors.list_faces_error import ListFacesErrorBody, list_faces_error_mapper
from ..errors.search_faces_by_image_error import SearchFacesByImageErrorBody, search_faces_by_image_error_mapper
from ..errors.search_faces_error import SearchFacesErrorBody, search_faces_error_mapper
from ..models.enums.x_amz_target1_amazon_rekognition_face_api import XAmzTarget1AmazonRekognitionFaceApiOrStr
from ..models.enums.x_amz_target2_amazon_rekognition_face_api import XAmzTarget2AmazonRekognitionFaceApiOrStr
from ..models.enums.x_amz_target3 import XAmzTarget3OrStr
from ..models.enums.x_amz_target4 import XAmzTarget4OrStr
from ..models.enums.x_amz_target5 import XAmzTarget5OrStr
from ..models.enums.x_amz_target_amazon_rekognition_face_api import XAmzTargetAmazonRekognitionFaceApiOrStr
from ..server.server import Server


class FaceApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FaceApiWithRawResponse(client, server, auth)

    def associate_faces(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFaceApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Associates one or more faces with an existing UserID. Takes an array of FaceIds. Each FaceId that are present
        in the FaceIds list is associated with the provided UserID. The number of FaceIds that can be used as input in a
        single request is limited to 100. Note that the total number of faces that can be associated with a single
        UserID is also limited to 100. Once a UserID has 100 faces associated with it, no additional faces can be added.
        If more API calls are made after the limit is reached, a ServiceQuotaExceededException will result. The
        UserMatchThreshold parameter specifies the minimum user match confidence required for the face to be associated
        with a UserID that has at least one FaceID already associated. This ensures that the FaceIds are associated with
        the right UserID. The value ranges from 0-100 and default value is 75. If successful, an array of AssociatedFace
        objects containing the associated FaceIds is returned. If a given face is already associated with the given
        UserID, it will be ignored and will not be returned in the response. If a given face is already associated to a
        different UserID, isn't found in the collection, doesn’t meet the UserMatchThreshold, or there

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ConflictException; IdempotentParameterMismatchException;
                InvalidParameterException; ProvisionedThroughputExceededException; ResourceNotFoundException;
                ServiceQuotaExceededException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.associate_faces(x_amz_target, request_options=request_options))

    def delete_faces(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionFaceApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes faces from a collection. You specify a collection ID and an array of face IDs to remove from the
        collection. This operation requires permissions to perform the rekognition:DeleteFaces action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_faces(x_amz_target, request_options=request_options))

    def disassociate_faces(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionFaceApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Removes the association between a Face supplied in an array of FaceIds and the User. If the User is not
        present already, then a ResourceNotFound exception is thrown. If successful, an array of faces that are
        disassociated from the User is returned. If a given face is already disassociated from the given UserID, it will
        be ignored and not be returned in the response. If a given face is already associated with a different User or
        not found in the collection it will be returned as part of UnsuccessfulDisassociations. You can remove 1 - 100
        face IDs from a user at one time.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ConflictException; IdempotentParameterMismatchException;
                InvalidParameterException; ProvisionedThroughputExceededException; ResourceNotFoundException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.disassociate_faces(x_amz_target, request_options=request_options))

    def list_faces(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns metadata for faces in the specified collection. This metadata includes information such as the
        bounding box coordinates, the confidence (that the bounding box contains a face), and face ID. For an example,
        see Listing Faces in a Collection in the Amazon Rekognition Developer Guide. This operation requires permissions
        to perform the rekognition:ListFaces action.

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
        return unwrap(self._with_raw_response.list_faces(x_amz_target, request_options=request_options))

    def search_faces(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """For a given input face ID, searches for matching faces in the collection the face belongs to. You get a face
        ID when you add a face to the collection using the IndexFaces operation. The operation compares the features of
        the input face with faces in the specified collection. You can also search faces without indexing faces by using
        the SearchFacesByImage operation. The operation response returns an array of faces that match, ordered by
        similarity score with the highest similarity first. More specifically, it is an array of metadata for each face
        match that is found. Along with the metadata, the response also includes a confidence value for each face match,
        indicating the confidence that the specific face matches the input face. For an example, see Searching for a
        face using its face ID in the Amazon Rekognition Developer Guide. This operation requires permissions to perform
        the rekognition:SearchFaces action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.search_faces(x_amz_target, request_options=request_options))

    def search_faces_by_image(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None
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
        return unwrap(self._with_raw_response.search_faces_by_image(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> FaceApiWithRawResponse:
        return self._with_raw_response


class AsyncFaceApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFaceApiWithRawResponse(client, server, auth)

    async def associate_faces(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFaceApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Associates one or more faces with an existing UserID. Takes an array of FaceIds. Each FaceId that are present
        in the FaceIds list is associated with the provided UserID. The number of FaceIds that can be used as input in a
        single request is limited to 100. Note that the total number of faces that can be associated with a single
        UserID is also limited to 100. Once a UserID has 100 faces associated with it, no additional faces can be added.
        If more API calls are made after the limit is reached, a ServiceQuotaExceededException will result. The
        UserMatchThreshold parameter specifies the minimum user match confidence required for the face to be associated
        with a UserID that has at least one FaceID already associated. This ensures that the FaceIds are associated with
        the right UserID. The value ranges from 0-100 and default value is 75. If successful, an array of AssociatedFace
        objects containing the associated FaceIds is returned. If a given face is already associated with the given
        UserID, it will be ignored and will not be returned in the response. If a given face is already associated to a
        different UserID, isn't found in the collection, doesn’t meet the UserMatchThreshold, or there

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ConflictException; IdempotentParameterMismatchException;
                InvalidParameterException; ProvisionedThroughputExceededException; ResourceNotFoundException;
                ServiceQuotaExceededException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.associate_faces(x_amz_target, request_options=request_options))

    async def delete_faces(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionFaceApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes faces from a collection. You specify a collection ID and an array of face IDs to remove from the
        collection. This operation requires permissions to perform the rekognition:DeleteFaces action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_faces(x_amz_target, request_options=request_options))

    async def disassociate_faces(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionFaceApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Removes the association between a Face supplied in an array of FaceIds and the User. If the User is not
        present already, then a ResourceNotFound exception is thrown. If successful, an array of faces that are
        disassociated from the User is returned. If a given face is already disassociated from the given UserID, it will
        be ignored and not be returned in the response. If a given face is already associated with a different User or
        not found in the collection it will be returned as part of UnsuccessfulDisassociations. You can remove 1 - 100
        face IDs from a user at one time.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ConflictException; IdempotentParameterMismatchException;
                InvalidParameterException; ProvisionedThroughputExceededException; ResourceNotFoundException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.disassociate_faces(x_amz_target, request_options=request_options))

    async def list_faces(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns metadata for faces in the specified collection. This metadata includes information such as the
        bounding box coordinates, the confidence (that the bounding box contains a face), and face ID. For an example,
        see Listing Faces in a Collection in the Amazon Rekognition Developer Guide. This operation requires permissions
        to perform the rekognition:ListFaces action.

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
        return unwrap(await self._with_raw_response.list_faces(x_amz_target, request_options=request_options))

    async def search_faces(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """For a given input face ID, searches for matching faces in the collection the face belongs to. You get a face
        ID when you add a face to the collection using the IndexFaces operation. The operation compares the features of
        the input face with faces in the specified collection. You can also search faces without indexing faces by using
        the SearchFacesByImage operation. The operation response returns an array of faces that match, ordered by
        similarity score with the highest similarity first. More specifically, it is an array of metadata for each face
        match that is found. Along with the metadata, the response also includes a confidence value for each face match,
        indicating the confidence that the specific face matches the input face. For an example, see Searching for a
        face using its face ID in the Amazon Rekognition Developer Guide. This operation requires permissions to perform
        the rekognition:SearchFaces action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.search_faces(x_amz_target, request_options=request_options))

    async def search_faces_by_image(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
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
            await self._with_raw_response.search_faces_by_image(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncFaceApiWithRawResponse:
        return self._with_raw_response


class FaceApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def associate_faces(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFaceApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AssociateFacesErrorBody]:
        """Associates one or more faces with an existing UserID. Takes an array of FaceIds. Each FaceId that are present
        in the FaceIds list is associated with the provided UserID. The number of FaceIds that can be used as input in a
        single request is limited to 100. Note that the total number of faces that can be associated with a single
        UserID is also limited to 100. Once a UserID has 100 faces associated with it, no additional faces can be added.
        If more API calls are made after the limit is reached, a ServiceQuotaExceededException will result. The
        UserMatchThreshold parameter specifies the minimum user match confidence required for the face to be associated
        with a UserID that has at least one FaceID already associated. This ensures that the FaceIds are associated with
        the right UserID. The value ranges from 0-100 and default value is 75. If successful, an array of AssociatedFace
        objects containing the associated FaceIds is returned. If a given face is already associated with the given
        UserID, it will be ignored and will not be returned in the response. If a given face is already associated to a
        different UserID, isn't found in the collection, doesn’t meet the UserMatchThreshold, or there

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AssociateFaces"),
            headers=[
                param[XAmzTargetAmazonRekognitionFaceApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=associate_faces_error_mapper,
            request_options=request_options,
        )

    def delete_faces(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionFaceApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteFacesErrorBody]:
        """Deletes faces from a collection. You specify a collection ID and an array of face IDs to remove from the
        collection. This operation requires permissions to perform the rekognition:DeleteFaces action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteFaces"),
            headers=[
                param[XAmzTarget1AmazonRekognitionFaceApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_faces_error_mapper,
            request_options=request_options,
        )

    def disassociate_faces(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionFaceApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DisassociateFacesErrorBody]:
        """Removes the association between a Face supplied in an array of FaceIds and the User. If the User is not
        present already, then a ResourceNotFound exception is thrown. If successful, an array of faces that are
        disassociated from the User is returned. If a given face is already disassociated from the given UserID, it will
        be ignored and not be returned in the response. If a given face is already associated with a different User or
        not found in the collection it will be returned as part of UnsuccessfulDisassociations. You can remove 1 - 100
        face IDs from a user at one time.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DisassociateFaces"),
            headers=[
                param[XAmzTarget2AmazonRekognitionFaceApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=disassociate_faces_error_mapper,
            request_options=request_options,
        )

    def list_faces(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListFacesErrorBody]:
        """Returns metadata for faces in the specified collection. This metadata includes information such as the
        bounding box coordinates, the confidence (that the bounding box contains a face), and face ID. For an example,
        see Listing Faces in a Collection in the Amazon Rekognition Developer Guide. This operation requires permissions
        to perform the rekognition:ListFaces action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListFaces"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_faces_error_mapper,
            request_options=request_options,
        )

    def search_faces(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, SearchFacesErrorBody]:
        """For a given input face ID, searches for matching faces in the collection the face belongs to. You get a face
        ID when you add a face to the collection using the IndexFaces operation. The operation compares the features of
        the input face with faces in the specified collection. You can also search faces without indexing faces by using
        the SearchFacesByImage operation. The operation response returns an array of faces that match, ordered by
        similarity score with the highest similarity first. More specifically, it is an array of metadata for each face
        match that is found. Along with the metadata, the response also includes a confidence value for each face match,
        indicating the confidence that the specific face matches the input face. For an example, see Searching for a
        face using its face ID in the Amazon Rekognition Developer Guide. This operation requires permissions to perform
        the rekognition:SearchFaces action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SearchFaces"),
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=search_faces_error_mapper,
            request_options=request_options,
        )

    def search_faces_by_image(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, SearchFacesByImageErrorBody]:
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
            headers=[param[XAmzTarget5OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=search_faces_by_image_error_mapper,
            request_options=request_options,
        )


class AsyncFaceApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def associate_faces(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFaceApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AssociateFacesErrorBody]:
        """Associates one or more faces with an existing UserID. Takes an array of FaceIds. Each FaceId that are present
        in the FaceIds list is associated with the provided UserID. The number of FaceIds that can be used as input in a
        single request is limited to 100. Note that the total number of faces that can be associated with a single
        UserID is also limited to 100. Once a UserID has 100 faces associated with it, no additional faces can be added.
        If more API calls are made after the limit is reached, a ServiceQuotaExceededException will result. The
        UserMatchThreshold parameter specifies the minimum user match confidence required for the face to be associated
        with a UserID that has at least one FaceID already associated. This ensures that the FaceIds are associated with
        the right UserID. The value ranges from 0-100 and default value is 75. If successful, an array of AssociatedFace
        objects containing the associated FaceIds is returned. If a given face is already associated with the given
        UserID, it will be ignored and will not be returned in the response. If a given face is already associated to a
        different UserID, isn't found in the collection, doesn’t meet the UserMatchThreshold, or there

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AssociateFaces"),
            headers=[
                param[XAmzTargetAmazonRekognitionFaceApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=associate_faces_error_mapper,
            request_options=request_options,
        )

    async def delete_faces(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionFaceApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteFacesErrorBody]:
        """Deletes faces from a collection. You specify a collection ID and an array of face IDs to remove from the
        collection. This operation requires permissions to perform the rekognition:DeleteFaces action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteFaces"),
            headers=[
                param[XAmzTarget1AmazonRekognitionFaceApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_faces_error_mapper,
            request_options=request_options,
        )

    async def disassociate_faces(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionFaceApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DisassociateFacesErrorBody]:
        """Removes the association between a Face supplied in an array of FaceIds and the User. If the User is not
        present already, then a ResourceNotFound exception is thrown. If successful, an array of faces that are
        disassociated from the User is returned. If a given face is already disassociated from the given UserID, it will
        be ignored and not be returned in the response. If a given face is already associated with a different User or
        not found in the collection it will be returned as part of UnsuccessfulDisassociations. You can remove 1 - 100
        face IDs from a user at one time.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DisassociateFaces"),
            headers=[
                param[XAmzTarget2AmazonRekognitionFaceApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=disassociate_faces_error_mapper,
            request_options=request_options,
        )

    async def list_faces(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListFacesErrorBody]:
        """Returns metadata for faces in the specified collection. This metadata includes information such as the
        bounding box coordinates, the confidence (that the bounding box contains a face), and face ID. For an example,
        see Listing Faces in a Collection in the Amazon Rekognition Developer Guide. This operation requires permissions
        to perform the rekognition:ListFaces action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListFaces"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_faces_error_mapper,
            request_options=request_options,
        )

    async def search_faces(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, SearchFacesErrorBody]:
        """For a given input face ID, searches for matching faces in the collection the face belongs to. You get a face
        ID when you add a face to the collection using the IndexFaces operation. The operation compares the features of
        the input face with faces in the specified collection. You can also search faces without indexing faces by using
        the SearchFacesByImage operation. The operation response returns an array of faces that match, ordered by
        similarity score with the highest similarity first. More specifically, it is an array of metadata for each face
        match that is found. Along with the metadata, the response also includes a confidence value for each face match,
        indicating the confidence that the specific face matches the input face. For an example, see Searching for a
        face using its face ID in the Amazon Rekognition Developer Guide. This operation requires permissions to perform
        the rekognition:SearchFaces action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SearchFaces"),
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=search_faces_error_mapper,
            request_options=request_options,
        )

    async def search_faces_by_image(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, SearchFacesByImageErrorBody]:
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
            headers=[param[XAmzTarget5OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=search_faces_by_image_error_mapper,
            request_options=request_options,
        )
