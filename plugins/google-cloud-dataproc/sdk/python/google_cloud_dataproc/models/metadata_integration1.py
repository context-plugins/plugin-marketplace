from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_catalog_config2 import DataCatalogConfig2, DataCatalogConfig2Dict


class MetadataIntegration1(SdkBaseModel):
    """Optional. The setting that defines how metastore metadata should be integrated with external services and
    systems."""

    data_catalog_config: Optional[DataCatalogConfig2] = Field(default=UNSET, alias="dataCatalogConfig")
    """Optional. The integration config for the Data Catalog service."""


class MetadataIntegration1Dict(TypedDict):
    data_catalog_config: NotRequired[DataCatalogConfig2Dict]
