from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.value import Value, ValueDict


class Filter(SdkBaseModel):
    name: str
    value: Value


class FilterDict(TypedDict):
    name: str
    value: ValueDict
