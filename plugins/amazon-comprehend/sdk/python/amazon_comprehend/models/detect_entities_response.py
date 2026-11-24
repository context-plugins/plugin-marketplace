from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .block import Block, BlockDict
from .document_metadata import DocumentMetadata, DocumentMetadataDict
from .document_type_list_item import DocumentTypeListItem, DocumentTypeListItemDict
from .entity import Entity, EntityDict
from .errors_list_item import ErrorsListItem, ErrorsListItemDict


class DetectEntitiesResponse(SdkBaseModel):
    entities: Optional[list[Entity]] = Field(default=UNSET, alias="Entities")
    """A collection of entities identified in the input text. For each entity, the response provides the entity text,
    entity type, where the entity text begins and ends, and the level of confidence that Amazon Comprehend has in the
    detection. If your request uses a custom entity recognition model, Amazon Comprehend detects the entities that the
    model is trained to recognize. Otherwise, it detects the default entity types. For a list of default entity types,
    see Entities in the Comprehend Developer Guide."""

    document_metadata: Optional[DocumentMetadata] = Field(default=UNSET, alias="DocumentMetadata")
    document_type: Optional[list[DocumentTypeListItem]] = Field(default=UNSET, alias="DocumentType")
    """The document type for each page in the input document. This field is present in the response only if your request
    used the Byte parameter."""

    blocks: Optional[list[Block]] = Field(default=UNSET, alias="Blocks")
    """Information about each block of text in the input document. Blocks are nested. A page block contains a block for
    each line of text, which contains a block for each word. The Block content for a Word input document does not
    include a Geometry field. The Block field is not present in the response for plain-text inputs."""

    errors: Optional[list[ErrorsListItem]] = Field(default=UNSET, alias="Errors")
    """Page-level errors that the system detected while processing the input document. The field is empty if the system
    encountered no errors."""


class DetectEntitiesResponseDict(TypedDict):
    entities: NotRequired[list[EntityDict]]
    document_metadata: NotRequired[DocumentMetadataDict]
    document_type: NotRequired[list[DocumentTypeListItemDict]]
    blocks: NotRequired[list[BlockDict]]
    errors: NotRequired[list[ErrorsListItemDict]]
