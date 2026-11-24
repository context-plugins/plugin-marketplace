from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .audit_image import AuditImage, AuditImageDict
from .challenge import Challenge, ChallengeDict
from .enums.status_amazon_rekognition_face_liveness_api import StatusAmazonRekognitionFaceLivenessApiOrStr
from .feedback_item import FeedbackItem, FeedbackItemDict
from .session_metadata import SessionMetadata, SessionMetadataDict


class GetFaceLivenessSessionResultsResponse(SdkBaseModel):
    session_id: str = Field(alias="SessionId")
    """The sessionId for which this request was called."""

    status: StatusAmazonRekognitionFaceLivenessApiOrStr = Field(alias="Status")
    """Represents a status corresponding to the state of the session. Possible statuses are: CREATED, IN_PROGRESS,
    SUCCEEDED, FAILED, EXPIRED."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """Probabalistic confidence score for if the person in the given video was live, represented as a float value
    between 0 to 100."""

    reference_image: Optional[AuditImage] = Field(default=UNSET, alias="ReferenceImage")
    audit_images: Optional[list[AuditImage]] = Field(default=UNSET, alias="AuditImages")
    """A set of images from the Face Liveness video that can be used for audit purposes. It includes a bounding box of
    the face and the Base64-encoded bytes that return an image. If the CreateFaceLivenessSession request included an
    OutputConfig argument, the image will be uploaded to an S3Object specified in the output configuration. If no Amazon
    S3 bucket is defined, raw bytes are sent instead."""

    challenge: Optional[Challenge] = Field(default=UNSET, alias="Challenge")
    feedback: Optional[list[FeedbackItem]] = Field(default=UNSET, alias="Feedback")
    """A list of conditions that were detected in the Face Liveness video and that contributed to the returned
    Confidence score. Each item contains a code and a human-readable message. Feedback is returned only for sessions
    with a Status of SUCCEEDED, and the list is empty when no such conditions were detected."""

    metadata: Optional[SessionMetadata] = Field(default=UNSET, alias="Metadata")


class GetFaceLivenessSessionResultsResponseDict(TypedDict):
    session_id: str
    status: StatusAmazonRekognitionFaceLivenessApiOrStr
    confidence: NotRequired[float]
    reference_image: NotRequired[AuditImageDict]
    audit_images: NotRequired[list[AuditImageDict]]
    challenge: NotRequired[ChallengeDict]
    feedback: NotRequired[list[FeedbackItemDict]]
    metadata: NotRequired[SessionMetadataDict]
