from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .domain_scope import DomainScope, DomainScopeDict


class DnsPrevalidationOptions(SdkBaseModel):
    domain_scope: Optional[DomainScope] = Field(default=UNSET, alias="DomainScope")
    hosted_zone_id: Optional[str] = Field(default=UNSET, alias="HostedZoneId")
    """The Route 53 hosted zone ID for DNS validation."""


class DnsPrevalidationOptionsDict(TypedDict):
    domain_scope: NotRequired[DomainScopeDict]
    hosted_zone_id: NotRequired[str]
