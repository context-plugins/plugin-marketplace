from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicApiRcaMetricDto(SdkBaseModel):
    label: str
    value: str


class PublicApiRcaMetricDtoDict(TypedDict):
    label: str
    value: str
