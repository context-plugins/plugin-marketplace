from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .docs import Docs, DocsDict


class Data2(SdkBaseModel):
    """Response Data"""

    search_session_id: Optional[str] = Field(default=UNSET, alias="searchSessionId")
    """Search session id, can be used as input for next search calls."""

    docs: Optional[Docs] = UNSET
    """Array of Doc responses"""


class Data2Dict(TypedDict):
    search_session_id: NotRequired[str]
    docs: NotRequired[DocsDict]
