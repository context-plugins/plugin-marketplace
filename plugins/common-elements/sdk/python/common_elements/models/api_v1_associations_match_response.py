from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum_commonelements_com_associations_api import (
    DatumCommonelementsComAssociationsApi,
    DatumCommonelementsComAssociationsApiDict,
)


class ApiV1AssociationsMatchResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[DatumCommonelementsComAssociationsApi]


class ApiV1AssociationsMatchResponseDict(TypedDict):
    ok: Literal["True"]
    data: list[DatumCommonelementsComAssociationsApiDict]
