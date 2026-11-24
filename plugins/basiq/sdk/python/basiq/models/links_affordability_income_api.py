from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LinksAffordabilityIncomeApi(SdkBaseModel):
    accounts: list[str]
    """Links of accounts"""

    self: str
    """Link to the requested income resource"""


class LinksAffordabilityIncomeApiDict(TypedDict):
    accounts: list[str]
    self: str
