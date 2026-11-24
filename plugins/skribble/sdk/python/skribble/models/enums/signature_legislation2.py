from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SignatureLegislation2(str, Enum):
    """The legislation under which this signer's signature was created. Only present after signing."""

    ZERTES = "ZERTES"
    EIDAS = "EIDAS"

    __str__ = str.__str__


SignatureLegislation2OrStr: TypeAlias = Annotated[
    SignatureLegislation2 | str, open_enum_validator(SignatureLegislation2)
]
