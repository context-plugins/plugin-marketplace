from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1LienTheftResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    input: Optional[Any] = UNSET
    timestamp: Optional[str] = UNSET
    year: Optional[int] = UNSET
    make: Optional[str] = UNSET
    model: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    events: Optional[list[Any]] = UNSET
    trim_data: Optional[Any] = UNSET


class V1LienTheftResponseDict(TypedDict):
    success: NotRequired[bool]
    input: NotRequired[Any]
    timestamp: NotRequired[str]
    year: NotRequired[int]
    make: NotRequired[str]
    model: NotRequired[str]
    type_: NotRequired[str]
    events: NotRequired[list[Any]]
    trim_data: NotRequired[Any]
