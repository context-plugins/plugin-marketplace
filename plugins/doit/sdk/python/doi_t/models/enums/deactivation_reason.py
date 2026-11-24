from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DeactivationReason(str, Enum):
    """Why the anomaly stopped being active. ``reverted`` means the cost returned inside the expected normal range;
    ``expired`` means the anomaly was deactivated without the cost returning inside that range; ``unknown`` means the
    reason could not be determined. Null while the anomaly is still active."""

    REVERTED = "reverted"
    EXPIRED = "expired"
    UNKNOWN = "unknown"

    __str__ = str.__str__


DeactivationReasonOrStr: TypeAlias = Annotated[DeactivationReason | str, open_enum_validator(DeactivationReason)]
