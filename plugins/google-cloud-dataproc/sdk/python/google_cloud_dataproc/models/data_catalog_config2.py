from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DataCatalogConfig2(SdkBaseModel):
    """Optional. The integration config for the Data Catalog service."""

    enabled: Optional[bool] = UNSET
    """Optional. Defines whether the metastore metadata should be synced to Data Catalog. The default value is to
    disable syncing metastore metadata to Data Catalog."""


class DataCatalogConfig2Dict(TypedDict):
    enabled: NotRequired[bool]
