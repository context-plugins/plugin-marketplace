from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LakehouseProxyConfig2(SdkBaseModel):
    """Output only. The Lakehouse proxy routing configuration for the metastore service."""

    namespaces: Optional[list[str]] = UNSET
    """Output only. The list of namespaces currently proxied to the Lakehouse catalog. As each migration batch
    completes, newly migrated namespaces are added to this list."""

    catalog: Optional[str] = UNSET
    """Output only. The Lakehouse Iceberg REST Catalog where requests are being proxied to. Format:
    projects/{project_id_or_number}/catalogs/{catalog_id}."""


class LakehouseProxyConfig2Dict(TypedDict):
    namespaces: NotRequired[list[str]]
    catalog: NotRequired[str]
