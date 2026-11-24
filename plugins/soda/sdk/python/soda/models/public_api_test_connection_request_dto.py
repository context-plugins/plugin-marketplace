from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicApiTestConnectionRequestDto(SdkBaseModel):
    configuration_file_contents: str = Field(alias="configurationFileContents")
    runner_id: str = Field(alias="runnerId")


class PublicApiTestConnectionRequestDtoDict(TypedDict):
    configuration_file_contents: str
    runner_id: str
