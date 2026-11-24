from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data1_flightdeck_dope_security_public_api_specification import (
    Data1FlightdeckDopeSecurityPublicApiSpecification,
    Data1FlightdeckDopeSecurityPublicApiSpecificationDict,
)


class PolicyContentResponse(SdkBaseModel):
    data: Data1FlightdeckDopeSecurityPublicApiSpecification


class PolicyContentResponseDict(TypedDict):
    data: Data1FlightdeckDopeSecurityPublicApiSpecificationDict
