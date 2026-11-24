from __future__ import annotations

from dataclasses import dataclass

from .core import AsyncAuthScheme, AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AuthSchemes:
    api_key_auth: AuthScheme
    timestamp_auth: AuthScheme
    signature_auth: AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AsyncAuthSchemes:
    api_key_auth: AsyncAuthScheme
    timestamp_auth: AsyncAuthScheme
    signature_auth: AsyncAuthScheme
