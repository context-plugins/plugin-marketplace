from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DataCatalogConfig(SdkBaseModel):
    """Specifies how metastore metadata should be integrated with the Data Catalog service."""

    enabled: Optional[bool] = UNSET
    """Optional. Defines whether the metastore metadata should be synced to Data Catalog. The default value is to
    disable syncing metastore metadata to Data Catalog."""


class DataCatalogConfigDict(TypedDict):
    enabled: NotRequired[bool]
