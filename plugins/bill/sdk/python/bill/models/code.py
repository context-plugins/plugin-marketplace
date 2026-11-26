from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Code(SdkBaseModel):
    name: str
    """Name"""


class CodeDict(TypedDict):
    name: str
