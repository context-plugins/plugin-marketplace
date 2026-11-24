from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DecisionDeliverdDevTasksApi(SdkBaseModel):
    title: str
    rationale: Optional[str] = UNSET


class DecisionDeliverdDevTasksApiDict(TypedDict):
    title: str
    rationale: NotRequired[str]
