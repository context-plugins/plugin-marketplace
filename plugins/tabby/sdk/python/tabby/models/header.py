from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Header(SdkBaseModel):
    title: Optional[str] = UNSET
    """Arbitrary header name to sign the request."""

    value: Optional[str] = UNSET
    """Random string to sign the request."""


class HeaderDict(TypedDict):
    title: NotRequired[str]
    value: NotRequired[str]
