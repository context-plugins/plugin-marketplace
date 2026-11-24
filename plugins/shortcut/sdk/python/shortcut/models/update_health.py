from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1 import Status1OrStr


class UpdateHealth(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    status: Optional[Status1OrStr] = UNSET
    """The health status of the Epic."""

    text: Optional[str] = UNSET
    """The description of the Health status."""


class UpdateHealthDict(TypedDict):
    status: NotRequired[Status1OrStr]
    text: NotRequired[str]
