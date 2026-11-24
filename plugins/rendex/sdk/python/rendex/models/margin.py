from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Margin(SdkBaseModel):
    """PDF page margins as CSS values (e.g. '1cm', '24px')."""

    top: Optional[str] = UNSET
    right: Optional[str] = UNSET
    bottom: Optional[str] = UNSET
    left: Optional[str] = UNSET


class MarginDict(TypedDict):
    top: NotRequired[str]
    right: NotRequired[str]
    bottom: NotRequired[str]
    left: NotRequired[str]
