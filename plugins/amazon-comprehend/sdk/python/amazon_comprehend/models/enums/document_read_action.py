from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DocumentReadAction(str, Enum):
    """This field defines the Amazon Textract API operation that Amazon Comprehend uses to extract text from PDF files
    and image files. Enter one of the following values: TEXTRACT_DETECT_DOCUMENT_TEXT - The Amazon Comprehend service
    uses the DetectDocumentText API operation. TEXTRACT_ANALYZE_DOCUMENT - The Amazon Comprehend service uses the
    AnalyzeDocument API operation."""

    TEXTRACT_DETECT_DOCUMENT_TEXT = "TEXTRACT_DETECT_DOCUMENT_TEXT"
    TEXTRACT_ANALYZE_DOCUMENT = "TEXTRACT_ANALYZE_DOCUMENT"

    __str__ = str.__str__


DocumentReadActionOrStr: TypeAlias = Annotated[DocumentReadAction | str, open_enum_validator(DocumentReadAction)]
