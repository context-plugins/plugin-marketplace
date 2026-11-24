from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DocumentDocType(str, Enum):
    """Document type"""

    PERSONAL_ID = "personal_id"
    ADDRESS_PROOF = "address_proof"
    BUSINESS_REGISTRATION = "business_registration"
    LETTER_OF_INTENT = "letter_of_intent"

    __str__ = str.__str__


DocumentDocTypeOrStr: TypeAlias = Annotated[DocumentDocType | str, open_enum_validator(DocumentDocType)]
