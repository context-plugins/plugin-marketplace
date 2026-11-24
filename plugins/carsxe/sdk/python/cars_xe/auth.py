from __future__ import annotations

from dataclasses import dataclass

from .core import AsyncAuthScheme, AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AuthSchemes:
    api_key_query: AuthScheme
    x402_payment: AuthScheme
    recalls_batch_token: AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AsyncAuthSchemes:
    api_key_query: AsyncAuthScheme
    x402_payment: AsyncAuthScheme
    recalls_batch_token: AsyncAuthScheme
