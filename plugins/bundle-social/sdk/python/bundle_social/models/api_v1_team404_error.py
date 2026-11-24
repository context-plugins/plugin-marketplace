from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1Team404Error(SdkBaseModel):
    message: str


class ApiV1Team404ErrorDict(TypedDict):
    message: str
