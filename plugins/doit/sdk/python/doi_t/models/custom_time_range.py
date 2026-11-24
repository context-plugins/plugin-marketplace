from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CustomTimeRange(SdkBaseModel):
    """Custom date range for the secondary time range."""

    from_: Optional[RFC3339DateTime] = Field(default=UNSET, alias="from")
    """Start date."""

    to: Optional[RFC3339DateTime] = UNSET
    """End date."""


class CustomTimeRangeDict(TypedDict):
    from_: NotRequired[RFC3339DateTime]
    to: NotRequired[RFC3339DateTime]
