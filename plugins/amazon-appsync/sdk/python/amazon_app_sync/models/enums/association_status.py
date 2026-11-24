from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AssociationStatus(str, Enum):
    """Identifies the status of an association. PROCESSING: The API association is being created. You cannot modify
    association requests during processing. SUCCESS: The API association was successful. You can modify associations
    after success. FAILED: The API association has failed. You can modify associations after failure."""

    PROCESSING = "PROCESSING"
    FAILED = "FAILED"
    SUCCESS = "SUCCESS"

    __str__ = str.__str__


AssociationStatusOrStr: TypeAlias = Annotated[AssociationStatus | str, open_enum_validator(AssociationStatus)]
