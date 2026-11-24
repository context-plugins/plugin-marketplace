from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicApiScanDefinitionSlim(SdkBaseModel):
    id: str
    name: str


class PublicApiScanDefinitionSlimDict(TypedDict):
    id: str
    name: str
