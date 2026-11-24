from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VerificationSource(str, Enum):
    SOCIAL = "Social"
    EMAIL = "Email"
    SOCIAL_EMAIL = "Social & Email"

    __str__ = str.__str__


VerificationSourceOrStr: TypeAlias = Annotated[VerificationSource | str, open_enum_validator(VerificationSource)]
