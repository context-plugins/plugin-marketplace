from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.axis_label_font_size import AxisLabelFontSizeOrStr
from .enums.data_label_font_size import DataLabelFontSizeOrStr
from .enums.number_scale import NumberScaleOrStr


class ExternalDisplaySettings(SdkBaseModel):
    """Display settings for the report."""

    theme_id: str = Field(default="default", alias="themeId")
    """Identifier of the theme applied to the report. The reserved sentinel ``"default"`` is returned on GET when no
    theme is stored and clears the stored value on PATCH. Omit the field on PATCH to leave the stored value
    unchanged."""

    data_label_font_size: Optional[DataLabelFontSizeOrStr] = Field(default=UNSET, alias="dataLabelFontSize")
    """Font size used for data labels on charts."""

    axis_label_font_size: Optional[AxisLabelFontSizeOrStr] = Field(default=UNSET, alias="axisLabelFontSize")
    """Font size used for axis labels on charts."""

    number_scale: Optional[NumberScaleOrStr] = Field(default=UNSET, alias="numberScale")
    """Scale applied to numeric values when rendering the report."""

    decimal_precision: Optional[int] = Field(default=UNSET, alias="decimalPrecision")
    """Number of decimal places shown for numeric values."""


class ExternalDisplaySettingsDict(TypedDict):
    theme_id: NotRequired[str]
    data_label_font_size: NotRequired[DataLabelFontSizeOrStr]
    axis_label_font_size: NotRequired[AxisLabelFontSizeOrStr]
    number_scale: NotRequired[NumberScaleOrStr]
    decimal_precision: NotRequired[int]
