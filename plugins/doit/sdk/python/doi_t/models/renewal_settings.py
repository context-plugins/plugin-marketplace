from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RenewalSettings(SdkBaseModel):
    """Settings that control subscription renewal behavior at the end of a commitment term."""

    renewal_type: Optional[str] = Field(default=UNSET, alias="renewalType")
    """The type of renewal, e.g. AUTO_RENEW_MONTHLY_PAY, AUTO_RENEW_YEARLY_PAY, RENEW_CURRENT_USERS_MONTHLY_PAY,
    RENEW_CURRENT_USERS_YEARLY_PAY, SWITCH_TO_PAY_AS_YOU_GO, or CANCEL."""


class RenewalSettingsDict(TypedDict):
    renewal_type: NotRequired[str]
