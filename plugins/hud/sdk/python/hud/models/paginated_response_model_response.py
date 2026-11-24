from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .model_response import ModelResponse, ModelResponseDict


class PaginatedResponseModelResponse(SdkBaseModel):
    items: list[ModelResponse]
    total: int
    limit: int
    offset: int


class PaginatedResponseModelResponseDict(TypedDict):
    items: list[ModelResponseDict]
    total: int
    limit: int
    offset: int
