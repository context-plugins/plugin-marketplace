from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget21(str, Enum):
    OVERTURE_SERVICE_ASSOCIATE_HOSTED_CONNECTION = "OvertureService.AssociateHostedConnection"

    __str__ = str.__str__


XAmzTarget21OrStr: TypeAlias = Annotated[XAmzTarget21 | str, open_enum_validator(XAmzTarget21)]
