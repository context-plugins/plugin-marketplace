from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Clixexternalv1EventProperty(SdkBaseModel):
    message_id: Optional[str] = UNSET
    custom_properties: Optional[dict[str, Any]] = UNSET


class Clixexternalv1EventPropertyDict(TypedDict):
    message_id: NotRequired[str]
    custom_properties: NotRequired[dict[str, Any]]
