from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Division1(SdkBaseModel):
    """Details the code and title of the merchant ANZSIC division."""

    code: Optional[str] = UNSET
    title: Optional[str] = UNSET


class Division1Dict(TypedDict):
    code: NotRequired[str]
    title: NotRequired[str]
