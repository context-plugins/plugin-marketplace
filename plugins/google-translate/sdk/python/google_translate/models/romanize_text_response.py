from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .romanization import Romanization, RomanizationDict


class RomanizeTextResponse(SdkBaseModel):
    """The response message for synchronous romanization."""

    romanizations: Optional[list[Romanization]] = UNSET
    """Text romanization responses. This field has the same length as ``contents``."""


class RomanizeTextResponseDict(TypedDict):
    romanizations: NotRequired[list[RomanizationDict]]
