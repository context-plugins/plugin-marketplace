from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .project_ui_path_test_manager_projects_api import (
    ProjectUiPathTestManagerProjectsApi,
    ProjectUiPathTestManagerProjectsApiDict,
)


class ProjectListResponse(SdkBaseModel):
    """Paginated response containing test projects"""

    total_count: Optional[int] = Field(default=UNSET, alias="totalCount")
    """Total number of projects"""

    page: Optional[int] = UNSET
    """Current page number"""

    page_size: Optional[int] = Field(default=UNSET, alias="pageSize")
    """Records per page"""

    projects: Optional[list[ProjectUiPathTestManagerProjectsApi]] = UNSET


class ProjectListResponseDict(TypedDict):
    total_count: NotRequired[int]
    page: NotRequired[int]
    page_size: NotRequired[int]
    projects: NotRequired[list[ProjectUiPathTestManagerProjectsApiDict]]
