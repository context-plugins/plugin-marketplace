from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sort_order import SortOrderOrStr


class PersonGetRequest(SdkBaseModel):
    limit: Optional[int] = UNSET
    offset: Optional[int] = UNSET
    sort_by_field_id: Optional[str] = UNSET
    sort_order: Optional[SortOrderOrStr] = UNSET
    fields: Optional[list[str]] = UNSET
    filter: Optional[Any] = UNSET


class PersonGetRequestDict(TypedDict):
    limit: NotRequired[int]
    offset: NotRequired[int]
    sort_by_field_id: NotRequired[str]
    sort_order: NotRequired[SortOrderOrStr]
    fields: NotRequired[list[str]]
    filter: NotRequired[Any]
