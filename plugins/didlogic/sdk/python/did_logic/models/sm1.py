from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Sm1(SdkBaseModel):
    source: str
    """Source number from numbers_index, purchases_index; it must be one of your numbers with SMS enabled (in
    numbers_index its ``services`` include ``sms``) or one of your approved sender IDs"""

    destination: str
    """Destination phone number (must be a valid international number)"""

    message: str
    """SMS text content (160 chars per segment)"""


class Sm1Dict(TypedDict):
    source: str
    destination: str
    message: str
