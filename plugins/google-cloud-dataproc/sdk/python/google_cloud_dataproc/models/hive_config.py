from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HiveConfig(SdkBaseModel):
    """Configuration for migrating Hive metadata."""

    catalog: Optional[str] = UNSET
    """Required. The target catalog for migrated databases and tables. Format:
    "projects/{project_id_or_number}/catalogs/{catalog_id}"
    """

    databases: Optional[list[str]] = UNSET
    """Required. The list of databases to migrate to the Hive catalog. Use "*" to migrate all databases. Note: If
    Iceberg tables exist in these databases, they will only be migrated if iceberg_config is also specified."""


class HiveConfigDict(TypedDict):
    catalog: NotRequired[str]
    databases: NotRequired[list[str]]
