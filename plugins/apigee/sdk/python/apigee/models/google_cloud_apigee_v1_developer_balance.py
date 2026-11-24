from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_developer_balance_wallet import (
    GoogleCloudApigeeV1DeveloperBalanceWallet,
    GoogleCloudApigeeV1DeveloperBalanceWalletDict,
)


class GoogleCloudApigeeV1DeveloperBalance(SdkBaseModel):
    """Account balance for the developer."""

    wallets: Optional[list[GoogleCloudApigeeV1DeveloperBalanceWallet]] = UNSET
    """Output only. List of all wallets. Each individual wallet stores the account balance for a particular currency."""


class GoogleCloudApigeeV1DeveloperBalanceDict(TypedDict):
    wallets: NotRequired[list[GoogleCloudApigeeV1DeveloperBalanceWalletDict]]
