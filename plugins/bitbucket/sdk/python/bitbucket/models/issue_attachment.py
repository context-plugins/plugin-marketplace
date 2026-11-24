from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .links import Links, LinksDict


class IssueAttachment(SdkBaseModel):
    """All Of object, issue_attachment."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    links: Optional[Links] = UNSET
    name: Optional[str] = UNSET


class IssueAttachmentDict(TypedDict):
    type_: NotRequired[str]
    links: NotRequired[LinksDict]
    name: NotRequired[str]
