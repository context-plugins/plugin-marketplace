from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum_commonelements_com_statutes_api import (
    DatumCommonelementsComStatutesApi,
    DatumCommonelementsComStatutesApiDict,
)


class ApiV1StatutesSearchResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[DatumCommonelementsComStatutesApi]


class ApiV1StatutesSearchResponseDict(TypedDict):
    ok: Literal["True"]
    data: list[DatumCommonelementsComStatutesApiDict]
