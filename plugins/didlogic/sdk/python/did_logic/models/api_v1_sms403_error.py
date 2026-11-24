from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1Sms403Error(SdkBaseModel):
    error: str


class ApiV1Sms403ErrorDict(TypedDict):
    error: str
