from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_flightdeck_dope_security_public_api_specification import (
    DataFlightdeckDopeSecurityPublicApiSpecification,
    DataFlightdeckDopeSecurityPublicApiSpecificationDict,
)


class EndpointsSearchResponse(SdkBaseModel):
    data: Optional[DataFlightdeckDopeSecurityPublicApiSpecification] = UNSET


class EndpointsSearchResponseDict(TypedDict):
    data: NotRequired[DataFlightdeckDopeSecurityPublicApiSpecificationDict]
