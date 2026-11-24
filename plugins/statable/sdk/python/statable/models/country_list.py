from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .country_entry import CountryEntry, CountryEntryDict


class CountryList(SdkBaseModel):
    """The stored lists, as GET returns them. Note the deliberate asymmetry with the PUT body: writes take bare ISO
    codes, reads return one entry per country with the time it was added. Both keys are always present; an empty list is
    []."""

    allowed: list[CountryEntry]
    blocked: list[CountryEntry]


class CountryListDict(TypedDict):
    allowed: list[CountryEntryDict]
    blocked: list[CountryEntryDict]
