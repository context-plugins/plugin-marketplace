from __future__ import annotations

from typing import Literal
from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Scope1(SdkBaseModel):
    id: UUID
    """The scope ID (project ID)"""

    type_: Literal["project"] = Field(default="project", alias="type")
    """The scope type"""


class Scope1Dict(TypedDict):
    id: UUID
    type_: Literal["project"]
