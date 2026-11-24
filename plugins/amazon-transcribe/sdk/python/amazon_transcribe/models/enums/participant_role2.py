from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ParticipantRole2(str, Enum):
    """Specify the participant that you want to flag. The allowed options are CLINICIAN and PATIENT."""

    PATIENT = "PATIENT"
    CLINICIAN = "CLINICIAN"

    __str__ = str.__str__


ParticipantRole2OrStr: TypeAlias = Annotated[ParticipantRole2 | str, open_enum_validator(ParticipantRole2)]
