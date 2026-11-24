from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum1_commonelements_com_dataset_catalog_api import (
    Datum1CommonelementsComDatasetCatalogApi,
    Datum1CommonelementsComDatasetCatalogApiDict,
)


class ApiV1AssociationsDatasetsResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[Datum1CommonelementsComDatasetCatalogApi]


class ApiV1AssociationsDatasetsResponseDict(TypedDict):
    ok: Literal["True"]
    data: list[Datum1CommonelementsComDatasetCatalogApiDict]
