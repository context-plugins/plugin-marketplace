from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DataSourceIntrospectionModelIndex(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the index."""

    fields: Optional[list[str]] = UNSET
    """The fields of the index."""


class DataSourceIntrospectionModelIndexDict(TypedDict):
    name: NotRequired[str]
    fields: NotRequired[list[str]]
