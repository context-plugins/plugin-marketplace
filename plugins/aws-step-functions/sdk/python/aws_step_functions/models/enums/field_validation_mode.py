from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FieldValidationMode(str, Enum):
    """Determines the level of strictness when validating mocked results against their respective API models. Values
    include: STRICT: All required fields must be present, and all present fields must conform to the API's schema.
    PRESENT: All present fields must conform to the API's schema. NONE: No validation is performed. If no value is
    specified, the default value is STRICT."""

    STRICT = "STRICT"
    PRESENT = "PRESENT"
    NONE = "NONE"

    __str__ = str.__str__


FieldValidationModeOrStr: TypeAlias = Annotated[FieldValidationMode | str, open_enum_validator(FieldValidationMode)]
