from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GatewayCapacity1(str, Enum):
    """Specifies the size of the gateway's metadata cache. This setting impacts gateway performance and hardware
    recommendations. For more information, see Performance guidance for gateways with multiple file shares in the Amazon
    S3 File Gateway User Guide."""

    SMALL = "Small"
    MEDIUM = "Medium"
    LARGE = "Large"

    __str__ = str.__str__


GatewayCapacity1OrStr: TypeAlias = Annotated[GatewayCapacity1 | str, open_enum_validator(GatewayCapacity1)]
