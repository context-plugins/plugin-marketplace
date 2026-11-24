from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bulk_whois_item import BulkWhoisItem, BulkWhoisItemDict


class BulkWhoisResponse(SdkBaseModel):
    bulk_whois_response: Optional[list[BulkWhoisItem]] = UNSET


class BulkWhoisResponseDict(TypedDict):
    bulk_whois_response: NotRequired[list[BulkWhoisItemDict]]
