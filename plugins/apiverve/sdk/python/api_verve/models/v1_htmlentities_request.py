from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1HtmlentitiesRequest(SdkBaseModel):
    html: str
    """The HTML content to encode"""

    action: Optional[str] = UNSET
    """The action to perform"""


class V1HtmlentitiesRequestDict(TypedDict):
    html: str
    action: NotRequired[str]
