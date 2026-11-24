from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EventTypeNordicFinancialNewsCompaniesApi(SdkBaseModel):
    """The kind of event (omitted on a tombstone)"""

    slug: Optional[str] = UNSET
    label: Optional[str] = UNSET
    category: Optional[str] = UNSET


class EventTypeNordicFinancialNewsCompaniesApiDict(TypedDict):
    slug: NotRequired[str]
    label: NotRequired[str]
    category: NotRequired[str]
