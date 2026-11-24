from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Change(SdkBaseModel):
    field: str
    from_: Optional[Any] = Field(default=UNSET, alias="from")
    to: Optional[Any] = UNSET


class ChangeDict(TypedDict):
    field: str
    from_: NotRequired[Any]
    to: NotRequired[Any]
