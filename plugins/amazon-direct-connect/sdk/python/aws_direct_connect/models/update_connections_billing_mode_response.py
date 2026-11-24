from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .connection_aws_direct_connect_operations_api import (
    ConnectionAwsDirectConnectOperationsApi,
    ConnectionAwsDirectConnectOperationsApiDict,
)
from .enums.billing_mode2_aws_direct_connect_operations_api import BillingMode2AwsDirectConnectOperationsApiOrStr


class UpdateConnectionsBillingModeResponse(SdkBaseModel):
    billing_mode: Optional[BillingMode2AwsDirectConnectOperationsApiOrStr] = Field(default=UNSET, alias="billingMode")
    """The billing mode applied to the connections."""

    connections: Optional[list[ConnectionAwsDirectConnectOperationsApi]] = UNSET
    """The connections with the updated billing mode."""


class UpdateConnectionsBillingModeResponseDict(TypedDict):
    billing_mode: NotRequired[BillingMode2AwsDirectConnectOperationsApiOrStr]
    connections: NotRequired[list[ConnectionAwsDirectConnectOperationsApiDict]]
