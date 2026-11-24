from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1StatesResponse(SdkBaseModel):
    code: str
    """USPS two-letter state code"""

    name: str
    """Full state name"""


class V1StatesResponseDict(TypedDict):
    code: str
    name: str
