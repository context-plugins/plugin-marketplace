from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_catalog_config2 import DataCatalogConfig2, DataCatalogConfig2Dict


class MetadataIntegration(SdkBaseModel):
    """Specifies how metastore metadata should be integrated with external services."""

    data_catalog_config: Optional[DataCatalogConfig2] = Field(default=UNSET, alias="dataCatalogConfig")
    """Optional. The integration config for the Data Catalog service."""


class MetadataIntegrationDict(TypedDict):
    data_catalog_config: NotRequired[DataCatalogConfig2Dict]
