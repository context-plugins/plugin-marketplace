from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.renewal_policy import RenewalPolicyOrStr
from .enums.status1_doi_t_contracts_api import Status1DoiTContractsApiOrStr
from .version import Version, VersionDict


class MtsContractDetailResponse(SdkBaseModel):
    """A single contract with its version terms. DoiT-internal fields are not exposed."""

    id: Optional[str] = UNSET
    """The unique identifier of the contract."""

    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    """The customer (tenant) that holds the contract."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """The immutable contract type."""

    status: Optional[Status1DoiTContractsApiOrStr] = UNSET
    """The contract status."""

    name: Optional[str] = UNSET
    """The contract name."""

    start_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="startDate")
    """The contract start date."""

    end_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="endDate")
    """The contract end date."""

    renewal_policy: Optional[RenewalPolicyOrStr] = Field(default=UNSET, alias="renewalPolicy")
    """The renewal policy."""

    doit_invoicing_enabled: Optional[bool] = Field(default=UNSET, alias="doitInvoicingEnabled")
    """Whether DoiT generates invoices for this contract."""

    current_version_number: OptionalNullable[int] = Field(default=UNSET, alias="currentVersionNumber")
    """The current version number of the contract."""

    time_created: Optional[RFC3339DateTime] = Field(default=UNSET, alias="timeCreated")
    """When the contract was created."""

    versions: Optional[list[Version]] = UNSET
    """The contract versions, newest last, with their billing terms."""


class MtsContractDetailResponseDict(TypedDict):
    id: NotRequired[str]
    customer_id: NotRequired[str]
    type_: NotRequired[str]
    status: NotRequired[Status1DoiTContractsApiOrStr]
    name: NotRequired[str]
    start_date: NotRequired[RFC3339DateTime | None]
    end_date: NotRequired[RFC3339DateTime | None]
    renewal_policy: NotRequired[RenewalPolicyOrStr]
    doit_invoicing_enabled: NotRequired[bool]
    current_version_number: NotRequired[int | None]
    time_created: NotRequired[RFC3339DateTime]
    versions: NotRequired[list[VersionDict]]
