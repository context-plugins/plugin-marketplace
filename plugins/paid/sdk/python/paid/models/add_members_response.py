from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AddMembersResponse(SdkBaseModel):
    added: int
    skipped: int
    skipped_ids: list[str] = Field(alias="skippedIds")


class AddMembersResponseDict(TypedDict):
    added: int
    skipped: int
    skipped_ids: list[str]
