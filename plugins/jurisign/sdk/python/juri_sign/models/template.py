from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Template(SdkBaseModel):
    id: Optional[UUID] = UNSET
    name: Optional[str] = UNSET


class TemplateDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
