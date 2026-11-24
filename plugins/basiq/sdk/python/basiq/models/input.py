from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Input(SdkBaseModel):
    """Echo of the input parameters"""

    expense: str
    """Echo of the expense value from request"""


class InputDict(TypedDict):
    expense: str
