from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.export_config_type import ExportConfigTypeOrStr
from .s3_report_export_config import S3ReportExportConfig, S3ReportExportConfigDict


class ReportExportConfig(SdkBaseModel):
    export_config_type: Optional[ExportConfigTypeOrStr] = Field(default=UNSET, alias="exportConfigType")
    """The export configuration type. Valid values are: S3: The report results are exported to an S3 bucket. NO_EXPORT:
    The report results are not exported."""

    s3_destination: Optional[S3ReportExportConfig] = Field(default=UNSET, alias="s3Destination")


class ReportExportConfigDict(TypedDict):
    export_config_type: NotRequired[ExportConfigTypeOrStr]
    s3_destination: NotRequired[S3ReportExportConfigDict]
