from __future__ import annotations

from dataclasses import dataclass
from typing import Literal, TypeAlias

from .core import AsyncAuthScheme, AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AuthSchemes:
    oauth2_authorization_code: AuthScheme
    oauth2_client_credentials: AuthScheme
    bearer_auth: AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AsyncAuthSchemes:
    oauth2_authorization_code: AsyncAuthScheme
    oauth2_client_credentials: AsyncAuthScheme
    bearer_auth: AsyncAuthScheme


Oauth2AuthorizationCodeScope: TypeAlias = Literal["https://api.businesscentral.dynamics.com/.default"]
"""``https://api.businesscentral.dynamics.com/.default``: Access Business Central APIs, Access Business Central Admin
APIs, Access Business Central Admin APIs, Access Business Central Automation APIs, Access Business Central Automation
APIs, Access Business Central APIs, Access Business Central APIs, Access Business Central APIs, Access Business Central
APIs, Access Business Central APIs, Access Business Central APIs, Access Business Central Admin APIs, Access Business
Central Admin APIs, Access Business Central Admin APIs, Access Business Central Automation APIs, Access Business Central
Automation APIs, Access Business Central Automation APIs, Access Business Central Automation APIs, Access Business
Central APIs, Access Business Central APIs, Access Business Central APIs, Access Business Central Admin APIs, Access
Business Central APIs, Access Business Central APIs, Access Business Central Automation APIs, Access Business Central
Automation APIs, Access Business Central APIs, Access Business Central APIs, Access Business Central APIs, Access
Business Central APIs, Access Business Central Automation APIs, Access Business Central Automation APIs, Access Business
Central Admin APIs, Access Business Central Admin APIs, Access Business Central Admin APIs, Access Business Central
Automation APIs, Access Business Central APIs, Access Business Central APIs."""

Oauth2ClientCredentialsScope: TypeAlias = Literal["https://api.businesscentral.dynamics.com/.default"]
"""``https://api.businesscentral.dynamics.com/.default``: Access Business Central APIs, Access Business Central Admin
APIs, Access Business Central Admin APIs, Access Business Central Automation APIs, Access Business Central Automation
APIs, Access Business Central APIs, Access Business Central APIs, Access Business Central APIs, Access Business Central
APIs, Access Business Central APIs, Access Business Central APIs, Access Business Central Admin APIs, Access Business
Central Admin APIs, Access Business Central Admin APIs, Access Business Central Automation APIs, Access Business Central
Automation APIs, Access Business Central Automation APIs, Access Business Central Automation APIs, Access Business
Central APIs, Access Business Central APIs, Access Business Central APIs, Access Business Central Admin APIs, Access
Business Central APIs, Access Business Central APIs, Access Business Central Automation APIs, Access Business Central
Automation APIs, Access Business Central APIs, Access Business Central APIs, Access Business Central APIs, Access
Business Central APIs, Access Business Central Automation APIs, Access Business Central Automation APIs, Access Business
Central Admin APIs, Access Business Central Admin APIs, Access Business Central Admin APIs, Access Business Central
Automation APIs, Access Business Central APIs, Access Business Central APIs."""
