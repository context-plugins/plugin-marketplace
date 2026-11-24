from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DocumentType1(str, Enum):
    PERSONAL_PAN = "personal_pan"
    AADHAR_FRONT = "aadhar_front"
    AADHAR_BACK = "aadhar_back"
    PASSPORT_FRONT = "passport_front"
    PASSPORT_BACK = "passport_back"
    VOTER_ID_FRONT = "voter_id_front"
    VOTER_ID_BACK = "voter_id_back"

    __str__ = str.__str__


DocumentType1OrStr: TypeAlias = Annotated[DocumentType1 | str, open_enum_validator(DocumentType1)]
