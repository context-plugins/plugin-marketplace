from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiDataRow(SdkBaseModel):
    clicks: Optional[float] = UNSET
    impressions: Optional[float] = UNSET
    keys: Optional[list[str]] = UNSET
    position: Optional[float] = UNSET
    ctr: Optional[float] = UNSET


class ApiDataRowDict(TypedDict):
    clicks: NotRequired[float]
    impressions: NotRequired[float]
    keys: NotRequired[list[str]]
    position: NotRequired[float]
    ctr: NotRequired[float]
