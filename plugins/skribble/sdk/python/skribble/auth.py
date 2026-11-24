from __future__ import annotations

from dataclasses import dataclass

from .core import AsyncAuthScheme, AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AuthSchemes:
    bearer: AuthScheme
    bearer_auth: AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AsyncAuthSchemes:
    bearer: AsyncAuthScheme
    bearer_auth: AsyncAuthScheme
