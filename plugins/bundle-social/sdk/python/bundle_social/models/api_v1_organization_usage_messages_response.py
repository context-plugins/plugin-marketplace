from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item_bundle_social_organization_api import ItemBundleSocialOrganizationApi, ItemBundleSocialOrganizationApiDict


class ApiV1OrganizationUsageMessagesResponse(SdkBaseModel):
    items: list[ItemBundleSocialOrganizationApi]
    total: float


class ApiV1OrganizationUsageMessagesResponseDict(TypedDict):
    items: list[ItemBundleSocialOrganizationApiDict]
    total: float
