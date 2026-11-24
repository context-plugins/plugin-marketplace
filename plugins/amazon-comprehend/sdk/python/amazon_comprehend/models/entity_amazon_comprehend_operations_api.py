from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .block_reference import BlockReference, BlockReferenceDict
from .enums.type2_amazon_comprehend_operations_api import Type2AmazonComprehendOperationsApiOrStr


class EntityAmazonComprehendOperationsApi(SdkBaseModel):
    score: Optional[float] = Field(default=UNSET, alias="Score")
    """The level of confidence that Amazon Comprehend has in the accuracy of the detection."""

    type_: Optional[Type2AmazonComprehendOperationsApiOrStr] = Field(default=UNSET, alias="Type")
    """The entity type. For entity detection using the built-in model, this field contains one of the standard entity
    types listed below. For custom entity detection, this field contains one of the entity types that you specified when
    you trained your custom model."""

    text: Optional[str] = Field(default=UNSET, alias="Text")
    """The text of the entity."""

    begin_offset: Optional[int] = Field(default=UNSET, alias="BeginOffset")
    """The zero-based offset from the beginning of the source text to the first character in the entity. This field is
    empty for non-text input."""

    end_offset: Optional[int] = Field(default=UNSET, alias="EndOffset")
    """The zero-based offset from the beginning of the source text to the last character in the entity. This field is
    empty for non-text input."""

    block_references: Optional[list[BlockReference]] = Field(default=UNSET, alias="BlockReferences")
    """A reference to each block for this entity. This field is empty for plain-text input."""


class EntityAmazonComprehendOperationsApiDict(TypedDict):
    score: NotRequired[float]
    type_: NotRequired[Type2AmazonComprehendOperationsApiOrStr]
    text: NotRequired[str]
    begin_offset: NotRequired[int]
    end_offset: NotRequired[int]
    block_references: NotRequired[list[BlockReferenceDict]]
