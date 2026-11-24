from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .page_group import PageGroup, PageGroupDict


class SubAccountsPageGroupsResponse(SdkBaseModel):
    page_groups: Optional[list[PageGroup]] = UNSET


class SubAccountsPageGroupsResponseDict(TypedDict):
    page_groups: NotRequired[list[PageGroupDict]]
