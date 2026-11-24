from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .end_customer_mapping_result import EndCustomerMappingResult, EndCustomerMappingResultDict
from .invalid_handshake_item import InvalidHandshakeItem, InvalidHandshakeItemDict


class EndCustomerMappingBatchResult(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    dpma_id: str = Field(alias="dpmaId")
    reseller_pma_account_id: str = Field(alias="resellerPmaAccountId")
    results: list[EndCustomerMappingResult]
    invalid_items: Optional[list[InvalidHandshakeItem]] = Field(default=UNSET, alias="invalidItems")
    """Items rejected before processing. Omitted when every item passed validation."""


class EndCustomerMappingBatchResultDict(TypedDict):
    dpma_id: str
    reseller_pma_account_id: str
    results: list[EndCustomerMappingResultDict]
    invalid_items: NotRequired[list[InvalidHandshakeItemDict]]
