from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApi(str, Enum):
    """Specify the participant that you want to flag. The options are CLINICIAN and PATIENT"""

    PATIENT = "PATIENT"
    CLINICIAN = "CLINICIAN"

    __str__ = str.__str__


ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApiOrStr: TypeAlias = Annotated[
    ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApi | str,
    open_enum_validator(ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApi),
]
