from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1_doi_t_reports_api import Type1DoiTReportsApiOrStr
from .external_config import ExternalConfig, ExternalConfigDict


class ExternalReport(SdkBaseModel):
    """Configuration and metadata of a stored report."""

    id: Optional[str] = UNSET
    """Report ID."""

    name: str
    """Report name."""

    description: Optional[str] = UNSET
    """Report description."""

    type_: Optional[Type1DoiTReportsApiOrStr] = Field(default=UNSET, alias="type")
    """Report type."""

    config: Optional[ExternalConfig] = UNSET
    """Report configuration."""

    labels: Optional[list[str]] = UNSET
    """Array of label IDs assigned to the report"""

    folder_id: str = Field(default="root", alias="folderId")
    """Identifier of the folder that contains the report. Set to "root" if the report is at the top level (not in a
    folder)."""


class ExternalReportDict(TypedDict):
    id: NotRequired[str]
    name: str
    description: NotRequired[str]
    type_: NotRequired[Type1DoiTReportsApiOrStr]
    config: NotRequired[ExternalConfigDict]
    labels: NotRequired[list[str]]
    folder_id: NotRequired[str]
