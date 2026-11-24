from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .email_dns_record import EmailDnsRecord, EmailDnsRecordDict
from .enums.status_callnode_io_email_api import StatusCallnodeIoEmailApiOrStr
from .new_domain_limit import NewDomainLimit, NewDomainLimitDict


class EmailDomain(SdkBaseModel):
    id: Optional[str] = UNSET
    domain: Optional[str] = UNSET
    status: Optional[StatusCallnodeIoEmailApiOrStr] = UNSET
    dns_records: Optional[list[EmailDnsRecord]] = Field(default=UNSET, alias="dnsRecords")
    verification_error: OptionalNullable[str] = Field(default=UNSET, alias="verificationError")
    verified_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="verifiedAt")
    last_checked_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="lastCheckedAt")
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    new_domain_limit: OptionalNullable[NewDomainLimit] = Field(default=UNSET, alias="newDomainLimit")
    """On the create, verify and refresh=1 answers only (absent on plain reads): the per-day cap on a domain registered
    less than 30 days ago, rising over its first month and reset at 00:00 UTC; null once the domain is not capped."""

    replay: Optional[bool] = UNSET
    """On the create response only - true when the account already held the domain."""


class EmailDomainDict(TypedDict):
    id: NotRequired[str]
    domain: NotRequired[str]
    status: NotRequired[StatusCallnodeIoEmailApiOrStr]
    dns_records: NotRequired[list[EmailDnsRecordDict]]
    verification_error: NotRequired[str | None]
    verified_at: NotRequired[RFC3339DateTime | None]
    last_checked_at: NotRequired[RFC3339DateTime | None]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
    new_domain_limit: NotRequired[NewDomainLimitDict | None]
    replay: NotRequired[bool]
