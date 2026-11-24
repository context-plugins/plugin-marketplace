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
from ..errors.compare_faces2_error import CompareFaces2ErrorBody, compare_faces2_error_mapper
from ..errors.copy_project_version_error import CopyProjectVersionErrorBody, copy_project_version_error_mapper
from ..errors.delete_collection_error import DeleteCollectionErrorBody, delete_collection_error_mapper
from ..errors.describe_collection_error import DescribeCollectionErrorBody, describe_collection_error_mapper
from ..errors.detect_custom_labels2_error import DetectCustomLabels2ErrorBody, detect_custom_labels2_error_mapper
from ..errors.detect_faces2_error import DetectFaces2ErrorBody, detect_faces2_error_mapper
from ..errors.detect_labels2_error import DetectLabels2ErrorBody, detect_labels2_error_mapper
from ..errors.detect_moderation_labels2_error import (
    DetectModerationLabels2ErrorBody,
    detect_moderation_labels2_error_mapper,
)
from ..errors.detect_protective_equipment_error import (
    DetectProtectiveEquipmentErrorBody,
    detect_protective_equipment_error_mapper,
)
from ..errors.detect_text_error import DetectTextErrorBody, detect_text_error_mapper
from ..errors.distribute_dataset_entries_error import (
    DistributeDatasetEntriesErrorBody,
    distribute_dataset_entries_error_mapper,
)
from ..errors.get_celebrity_info_error import GetCelebrityInfoErrorBody, get_celebrity_info_error_mapper
from ..errors.get_face_detection_error import GetFaceDetectionErrorBody, get_face_detection_error_mapper
from ..errors.get_person_tracking_error import GetPersonTrackingErrorBody, get_person_tracking_error_mapper
from ..errors.get_segment_detection_error import GetSegmentDetectionErrorBody, get_segment_detection_error_mapper
from ..errors.index_faces2_error import IndexFaces2ErrorBody, index_faces2_error_mapper
from ..errors.list_dataset_entries_error import ListDatasetEntriesErrorBody, list_dataset_entries_error_mapper
from ..errors.list_dataset_labels_error import ListDatasetLabelsErrorBody, list_dataset_labels_error_mapper
from ..errors.list_tags_for_resource_error import ListTagsForResourceErrorBody, list_tags_for_resource_error_mapper
from ..errors.recognize_celebrities2_error import RecognizeCelebrities2ErrorBody, recognize_celebrities2_error_mapper
from ..errors.start_face_detection_error import StartFaceDetectionErrorBody, start_face_detection_error_mapper
from ..errors.start_person_tracking_error import StartPersonTrackingErrorBody, start_person_tracking_error_mapper
from ..errors.start_segment_detection_error import StartSegmentDetectionErrorBody, start_segment_detection_error_mapper
from ..errors.tag_resource_error import TagResourceErrorBody, tag_resource_error_mapper
from ..errors.untag_resource_error import UntagResourceErrorBody, untag_resource_error_mapper
from ..errors.update_dataset_entries_error import UpdateDatasetEntriesErrorBody, update_dataset_entries_error_mapper
from ..models.enums.x_amz_target1_amazon_rekognition_operations_api import (
    XAmzTarget1AmazonRekognitionOperationsApiOrStr,
)
from ..models.enums.x_amz_target2 import XAmzTarget2OrStr
from ..models.enums.x_amz_target2_amazon_rekognition_operations_api import (
    XAmzTarget2AmazonRekognitionOperationsApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_rekognition_operations_api import (
    XAmzTarget3AmazonRekognitionOperationsApiOrStr,
)
from ..models.enums.x_amz_target4_amazon_rekognition_operations_api import (
    XAmzTarget4AmazonRekognitionOperationsApiOrStr,
)
from ..models.enums.x_amz_target5_amazon_rekognition_operations_api import (
    XAmzTarget5AmazonRekognitionOperationsApiOrStr,
)
from ..models.enums.x_amz_target6 import XAmzTarget6OrStr
from ..models.enums.x_amz_target7 import XAmzTarget7OrStr
from ..models.enums.x_amz_target8 import XAmzTarget8OrStr
from ..models.enums.x_amz_target9 import XAmzTarget9OrStr
from ..models.enums.x_amz_target11 import XAmzTarget11OrStr
from ..models.enums.x_amz_target12 import XAmzTarget12OrStr
from ..models.enums.x_amz_target13 import XAmzTarget13OrStr
from ..models.enums.x_amz_target14 import XAmzTarget14OrStr
from ..models.enums.x_amz_target15 import XAmzTarget15OrStr
from ..models.enums.x_amz_target16 import XAmzTarget16OrStr
from ..models.enums.x_amz_target17 import XAmzTarget17OrStr
from ..models.enums.x_amz_target18 import XAmzTarget18OrStr
from ..models.enums.x_amz_target19 import XAmzTarget19OrStr
from ..models.enums.x_amz_target20 import XAmzTarget20OrStr
from ..models.enums.x_amz_target21 import XAmzTarget21OrStr
from ..models.enums.x_amz_target22 import XAmzTarget22OrStr
from ..models.enums.x_amz_target23 import XAmzTarget23OrStr
from ..models.enums.x_amz_target24 import XAmzTarget24OrStr
from ..models.enums.x_amz_target25 import XAmzTarget25OrStr
from ..models.enums.x_amz_target_amazon_rekognition_facial_analysis_api import (
    XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr,
)
from ..server.server import Server


class Operations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OperationsWithRawResponse(client, server, auth)

    def compare_faces2(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Compares a face in the source input image with each of the 100 largest faces detected in the target input
        image. If the source image contains multiple faces, the service detects the largest face and compares it with
        each face detected in the target image. CompareFaces uses machine learning algorithms, which are probabilistic.
        A false negative is an incorrect prediction that a face in the target image has a low similarity confidence
        score when compared to the face in the source image. To reduce the probability of false negatives, we recommend
        that you compare the target image against multiple source images. If you plan to use CompareFaces to make a
        decision that impacts an individual's rights, privacy, or access to services, we recommend that you pass the
        result to a human for review and further validation before taking action. You pass the input and target images
        either as base64-encoded image bytes or as references to images in an Amazon S3 bucket. If you use the AWS CLI
        to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG
        or JPEG file. In response, the operation returns an array of face matches ordered by similarity scor

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.compare_faces2(x_amz_target, request_options=request_options))

    def copy_project_version(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Copies a version of an Amazon Rekognition
        Custom Labels model from a source project to a destination project. The source and destination projects can be
        in different AWS accounts but must be in the same AWS Region. You can't copy a model to another AWS service. To
        copy a model version to a different AWS account, you need to create a resource-based policy known as a project
        policy. You attach the project policy to the source project by calling PutProjectPolicy. The project policy
        gives permission to copy the model version from a trusting AWS account to a trusted account. For more
        information creating and attaching a project policy, see Attaching a project policy (SDK) in the Amazon
        Rekognition Custom Labels Developer Guide. If you are copying a model version to a project in the same AWS
        account, you don't need to create a project policy. Copying project versions is supported only for Custom Labels
        models. To copy a model, the destination project, source project, and source model version must already exist.
        Copying a model version takes a while to complete. To get the current status, call DescribeProjectVersions and
        che

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; LimitExceededException;
                ProvisionedThroughputExceededException; ResourceInUseException; ResourceNotFoundException;
                ServiceQuotaExceededException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.copy_project_version(x_amz_target, request_options=request_options))

    def delete_collection(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified collection. Note that this operation removes all faces in the collection. For an
        example, see Deleting a collection. This operation requires permissions to perform the
        rekognition:DeleteCollection action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_collection(x_amz_target, request_options=request_options))

    def describe_collection(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Describes the specified collection. You can use DescribeCollection to get information, such as the number of
        faces indexed into a collection and the version of the model used by the collection for face detection. For more
        information, see Describing a Collection in the Amazon Rekognition Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_collection(x_amz_target, request_options=request_options))

    def detect_custom_labels2(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Detects custom labels in a supplied image by
        using an Amazon Rekognition Custom Labels model. You specify which version of a model version to use by using
        the ProjectVersionArn input parameter. You pass the input image as base64-encoded image bytes or as a reference
        to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image
        bytes is not supported. The image must be either a PNG or JPEG formatted file. For each object that the model
        version detects on an image, the API returns a (CustomLabel) object in an array (CustomLabels). Each CustomLabel
        object provides the label name (Name), the level of confidence that the image contains the object (Confidence),
        and object location information, if it exists, for the label on the image (Geometry). To filter labels that are
        returned, specify a value for MinConfidence. DetectCustomLabelsLabels only returns labels with a confidence
        that's higher than the specified value. The value of MinConfidence maps to the assumed threshold values created
        during training. For more information, see Assumed threshold in the Amazon Rekognition Cu

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; LimitExceededException;
                ProvisionedThroughputExceededException; ResourceNotFoundException; ResourceNotReadyException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_custom_labels2(x_amz_target, request_options=request_options))

    def detect_faces2(
        self,
        x_amz_target: XAmzTarget3AmazonRekognitionOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Detects faces within an image that is provided as input. DetectFaces detects the 100 largest faces in the
        image. For each face detected, the operation returns face details. These details include a bounding box of the
        face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial
        landmarks (for example, coordinates of eye and mouth), pose, presence of facial occlusion, and so on. The
        face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm
        might not detect the faces or might detect faces with lower confidence. You pass the input image either as
        base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call
        Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG
        formatted file. This is a stateless API operation. That is, the operation does not persist any data. This
        operation requires permissions to perform the rekognition:DetectFaces action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_faces2(x_amz_target, request_options=request_options))

    def detect_labels2(
        self,
        x_amz_target: XAmzTarget4AmazonRekognitionOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Detects instances of real-world entities within an image (JPEG or PNG) provided as input. This includes
        objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like
        landscape, evening, and nature. For an example, see Analyzing images stored in an Amazon S3 bucket in the Amazon
        Rekognition Developer Guide. You pass the input image as base64-encoded image bytes or as a reference to an
        image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes
        is not supported. The image must be either a PNG or JPEG formatted file. Optional Parameters You can specify one
        or both of the GENERAL_LABELS and IMAGE_PROPERTIES feature types when calling the DetectLabels API. Including
        GENERAL_LABELS will ensure the response includes the labels detected in the input image, while including
        IMAGE_PROPERTIES will ensure the response includes information about the image quality and color. When using
        GENERAL_LABELS and/or IMAGE_PROPERTIES you can provide filtering criteria to the Settings parameter. You can
        filter with sets of individual labels or with label categories. You can specify inclusive filters, exclusive

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_labels2(x_amz_target, request_options=request_options))

    def detect_moderation_labels2(
        self,
        x_amz_target: XAmzTarget5AmazonRekognitionOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Detects unsafe content in a specified JPEG or PNG format image. Use DetectModerationLabels to moderate images
        depending on your requirements. For example, you might want to filter images that contain nudity, but not images
        containing suggestive content. To filter images, use the labels returned by DetectModerationLabels to determine
        which types of content are appropriate. For information about moderation labels, see Detecting Unsafe Content in
        the Amazon Rekognition Developer Guide. You pass the input image either as base64-encoded image bytes or as a
        reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations,
        passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. You can specify an
        adapter to use when retrieving label predictions by providing a ProjectVersionArn to the ProjectVersion
        argument.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException;
                ResourceNotFoundException; ResourceNotReadyException HumanLoopQuotaExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_moderation_labels2(x_amz_target, request_options=request_options))

    def detect_protective_equipment(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Detects Personal Protective Equipment (PPE) worn by people detected in an image. Amazon Rekognition can
        detect the following types of PPE. Face cover Hand cover Head cover You pass the input image as base64-encoded
        image bytes or as a reference to an image in an Amazon S3 bucket. The image must be either a PNG or JPG
        formatted file. DetectProtectiveEquipment detects PPE worn by up to 15 persons detected in an image. For each
        person detected in the image the API returns an array of body parts (face, head, left-hand, right-hand). For
        each body part, an array of detected items of PPE is returned, including an indicator of whether or not the PPE
        covers the body part. The API returns the confidence it has in each detection (person, PPE, body part and body
        part coverage). It also returns a bounding box (BoundingBox) for each detected person and each detected item of
        PPE. You can optionally request a summary of detected PPE items with the SummarizationAttributes input
        parameter. The summary provides the following information. The persons detected as wearing all of the types of
        PPE that you specify. The persons detected as not wearing all of the types PPE that you specify. The persons
        dete

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.detect_protective_equipment(x_amz_target, request_options=request_options)
        )

    def detect_text(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Detects text in the input image and converts it into machine-readable text. Pass the input image as
        base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call
        Amazon Rekognition operations, you must pass it as a reference to an image in an Amazon S3 bucket. For the AWS
        CLI, passing image bytes is not supported. The image must be either a .png or .jpeg formatted file. The
        DetectText operation returns text in an array of TextDetection elements, TextDetections. Each TextDetection
        element provides information about a single word or line of text that was detected in the image. A word is one
        or more script characters that are not separated by spaces. DetectText can detect up to 100 words in an image. A
        line is a string of equally spaced words. A line isn't necessarily a complete sentence. For example, a driver's
        license number is detected as a line. A line ends when there is no aligned text after it. Also, a line ends when
        there is a large gap between words, relative to the length of the words. This means, depending on the gap
        between words, Amazon Rekognition may detect multiple lines in text aligned in the same direction. Periods don

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_text(x_amz_target, request_options=request_options))

    def distribute_dataset_entries(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Distributes the entries (images) in a
        training dataset across the training dataset and the test dataset for a project. DistributeDatasetEntries moves
        20% of the training dataset images to the test dataset. An entry is a JSON Line that describes an image. You
        supply the Amazon Resource Names (ARN) of a project's training dataset and test dataset. The training dataset
        must contain the images that you want to split. The test dataset must be empty. The datasets must belong to the
        same project. To create training and test datasets for a project, call CreateDataset. Distributing a dataset
        takes a while to complete. To check the status call DescribeDataset. The operation is complete when the Status
        field for the training dataset and the test dataset is UPDATE_COMPLETE. If the dataset split fails, the value of
        Status is UPDATE_FAILED. This operation requires permissions to perform the rekognition:DistributeDatasetEntries
        action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException; ResourceNotReadyException InternalServerError; ThrottlingException ``error``
                is ``RawError``."""
        return unwrap(self._with_raw_response.distribute_dataset_entries(x_amz_target, request_options=request_options))

    def get_celebrity_info(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets the name and additional information about a celebrity based on their Amazon Rekognition ID. The
        additional information is returned as an array of URLs. If there is no additional information about the
        celebrity, this list is empty. For more information, see Getting information about a celebrity in the Amazon
        Rekognition Developer Guide. This operation requires permissions to perform the rekognition:GetCelebrityInfo
        action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_celebrity_info(x_amz_target, request_options=request_options))

    def get_face_detection(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets face detection results for a Amazon Rekognition Video analysis started by StartFaceDetection. Face
        detection with Amazon Rekognition Video is an asynchronous operation. You start face detection by calling
        StartFaceDetection which returns a job identifier (JobId). When the face detection operation finishes, Amazon
        Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in
        the initial call to StartFaceDetection. To get the results of the face detection operation, first check that the
        status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceDetection and pass the job
        identifier (JobId) from the initial call to StartFaceDetection. GetFaceDetection returns an array of detected
        faces (Faces) sorted by the time the faces were detected. Use MaxResults parameter to limit the number of labels
        returned. If there are more results than specified in MaxResults, the value of NextToken in the operation
        response contains a pagination token for getting the next set of results. To get the next page of results, call
        GetFaceDetection and populate the NextToken request parameter with the token value returned from the previous

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
        return unwrap(self._with_raw_response.get_face_detection(x_amz_target, request_options=request_options))

    def get_person_tracking(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """End of support notice: On October 31, 2025, AWS will discontinue support for Amazon Rekognition People
        Pathing. After October 31, 2025, you will no longer be able to use the Rekognition People Pathing capability.
        For more information, visit this blog post. Gets the path tracking results of a Amazon Rekognition Video
        analysis started by StartPersonTracking. The person path tracking operation is started by a call to
        StartPersonTracking which returns a job identifier (JobId). When the operation finishes, Amazon Rekognition
        Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial
        call to StartPersonTracking. To get the results of the person path tracking operation, first check that the
        status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetPersonTracking and pass the job
        identifier (JobId) from the initial call to StartPersonTracking. GetPersonTracking returns an array, Persons, of
        tracked persons and the time(s) their paths were tracked in the video. GetPersonTracking only returns the
        default facial attributes (BoundingBox, Confidence, Landmarks, Pose, and Quality). The other facial attributes
        listed in the Face

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
        return unwrap(self._with_raw_response.get_person_tracking(x_amz_target, request_options=request_options))

    def get_segment_detection(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets the segment detection results of a Amazon Rekognition Video analysis started by StartSegmentDetection.
        Segment detection with Amazon Rekognition Video is an asynchronous operation. You start segment detection by
        calling StartSegmentDetection which returns a job identifier (JobId). When the segment detection operation
        finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic
        registered in the initial call to StartSegmentDetection. To get the results of the segment detection operation,
        first check that the status value published to the Amazon SNS topic is SUCCEEDED. if so, call
        GetSegmentDetection and pass the job identifier (JobId) from the initial call of StartSegmentDetection.
        GetSegmentDetection returns detected segments in an array (Segments) of SegmentDetection objects. Segments is
        sorted by the segment types specified in the SegmentTypes input parameter of StartSegmentDetection. Each element
        of the array includes the detected segment, the precentage confidence in the acuracy of the detected segment,
        the type of the segment, and the frame in which the segment was detected. Use SelectedSegmentTypes to find out
        the type of seg

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
        return unwrap(self._with_raw_response.get_segment_detection(x_amz_target, request_options=request_options))

    def index_faces2(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None
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
        return unwrap(self._with_raw_response.index_faces2(x_amz_target, request_options=request_options))

    def list_dataset_entries(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Lists the entries (images) within a dataset.
        An entry is a JSON Line that contains the information for a single image, including the image location, assigned
        labels, and object location bounding boxes. For more information, see Creating a manifest file. JSON Lines in
        the response include information about non-terminal errors found in the dataset. Non terminal errors are
        reported in errors lists within each JSON Line. The same information is reported in the training and testing
        validation result manifests that Amazon Rekognition Custom Labels creates during model training. You can filter
        the response in variety of ways, such as choosing which labels to return and returning JSON Lines created after
        a specific date. This operation requires permissions to perform the rekognition:ListDatasetEntries action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidPaginationTokenException; InvalidParameterException;
                ProvisionedThroughputExceededException; ResourceInUseException; ResourceNotFoundException;
                ResourceNotReadyException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_dataset_entries(x_amz_target, request_options=request_options))

    def list_dataset_labels(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Lists the labels in a dataset. Amazon
        Rekognition Custom Labels uses labels to describe images. For more information, see Labeling images. Lists the
        labels in a dataset. Amazon Rekognition Custom Labels uses labels to describe images. For more information, see
        Labeling images in the Amazon Rekognition Custom Labels Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidPaginationTokenException; InvalidParameterException;
                ProvisionedThroughputExceededException; ResourceInUseException; ResourceNotFoundException;
                ResourceNotReadyException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_dataset_labels(x_amz_target, request_options=request_options))

    def list_tags_for_resource(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of tags in an Amazon Rekognition collection, stream processor, or Custom Labels model. This
        operation requires permissions to perform the rekognition:ListTagsForResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_tags_for_resource(x_amz_target, request_options=request_options))

    def recognize_celebrities2(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns an array of celebrities recognized in the input image. For more information, see Recognizing
        celebrities in the Amazon Rekognition Developer Guide. RecognizeCelebrities returns the 64 largest faces in the
        image. It lists the recognized celebrities in the CelebrityFaces array and any unrecognized faces in the
        UnrecognizedFaces array. RecognizeCelebrities doesn't return celebrities whose faces aren't among the largest 64
        faces in the image. For each celebrity recognized, RecognizeCelebrities returns a Celebrity object. The
        Celebrity object contains the celebrity name, ID, URL links to additional information, match confidence, and a
        ComparedFace object that you can use to locate the celebrity's face on the image. Amazon Rekognition doesn't
        retain information about which images a celebrity has been recognized in. Your application must store this
        information and use the Celebrity ID property as a unique identifier for the celebrity. If you don't store the
        celebrity name or additional information URLs returned by RecognizeCelebrities, you will need the ID to identify
        the celebrity in a call to the GetCelebrityInfo operation. You pass the input image either as base64-encoded
        image

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.recognize_celebrities2(x_amz_target, request_options=request_options))

    def start_face_detection(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Starts asynchronous detection of faces in a stored video. Amazon Rekognition Video can detect faces in a
        video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video.
        StartFaceDetection returns a job identifier (JobId) that you use to get the results of the operation. When face
        detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification
        Service topic that you specify in NotificationChannel. To get the results of the face detection operation, first
        check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceDetection and
        pass the job identifier (JobId) from the initial call to StartFaceDetection. For more information, see Detecting
        faces in a stored video in the Amazon Rekognition Developer Guide.

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
        return unwrap(self._with_raw_response.start_face_detection(x_amz_target, request_options=request_options))

    def start_person_tracking(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """End of support notice: On October 31, 2025, AWS will discontinue support for Amazon Rekognition People
        Pathing. After October 31, 2025, you will no longer be able to use the Rekognition People Pathing capability.
        For more information, visit this blog post. Starts the asynchronous tracking of a person's path in a stored
        video. Amazon Rekognition Video can track the path of people in a video stored in an Amazon S3 bucket. Use Video
        to specify the bucket name and the filename of the video. StartPersonTracking returns a job identifier (JobId)
        which you use to get the results of the operation. When label detection is finished, Amazon Rekognition
        publishes a completion status to the Amazon Simple Notification Service topic that you specify in
        NotificationChannel. To get the results of the person detection operation, first check that the status value
        published to the Amazon SNS topic is SUCCEEDED. If so, call GetPersonTracking and pass the job identifier
        (JobId) from the initial call to StartPersonTracking.

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
        return unwrap(self._with_raw_response.start_person_tracking(x_amz_target, request_options=request_options))

    def start_segment_detection(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Starts asynchronous detection of segment detection in a stored video. Amazon Rekognition Video can detect
        segments in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the
        video. StartSegmentDetection returns a job identifier (JobId) which you use to get the results of the operation.
        When segment detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple
        Notification Service topic that you specify in NotificationChannel. You can use the Filters
        (StartSegmentDetectionFilters) input parameter to specify the minimum detection confidence returned in the
        response. Within Filters, use ShotFilter (StartShotDetectionFilter) to filter detected shots. Use
        TechnicalCueFilter (StartTechnicalCueDetectionFilter) to filter technical cues. To get the results of the
        segment detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED.
        if so, call GetSegmentDetection and pass the job identifier (JobId) from the initial call to
        StartSegmentDetection. For more information, see Detecting video segments in stored video in the Amazon
        Rekognition Developer Guide.

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
        return unwrap(self._with_raw_response.start_segment_detection(x_amz_target, request_options=request_options))

    def tag_resource(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Adds one or more key-value tags to an Amazon Rekognition collection, stream processor, or Custom Labels
        model. For more information, see Tagging AWS Resources. This operation requires permissions to perform the
        rekognition:TagResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException; ServiceQuotaExceededException InternalServerError; ThrottlingException
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.tag_resource(x_amz_target, request_options=request_options))

    def untag_resource(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Removes one or more tags from an Amazon Rekognition collection, stream processor, or Custom Labels model.
        This operation requires permissions to perform the rekognition:UntagResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.untag_resource(x_amz_target, request_options=request_options))

    def update_dataset_entries(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Adds or updates one or more entries (images)
        in a dataset. An entry is a JSON Line which contains the information for a single image, including the image
        location, assigned labels, and object location bounding boxes. For more information, see Image-Level labels in
        manifest files and Object localization in manifest files in the Amazon Rekognition Custom Labels Developer
        Guide. If the source-ref field in the JSON line references an existing image, the existing image in the dataset
        is updated. If source-ref field doesn't reference an existing image, the image is added as a new image to the
        dataset. You specify the changes that you want to make in the Changes input parameter. There isn't a limit to
        the number JSON Lines that you can change, but the size of Changes must be less than 5MB. UpdateDatasetEntries
        returns immediatly, but the dataset update might take a while to complete. Use DescribeDataset to check the
        current status. The dataset updated successfully if the value of Status is UPDATE_COMPLETE. To check if any
        non-terminal errors occured, call ListDatasetEntries and check for the presence of errors lists in the J

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; LimitExceededException;
                ProvisionedThroughputExceededException; ResourceInUseException; ResourceNotFoundException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_dataset_entries(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> OperationsWithRawResponse:
        return self._with_raw_response


class AsyncOperations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOperationsWithRawResponse(client, server, auth)

    async def compare_faces2(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Compares a face in the source input image with each of the 100 largest faces detected in the target input
        image. If the source image contains multiple faces, the service detects the largest face and compares it with
        each face detected in the target image. CompareFaces uses machine learning algorithms, which are probabilistic.
        A false negative is an incorrect prediction that a face in the target image has a low similarity confidence
        score when compared to the face in the source image. To reduce the probability of false negatives, we recommend
        that you compare the target image against multiple source images. If you plan to use CompareFaces to make a
        decision that impacts an individual's rights, privacy, or access to services, we recommend that you pass the
        result to a human for review and further validation before taking action. You pass the input and target images
        either as base64-encoded image bytes or as references to images in an Amazon S3 bucket. If you use the AWS CLI
        to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG
        or JPEG file. In response, the operation returns an array of face matches ordered by similarity scor

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.compare_faces2(x_amz_target, request_options=request_options))

    async def copy_project_version(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Copies a version of an Amazon Rekognition
        Custom Labels model from a source project to a destination project. The source and destination projects can be
        in different AWS accounts but must be in the same AWS Region. You can't copy a model to another AWS service. To
        copy a model version to a different AWS account, you need to create a resource-based policy known as a project
        policy. You attach the project policy to the source project by calling PutProjectPolicy. The project policy
        gives permission to copy the model version from a trusting AWS account to a trusted account. For more
        information creating and attaching a project policy, see Attaching a project policy (SDK) in the Amazon
        Rekognition Custom Labels Developer Guide. If you are copying a model version to a project in the same AWS
        account, you don't need to create a project policy. Copying project versions is supported only for Custom Labels
        models. To copy a model, the destination project, source project, and source model version must already exist.
        Copying a model version takes a while to complete. To get the current status, call DescribeProjectVersions and
        che

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; LimitExceededException;
                ProvisionedThroughputExceededException; ResourceInUseException; ResourceNotFoundException;
                ServiceQuotaExceededException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.copy_project_version(x_amz_target, request_options=request_options))

    async def delete_collection(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified collection. Note that this operation removes all faces in the collection. For an
        example, see Deleting a collection. This operation requires permissions to perform the
        rekognition:DeleteCollection action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_collection(x_amz_target, request_options=request_options))

    async def describe_collection(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Describes the specified collection. You can use DescribeCollection to get information, such as the number of
        faces indexed into a collection and the version of the model used by the collection for face detection. For more
        information, see Describing a Collection in the Amazon Rekognition Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_collection(x_amz_target, request_options=request_options))

    async def detect_custom_labels2(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Detects custom labels in a supplied image by
        using an Amazon Rekognition Custom Labels model. You specify which version of a model version to use by using
        the ProjectVersionArn input parameter. You pass the input image as base64-encoded image bytes or as a reference
        to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image
        bytes is not supported. The image must be either a PNG or JPEG formatted file. For each object that the model
        version detects on an image, the API returns a (CustomLabel) object in an array (CustomLabels). Each CustomLabel
        object provides the label name (Name), the level of confidence that the image contains the object (Confidence),
        and object location information, if it exists, for the label on the image (Geometry). To filter labels that are
        returned, specify a value for MinConfidence. DetectCustomLabelsLabels only returns labels with a confidence
        that's higher than the specified value. The value of MinConfidence maps to the assumed threshold values created
        during training. For more information, see Assumed threshold in the Amazon Rekognition Cu

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; LimitExceededException;
                ProvisionedThroughputExceededException; ResourceNotFoundException; ResourceNotReadyException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.detect_custom_labels2(x_amz_target, request_options=request_options)
        )

    async def detect_faces2(
        self,
        x_amz_target: XAmzTarget3AmazonRekognitionOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Detects faces within an image that is provided as input. DetectFaces detects the 100 largest faces in the
        image. For each face detected, the operation returns face details. These details include a bounding box of the
        face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial
        landmarks (for example, coordinates of eye and mouth), pose, presence of facial occlusion, and so on. The
        face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm
        might not detect the faces or might detect faces with lower confidence. You pass the input image either as
        base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call
        Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG
        formatted file. This is a stateless API operation. That is, the operation does not persist any data. This
        operation requires permissions to perform the rekognition:DetectFaces action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.detect_faces2(x_amz_target, request_options=request_options))

    async def detect_labels2(
        self,
        x_amz_target: XAmzTarget4AmazonRekognitionOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Detects instances of real-world entities within an image (JPEG or PNG) provided as input. This includes
        objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like
        landscape, evening, and nature. For an example, see Analyzing images stored in an Amazon S3 bucket in the Amazon
        Rekognition Developer Guide. You pass the input image as base64-encoded image bytes or as a reference to an
        image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes
        is not supported. The image must be either a PNG or JPEG formatted file. Optional Parameters You can specify one
        or both of the GENERAL_LABELS and IMAGE_PROPERTIES feature types when calling the DetectLabels API. Including
        GENERAL_LABELS will ensure the response includes the labels detected in the input image, while including
        IMAGE_PROPERTIES will ensure the response includes information about the image quality and color. When using
        GENERAL_LABELS and/or IMAGE_PROPERTIES you can provide filtering criteria to the Settings parameter. You can
        filter with sets of individual labels or with label categories. You can specify inclusive filters, exclusive

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.detect_labels2(x_amz_target, request_options=request_options))

    async def detect_moderation_labels2(
        self,
        x_amz_target: XAmzTarget5AmazonRekognitionOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Detects unsafe content in a specified JPEG or PNG format image. Use DetectModerationLabels to moderate images
        depending on your requirements. For example, you might want to filter images that contain nudity, but not images
        containing suggestive content. To filter images, use the labels returned by DetectModerationLabels to determine
        which types of content are appropriate. For information about moderation labels, see Detecting Unsafe Content in
        the Amazon Rekognition Developer Guide. You pass the input image either as base64-encoded image bytes or as a
        reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations,
        passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. You can specify an
        adapter to use when retrieving label predictions by providing a ProjectVersionArn to the ProjectVersion
        argument.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException;
                ResourceNotFoundException; ResourceNotReadyException HumanLoopQuotaExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.detect_moderation_labels2(x_amz_target, request_options=request_options)
        )

    async def detect_protective_equipment(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Detects Personal Protective Equipment (PPE) worn by people detected in an image. Amazon Rekognition can
        detect the following types of PPE. Face cover Hand cover Head cover You pass the input image as base64-encoded
        image bytes or as a reference to an image in an Amazon S3 bucket. The image must be either a PNG or JPG
        formatted file. DetectProtectiveEquipment detects PPE worn by up to 15 persons detected in an image. For each
        person detected in the image the API returns an array of body parts (face, head, left-hand, right-hand). For
        each body part, an array of detected items of PPE is returned, including an indicator of whether or not the PPE
        covers the body part. The API returns the confidence it has in each detection (person, PPE, body part and body
        part coverage). It also returns a bounding box (BoundingBox) for each detected person and each detected item of
        PPE. You can optionally request a summary of detected PPE items with the SummarizationAttributes input
        parameter. The summary provides the following information. The persons detected as wearing all of the types of
        PPE that you specify. The persons detected as not wearing all of the types PPE that you specify. The persons
        dete

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.detect_protective_equipment(x_amz_target, request_options=request_options)
        )

    async def detect_text(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Detects text in the input image and converts it into machine-readable text. Pass the input image as
        base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call
        Amazon Rekognition operations, you must pass it as a reference to an image in an Amazon S3 bucket. For the AWS
        CLI, passing image bytes is not supported. The image must be either a .png or .jpeg formatted file. The
        DetectText operation returns text in an array of TextDetection elements, TextDetections. Each TextDetection
        element provides information about a single word or line of text that was detected in the image. A word is one
        or more script characters that are not separated by spaces. DetectText can detect up to 100 words in an image. A
        line is a string of equally spaced words. A line isn't necessarily a complete sentence. For example, a driver's
        license number is detected as a line. A line ends when there is no aligned text after it. Also, a line ends when
        there is a large gap between words, relative to the length of the words. This means, depending on the gap
        between words, Amazon Rekognition may detect multiple lines in text aligned in the same direction. Periods don

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.detect_text(x_amz_target, request_options=request_options))

    async def distribute_dataset_entries(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Distributes the entries (images) in a
        training dataset across the training dataset and the test dataset for a project. DistributeDatasetEntries moves
        20% of the training dataset images to the test dataset. An entry is a JSON Line that describes an image. You
        supply the Amazon Resource Names (ARN) of a project's training dataset and test dataset. The training dataset
        must contain the images that you want to split. The test dataset must be empty. The datasets must belong to the
        same project. To create training and test datasets for a project, call CreateDataset. Distributing a dataset
        takes a while to complete. To check the status call DescribeDataset. The operation is complete when the Status
        field for the training dataset and the test dataset is UPDATE_COMPLETE. If the dataset split fails, the value of
        Status is UPDATE_FAILED. This operation requires permissions to perform the rekognition:DistributeDatasetEntries
        action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException; ResourceNotReadyException InternalServerError; ThrottlingException ``error``
                is ``RawError``."""
        return unwrap(
            await self._with_raw_response.distribute_dataset_entries(x_amz_target, request_options=request_options)
        )

    async def get_celebrity_info(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets the name and additional information about a celebrity based on their Amazon Rekognition ID. The
        additional information is returned as an array of URLs. If there is no additional information about the
        celebrity, this list is empty. For more information, see Getting information about a celebrity in the Amazon
        Rekognition Developer Guide. This operation requires permissions to perform the rekognition:GetCelebrityInfo
        action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_celebrity_info(x_amz_target, request_options=request_options))

    async def get_face_detection(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets face detection results for a Amazon Rekognition Video analysis started by StartFaceDetection. Face
        detection with Amazon Rekognition Video is an asynchronous operation. You start face detection by calling
        StartFaceDetection which returns a job identifier (JobId). When the face detection operation finishes, Amazon
        Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in
        the initial call to StartFaceDetection. To get the results of the face detection operation, first check that the
        status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceDetection and pass the job
        identifier (JobId) from the initial call to StartFaceDetection. GetFaceDetection returns an array of detected
        faces (Faces) sorted by the time the faces were detected. Use MaxResults parameter to limit the number of labels
        returned. If there are more results than specified in MaxResults, the value of NextToken in the operation
        response contains a pagination token for getting the next set of results. To get the next page of results, call
        GetFaceDetection and populate the NextToken request parameter with the token value returned from the previous

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
        return unwrap(await self._with_raw_response.get_face_detection(x_amz_target, request_options=request_options))

    async def get_person_tracking(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """End of support notice: On October 31, 2025, AWS will discontinue support for Amazon Rekognition People
        Pathing. After October 31, 2025, you will no longer be able to use the Rekognition People Pathing capability.
        For more information, visit this blog post. Gets the path tracking results of a Amazon Rekognition Video
        analysis started by StartPersonTracking. The person path tracking operation is started by a call to
        StartPersonTracking which returns a job identifier (JobId). When the operation finishes, Amazon Rekognition
        Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial
        call to StartPersonTracking. To get the results of the person path tracking operation, first check that the
        status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetPersonTracking and pass the job
        identifier (JobId) from the initial call to StartPersonTracking. GetPersonTracking returns an array, Persons, of
        tracked persons and the time(s) their paths were tracked in the video. GetPersonTracking only returns the
        default facial attributes (BoundingBox, Confidence, Landmarks, Pose, and Quality). The other facial attributes
        listed in the Face

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
        return unwrap(await self._with_raw_response.get_person_tracking(x_amz_target, request_options=request_options))

    async def get_segment_detection(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets the segment detection results of a Amazon Rekognition Video analysis started by StartSegmentDetection.
        Segment detection with Amazon Rekognition Video is an asynchronous operation. You start segment detection by
        calling StartSegmentDetection which returns a job identifier (JobId). When the segment detection operation
        finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic
        registered in the initial call to StartSegmentDetection. To get the results of the segment detection operation,
        first check that the status value published to the Amazon SNS topic is SUCCEEDED. if so, call
        GetSegmentDetection and pass the job identifier (JobId) from the initial call of StartSegmentDetection.
        GetSegmentDetection returns detected segments in an array (Segments) of SegmentDetection objects. Segments is
        sorted by the segment types specified in the SegmentTypes input parameter of StartSegmentDetection. Each element
        of the array includes the detected segment, the precentage confidence in the acuracy of the detected segment,
        the type of the segment, and the frame in which the segment was detected. Use SelectedSegmentTypes to find out
        the type of seg

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
        return unwrap(
            await self._with_raw_response.get_segment_detection(x_amz_target, request_options=request_options)
        )

    async def index_faces2(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
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
        return unwrap(await self._with_raw_response.index_faces2(x_amz_target, request_options=request_options))

    async def list_dataset_entries(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Lists the entries (images) within a dataset.
        An entry is a JSON Line that contains the information for a single image, including the image location, assigned
        labels, and object location bounding boxes. For more information, see Creating a manifest file. JSON Lines in
        the response include information about non-terminal errors found in the dataset. Non terminal errors are
        reported in errors lists within each JSON Line. The same information is reported in the training and testing
        validation result manifests that Amazon Rekognition Custom Labels creates during model training. You can filter
        the response in variety of ways, such as choosing which labels to return and returning JSON Lines created after
        a specific date. This operation requires permissions to perform the rekognition:ListDatasetEntries action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidPaginationTokenException; InvalidParameterException;
                ProvisionedThroughputExceededException; ResourceInUseException; ResourceNotFoundException;
                ResourceNotReadyException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_dataset_entries(x_amz_target, request_options=request_options))

    async def list_dataset_labels(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Lists the labels in a dataset. Amazon
        Rekognition Custom Labels uses labels to describe images. For more information, see Labeling images. Lists the
        labels in a dataset. Amazon Rekognition Custom Labels uses labels to describe images. For more information, see
        Labeling images in the Amazon Rekognition Custom Labels Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidPaginationTokenException; InvalidParameterException;
                ProvisionedThroughputExceededException; ResourceInUseException; ResourceNotFoundException;
                ResourceNotReadyException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_dataset_labels(x_amz_target, request_options=request_options))

    async def list_tags_for_resource(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of tags in an Amazon Rekognition collection, stream processor, or Custom Labels model. This
        operation requires permissions to perform the rekognition:ListTagsForResource action.

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
            await self._with_raw_response.list_tags_for_resource(x_amz_target, request_options=request_options)
        )

    async def recognize_celebrities2(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns an array of celebrities recognized in the input image. For more information, see Recognizing
        celebrities in the Amazon Rekognition Developer Guide. RecognizeCelebrities returns the 64 largest faces in the
        image. It lists the recognized celebrities in the CelebrityFaces array and any unrecognized faces in the
        UnrecognizedFaces array. RecognizeCelebrities doesn't return celebrities whose faces aren't among the largest 64
        faces in the image. For each celebrity recognized, RecognizeCelebrities returns a Celebrity object. The
        Celebrity object contains the celebrity name, ID, URL links to additional information, match confidence, and a
        ComparedFace object that you can use to locate the celebrity's face on the image. Amazon Rekognition doesn't
        retain information about which images a celebrity has been recognized in. Your application must store this
        information and use the Celebrity ID property as a unique identifier for the celebrity. If you don't store the
        celebrity name or additional information URLs returned by RecognizeCelebrities, you will need the ID to identify
        the celebrity in a call to the GetCelebrityInfo operation. You pass the input image either as base64-encoded
        image

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.recognize_celebrities2(x_amz_target, request_options=request_options)
        )

    async def start_face_detection(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Starts asynchronous detection of faces in a stored video. Amazon Rekognition Video can detect faces in a
        video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video.
        StartFaceDetection returns a job identifier (JobId) that you use to get the results of the operation. When face
        detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification
        Service topic that you specify in NotificationChannel. To get the results of the face detection operation, first
        check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceDetection and
        pass the job identifier (JobId) from the initial call to StartFaceDetection. For more information, see Detecting
        faces in a stored video in the Amazon Rekognition Developer Guide.

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
        return unwrap(await self._with_raw_response.start_face_detection(x_amz_target, request_options=request_options))

    async def start_person_tracking(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """End of support notice: On October 31, 2025, AWS will discontinue support for Amazon Rekognition People
        Pathing. After October 31, 2025, you will no longer be able to use the Rekognition People Pathing capability.
        For more information, visit this blog post. Starts the asynchronous tracking of a person's path in a stored
        video. Amazon Rekognition Video can track the path of people in a video stored in an Amazon S3 bucket. Use Video
        to specify the bucket name and the filename of the video. StartPersonTracking returns a job identifier (JobId)
        which you use to get the results of the operation. When label detection is finished, Amazon Rekognition
        publishes a completion status to the Amazon Simple Notification Service topic that you specify in
        NotificationChannel. To get the results of the person detection operation, first check that the status value
        published to the Amazon SNS topic is SUCCEEDED. If so, call GetPersonTracking and pass the job identifier
        (JobId) from the initial call to StartPersonTracking.

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
            await self._with_raw_response.start_person_tracking(x_amz_target, request_options=request_options)
        )

    async def start_segment_detection(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Starts asynchronous detection of segment detection in a stored video. Amazon Rekognition Video can detect
        segments in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the
        video. StartSegmentDetection returns a job identifier (JobId) which you use to get the results of the operation.
        When segment detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple
        Notification Service topic that you specify in NotificationChannel. You can use the Filters
        (StartSegmentDetectionFilters) input parameter to specify the minimum detection confidence returned in the
        response. Within Filters, use ShotFilter (StartShotDetectionFilter) to filter detected shots. Use
        TechnicalCueFilter (StartTechnicalCueDetectionFilter) to filter technical cues. To get the results of the
        segment detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED.
        if so, call GetSegmentDetection and pass the job identifier (JobId) from the initial call to
        StartSegmentDetection. For more information, see Detecting video segments in stored video in the Amazon
        Rekognition Developer Guide.

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
            await self._with_raw_response.start_segment_detection(x_amz_target, request_options=request_options)
        )

    async def tag_resource(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Adds one or more key-value tags to an Amazon Rekognition collection, stream processor, or Custom Labels
        model. For more information, see Tagging AWS Resources. This operation requires permissions to perform the
        rekognition:TagResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException; ServiceQuotaExceededException InternalServerError; ThrottlingException
                ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.tag_resource(x_amz_target, request_options=request_options))

    async def untag_resource(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Removes one or more tags from an Amazon Rekognition collection, stream processor, or Custom Labels model.
        This operation requires permissions to perform the rekognition:UntagResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.untag_resource(x_amz_target, request_options=request_options))

    async def update_dataset_entries(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Adds or updates one or more entries (images)
        in a dataset. An entry is a JSON Line which contains the information for a single image, including the image
        location, assigned labels, and object location bounding boxes. For more information, see Image-Level labels in
        manifest files and Object localization in manifest files in the Amazon Rekognition Custom Labels Developer
        Guide. If the source-ref field in the JSON line references an existing image, the existing image in the dataset
        is updated. If source-ref field doesn't reference an existing image, the image is added as a new image to the
        dataset. You specify the changes that you want to make in the Changes input parameter. There isn't a limit to
        the number JSON Lines that you can change, but the size of Changes must be less than 5MB. UpdateDatasetEntries
        returns immediatly, but the dataset update might take a while to complete. Use DescribeDataset to check the
        current status. The dataset updated successfully if the value of Status is UPDATE_COMPLETE. To check if any
        non-terminal errors occured, call ListDatasetEntries and check for the presence of errors lists in the J

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; LimitExceededException;
                ProvisionedThroughputExceededException; ResourceInUseException; ResourceNotFoundException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_dataset_entries(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncOperationsWithRawResponse:
        return self._with_raw_response


class OperationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def compare_faces2(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CompareFaces2ErrorBody]:
        """Compares a face in the source input image with each of the 100 largest faces detected in the target input
        image. If the source image contains multiple faces, the service detects the largest face and compares it with
        each face detected in the target image. CompareFaces uses machine learning algorithms, which are probabilistic.
        A false negative is an incorrect prediction that a face in the target image has a low similarity confidence
        score when compared to the face in the source image. To reduce the probability of false negatives, we recommend
        that you compare the target image against multiple source images. If you plan to use CompareFaces to make a
        decision that impacts an individual's rights, privacy, or access to services, we recommend that you pass the
        result to a human for review and further validation before taking action. You pass the input and target images
        either as base64-encoded image bytes or as references to images in an Amazon S3 bucket. If you use the AWS CLI
        to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG
        or JPEG file. In response, the operation returns an array of face matches ordered by similarity scor

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CompareFaces"),
            headers=[
                param[XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=compare_faces2_error_mapper,
            request_options=request_options,
        )

    def copy_project_version(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CopyProjectVersionErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Copies a version of an Amazon Rekognition
        Custom Labels model from a source project to a destination project. The source and destination projects can be
        in different AWS accounts but must be in the same AWS Region. You can't copy a model to another AWS service. To
        copy a model version to a different AWS account, you need to create a resource-based policy known as a project
        policy. You attach the project policy to the source project by calling PutProjectPolicy. The project policy
        gives permission to copy the model version from a trusting AWS account to a trusted account. For more
        information creating and attaching a project policy, see Attaching a project policy (SDK) in the Amazon
        Rekognition Custom Labels Developer Guide. If you are copying a model version to a project in the same AWS
        account, you don't need to create a project policy. Copying project versions is supported only for Custom Labels
        models. To copy a model, the destination project, source project, and source model version must already exist.
        Copying a model version takes a while to complete. To get the current status, call DescribeProjectVersions and
        che

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CopyProjectVersion"),
            headers=[
                param[XAmzTarget1AmazonRekognitionOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=copy_project_version_error_mapper,
            request_options=request_options,
        )

    def delete_collection(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteCollectionErrorBody]:
        """Deletes the specified collection. Note that this operation removes all faces in the collection. For an
        example, see Deleting a collection. This operation requires permissions to perform the
        rekognition:DeleteCollection action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteCollection"),
            headers=[param[XAmzTarget11OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_collection_error_mapper,
            request_options=request_options,
        )

    def describe_collection(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeCollectionErrorBody]:
        """Describes the specified collection. You can use DescribeCollection to get information, such as the number of
        faces indexed into a collection and the version of the model used by the collection for face detection. For more
        information, see Describing a Collection in the Amazon Rekognition Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeCollection"),
            headers=[param[XAmzTarget12OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_collection_error_mapper,
            request_options=request_options,
        )

    def detect_custom_labels2(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectCustomLabels2ErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Detects custom labels in a supplied image by
        using an Amazon Rekognition Custom Labels model. You specify which version of a model version to use by using
        the ProjectVersionArn input parameter. You pass the input image as base64-encoded image bytes or as a reference
        to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image
        bytes is not supported. The image must be either a PNG or JPEG formatted file. For each object that the model
        version detects on an image, the API returns a (CustomLabel) object in an array (CustomLabels). Each CustomLabel
        object provides the label name (Name), the level of confidence that the image contains the object (Confidence),
        and object location information, if it exists, for the label on the image (Geometry). To filter labels that are
        returned, specify a value for MinConfidence. DetectCustomLabelsLabels only returns labels with a confidence
        that's higher than the specified value. The value of MinConfidence maps to the assumed threshold values created
        during training. For more information, see Assumed threshold in the Amazon Rekognition Cu

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectCustomLabels"),
            headers=[
                param[XAmzTarget2AmazonRekognitionOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_custom_labels2_error_mapper,
            request_options=request_options,
        )

    def detect_faces2(
        self,
        x_amz_target: XAmzTarget3AmazonRekognitionOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectFaces2ErrorBody]:
        """Detects faces within an image that is provided as input. DetectFaces detects the 100 largest faces in the
        image. For each face detected, the operation returns face details. These details include a bounding box of the
        face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial
        landmarks (for example, coordinates of eye and mouth), pose, presence of facial occlusion, and so on. The
        face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm
        might not detect the faces or might detect faces with lower confidence. You pass the input image either as
        base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call
        Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG
        formatted file. This is a stateless API operation. That is, the operation does not persist any data. This
        operation requires permissions to perform the rekognition:DetectFaces action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectFaces"),
            headers=[
                param[XAmzTarget3AmazonRekognitionOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_faces2_error_mapper,
            request_options=request_options,
        )

    def detect_labels2(
        self,
        x_amz_target: XAmzTarget4AmazonRekognitionOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectLabels2ErrorBody]:
        """Detects instances of real-world entities within an image (JPEG or PNG) provided as input. This includes
        objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like
        landscape, evening, and nature. For an example, see Analyzing images stored in an Amazon S3 bucket in the Amazon
        Rekognition Developer Guide. You pass the input image as base64-encoded image bytes or as a reference to an
        image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes
        is not supported. The image must be either a PNG or JPEG formatted file. Optional Parameters You can specify one
        or both of the GENERAL_LABELS and IMAGE_PROPERTIES feature types when calling the DetectLabels API. Including
        GENERAL_LABELS will ensure the response includes the labels detected in the input image, while including
        IMAGE_PROPERTIES will ensure the response includes information about the image quality and color. When using
        GENERAL_LABELS and/or IMAGE_PROPERTIES you can provide filtering criteria to the Settings parameter. You can
        filter with sets of individual labels or with label categories. You can specify inclusive filters, exclusive

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectLabels"),
            headers=[
                param[XAmzTarget4AmazonRekognitionOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_labels2_error_mapper,
            request_options=request_options,
        )

    def detect_moderation_labels2(
        self,
        x_amz_target: XAmzTarget5AmazonRekognitionOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectModerationLabels2ErrorBody]:
        """Detects unsafe content in a specified JPEG or PNG format image. Use DetectModerationLabels to moderate images
        depending on your requirements. For example, you might want to filter images that contain nudity, but not images
        containing suggestive content. To filter images, use the labels returned by DetectModerationLabels to determine
        which types of content are appropriate. For information about moderation labels, see Detecting Unsafe Content in
        the Amazon Rekognition Developer Guide. You pass the input image either as base64-encoded image bytes or as a
        reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations,
        passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. You can specify an
        adapter to use when retrieving label predictions by providing a ProjectVersionArn to the ProjectVersion
        argument.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectModerationLabels"),
            headers=[
                param[XAmzTarget5AmazonRekognitionOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_moderation_labels2_error_mapper,
            request_options=request_options,
        )

    def detect_protective_equipment(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DetectProtectiveEquipmentErrorBody]:
        """Detects Personal Protective Equipment (PPE) worn by people detected in an image. Amazon Rekognition can
        detect the following types of PPE. Face cover Hand cover Head cover You pass the input image as base64-encoded
        image bytes or as a reference to an image in an Amazon S3 bucket. The image must be either a PNG or JPG
        formatted file. DetectProtectiveEquipment detects PPE worn by up to 15 persons detected in an image. For each
        person detected in the image the API returns an array of body parts (face, head, left-hand, right-hand). For
        each body part, an array of detected items of PPE is returned, including an indicator of whether or not the PPE
        covers the body part. The API returns the confidence it has in each detection (person, PPE, body part and body
        part coverage). It also returns a bounding box (BoundingBox) for each detected person and each detected item of
        PPE. You can optionally request a summary of detected PPE items with the SummarizationAttributes input
        parameter. The summary provides the following information. The persons detected as wearing all of the types of
        PPE that you specify. The persons detected as not wearing all of the types PPE that you specify. The persons
        dete

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectProtectiveEquipment"),
            headers=[param[XAmzTarget6OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_protective_equipment_error_mapper,
            request_options=request_options,
        )

    def detect_text(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DetectTextErrorBody]:
        """Detects text in the input image and converts it into machine-readable text. Pass the input image as
        base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call
        Amazon Rekognition operations, you must pass it as a reference to an image in an Amazon S3 bucket. For the AWS
        CLI, passing image bytes is not supported. The image must be either a .png or .jpeg formatted file. The
        DetectText operation returns text in an array of TextDetection elements, TextDetections. Each TextDetection
        element provides information about a single word or line of text that was detected in the image. A word is one
        or more script characters that are not separated by spaces. DetectText can detect up to 100 words in an image. A
        line is a string of equally spaced words. A line isn't necessarily a complete sentence. For example, a driver's
        license number is detected as a line. A line ends when there is no aligned text after it. Also, a line ends when
        there is a large gap between words, relative to the length of the words. This means, depending on the gap
        between words, Amazon Rekognition may detect multiple lines in text aligned in the same direction. Periods don

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectText"),
            headers=[param[XAmzTarget7OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_text_error_mapper,
            request_options=request_options,
        )

    def distribute_dataset_entries(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DistributeDatasetEntriesErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Distributes the entries (images) in a
        training dataset across the training dataset and the test dataset for a project. DistributeDatasetEntries moves
        20% of the training dataset images to the test dataset. An entry is a JSON Line that describes an image. You
        supply the Amazon Resource Names (ARN) of a project's training dataset and test dataset. The training dataset
        must contain the images that you want to split. The test dataset must be empty. The datasets must belong to the
        same project. To create training and test datasets for a project, call CreateDataset. Distributing a dataset
        takes a while to complete. To check the status call DescribeDataset. The operation is complete when the Status
        field for the training dataset and the test dataset is UPDATE_COMPLETE. If the dataset split fails, the value of
        Status is UPDATE_FAILED. This operation requires permissions to perform the rekognition:DistributeDatasetEntries
        action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DistributeDatasetEntries"),
            headers=[param[XAmzTarget8OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=distribute_dataset_entries_error_mapper,
            request_options=request_options,
        )

    def get_celebrity_info(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetCelebrityInfoErrorBody]:
        """Gets the name and additional information about a celebrity based on their Amazon Rekognition ID. The
        additional information is returned as an array of URLs. If there is no additional information about the
        celebrity, this list is empty. For more information, see Getting information about a celebrity in the Amazon
        Rekognition Developer Guide. This operation requires permissions to perform the rekognition:GetCelebrityInfo
        action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetCelebrityInfo"),
            headers=[param[XAmzTarget13OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_celebrity_info_error_mapper,
            request_options=request_options,
        )

    def get_face_detection(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetFaceDetectionErrorBody]:
        """Gets face detection results for a Amazon Rekognition Video analysis started by StartFaceDetection. Face
        detection with Amazon Rekognition Video is an asynchronous operation. You start face detection by calling
        StartFaceDetection which returns a job identifier (JobId). When the face detection operation finishes, Amazon
        Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in
        the initial call to StartFaceDetection. To get the results of the face detection operation, first check that the
        status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceDetection and pass the job
        identifier (JobId) from the initial call to StartFaceDetection. GetFaceDetection returns an array of detected
        faces (Faces) sorted by the time the faces were detected. Use MaxResults parameter to limit the number of labels
        returned. If there are more results than specified in MaxResults, the value of NextToken in the operation
        response contains a pagination token for getting the next set of results. To get the next page of results, call
        GetFaceDetection and populate the NextToken request parameter with the token value returned from the previous

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetFaceDetection"),
            headers=[param[XAmzTarget14OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_face_detection_error_mapper,
            request_options=request_options,
        )

    def get_person_tracking(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetPersonTrackingErrorBody]:
        """End of support notice: On October 31, 2025, AWS will discontinue support for Amazon Rekognition People
        Pathing. After October 31, 2025, you will no longer be able to use the Rekognition People Pathing capability.
        For more information, visit this blog post. Gets the path tracking results of a Amazon Rekognition Video
        analysis started by StartPersonTracking. The person path tracking operation is started by a call to
        StartPersonTracking which returns a job identifier (JobId). When the operation finishes, Amazon Rekognition
        Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial
        call to StartPersonTracking. To get the results of the person path tracking operation, first check that the
        status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetPersonTracking and pass the job
        identifier (JobId) from the initial call to StartPersonTracking. GetPersonTracking returns an array, Persons, of
        tracked persons and the time(s) their paths were tracked in the video. GetPersonTracking only returns the
        default facial attributes (BoundingBox, Confidence, Landmarks, Pose, and Quality). The other facial attributes
        listed in the Face

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetPersonTracking"),
            headers=[param[XAmzTarget16OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_person_tracking_error_mapper,
            request_options=request_options,
        )

    def get_segment_detection(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetSegmentDetectionErrorBody]:
        """Gets the segment detection results of a Amazon Rekognition Video analysis started by StartSegmentDetection.
        Segment detection with Amazon Rekognition Video is an asynchronous operation. You start segment detection by
        calling StartSegmentDetection which returns a job identifier (JobId). When the segment detection operation
        finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic
        registered in the initial call to StartSegmentDetection. To get the results of the segment detection operation,
        first check that the status value published to the Amazon SNS topic is SUCCEEDED. if so, call
        GetSegmentDetection and pass the job identifier (JobId) from the initial call of StartSegmentDetection.
        GetSegmentDetection returns detected segments in an array (Segments) of SegmentDetection objects. Segments is
        sorted by the segment types specified in the SegmentTypes input parameter of StartSegmentDetection. Each element
        of the array includes the detected segment, the precentage confidence in the acuracy of the detected segment,
        the type of the segment, and the frame in which the segment was detected. Use SelectedSegmentTypes to find out
        the type of seg

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetSegmentDetection"),
            headers=[param[XAmzTarget18OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_segment_detection_error_mapper,
            request_options=request_options,
        )

    def index_faces2(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, IndexFaces2ErrorBody]:
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
            headers=[param[XAmzTarget9OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=index_faces2_error_mapper,
            request_options=request_options,
        )

    def list_dataset_entries(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListDatasetEntriesErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Lists the entries (images) within a dataset.
        An entry is a JSON Line that contains the information for a single image, including the image location, assigned
        labels, and object location bounding boxes. For more information, see Creating a manifest file. JSON Lines in
        the response include information about non-terminal errors found in the dataset. Non terminal errors are
        reported in errors lists within each JSON Line. The same information is reported in the training and testing
        validation result manifests that Amazon Rekognition Custom Labels creates during model training. You can filter
        the response in variety of ways, such as choosing which labels to return and returning JSON Lines created after
        a specific date. This operation requires permissions to perform the rekognition:ListDatasetEntries action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDatasetEntries"),
            headers=[param[XAmzTarget20OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_dataset_entries_error_mapper,
            request_options=request_options,
        )

    def list_dataset_labels(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListDatasetLabelsErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Lists the labels in a dataset. Amazon
        Rekognition Custom Labels uses labels to describe images. For more information, see Labeling images. Lists the
        labels in a dataset. Amazon Rekognition Custom Labels uses labels to describe images. For more information, see
        Labeling images in the Amazon Rekognition Custom Labels Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDatasetLabels"),
            headers=[param[XAmzTarget22OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_dataset_labels_error_mapper,
            request_options=request_options,
        )

    def list_tags_for_resource(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListTagsForResourceErrorBody]:
        """Returns a list of tags in an Amazon Rekognition collection, stream processor, or Custom Labels model. This
        operation requires permissions to perform the rekognition:ListTagsForResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTagsForResource"),
            headers=[param[XAmzTarget23OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    def recognize_celebrities2(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RecognizeCelebrities2ErrorBody]:
        """Returns an array of celebrities recognized in the input image. For more information, see Recognizing
        celebrities in the Amazon Rekognition Developer Guide. RecognizeCelebrities returns the 64 largest faces in the
        image. It lists the recognized celebrities in the CelebrityFaces array and any unrecognized faces in the
        UnrecognizedFaces array. RecognizeCelebrities doesn't return celebrities whose faces aren't among the largest 64
        faces in the image. For each celebrity recognized, RecognizeCelebrities returns a Celebrity object. The
        Celebrity object contains the celebrity name, ID, URL links to additional information, match confidence, and a
        ComparedFace object that you can use to locate the celebrity's face on the image. Amazon Rekognition doesn't
        retain information about which images a celebrity has been recognized in. Your application must store this
        information and use the Celebrity ID property as a unique identifier for the celebrity. If you don't store the
        celebrity name or additional information URLs returned by RecognizeCelebrities, you will need the ID to identify
        the celebrity in a call to the GetCelebrityInfo operation. You pass the input image either as base64-encoded
        image

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RecognizeCelebrities"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=recognize_celebrities2_error_mapper,
            request_options=request_options,
        )

    def start_face_detection(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartFaceDetectionErrorBody]:
        """Starts asynchronous detection of faces in a stored video. Amazon Rekognition Video can detect faces in a
        video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video.
        StartFaceDetection returns a job identifier (JobId) that you use to get the results of the operation. When face
        detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification
        Service topic that you specify in NotificationChannel. To get the results of the face detection operation, first
        check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceDetection and
        pass the job identifier (JobId) from the initial call to StartFaceDetection. For more information, see Detecting
        faces in a stored video in the Amazon Rekognition Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartFaceDetection"),
            headers=[param[XAmzTarget15OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_face_detection_error_mapper,
            request_options=request_options,
        )

    def start_person_tracking(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartPersonTrackingErrorBody]:
        """End of support notice: On October 31, 2025, AWS will discontinue support for Amazon Rekognition People
        Pathing. After October 31, 2025, you will no longer be able to use the Rekognition People Pathing capability.
        For more information, visit this blog post. Starts the asynchronous tracking of a person's path in a stored
        video. Amazon Rekognition Video can track the path of people in a video stored in an Amazon S3 bucket. Use Video
        to specify the bucket name and the filename of the video. StartPersonTracking returns a job identifier (JobId)
        which you use to get the results of the operation. When label detection is finished, Amazon Rekognition
        publishes a completion status to the Amazon Simple Notification Service topic that you specify in
        NotificationChannel. To get the results of the person detection operation, first check that the status value
        published to the Amazon SNS topic is SUCCEEDED. If so, call GetPersonTracking and pass the job identifier
        (JobId) from the initial call to StartPersonTracking.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartPersonTracking"),
            headers=[param[XAmzTarget17OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_person_tracking_error_mapper,
            request_options=request_options,
        )

    def start_segment_detection(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartSegmentDetectionErrorBody]:
        """Starts asynchronous detection of segment detection in a stored video. Amazon Rekognition Video can detect
        segments in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the
        video. StartSegmentDetection returns a job identifier (JobId) which you use to get the results of the operation.
        When segment detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple
        Notification Service topic that you specify in NotificationChannel. You can use the Filters
        (StartSegmentDetectionFilters) input parameter to specify the minimum detection confidence returned in the
        response. Within Filters, use ShotFilter (StartShotDetectionFilter) to filter detected shots. Use
        TechnicalCueFilter (StartTechnicalCueDetectionFilter) to filter technical cues. To get the results of the
        segment detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED.
        if so, call GetSegmentDetection and pass the job identifier (JobId) from the initial call to
        StartSegmentDetection. For more information, see Detecting video segments in stored video in the Amazon
        Rekognition Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartSegmentDetection"),
            headers=[param[XAmzTarget19OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_segment_detection_error_mapper,
            request_options=request_options,
        )

    def tag_resource(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, TagResourceErrorBody]:
        """Adds one or more key-value tags to an Amazon Rekognition collection, stream processor, or Custom Labels
        model. For more information, see Tagging AWS Resources. This operation requires permissions to perform the
        rekognition:TagResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TagResource"),
            headers=[param[XAmzTarget24OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )

    def untag_resource(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UntagResourceErrorBody]:
        """Removes one or more tags from an Amazon Rekognition collection, stream processor, or Custom Labels model.
        This operation requires permissions to perform the rekognition:UntagResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UntagResource"),
            headers=[param[XAmzTarget25OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )

    def update_dataset_entries(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateDatasetEntriesErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Adds or updates one or more entries (images)
        in a dataset. An entry is a JSON Line which contains the information for a single image, including the image
        location, assigned labels, and object location bounding boxes. For more information, see Image-Level labels in
        manifest files and Object localization in manifest files in the Amazon Rekognition Custom Labels Developer
        Guide. If the source-ref field in the JSON line references an existing image, the existing image in the dataset
        is updated. If source-ref field doesn't reference an existing image, the image is added as a new image to the
        dataset. You specify the changes that you want to make in the Changes input parameter. There isn't a limit to
        the number JSON Lines that you can change, but the size of Changes must be less than 5MB. UpdateDatasetEntries
        returns immediatly, but the dataset update might take a while to complete. Use DescribeDataset to check the
        current status. The dataset updated successfully if the value of Status is UPDATE_COMPLETE. To check if any
        non-terminal errors occured, call ListDatasetEntries and check for the presence of errors lists in the J

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateDatasetEntries"),
            headers=[param[XAmzTarget21OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_dataset_entries_error_mapper,
            request_options=request_options,
        )


class AsyncOperationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def compare_faces2(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CompareFaces2ErrorBody]:
        """Compares a face in the source input image with each of the 100 largest faces detected in the target input
        image. If the source image contains multiple faces, the service detects the largest face and compares it with
        each face detected in the target image. CompareFaces uses machine learning algorithms, which are probabilistic.
        A false negative is an incorrect prediction that a face in the target image has a low similarity confidence
        score when compared to the face in the source image. To reduce the probability of false negatives, we recommend
        that you compare the target image against multiple source images. If you plan to use CompareFaces to make a
        decision that impacts an individual's rights, privacy, or access to services, we recommend that you pass the
        result to a human for review and further validation before taking action. You pass the input and target images
        either as base64-encoded image bytes or as references to images in an Amazon S3 bucket. If you use the AWS CLI
        to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG
        or JPEG file. In response, the operation returns an array of face matches ordered by similarity scor

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CompareFaces"),
            headers=[
                param[XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=compare_faces2_error_mapper,
            request_options=request_options,
        )

    async def copy_project_version(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CopyProjectVersionErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Copies a version of an Amazon Rekognition
        Custom Labels model from a source project to a destination project. The source and destination projects can be
        in different AWS accounts but must be in the same AWS Region. You can't copy a model to another AWS service. To
        copy a model version to a different AWS account, you need to create a resource-based policy known as a project
        policy. You attach the project policy to the source project by calling PutProjectPolicy. The project policy
        gives permission to copy the model version from a trusting AWS account to a trusted account. For more
        information creating and attaching a project policy, see Attaching a project policy (SDK) in the Amazon
        Rekognition Custom Labels Developer Guide. If you are copying a model version to a project in the same AWS
        account, you don't need to create a project policy. Copying project versions is supported only for Custom Labels
        models. To copy a model, the destination project, source project, and source model version must already exist.
        Copying a model version takes a while to complete. To get the current status, call DescribeProjectVersions and
        che

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CopyProjectVersion"),
            headers=[
                param[XAmzTarget1AmazonRekognitionOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=copy_project_version_error_mapper,
            request_options=request_options,
        )

    async def delete_collection(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteCollectionErrorBody]:
        """Deletes the specified collection. Note that this operation removes all faces in the collection. For an
        example, see Deleting a collection. This operation requires permissions to perform the
        rekognition:DeleteCollection action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteCollection"),
            headers=[param[XAmzTarget11OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_collection_error_mapper,
            request_options=request_options,
        )

    async def describe_collection(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeCollectionErrorBody]:
        """Describes the specified collection. You can use DescribeCollection to get information, such as the number of
        faces indexed into a collection and the version of the model used by the collection for face detection. For more
        information, see Describing a Collection in the Amazon Rekognition Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeCollection"),
            headers=[param[XAmzTarget12OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_collection_error_mapper,
            request_options=request_options,
        )

    async def detect_custom_labels2(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectCustomLabels2ErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Detects custom labels in a supplied image by
        using an Amazon Rekognition Custom Labels model. You specify which version of a model version to use by using
        the ProjectVersionArn input parameter. You pass the input image as base64-encoded image bytes or as a reference
        to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image
        bytes is not supported. The image must be either a PNG or JPEG formatted file. For each object that the model
        version detects on an image, the API returns a (CustomLabel) object in an array (CustomLabels). Each CustomLabel
        object provides the label name (Name), the level of confidence that the image contains the object (Confidence),
        and object location information, if it exists, for the label on the image (Geometry). To filter labels that are
        returned, specify a value for MinConfidence. DetectCustomLabelsLabels only returns labels with a confidence
        that's higher than the specified value. The value of MinConfidence maps to the assumed threshold values created
        during training. For more information, see Assumed threshold in the Amazon Rekognition Cu

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectCustomLabels"),
            headers=[
                param[XAmzTarget2AmazonRekognitionOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_custom_labels2_error_mapper,
            request_options=request_options,
        )

    async def detect_faces2(
        self,
        x_amz_target: XAmzTarget3AmazonRekognitionOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectFaces2ErrorBody]:
        """Detects faces within an image that is provided as input. DetectFaces detects the 100 largest faces in the
        image. For each face detected, the operation returns face details. These details include a bounding box of the
        face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial
        landmarks (for example, coordinates of eye and mouth), pose, presence of facial occlusion, and so on. The
        face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm
        might not detect the faces or might detect faces with lower confidence. You pass the input image either as
        base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call
        Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG
        formatted file. This is a stateless API operation. That is, the operation does not persist any data. This
        operation requires permissions to perform the rekognition:DetectFaces action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectFaces"),
            headers=[
                param[XAmzTarget3AmazonRekognitionOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_faces2_error_mapper,
            request_options=request_options,
        )

    async def detect_labels2(
        self,
        x_amz_target: XAmzTarget4AmazonRekognitionOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectLabels2ErrorBody]:
        """Detects instances of real-world entities within an image (JPEG or PNG) provided as input. This includes
        objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like
        landscape, evening, and nature. For an example, see Analyzing images stored in an Amazon S3 bucket in the Amazon
        Rekognition Developer Guide. You pass the input image as base64-encoded image bytes or as a reference to an
        image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes
        is not supported. The image must be either a PNG or JPEG formatted file. Optional Parameters You can specify one
        or both of the GENERAL_LABELS and IMAGE_PROPERTIES feature types when calling the DetectLabels API. Including
        GENERAL_LABELS will ensure the response includes the labels detected in the input image, while including
        IMAGE_PROPERTIES will ensure the response includes information about the image quality and color. When using
        GENERAL_LABELS and/or IMAGE_PROPERTIES you can provide filtering criteria to the Settings parameter. You can
        filter with sets of individual labels or with label categories. You can specify inclusive filters, exclusive

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectLabels"),
            headers=[
                param[XAmzTarget4AmazonRekognitionOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_labels2_error_mapper,
            request_options=request_options,
        )

    async def detect_moderation_labels2(
        self,
        x_amz_target: XAmzTarget5AmazonRekognitionOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectModerationLabels2ErrorBody]:
        """Detects unsafe content in a specified JPEG or PNG format image. Use DetectModerationLabels to moderate images
        depending on your requirements. For example, you might want to filter images that contain nudity, but not images
        containing suggestive content. To filter images, use the labels returned by DetectModerationLabels to determine
        which types of content are appropriate. For information about moderation labels, see Detecting Unsafe Content in
        the Amazon Rekognition Developer Guide. You pass the input image either as base64-encoded image bytes or as a
        reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations,
        passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. You can specify an
        adapter to use when retrieving label predictions by providing a ProjectVersionArn to the ProjectVersion
        argument.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectModerationLabels"),
            headers=[
                param[XAmzTarget5AmazonRekognitionOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_moderation_labels2_error_mapper,
            request_options=request_options,
        )

    async def detect_protective_equipment(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DetectProtectiveEquipmentErrorBody]:
        """Detects Personal Protective Equipment (PPE) worn by people detected in an image. Amazon Rekognition can
        detect the following types of PPE. Face cover Hand cover Head cover You pass the input image as base64-encoded
        image bytes or as a reference to an image in an Amazon S3 bucket. The image must be either a PNG or JPG
        formatted file. DetectProtectiveEquipment detects PPE worn by up to 15 persons detected in an image. For each
        person detected in the image the API returns an array of body parts (face, head, left-hand, right-hand). For
        each body part, an array of detected items of PPE is returned, including an indicator of whether or not the PPE
        covers the body part. The API returns the confidence it has in each detection (person, PPE, body part and body
        part coverage). It also returns a bounding box (BoundingBox) for each detected person and each detected item of
        PPE. You can optionally request a summary of detected PPE items with the SummarizationAttributes input
        parameter. The summary provides the following information. The persons detected as wearing all of the types of
        PPE that you specify. The persons detected as not wearing all of the types PPE that you specify. The persons
        dete

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectProtectiveEquipment"),
            headers=[param[XAmzTarget6OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_protective_equipment_error_mapper,
            request_options=request_options,
        )

    async def detect_text(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DetectTextErrorBody]:
        """Detects text in the input image and converts it into machine-readable text. Pass the input image as
        base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call
        Amazon Rekognition operations, you must pass it as a reference to an image in an Amazon S3 bucket. For the AWS
        CLI, passing image bytes is not supported. The image must be either a .png or .jpeg formatted file. The
        DetectText operation returns text in an array of TextDetection elements, TextDetections. Each TextDetection
        element provides information about a single word or line of text that was detected in the image. A word is one
        or more script characters that are not separated by spaces. DetectText can detect up to 100 words in an image. A
        line is a string of equally spaced words. A line isn't necessarily a complete sentence. For example, a driver's
        license number is detected as a line. A line ends when there is no aligned text after it. Also, a line ends when
        there is a large gap between words, relative to the length of the words. This means, depending on the gap
        between words, Amazon Rekognition may detect multiple lines in text aligned in the same direction. Periods don

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectText"),
            headers=[param[XAmzTarget7OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_text_error_mapper,
            request_options=request_options,
        )

    async def distribute_dataset_entries(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DistributeDatasetEntriesErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Distributes the entries (images) in a
        training dataset across the training dataset and the test dataset for a project. DistributeDatasetEntries moves
        20% of the training dataset images to the test dataset. An entry is a JSON Line that describes an image. You
        supply the Amazon Resource Names (ARN) of a project's training dataset and test dataset. The training dataset
        must contain the images that you want to split. The test dataset must be empty. The datasets must belong to the
        same project. To create training and test datasets for a project, call CreateDataset. Distributing a dataset
        takes a while to complete. To check the status call DescribeDataset. The operation is complete when the Status
        field for the training dataset and the test dataset is UPDATE_COMPLETE. If the dataset split fails, the value of
        Status is UPDATE_FAILED. This operation requires permissions to perform the rekognition:DistributeDatasetEntries
        action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DistributeDatasetEntries"),
            headers=[param[XAmzTarget8OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=distribute_dataset_entries_error_mapper,
            request_options=request_options,
        )

    async def get_celebrity_info(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetCelebrityInfoErrorBody]:
        """Gets the name and additional information about a celebrity based on their Amazon Rekognition ID. The
        additional information is returned as an array of URLs. If there is no additional information about the
        celebrity, this list is empty. For more information, see Getting information about a celebrity in the Amazon
        Rekognition Developer Guide. This operation requires permissions to perform the rekognition:GetCelebrityInfo
        action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetCelebrityInfo"),
            headers=[param[XAmzTarget13OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_celebrity_info_error_mapper,
            request_options=request_options,
        )

    async def get_face_detection(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetFaceDetectionErrorBody]:
        """Gets face detection results for a Amazon Rekognition Video analysis started by StartFaceDetection. Face
        detection with Amazon Rekognition Video is an asynchronous operation. You start face detection by calling
        StartFaceDetection which returns a job identifier (JobId). When the face detection operation finishes, Amazon
        Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in
        the initial call to StartFaceDetection. To get the results of the face detection operation, first check that the
        status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceDetection and pass the job
        identifier (JobId) from the initial call to StartFaceDetection. GetFaceDetection returns an array of detected
        faces (Faces) sorted by the time the faces were detected. Use MaxResults parameter to limit the number of labels
        returned. If there are more results than specified in MaxResults, the value of NextToken in the operation
        response contains a pagination token for getting the next set of results. To get the next page of results, call
        GetFaceDetection and populate the NextToken request parameter with the token value returned from the previous

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetFaceDetection"),
            headers=[param[XAmzTarget14OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_face_detection_error_mapper,
            request_options=request_options,
        )

    async def get_person_tracking(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetPersonTrackingErrorBody]:
        """End of support notice: On October 31, 2025, AWS will discontinue support for Amazon Rekognition People
        Pathing. After October 31, 2025, you will no longer be able to use the Rekognition People Pathing capability.
        For more information, visit this blog post. Gets the path tracking results of a Amazon Rekognition Video
        analysis started by StartPersonTracking. The person path tracking operation is started by a call to
        StartPersonTracking which returns a job identifier (JobId). When the operation finishes, Amazon Rekognition
        Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial
        call to StartPersonTracking. To get the results of the person path tracking operation, first check that the
        status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetPersonTracking and pass the job
        identifier (JobId) from the initial call to StartPersonTracking. GetPersonTracking returns an array, Persons, of
        tracked persons and the time(s) their paths were tracked in the video. GetPersonTracking only returns the
        default facial attributes (BoundingBox, Confidence, Landmarks, Pose, and Quality). The other facial attributes
        listed in the Face

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetPersonTracking"),
            headers=[param[XAmzTarget16OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_person_tracking_error_mapper,
            request_options=request_options,
        )

    async def get_segment_detection(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetSegmentDetectionErrorBody]:
        """Gets the segment detection results of a Amazon Rekognition Video analysis started by StartSegmentDetection.
        Segment detection with Amazon Rekognition Video is an asynchronous operation. You start segment detection by
        calling StartSegmentDetection which returns a job identifier (JobId). When the segment detection operation
        finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic
        registered in the initial call to StartSegmentDetection. To get the results of the segment detection operation,
        first check that the status value published to the Amazon SNS topic is SUCCEEDED. if so, call
        GetSegmentDetection and pass the job identifier (JobId) from the initial call of StartSegmentDetection.
        GetSegmentDetection returns detected segments in an array (Segments) of SegmentDetection objects. Segments is
        sorted by the segment types specified in the SegmentTypes input parameter of StartSegmentDetection. Each element
        of the array includes the detected segment, the precentage confidence in the acuracy of the detected segment,
        the type of the segment, and the frame in which the segment was detected. Use SelectedSegmentTypes to find out
        the type of seg

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetSegmentDetection"),
            headers=[param[XAmzTarget18OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_segment_detection_error_mapper,
            request_options=request_options,
        )

    async def index_faces2(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, IndexFaces2ErrorBody]:
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
            headers=[param[XAmzTarget9OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=index_faces2_error_mapper,
            request_options=request_options,
        )

    async def list_dataset_entries(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListDatasetEntriesErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Lists the entries (images) within a dataset.
        An entry is a JSON Line that contains the information for a single image, including the image location, assigned
        labels, and object location bounding boxes. For more information, see Creating a manifest file. JSON Lines in
        the response include information about non-terminal errors found in the dataset. Non terminal errors are
        reported in errors lists within each JSON Line. The same information is reported in the training and testing
        validation result manifests that Amazon Rekognition Custom Labels creates during model training. You can filter
        the response in variety of ways, such as choosing which labels to return and returning JSON Lines created after
        a specific date. This operation requires permissions to perform the rekognition:ListDatasetEntries action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDatasetEntries"),
            headers=[param[XAmzTarget20OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_dataset_entries_error_mapper,
            request_options=request_options,
        )

    async def list_dataset_labels(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListDatasetLabelsErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Lists the labels in a dataset. Amazon
        Rekognition Custom Labels uses labels to describe images. For more information, see Labeling images. Lists the
        labels in a dataset. Amazon Rekognition Custom Labels uses labels to describe images. For more information, see
        Labeling images in the Amazon Rekognition Custom Labels Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDatasetLabels"),
            headers=[param[XAmzTarget22OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_dataset_labels_error_mapper,
            request_options=request_options,
        )

    async def list_tags_for_resource(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListTagsForResourceErrorBody]:
        """Returns a list of tags in an Amazon Rekognition collection, stream processor, or Custom Labels model. This
        operation requires permissions to perform the rekognition:ListTagsForResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTagsForResource"),
            headers=[param[XAmzTarget23OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    async def recognize_celebrities2(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RecognizeCelebrities2ErrorBody]:
        """Returns an array of celebrities recognized in the input image. For more information, see Recognizing
        celebrities in the Amazon Rekognition Developer Guide. RecognizeCelebrities returns the 64 largest faces in the
        image. It lists the recognized celebrities in the CelebrityFaces array and any unrecognized faces in the
        UnrecognizedFaces array. RecognizeCelebrities doesn't return celebrities whose faces aren't among the largest 64
        faces in the image. For each celebrity recognized, RecognizeCelebrities returns a Celebrity object. The
        Celebrity object contains the celebrity name, ID, URL links to additional information, match confidence, and a
        ComparedFace object that you can use to locate the celebrity's face on the image. Amazon Rekognition doesn't
        retain information about which images a celebrity has been recognized in. Your application must store this
        information and use the Celebrity ID property as a unique identifier for the celebrity. If you don't store the
        celebrity name or additional information URLs returned by RecognizeCelebrities, you will need the ID to identify
        the celebrity in a call to the GetCelebrityInfo operation. You pass the input image either as base64-encoded
        image

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RecognizeCelebrities"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=recognize_celebrities2_error_mapper,
            request_options=request_options,
        )

    async def start_face_detection(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartFaceDetectionErrorBody]:
        """Starts asynchronous detection of faces in a stored video. Amazon Rekognition Video can detect faces in a
        video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video.
        StartFaceDetection returns a job identifier (JobId) that you use to get the results of the operation. When face
        detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification
        Service topic that you specify in NotificationChannel. To get the results of the face detection operation, first
        check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceDetection and
        pass the job identifier (JobId) from the initial call to StartFaceDetection. For more information, see Detecting
        faces in a stored video in the Amazon Rekognition Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartFaceDetection"),
            headers=[param[XAmzTarget15OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_face_detection_error_mapper,
            request_options=request_options,
        )

    async def start_person_tracking(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartPersonTrackingErrorBody]:
        """End of support notice: On October 31, 2025, AWS will discontinue support for Amazon Rekognition People
        Pathing. After October 31, 2025, you will no longer be able to use the Rekognition People Pathing capability.
        For more information, visit this blog post. Starts the asynchronous tracking of a person's path in a stored
        video. Amazon Rekognition Video can track the path of people in a video stored in an Amazon S3 bucket. Use Video
        to specify the bucket name and the filename of the video. StartPersonTracking returns a job identifier (JobId)
        which you use to get the results of the operation. When label detection is finished, Amazon Rekognition
        publishes a completion status to the Amazon Simple Notification Service topic that you specify in
        NotificationChannel. To get the results of the person detection operation, first check that the status value
        published to the Amazon SNS topic is SUCCEEDED. If so, call GetPersonTracking and pass the job identifier
        (JobId) from the initial call to StartPersonTracking.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartPersonTracking"),
            headers=[param[XAmzTarget17OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_person_tracking_error_mapper,
            request_options=request_options,
        )

    async def start_segment_detection(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartSegmentDetectionErrorBody]:
        """Starts asynchronous detection of segment detection in a stored video. Amazon Rekognition Video can detect
        segments in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the
        video. StartSegmentDetection returns a job identifier (JobId) which you use to get the results of the operation.
        When segment detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple
        Notification Service topic that you specify in NotificationChannel. You can use the Filters
        (StartSegmentDetectionFilters) input parameter to specify the minimum detection confidence returned in the
        response. Within Filters, use ShotFilter (StartShotDetectionFilter) to filter detected shots. Use
        TechnicalCueFilter (StartTechnicalCueDetectionFilter) to filter technical cues. To get the results of the
        segment detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED.
        if so, call GetSegmentDetection and pass the job identifier (JobId) from the initial call to
        StartSegmentDetection. For more information, see Detecting video segments in stored video in the Amazon
        Rekognition Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartSegmentDetection"),
            headers=[param[XAmzTarget19OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_segment_detection_error_mapper,
            request_options=request_options,
        )

    async def tag_resource(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, TagResourceErrorBody]:
        """Adds one or more key-value tags to an Amazon Rekognition collection, stream processor, or Custom Labels
        model. For more information, see Tagging AWS Resources. This operation requires permissions to perform the
        rekognition:TagResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TagResource"),
            headers=[param[XAmzTarget24OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )

    async def untag_resource(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UntagResourceErrorBody]:
        """Removes one or more tags from an Amazon Rekognition collection, stream processor, or Custom Labels model.
        This operation requires permissions to perform the rekognition:UntagResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UntagResource"),
            headers=[param[XAmzTarget25OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )

    async def update_dataset_entries(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateDatasetEntriesErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Adds or updates one or more entries (images)
        in a dataset. An entry is a JSON Line which contains the information for a single image, including the image
        location, assigned labels, and object location bounding boxes. For more information, see Image-Level labels in
        manifest files and Object localization in manifest files in the Amazon Rekognition Custom Labels Developer
        Guide. If the source-ref field in the JSON line references an existing image, the existing image in the dataset
        is updated. If source-ref field doesn't reference an existing image, the image is added as a new image to the
        dataset. You specify the changes that you want to make in the Changes input parameter. There isn't a limit to
        the number JSON Lines that you can change, but the size of Changes must be less than 5MB. UpdateDatasetEntries
        returns immediatly, but the dataset update might take a while to complete. Use DescribeDataset to check the
        current status. The dataset updated successfully if the value of Status is UPDATE_COMPLETE. To check if any
        non-terminal errors occured, call ListDatasetEntries and check for the presence of errors lists in the J

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateDatasetEntries"),
            headers=[param[XAmzTarget21OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_dataset_entries_error_mapper,
            request_options=request_options,
        )
