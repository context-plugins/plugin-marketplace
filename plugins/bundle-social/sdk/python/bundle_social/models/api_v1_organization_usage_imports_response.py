from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .pagination_bundle_social_organization_api import (
    PaginationBundleSocialOrganizationApi,
    PaginationBundleSocialOrganizationApiDict,
)
from .social_account_bundle_social_organization_api import (
    SocialAccountBundleSocialOrganizationApi,
    SocialAccountBundleSocialOrganizationApiDict,
)


class ApiV1OrganizationUsageImportsResponse(SdkBaseModel):
    limit_per_social_account: float = Field(alias="limitPerSocialAccount")
    social_accounts: list[SocialAccountBundleSocialOrganizationApi] = Field(alias="socialAccounts")
    pagination: PaginationBundleSocialOrganizationApi


class ApiV1OrganizationUsageImportsResponseDict(TypedDict):
    limit_per_social_account: float
    social_accounts: list[SocialAccountBundleSocialOrganizationApiDict]
    pagination: PaginationBundleSocialOrganizationApiDict
