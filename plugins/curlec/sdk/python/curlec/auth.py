from __future__ import annotations

from dataclasses import dataclass
from typing import Literal, TypeAlias

from .core import AsyncAuthScheme, AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AuthSchemes:
    basic_auth: AuthScheme
    oauth2_authorization_code: AuthScheme
    oauth2_client_credentials: AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AsyncAuthSchemes:
    basic_auth: AsyncAuthScheme
    oauth2_authorization_code: AsyncAuthScheme
    oauth2_client_credentials: AsyncAuthScheme


Oauth2AuthorizationCodeScope: TypeAlias = Literal["read_only"]
"""``read_only``: Read-only access to Razorpay account data (payments, orders, refunds, payouts, subscriptions,
invoices)."""

Oauth2ClientCredentialsScope: TypeAlias = Literal["read_only"]
"""``read_only``: Read-only access to Razorpay account data (payments, orders, refunds, payouts, subscriptions,
invoices)."""
