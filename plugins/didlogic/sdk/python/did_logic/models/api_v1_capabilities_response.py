from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .capability import Capability, CapabilityDict
from .user import User, UserDict


class ApiV1CapabilitiesResponse(SdkBaseModel):
    capabilities: list[Capability]
    """Operations this key may call"""

    user: User
    """The account the key belongs to"""


class ApiV1CapabilitiesResponseDict(TypedDict):
    capabilities: list[CapabilityDict]
    user: UserDict
