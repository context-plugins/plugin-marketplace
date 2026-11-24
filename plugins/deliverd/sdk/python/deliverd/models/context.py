from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Context(SdkBaseModel):
    file: str | None
    excerpt: str
    context_from_version: float | None = Field(alias="contextFromVersion")


class ContextDict(TypedDict):
    file: str | None
    excerpt: str
    context_from_version: float | None
