from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1AgentsInvokeRequest(SdkBaseModel):
    task: str


class V1AgentsInvokeRequestDict(TypedDict):
    task: str
