from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .database_dump2 import DatabaseDump2, DatabaseDump2Dict
from .enums.state16 import State16OrStr


class MetadataImport(SdkBaseModel):
    """A metastore resource that imports metadata."""

    name: Optional[str] = UNSET
    """Immutable. Identifier. The relative resource name of the metadata import, of the
    form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports/{metadata_import_id}."""

    database_dump: Optional[DatabaseDump2] = Field(default=UNSET, alias="databaseDump")
    """Immutable. A database dump from a pre-existing metastore's database."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time when the metadata import was started."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time when the metadata import was last updated."""

    state: Optional[State16OrStr] = UNSET
    """Output only. The current state of the metadata import."""

    description: Optional[str] = UNSET
    """Optional. The description of the metadata import."""

    end_time: Optional[str] = Field(default=UNSET, alias="endTime")
    """Output only. The time when the metadata import finished."""


class MetadataImportDict(TypedDict):
    name: NotRequired[str]
    database_dump: NotRequired[DatabaseDump2Dict]
    create_time: NotRequired[str]
    update_time: NotRequired[str]
    state: NotRequired[State16OrStr]
    description: NotRequired[str]
    end_time: NotRequired[str]
