from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1HtmltopdfRequest(SdkBaseModel):
    html: str
    """The HTML content to convert to PDF. Ensure that the HTML is escaped properly"""

    margin_top: Optional[float] = Field(default=UNSET, alias="marginTop")
    """The top margin of the PDF in inches (e.g., 0.5)"""

    margin_right: Optional[float] = Field(default=UNSET, alias="marginRight")
    """The right margin of the PDF in inches (e.g., 0.5)"""

    margin_bottom: Optional[float] = Field(default=UNSET, alias="marginBottom")
    """The bottom margin of the PDF in inches (e.g., 0.5)"""

    margin_left: Optional[float] = Field(default=UNSET, alias="marginLeft")
    """The left margin of the PDF in inches (e.g., 0.5)"""

    landscape: Optional[bool] = UNSET
    """Set to true for landscape orientation"""


class V1HtmltopdfRequestDict(TypedDict):
    html: str
    margin_top: NotRequired[float]
    margin_right: NotRequired[float]
    margin_bottom: NotRequired[float]
    margin_left: NotRequired[float]
    landscape: NotRequired[bool]
