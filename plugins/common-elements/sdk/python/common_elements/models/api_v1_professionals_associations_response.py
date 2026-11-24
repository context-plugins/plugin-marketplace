from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data1_commonelements_com_professionals_and_licenses_api import (
    Data1CommonelementsComProfessionalsAndLicensesApi,
    Data1CommonelementsComProfessionalsAndLicensesApiDict,
)


class ApiV1ProfessionalsAssociationsResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[Data1CommonelementsComProfessionalsAndLicensesApi]


class ApiV1ProfessionalsAssociationsResponseDict(TypedDict):
    ok: Literal["True"]
    data: list[Data1CommonelementsComProfessionalsAndLicensesApiDict]
