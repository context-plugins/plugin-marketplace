from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason(str, Enum):
    """Reason codes include the following values: DOCUMENT_SIZE_EXCEEDED - Document size is too large. Check the size of
    your file and resubmit the request. UNSUPPORTED_DOC_TYPE - Document type is not supported. Check the file type and
    resubmit the request. PAGE_LIMIT_EXCEEDED - Too many pages in the document. Check the number of pages in your file
    and resubmit the request. TEXTRACT_ACCESS_DENIED - Access denied to Amazon Textract. Verify that your account has
    permission to use Amazon Textract API operations and resubmit the request. NOT_TEXTRACT_JSON - Document is not
    Amazon Textract JSON format. Ve"""

    DOCUMENT_SIZE_EXCEEDED = "DOCUMENT_SIZE_EXCEEDED"
    UNSUPPORTED_DOC_TYPE = "UNSUPPORTED_DOC_TYPE"
    PAGE_LIMIT_EXCEEDED = "PAGE_LIMIT_EXCEEDED"
    TEXTRACT_ACCESS_DENIED = "TEXTRACT_ACCESS_DENIED"

    __str__ = str.__str__


ReasonOrStr: TypeAlias = Annotated[Reason | str, open_enum_validator(Reason)]
