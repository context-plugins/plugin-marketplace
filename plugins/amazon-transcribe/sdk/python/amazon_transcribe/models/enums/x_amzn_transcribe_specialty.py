from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmznTranscribeSpecialty(str, Enum):
    PRIMARYCARE = "PRIMARYCARE"
    CARDIOLOGY = "CARDIOLOGY"
    NEUROLOGY = "NEUROLOGY"
    ONCOLOGY = "ONCOLOGY"
    RADIOLOGY = "RADIOLOGY"
    UROLOGY = "UROLOGY"

    __str__ = str.__str__


XAmznTranscribeSpecialtyOrStr: TypeAlias = Annotated[
    XAmznTranscribeSpecialty | str, open_enum_validator(XAmznTranscribeSpecialty)
]
