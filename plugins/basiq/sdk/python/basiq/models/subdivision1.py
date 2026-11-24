from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Subdivision1(SdkBaseModel):
    """Details the code and title of the merchant ANZSIC subdivision."""

    code: Optional[str] = UNSET
    title: Optional[str] = UNSET


class Subdivision1Dict(TypedDict):
    code: NotRequired[str]
    title: NotRequired[str]
