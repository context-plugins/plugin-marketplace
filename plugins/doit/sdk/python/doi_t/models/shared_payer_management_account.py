from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SharedPayerManagementAccount(SdkBaseModel):
    """A linked shared-payer management (payer) account that has completed onboarding."""

    payer_id: Optional[str] = Field(default=UNSET, alias="payerId")
    """AWS account ID of the management (payer) account."""

    payer_name: Optional[str] = Field(default=UNSET, alias="payerName")
    """Display name of the management (payer) account."""


class SharedPayerManagementAccountDict(TypedDict):
    payer_id: NotRequired[str]
    payer_name: NotRequired[str]
