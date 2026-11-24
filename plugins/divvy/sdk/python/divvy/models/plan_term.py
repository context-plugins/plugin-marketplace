from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.plan_term_item_name import PlanTermItemNameOrStr


class PlanTerm(SdkBaseModel):
    """Plan Term."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Plan charge type"""

    name: Optional[PlanTermItemNameOrStr] = UNSET
    tier: Optional[float] = UNSET
    """Plan charge tier"""

    quantity: Optional[float] = UNSET
    """Quantity for the plan charge"""

    price: Optional[float] = UNSET
    """Plan charge"""


class PlanTermDict(TypedDict):
    type_: NotRequired[str]
    name: NotRequired[PlanTermItemNameOrStr]
    tier: NotRequired[float]
    quantity: NotRequired[float]
    price: NotRequired[float]
