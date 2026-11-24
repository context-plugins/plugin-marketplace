from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Usage(SdkBaseModel):
    credits_spent: Optional[int] = UNSET
    balance: OptionalNullable[int] = UNSET
    """Remaining balance, or null for unlimited (admin) accounts."""

    bytes_: Optional[int] = Field(default=UNSET, alias="bytes")


class UsageDict(TypedDict):
    credits_spent: NotRequired[int]
    balance: NotRequired[int | None]
    bytes_: NotRequired[int]
