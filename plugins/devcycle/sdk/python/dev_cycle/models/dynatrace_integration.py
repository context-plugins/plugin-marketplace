from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .dynatrace_environment import DynatraceEnvironment, DynatraceEnvironmentDict


class DynatraceIntegration(SdkBaseModel):
    environments: list[DynatraceEnvironment]


class DynatraceIntegrationDict(TypedDict):
    environments: list[DynatraceEnvironmentDict]
