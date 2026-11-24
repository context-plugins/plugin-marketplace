from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class TriggerRunInput(SdkBaseModel):
    """The input of a trigger action to run syncs"""

    clear_and_fill: bool = Field(default=False, alias="clearAndFill")
    """Whether to clear the audience and then sync the full query to the destination"""

    reset_cdc: bool = Field(default=False, alias="resetCDC")
    """Whether to sync all the rows in the query without executing changes on the destination."""

    full_resync: bool = Field(default=False, alias="fullResync")
    """Whether to resync all the rows in the query (i.e. ignoring previously synced rows)."""


class TriggerRunInputDict(TypedDict):
    clear_and_fill: NotRequired[bool]
    reset_cdc: NotRequired[bool]
    full_resync: NotRequired[bool]
