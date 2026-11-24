from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.document_type import DocumentTypeOrStr
from .enums.split import SplitOrStr


class AugmentedManifestsListItem(SdkBaseModel):
    s3_uri: str = Field(alias="S3Uri")
    """The Amazon S3 location of the augmented manifest file."""

    split: Optional[SplitOrStr] = Field(default=UNSET, alias="Split")
    """The purpose of the data you've provided in the augmented manifest. You can either train or test this data. If you
    don't specify, the default is train. TRAIN - all of the documents in the manifest will be used for training. If no
    test documents are provided, Amazon Comprehend will automatically reserve a portion of the training documents for
    testing. TEST - all of the documents in the manifest will be used for testing."""

    attribute_names: list[str] = Field(alias="AttributeNames")
    """The JSON attribute that contains the annotations for your training documents. The number of attribute names that
    you specify depends on whether your augmented manifest file is the output of a single labeling job or a chained
    labeling job. If your file is the output of a single labeling job, specify the LabelAttributeName key that was used
    when the job was created in Ground Truth. If your file is the output of a chained labeling job, specify the
    LabelAttributeName key for one or more jobs in the chain. Each LabelAttributeName key provides the annotations from
    an individual job."""

    annotation_data_s3_uri: Optional[str] = Field(default=UNSET, alias="AnnotationDataS3Uri")
    """The S3 prefix to the annotation files that are referred in the augmented manifest file."""

    source_documents_s3_uri: Optional[str] = Field(default=UNSET, alias="SourceDocumentsS3Uri")
    """The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest file."""

    document_type: Optional[DocumentTypeOrStr] = Field(default=UNSET, alias="DocumentType")
    """The type of augmented manifest. PlainTextDocument or SemiStructuredDocument. If you don't specify, the default is
    PlainTextDocument. PLAIN_TEXT_DOCUMENT A document type that represents any unicode text that is encoded in UTF-8.
    SEMI_STRUCTURED_DOCUMENT A document type with positional and structural context, like a PDF. For training with
    Amazon Comprehend, only PDFs are supported. For inference, Amazon Comprehend support PDFs, DOCX and TXT."""


class AugmentedManifestsListItemDict(TypedDict):
    s3_uri: str
    split: NotRequired[SplitOrStr]
    attribute_names: list[str]
    annotation_data_s3_uri: NotRequired[str]
    source_documents_s3_uri: NotRequired[str]
    document_type: NotRequired[DocumentTypeOrStr]
