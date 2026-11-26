from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AccountingIntegrationTransaction(SdkBaseModel):
    r"""Spend \& Expense accounting integration transaction information."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the transaction in your accounting system"""

    billable: Optional[bool] = UNSET
    """Set as ``true`` if the transaction can be billed to a client or customer"""

    integration_tx_id: Optional[str] = Field(default=UNSET, alias="integrationTxId")
    """Unique transaction ID in your accounting system"""

    sync_status: Optional[str] = Field(default=UNSET, alias="syncStatus")
    """Current sync status of the transaction with your accounting system"""

    sync_message: Optional[str] = Field(default=UNSET, alias="syncMessage")
    """Message describing the result of the previous sync attempt"""

    integration_type: Optional[str] = Field(default=UNSET, alias="integrationType")
    """Accounting system integration type"""

    integration_id: Optional[str] = Field(default=UNSET, alias="integrationId")
    """BILL-generated ID of the accounting system integration"""

    sync_request_id: Optional[str] = Field(default=UNSET, alias="syncRequestId")
    """Unique ID of the sync request that processed the transaction"""


class AccountingIntegrationTransactionDict(TypedDict):
    id: NotRequired[str]
    billable: NotRequired[bool]
    integration_tx_id: NotRequired[str]
    sync_status: NotRequired[str]
    sync_message: NotRequired[str]
    integration_type: NotRequired[str]
    integration_id: NotRequired[str]
    sync_request_id: NotRequired[str]
