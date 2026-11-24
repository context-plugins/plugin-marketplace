from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error(SdkBaseModel):
    loc: Optional[list[Any]] = UNSET
    msg: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")


class ErrorDict(TypedDict):
    loc: NotRequired[list[Any]]
    msg: NotRequired[str]
    type_: NotRequired[str]
