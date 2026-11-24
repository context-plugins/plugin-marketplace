from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.name import NameOrStr


class KeyUsage(SdkBaseModel):
    name: Optional[NameOrStr] = Field(default=UNSET, alias="Name")
    """A string value that contains a Key Usage extension name."""


class KeyUsageDict(TypedDict):
    name: NotRequired[NameOrStr]
