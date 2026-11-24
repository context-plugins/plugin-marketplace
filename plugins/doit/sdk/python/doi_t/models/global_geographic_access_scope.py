from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GlobalGeographicAccessScope(SdkBaseModel):
    type_: Literal["global"] = Field(default="global", alias="type")
    """All countries and custom regions are allowed."""


class GlobalGeographicAccessScopeDict(TypedDict):
    type_: Literal["global"]
