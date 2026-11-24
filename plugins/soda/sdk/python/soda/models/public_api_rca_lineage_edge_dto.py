from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicApiRcaLineageEdgeDto(SdkBaseModel):
    from_: str = Field(alias="from")
    to: str


class PublicApiRcaLineageEdgeDtoDict(TypedDict):
    from_: str
    to: str
