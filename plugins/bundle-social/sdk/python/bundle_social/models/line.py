from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.action_bundle_social_credit_api import ActionBundleSocialCreditApiOrStr


class Line(SdkBaseModel):
    action: ActionBundleSocialCreditApiOrStr
    label: str
    unit_amount_micros: int = Field(alias="unitAmountMicros")
    amount_micros: int = Field(alias="amountMicros")
    amount_cents: int = Field(alias="amountCents")
    currency: Literal["usd"] = "usd"


class LineDict(TypedDict):
    action: ActionBundleSocialCreditApiOrStr
    label: str
    unit_amount_micros: int
    amount_micros: int
    amount_cents: int
    currency: Literal["usd"]
