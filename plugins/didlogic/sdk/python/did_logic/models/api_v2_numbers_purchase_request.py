from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV2NumbersPurchaseRequest(SdkBaseModel):
    id_in: Optional[list[int]] = UNSET
    """Array of DID IDs to purchase, from numbers_countries_cities_dids_index, numbers_search_show"""

    did_numbers: Optional[list[str]] = UNSET
    """Array of DID numbers to purchase, from numbers_countries_cities_dids_index, numbers_search_show"""

    identities: Optional[list[Any]] = UNSET
    """Array of identity objects with document associations"""


class ApiV2NumbersPurchaseRequestDict(TypedDict):
    id_in: NotRequired[list[int]]
    did_numbers: NotRequired[list[str]]
    identities: NotRequired[list[Any]]
