from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Host(SdkBaseModel):
    name: str
    is_superhost: bool = Field(alias="isSuperhost")


class HostDict(TypedDict):
    name: str
    is_superhost: bool
