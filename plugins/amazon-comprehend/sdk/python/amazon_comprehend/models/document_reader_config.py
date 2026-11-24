from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.document_read_action import DocumentReadActionOrStr
from .enums.document_read_mode import DocumentReadModeOrStr
from .enums.feature_type import FeatureTypeOrStr


class DocumentReaderConfig(SdkBaseModel):
    document_read_action: DocumentReadActionOrStr = Field(alias="DocumentReadAction")
    """This field defines the Amazon Textract API operation that Amazon Comprehend uses to extract text from PDF files
    and image files. Enter one of the following values: TEXTRACT_DETECT_DOCUMENT_TEXT - The Amazon Comprehend service
    uses the DetectDocumentText API operation. TEXTRACT_ANALYZE_DOCUMENT - The Amazon Comprehend service uses the
    AnalyzeDocument API operation."""

    document_read_mode: Optional[DocumentReadModeOrStr] = Field(default=UNSET, alias="DocumentReadMode")
    """Determines the text extraction actions for PDF files. Enter one of the following values: SERVICE_DEFAULT - use
    the Amazon Comprehend service defaults for PDF files. FORCE_DOCUMENT_READ_ACTION - Amazon Comprehend uses the
    Textract API specified by DocumentReadAction for all PDF files, including digital PDF files."""

    feature_types: Optional[list[FeatureTypeOrStr]] = Field(default=UNSET, alias="FeatureTypes")
    """Specifies the type of Amazon Textract features to apply. If you chose TEXTRACT_ANALYZE_DOCUMENT as the read
    action, you must specify one or both of the following values: TABLES - Returns additional information about any
    tables that are detected in the input document. FORMS - Returns additional information about any forms that are
    detected in the input document."""


class DocumentReaderConfigDict(TypedDict):
    document_read_action: DocumentReadActionOrStr
    document_read_mode: NotRequired[DocumentReadModeOrStr]
    feature_types: NotRequired[list[FeatureTypeOrStr]]
