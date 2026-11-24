from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SectionableBlock12(SdkBaseModel):
    type_: Literal["content_break"] = Field(default="content_break", alias="type")
    """Discriminator value: content_break"""


class SectionableBlock12Dict(TypedDict):
    type_: Literal["content_break"]
