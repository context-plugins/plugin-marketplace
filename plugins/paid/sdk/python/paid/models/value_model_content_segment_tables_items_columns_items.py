from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ValueModelContentSegmentTablesItemsColumnsItems(SdkBaseModel):
    variable_id: str = Field(alias="variableId")
    label: str
    type_: Literal["number"] = Field(default="number", alias="type")


class ValueModelContentSegmentTablesItemsColumnsItemsDict(TypedDict):
    variable_id: str
    label: str
    type_: Literal["number"]
