from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ModelForkRequest(SdkBaseModel):
    """Create a new trainable model derived from an existing (trainable) one."""

    source_model_id: UUID
    name: str


class ModelForkRequestDict(TypedDict):
    source_model_id: UUID
    name: str
