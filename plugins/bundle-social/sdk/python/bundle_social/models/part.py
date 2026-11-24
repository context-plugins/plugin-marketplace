from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Part(SdkBaseModel):
    part_number: int = Field(alias="partNumber")
    url: str


class PartDict(TypedDict):
    part_number: int
    url: str
