from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1HealthResponse(SdkBaseModel):
    status: Literal["ok"] = "ok"


class ApiV1HealthResponseDict(TypedDict):
    status: Literal["ok"]
