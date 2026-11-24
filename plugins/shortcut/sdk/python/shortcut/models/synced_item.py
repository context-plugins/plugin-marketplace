from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SyncedItem(SdkBaseModel):
    """The synced item for the story."""

    model_config = ConfigDict(extra="forbid")

    external_id: str
    """The id used to reference an external entity."""

    url: str
    """The url to the external entity."""


class SyncedItemDict(TypedDict):
    external_id: str
    url: str
