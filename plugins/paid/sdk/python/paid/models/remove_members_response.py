from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RemoveMembersResponse(SdkBaseModel):
    removed: int
    skipped: int
    skipped_ids: list[str] = Field(alias="skippedIds")


class RemoveMembersResponseDict(TypedDict):
    removed: int
    skipped: int
    skipped_ids: list[str]
