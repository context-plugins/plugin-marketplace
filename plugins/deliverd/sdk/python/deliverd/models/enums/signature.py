from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Signature(str, Enum):
    """``unsigned``: the pack carries no signature. ``no_key``: it is signed but this deployment has no key to check it
    with. ``invalid``: the signature or key id does not match."""

    VALID = "valid"
    INVALID = "invalid"
    UNSIGNED = "unsigned"
    NO_KEY = "no_key"

    __str__ = str.__str__


SignatureOrStr: TypeAlias = Annotated[Signature | str, open_enum_validator(Signature)]
