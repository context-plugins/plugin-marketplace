from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AccountNumberMatch(SdkBaseModel):
    input: str
    """The original account number input"""

    match: bool
    """Whether the account number matches"""

    confidence: float
    """Confidence score for the match (0.0 to 1.0)"""


class AccountNumberMatchDict(TypedDict):
    input: str
    match: bool
    confidence: float
