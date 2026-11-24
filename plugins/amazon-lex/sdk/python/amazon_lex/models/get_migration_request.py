from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetMigrationRequest(SdkBaseModel):
    migration_id: str = Field(alias="migrationId")
    """The unique identifier of the migration to view. The migrationID is returned by the operation."""


class GetMigrationRequestDict(TypedDict):
    migration_id: str
