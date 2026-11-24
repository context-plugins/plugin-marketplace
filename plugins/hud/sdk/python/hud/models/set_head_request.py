from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SetHeadRequest(SdkBaseModel):
    """Point a trainable model's active checkpoint (head) at one of its nodes."""

    checkpoint_id: UUID


class SetHeadRequestDict(TypedDict):
    checkpoint_id: UUID
