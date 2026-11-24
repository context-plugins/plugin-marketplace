from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status3 import Status3OrStr


class StopProjectVersionResponse(SdkBaseModel):
    status: Optional[Status3OrStr] = Field(default=UNSET, alias="Status")
    """The current status of the stop operation."""


class StopProjectVersionResponseDict(TypedDict):
    status: NotRequired[Status3OrStr]
