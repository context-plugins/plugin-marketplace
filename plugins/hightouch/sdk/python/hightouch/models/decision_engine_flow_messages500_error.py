from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DecisionEngineFlowMessages500Error(SdkBaseModel):
    message: Optional[str] = UNSET
    """Why the request failed."""


class DecisionEngineFlowMessages500ErrorDict(TypedDict):
    message: NotRequired[str]
