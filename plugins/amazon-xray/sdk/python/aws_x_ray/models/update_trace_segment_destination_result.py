from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.destination1 import Destination1OrStr
from .enums.status1 import Status1OrStr


class UpdateTraceSegmentDestinationResult(SdkBaseModel):
    destination: Optional[Destination1OrStr] = Field(default=UNSET, alias="Destination")
    """The destination of the trace segments."""

    status: Optional[Status1OrStr] = Field(default=UNSET, alias="Status")
    """The status of the update."""


class UpdateTraceSegmentDestinationResultDict(TypedDict):
    destination: NotRequired[Destination1OrStr]
    status: NotRequired[Status1OrStr]
