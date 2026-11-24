from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Entity(SdkBaseModel):
    type_: str = Field(alias="type")
    """Entity type identifier"""

    name: str
    """Entity name"""


class EntityDict(TypedDict):
    type_: str
    name: str
