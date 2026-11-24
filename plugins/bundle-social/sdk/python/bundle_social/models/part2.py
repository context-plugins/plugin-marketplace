from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Part2(SdkBaseModel):
    part_number: int = Field(alias="partNumber")
    etag: str


class Part2Dict(TypedDict):
    part_number: int
    etag: str
