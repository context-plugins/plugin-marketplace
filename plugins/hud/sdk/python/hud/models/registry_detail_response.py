from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .external_origin import ExternalOrigin, ExternalOriginDict
from .featured_source_response import FeaturedSourceResponse, FeaturedSourceResponseDict
from .latest_build_summary import LatestBuildSummary, LatestBuildSummaryDict
from .scenario_response import ScenarioResponse, ScenarioResponseDict


class RegistryDetailResponse(SdkBaseModel):
    id: UUID
    name: str
    registry_type: str
    project_id: UUID
    public: bool
    featured: bool
    source_public: bool
    description: Optional[str] = UNSET
    latest_build_id: Optional[UUID] = UNSET
    github_url: Optional[str] = UNSET
    branch: Optional[str] = UNSET
    entry_folder: Optional[str] = UNSET
    build_args: Optional[dict[str, str]] = UNSET
    instance_config: Optional[Any] = UNSET
    star_count: int = 0
    origin: Optional[ExternalOrigin] = UNSET
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    latest_build: Optional[LatestBuildSummary] = UNSET
    source_build_id: Optional[UUID] = UNSET
    is_starred: bool = False
    is_owner: bool = False
    can_edit: bool = False
    can_manage: bool = False
    owner_name: Optional[str] = UNSET
    owner_avatar_url: Optional[str] = UNSET
    team_name: Optional[str] = UNSET
    scenario_count: int = 0
    latest_scenarios: Optional[list[ScenarioResponse]] = UNSET
    example_trace_id: Optional[UUID] = UNSET
    featured_source: Optional[FeaturedSourceResponse] = UNSET


class RegistryDetailResponseDict(TypedDict):
    id: UUID
    name: str
    registry_type: str
    project_id: UUID
    public: bool
    featured: bool
    source_public: bool
    description: NotRequired[str]
    latest_build_id: NotRequired[UUID]
    github_url: NotRequired[str]
    branch: NotRequired[str]
    entry_folder: NotRequired[str]
    build_args: NotRequired[dict[str, str]]
    instance_config: NotRequired[Any]
    star_count: NotRequired[int]
    origin: NotRequired[ExternalOriginDict]
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    latest_build: NotRequired[LatestBuildSummaryDict]
    source_build_id: NotRequired[UUID]
    is_starred: NotRequired[bool]
    is_owner: NotRequired[bool]
    can_edit: NotRequired[bool]
    can_manage: NotRequired[bool]
    owner_name: NotRequired[str]
    owner_avatar_url: NotRequired[str]
    team_name: NotRequired[str]
    scenario_count: NotRequired[int]
    latest_scenarios: NotRequired[list[ScenarioResponseDict]]
    example_trace_id: NotRequired[UUID]
    featured_source: NotRequired[FeaturedSourceResponseDict]
