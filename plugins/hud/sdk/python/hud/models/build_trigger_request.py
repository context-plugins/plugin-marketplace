from __future__ import annotations

from typing import Literal
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.runtime_provider import RuntimeProviderOrStr
from .submitted_runtime_config import SubmittedRuntimeConfig, SubmittedRuntimeConfigDict


class BuildTriggerRequest(SdkBaseModel):
    """Trigger a build for a registry."""

    registry_id: Optional[UUID] = UNSET
    name: Optional[str] = UNSET
    project_id: Optional[UUID] = UNSET
    source: Literal["direct"] = "direct"
    build_id: Optional[UUID] = UNSET
    environment_variables: Optional[dict[str, str]] = UNSET
    build_secrets: Optional[dict[str, str]] = UNSET
    runtime_provider: Optional[RuntimeProviderOrStr] = UNSET
    runtime_config: Optional[SubmittedRuntimeConfig] = UNSET
    entry_folder: Optional[str] = UNSET
    build_args: Optional[dict[str, str]] = UNSET
    no_cache: bool = False
    """Bypass persistent cache inputs and whole-build reuse while still exporting fresh cache state."""


class BuildTriggerRequestDict(TypedDict):
    registry_id: NotRequired[UUID]
    name: NotRequired[str]
    project_id: NotRequired[UUID]
    source: Literal["direct"]
    build_id: NotRequired[UUID]
    environment_variables: NotRequired[dict[str, str]]
    build_secrets: NotRequired[dict[str, str]]
    runtime_provider: NotRequired[RuntimeProviderOrStr]
    runtime_config: NotRequired[SubmittedRuntimeConfigDict]
    entry_folder: NotRequired[str]
    build_args: NotRequired[dict[str, str]]
    no_cache: NotRequired[bool]
