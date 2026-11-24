from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HiveConfig1(SdkBaseModel):
    """Optional. At least one of hive_config or iceberg_config must be provided, otherwise, a validation error will be
    thrown. If only one is provided, the service only migrates tables of that specific type. If both are provided, both
    Hive and Iceberg tables will be migrated.Configuration for migrating Hive tables to a BigLake Hive catalog."""

    catalog: Optional[str] = UNSET
    """Required. The target catalog for migrated databases and tables. Format:
    "projects/{project_id_or_number}/catalogs/{catalog_id}"
    """

    databases: Optional[list[str]] = UNSET
    """Required. The list of databases to migrate to the Hive catalog. Use "*" to migrate all databases. Note: If
    Iceberg tables exist in these databases, they will only be migrated if iceberg_config is also specified."""


class HiveConfig1Dict(TypedDict):
    catalog: NotRequired[str]
    databases: NotRequired[list[str]]
