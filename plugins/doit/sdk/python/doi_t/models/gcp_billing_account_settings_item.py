from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .gcp_billing_account_service_settings import GcpBillingAccountServiceSettings, GcpBillingAccountServiceSettingsDict


class GcpBillingAccountSettingsItem(SdkBaseModel):
    billing_account_id: str = Field(alias="billingAccountId")
    """GCP Billing Account ID."""

    services: list[GcpBillingAccountServiceSettings]
    """Settings for each product line and region scope activated on this billing account, ordered ``compute`` first,
    then ``cloud_sql`` regions alphabetically."""


class GcpBillingAccountSettingsItemDict(TypedDict):
    billing_account_id: str
    services: list[GcpBillingAccountServiceSettingsDict]
