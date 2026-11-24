from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.export_entity import ExportEntityOrStr
from .enums.export_status import ExportStatusOrStr


class ExportResponseDto(SdkBaseModel):
    """Exports response."""

    entity: Optional[ExportEntityOrStr] = UNSET
    name: Optional[str] = UNSET
    """Exported record template name.

    In the BILL web app, if you create a template for exported records (**Settings > Import & export > Custom File
    Integration > Teamplates**), ``name`` is set as the template name. If a template is not created, ``name`` is set as
    a BILL-generated value."""

    processed_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="processedTime")
    """Export operation processed date and time"""

    status: Optional[ExportStatusOrStr] = UNSET
    file_name: Optional[str] = Field(default=UNSET, alias="fileName")
    """Exported record file name"""

    export_id: Optional[str] = Field(default=UNSET, alias="exportId")
    """BILL-generated ID of the exported record file.

    Use this value to get the download URL for the exported record file with ``GET
    /v3/exports/{exportId}/download-link``."""


class ExportResponseDtoDict(TypedDict):
    entity: NotRequired[ExportEntityOrStr]
    name: NotRequired[str]
    processed_time: NotRequired[RFC3339DateTime]
    status: NotRequired[ExportStatusOrStr]
    file_name: NotRequired[str]
    export_id: NotRequired[str]
