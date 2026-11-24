from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .json_api_resource import JsonApiResource, JsonApiResourceDict


class MonitorList(SdkBaseModel):
    data: Optional[list[JsonApiResource]] = UNSET
    pagination: Optional[Any] = UNSET


class MonitorListDict(TypedDict):
    data: NotRequired[list[JsonApiResourceDict]]
    pagination: NotRequired[Any]
