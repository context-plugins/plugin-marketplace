from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_app_group_balance_wallet import (
    GoogleCloudApigeeV1AppGroupBalanceWallet,
    GoogleCloudApigeeV1AppGroupBalanceWalletDict,
)


class GoogleCloudApigeeV1AppGroupBalance(SdkBaseModel):
    """AppGroupBalance for the AppGroup."""

    wallets: Optional[list[GoogleCloudApigeeV1AppGroupBalanceWallet]] = UNSET
    """Output only. List of all wallets. Each individual wallet stores the account balance for a particular currency."""


class GoogleCloudApigeeV1AppGroupBalanceDict(TypedDict):
    wallets: NotRequired[list[GoogleCloudApigeeV1AppGroupBalanceWalletDict]]
