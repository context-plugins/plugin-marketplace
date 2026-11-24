from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.service5 import Service5OrStr
from .gcp_billing_account_settings import GcpBillingAccountSettings, GcpBillingAccountSettingsDict


class GcpBillingAccountServiceSettings(SdkBaseModel):
    service: Service5OrStr
    """Product line these settings apply to."""

    region: str
    """Region scope these settings apply to, in ``lower_snake_case`` wire form (for example ``us_east1``). Always
    ``global`` for ``compute``; always a concrete region (never ``global``) for ``cloud_sql``."""

    settings: GcpBillingAccountSettings
    """Commitment settings for this product line and region."""


class GcpBillingAccountServiceSettingsDict(TypedDict):
    service: Service5OrStr
    region: str
    settings: GcpBillingAccountSettingsDict
