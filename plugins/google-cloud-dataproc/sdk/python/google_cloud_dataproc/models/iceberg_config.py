from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IcebergConfig(SdkBaseModel):
    """Configuration for migrating Iceberg metadata."""

    catalog: Optional[str] = UNSET
    """Required. The target catalog for migrated Iceberg metadata. Format:
    "projects/{project_id_or_number}/catalogs/{catalog_id}"
    """

    namespaces: Optional[list[str]] = UNSET
    """Required. The list of namespaces to migrate to the Iceberg REST catalog. Use "*" to migrate all namespaces. Note:
    If Hive tables exist in these namespaces, they will only be migrated if hive_config is also specified."""


class IcebergConfigDict(TypedDict):
    catalog: NotRequired[str]
    namespaces: NotRequired[list[str]]
