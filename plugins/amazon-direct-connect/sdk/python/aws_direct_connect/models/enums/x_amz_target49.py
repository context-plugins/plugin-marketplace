from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget49(str, Enum):
    OVERTURE_SERVICE_DESCRIBE_CUSTOMER_METADATA = "OvertureService.DescribeCustomerMetadata"

    __str__ = str.__str__


XAmzTarget49OrStr: TypeAlias = Annotated[XAmzTarget49 | str, open_enum_validator(XAmzTarget49)]
