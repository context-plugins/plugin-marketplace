from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_doi_t_contracts_api import StatusDoiTContractsApiOrStr


class ContractLifecycleResponse(SdkBaseModel):
    """Result of an activate or cancel operation."""

    contract_id: Optional[str] = Field(default=UNSET, alias="contractId")
    """The contract identifier."""

    status: Optional[StatusDoiTContractsApiOrStr] = UNSET
    """The contract status after the operation (``active``, ``scheduled``, or ``cancelled``)."""


class ContractLifecycleResponseDict(TypedDict):
    contract_id: NotRequired[str]
    status: NotRequired[StatusDoiTContractsApiOrStr]
