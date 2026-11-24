from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type11 import Type11OrStr
from .report_export_config import ReportExportConfig, ReportExportConfigDict
from .tag_model import TagModel, TagModelDict


class CreateReportGroupInput(SdkBaseModel):
    name: str
    """The name of the report group."""

    type_: Type11OrStr = Field(alias="type")
    """The type of report group."""

    export_config: ReportExportConfig = Field(alias="exportConfig")
    tags: Optional[list[TagModel]] = UNSET
    """A list of tag key and value pairs associated with this report group. These tags are available for use by Amazon
    Web Services services that support CodeBuild report group tags."""


class CreateReportGroupInputDict(TypedDict):
    name: str
    type_: Type11OrStr
    export_config: ReportExportConfigDict
    tags: NotRequired[list[TagModelDict]]
