from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ByokProviderOption(SdkBaseModel):
    provider_id: int
    provider_name: str
    name: str


class ByokProviderOptionDict(TypedDict):
    provider_id: int
    provider_name: str
    name: str
