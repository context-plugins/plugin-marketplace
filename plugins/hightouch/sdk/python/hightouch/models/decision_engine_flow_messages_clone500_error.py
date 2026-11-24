from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DecisionEngineFlowMessagesClone500Error(SdkBaseModel):
    message: Optional[str] = UNSET
    """Why the request failed."""


class DecisionEngineFlowMessagesClone500ErrorDict(TypedDict):
    message: NotRequired[str]
