from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .document_reader_config import DocumentReaderConfig, DocumentReaderConfigDict
from .enums.language_code17 import LanguageCode17OrStr


class DetectEntitiesRequest(SdkBaseModel):
    text: Optional[str] = Field(default=UNSET, alias="Text")
    """A UTF-8 text string. The maximum string size is 100 KB. If you enter text using this parameter, do not use the
    Bytes parameter."""

    language_code: Optional[LanguageCode17OrStr] = Field(default=UNSET, alias="LanguageCode")
    """The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend.
    If your request includes the endpoint for a custom entity recognition model, Amazon Comprehend uses the language of
    your custom model, and it ignores any language code that you specify here. All input documents must be in the same
    language."""

    endpoint_arn: Optional[str] = Field(default=UNSET, alias="EndpointArn")
    """The Amazon Resource Name of an endpoint that is associated with a custom entity recognition model. Provide an
    endpoint if you want to detect entities by using your own custom model instead of the default model that is used by
    Amazon Comprehend. If you specify an endpoint, Amazon Comprehend uses the language of your custom model, and it
    ignores any language code that you provide in your request. For information about endpoints, see Managing
    endpoints."""

    bytes_: Optional[str] = Field(default=UNSET, alias="Bytes")
    """This field applies only when you use a custom entity recognition model that was trained with PDF annotations. For
    other cases, enter your text input in the Text field. Use the Bytes parameter to input a text, PDF, Word or image
    file. Using a plain-text file in the Bytes parameter is equivelent to using the Text parameter (the Entities field
    in the response is identical). You can also use the Bytes parameter to input an Amazon Textract DetectDocumentText
    or AnalyzeDocument output file. Provide the input document as a sequence of base64-encoded bytes. If your code uses
    an Amazon Web Services SDK"""

    document_reader_config: Optional[DocumentReaderConfig] = Field(default=UNSET, alias="DocumentReaderConfig")


class DetectEntitiesRequestDict(TypedDict):
    text: NotRequired[str]
    language_code: NotRequired[LanguageCode17OrStr]
    endpoint_arn: NotRequired[str]
    bytes_: NotRequired[str]
    document_reader_config: NotRequired[DocumentReaderConfigDict]
