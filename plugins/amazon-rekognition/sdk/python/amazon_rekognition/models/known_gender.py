from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type2 import Type2OrStr


class KnownGender(SdkBaseModel):
    type_: Optional[Type2OrStr] = Field(default=UNSET, alias="Type")
    """A string value of the KnownGender info about the Celebrity."""


class KnownGenderDict(TypedDict):
    type_: NotRequired[Type2OrStr]
