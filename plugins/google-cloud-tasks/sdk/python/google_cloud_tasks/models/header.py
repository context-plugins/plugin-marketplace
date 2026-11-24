from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Header(SdkBaseModel):
    """Defines a header message. A header can have a key and a value."""

    value: Optional[str] = UNSET
    """The Value of the header."""

    key: Optional[str] = UNSET
    """The Key of the header."""


class HeaderDict(TypedDict):
    value: NotRequired[str]
    key: NotRequired[str]
