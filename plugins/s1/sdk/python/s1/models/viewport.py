from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class Viewport(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    width: int = 1440
    height: int = 900
    device_scale_factor: float = 1.0


class ViewportDict(TypedDict):
    width: NotRequired[int]
    height: NotRequired[int]
    device_scale_factor: NotRequired[float]
