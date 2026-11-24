from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ValidationStatus(str, Enum):
    """The validation status of the domain name. This can be one of the following values: PENDING_VALIDATION SUCCESS
    FAILED"""

    PENDING_VALIDATION = "PENDING_VALIDATION"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"

    __str__ = str.__str__


ValidationStatusOrStr: TypeAlias = Annotated[ValidationStatus | str, open_enum_validator(ValidationStatus)]
