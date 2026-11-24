from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .document_classifier_properties import DocumentClassifierProperties, DocumentClassifierPropertiesDict


class ListDocumentClassifiersResponse(SdkBaseModel):
    document_classifier_properties_list: Optional[list[DocumentClassifierProperties]] = Field(
        default=UNSET, alias="DocumentClassifierPropertiesList"
    )
    """A list containing the properties of each job returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""


class ListDocumentClassifiersResponseDict(TypedDict):
    document_classifier_properties_list: NotRequired[list[DocumentClassifierPropertiesDict]]
    next_token: NotRequired[str]
