from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .model_inference_log_entry import ModelInferenceLogEntry, ModelInferenceLogEntryDict


class PaginatedResponseModelInferenceLogEntry(SdkBaseModel):
    items: list[ModelInferenceLogEntry]
    total: int
    limit: int
    offset: int


class PaginatedResponseModelInferenceLogEntryDict(TypedDict):
    items: list[ModelInferenceLogEntryDict]
    total: int
    limit: int
    offset: int
