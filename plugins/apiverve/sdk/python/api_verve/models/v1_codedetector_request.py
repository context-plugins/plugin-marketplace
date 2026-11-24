from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1CodedetectorRequest(SdkBaseModel):
    code: str
    """The code snippet you want to detect the programming language of"""


class V1CodedetectorRequestDict(TypedDict):
    code: str
