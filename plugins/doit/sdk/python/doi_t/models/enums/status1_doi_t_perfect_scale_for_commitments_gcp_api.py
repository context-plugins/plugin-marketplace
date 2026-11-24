from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1DoiTPerfectScaleForCommitmentsGcpApi(str, Enum):
    """Projection lifecycle state. When the stored document has no ``status``, the server returns ``valid``."""

    VALID = "valid"
    EXPIRED = "expired"

    __str__ = str.__str__


Status1DoiTPerfectScaleForCommitmentsGcpApiOrStr: TypeAlias = Annotated[
    Status1DoiTPerfectScaleForCommitmentsGcpApi | str, open_enum_validator(Status1DoiTPerfectScaleForCommitmentsGcpApi)
]
