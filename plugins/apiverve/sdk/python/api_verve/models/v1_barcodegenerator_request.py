from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1BarcodegeneratorRequest(SdkBaseModel):
    data: str
    """The data you want to generate a barcode from (string)"""

    type_: str = Field(alias="type")
    """The type of barcode you want to generate"""

    line_color: Optional[str] = Field(default=UNSET, alias="lineColor")
    """The color of the barcode (default: #000000)"""

    background_color: Optional[str] = Field(default=UNSET, alias="backgroundColor")
    """The background color of the barcode (default: #ffffff)"""

    display_value: Optional[bool] = Field(default=UNSET, alias="displayValue")
    """Whether to display the value below the barcode (default: true)"""


class V1BarcodegeneratorRequestDict(TypedDict):
    data: str
    type_: str
    line_color: NotRequired[str]
    background_color: NotRequired[str]
    display_value: NotRequired[bool]
