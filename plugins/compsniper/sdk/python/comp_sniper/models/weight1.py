from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Weight1(SdkBaseModel):
    value: float
    unit: Literal["oz"] = "oz"


class Weight1Dict(TypedDict):
    value: float
    unit: Literal["oz"]
