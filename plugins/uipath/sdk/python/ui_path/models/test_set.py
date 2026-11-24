from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class TestSet(SdkBaseModel):
    """A collection of test cases grouped for execution"""

    id: Optional[str] = UNSET
    """Unique identifier of the test set"""

    name: Optional[str] = UNSET
    """Display name of the test set"""

    description: Optional[str] = UNSET
    """Optional description of the test set's purpose"""

    test_case_count: Optional[int] = Field(default=UNSET, alias="testCaseCount")
    """Number of test cases included in this test set"""

    created_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    """ISO 8601 timestamp when the test set was created"""


class TestSetDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    test_case_count: NotRequired[int]
    created_on: NotRequired[RFC3339DateTime]
