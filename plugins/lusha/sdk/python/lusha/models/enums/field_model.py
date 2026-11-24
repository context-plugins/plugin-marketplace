from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FieldModel(str, Enum):
    EMAILS = "emails"
    PHONES = "phones"

    __str__ = str.__str__


FieldModelOrStr: TypeAlias = Annotated[FieldModel | str, open_enum_validator(FieldModel)]
