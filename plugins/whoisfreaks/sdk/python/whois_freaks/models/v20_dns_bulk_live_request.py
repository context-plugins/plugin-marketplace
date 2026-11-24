from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V20DnsBulkLiveRequest(SdkBaseModel):
    domain_names: Optional[list[str]] = Field(default=UNSET, alias="domainNames")
    ip_addresses: Optional[list[str]] = Field(default=UNSET, alias="ipAddresses")


class V20DnsBulkLiveRequestDict(TypedDict):
    domain_names: NotRequired[list[str]]
    ip_addresses: NotRequired[list[str]]
