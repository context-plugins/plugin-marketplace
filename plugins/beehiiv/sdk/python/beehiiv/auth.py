from __future__ import annotations

from dataclasses import dataclass

from .core import AsyncAuthScheme, AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AuthSchemes:
    bearer_auth_scheme: AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AsyncAuthSchemes:
    bearer_auth_scheme: AsyncAuthScheme
