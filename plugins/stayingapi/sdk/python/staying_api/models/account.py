from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .credits import Credits, CreditsDict
from .key import Key, KeyDict
from .plan import Plan, PlanDict
from .rate_limit import RateLimit, RateLimitDict


class Account(SdkBaseModel):
    """Authenticated account snapshot (§F1): plan, key env, credit balance and rate limit."""

    plan: Plan
    key: Key
    credits: Credits
    rate_limit: RateLimit = Field(alias="rateLimit")


class AccountDict(TypedDict):
    plan: PlanDict
    key: KeyDict
    credits: CreditsDict
    rate_limit: RateLimitDict
