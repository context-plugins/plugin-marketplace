from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.document_type1 import DocumentType1OrStr


class DatasetAugmentedManifestsListItem(SdkBaseModel):
    attribute_names: list[str] = Field(alias="AttributeNames")
    """The JSON attribute that contains the annotations for your training documents. The number of attribute names that
    you specify depends on whether your augmented manifest file is the output of a single labeling job or a chained
    labeling job. If your file is the output of a single labeling job, specify the LabelAttributeName key that was used
    when the job was created in Ground Truth. If your file is the output of a chained labeling job, specify the
    LabelAttributeName key for one or more jobs in the chain. Each LabelAttributeName key provides the annotations from
    an individual job."""

    s3_uri: str = Field(alias="S3Uri")
    """The Amazon S3 location of the augmented manifest file."""

    annotation_data_s3_uri: Optional[str] = Field(default=UNSET, alias="AnnotationDataS3Uri")
    """The S3 prefix to the annotation files that are referred in the augmented manifest file."""

    source_documents_s3_uri: Optional[str] = Field(default=UNSET, alias="SourceDocumentsS3Uri")
    """The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest file."""

    document_type: Optional[DocumentType1OrStr] = Field(default=UNSET, alias="DocumentType")
    """The type of augmented manifest. If you don't specify, the default is PlainTextDocument. PLAIN_TEXT_DOCUMENT A
    document type that represents any unicode text that is encoded in UTF-8."""


class DatasetAugmentedManifestsListItemDict(TypedDict):
    attribute_names: list[str]
    s3_uri: str
    annotation_data_s3_uri: NotRequired[str]
    source_documents_s3_uri: NotRequired[str]
    document_type: NotRequired[DocumentType1OrStr]
