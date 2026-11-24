from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SubmitFeatureChangeRequestDto(SdkBaseModel):
    description: str
    reviewers: list[str]


class SubmitFeatureChangeRequestDtoDict(TypedDict):
    description: str
    reviewers: list[str]
