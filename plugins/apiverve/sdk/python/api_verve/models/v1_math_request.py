from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1MathRequest(SdkBaseModel):
    operation: str
    """Operation to perform"""

    a: float
    """First number"""

    b: float
    """Second number"""


class V1MathRequestDict(TypedDict):
    operation: str
    a: float
    b: float
