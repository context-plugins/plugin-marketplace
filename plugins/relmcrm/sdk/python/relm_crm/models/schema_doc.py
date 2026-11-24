from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .object_relm_crm_discovery_api import ObjectRelmCrmDiscoveryApi, ObjectRelmCrmDiscoveryApiDict


class SchemaDoc(SdkBaseModel):
    objects: Optional[list[ObjectRelmCrmDiscoveryApi]] = UNSET
    enum_groups: Optional[Any] = UNSET
    list_controls: Optional[list[str]] = UNSET
    notes: Optional[Any] = UNSET


class SchemaDocDict(TypedDict):
    objects: NotRequired[list[ObjectRelmCrmDiscoveryApiDict]]
    enum_groups: NotRequired[Any]
    list_controls: NotRequired[list[str]]
    notes: NotRequired[Any]
