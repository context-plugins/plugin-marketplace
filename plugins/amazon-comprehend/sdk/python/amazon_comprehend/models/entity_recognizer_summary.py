from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.latest_version_status1 import LatestVersionStatus1OrStr


class EntityRecognizerSummary(SdkBaseModel):
    recognizer_name: Optional[str] = Field(default=UNSET, alias="RecognizerName")
    """The name that you assigned the entity recognizer."""

    number_of_versions: Optional[int] = Field(default=UNSET, alias="NumberOfVersions")
    """The number of versions you created."""

    latest_version_created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LatestVersionCreatedAt")
    """The time that the latest entity recognizer version was submitted for processing."""

    latest_version_name: Optional[str] = Field(default=UNSET, alias="LatestVersionName")
    """The version name you assigned to the latest entity recognizer version."""

    latest_version_status: Optional[LatestVersionStatus1OrStr] = Field(default=UNSET, alias="LatestVersionStatus")
    """Provides the status of the latest entity recognizer version."""


class EntityRecognizerSummaryDict(TypedDict):
    recognizer_name: NotRequired[str]
    number_of_versions: NotRequired[int]
    latest_version_created_at: NotRequired[RFC3339DateTime]
    latest_version_name: NotRequired[str]
    latest_version_status: NotRequired[LatestVersionStatus1OrStr]
