from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.export_status import ExportStatusOrStr
from .enums.file_format1 import FileFormat1OrStr
from .export_resource_specification import ExportResourceSpecification, ExportResourceSpecificationDict


class CreateExportResponse(SdkBaseModel):
    export_id: Optional[str] = Field(default=UNSET, alias="exportId")
    """An identifier for a specific request to create an export."""

    resource_specification: Optional[ExportResourceSpecification] = Field(default=UNSET, alias="resourceSpecification")
    file_format: Optional[FileFormat1OrStr] = Field(default=UNSET, alias="fileFormat")
    """The file format used for the bot or bot locale definition files."""

    export_status: Optional[ExportStatusOrStr] = Field(default=UNSET, alias="exportStatus")
    """The status of the export. When the status is Completed, you can use the DescribeExport operation to get the
    pre-signed S3 URL link to your exported bot or bot locale."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The date and time that the request to export a bot was created."""


class CreateExportResponseDict(TypedDict):
    export_id: NotRequired[str]
    resource_specification: NotRequired[ExportResourceSpecificationDict]
    file_format: NotRequired[FileFormat1OrStr]
    export_status: NotRequired[ExportStatusOrStr]
    creation_date_time: NotRequired[RFC3339DateTime]
