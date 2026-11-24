from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Phase(str, Enum):
    """Escalation stage of the dispute process."""

    FRAUD = "fraud"
    RETRIEVAL = "retrieval"
    CHARGEBACK = "chargeback"
    PRE_ARBITRATION = "pre_arbitration"
    ARBITRATION = "arbitration"

    __str__ = str.__str__


PhaseOrStr: TypeAlias = Annotated[Phase | str, open_enum_validator(Phase)]
