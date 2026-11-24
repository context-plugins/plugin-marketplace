from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .document_reader_config import DocumentReaderConfig, DocumentReaderConfigDict


class ClassifyDocumentRequest(SdkBaseModel):
    text: Optional[str] = Field(default=UNSET, alias="Text")
    """The document text to be analyzed. If you enter text using this parameter, do not use the Bytes parameter."""

    endpoint_arn: str = Field(alias="EndpointArn")
    """The Amazon Resource Number (ARN) of the endpoint. For prompt safety classification, Amazon Comprehend provides
    the endpoint ARN. For more information about prompt safety classifiers, see Prompt safety classification in the
    Amazon Comprehend Developer Guide For custom classification, you create an endpoint for your custom model. For more
    information, see Using Amazon Comprehend endpoints."""

    bytes_: Optional[str] = Field(default=UNSET, alias="Bytes")
    """Use the Bytes parameter to input a text, PDF, Word or image file. When you classify a document using a custom
    model, you can also use the Bytes parameter to input an Amazon Textract DetectDocumentText or AnalyzeDocument output
    file. To classify a document using the prompt safety classifier, use the Text parameter for input. Provide the input
    document as a sequence of base64-encoded bytes. If your code uses an Amazon Web Services SDK to classify documents,
    the SDK may encode the document file bytes for you. The maximum length of this field depends on the input document
    type. For details, see In"""

    document_reader_config: Optional[DocumentReaderConfig] = Field(default=UNSET, alias="DocumentReaderConfig")


class ClassifyDocumentRequestDict(TypedDict):
    text: NotRequired[str]
    endpoint_arn: str
    bytes_: NotRequired[str]
    document_reader_config: NotRequired[DocumentReaderConfigDict]
