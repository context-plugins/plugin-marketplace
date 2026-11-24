from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .end_customer_mapping_item import EndCustomerMappingItem, EndCustomerMappingItemDict


class EndCustomerMappingBatchCreate(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    dpma_id: str = Field(alias="dpmaId")
    reseller_pma_account_id: str = Field(alias="resellerPmaAccountId")
    """12-digit AWS account ID of the reseller's program management account."""

    items: list[EndCustomerMappingItem]
    """Batch items. Duplicate ``ecAccountId`` or ``ecCustomerId`` values within the batch are rejected."""


class EndCustomerMappingBatchCreateDict(TypedDict):
    dpma_id: str
    reseller_pma_account_id: str
    items: list[EndCustomerMappingItemDict]
