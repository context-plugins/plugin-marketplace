from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TraceThumbnailModel(SdkBaseModel):
    id: UUID
    name: str
    model_name: Optional[str] = UNSET
    provider_name: Optional[str] = UNSET
    icon_url: Optional[str] = UNSET
    sdk_agent_type: Optional[str] = UNSET


class TraceThumbnailModelDict(TypedDict):
    id: UUID
    name: str
    model_name: NotRequired[str]
    provider_name: NotRequired[str]
    icon_url: NotRequired[str]
    sdk_agent_type: NotRequired[str]
