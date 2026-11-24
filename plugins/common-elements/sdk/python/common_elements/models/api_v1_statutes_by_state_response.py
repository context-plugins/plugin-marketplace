from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum1_commonelements_com_statutes_api import (
    Datum1CommonelementsComStatutesApi,
    Datum1CommonelementsComStatutesApiDict,
)


class ApiV1StatutesByStateResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[Datum1CommonelementsComStatutesApi]


class ApiV1StatutesByStateResponseDict(TypedDict):
    ok: Literal["True"]
    data: list[Datum1CommonelementsComStatutesApiDict]
