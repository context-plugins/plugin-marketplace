from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AllFilter(SdkBaseModel):
    type_: Literal["all"] = Field(default="all", alias="type")
    """Filter type of this audience"""


class AllFilterDict(TypedDict):
    type_: Literal["all"]
