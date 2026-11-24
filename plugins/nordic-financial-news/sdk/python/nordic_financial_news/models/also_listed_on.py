from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AlsoListedOn(SdkBaseModel):
    ticker: str
    """Ticker on this secondary exchange"""

    mic_code: str
    """ISO 10383 Market Identifier Code of this exchange"""


class AlsoListedOnDict(TypedDict):
    ticker: str
    mic_code: str
