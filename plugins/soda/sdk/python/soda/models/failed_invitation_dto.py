from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FailedInvitationDto(SdkBaseModel):
    email: Optional[str] = UNSET
    error: Optional[str] = UNSET


class FailedInvitationDtoDict(TypedDict):
    email: NotRequired[str]
    error: NotRequired[str]
