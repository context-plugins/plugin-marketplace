from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LakehouseProxyConfig(SdkBaseModel):
    """Configuration for Dataproc Metastore to Lakehouse proxy routing.In a phased migration, namespaces are migrated
    from Dataproc Metastore to a Lakehouse Iceberg REST Catalog in batches. Between and after migration phases, the
    metastore service operates in PROXY state where requests for migrated namespaces are forwarded to the Lakehouse
    catalog while unmigrated namespaces continue to be served locally by DPMS."""

    namespaces: Optional[list[str]] = UNSET
    """Output only. The list of namespaces currently proxied to the Lakehouse catalog. As each migration batch
    completes, newly migrated namespaces are added to this list."""

    catalog: Optional[str] = UNSET
    """Output only. The Lakehouse Iceberg REST Catalog where requests are being proxied to. Format:
    projects/{project_id_or_number}/catalogs/{catalog_id}."""


class LakehouseProxyConfigDict(TypedDict):
    namespaces: NotRequired[list[str]]
    catalog: NotRequired[str]
