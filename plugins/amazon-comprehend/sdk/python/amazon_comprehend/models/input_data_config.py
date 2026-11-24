from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .document_reader_config import DocumentReaderConfig, DocumentReaderConfigDict
from .enums.input_format2 import InputFormat2OrStr


class InputDataConfig(SdkBaseModel):
    s3_uri: str = Field(alias="S3Uri")
    """The Amazon S3 URI for the input data. The URI must be in same Region as the API endpoint that you are calling.
    The URI can point to a single input file or it can provide the prefix for a collection of data files. For example,
    if you use the URI S3://bucketName/prefix, if the prefix is a single file, Amazon Comprehend uses that file as
    input. If more than one file begins with the prefix, Amazon Comprehend uses all of them as input."""

    input_format: Optional[InputFormat2OrStr] = Field(default=UNSET, alias="InputFormat")
    """Specifies how the text in an input file should be processed: ONE_DOC_PER_FILE - Each file is considered a
    separate document. Use this option when you are processing large documents, such as newspaper articles or scientific
    papers. ONE_DOC_PER_LINE - Each line in a file is considered a separate document. Use this option when you are
    processing many short documents, such as text messages."""

    document_reader_config: Optional[DocumentReaderConfig] = Field(default=UNSET, alias="DocumentReaderConfig")


class InputDataConfigDict(TypedDict):
    s3_uri: str
    input_format: NotRequired[InputFormat2OrStr]
    document_reader_config: NotRequired[DocumentReaderConfigDict]
