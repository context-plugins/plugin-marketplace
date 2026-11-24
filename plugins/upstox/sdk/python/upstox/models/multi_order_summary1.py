from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MultiOrderSummary1(SdkBaseModel):
    """Execution summary for multi order request"""

    total: Optional[int] = UNSET
    """The total number of order lines present in the payload."""

    success: Optional[int] = UNSET
    """The number of order lines that were successfully placed without any errors."""

    error: Optional[int] = UNSET
    """The number of order lines that encountered errors during processing, despite their payloads being valid."""

    payload_error: Optional[int] = UNSET
    """The number of order lines with payload errors, indicating formatting or data validity
    issues.<br/><br/><b>Note</b>: Orders are processed only if the entire batch is free of payload_error, ensuring
    error-free transactions."""


class MultiOrderSummary1Dict(TypedDict):
    total: NotRequired[int]
    success: NotRequired[int]
    error: NotRequired[int]
    payload_error: NotRequired[int]
