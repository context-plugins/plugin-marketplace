from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .annotations import Annotations, AnnotationsDict
from .icon import Icon, IconDict


class Resource(SdkBaseModel):
    """A known resource that the server is capable of reading."""

    name: str
    title: Optional[str] = UNSET
    uri: str
    description: Optional[str] = UNSET
    mime_type: Optional[str] = Field(default=UNSET, alias="mimeType")
    size: Optional[int] = UNSET
    icons: Optional[list[Icon]] = UNSET
    annotations: Optional[Annotations] = UNSET
    meta: Optional[Any] = Field(default=UNSET, alias="_meta")


class ResourceDict(TypedDict):
    name: str
    title: NotRequired[str]
    uri: str
    description: NotRequired[str]
    mime_type: NotRequired[str]
    size: NotRequired[int]
    icons: NotRequired[list[IconDict]]
    annotations: NotRequired[AnnotationsDict]
    meta: NotRequired[Any]
