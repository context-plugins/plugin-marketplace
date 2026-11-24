from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Result(SdkBaseModel):
    vin: Optional[str] = UNSET
    has_recalls: Optional[bool] = Field(default=UNSET, alias="hasRecalls")
    recall_count: Optional[int] = Field(default=UNSET, alias="recallCount")
    recalls: Optional[list[Any]] = UNSET


class ResultDict(TypedDict):
    vin: NotRequired[str]
    has_recalls: NotRequired[bool]
    recall_count: NotRequired[int]
    recalls: NotRequired[list[Any]]
