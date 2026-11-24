from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.discount_code_type import DiscountCodeTypeOrStr


class UpdateCampaignDiscountCodeRequest(SdkBaseModel):
    items: OptionalNullable[list[str]] = UNSET
    amount: float
    type_: Optional[DiscountCodeTypeOrStr] = Field(default=UNSET, alias="type")
    active: Optional[bool] = UNSET
    code: Optional[str] = UNSET
    uses: OptionalNullable[float] = UNSET
    starts_at: OptionalNullable[RFC3339DateTime] = UNSET
    expires_at: OptionalNullable[RFC3339DateTime] = UNSET


class UpdateCampaignDiscountCodeRequestDict(TypedDict):
    items: NotRequired[list[str] | None]
    amount: float
    type_: NotRequired[DiscountCodeTypeOrStr]
    active: NotRequired[bool]
    code: NotRequired[str]
    uses: NotRequired[float | None]
    starts_at: NotRequired[RFC3339DateTime | None]
    expires_at: NotRequired[RFC3339DateTime | None]
