from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.family1 import Family1OrStr
from .enums.size1 import Size1OrStr
from .enums.style1 import Style1OrStr
from .enums.weight1 import Weight1OrStr


class FrameTextStyles1(SdkBaseModel):
    """Typographic styles applied to the frame label text. Every key is enum-gated — unknown keys or out-of-enum values
    are rejected to prevent SVG attribute injection. All fields are optional; omitted keys fall back to the default
    (normal weight, normal style, sans family, medium size)."""

    model_config = ConfigDict(extra="forbid")

    weight: Optional[Weight1OrStr] = UNSET
    """Font weight of the frame label text. ``bold`` renders at SVG ``font-weight="700"``, ``normal`` at ``400``."""

    style: Optional[Style1OrStr] = UNSET
    """Font style of the frame label text. ``italic`` applies ``font-style="italic"``."""

    family: Optional[Family1OrStr] = UNSET
    """Font family used for the frame label text. ``sans`` = Arial / Helvetica (default). ``sans-condensed`` = Arial
    Narrow. ``serif`` = Georgia / Times New Roman. ``serif-elegant`` = Palatino Linotype / Book Antiqua. ``mono`` =
    Courier New. Values resolve to safe system font stacks on the rendered SVG."""

    size: Optional[Size1OrStr] = UNSET
    """Font size preset for the frame label. ``s`` = 60 viewBox units, ``m`` = 89.1 (default), ``l`` = 120, ``xl`` =
    150. Larger sizes grow the frame bar vertically to fit. Extremely long text auto-shrinks to keep within 4 lines
    (floor 48)."""


class FrameTextStyles1Dict(TypedDict):
    weight: NotRequired[Weight1OrStr]
    style: NotRequired[Style1OrStr]
    family: NotRequired[Family1OrStr]
    size: NotRequired[Size1OrStr]
