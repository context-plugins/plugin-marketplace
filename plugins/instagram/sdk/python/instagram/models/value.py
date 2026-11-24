from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Value(SdkBaseModel):
    value: Optional[int] = UNSET
    end_time: Optional[RFC3339DateTime] = UNSET


class ValueDict(TypedDict):
    value: NotRequired[int]
    end_time: NotRequired[RFC3339DateTime]
