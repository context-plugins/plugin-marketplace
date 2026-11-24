from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Pronouns(str, Enum):
    """The patient's preferred pronouns that the user wants to provide as a context for clinical note generation."""

    HE_HIM = "HE_HIM"
    SHE_HER = "SHE_HER"
    THEY_THEM = "THEY_THEM"

    __str__ = str.__str__


PronounsOrStr: TypeAlias = Annotated[Pronouns | str, open_enum_validator(Pronouns)]
