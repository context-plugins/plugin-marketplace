from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1 import Type1OrStr


class Stage1(SdkBaseModel):
    key: Optional[str] = UNSET
    """Slugified on write (lowercase, [a-z0-9_]); original text kept as label."""

    label: Optional[str] = UNSET
    type_: Optional[Type1OrStr] = Field(default=UNSET, alias="type")


class Stage1Dict(TypedDict):
    key: NotRequired[str]
    label: NotRequired[str]
    type_: NotRequired[Type1OrStr]
