from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiUpdateDatasourceRequestDto(SdkBaseModel):
    configuration_file_contents: Optional[str] = Field(default=UNSET, alias="configurationFileContents")
    label: Optional[str] = UNSET
    runner_id: Optional[str] = Field(default=UNSET, alias="runnerId")


class PublicApiUpdateDatasourceRequestDtoDict(TypedDict):
    configuration_file_contents: NotRequired[str]
    label: NotRequired[str]
    runner_id: NotRequired[str]
