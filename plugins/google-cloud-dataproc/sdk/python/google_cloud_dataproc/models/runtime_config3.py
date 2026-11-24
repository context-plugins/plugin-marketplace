from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .autotuning_config2 import AutotuningConfig2, AutotuningConfig2Dict
from .repository_config2 import RepositoryConfig2, RepositoryConfig2Dict


class RuntimeConfig3(SdkBaseModel):
    """Optional. Runtime configuration for the batch execution."""

    properties: Optional[dict[str, str]] = UNSET
    """Optional. A mapping of property names to values, which are used to configure workload execution."""

    repository_config: Optional[RepositoryConfig2] = Field(default=UNSET, alias="repositoryConfig")
    """Optional. Dependency repository configuration."""

    container_image: Optional[str] = Field(default=UNSET, alias="containerImage")
    """Optional. Optional custom container image for the job runtime environment. If not specified, a default container
    image will be used."""

    version: Optional[str] = UNSET
    """Optional. Version of the batch runtime."""

    autotuning_config: Optional[AutotuningConfig2] = Field(default=UNSET, alias="autotuningConfig")
    """Optional. Autotuning configuration of the workload."""

    cohort: Optional[str] = UNSET
    """Optional. Cohort identifier. Identifies families of the workloads that have the same shape, for example, daily
    ETL jobs."""


class RuntimeConfig3Dict(TypedDict):
    properties: NotRequired[dict[str, str]]
    repository_config: NotRequired[RepositoryConfig2Dict]
    container_image: NotRequired[str]
    version: NotRequired[str]
    autotuning_config: NotRequired[AutotuningConfig2Dict]
    cohort: NotRequired[str]
