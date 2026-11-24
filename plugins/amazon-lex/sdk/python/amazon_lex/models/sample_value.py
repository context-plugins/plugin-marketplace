from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SampleValue(SdkBaseModel):
    value: str
    """The value that can be used for a slot type."""


class SampleValueDict(TypedDict):
    value: str
