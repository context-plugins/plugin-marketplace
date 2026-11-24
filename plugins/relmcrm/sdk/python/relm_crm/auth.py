from __future__ import annotations

from dataclasses import dataclass
from typing import Literal, TypeAlias

from .core import AsyncAuthScheme, AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AuthSchemes:
    bearer_auth: AuthScheme
    oauth2: AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AsyncAuthSchemes:
    bearer_auth: AsyncAuthScheme
    oauth2: AsyncAuthScheme


Oauth2Scope: TypeAlias = Literal["crm"]
"""``crm``: Read and write the connected Relm workspace."""
