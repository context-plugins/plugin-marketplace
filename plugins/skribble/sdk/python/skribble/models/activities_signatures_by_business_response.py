from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .activities_signatures_by_business_entry import (
    ActivitiesSignaturesByBusinessEntry,
    ActivitiesSignaturesByBusinessEntryDict,
)


class ActivitiesSignaturesByBusinessResponse(SdkBaseModel):
    """Paginated list of signature activities for the business."""

    total_pages: Optional[int] = UNSET
    total_items: Optional[int] = UNSET
    current_page: Optional[int] = UNSET
    size: Optional[int] = UNSET
    activities: Optional[list[ActivitiesSignaturesByBusinessEntry]] = UNSET


class ActivitiesSignaturesByBusinessResponseDict(TypedDict):
    total_pages: NotRequired[int]
    total_items: NotRequired[int]
    current_page: NotRequired[int]
    size: NotRequired[int]
    activities: NotRequired[list[ActivitiesSignaturesByBusinessEntryDict]]
