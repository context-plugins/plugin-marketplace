from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .model import Model, ModelDict


class RepositoriesModelsResponse(SdkBaseModel):
    models: Optional[list[Model]] = UNSET


class RepositoriesModelsResponseDict(TypedDict):
    models: NotRequired[list[ModelDict]]
