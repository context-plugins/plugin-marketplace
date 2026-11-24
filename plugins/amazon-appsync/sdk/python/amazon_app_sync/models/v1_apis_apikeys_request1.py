from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1ApisApikeysRequest1(SdkBaseModel):
    description: Optional[str] = UNSET
    """A description of the purpose of the API key."""

    expires: Optional[int] = UNSET
    """From the update time, the time after which the API key expires. The date is represented as seconds since the
    epoch. For more information, see ."""


class V1ApisApikeysRequest1Dict(TypedDict):
    description: NotRequired[str]
    expires: NotRequired[int]
