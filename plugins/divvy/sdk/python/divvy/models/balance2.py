from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Balance2(SdkBaseModel):
    amount: Optional[float] = UNSET
    """Balance amount to be paid to the vendor"""

    last_updated_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDate")
    """Balance amount last updated date and time"""


class Balance2Dict(TypedDict):
    amount: NotRequired[float]
    last_updated_date: NotRequired[RFC3339DateTime]
