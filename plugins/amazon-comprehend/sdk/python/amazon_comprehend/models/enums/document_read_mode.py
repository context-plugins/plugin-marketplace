from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DocumentReadMode(str, Enum):
    """Determines the text extraction actions for PDF files. Enter one of the following values: SERVICE_DEFAULT - use
    the Amazon Comprehend service defaults for PDF files. FORCE_DOCUMENT_READ_ACTION - Amazon Comprehend uses the
    Textract API specified by DocumentReadAction for all PDF files, including digital PDF files."""

    SERVICE_DEFAULT = "SERVICE_DEFAULT"
    FORCE_DOCUMENT_READ_ACTION = "FORCE_DOCUMENT_READ_ACTION"

    __str__ = str.__str__


DocumentReadModeOrStr: TypeAlias = Annotated[DocumentReadMode | str, open_enum_validator(DocumentReadMode)]
