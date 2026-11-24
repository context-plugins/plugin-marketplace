from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .custom_template_info import CustomTemplateInfo, CustomTemplateInfoDict
from .date_info import DateInfo, DateInfoDict


class CustomTemplate(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: Optional[int] = UNSET
    name: OptionalNullable[str] = UNSET
    sheet_index: Optional[int] = Field(default=UNSET, alias="sheetIndex")
    columns: Optional[Any] = UNSET
    date_format: Optional[DateInfo] = Field(default=UNSET, alias="dateFormat")
    ignore_last_row: Optional[bool] = Field(default=UNSET, alias="ignoreLastRow")
    image_url: OptionalNullable[str] = Field(default=UNSET, alias="imageUrl")
    custom_template_info: Optional[CustomTemplateInfo] = Field(default=UNSET, alias="customTemplateInfo")
    formulas: Optional[Any] = UNSET


class CustomTemplateDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str | None]
    sheet_index: NotRequired[int]
    columns: NotRequired[Any]
    date_format: NotRequired[DateInfoDict]
    ignore_last_row: NotRequired[bool]
    image_url: NotRequired[str | None]
    custom_template_info: NotRequired[CustomTemplateInfoDict]
    formulas: NotRequired[Any]
