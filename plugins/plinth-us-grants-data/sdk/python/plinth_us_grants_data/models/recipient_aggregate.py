from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RecipientAggregate(SdkBaseModel):
    recip_ein: Optional[str] = UNSET
    recip_name: Optional[str] = UNSET
    recip_city: Optional[str] = UNSET
    recip_state: Optional[str] = UNSET
    recip_zip: Optional[str] = UNSET
    recip_country: Optional[str] = UNSET
    total_amount: Optional[int] = UNSET
    grant_count: Optional[int] = UNSET
    funder_count: Optional[int] = UNSET
    first_fiscal_year: Optional[int] = UNSET
    last_fiscal_year: Optional[int] = UNSET


class RecipientAggregateDict(TypedDict):
    recip_ein: NotRequired[str]
    recip_name: NotRequired[str]
    recip_city: NotRequired[str]
    recip_state: NotRequired[str]
    recip_zip: NotRequired[str]
    recip_country: NotRequired[str]
    total_amount: NotRequired[int]
    grant_count: NotRequired[int]
    funder_count: NotRequired[int]
    first_fiscal_year: NotRequired[int]
    last_fiscal_year: NotRequired[int]
