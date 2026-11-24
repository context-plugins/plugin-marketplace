from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .service_account_token import ServiceAccountToken, ServiceAccountTokenDict


class ServiceAccountTokensResponse(SdkBaseModel):
    """API tokens of a service account, at most 10."""

    items: list[ServiceAccountToken]
    """The service account's non-deleted API tokens."""


class ServiceAccountTokensResponseDict(TypedDict):
    items: list[ServiceAccountTokenDict]
