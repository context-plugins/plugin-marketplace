from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiKey(SdkBaseModel):
    id: Optional[str] = UNSET
    """The API key ID."""

    description: Optional[str] = UNSET
    """A description of the purpose of the API key."""

    expires: Optional[int] = UNSET
    """The time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the
    nearest hour."""

    deletes: Optional[int] = UNSET
    """The time after which the API key is deleted. The date is represented as seconds since the epoch, rounded down to
    the nearest hour."""


class ApiKeyDict(TypedDict):
    id: NotRequired[str]
    description: NotRequired[str]
    expires: NotRequired[int]
    deletes: NotRequired[int]
