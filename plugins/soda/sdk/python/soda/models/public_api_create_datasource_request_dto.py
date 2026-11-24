from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiCreateDatasourceRequestDto(SdkBaseModel):
    configuration_file_contents: str = Field(alias="configurationFileContents")
    label: Optional[str] = UNSET
    runner_id: Optional[str] = Field(default=UNSET, alias="runnerId")


class PublicApiCreateDatasourceRequestDtoDict(TypedDict):
    configuration_file_contents: str
    label: NotRequired[str]
    runner_id: NotRequired[str]
