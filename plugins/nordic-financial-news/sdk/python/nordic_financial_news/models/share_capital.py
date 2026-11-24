from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ShareCapital(SdkBaseModel):
    """Registered share capital"""

    amount: OptionalNullable[float] = UNSET
    """Share capital amount"""

    currency: OptionalNullable[str] = UNSET
    """Currency code (ISO 4217)"""


class ShareCapitalDict(TypedDict):
    amount: NotRequired[float | None]
    currency: NotRequired[str | None]
