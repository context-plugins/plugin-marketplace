from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .service_account import ServiceAccount, ServiceAccountDict


class ServiceAccountsResponse(SdkBaseModel):
    """Service accounts owned by the authenticated customer."""

    items: list[ServiceAccount]


class ServiceAccountsResponseDict(TypedDict):
    items: list[ServiceAccountDict]
