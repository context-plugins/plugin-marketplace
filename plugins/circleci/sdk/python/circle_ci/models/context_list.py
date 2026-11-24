from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .context import Context, ContextDict


class ContextList(SdkBaseModel):
    items: Optional[list[Context]] = UNSET
    """List of contexts"""

    next_page_token: Optional[str] = UNSET
    """Token for retrieving the next page"""


class ContextListDict(TypedDict):
    items: NotRequired[list[ContextDict]]
    next_page_token: NotRequired[str]
