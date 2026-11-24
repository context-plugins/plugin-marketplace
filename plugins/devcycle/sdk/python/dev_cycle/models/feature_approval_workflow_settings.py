from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FeatureApprovalWorkflowSettings(SdkBaseModel):
    enabled: bool
    allow_publisher_bypass: bool = Field(alias="allowPublisherBypass")
    default_reviewers: list[str] = Field(alias="defaultReviewers")


class FeatureApprovalWorkflowSettingsDict(TypedDict):
    enabled: bool
    allow_publisher_bypass: bool
    default_reviewers: list[str]
