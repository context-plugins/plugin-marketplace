from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dns_prevalidation_details import DnsPrevalidationDetails, DnsPrevalidationDetailsDict


class PrevalidationDetails(SdkBaseModel):
    """Exactly one member is set."""

    dns_prevalidation: Optional[DnsPrevalidationDetails] = Field(default=UNSET, alias="DnsPrevalidation")


class PrevalidationDetailsDict(TypedDict):
    dns_prevalidation: NotRequired[DnsPrevalidationDetailsDict]
