from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.database_type1 import DatabaseType1OrStr
from .enums.type1 import Type1OrStr


class DatabaseDump(SdkBaseModel):
    """A specification of the location of and metadata about a database dump from a relational database management
    system."""

    type_: Optional[Type1OrStr] = Field(default=UNSET, alias="type")
    """Optional. The type of the database dump. If unspecified, defaults to MYSQL."""

    gcs_uri: Optional[str] = Field(default=UNSET, alias="gcsUri")
    """Optional. A Cloud Storage object or folder URI that specifies the source from which to import metadata. It must
    begin with gs://."""

    database_type: Optional[DatabaseType1OrStr] = Field(default=UNSET, alias="databaseType")
    """The type of the database."""

    source_database: Optional[str] = Field(default=UNSET, alias="sourceDatabase")
    """Optional. The name of the source database."""


class DatabaseDumpDict(TypedDict):
    type_: NotRequired[Type1OrStr]
    gcs_uri: NotRequired[str]
    database_type: NotRequired[DatabaseType1OrStr]
    source_database: NotRequired[str]
