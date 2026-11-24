from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item_bundle_social_social_account_api import (
    ItemBundleSocialSocialAccountApi,
    ItemBundleSocialSocialAccountApiDict,
)
from .pagination_bundle_social_organization_api import (
    PaginationBundleSocialOrganizationApi,
    PaginationBundleSocialOrganizationApiDict,
)


class ApiV1SocialAccountToDeleteResponse(SdkBaseModel):
    items: list[ItemBundleSocialSocialAccountApi]
    pagination: PaginationBundleSocialOrganizationApi


class ApiV1SocialAccountToDeleteResponseDict(TypedDict):
    items: list[ItemBundleSocialSocialAccountApiDict]
    pagination: PaginationBundleSocialOrganizationApiDict
