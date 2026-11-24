from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DocType(str, Enum):
    """Document type identifier"""

    PERSONAL_ID = "Personal ID"
    PROOF_OF_ADDRESS = "Proof of address"
    BUSINESS_REGISTRATION = "Business Registration"
    LETTER_OF_INTENT = "Letter of Intent"

    __str__ = str.__str__


DocTypeOrStr: TypeAlias = Annotated[DocType | str, open_enum_validator(DocType)]
