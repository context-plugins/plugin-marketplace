from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_security_feedback import (
    GoogleCloudApigeeV1SecurityFeedback,
    GoogleCloudApigeeV1SecurityFeedbackDict,
)


class GoogleCloudApigeeV1ListSecurityFeedbackResponse(SdkBaseModel):
    """Response for ListSecurityFeedback"""

    security_feedback: Optional[list[GoogleCloudApigeeV1SecurityFeedback]] = Field(
        default=UNSET, alias="securityFeedback"
    )
    """List of SecurityFeedback reports."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token that can be sent as ``page_token`` in ``ListSecurityFeedbackRequest`` to retrieve the next page. If this
    field is omitted, there are no subsequent pages."""


class GoogleCloudApigeeV1ListSecurityFeedbackResponseDict(TypedDict):
    security_feedback: NotRequired[list[GoogleCloudApigeeV1SecurityFeedbackDict]]
    next_page_token: NotRequired[str]
