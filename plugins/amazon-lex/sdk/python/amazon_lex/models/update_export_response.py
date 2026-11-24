from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.export_status5 import ExportStatus5OrStr
from .enums.file_format4 import FileFormat4OrStr
from .export_resource_specification import ExportResourceSpecification, ExportResourceSpecificationDict


class UpdateExportResponse(SdkBaseModel):
    export_id: Optional[str] = Field(default=UNSET, alias="exportId")
    """The unique identifier Amazon Lex assigned to the export."""

    resource_specification: Optional[ExportResourceSpecification] = Field(default=UNSET, alias="resourceSpecification")
    file_format: Optional[FileFormat4OrStr] = Field(default=UNSET, alias="fileFormat")
    """The file format used for the files that define the resource. The TSV format is required to export a custom
    vocabulary only; otherwise use LexJson format."""

    export_status: Optional[ExportStatus5OrStr] = Field(default=UNSET, alias="exportStatus")
    """The status of the export. When the status is Completed the export archive is available for download."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The date and time that the export was created."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """The date and time that the export was last updated."""


class UpdateExportResponseDict(TypedDict):
    export_id: NotRequired[str]
    resource_specification: NotRequired[ExportResourceSpecificationDict]
    file_format: NotRequired[FileFormat4OrStr]
    export_status: NotRequired[ExportStatus5OrStr]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
