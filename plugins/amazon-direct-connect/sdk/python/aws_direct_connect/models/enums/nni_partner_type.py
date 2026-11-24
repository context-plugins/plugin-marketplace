from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NniPartnerType(str, Enum):
    """The type of network-to-network interface (NNI) partner. The partner type will be one of the following: V1: This
    partner can only allocate 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, or 500Mbps subgigabit connections. V2: This
    partner can only allocate 1GB, 2GB, 5GB, or 10GB hosted connections. nonPartner: The customer is not a partner."""

    V1 = "v1"
    V2 = "v2"
    NON_PARTNER = "nonPartner"

    __str__ = str.__str__


NniPartnerTypeOrStr: TypeAlias = Annotated[NniPartnerType | str, open_enum_validator(NniPartnerType)]
