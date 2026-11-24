from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SharedPayerAccountMapping(SdkBaseModel):
    """One AWS account under a linked shared payer - a member account or the payer's own management account - and the
    customer it is currently mapped to."""

    asset_id: Optional[str] = Field(default=UNSET, alias="assetId")
    """Asset ID of the AWS account."""

    account_name: Optional[str] = Field(default=UNSET, alias="accountName")
    """Display name of the AWS account."""

    account_id: Optional[str] = Field(default=UNSET, alias="accountId")
    """AWS account ID."""

    payer_id: Optional[str] = Field(default=UNSET, alias="payerId")
    """AWS account ID of the management (payer) account this account is under."""

    payer_name: Optional[str] = Field(default=UNSET, alias="payerName")
    """Display name of the management (payer) account."""

    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    """Customer the account is currently mapped to. Equal to ``{customerId}`` (the reseller itself) when the account has
    not been reassigned to an end customer."""

    customer_name: Optional[str] = Field(default=UNSET, alias="customerName")
    """Display name of ``customerId``."""


class SharedPayerAccountMappingDict(TypedDict):
    asset_id: NotRequired[str]
    account_name: NotRequired[str]
    account_id: NotRequired[str]
    payer_id: NotRequired[str]
    payer_name: NotRequired[str]
    customer_id: NotRequired[str]
    customer_name: NotRequired[str]
