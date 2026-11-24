from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .shared_payer_management_account import SharedPayerManagementAccount, SharedPayerManagementAccountDict


class SharedPayerManagementAccountList(SdkBaseModel):
    items: Optional[list[SharedPayerManagementAccount]] = UNSET


class SharedPayerManagementAccountListDict(TypedDict):
    items: NotRequired[list[SharedPayerManagementAccountDict]]
