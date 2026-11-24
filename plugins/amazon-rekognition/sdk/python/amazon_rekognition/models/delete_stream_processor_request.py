from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteStreamProcessorRequest(SdkBaseModel):
    name: str = Field(alias="Name")
    """The name of the stream processor you want to delete."""


class DeleteStreamProcessorRequestDict(TypedDict):
    name: str
