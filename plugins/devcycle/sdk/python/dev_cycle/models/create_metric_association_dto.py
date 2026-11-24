from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateMetricAssociationDto(SdkBaseModel):
    metric: str
    feature: str


class CreateMetricAssociationDtoDict(TypedDict):
    metric: str
    feature: str
