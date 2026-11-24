from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DocumentType1(str, Enum):
    """The type of augmented manifest. If you don't specify, the default is PlainTextDocument. PLAIN_TEXT_DOCUMENT A
    document type that represents any unicode text that is encoded in UTF-8."""

    PLAIN_TEXT_DOCUMENT = "PLAIN_TEXT_DOCUMENT"
    SEMI_STRUCTURED_DOCUMENT = "SEMI_STRUCTURED_DOCUMENT"

    __str__ = str.__str__


DocumentType1OrStr: TypeAlias = Annotated[DocumentType1 | str, open_enum_validator(DocumentType1)]
