from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.resolution import ResolutionOrStr
from .enums.review_status import ReviewStatusOrStr
from .resolution_note import ResolutionNote, ResolutionNoteDict


class CustomerFeedback(SdkBaseModel):
    """Partial review-status update. Fields that are omitted are left unchanged. ``reviewStatus`` drives the state
    machine; ``resolution`` and ``resolutionNote`` apply only when resolving."""

    review_status: Optional[ReviewStatusOrStr] = Field(default=UNSET, alias="reviewStatus")
    """The review state to move the anomaly to."""

    resolution: Optional[ResolutionOrStr] = UNSET
    """Required when ``reviewStatus`` is ``RESOLVED``; forbidden otherwise. Qualifies whether the anomaly was confirmed
    as real."""

    resolution_note: Optional[ResolutionNote] = Field(default=UNSET, alias="resolutionNote")
    """Optional reason and comment captured on a resolve transition."""


class CustomerFeedbackDict(TypedDict):
    review_status: NotRequired[ReviewStatusOrStr]
    resolution: NotRequired[ResolutionOrStr]
    resolution_note: NotRequired[ResolutionNoteDict]
