from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AccountTypeMatch(SdkBaseModel):
    input: str
    """The original account type input"""

    match: bool
    """Whether the account type matches"""

    confidence: float
    """Confidence score for the match (0.0 to 1.0)"""


class AccountTypeMatchDict(TypedDict):
    input: str
    match: bool
    confidence: float
