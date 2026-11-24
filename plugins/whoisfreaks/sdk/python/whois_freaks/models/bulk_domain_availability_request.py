from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BulkDomainAvailabilityRequest(SdkBaseModel):
    """Request body for POST /v2.0/domain/availability. Use domainNames OR tld."""

    domain_names: Optional[list[str]] = Field(default=UNSET, alias="domainNames")
    """Mode 1 — list of full domain names. Cannot be used with tld."""

    tld: Optional[list[str]] = UNSET
    """Mode 2 — TLDs to check against the domain query param. Cannot be used with domainNames."""


class BulkDomainAvailabilityRequestDict(TypedDict):
    domain_names: NotRequired[list[str]]
    tld: NotRequired[list[str]]
