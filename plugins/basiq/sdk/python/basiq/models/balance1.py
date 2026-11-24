from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .input2 import Input2, Input2Dict


class Balance1(SdkBaseModel):
    """Balance verification result"""

    input: Input2
    match: bool
    """Whether the account balance matches the criteria"""

    confidence: float
    """Confidence score for the match result"""


class Balance1Dict(TypedDict):
    input: Input2Dict
    match: bool
    confidence: float
