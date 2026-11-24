from __future__ import annotations

from dataclasses import dataclass
from typing import Literal, TypeAlias

from .core import AsyncAuthScheme, AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AuthSchemes:
    api_key: AuthScheme
    oauth2: AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AsyncAuthSchemes:
    api_key: AsyncAuthScheme
    oauth2: AsyncAuthScheme


Oauth2Scope: TypeAlias = Literal[
    "https://www.googleapis.com/auth/cloud-translation", "https://www.googleapis.com/auth/cloud-platform"
]
"""``https://www.googleapis.com/auth/cloud-translation``: Translate text from one language to another using Google
Translate. ``https://www.googleapis.com/auth/cloud-platform``: See, edit, configure, and delete your Google Cloud data
and see the email address for your Google Account."""
