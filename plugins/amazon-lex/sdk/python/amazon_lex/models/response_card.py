from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.content_type_amazon_lex_model_building_v2_operations_api import (
    ContentTypeAmazonLexModelBuildingV2OperationsApiOrStr,
)
from .generic_attachment import GenericAttachment, GenericAttachmentDict


class ResponseCard(SdkBaseModel):
    version: Optional[str] = UNSET
    """The version of the response card format."""

    content_type: Optional[ContentTypeAmazonLexModelBuildingV2OperationsApiOrStr] = Field(
        default=UNSET, alias="contentType"
    )
    """The content type of the response."""

    generic_attachments: Optional[list[GenericAttachment]] = Field(default=UNSET, alias="genericAttachments")
    """An array of attachment objects representing options."""


class ResponseCardDict(TypedDict):
    version: NotRequired[str]
    content_type: NotRequired[ContentTypeAmazonLexModelBuildingV2OperationsApiOrStr]
    generic_attachments: NotRequired[list[GenericAttachmentDict]]
