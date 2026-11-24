from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ProjectUiPathTestManagerProjectsApi(SdkBaseModel):
    """A test project container in Test Manager"""

    id: Optional[str] = UNSET
    """Unique identifier of the test project"""

    name: Optional[str] = UNSET
    """Display name of the test project"""

    description: Optional[str] = UNSET
    """Optional description of the project's testing scope"""

    created_by: Optional[str] = Field(default=UNSET, alias="createdBy")
    """Name of the user who created the project"""

    created_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    """ISO 8601 timestamp when the project was created"""

    test_case_count: Optional[int] = Field(default=UNSET, alias="testCaseCount")
    """Total number of test cases in the project"""

    requirement_count: Optional[int] = Field(default=UNSET, alias="requirementCount")
    """Total number of requirements in the project"""


class ProjectUiPathTestManagerProjectsApiDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    created_by: NotRequired[str]
    created_on: NotRequired[RFC3339DateTime]
    test_case_count: NotRequired[int]
    requirement_count: NotRequired[int]
