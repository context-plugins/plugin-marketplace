from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .json_api_resource import JsonApiResource, JsonApiResourceDict


class MonitorResource(SdkBaseModel):
    data: Optional[JsonApiResource] = UNSET


class MonitorResourceDict(TypedDict):
    data: NotRequired[JsonApiResourceDict]
