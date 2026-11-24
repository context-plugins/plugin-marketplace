from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SuccessEnvelope(SdkBaseModel):
    """Generic success envelope. Endpoint-specific payload fields appear at the top level alongside these common
    fields."""

    success: Optional[bool] = UNSET
    input: Optional[Any] = UNSET
    """Echo of the input parameters specified by the query."""

    timestamp: Optional[str] = UNSET


class SuccessEnvelopeDict(TypedDict):
    success: NotRequired[bool]
    input: NotRequired[Any]
    timestamp: NotRequired[str]
