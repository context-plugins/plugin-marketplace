from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UnassignedGeographicAccessScope(SdkBaseModel):
    type_: Literal["unassigned"] = Field(default="unassigned", alias="type")
    """No geographic scope is assigned."""


class UnassignedGeographicAccessScopeDict(TypedDict):
    type_: Literal["unassigned"]
