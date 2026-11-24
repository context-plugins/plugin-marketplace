from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Preemptibility(str, Enum):
    """Optional. Specifies the preemptibility of the instance group.The default value for master and worker groups is
    NON_PREEMPTIBLE. This default cannot be changed.The default value for secondary instances is PREEMPTIBLE."""

    PREEMPTIBILITY_UNSPECIFIED = "PREEMPTIBILITY_UNSPECIFIED"
    NON_PREEMPTIBLE = "NON_PREEMPTIBLE"
    PREEMPTIBLE = "PREEMPTIBLE"
    SPOT = "SPOT"

    __str__ = str.__str__


PreemptibilityOrStr: TypeAlias = Annotated[Preemptibility | str, open_enum_validator(Preemptibility)]
