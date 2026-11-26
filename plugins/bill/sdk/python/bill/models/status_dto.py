from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.response_status import ResponseStatusOrStr


class StatusDto(SdkBaseModel):
    """The type Delete response dto."""

    status: Optional[ResponseStatusOrStr] = UNSET


class StatusDtoDict(TypedDict):
    status: NotRequired[ResponseStatusOrStr]
