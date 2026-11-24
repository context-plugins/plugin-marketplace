from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Links3ReportingReportsApi(SdkBaseModel):
    self: Optional[str] = UNSET
    """Link to retrieve the account details"""

    transactions: Optional[str] = UNSET
    """Link to retrieve the transactions for the account"""

    institution: Optional[str] = UNSET
    """Link to retrieve the institution details"""


class Links3ReportingReportsApiDict(TypedDict):
    self: NotRequired[str]
    transactions: NotRequired[str]
    institution: NotRequired[str]
