from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateDynatraceIntegrationDto(SdkBaseModel):
    dynatrace_environment_id: str = Field(alias="dynatraceEnvironmentId")
    access_token: str = Field(alias="accessToken")
    environment_url: str = Field(alias="environmentUrl")


class CreateDynatraceIntegrationDtoDict(TypedDict):
    dynatrace_environment_id: str
    access_token: str
    environment_url: str
