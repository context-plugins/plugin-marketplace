from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Lead(SdkBaseModel):
    id: Optional[str] = UNSET
    page_id: Optional[str] = UNSET
    form_data: Optional[Any] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET


class LeadDict(TypedDict):
    id: NotRequired[str]
    page_id: NotRequired[str]
    form_data: NotRequired[Any]
    created_at: NotRequired[RFC3339DateTime]
