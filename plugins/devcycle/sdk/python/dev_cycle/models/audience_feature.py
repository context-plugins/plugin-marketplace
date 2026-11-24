from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AudienceFeature(SdkBaseModel):
    key: str
    name: str
    id: str
    environments: Any


class AudienceFeatureDict(TypedDict):
    key: str
    name: str
    id: str
    environments: Any
