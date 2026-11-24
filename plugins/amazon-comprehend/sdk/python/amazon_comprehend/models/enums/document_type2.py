from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DocumentType2(str, Enum):
    """The type of input documents for training the model. Provide plain-text documents to create a plain-text model,
    and provide semi-structured documents to create a native document model."""

    PLAIN_TEXT_DOCUMENT = "PLAIN_TEXT_DOCUMENT"
    SEMI_STRUCTURED_DOCUMENT = "SEMI_STRUCTURED_DOCUMENT"

    __str__ = str.__str__


DocumentType2OrStr: TypeAlias = Annotated[DocumentType2 | str, open_enum_validator(DocumentType2)]
