from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1WebsitetopdfRequest(SdkBaseModel):
    url: str
    """The URL of the website to convert to PDF"""

    margin_top: Optional[float] = Field(default=UNSET, alias="marginTop")
    """The top margin of the PDF in inches (e.g., 0.4)"""

    margin_right: Optional[float] = Field(default=UNSET, alias="marginRight")
    """The right margin of the PDF in inches (e.g., 0.4)"""

    margin_bottom: Optional[float] = Field(default=UNSET, alias="marginBottom")
    """The bottom margin of the PDF in inches (e.g., 0.4)"""

    margin_left: Optional[float] = Field(default=UNSET, alias="marginLeft")
    """The left margin of the PDF in inches (e.g., 0.4)"""

    landscape: Optional[bool] = UNSET
    """Set to true for landscape orientation"""


class V1WebsitetopdfRequestDict(TypedDict):
    url: str
    margin_top: NotRequired[float]
    margin_right: NotRequired[float]
    margin_bottom: NotRequired[float]
    margin_left: NotRequired[float]
    landscape: NotRequired[bool]
