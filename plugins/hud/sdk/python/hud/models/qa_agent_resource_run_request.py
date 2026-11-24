from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class QaAgentResourceRunRequest(SdkBaseModel):
    """Run a resource-scoped agent against canonical subjects."""

    subject_ids: list[UUID]
    overwrite: bool = True


class QaAgentResourceRunRequestDict(TypedDict):
    subject_ids: list[UUID]
    overwrite: NotRequired[bool]
