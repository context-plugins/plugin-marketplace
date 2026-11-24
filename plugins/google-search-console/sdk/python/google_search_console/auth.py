from __future__ import annotations

from dataclasses import dataclass
from typing import Literal, TypeAlias

from .core import AsyncAuthScheme, AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AuthSchemes:
    api_key: AuthScheme
    oauth2: AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AsyncAuthSchemes:
    api_key: AsyncAuthScheme
    oauth2: AsyncAuthScheme


Oauth2Scope: TypeAlias = Literal[
    "https://www.googleapis.com/auth/webmasters", "https://www.googleapis.com/auth/webmasters.readonly"
]
"""``https://www.googleapis.com/auth/webmasters``: View and manage Search Console data for your verified sites.
``https://www.googleapis.com/auth/webmasters.readonly``: View Search Console data for your verified sites."""
