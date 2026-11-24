from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeMapRunInput(SdkBaseModel):
    map_run_arn: str = Field(alias="mapRunArn")
    """The Amazon Resource Name (ARN) that identifies a Map Run."""


class DescribeMapRunInputDict(TypedDict):
    map_run_arn: str
