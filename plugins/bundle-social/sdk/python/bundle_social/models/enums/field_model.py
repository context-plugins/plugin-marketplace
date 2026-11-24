from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FieldModel(str, Enum):
    TEXT = "TEXT"
    PAYLOAD = "PAYLOAD"
    PLATFORM = "PLATFORM"
    SENDER_ID = "SENDER_ID"

    __str__ = str.__str__


FieldModelOrStr: TypeAlias = Annotated[FieldModel | str, open_enum_validator(FieldModel)]
