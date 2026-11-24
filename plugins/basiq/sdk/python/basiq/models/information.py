from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Information(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str
    description: str
    attribute_list: list[str] = Field(alias="attributeList")


class InformationDict(TypedDict):
    name: str
    description: str
    attribute_list: list[str]
