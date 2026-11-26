from __future__ import annotations

from dataclasses import dataclass
from typing import Literal, TypeAlias

from .core import AsyncAuthScheme, AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AuthSchemes:
    chatbot_auth_authorization_code: AuthScheme
    chatbot_auth_implicit: AuthScheme
    jwt_bearer: AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AsyncAuthSchemes:
    chatbot_auth_authorization_code: AsyncAuthScheme
    chatbot_auth_implicit: AsyncAuthScheme
    jwt_bearer: AsyncAuthScheme


ChatbotAuthAuthorizationCodeScope: TypeAlias = Literal["chatbot_api"]
"""``chatbot_api``: Access bot APIs."""
