from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Data(SdkBaseModel):
    make: Optional[str] = UNSET
    model: Optional[str] = UNSET
    model_year: Optional[str] = UNSET
    recall_count: Optional[int] = UNSET
    has_recalls: Optional[bool] = UNSET
    recalls: Optional[list[Any]] = UNSET


class DataDict(TypedDict):
    make: NotRequired[str]
    model: NotRequired[str]
    model_year: NotRequired[str]
    recall_count: NotRequired[int]
    has_recalls: NotRequired[bool]
    recalls: NotRequired[list[Any]]
