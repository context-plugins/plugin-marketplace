from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SpendStatusDto(SdkBaseModel):
    """Simple DTO to respond to requests with a status of "success"."""

    status: Optional[str] = UNSET
    """Status of the request, e.g. "SUCCESS"
    """


class SpendStatusDtoDict(TypedDict):
    status: NotRequired[str]
