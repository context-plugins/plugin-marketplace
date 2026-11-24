from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AllowedValue(SdkBaseModel):
    label: str
    value: Any


class AllowedValueDict(TypedDict):
    label: str
    value: Any
