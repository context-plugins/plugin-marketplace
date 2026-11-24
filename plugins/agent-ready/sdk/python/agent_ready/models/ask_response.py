from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ask_meta import AskMeta, AskMetaDict
from .ask_result import AskResult, AskResultDict
from .enums.mode import ModeOrStr
from .error2 import Error2, Error2Dict


class AskResponse(SdkBaseModel):
    """Either an answer or a failure."""

    meta: Optional[AskMeta] = Field(default=UNSET, alias="_meta")
    """NLWeb response envelope metadata."""

    query_id: Optional[str] = UNSET
    site: Optional[str] = UNSET
    mode: Optional[ModeOrStr] = UNSET
    query: Optional[str] = UNSET
    results: Optional[list[AskResult]] = UNSET
    summary: Optional[str] = UNSET
    """Present when mode is 'summarize'."""

    error: Optional[Error2] = UNSET


class AskResponseDict(TypedDict):
    meta: NotRequired[AskMetaDict]
    query_id: NotRequired[str]
    site: NotRequired[str]
    mode: NotRequired[ModeOrStr]
    query: NotRequired[str]
    results: NotRequired[list[AskResultDict]]
    summary: NotRequired[str]
    error: NotRequired[Error2Dict]
