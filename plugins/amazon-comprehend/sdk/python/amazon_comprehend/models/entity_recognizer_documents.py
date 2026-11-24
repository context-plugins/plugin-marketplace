from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.input_format import InputFormatOrStr


class EntityRecognizerDocuments(SdkBaseModel):
    s3_uri: str = Field(alias="S3Uri")
    """Specifies the Amazon S3 location where the training documents for an entity recognizer are located. The URI must
    be in the same Region as the API endpoint that you are calling."""

    test_s3_uri: Optional[str] = Field(default=UNSET, alias="TestS3Uri")
    """Specifies the Amazon S3 location where the test documents for an entity recognizer are located. The URI must be
    in the same Amazon Web Services Region as the API endpoint that you are calling."""

    input_format: Optional[InputFormatOrStr] = Field(default=UNSET, alias="InputFormat")
    """Specifies how the text in an input file should be processed. This is optional, and the default is
    ONE_DOC_PER_LINE. ONE_DOC_PER_FILE - Each file is considered a separate document. Use this option when you are
    processing large documents, such as newspaper articles or scientific papers. ONE_DOC_PER_LINE - Each line in a file
    is considered a separate document. Use this option when you are processing many short documents, such as text
    messages."""


class EntityRecognizerDocumentsDict(TypedDict):
    s3_uri: str
    test_s3_uri: NotRequired[str]
    input_format: NotRequired[InputFormatOrStr]
