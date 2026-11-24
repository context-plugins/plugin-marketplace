from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1SmsResponse2(SdkBaseModel):
    error: str


class ApiV1SmsResponse2Dict(TypedDict):
    error: str
