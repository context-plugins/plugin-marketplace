from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class CountryEntry(SdkBaseModel):
    code: str
    """ISO 3166-1 alpha-2."""

    created_at: RFC3339DateTime
    """When the country was added to the list."""


class CountryEntryDict(TypedDict):
    code: str
    created_at: RFC3339DateTime
