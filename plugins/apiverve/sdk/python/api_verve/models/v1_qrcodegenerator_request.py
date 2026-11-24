from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1QrcodegeneratorRequest(SdkBaseModel):
    value: str
    """The text or data to encode in the QR code"""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """The type of data being encoded. Advanced types (wifi, vcard) are premium."""

    format: Optional[str] = UNSET
    """Output format. Vector formats (svg, webp) are premium."""

    size: Optional[float] = UNSET
    """Size of the QR code in pixels (50-2048)"""

    margin: Optional[float] = UNSET
    """Margin around the QR code in pixels (0-100)"""

    color: Optional[str] = UNSET
    """Foreground color as hex code (e.g., #000000)"""

    background_color: Optional[str] = Field(default=UNSET, alias="backgroundColor")
    """Background color as hex code (e.g., #ffffff)"""

    dot_style: Optional[str] = Field(default=UNSET, alias="dotStyle")
    """Style of QR code dots"""

    corner_square_style: Optional[str] = Field(default=UNSET, alias="cornerSquareStyle")
    """Style of corner squares"""

    corner_dot_style: Optional[str] = Field(default=UNSET, alias="cornerDotStyle")
    """Style of corner dots"""

    gradient: Optional[str] = UNSET
    """Gradient configuration with type (linear, radial) and colorStops array"""

    logo: Optional[str] = UNSET
    """URL of logo image to place in center of QR code"""

    logo_size: Optional[float] = Field(default=UNSET, alias="logoSize")
    """Size of logo relative to QR code (0.1-0.5)"""

    logo_margin: Optional[float] = Field(default=UNSET, alias="logoMargin")
    """Margin around logo in pixels"""


class V1QrcodegeneratorRequestDict(TypedDict):
    value: str
    type_: NotRequired[str]
    format: NotRequired[str]
    size: NotRequired[float]
    margin: NotRequired[float]
    color: NotRequired[str]
    background_color: NotRequired[str]
    dot_style: NotRequired[str]
    corner_square_style: NotRequired[str]
    corner_dot_style: NotRequired[str]
    gradient: NotRequired[str]
    logo: NotRequired[str]
    logo_size: NotRequired[float]
    logo_margin: NotRequired[float]
