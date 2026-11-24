from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value import Value, ValueDict


class DatumInstagramGraphInsightsApi(SdkBaseModel):
    name: Optional[str] = UNSET
    period: Optional[str] = UNSET
    values: Optional[list[Value]] = UNSET
    title: Optional[str] = UNSET
    description: Optional[str] = UNSET
    id: Optional[str] = UNSET


class DatumInstagramGraphInsightsApiDict(TypedDict):
    name: NotRequired[str]
    period: NotRequired[str]
    values: NotRequired[list[ValueDict]]
    title: NotRequired[str]
    description: NotRequired[str]
    id: NotRequired[str]
