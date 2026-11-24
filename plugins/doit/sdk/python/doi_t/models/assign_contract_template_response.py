from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .assigned_contract import AssignedContract, AssignedContractDict


class AssignContractTemplateResponse(SdkBaseModel):
    """The draft contracts created by applying a contract template."""

    count: Optional[int] = UNSET
    """Number of draft contracts created."""

    created_contracts: Optional[list[AssignedContract]] = Field(default=UNSET, alias="createdContracts")
    """One entry per created draft contract, in the order the customers were supplied."""


class AssignContractTemplateResponseDict(TypedDict):
    count: NotRequired[int]
    created_contracts: NotRequired[list[AssignedContractDict]]
