from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TyposquattingDomain(SdkBaseModel):
    domain_name: Optional[str] = Field(default=UNSET, alias="domainName")
    create_date: Optional[str] = Field(default=UNSET, alias="createDate")
    expiry_date: Optional[str] = Field(default=UNSET, alias="expiryDate")
    last_seen: Optional[str] = Field(default=UNSET, alias="lastSeen")
    is_dropped: Optional[bool] = Field(default=UNSET, alias="isDropped")


class TyposquattingDomainDict(TypedDict):
    domain_name: NotRequired[str]
    create_date: NotRequired[str]
    expiry_date: NotRequired[str]
    last_seen: NotRequired[str]
    is_dropped: NotRequired[bool]
