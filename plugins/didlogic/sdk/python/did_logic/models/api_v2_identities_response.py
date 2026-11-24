from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .identity import Identity, IdentityDict
from .pagination_didlogic_com_hlr_lookups_api import (
    PaginationDidlogicComHlrLookupsApi,
    PaginationDidlogicComHlrLookupsApiDict,
)


class ApiV2IdentitiesResponse(SdkBaseModel):
    identities: list[Identity]
    """List of identities"""

    pagination: PaginationDidlogicComHlrLookupsApi
    """Pagination metadata"""


class ApiV2IdentitiesResponseDict(TypedDict):
    identities: list[IdentityDict]
    pagination: PaginationDidlogicComHlrLookupsApiDict
