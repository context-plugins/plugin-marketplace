from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status1 import Status1OrStr


class Status(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    status: Status1OrStr
    """Health status of Einstein Bots API."""


class StatusDict(TypedDict):
    status: Status1OrStr
