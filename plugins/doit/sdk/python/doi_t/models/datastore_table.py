from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloudflow_bundle_table_field import CloudflowBundleTableField, CloudflowBundleTableFieldDict


class DatastoreTable(SdkBaseModel):
    key: str
    name: str
    description: Optional[str] = UNSET
    fields: list[CloudflowBundleTableField]
    used_by_nodes: Optional[list[str]] = Field(default=UNSET, alias="usedByNodes")


class DatastoreTableDict(TypedDict):
    key: str
    name: str
    description: NotRequired[str]
    fields: list[CloudflowBundleTableFieldDict]
    used_by_nodes: NotRequired[list[str]]
