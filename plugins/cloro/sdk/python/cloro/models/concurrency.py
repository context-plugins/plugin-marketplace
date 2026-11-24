from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Concurrency(SdkBaseModel):
    """Current concurrency usage. Null if unable to retrieve concurrency information."""

    used: Optional[int] = UNSET
    """Number of concurrent slots currently in use."""

    max: Optional[int] = UNSET
    """Maximum allowed concurrent tasks for this organization, set by your plan."""


class ConcurrencyDict(TypedDict):
    used: NotRequired[int]
    max: NotRequired[int]
