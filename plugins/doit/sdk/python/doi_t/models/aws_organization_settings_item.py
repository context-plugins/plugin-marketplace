from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .aws_organization_service_settings import AwsOrganizationServiceSettings, AwsOrganizationServiceSettingsDict


class AwsOrganizationSettingsItem(SdkBaseModel):
    management_account_id: str = Field(alias="managementAccountId")
    """12-digit account number of the AWS organization's management (payer) account."""

    purchase_account_id: str | None = Field(alias="purchaseAccountId")
    """AWS account used for commitment purchases for this AWS organization. Often a member account under the AWS
    organization, but it may also be the management (payer) account itself. Null if not configured."""

    services: list[AwsOrganizationServiceSettings]
    """Commitment settings for each commitment type activated on this AWS organization. Settings values are independent
    per AWS organization and commitment type."""


class AwsOrganizationSettingsItemDict(TypedDict):
    management_account_id: str
    purchase_account_id: str | None
    services: list[AwsOrganizationServiceSettingsDict]
