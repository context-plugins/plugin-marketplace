from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Phase(str, Enum):
    """Output only. Deprecated: Phase was designed for incoming migrations to Dataproc Metastore, not applicable when
    migrating away from it. The current phase of the migration execution."""

    PHASE_UNSPECIFIED = "PHASE_UNSPECIFIED"
    REPLICATION = "REPLICATION"
    CUTOVER = "CUTOVER"

    __str__ = str.__str__


PhaseOrStr: TypeAlias = Annotated[Phase | str, open_enum_validator(Phase)]
