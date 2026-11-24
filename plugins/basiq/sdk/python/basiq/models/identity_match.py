from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class IdentityMatch(SdkBaseModel):
    input: str
    """Original input value provided"""

    match: bool
    """Whether the field matches the user's records"""

    confidence: float
    """Confidence score for the match"""


class IdentityMatchDict(TypedDict):
    input: str
    match: bool
    confidence: float
