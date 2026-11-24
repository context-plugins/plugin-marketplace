from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.export_status1 import ExportStatus1OrStr


class DeleteExportResponse(SdkBaseModel):
    export_id: Optional[str] = Field(default=UNSET, alias="exportId")
    """The unique identifier of the deleted export."""

    export_status: Optional[ExportStatus1OrStr] = Field(default=UNSET, alias="exportStatus")
    """The current status of the deletion. When the deletion is complete, the export will no longer be returned by the
    ListExports operation and calls to the DescribeExport operation with the export identifier will fail."""


class DeleteExportResponseDict(TypedDict):
    export_id: NotRequired[str]
    export_status: NotRequired[ExportStatus1OrStr]
