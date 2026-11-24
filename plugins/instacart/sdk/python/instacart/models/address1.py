from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Address1(SdkBaseModel):
    """The physical address of the store."""

    address_line_1: Optional[str] = UNSET
    """The street address."""

    city: Optional[str] = UNSET
    """The city."""

    state: Optional[str] = UNSET
    """The state or province."""

    postal_code: Optional[str] = UNSET
    """The postal or ZIP code."""


class Address1Dict(TypedDict):
    address_line_1: NotRequired[str]
    city: NotRequired[str]
    state: NotRequired[str]
    postal_code: NotRequired[str]
