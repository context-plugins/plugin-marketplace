from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Change(SdkBaseModel):
    field: Optional[str] = UNSET
    label: Optional[str] = UNSET
    old_value: Optional[Any] = UNSET
    new_value: Optional[Any] = UNSET


class ChangeDict(TypedDict):
    field: NotRequired[str]
    label: NotRequired[str]
    old_value: NotRequired[Any]
    new_value: NotRequired[Any]
