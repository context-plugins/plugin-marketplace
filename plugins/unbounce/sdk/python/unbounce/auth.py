from __future__ import annotations

from dataclasses import dataclass
from typing import Literal, TypeAlias

from .core import AsyncAuthScheme, AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AuthSchemes:
    api_key_auth: AuthScheme
    oauth2: AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AsyncAuthSchemes:
    api_key_auth: AsyncAuthScheme
    oauth2: AsyncAuthScheme


Oauth2Scope: TypeAlias = Literal["full"]
"""``full``: Full access based on the authenticating user's own credentials. Unbounce documents this as the only
supported scope (https://developer.unbounce.com/getting_started/#Authorization)."""
