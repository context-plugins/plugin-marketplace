from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1ApisApikeysRequest(SdkBaseModel):
    description: Optional[str] = UNSET
    """A description of the purpose of the API key."""

    expires: Optional[int] = UNSET
    """From the creation time, the time after which the API key expires. The date is represented as seconds since the
    epoch, rounded down to the nearest hour. The default value for this parameter is 7 days from creation time. For more
    information, see ."""


class V1ApisApikeysRequestDict(TypedDict):
    description: NotRequired[str]
    expires: NotRequired[int]
