from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CreateContractResponse(SdkBaseModel):
    """The result of creating a contract or contract version."""

    contract_id: Optional[str] = Field(default=UNSET, alias="contractId")
    version: Optional[int] = UNSET
    status: Optional[str] = UNSET
    message: Optional[str] = UNSET
    timestamp: Optional[RFC3339DateTime] = UNSET


class CreateContractResponseDict(TypedDict):
    contract_id: NotRequired[str]
    version: NotRequired[int]
    status: NotRequired[str]
    message: NotRequired[str]
    timestamp: NotRequired[RFC3339DateTime]
