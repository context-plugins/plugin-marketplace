from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Bindings(SdkBaseModel):
    """Requirement key → target-tenant resource ID. Keys must be declared in the bundle's requirements. Run with
    ``?dryRun=true`` first to list required keys and candidate IDs."""

    connections: Optional[dict[str, str]] = UNSET
    datastore_tables: Optional[dict[str, str]] = Field(default=UNSET, alias="datastoreTables")
    global_variables: Optional[dict[str, str]] = Field(default=UNSET, alias="globalVariables")


class BindingsDict(TypedDict):
    connections: NotRequired[dict[str, str]]
    datastore_tables: NotRequired[dict[str, str]]
    global_variables: NotRequired[dict[str, str]]
