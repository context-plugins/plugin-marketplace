from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DocumentType(str, Enum):
    """The type of augmented manifest. PlainTextDocument or SemiStructuredDocument. If you don't specify, the default is
    PlainTextDocument. PLAIN_TEXT_DOCUMENT A document type that represents any unicode text that is encoded in UTF-8.
    SEMI_STRUCTURED_DOCUMENT A document type with positional and structural context, like a PDF. For training with
    Amazon Comprehend, only PDFs are supported. For inference, Amazon Comprehend support PDFs, DOCX and TXT."""

    PLAIN_TEXT_DOCUMENT = "PLAIN_TEXT_DOCUMENT"
    SEMI_STRUCTURED_DOCUMENT = "SEMI_STRUCTURED_DOCUMENT"

    __str__ = str.__str__


DocumentTypeOrStr: TypeAlias = Annotated[DocumentType | str, open_enum_validator(DocumentType)]
