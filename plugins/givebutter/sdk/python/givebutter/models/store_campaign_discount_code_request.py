from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.discount_code_type import DiscountCodeTypeOrStr


class StoreCampaignDiscountCodeRequest(SdkBaseModel):
    items: OptionalNullable[list[str]] = UNSET
    type_: DiscountCodeTypeOrStr = Field(alias="type")
    active: bool
    amount: float
    code: str
    uses: OptionalNullable[float] = UNSET
    starts_at: OptionalNullable[RFC3339DateTime] = UNSET
    expires_at: OptionalNullable[RFC3339DateTime] = UNSET


class StoreCampaignDiscountCodeRequestDict(TypedDict):
    items: NotRequired[list[str] | None]
    type_: DiscountCodeTypeOrStr
    active: bool
    amount: float
    code: str
    uses: NotRequired[float | None]
    starts_at: NotRequired[RFC3339DateTime | None]
    expires_at: NotRequired[RFC3339DateTime | None]
