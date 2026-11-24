from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name1LushaApiDocumentationProspectingSearchEnrichApi(str, Enum):
    ALL_SIGNALS = "allSignals"
    PROMOTION = "promotion"
    COMPANY_CHANGE = "companyChange"

    __str__ = str.__str__


Name1LushaApiDocumentationProspectingSearchEnrichApiOrStr: TypeAlias = Annotated[
    Name1LushaApiDocumentationProspectingSearchEnrichApi | str,
    open_enum_validator(Name1LushaApiDocumentationProspectingSearchEnrichApi),
]
