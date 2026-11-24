from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data1 import Data1, Data1Dict


class ApiV1AssociationsVendorsResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[Data1]


class ApiV1AssociationsVendorsResponseDict(TypedDict):
    ok: Literal["True"]
    data: list[Data1Dict]
