from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget50(str, Enum):
    OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAY_ATTACHMENTS = "OvertureService.DescribeDirectConnectGatewayAttachments"

    __str__ = str.__str__


XAmzTarget50OrStr: TypeAlias = Annotated[XAmzTarget50 | str, open_enum_validator(XAmzTarget50)]
