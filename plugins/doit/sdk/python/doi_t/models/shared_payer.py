from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SharedPayer(SdkBaseModel):
    """A shared payer linked to the reseller, with its account-mapping progress."""

    payer_id: Optional[str] = Field(default=UNSET, alias="payerId")
    """AWS account ID of the management (payer) account."""

    payer_name: Optional[str] = Field(default=UNSET, alias="payerName")
    """Display name of the management (payer) account."""

    linked_accounts: Optional[int] = Field(default=UNSET, alias="linkedAccounts")
    """Number of AWS accounts under this payer, including the payer's own management account."""

    mapped_assets: Optional[int] = Field(default=UNSET, alias="mappedAssets")
    """Number of those accounts already reassigned to an end customer."""

    total_assets: Optional[int] = Field(default=UNSET, alias="totalAssets")
    """Same as ``linkedAccounts``."""

    completed: Optional[bool] = UNSET
    """Whether the payer has finished onboarding. A payer still mid-onboarding has no accounts yet."""


class SharedPayerDict(TypedDict):
    payer_id: NotRequired[str]
    payer_name: NotRequired[str]
    linked_accounts: NotRequired[int]
    mapped_assets: NotRequired[int]
    total_assets: NotRequired[int]
    completed: NotRequired[bool]
