from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .endpoint import Endpoint, EndpointDict
from .pagination_response import PaginationResponse, PaginationResponseDict


class DataFlightdeckDopeSecurityPublicApiSpecification(SdkBaseModel):
    page_info: Optional[PaginationResponse] = Field(default=UNSET, alias="pageInfo")
    """Information about current and next page for cursor based pagination"""

    endpoints: Optional[list[Endpoint]] = UNSET


class DataFlightdeckDopeSecurityPublicApiSpecificationDict(TypedDict):
    page_info: NotRequired[PaginationResponseDict]
    endpoints: NotRequired[list[EndpointDict]]
