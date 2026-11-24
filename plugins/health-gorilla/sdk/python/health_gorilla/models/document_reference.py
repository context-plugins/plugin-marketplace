from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .content import Content, ContentDict


class DocumentReference(SdkBaseModel):
    resource_type: Optional[str] = Field(default=UNSET, alias="resourceType")
    id: Optional[str] = UNSET
    status: Optional[str] = UNSET
    type_: Optional[Any] = Field(default=UNSET, alias="type")
    subject: Optional[Any] = UNSET
    content: Optional[list[Content]] = UNSET


class DocumentReferenceDict(TypedDict):
    resource_type: NotRequired[str]
    id: NotRequired[str]
    status: NotRequired[str]
    type_: NotRequired[Any]
    subject: NotRequired[Any]
    content: NotRequired[list[ContentDict]]
