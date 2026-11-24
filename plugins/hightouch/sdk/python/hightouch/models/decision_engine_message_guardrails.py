from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DecisionEngineMessageGuardrails(SdkBaseModel):
    """Guardrail fields on a message (max sends, eligibility dates, etc.)"""

    model_config = ConfigDict(extra="forbid")

    max_sends_per_user: Optional[float] = Field(default=UNSET, alias="maxSendsPerUser")
    max_sends_per_user_window_days: Optional[float] = Field(default=UNSET, alias="maxSendsPerUserWindowDays")
    min_other_messages_in_between: Optional[float] = Field(default=UNSET, alias="minOtherMessagesInBetween")
    first_eligible_send_date: Optional[str] = Field(default=UNSET, alias="firstEligibleSendDate")
    last_eligible_send_date: Optional[str] = Field(default=UNSET, alias="lastEligibleSendDate")


class DecisionEngineMessageGuardrailsDict(TypedDict):
    max_sends_per_user: NotRequired[float]
    max_sends_per_user_window_days: NotRequired[float]
    min_other_messages_in_between: NotRequired[float]
    first_eligible_send_date: NotRequired[str]
    last_eligible_send_date: NotRequired[str]
