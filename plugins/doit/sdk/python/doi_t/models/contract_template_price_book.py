from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .contract_template_price_book_rule import ContractTemplatePriceBookRule, ContractTemplatePriceBookRuleDict


class ContractTemplatePriceBook(SdkBaseModel):
    name: Optional[str] = UNSET
    management_accounts: Optional[list[str]] = Field(default=UNSET, alias="managementAccounts")
    rules: Optional[list[ContractTemplatePriceBookRule]] = UNSET


class ContractTemplatePriceBookDict(TypedDict):
    name: NotRequired[str]
    management_accounts: NotRequired[list[str]]
    rules: NotRequired[list[ContractTemplatePriceBookRuleDict]]
