from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeTestSetRequest(SdkBaseModel):
    test_set_id: str = Field(alias="testSetId")
    """The test set Id for the test set request."""


class DescribeTestSetRequestDict(TypedDict):
    test_set_id: str
