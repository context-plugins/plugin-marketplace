from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dns_name_filter import DnsNameFilter, DnsNameFilterDict


class SubjectAlternativeNameFilter(SdkBaseModel):
    """Exactly one member is set."""

    dns_name: Optional[DnsNameFilter] = Field(default=UNSET, alias="DnsName")


class SubjectAlternativeNameFilterDict(TypedDict):
    dns_name: NotRequired[DnsNameFilterDict]
