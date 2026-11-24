from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V10GeolocationRequest(SdkBaseModel):
    ips: list[str]


class V10GeolocationRequestDict(TypedDict):
    ips: list[str]
