from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class TransactionIntervalReportingReportsApi(SdkBaseModel):
    from_: Optional[Date] = Field(default=UNSET, alias="from")
    """Start date of the transaction interval"""

    to: Optional[Date] = UNSET
    """End date of the transaction interval"""


class TransactionIntervalReportingReportsApiDict(TypedDict):
    from_: NotRequired[Date]
    to: NotRequired[Date]
