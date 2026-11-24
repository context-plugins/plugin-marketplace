from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .added_by import AddedBy, AddedByDict


class Data2(SdkBaseModel):
    added: Optional[int] = UNSET
    already_present: Optional[int] = Field(default=UNSET, alias="alreadyPresent")
    invalid_ids: Optional[list[str]] = Field(default=UNSET, alias="invalidIds")
    """IDs that couldn't be resolved. Not an error — the call still returns ``200``."""

    added_by: Optional[AddedBy] = Field(default=UNSET, alias="addedBy")
    """Where and by whom a row was added to the table."""


class Data2Dict(TypedDict):
    added: NotRequired[int]
    already_present: NotRequired[int]
    invalid_ids: NotRequired[list[str]]
    added_by: NotRequired[AddedByDict]
