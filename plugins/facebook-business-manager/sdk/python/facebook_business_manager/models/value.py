from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Value(SdkBaseModel):
    value: Optional[Any] = UNSET
    """The metric value (integer or object)"""

    end_time: Optional[RFC3339DateTime] = UNSET


class ValueDict(TypedDict):
    value: NotRequired[Any]
    end_time: NotRequired[RFC3339DateTime]
