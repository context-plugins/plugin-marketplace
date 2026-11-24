from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.attribute import AttributeOrStr


class GoogleCloudApigeeV1SecurityFeedbackFeedbackContext(SdkBaseModel):
    """FeedbackContext captures the intent of the submitted feedback."""

    attribute: Optional[AttributeOrStr] = UNSET
    """Required. The attribute the user is providing feedback about."""

    values: Optional[list[str]] = UNSET
    """Required. The values of the attribute the user is providing feedback about."""


class GoogleCloudApigeeV1SecurityFeedbackFeedbackContextDict(TypedDict):
    attribute: NotRequired[AttributeOrStr]
    values: NotRequired[list[str]]
