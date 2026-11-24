from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Context(SdkBaseModel):
    completion: str
    query: str


class ContextDict(TypedDict):
    completion: str
    query: str
