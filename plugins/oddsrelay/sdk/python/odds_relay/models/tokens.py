from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.limit import Limit, LimitDict
from .unions.remaining import Remaining, RemainingDict


class Tokens(SdkBaseModel):
    """``remaining`` and ``limit`` read ``unlimited`` on an unlimited account; null while the balance is unknown."""

    used: int | None
    remaining: Remaining | None
    limit: Limit | None
    resets_at: str | None
    """When the pool resets; on a trial, the trial's end when that comes first."""


class TokensDict(TypedDict):
    used: int | None
    remaining: RemainingDict | None
    limit: LimitDict | None
    resets_at: str | None
