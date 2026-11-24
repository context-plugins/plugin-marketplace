from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .input1 import Input1, Input1Dict


class Balance(SdkBaseModel):
    """Balance verification result"""

    input: Input1
    match: bool | None
    """Whether the balance falls within the specified range"""

    confidence: float
    """Confidence score of the match (0.0 to 1.0)"""


class BalanceDict(TypedDict):
    input: Input1Dict
    match: bool | None
    confidence: float
