from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .augmented_manifests_list_item import AugmentedManifestsListItem, AugmentedManifestsListItemDict
from .document_classifier_documents import DocumentClassifierDocuments, DocumentClassifierDocumentsDict
from .document_reader_config import DocumentReaderConfig, DocumentReaderConfigDict
from .enums.data_format1 import DataFormat1OrStr
from .enums.document_type2 import DocumentType2OrStr


class DocumentClassifierInputDataConfig(SdkBaseModel):
    data_format: Optional[DataFormat1OrStr] = Field(default=UNSET, alias="DataFormat")
    """The format of your training data: COMPREHEND_CSV: A two-column CSV file, where labels are provided in the first
    column, and documents are provided in the second. If you use this value, you must provide the S3Uri parameter in
    your request. AUGMENTED_MANIFEST: A labeled dataset that is produced by Amazon SageMaker Ground Truth. This file is
    in JSON lines format. Each line is a complete JSON object that contains a training document and its associated
    labels. If you use this value, you must provide the AugmentedManifests parameter in your request. If you don't
    specify a value, Amazon Comprehend us"""

    s3_uri: Optional[str] = Field(default=UNSET, alias="S3Uri")
    """The Amazon S3 URI for the input data. The S3 bucket must be in the same Region as the API endpoint that you are
    calling. The URI can point to a single input file or it can provide the prefix for a collection of input files. For
    example, if you use the URI S3://bucketName/prefix, if the prefix is a single file, Amazon Comprehend uses that file
    as input. If more than one file begins with the prefix, Amazon Comprehend uses all of them as input. This parameter
    is required if you set DataFormat to COMPREHEND_CSV."""

    test_s3_uri: Optional[str] = Field(default=UNSET, alias="TestS3Uri")
    """This specifies the Amazon S3 location that contains the test annotations for the document classifier. The URI
    must be in the same Amazon Web Services Region as the API endpoint that you are calling."""

    label_delimiter: Optional[str] = Field(default=UNSET, alias="LabelDelimiter")
    """Indicates the delimiter used to separate each label for training a multi-label classifier. The default delimiter
    between labels is a pipe (|). You can use a different character as a delimiter (if it's an allowed character) by
    specifying it under Delimiter for labels. If the training documents use a delimiter other than the default or the
    delimiter you specify, the labels on that line will be combined to make a single unique label, such as
    LABELLABELLABEL."""

    augmented_manifests: Optional[list[AugmentedManifestsListItem]] = Field(default=UNSET, alias="AugmentedManifests")
    """A list of augmented manifest files that provide training data for your custom model. An augmented manifest file
    is a labeled dataset that is produced by Amazon SageMaker Ground Truth. This parameter is required if you set
    DataFormat to AUGMENTED_MANIFEST."""

    document_type: Optional[DocumentType2OrStr] = Field(default=UNSET, alias="DocumentType")
    """The type of input documents for training the model. Provide plain-text documents to create a plain-text model,
    and provide semi-structured documents to create a native document model."""

    documents: Optional[DocumentClassifierDocuments] = Field(default=UNSET, alias="Documents")
    document_reader_config: Optional[DocumentReaderConfig] = Field(default=UNSET, alias="DocumentReaderConfig")


class DocumentClassifierInputDataConfigDict(TypedDict):
    data_format: NotRequired[DataFormat1OrStr]
    s3_uri: NotRequired[str]
    test_s3_uri: NotRequired[str]
    label_delimiter: NotRequired[str]
    augmented_manifests: NotRequired[list[AugmentedManifestsListItemDict]]
    document_type: NotRequired[DocumentType2OrStr]
    documents: NotRequired[DocumentClassifierDocumentsDict]
    document_reader_config: NotRequired[DocumentReaderConfigDict]
