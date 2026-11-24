from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V10SecurityRequest(SdkBaseModel):
    ips: list[str]


class V10SecurityRequestDict(TypedDict):
    ips: list[str]
