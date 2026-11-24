from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UpdateOverrideDto(SdkBaseModel):
    environment: str
    variation: str


class UpdateOverrideDtoDict(TypedDict):
    environment: str
    variation: str
