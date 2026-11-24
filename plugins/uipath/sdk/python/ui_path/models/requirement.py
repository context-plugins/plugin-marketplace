from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_ui_path_test_manager_requirements_api import StatusUiPathTestManagerRequirementsApiOrStr


class Requirement(SdkBaseModel):
    """A business or technical requirement for traceability coverage"""

    id: Optional[str] = UNSET
    """Unique identifier of the requirement"""

    name: Optional[str] = UNSET
    """Display name of the requirement"""

    description: Optional[str] = UNSET
    """Detailed description of the requirement specification"""

    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    """Optional external identifier linking to a third-party requirements tool"""

    status: Optional[StatusUiPathTestManagerRequirementsApiOrStr] = UNSET
    """Lifecycle status of the requirement"""

    linked_test_case_count: Optional[int] = Field(default=UNSET, alias="linkedTestCaseCount")
    """Number of test cases currently linked to this requirement"""

    created_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    """ISO 8601 timestamp when the requirement was created"""


class RequirementDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    external_id: NotRequired[str]
    status: NotRequired[StatusUiPathTestManagerRequirementsApiOrStr]
    linked_test_case_count: NotRequired[int]
    created_on: NotRequired[RFC3339DateTime]
