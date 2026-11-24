from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.order_type import OrderTypeOrStr


class GoogleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy(SdkBaseModel):
    """Sorts by dimension values."""

    dimension_name: Optional[str] = Field(default=UNSET, alias="dimensionName")
    """A dimension name in the request to order by."""

    order_type: Optional[OrderTypeOrStr] = Field(default=UNSET, alias="orderType")
    """Controls the rule for dimension value ordering."""


class GoogleAnalyticsAdminV1BetaAccessOrderByDimensionOrderByDict(TypedDict):
    dimension_name: NotRequired[str]
    order_type: NotRequired[OrderTypeOrStr]
