from __future__ import annotations

from dataclasses import dataclass

from .core import AsyncAuthScheme, AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AuthSchemes:
    bearer_auth: AuthScheme
    api_key_header: AuthScheme
    api_key_query: AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AsyncAuthSchemes:
    bearer_auth: AsyncAuthScheme
    api_key_header: AsyncAuthScheme
    api_key_query: AsyncAuthScheme
