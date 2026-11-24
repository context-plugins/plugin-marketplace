from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Failed(SdkBaseModel):
    label: Optional[str] = UNSET
    evidence: Optional[str] = UNSET
    lookup: Optional[Any] = UNSET


class FailedDict(TypedDict):
    label: NotRequired[str]
    evidence: NotRequired[str]
    lookup: NotRequired[Any]
