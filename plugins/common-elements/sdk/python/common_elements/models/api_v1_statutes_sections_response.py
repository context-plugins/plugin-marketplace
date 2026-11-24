from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data_commonelements_com_statutes_api import DataCommonelementsComStatutesApi, DataCommonelementsComStatutesApiDict


class ApiV1StatutesSectionsResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: DataCommonelementsComStatutesApi


class ApiV1StatutesSectionsResponseDict(TypedDict):
    ok: Literal["True"]
    data: DataCommonelementsComStatutesApiDict
