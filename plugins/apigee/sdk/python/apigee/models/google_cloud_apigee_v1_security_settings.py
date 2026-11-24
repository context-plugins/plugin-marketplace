from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1SecuritySettings(SdkBaseModel):
    """SecuritySettings reflects the current state of the SecuritySettings feature."""

    ml_retraining_feedback_enabled: Optional[bool] = Field(default=UNSET, alias="mlRetrainingFeedbackEnabled")
    """Optional. If true the user consents to the use of ML models for Abuse detection."""

    name: Optional[str] = UNSET
    """Identifier. Full resource name is always ``organizations/{org}/securitySettings``."""


class GoogleCloudApigeeV1SecuritySettingsDict(TypedDict):
    ml_retraining_feedback_enabled: NotRequired[bool]
    name: NotRequired[str]
