from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Health(SdkBaseModel):
    status: Literal["ok"] = "ok"


class HealthDict(TypedDict):
    status: Literal["ok"]
