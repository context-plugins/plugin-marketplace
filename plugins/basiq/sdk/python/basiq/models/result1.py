from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Result1(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    url: Optional[str] = UNSET


class Result1Dict(TypedDict):
    type_: NotRequired[str]
    url: NotRequired[str]
