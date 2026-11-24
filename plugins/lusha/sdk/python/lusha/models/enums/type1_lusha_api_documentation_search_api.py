from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1LushaApiDocumentationSearchApi(str, Enum):
    ALL_SIGNALS = "allSignals"
    PROMOTION = "promotion"
    COMPANY_CHANGE = "companyChange"

    __str__ = str.__str__


Type1LushaApiDocumentationSearchApiOrStr: TypeAlias = Annotated[
    Type1LushaApiDocumentationSearchApi | str, open_enum_validator(Type1LushaApiDocumentationSearchApi)
]
