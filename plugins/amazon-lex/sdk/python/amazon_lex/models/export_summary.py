from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.export_status3 import ExportStatus3OrStr
from .enums.file_format3 import FileFormat3OrStr
from .export_resource_specification import ExportResourceSpecification, ExportResourceSpecificationDict


class ExportSummary(SdkBaseModel):
    export_id: Optional[str] = Field(default=UNSET, alias="exportId")
    """The unique identifier that Amazon Lex assigned to the export."""

    resource_specification: Optional[ExportResourceSpecification] = Field(default=UNSET, alias="resourceSpecification")
    file_format: Optional[FileFormat3OrStr] = Field(default=UNSET, alias="fileFormat")
    """The file format used in the export files."""

    export_status: Optional[ExportStatus3OrStr] = Field(default=UNSET, alias="exportStatus")
    """The status of the export. When the status is Completed the export is ready to download."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The date and time that the export was created."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """The date and time that the export was last updated."""


class ExportSummaryDict(TypedDict):
    export_id: NotRequired[str]
    resource_specification: NotRequired[ExportResourceSpecificationDict]
    file_format: NotRequired[FileFormat3OrStr]
    export_status: NotRequired[ExportStatus3OrStr]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
