from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status3 import Status3OrStr
from .enums.type9 import Type9OrStr
from .report_export_config import ReportExportConfig, ReportExportConfigDict
from .tag_model import TagModel, TagModelDict


class ReportGroup(SdkBaseModel):
    arn: Optional[str] = UNSET
    """The ARN of the ReportGroup."""

    name: Optional[str] = UNSET
    """The name of the ReportGroup."""

    type_: Optional[Type9OrStr] = Field(default=UNSET, alias="type")
    """The type of the ReportGroup. This can be one of the following values: CODE_COVERAGE The report group contains
    code coverage reports. TEST The report group contains test reports."""

    export_config: Optional[ReportExportConfig] = Field(default=UNSET, alias="exportConfig")
    created: Optional[RFC3339DateTime] = UNSET
    """The date and time this ReportGroup was created."""

    last_modified: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModified")
    """The date and time this ReportGroup was last modified."""

    tags: Optional[list[TagModel]] = UNSET
    """A list of tag key and value pairs associated with this report group. These tags are available for use by Amazon
    Web Services services that support CodeBuild report group tags."""

    status: Optional[Status3OrStr] = UNSET
    """The status of the report group. This property is read-only. This can be one of the following values: ACTIVE The
    report group is active. DELETING The report group is in the process of being deleted."""


class ReportGroupDict(TypedDict):
    arn: NotRequired[str]
    name: NotRequired[str]
    type_: NotRequired[Type9OrStr]
    export_config: NotRequired[ReportExportConfigDict]
    created: NotRequired[RFC3339DateTime]
    last_modified: NotRequired[RFC3339DateTime]
    tags: NotRequired[list[TagModelDict]]
    status: NotRequired[Status3OrStr]
