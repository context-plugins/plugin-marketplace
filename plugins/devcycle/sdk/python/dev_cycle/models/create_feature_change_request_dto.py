from __future__ import annotations

from typing import Any, Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateFeatureChangeRequestDto(SdkBaseModel):
    path: str
    method: Literal["PATCH"] = "PATCH"
    body: Any


class CreateFeatureChangeRequestDtoDict(TypedDict):
    path: str
    method: Literal["PATCH"]
    body: Any
