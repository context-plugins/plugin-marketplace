from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_theme import CustomTheme, CustomThemeDict


class AnalyticsV1SettingsThemesResponse(SdkBaseModel):
    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """Total number of custom themes in the result set."""

    themes: Optional[list[CustomTheme]] = UNSET


class AnalyticsV1SettingsThemesResponseDict(TypedDict):
    row_count: NotRequired[int]
    themes: NotRequired[list[CustomThemeDict]]
