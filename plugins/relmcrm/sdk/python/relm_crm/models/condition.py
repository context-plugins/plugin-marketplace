from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Condition(SdkBaseModel):
    field: Optional[str] = UNSET
    op: Optional[str] = UNSET
    value: Optional[Any] = UNSET


class ConditionDict(TypedDict):
    field: NotRequired[str]
    op: NotRequired[str]
    value: NotRequired[Any]
