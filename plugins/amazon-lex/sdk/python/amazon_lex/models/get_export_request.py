from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.export_type import ExportTypeOrStr
from .enums.resource_type import ResourceTypeOrStr


class GetExportRequest(SdkBaseModel):
    name: str
    """The name of the bot to export."""

    version: str
    """The version of the bot to export."""

    resource_type: ResourceTypeOrStr = Field(alias="resourceType")
    """The type of resource to export."""

    export_type: ExportTypeOrStr = Field(alias="exportType")
    """The format of the exported data."""


class GetExportRequestDict(TypedDict):
    name: str
    version: str
    resource_type: ResourceTypeOrStr
    export_type: ExportTypeOrStr
