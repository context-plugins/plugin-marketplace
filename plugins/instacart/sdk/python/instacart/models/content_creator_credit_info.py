from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ContentCreatorCreditInfo(SdkBaseModel):
    """Information for crediting the content creator on the recipe page."""

    name: Optional[str] = UNSET
    """The name of the content creator."""

    url: Optional[str] = UNSET
    """URL to the content creator's website or profile."""


class ContentCreatorCreditInfoDict(TypedDict):
    name: NotRequired[str]
    url: NotRequired[str]
