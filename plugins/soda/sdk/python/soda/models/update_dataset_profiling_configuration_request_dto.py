from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .profiling_sampling_strategy_configuration_dto import (
    ProfilingSamplingStrategyConfigurationDto,
    ProfilingSamplingStrategyConfigurationDtoDict,
)
from .zoned_cron_dto import ZonedCronDto, ZonedCronDtoDict


class UpdateDatasetProfilingConfigurationRequestDto(SdkBaseModel):
    enabled: Optional[bool] = UNSET
    profiling_sampling_strategy: Optional[ProfilingSamplingStrategyConfigurationDto] = Field(
        default=UNSET, alias="profilingSamplingStrategy"
    )
    scan_schedule: Optional[ZonedCronDto] = Field(default=UNSET, alias="scanSchedule")


class UpdateDatasetProfilingConfigurationRequestDtoDict(TypedDict):
    enabled: NotRequired[bool]
    profiling_sampling_strategy: NotRequired[ProfilingSamplingStrategyConfigurationDtoDict]
    scan_schedule: NotRequired[ZonedCronDtoDict]
