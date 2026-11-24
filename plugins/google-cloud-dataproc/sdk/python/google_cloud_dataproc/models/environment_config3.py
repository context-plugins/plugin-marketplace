from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .execution_config2 import ExecutionConfig2, ExecutionConfig2Dict
from .peripherals_config2 import PeripheralsConfig2, PeripheralsConfig2Dict


class EnvironmentConfig3(SdkBaseModel):
    """Optional. Environment configuration for the batch execution."""

    execution_config: Optional[ExecutionConfig2] = Field(default=UNSET, alias="executionConfig")
    """Optional. Execution configuration for a workload."""

    peripherals_config: Optional[PeripheralsConfig2] = Field(default=UNSET, alias="peripheralsConfig")
    """Optional. Peripherals configuration that workload has access to."""


class EnvironmentConfig3Dict(TypedDict):
    execution_config: NotRequired[ExecutionConfig2Dict]
    peripherals_config: NotRequired[PeripheralsConfig2Dict]
