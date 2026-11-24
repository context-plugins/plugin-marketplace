from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SpecialtyAmazonTranscribeServiceOperationsApi(str, Enum):
    """Provides the medical specialty that you specified in your request."""

    PRIMARYCARE = "PRIMARYCARE"
    CARDIOLOGY = "CARDIOLOGY"
    NEUROLOGY = "NEUROLOGY"
    ONCOLOGY = "ONCOLOGY"
    RADIOLOGY = "RADIOLOGY"
    UROLOGY = "UROLOGY"

    __str__ = str.__str__


SpecialtyAmazonTranscribeServiceOperationsApiOrStr: TypeAlias = Annotated[
    SpecialtyAmazonTranscribeServiceOperationsApi | str,
    open_enum_validator(SpecialtyAmazonTranscribeServiceOperationsApi),
]
