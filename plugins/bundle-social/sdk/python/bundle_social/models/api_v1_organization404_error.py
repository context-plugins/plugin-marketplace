from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1Organization404Error(SdkBaseModel):
    message: str


class ApiV1Organization404ErrorDict(TypedDict):
    message: str
