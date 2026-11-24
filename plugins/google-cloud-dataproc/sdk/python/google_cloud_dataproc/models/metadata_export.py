from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.database_dump_type import DatabaseDumpTypeOrStr
from .enums.state9 import State9OrStr


class MetadataExport(SdkBaseModel):
    """The details of a metadata export operation."""

    state: Optional[State9OrStr] = UNSET
    """Output only. The current state of the export."""

    end_time: Optional[str] = Field(default=UNSET, alias="endTime")
    """Output only. The time when the export ended."""

    start_time: Optional[str] = Field(default=UNSET, alias="startTime")
    """Output only. The time when the export started."""

    database_dump_type: Optional[DatabaseDumpTypeOrStr] = Field(default=UNSET, alias="databaseDumpType")
    """Output only. The type of the database dump."""

    destination_gcs_uri: Optional[str] = Field(default=UNSET, alias="destinationGcsUri")
    """Output only. A Cloud Storage URI of a folder that metadata are exported to, in the form of gs:////, where is
    automatically generated."""


class MetadataExportDict(TypedDict):
    state: NotRequired[State9OrStr]
    end_time: NotRequired[str]
    start_time: NotRequired[str]
    database_dump_type: NotRequired[DatabaseDumpTypeOrStr]
    destination_gcs_uri: NotRequired[str]
