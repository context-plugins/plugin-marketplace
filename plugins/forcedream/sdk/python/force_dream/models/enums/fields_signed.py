from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FieldsSigned(int, Enum):
    """8 for proofs without external_cost_hash, 10 for proofs with it."""

    VALUE_8 = 8
    VALUE_10 = 10

    __str__ = str.__str__


FieldsSignedOrInt: TypeAlias = Annotated[FieldsSigned | int, open_enum_validator(FieldsSigned)]
