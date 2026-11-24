from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .document_class import DocumentClass, DocumentClassDict
from .document_label import DocumentLabel, DocumentLabelDict
from .document_metadata import DocumentMetadata, DocumentMetadataDict
from .document_type_list_item import DocumentTypeListItem, DocumentTypeListItemDict
from .errors_list_item import ErrorsListItem, ErrorsListItemDict
from .warnings_list_item import WarningsListItem, WarningsListItemDict


class ClassifyDocumentResponse(SdkBaseModel):
    classes: Optional[list[DocumentClass]] = Field(default=UNSET, alias="Classes")
    """The classes used by the document being analyzed. These are used for models trained in multi-class mode.
    Individual classes are mutually exclusive and each document is expected to have only a single class assigned to it.
    For example, an animal can be a dog or a cat, but not both at the same time. For prompt safety classification, the
    response includes only two classes (SAFE_PROMPT and UNSAFE_PROMPT), along with a confidence score for each class.
    The value range of the score is zero to one, where one is the highest confidence."""

    labels: Optional[list[DocumentLabel]] = Field(default=UNSET, alias="Labels")
    """The labels used in the document being analyzed. These are used for multi-label trained models. Individual labels
    represent different categories that are related in some manner and are not mutually exclusive. For example, a movie
    can be just an action movie, or it can be an action movie, a science fiction movie, and a comedy, all at the same
    time."""

    document_metadata: Optional[DocumentMetadata] = Field(default=UNSET, alias="DocumentMetadata")
    document_type: Optional[list[DocumentTypeListItem]] = Field(default=UNSET, alias="DocumentType")
    """The document type for each page in the input document. This field is present in the response only if your request
    includes the Byte parameter."""

    errors: Optional[list[ErrorsListItem]] = Field(default=UNSET, alias="Errors")
    """Page-level errors that the system detected while processing the input document. The field is empty if the system
    encountered no errors."""

    warnings: Optional[list[WarningsListItem]] = Field(default=UNSET, alias="Warnings")
    """Warnings detected while processing the input document. The response includes a warning if there is a mismatch
    between the input document type and the model type associated with the endpoint that you specified. The response can
    also include warnings for individual pages that have a mismatch. The field is empty if the system generated no
    warnings."""


class ClassifyDocumentResponseDict(TypedDict):
    classes: NotRequired[list[DocumentClassDict]]
    labels: NotRequired[list[DocumentLabelDict]]
    document_metadata: NotRequired[DocumentMetadataDict]
    document_type: NotRequired[list[DocumentTypeListItemDict]]
    errors: NotRequired[list[ErrorsListItemDict]]
    warnings: NotRequired[list[WarningsListItemDict]]
