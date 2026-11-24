from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.style import Style, StyleOrStr
from .gradient_color import GradientColor, GradientColorDict


class QrCodeGradient(SdkBaseModel):
    style: StyleOrStr = Style.NO_GRADIENT
    """The style of the gradient. Can be either linear or radial."""

    angle: Optional[float] = UNSET
    """The angle by which the gradient will be rotated. Only applies to linear gradients."""

    colors: Optional[list[GradientColor]] = UNSET
    """The list of hex colors and their offsets to be used in the gradient."""

    exclude_corners: Optional[bool] = UNSET
    """Ignore gradient mask on corners"""


class QrCodeGradientDict(TypedDict):
    style: NotRequired[StyleOrStr]
    angle: NotRequired[float]
    colors: NotRequired[list[GradientColorDict]]
    exclude_corners: NotRequired[bool]
