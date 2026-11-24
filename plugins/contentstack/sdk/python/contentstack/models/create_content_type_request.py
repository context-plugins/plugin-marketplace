from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .content_type1 import ContentType1, ContentType1Dict


class CreateContentTypeRequest(SdkBaseModel):
    """Parameters for creating or updating a content type."""

    content_type: ContentType1


class CreateContentTypeRequestDict(TypedDict):
    content_type: ContentType1Dict
