from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ContractTemplateBillingRule(SdkBaseModel):
    name: Optional[str] = UNSET
    management_accounts: Optional[list[str]] = Field(default=UNSET, alias="managementAccounts")
    filters: Optional[list[Any]] = UNSET
    formula: Optional[str] = UNSET


class ContractTemplateBillingRuleDict(TypedDict):
    name: NotRequired[str]
    management_accounts: NotRequired[list[str]]
    filters: NotRequired[list[Any]]
    formula: NotRequired[str]
