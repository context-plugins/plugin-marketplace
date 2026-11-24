from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UpdateEntryRequest(SdkBaseModel):
    """Parameters for updating an entry."""

    entry: Any
    """Updated field values for the entry."""


class UpdateEntryRequestDict(TypedDict):
    entry: Any
