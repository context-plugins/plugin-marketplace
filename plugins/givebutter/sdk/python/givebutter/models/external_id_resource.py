from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ExternalIdResource(SdkBaseModel):
    id: int
    label: str
    external_id: str
    created_at: str
    updated_at: str


class ExternalIdResourceDict(TypedDict):
    id: int
    label: str
    external_id: str
    created_at: str
    updated_at: str
