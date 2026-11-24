from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Data1(SdkBaseModel):
    removed: Optional[int] = UNSET
    invalid_ids: Optional[list[str]] = Field(default=UNSET, alias="invalidIds")


class Data1Dict(TypedDict):
    removed: NotRequired[int]
    invalid_ids: NotRequired[list[str]]
