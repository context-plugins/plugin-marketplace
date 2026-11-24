from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Weight(SdkBaseModel):
    value: float
    unit: Literal["lb"] = "lb"


class WeightDict(TypedDict):
    value: float
    unit: Literal["lb"]
