from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.kind1 import Kind1OrStr


class Answer(SdkBaseModel):
    question: str
    kind: Kind1OrStr
    value: Optional[Any] = UNSET


class AnswerDict(TypedDict):
    question: str
    kind: Kind1OrStr
    value: NotRequired[Any]
