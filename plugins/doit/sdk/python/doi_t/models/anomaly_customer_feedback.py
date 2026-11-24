from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.resolution1 import Resolution1OrStr
from .enums.review_status1 import ReviewStatus1OrStr
from .resolution_note1 import ResolutionNote1, ResolutionNote1Dict


class AnomalyCustomerFeedback(SdkBaseModel):
    """Current review status of the anomaly, as set in the console or through ``patchAnomaly``. Always present; an
    anomaly nobody has reviewed yet reports ``NEEDS_REVIEW``."""

    review_status: ReviewStatus1OrStr = Field(alias="reviewStatus")
    """The anomaly's review state."""

    resolution: Optional[Resolution1OrStr] = UNSET
    """Whether the anomaly was confirmed as real. Present only when ``reviewStatus`` is ``RESOLVED``."""

    resolution_note: Optional[ResolutionNote1] = Field(default=UNSET, alias="resolutionNote")
    """The feedback reason given when the anomaly was resolved. Present only when ``reviewStatus`` is ``RESOLVED`` and a
    reason was given. The resolution comment is not included."""

    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    """Time of the last review-feedback update. Absent when the anomaly was never reviewed."""

    updated_by: Optional[str] = Field(default=UNSET, alias="updatedBy")
    """Email of the user who made the last review-feedback update. Absent when the anomaly was never reviewed."""


class AnomalyCustomerFeedbackDict(TypedDict):
    review_status: ReviewStatus1OrStr
    resolution: NotRequired[Resolution1OrStr]
    resolution_note: NotRequired[ResolutionNote1Dict]
    updated_at: NotRequired[RFC3339DateTime]
    updated_by: NotRequired[str]
