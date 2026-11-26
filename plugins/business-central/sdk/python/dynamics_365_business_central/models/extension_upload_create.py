from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.schedule1 import Schedule1OrStr
from .enums.schema_sync_mode1 import SchemaSyncMode1OrStr


class ExtensionUploadCreate(SdkBaseModel):
    schedule: Schedule1OrStr
    schema_sync_mode: SchemaSyncMode1OrStr = Field(alias="schemaSyncMode")


class ExtensionUploadCreateDict(TypedDict):
    schedule: Schedule1OrStr
    schema_sync_mode: SchemaSyncMode1OrStr
