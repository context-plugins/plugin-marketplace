from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1SqlexplainerRequest(SdkBaseModel):
    query: str
    """The SQL query to explain"""

    detail: Optional[str] = UNSET
    """Explanation detail level: brief, standard, or detailed"""


class V1SqlexplainerRequestDict(TypedDict):
    query: str
    detail: NotRequired[str]
