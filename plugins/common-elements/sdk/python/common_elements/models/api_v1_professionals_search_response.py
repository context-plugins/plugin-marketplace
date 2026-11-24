from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum1_commonelements_com_professionals_and_licenses_api import (
    Datum1CommonelementsComProfessionalsAndLicensesApi,
    Datum1CommonelementsComProfessionalsAndLicensesApiDict,
)


class ApiV1ProfessionalsSearchResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[Datum1CommonelementsComProfessionalsAndLicensesApi]


class ApiV1ProfessionalsSearchResponseDict(TypedDict):
    ok: Literal["True"]
    data: list[Datum1CommonelementsComProfessionalsAndLicensesApiDict]
