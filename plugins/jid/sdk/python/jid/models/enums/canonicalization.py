from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Canonicalization(str, Enum):
    SORTED_KEYS_JSON = "sorted-keys-json"

    __str__ = str.__str__


CanonicalizationOrStr: TypeAlias = Annotated[Canonicalization | str, open_enum_validator(Canonicalization)]
