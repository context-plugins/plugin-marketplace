from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .challenge import Challenge, ChallengeDict


class TrialKey(SdkBaseModel):
    code: int
    message: Optional[str] = UNSET
    key: str
    """The credential. Send as X-API-Key."""

    key_prefix: Optional[str] = UNSET
    plan: Optional[str] = UNSET
    tier: str
    tier_label: Optional[str] = UNSET
    expires_at: RFC3339DateTime
    calls_ceiling: Optional[int] = UNSET
    calls_used: Optional[int] = UNSET
    calls_remaining: Optional[int] = UNSET
    budget_is: Optional[str] = UNSET
    max_limit: Optional[int] = UNSET
    max_page: OptionalNullable[int] = UNSET
    scope: Optional[str] = UNSET
    challenge: Optional[Challenge] = UNSET
    """Present when the key arrives LOCKED. Until these are answered the key may make only the calls named here."""

    terms: Optional[Any] = UNSET
    """What is enforced, and what we ask of you."""


class TrialKeyDict(TypedDict):
    code: int
    message: NotRequired[str]
    key: str
    key_prefix: NotRequired[str]
    plan: NotRequired[str]
    tier: str
    tier_label: NotRequired[str]
    expires_at: RFC3339DateTime
    calls_ceiling: NotRequired[int]
    calls_used: NotRequired[int]
    calls_remaining: NotRequired[int]
    budget_is: NotRequired[str]
    max_limit: NotRequired[int]
    max_page: NotRequired[int | None]
    scope: NotRequired[str]
    challenge: NotRequired[ChallengeDict]
    terms: NotRequired[Any]
