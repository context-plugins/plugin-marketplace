from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .client_model import ClientModel, ClientModelDict
from .payment_history_simple import PaymentHistorySimple, PaymentHistorySimpleDict
from .policy_details import PolicyDetails, PolicyDetailsDict


class InsuranceDetails(SdkBaseModel):
    policy_details: PolicyDetails
    """Information about insurance"""

    client: ClientModel
    payment_history_simple: Optional[PaymentHistorySimple] = UNSET


class InsuranceDetailsDict(TypedDict):
    policy_details: PolicyDetailsDict
    client: ClientModelDict
    payment_history_simple: NotRequired[PaymentHistorySimpleDict]
