from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.state_doi_t_service_accounts_api import StateDoiTServiceAccountsApiOrStr


class ServiceAccountToken(SdkBaseModel):
    """An API token of a service account. It authenticates with the service account's permissions, and carries no secret
    material after the create response."""

    id: str | None
    """API token ID. ``null`` only on a dry-run create."""

    service_account_id: str = Field(alias="serviceAccountId")
    """ID of the service account that owns the token."""

    customer_id: str = Field(alias="customerId")
    """ID of the customer whose service account the token belongs to."""

    name: str
    """Name, unique among the service account's tokens."""

    state: StateDoiTServiceAccountsApiOrStr
    """The token's stored state: ``active`` while it is enabled, ``disabled`` once it has been turned off. This is not a
    liveness signal — a token whose ``expiresTime`` has passed stops authenticating but keeps the state it was stored
    with, so ``active`` here does not by itself mean the token still works; compare ``expiresTime``. Only these two
    values can be set."""

    create_time: RFC3339DateTime | None = Field(alias="createTime")
    """When the token was created. ``null`` only on a dry-run create."""

    expires_time: RFC3339DateTime | None = Field(alias="expiresTime")
    """When the token stops authenticating. ``null`` when it does not expire."""

    last_used_time: RFC3339DateTime | None = Field(alias="lastUsedTime")
    """When the token last authenticated a request. ``null`` until it is first used."""


class ServiceAccountTokenDict(TypedDict):
    id: str | None
    service_account_id: str
    customer_id: str
    name: str
    state: StateDoiTServiceAccountsApiOrStr
    create_time: RFC3339DateTime | None
    expires_time: RFC3339DateTime | None
    last_used_time: RFC3339DateTime | None
