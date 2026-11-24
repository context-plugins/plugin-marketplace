from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Detail(SdkBaseModel):
    code: str
    message: str
    field: str


class DetailDict(TypedDict):
    code: str
    message: str
    field: str
