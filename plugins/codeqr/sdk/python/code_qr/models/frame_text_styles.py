from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.family import FamilyOrStr
from .enums.size import SizeOrStr
from .enums.style import StyleOrStr
from .enums.weight import WeightOrStr


class FrameTextStyles(SdkBaseModel):
    """Typographic styles applied to the frame label text. Object with optional keys: ``weight`` (``normal`` |
    ``bold``), ``style`` (``normal`` | ``italic``), ``family`` (``sans`` | ``sans-condensed`` | ``serif`` |
    ``serif-elegant`` | ``mono``), ``size`` (``s`` | ``m`` | ``l`` | ``xl``). Every field is enum-gated on write;
    omitted keys render with defaults."""

    weight: Optional[WeightOrStr] = UNSET
    style: Optional[StyleOrStr] = UNSET
    family: Optional[FamilyOrStr] = UNSET
    size: Optional[SizeOrStr] = UNSET


class FrameTextStylesDict(TypedDict):
    weight: NotRequired[WeightOrStr]
    style: NotRequired[StyleOrStr]
    family: NotRequired[FamilyOrStr]
    size: NotRequired[SizeOrStr]
