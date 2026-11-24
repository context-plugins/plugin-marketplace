from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicApiDatasetColumnContentDto(SdkBaseModel):
    attributes: Any
    column_id: str = Field(alias="columnId")
    column_name: str = Field(alias="columnName")


class PublicApiDatasetColumnContentDtoDict(TypedDict):
    attributes: Any
    column_id: str
    column_name: str
