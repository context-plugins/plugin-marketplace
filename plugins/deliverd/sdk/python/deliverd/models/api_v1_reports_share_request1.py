from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.audience1 import Audience1, Audience1Dict


class ApiV1ReportsShareRequest1(SdkBaseModel):
    audience: list[Audience1]


class ApiV1ReportsShareRequest1Dict(TypedDict):
    audience: list[Audience1Dict]
