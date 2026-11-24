from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.outcome import OutcomeOrStr


class V1OutcomesRequest(SdkBaseModel):
    result_id: Optional[str] = UNSET
    outcome: Optional[OutcomeOrStr] = UNSET
    """legit, sales_pitch, spam and scam on a qualification are also community reports (jid.com/privacy section 2b)."""

    note: Optional[str] = UNSET
    token: Optional[str] = UNSET


class V1OutcomesRequestDict(TypedDict):
    result_id: NotRequired[str]
    outcome: NotRequired[OutcomeOrStr]
    note: NotRequired[str]
    token: NotRequired[str]
