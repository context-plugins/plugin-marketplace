from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dns_prevalidation_options import DnsPrevalidationOptions, DnsPrevalidationOptionsDict


class PrevalidationOptions(SdkBaseModel):
    """Exactly one member is set."""

    dns_prevalidation: Optional[DnsPrevalidationOptions] = Field(default=UNSET, alias="DnsPrevalidation")


class PrevalidationOptionsDict(TypedDict):
    dns_prevalidation: NotRequired[DnsPrevalidationOptionsDict]
