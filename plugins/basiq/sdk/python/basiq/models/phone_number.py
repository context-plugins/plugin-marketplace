from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PhoneNumber(SdkBaseModel):
    """Provides the local and international telephone numbers of the merchant."""

    local: Optional[str] = UNSET
    international: Optional[str] = UNSET


class PhoneNumberDict(TypedDict):
    local: NotRequired[str]
    international: NotRequired[str]
