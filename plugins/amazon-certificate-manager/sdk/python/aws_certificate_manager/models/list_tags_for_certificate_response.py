from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class ListTagsForCertificateResponse(SdkBaseModel):
    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """The key-value pairs that define the applied tags."""


class ListTagsForCertificateResponseDict(TypedDict):
    tags: NotRequired[list[TagModelDict]]
