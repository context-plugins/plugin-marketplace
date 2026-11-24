from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LinksAffordabilityExpensesApi(SdkBaseModel):
    accounts: list[str]
    """Links of accounts"""

    self: str
    """Link to the requested expenses resource"""


class LinksAffordabilityExpensesApiDict(TypedDict):
    accounts: list[str]
    self: str
