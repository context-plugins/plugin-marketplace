from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDoiTPerfectScaleForCommitmentsAwsApi(str, Enum):
    """Projection lifecycle state. ``expired`` means the planning cycle has lapsed and a new projection should be
    triggered by the automated scheduler. When the stored document has no ``status``, the server returns ``valid``."""

    VALID = "valid"
    EXPIRED = "expired"

    __str__ = str.__str__


StatusDoiTPerfectScaleForCommitmentsAwsApiOrStr: TypeAlias = Annotated[
    StatusDoiTPerfectScaleForCommitmentsAwsApi | str, open_enum_validator(StatusDoiTPerfectScaleForCommitmentsAwsApi)
]
