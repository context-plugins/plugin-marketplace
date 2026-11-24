from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.action_bundle_social_credit_api import ActionBundleSocialCreditApiOrStr


class ApiV1BillingBillableUsageQuoteRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    text: str = ""
    texts: Optional[list[str]] = UNSET
    action: Optional[ActionBundleSocialCreditApiOrStr] = UNSET
    alt_text_count: Optional[int] = Field(default=UNSET, alias="altTextCount")
    quantity: int = 1


class ApiV1BillingBillableUsageQuoteRequestDict(TypedDict):
    team_id: str
    text: NotRequired[str]
    texts: NotRequired[list[str]]
    action: NotRequired[ActionBundleSocialCreditApiOrStr]
    alt_text_count: NotRequired[int]
    quantity: NotRequired[int]
