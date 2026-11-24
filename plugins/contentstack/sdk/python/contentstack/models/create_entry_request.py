from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateEntryRequest(SdkBaseModel):
    """Parameters for creating a new entry."""

    entry: Any
    """Entry field values conforming to the content type schema."""


class CreateEntryRequestDict(TypedDict):
    entry: Any
