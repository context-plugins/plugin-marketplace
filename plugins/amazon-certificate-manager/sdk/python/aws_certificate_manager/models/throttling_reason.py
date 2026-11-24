from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ThrottlingReason(SdkBaseModel):
    reason: Optional[str] = UNSET
    """A description of why a request was throttled."""

    resource: Optional[str] = UNSET
    """The resource that causes the request to be throttled."""


class ThrottlingReasonDict(TypedDict):
    reason: NotRequired[str]
    resource: NotRequired[str]
