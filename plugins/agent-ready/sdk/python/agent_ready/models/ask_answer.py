from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ask_meta import AskMeta, AskMetaDict
from .ask_result import AskResult, AskResultDict
from .enums.mode import ModeOrStr


class AskAnswer(SdkBaseModel):
    """Successful NLWeb answer."""

    meta: AskMeta = Field(alias="_meta")
    """NLWeb response envelope metadata."""

    query_id: str
    site: str
    mode: ModeOrStr
    query: str
    results: list[AskResult]
    summary: Optional[str] = UNSET
    """Present when mode is 'summarize'."""


class AskAnswerDict(TypedDict):
    meta: AskMetaDict
    query_id: str
    site: str
    mode: ModeOrStr
    query: str
    results: list[AskResultDict]
    summary: NotRequired[str]
