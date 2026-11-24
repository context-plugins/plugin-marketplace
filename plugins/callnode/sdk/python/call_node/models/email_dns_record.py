from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_callnode_io_email_api import StatusCallnodeIoEmailApiOrStr
from .enums.type import TypeOrStr


class EmailDnsRecord(SdkBaseModel):
    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    """Always TXT: the DKIM key, the SPF entry and the DMARC policy, the three records verification checks. No MX or
    CNAME is issued (receiving and tracking are off)."""

    name: Optional[str] = UNSET
    """The full host to publish at, such as _dmarc.mail.acme.com."""

    value: Optional[str] = UNSET
    priority: Optional[int] = UNSET
    ttl: Optional[str] = UNSET
    status: Optional[StatusCallnodeIoEmailApiOrStr] = UNSET


class EmailDnsRecordDict(TypedDict):
    type_: NotRequired[TypeOrStr]
    name: NotRequired[str]
    value: NotRequired[str]
    priority: NotRequired[int]
    ttl: NotRequired[str]
    status: NotRequired[StatusCallnodeIoEmailApiOrStr]
