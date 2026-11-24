from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1YmmResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    best_match: Optional[Any] = Field(default=UNSET, alias="bestMatch")
    trim_options: Optional[list[Any]] = Field(default=UNSET, alias="trimOptions")
    input: Optional[Any] = UNSET
    timestamp: Optional[str] = UNSET


class V1YmmResponseDict(TypedDict):
    success: NotRequired[bool]
    best_match: NotRequired[Any]
    trim_options: NotRequired[list[Any]]
    input: NotRequired[Any]
    timestamp: NotRequired[str]
