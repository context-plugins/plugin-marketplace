from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.archived_bitly_groups_api import ArchivedBitlyGroupsApiOrStr


class GroupExportFilter(SdkBaseModel):
    """Search constraints used to resolve links or QR codes for export. Required for links_list and qr_codes_list."""

    tags: Optional[list[str]] = UNSET
    domain: Optional[str] = UNSET
    archived: Optional[ArchivedBitlyGroupsApiOrStr] = UNSET
    """Filter by archive state."""

    query: Optional[str] = UNSET
    """Free-text search query."""

    created_after: Optional[int] = UNSET
    """Include items created at or after this Unix timestamp (UTC)."""

    created_before: Optional[int] = UNSET
    """Include items created before this Unix timestamp (UTC)."""

    campaign_guid: Optional[str] = UNSET
    """Filter links by campaign GUID. Ignored for qr_codes_list."""


class GroupExportFilterDict(TypedDict):
    tags: NotRequired[list[str]]
    domain: NotRequired[str]
    archived: NotRequired[ArchivedBitlyGroupsApiOrStr]
    query: NotRequired[str]
    created_after: NotRequired[int]
    created_before: NotRequired[int]
    campaign_guid: NotRequired[str]
