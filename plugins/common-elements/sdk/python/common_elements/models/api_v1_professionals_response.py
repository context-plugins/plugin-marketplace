from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data_commonelements_com_professionals_and_licenses_api import (
    DataCommonelementsComProfessionalsAndLicensesApi,
    DataCommonelementsComProfessionalsAndLicensesApiDict,
)


class ApiV1ProfessionalsResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: DataCommonelementsComProfessionalsAndLicensesApi


class ApiV1ProfessionalsResponseDict(TypedDict):
    ok: Literal["True"]
    data: DataCommonelementsComProfessionalsAndLicensesApiDict
