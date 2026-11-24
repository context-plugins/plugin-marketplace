from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class ObjectRelmCrmDiscoveryApi(SdkBaseModel):
    key: Optional[str] = UNSET
    id_prefix: OptionalNullable[str] = UNSET
    list_filters: Optional[list[str]] = UNSET
    fields: Optional[list[Any]] = UNSET


class ObjectRelmCrmDiscoveryApiDict(TypedDict):
    key: NotRequired[str]
    id_prefix: NotRequired[str | None]
    list_filters: NotRequired[list[str]]
    fields: NotRequired[list[Any]]
