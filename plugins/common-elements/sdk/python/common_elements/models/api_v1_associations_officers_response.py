from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data3 import Data3, Data3Dict


class ApiV1AssociationsOfficersResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[Data3]


class ApiV1AssociationsOfficersResponseDict(TypedDict):
    ok: Literal["True"]
    data: list[Data3Dict]
