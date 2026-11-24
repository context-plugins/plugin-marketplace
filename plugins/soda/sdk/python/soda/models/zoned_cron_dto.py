from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ZonedCronDto(SdkBaseModel):
    cron_expression: str = Field(alias="cronExpression")
    timezone: str


class ZonedCronDtoDict(TypedDict):
    cron_expression: str
    timezone: str
