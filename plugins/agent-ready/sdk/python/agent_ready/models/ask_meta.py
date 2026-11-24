from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.mode import ModeOrStr
from .enums.response_type import ResponseTypeOrStr


class AskMeta(SdkBaseModel):
    """NLWeb response envelope metadata."""

    response_type: ResponseTypeOrStr
    version: Literal["0.55"] = "0.55"
    mode: ModeOrStr


class AskMetaDict(TypedDict):
    response_type: ResponseTypeOrStr
    version: Literal["0.55"]
    mode: ModeOrStr
