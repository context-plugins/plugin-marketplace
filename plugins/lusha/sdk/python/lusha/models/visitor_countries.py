from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class VisitorCountries(SdkBaseModel):
    """ISO 3166-1 alpha-2 country code filters."""

    include: Optional[list[str]] = UNSET
    exclude: Optional[list[str]] = UNSET


class VisitorCountriesDict(TypedDict):
    include: NotRequired[list[str]]
    exclude: NotRequired[list[str]]
