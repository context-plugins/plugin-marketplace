from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bank_account import BankAccount, BankAccountDict
from .bill import Bill, BillDict
from .card_account import CardAccount, CardAccountDict
from .invoice1_connect_events_subscriptions_api import (
    Invoice1ConnectEventsSubscriptionsApi,
    Invoice1ConnectEventsSubscriptionsApiDict,
)
from .payment import Payment, PaymentDict
from .reimbursement import Reimbursement, ReimbursementDict
from .risk_verification import RiskVerification, RiskVerificationDict
from .three_ds_challenge import ThreeDsChallenge, ThreeDsChallengeDict
from .transaction import Transaction, TransactionDict
from .vendor1 import Vendor1, Vendor1Dict


class SendTestEventRequestDto(SdkBaseModel):
    """Generate a test event notification"""

    event_type: Optional[str] = Field(default=UNSET, alias="eventType")
    """Event type. You can get the BILL events catalog with ``GET /v3/events/catalog``."""

    version: Optional[str] = UNSET
    """Event type version"""

    vendor: Optional[Vendor1] = UNSET
    bill: Optional[Bill] = UNSET
    bank_account: Optional[BankAccount] = Field(default=UNSET, alias="bank-account")
    card_account: Optional[CardAccount] = Field(default=UNSET, alias="card-account")
    payment: Optional[Payment] = UNSET
    risk_verification: Optional[RiskVerification] = Field(default=UNSET, alias="risk-verification")
    invoice: Optional[Invoice1ConnectEventsSubscriptionsApi] = UNSET
    transaction: Optional[Transaction] = UNSET
    three_ds_challenge: Optional[ThreeDsChallenge] = Field(default=UNSET, alias="threeDsChallenge")
    reimbursement: Optional[Reimbursement] = UNSET


class SendTestEventRequestDtoDict(TypedDict):
    event_type: NotRequired[str]
    version: NotRequired[str]
    vendor: NotRequired[Vendor1Dict]
    bill: NotRequired[BillDict]
    bank_account: NotRequired[BankAccountDict]
    card_account: NotRequired[CardAccountDict]
    payment: NotRequired[PaymentDict]
    risk_verification: NotRequired[RiskVerificationDict]
    invoice: NotRequired[Invoice1ConnectEventsSubscriptionsApiDict]
    transaction: NotRequired[TransactionDict]
    three_ds_challenge: NotRequired[ThreeDsChallengeDict]
    reimbursement: NotRequired[ReimbursementDict]
