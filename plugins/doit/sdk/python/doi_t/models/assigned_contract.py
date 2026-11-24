from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AssignedContract(SdkBaseModel):
    """A draft contract created from a contract template."""

    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    """Identifier of the customer the draft contract was created for."""

    contract_id: Optional[str] = Field(default=UNSET, alias="contractId")
    """Identifier of the created draft contract."""


class AssignedContractDict(TypedDict):
    customer_id: NotRequired[str]
    contract_id: NotRequired[str]
