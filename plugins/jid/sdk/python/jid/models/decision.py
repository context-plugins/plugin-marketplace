from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.activity import ActivityOrStr
from .enums.decision1 import Decision1OrStr
from .reason_jid_verify_api import ReasonJidVerifyApi, ReasonJidVerifyApiDict


class Decision(SdkBaseModel):
    decision: Optional[Decision1OrStr] = UNSET
    activity: Optional[ActivityOrStr] = UNSET
    jurisdiction: OptionalNullable[str] = UNSET
    amount: OptionalNullable[float] = UNSET
    currency: OptionalNullable[str] = UNSET
    reasons: Optional[list[ReasonJidVerifyApi]] = UNSET
    notes: Optional[list[str]] = UNSET
    rules_version: Optional[str] = UNSET
    rules_url: Optional[str] = UNSET
    not_legal_advice: Optional[str] = UNSET
    receipt_id: Optional[str] = UNSET


class DecisionDict(TypedDict):
    decision: NotRequired[Decision1OrStr]
    activity: NotRequired[ActivityOrStr]
    jurisdiction: NotRequired[str | None]
    amount: NotRequired[float | None]
    currency: NotRequired[str | None]
    reasons: NotRequired[list[ReasonJidVerifyApiDict]]
    notes: NotRequired[list[str]]
    rules_version: NotRequired[str]
    rules_url: NotRequired[str]
    not_legal_advice: NotRequired[str]
    receipt_id: NotRequired[str]
