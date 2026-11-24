from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Identity(SdkBaseModel):
    requested_id: str = Field(alias="requestedId")
    """The identifier you requested — the {id} path segment (a platform listingId or a URL)."""

    resolved_id: str = Field(alias="resolvedId")
    """The platform-native canonical id we resolved and returned (equals data.platformListingId). STABLE — use THIS for
    equality checks and de-duplication, not canonicalUrl."""

    canonical_url: str = Field(alias="canonicalUrl")
    """The exact fetched listing URL. It may include locale/occupancy/tracking query params (e.g. booking
    ``…/casa-de-alba.en-gb.html?selected_currency=USD&group_adults=2…``), so it is NOT safe for naive string-equality or
    de-duplication — compare on resolvedId instead. Treat it as a navigable link, not an identity key."""


class IdentityDict(TypedDict):
    requested_id: str
    resolved_id: str
    canonical_url: str
