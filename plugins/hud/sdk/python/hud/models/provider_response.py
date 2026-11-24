from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProviderResponse(SdkBaseModel):
    id: int
    name: str
    api_base: Optional[str] = UNSET
    supported_routes: Optional[list[str]] = UNSET
    icon_url: Optional[str] = UNSET
    metadata: Optional[Any] = UNSET


class ProviderResponseDict(TypedDict):
    id: int
    name: str
    api_base: NotRequired[str]
    supported_routes: NotRequired[list[str]]
    icon_url: NotRequired[str]
    metadata: NotRequired[Any]
