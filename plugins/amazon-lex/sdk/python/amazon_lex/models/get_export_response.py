from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.export_status4 import ExportStatus4OrStr
from .enums.export_type import ExportTypeOrStr
from .enums.resource_type1 import ResourceType1OrStr


class GetExportResponse(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the bot being exported."""

    version: Optional[str] = UNSET
    """The version of the bot being exported."""

    resource_type: Optional[ResourceType1OrStr] = Field(default=UNSET, alias="resourceType")
    """The type of the exported resource."""

    export_type: Optional[ExportTypeOrStr] = Field(default=UNSET, alias="exportType")
    """The format of the exported data."""

    export_status: Optional[ExportStatus4OrStr] = Field(default=UNSET, alias="exportStatus")
    """The status of the export. IN_PROGRESS - The export is in progress. READY - The export is complete. FAILED - The
    export could not be completed."""

    failure_reason: Optional[str] = Field(default=UNSET, alias="failureReason")
    """If status is FAILED, Amazon Lex provides the reason that it failed to export the resource."""

    url: Optional[str] = UNSET
    """An S3 pre-signed URL that provides the location of the exported resource. The exported resource is a ZIP archive
    that contains the exported resource in JSON format. The structure of the archive may change. Your code should not
    rely on the archive structure."""


class GetExportResponseDict(TypedDict):
    name: NotRequired[str]
    version: NotRequired[str]
    resource_type: NotRequired[ResourceType1OrStr]
    export_type: NotRequired[ExportTypeOrStr]
    export_status: NotRequired[ExportStatus4OrStr]
    failure_reason: NotRequired[str]
    url: NotRequired[str]
