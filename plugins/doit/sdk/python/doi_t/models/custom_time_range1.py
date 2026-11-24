from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CustomTimeRange1(SdkBaseModel):
    """Required when the time range is set to "custom". On PATCH, omit to preserve the existing range; send null to
    remove it. A PATCH that sets ``timeRange`` to a mode other than "custom" without sending ``customTimeRange`` removes
    it. Sending null while ``timeRange.mode`` stays "custom" is rejected."""

    from_: Optional[RFC3339DateTime] = Field(default=UNSET, alias="from")
    """The start timestamp of the time range in RFC3339 format."""

    to: Optional[RFC3339DateTime] = UNSET
    """The end timestamp of the time range in RFC3339 format."""


class CustomTimeRange1Dict(TypedDict):
    from_: NotRequired[RFC3339DateTime]
    to: NotRequired[RFC3339DateTime]
