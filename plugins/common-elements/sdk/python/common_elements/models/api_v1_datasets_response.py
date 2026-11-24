from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum_commonelements_com_dataset_catalog_api import (
    DatumCommonelementsComDatasetCatalogApi,
    DatumCommonelementsComDatasetCatalogApiDict,
)


class ApiV1DatasetsResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[DatumCommonelementsComDatasetCatalogApi]


class ApiV1DatasetsResponseDict(TypedDict):
    ok: Literal["True"]
    data: list[DatumCommonelementsComDatasetCatalogApiDict]
