from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ContractVersionDto(SdkBaseModel):
    checksum: Optional[str] = UNSET
    contents: Optional[str] = UNSET
    contract_id: Optional[str] = Field(default=UNSET, alias="contractId")
    created: Optional[RFC3339DateTime] = UNSET
    creator_id: Optional[str] = Field(default=UNSET, alias="creatorId")
    id: Optional[str] = UNSET


class ContractVersionDtoDict(TypedDict):
    checksum: NotRequired[str]
    contents: NotRequired[str]
    contract_id: NotRequired[str]
    created: NotRequired[RFC3339DateTime]
    creator_id: NotRequired[str]
    id: NotRequired[str]
