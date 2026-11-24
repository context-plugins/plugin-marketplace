from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.billing_mode1_aws_direct_connect_operations_api import BillingMode1AwsDirectConnectOperationsApiOrStr


class UpdateConnectionsBillingModeRequest(SdkBaseModel):
    connection_ids: list[str] = Field(alias="connectionIds")
    """The IDs of the connections to update. You can specify from 1 to 200 connections."""

    billing_mode: BillingMode1AwsDirectConnectOperationsApiOrStr = Field(alias="billingMode")
    """The billing mode to apply to the specified connections. The valid values are PayAsYouGo, FlatRateTier1,
    FlatRateTier2, FlatRateTier3, FlatRateTier4, and FlatRateTier5."""


class UpdateConnectionsBillingModeRequestDict(TypedDict):
    connection_ids: list[str]
    billing_mode: BillingMode1AwsDirectConnectOperationsApiOrStr
