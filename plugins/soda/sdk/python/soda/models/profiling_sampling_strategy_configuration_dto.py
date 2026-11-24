from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.unit_of_time_dto import UnitOfTimeDtoOrStr


class ProfilingSamplingStrategyConfigurationDto(SdkBaseModel):
    number_of_rows: Optional[int] = Field(default=UNSET, alias="numberOfRows")
    number_of_units: Optional[int] = Field(default=UNSET, alias="numberOfUnits")
    unit_of_time: Optional[UnitOfTimeDtoOrStr] = Field(default=UNSET, alias="unitOfTime")


class ProfilingSamplingStrategyConfigurationDtoDict(TypedDict):
    number_of_rows: NotRequired[int]
    number_of_units: NotRequired[int]
    unit_of_time: NotRequired[UnitOfTimeDtoOrStr]
