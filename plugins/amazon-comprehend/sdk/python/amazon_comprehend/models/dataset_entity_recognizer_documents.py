from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.input_format import InputFormatOrStr


class DatasetEntityRecognizerDocuments(SdkBaseModel):
    s3_uri: str = Field(alias="S3Uri")
    """Specifies the Amazon S3 location where the documents for the dataset are located."""

    input_format: Optional[InputFormatOrStr] = Field(default=UNSET, alias="InputFormat")
    """Specifies how the text in an input file should be processed. This is optional, and the default is
    ONE_DOC_PER_LINE. ONE_DOC_PER_FILE - Each file is considered a separate document. Use this option when you are
    processing large documents, such as newspaper articles or scientific papers. ONE_DOC_PER_LINE - Each line in a file
    is considered a separate document. Use this option when you are processing many short documents, such as text
    messages."""


class DatasetEntityRecognizerDocumentsDict(TypedDict):
    s3_uri: str
    input_format: NotRequired[InputFormatOrStr]
