from __future__ import annotations

from dataclasses import dataclass
from typing import Literal, TypeAlias

from .core import AsyncAuthScheme, AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AuthSchemes:
    oauth2: AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AsyncAuthSchemes:
    oauth2: AsyncAuthScheme


Oauth2Scope: TypeAlias = Literal["read", "write"]
"""``read``: Read access. ``write``: Write access."""
