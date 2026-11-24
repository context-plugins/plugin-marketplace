from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EndCustomerMappingItem(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    ec_account_id: str = Field(alias="ecAccountId")
    """12-digit AWS account ID of the end-customer account being mapped."""

    ec_customer_id: str = Field(alias="ecCustomerId")
    """DoiT customer ID to map the end-customer account to."""

    cur_base_path: Optional[str] = Field(default=UNSET, alias="curBasePath")
    """Optional CUR export base path for the end-customer account."""


class EndCustomerMappingItemDict(TypedDict):
    ec_account_id: str
    ec_customer_id: str
    cur_base_path: NotRequired[str]
