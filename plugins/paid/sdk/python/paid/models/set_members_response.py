from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SetMembersResponse(SdkBaseModel):
    added: int
    removed: int
    skipped: int
    skipped_ids: list[str] = Field(alias="skippedIds")


class SetMembersResponseDict(TypedDict):
    added: int
    removed: int
    skipped: int
    skipped_ids: list[str]
