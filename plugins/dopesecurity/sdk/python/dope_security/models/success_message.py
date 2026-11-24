from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SuccessMessage(SdkBaseModel):
    """A simple message response indicating a successful operation"""

    message: str
    """Simple success message"""


class SuccessMessageDict(TypedDict):
    message: str
