from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1RazorpayPartnerDocumentsApi(str, Enum):
    AADHAR_FRONT = "aadhar_front"
    AADHAR_BACK = "aadhar_back"
    PASSPORT_FRONT = "passport_front"
    PASSPORT_BACK = "passport_back"
    VOTER_ID_FRONT = "voter_id_front"
    VOTER_ID_BACK = "voter_id_back"

    __str__ = str.__str__


Type1RazorpayPartnerDocumentsApiOrStr: TypeAlias = Annotated[
    Type1RazorpayPartnerDocumentsApi | str, open_enum_validator(Type1RazorpayPartnerDocumentsApi)
]
