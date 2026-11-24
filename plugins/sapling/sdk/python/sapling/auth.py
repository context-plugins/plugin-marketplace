from __future__ import annotations

from dataclasses import dataclass
from typing import Literal, TypeAlias

from .core import AsyncAuthScheme, AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AuthSchemes:
    api_key_query: AuthScheme
    bearer_auth: AuthScheme
    oauth2: AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AsyncAuthSchemes:
    api_key_query: AsyncAuthScheme
    bearer_auth: AsyncAuthScheme
    oauth2: AsyncAuthScheme


Oauth2Scope: TypeAlias = Literal["offline_access", "sapling:api"]
"""``offline_access``: Receive a refresh token so access survives the 24-hour access-token lifetime. ``sapling:api``:
Call the Sapling language-tool endpoints in this document on behalf of the user, billed to the API key they choose at
consent."""
