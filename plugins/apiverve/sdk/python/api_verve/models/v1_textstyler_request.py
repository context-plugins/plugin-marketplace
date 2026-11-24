from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1TextstylerRequest(SdkBaseModel):
    text: str
    """The text to style"""

    style: str
    """The style to apply"""


class V1TextstylerRequestDict(TypedDict):
    text: str
    style: str
