from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.scope import ScopeOrStr
from .enums.subtype import SubtypeOrStr


class StoreCampaignItemTicketRequest(SdkBaseModel):
    name: str
    price: float
    total_quantity: OptionalNullable[int] = UNSET
    subtype: OptionalNullable[SubtypeOrStr] = UNSET
    active: OptionalNullable[bool] = UNSET
    retail_price: OptionalNullable[float] = UNSET
    description: OptionalNullable[str] = UNSET
    bundle_only: OptionalNullable[bool] = UNSET
    hide_remaining: OptionalNullable[bool] = UNSET
    scope: OptionalNullable[ScopeOrStr] = UNSET
    bundles: OptionalNullable[list[str]] = UNSET
    custom_fields: OptionalNullable[list[str]] = UNSET
    pictures: OptionalNullable[list[str]] = UNSET


class StoreCampaignItemTicketRequestDict(TypedDict):
    name: str
    price: float
    total_quantity: NotRequired[int | None]
    subtype: NotRequired[SubtypeOrStr | None]
    active: NotRequired[bool | None]
    retail_price: NotRequired[float | None]
    description: NotRequired[str | None]
    bundle_only: NotRequired[bool | None]
    hide_remaining: NotRequired[bool | None]
    scope: NotRequired[ScopeOrStr | None]
    bundles: NotRequired[list[str] | None]
    custom_fields: NotRequired[list[str] | None]
    pictures: NotRequired[list[str] | None]
