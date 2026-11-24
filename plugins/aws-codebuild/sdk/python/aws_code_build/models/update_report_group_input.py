from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .report_export_config import ReportExportConfig, ReportExportConfigDict
from .tag_model import TagModel, TagModelDict


class UpdateReportGroupInput(SdkBaseModel):
    arn: str
    """The ARN of the report group to update."""

    export_config: Optional[ReportExportConfig] = Field(default=UNSET, alias="exportConfig")
    tags: Optional[list[TagModel]] = UNSET
    """An updated list of tag key and value pairs associated with this report group. These tags are available for use by
    Amazon Web Services services that support CodeBuild report group tags."""


class UpdateReportGroupInputDict(TypedDict):
    arn: str
    export_config: NotRequired[ReportExportConfigDict]
    tags: NotRequired[list[TagModelDict]]
