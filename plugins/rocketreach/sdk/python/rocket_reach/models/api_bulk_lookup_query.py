from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .profile_match import ProfileMatch, ProfileMatchDict


class ApiBulkLookupQuery(SdkBaseModel):
    queries: Optional[list[ProfileMatch]] = UNSET
    """List of profile lookup queries for between 10 and 100 profiles"""

    profile_list: str = "API Bulk Lookup"
    """Name of a profile list to add looked up profiles to upon completion"""

    webhook_id: Optional[int] = UNSET
    """Webhook ID to post lookup results to upon completion. Find your webhook ID `here
    <https://rocketreach.co/account?section=nav_gen_api>`__."""


class ApiBulkLookupQueryDict(TypedDict):
    queries: NotRequired[list[ProfileMatchDict]]
    profile_list: NotRequired[str]
    webhook_id: NotRequired[int]
