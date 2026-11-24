from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .account import Account, AccountDict
from .flood_cap import FloodCap, FloodCapDict
from .key import Key, KeyDict
from .tokens import Tokens, TokensDict


class Usage(SdkBaseModel):
    plan: str | None
    rate_card: str
    account: Account
    tokens: Tokens
    """``remaining`` and ``limit`` read ``unlimited`` on an unlimited account; null while the balance is unknown."""

    regions: list[str]
    key: Key
    flood_cap: FloodCap
    scope: Any | None
    """Your account's scope, or null when it has none: ``{"products": {<product>: {<axis>: [values] | null}}}``. A
    product not listed is not readable; within one, a null axis means every value. The axes are each product's filters:
    ``sports``, ``markets``, ``bookmakers``, ``exchanges`` on the six matched boards; ``sports``, ``markets``,
    ``bookmakers`` (venues of both kinds) on ``raw``, which also answers ``/v2/odds/event/{id}``. Products and axes are
    always listed in that order and each list sorted. A value a call names outside it is a 403 ``*_not_in_plan`` with
    ``valid``; a filter left out is trimmed to it."""

    scope_version: int | None
    """The version of ``scope``, raised by each change; null when the account has no scope."""


class UsageDict(TypedDict):
    plan: str | None
    rate_card: str
    account: AccountDict
    tokens: TokensDict
    regions: list[str]
    key: KeyDict
    flood_cap: FloodCapDict
    scope: Any | None
    scope_version: int | None
