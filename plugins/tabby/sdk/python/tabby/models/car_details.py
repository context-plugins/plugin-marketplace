from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CarDetails(SdkBaseModel):
    """Required for car insurance"""

    manufacturer: str
    model: str
    year: str


class CarDetailsDict(TypedDict):
    manufacturer: str
    model: str
    year: str
