from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .model import Model, ModelDict


class ModelsResponse(SdkBaseModel):
    data: list[Model]


class ModelsResponseDict(TypedDict):
    data: list[ModelDict]
