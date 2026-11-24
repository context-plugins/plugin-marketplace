from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CloudflowImportCreatedResource(SdkBaseModel):
    key: str
    id: str
    name: Optional[str] = UNSET


class CloudflowImportCreatedResourceDict(TypedDict):
    key: str
    id: str
    name: NotRequired[str]
