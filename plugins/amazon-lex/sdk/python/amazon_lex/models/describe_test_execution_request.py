from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeTestExecutionRequest(SdkBaseModel):
    test_execution_id: str = Field(alias="testExecutionId")
    """The execution Id of the test set execution."""


class DescribeTestExecutionRequestDict(TypedDict):
    test_execution_id: str
