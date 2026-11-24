from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Class1EnrichApi(SdkBaseModel):
    """Details the code and title of the merchant ANZSIC class."""

    code: Optional[str] = UNSET
    title: Optional[str] = UNSET


class Class1EnrichApiDict(TypedDict):
    code: NotRequired[str]
    title: NotRequired[str]
