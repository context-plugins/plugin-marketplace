from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .active_promotion import ActivePromotion, ActivePromotionDict
from .funding import Funding, FundingDict


class Rates(SdkBaseModel):
    default_card_account_id: Optional[str] = Field(default=UNSET, alias="defaultCardAccountId")
    """ID of the default card account"""

    funding: Optional[Funding] = UNSET
    active_promotion: Optional[ActivePromotion] = Field(default=UNSET, alias="activePromotion")


class RatesDict(TypedDict):
    default_card_account_id: NotRequired[str]
    funding: NotRequired[FundingDict]
    active_promotion: NotRequired[ActivePromotionDict]
