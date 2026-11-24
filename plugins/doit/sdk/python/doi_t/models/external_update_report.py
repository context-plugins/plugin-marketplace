from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .external_config import ExternalConfig, ExternalConfigDict


class ExternalUpdateReport(SdkBaseModel):
    """Partial report object used for updates."""

    config: Optional[ExternalConfig] = UNSET
    """Report configuration."""

    description: Optional[str] = UNSET
    """Report description"""

    name: Optional[str] = UNSET
    """Report name"""

    labels: Optional[list[str]] = UNSET
    """Array of label IDs assigned to the report"""

    folder_id: str = Field(default="root", alias="folderId")
    """Identifier of the folder that contains the report. Set to "root" if the report is at the top level (not in a
    folder)."""


class ExternalUpdateReportDict(TypedDict):
    config: NotRequired[ExternalConfigDict]
    description: NotRequired[str]
    name: NotRequired[str]
    labels: NotRequired[list[str]]
    folder_id: NotRequired[str]
