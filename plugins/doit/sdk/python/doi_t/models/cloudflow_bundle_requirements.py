from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .connection import Connection, ConnectionDict
from .datastore_table import DatastoreTable, DatastoreTableDict
from .global_variable import GlobalVariable, GlobalVariableDict


class CloudflowBundleRequirements(SdkBaseModel):
    """Tenant-scoped resources the bundle needs; each is bound to a target-tenant resource at import."""

    connections: Optional[list[Connection]] = UNSET
    datastore_tables: Optional[list[DatastoreTable]] = Field(default=UNSET, alias="datastoreTables")
    global_variables: Optional[list[GlobalVariable]] = Field(default=UNSET, alias="globalVariables")


class CloudflowBundleRequirementsDict(TypedDict):
    connections: NotRequired[list[ConnectionDict]]
    datastore_tables: NotRequired[list[DatastoreTableDict]]
    global_variables: NotRequired[list[GlobalVariableDict]]
