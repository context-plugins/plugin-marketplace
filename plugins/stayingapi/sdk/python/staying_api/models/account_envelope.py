from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .account import Account, AccountDict


class AccountEnvelope(SdkBaseModel):
    data: Account
    """Authenticated account snapshot (§F1): plan, key env, credit balance and rate limit."""


class AccountEnvelopeDict(TypedDict):
    data: AccountDict
