from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .root import Root, RootDict


class ApiV1TasksGraphResponse(SdkBaseModel):
    root: Root
    nodes: list[Any]
    links: list[Any]


class ApiV1TasksGraphResponseDict(TypedDict):
    root: RootDict
    nodes: list[Any]
    links: list[Any]
