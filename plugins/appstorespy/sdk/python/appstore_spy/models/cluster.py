from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Cluster(SdkBaseModel):
    type_: str = Field(alias="type")
    title: str
    items: list[str]
    layout: str


class ClusterDict(TypedDict):
    type_: str
    title: str
    items: list[str]
    layout: str
