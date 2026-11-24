from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GroupByColumnConfigurationDto(SdkBaseModel):
    column_name: str = Field(alias="columnName")
    excluded_values: Optional[list[str]] = Field(default=UNSET, alias="excludedValues")


class GroupByColumnConfigurationDtoDict(TypedDict):
    column_name: str
    excluded_values: NotRequired[list[str]]
