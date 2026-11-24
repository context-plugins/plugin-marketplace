from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .email_domain import EmailDomain, EmailDomainDict


class ApiV1EmailDomainsResponse(SdkBaseModel):
    data: Optional[list[EmailDomain]] = UNSET


class ApiV1EmailDomainsResponseDict(TypedDict):
    data: NotRequired[list[EmailDomainDict]]
