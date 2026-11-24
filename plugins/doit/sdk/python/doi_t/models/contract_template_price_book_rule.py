from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ContractTemplatePriceBookRule(SdkBaseModel):
    name: Optional[str] = UNSET
    percentage_change: Optional[float] = Field(default=UNSET, alias="percentageChange")
    unit_price: Optional[float] = Field(default=UNSET, alias="unitPrice")
    filters: Optional[list[Any]] = UNSET
    formula: Optional[str] = UNSET
    cloud: Optional[str] = UNSET
    line_item_description: Optional[str] = Field(default=UNSET, alias="lineItemDescription")
    apply_in_line: Optional[bool] = Field(default=UNSET, alias="applyInLine")
    include_credits: Optional[bool] = Field(default=UNSET, alias="includeCredits")
    apply_aws_eligible_discount: Optional[bool] = Field(default=UNSET, alias="applyAWSEligibleDiscount")


class ContractTemplatePriceBookRuleDict(TypedDict):
    name: NotRequired[str]
    percentage_change: NotRequired[float]
    unit_price: NotRequired[float]
    filters: NotRequired[list[Any]]
    formula: NotRequired[str]
    cloud: NotRequired[str]
    line_item_description: NotRequired[str]
    apply_in_line: NotRequired[bool]
    include_credits: NotRequired[bool]
    apply_aws_eligible_discount: NotRequired[bool]
