from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FindingDeliverdDevTasksApi(SdkBaseModel):
    title: str
    description: str
    evidence: Optional[list[str]] = UNSET


class FindingDeliverdDevTasksApiDict(TypedDict):
    title: str
    description: str
    evidence: NotRequired[list[str]]
