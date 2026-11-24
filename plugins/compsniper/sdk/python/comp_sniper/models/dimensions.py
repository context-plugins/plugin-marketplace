from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Dimensions(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    length: float
    width: float
    height: float
    unit: Literal["in"] = "in"


class DimensionsDict(TypedDict):
    length: float
    width: float
    height: float
    unit: Literal["in"]
