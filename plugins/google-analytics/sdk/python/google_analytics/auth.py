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
    "https://www.googleapis.com/auth/analytics.edit",
    "https://www.googleapis.com/auth/analytics.readonly",
    "https://www.googleapis.com/auth/analytics",
]
"""``https://www.googleapis.com/auth/analytics.edit``: Edit Google Analytics management entities.
``https://www.googleapis.com/auth/analytics.readonly``: See and download your Google Analytics data.
``https://www.googleapis.com/auth/analytics``."""
