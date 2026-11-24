from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApprovalDeliverdDevScreenApi(SdkBaseModel):
    id: str
    url: str
    status: str


class ApprovalDeliverdDevScreenApiDict(TypedDict):
    id: str
    url: str
    status: str
