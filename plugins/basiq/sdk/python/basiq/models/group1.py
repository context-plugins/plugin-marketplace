from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Group1(SdkBaseModel):
    """Details the code and title of the merchant ANZSIC group."""

    code: Optional[str] = UNSET
    title: Optional[str] = UNSET


class Group1Dict(TypedDict):
    code: NotRequired[str]
    title: NotRequired[str]
