from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1SlugifyRequest(SdkBaseModel):
    text: str
    """The text to convert to a slug"""

    separator: Optional[str] = UNSET
    """The separator character"""

    lowercase: Optional[bool] = UNSET
    """Convert to lowercase (default: true)"""


class V1SlugifyRequestDict(TypedDict):
    text: str
    separator: NotRequired[str]
    lowercase: NotRequired[bool]
