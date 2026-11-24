from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .pagination_response import PaginationResponse, PaginationResponseDict
from .subscription_without_secret import SubscriptionWithoutSecret, SubscriptionWithoutSecretDict


class SubscriptionListResponse(SdkBaseModel):
    data: list[SubscriptionWithoutSecret]
    pagination: PaginationResponse


class SubscriptionListResponseDict(TypedDict):
    data: list[SubscriptionWithoutSecretDict]
    pagination: PaginationResponseDict
