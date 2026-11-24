from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Identifier(SdkBaseModel):
    value: str
    identifier: str


class IdentifierDict(TypedDict):
    value: str
    identifier: str
