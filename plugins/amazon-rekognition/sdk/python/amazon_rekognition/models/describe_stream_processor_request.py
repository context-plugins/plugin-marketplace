from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeStreamProcessorRequest(SdkBaseModel):
    name: str = Field(alias="Name")
    """Name of the stream processor for which you want information."""


class DescribeStreamProcessorRequestDict(TypedDict):
    name: str
