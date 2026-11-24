from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AtomInput(SdkBaseModel):
    """Input for updating an Atom."""

    name: Optional[str] = UNSET
    """Updated display name for the Atom."""

    purge_history_days: Optional[int] = Field(default=UNSET, alias="purgeHistoryDays")
    """Number of days to retain execution history before purging."""


class AtomInputDict(TypedDict):
    name: NotRequired[str]
    purge_history_days: NotRequired[int]
