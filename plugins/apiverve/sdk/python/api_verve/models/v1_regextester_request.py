from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1RegextesterRequest(SdkBaseModel):
    pattern: str
    """The regular expression pattern to test. Maximum 500 characters"""

    text: str
    """The text to test the pattern against. Maximum 20000 characters"""

    flags: Optional[str] = UNSET
    """Regex flags: g (global), i (case insensitive), m (multiline), s (dotall), u (unicode), y (sticky)"""

    test_type: Optional[str] = UNSET
    """Operation type"""

    replacement: Optional[str] = UNSET
    """Replacement text for 'replace' operation"""


class V1RegextesterRequestDict(TypedDict):
    pattern: str
    text: str
    flags: NotRequired[str]
    test_type: NotRequired[str]
    replacement: NotRequired[str]
