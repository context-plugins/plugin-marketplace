from __future__ import annotations

from dataclasses import dataclass

from .core import AsyncAuthScheme, AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AuthSchemes:
    bearer_auth: AuthScheme
    authtoken_auth: AuthScheme
    api_key: AuthScheme
    delivery_token: AuthScheme
    management_token_auth: AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AsyncAuthSchemes:
    bearer_auth: AsyncAuthScheme
    authtoken_auth: AsyncAuthScheme
    api_key: AsyncAuthScheme
    delivery_token: AsyncAuthScheme
    management_token_auth: AsyncAuthScheme
