from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1SpamdetectorRequest(SdkBaseModel):
    text: str
    """The text to detect spam in"""

    email: Optional[str] = UNSET
    """The email address to validate against the spam database. This is optional"""

    ip: Optional[str] = UNSET
    """The IP address to validate against the spam database. This is optional"""


class V1SpamdetectorRequestDict(TypedDict):
    text: str
    email: NotRequired[str]
    ip: NotRequired[str]
