from __future__ import annotations

from dataclasses import dataclass

from .core import AsyncAuthScheme, AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AuthSchemes:
    cloud_kit_api_token: AuthScheme
    server_to_server: AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AsyncAuthSchemes:
    cloud_kit_api_token: AsyncAuthScheme
    server_to_server: AsyncAuthScheme
