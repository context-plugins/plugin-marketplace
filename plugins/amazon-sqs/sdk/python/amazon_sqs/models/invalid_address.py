from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidAddress(SdkBaseModel):
    message: Optional[str] = UNSET


class InvalidAddressDict(TypedDict):
    message: NotRequired[str]
