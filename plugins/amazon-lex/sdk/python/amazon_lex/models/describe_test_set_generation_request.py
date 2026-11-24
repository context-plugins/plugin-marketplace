from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeTestSetGenerationRequest(SdkBaseModel):
    test_set_generation_id: str = Field(alias="testSetGenerationId")
    """The unique identifier of the test set generation."""


class DescribeTestSetGenerationRequestDict(TypedDict):
    test_set_generation_id: str
