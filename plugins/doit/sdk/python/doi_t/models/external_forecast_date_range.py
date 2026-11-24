from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ExternalForecastDateRange(SdkBaseModel):
    """Start and end timestamps in RFC3339 format."""

    from_: Optional[RFC3339DateTime] = Field(default=UNSET, alias="from")
    """Start timestamp in RFC3339 format."""

    to: Optional[RFC3339DateTime] = UNSET
    """End timestamp in RFC3339 format."""


class ExternalForecastDateRangeDict(TypedDict):
    from_: NotRequired[RFC3339DateTime]
    to: NotRequired[RFC3339DateTime]
