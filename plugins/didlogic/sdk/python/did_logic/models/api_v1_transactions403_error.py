from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1Transactions403Error(SdkBaseModel):
    error: str


class ApiV1Transactions403ErrorDict(TypedDict):
    error: str
