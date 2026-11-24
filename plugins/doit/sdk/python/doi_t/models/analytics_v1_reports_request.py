from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .external_config import ExternalConfig, ExternalConfigDict


class AnalyticsV1ReportsRequest(SdkBaseModel):
    name: Optional[str] = UNSET
    """Report name."""

    description: Optional[str] = UNSET
    """Report description."""

    config: Optional[ExternalConfig] = UNSET
    """Report configuration."""

    labels: Optional[list[str]] = UNSET
    """Array of label IDs assigned to the report"""

    folder_id: str = Field(default="root", alias="folderId")
    """Identifier of the folder that contains the report. Set to "root" if the report is at the top level (not in a
    folder)."""


class AnalyticsV1ReportsRequestDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    config: NotRequired[ExternalConfigDict]
    labels: NotRequired[list[str]]
    folder_id: NotRequired[str]
