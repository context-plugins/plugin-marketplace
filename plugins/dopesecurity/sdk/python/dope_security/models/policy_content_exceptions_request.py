from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data2_flightdeck_dope_security_public_api_specification import (
    Data2FlightdeckDopeSecurityPublicApiSpecification,
    Data2FlightdeckDopeSecurityPublicApiSpecificationDict,
)


class PolicyContentExceptionsRequest(SdkBaseModel):
    """Request body for updating user/group exceptions on categories"""

    data: Data2FlightdeckDopeSecurityPublicApiSpecification


class PolicyContentExceptionsRequestDict(TypedDict):
    data: Data2FlightdeckDopeSecurityPublicApiSpecificationDict
