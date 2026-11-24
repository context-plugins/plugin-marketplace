from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Destination13(SdkBaseModel):
    """Where it lands. Required when the gate named a destination"""

    type_: str = Field(alias="type")
    id: str


class Destination13Dict(TypedDict):
    type_: str
    id: str
