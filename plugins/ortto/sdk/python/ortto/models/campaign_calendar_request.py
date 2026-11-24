from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CampaignCalendarRequest(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Campaign type, e.g. journey."""

    state: Optional[str] = UNSET
    folder_id: Optional[str] = UNSET
    q: Optional[str] = UNSET
    sort_order: Optional[str] = UNSET
    limit: Optional[int] = UNSET


class CampaignCalendarRequestDict(TypedDict):
    type_: NotRequired[str]
    state: NotRequired[str]
    folder_id: NotRequired[str]
    q: NotRequired[str]
    sort_order: NotRequired[str]
    limit: NotRequired[int]
