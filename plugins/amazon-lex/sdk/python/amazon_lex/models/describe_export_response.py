from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.export_status2 import ExportStatus2OrStr
from .enums.file_format2 import FileFormat2OrStr
from .export_resource_specification import ExportResourceSpecification, ExportResourceSpecificationDict


class DescribeExportResponse(SdkBaseModel):
    export_id: Optional[str] = Field(default=UNSET, alias="exportId")
    """The unique identifier of the described export."""

    resource_specification: Optional[ExportResourceSpecification] = Field(default=UNSET, alias="resourceSpecification")
    file_format: Optional[FileFormat2OrStr] = Field(default=UNSET, alias="fileFormat")
    """The file format used in the files that describe the resource."""

    export_status: Optional[ExportStatus2OrStr] = Field(default=UNSET, alias="exportStatus")
    """The status of the export. When the status is Complete the export archive file is available for download."""

    failure_reasons: Optional[list[str]] = Field(default=UNSET, alias="failureReasons")
    """If the exportStatus is failed, contains one or more reasons why the export could not be completed."""

    download_url: Optional[str] = Field(default=UNSET, alias="downloadUrl")
    """A pre-signed S3 URL that points to the bot or bot locale archive. The URL is only available for 5 minutes after
    calling the DescribeExport operation."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The date and time that the export was created."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """The last date and time that the export was updated."""


class DescribeExportResponseDict(TypedDict):
    export_id: NotRequired[str]
    resource_specification: NotRequired[ExportResourceSpecificationDict]
    file_format: NotRequired[FileFormat2OrStr]
    export_status: NotRequired[ExportStatus2OrStr]
    failure_reasons: NotRequired[list[str]]
    download_url: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
