from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Formality(str, Enum):
    """Optional register: "formal" (vous/Sie/usted) or "informal" (tu/du/tú). Omit for the model default."""

    FORMAL = "formal"
    INFORMAL = "informal"

    __str__ = str.__str__


FormalityOrStr: TypeAlias = Annotated[Formality | str, open_enum_validator(Formality)]
