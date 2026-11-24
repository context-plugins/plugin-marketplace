from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum_commonelements_com_professionals_and_licenses_api import (
    DatumCommonelementsComProfessionalsAndLicensesApi,
    DatumCommonelementsComProfessionalsAndLicensesApiDict,
)


class ApiV1LicensesVerifyResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[DatumCommonelementsComProfessionalsAndLicensesApi]


class ApiV1LicensesVerifyResponseDict(TypedDict):
    ok: Literal["True"]
    data: list[DatumCommonelementsComProfessionalsAndLicensesApiDict]
