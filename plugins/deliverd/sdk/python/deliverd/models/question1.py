from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.kind1 import Kind1OrStr


class Question1(SdkBaseModel):
    id: UUID
    prompt: str
    help: str | None
    kind: Kind1OrStr
    required: bool
    options: list[str]


class Question1Dict(TypedDict):
    id: UUID
    prompt: str
    help: str | None
    kind: Kind1OrStr
    required: bool
    options: list[str]
