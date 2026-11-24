from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Options(SdkBaseModel):
    create_missing_tables: bool = Field(default=False, alias="createMissingTables")
    """Create unbound Datastore tables from the schemas embedded in the bundle (structure only, never row data). A
    same-named existing table with an incompatible schema is a validation error."""

    name_prefix: Optional[str] = Field(default=UNSET, alias="namePrefix")
    """Optional prefix for every created flow's name."""


class OptionsDict(TypedDict):
    create_missing_tables: NotRequired[bool]
    name_prefix: NotRequired[str]
