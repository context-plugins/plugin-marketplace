from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.feedback_type import FeedbackTypeOrStr
from .enums.reason import ReasonOrStr
from .google_cloud_apigee_v1_security_feedback_feedback_context import (
    GoogleCloudApigeeV1SecurityFeedbackFeedbackContext,
    GoogleCloudApigeeV1SecurityFeedbackFeedbackContextDict,
)


class GoogleCloudApigeeV1SecurityFeedback(SdkBaseModel):
    """Represents a feedback report from an Advanced API Security customer."""

    name: Optional[str] = UNSET
    """Output only. Identifier. The feedback name is intended to be a system-generated uuid."""

    feedback_contexts: Optional[list[GoogleCloudApigeeV1SecurityFeedbackFeedbackContext]] = Field(
        default=UNSET, alias="feedbackContexts"
    )
    """Required. One or more attribute/value pairs for constraining the feedback."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time when this specific feedback id was created."""

    comment: Optional[str] = UNSET
    """Optional. Optional text the user can provide for additional, unstructured context."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Optional. The display name of the feedback."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time when this specific feedback id was updated."""

    reason: Optional[ReasonOrStr] = UNSET
    """Optional. The reason for the feedback."""

    feedback_type: Optional[FeedbackTypeOrStr] = Field(default=UNSET, alias="feedbackType")
    """Required. The type of feedback being submitted."""


class GoogleCloudApigeeV1SecurityFeedbackDict(TypedDict):
    name: NotRequired[str]
    feedback_contexts: NotRequired[list[GoogleCloudApigeeV1SecurityFeedbackFeedbackContextDict]]
    create_time: NotRequired[str]
    comment: NotRequired[str]
    display_name: NotRequired[str]
    update_time: NotRequired[str]
    reason: NotRequired[ReasonOrStr]
    feedback_type: NotRequired[FeedbackTypeOrStr]
