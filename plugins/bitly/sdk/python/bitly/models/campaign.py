from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Campaign(SdkBaseModel):
    references: Optional[dict[str, str]] = UNSET
    guid: Optional[str] = UNSET
    group_guid: Optional[str] = UNSET
    created_by: Optional[str] = UNSET
    name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    created: Optional[str] = UNSET
    """ISO timestamp"""

    modified: Optional[str] = UNSET
    """ISO timestamp"""


class CampaignDict(TypedDict):
    references: NotRequired[dict[str, str]]
    guid: NotRequired[str]
    group_guid: NotRequired[str]
    created_by: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    created: NotRequired[str]
    modified: NotRequired[str]
