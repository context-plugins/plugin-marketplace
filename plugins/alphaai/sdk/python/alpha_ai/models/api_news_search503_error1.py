from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .extra import Extra, ExtraDict


class ApiNewsSearch503Error1(SdkBaseModel):
    message: Optional[str] = UNSET
    extra: Optional[Extra] = UNSET


class ApiNewsSearch503Error1Dict(TypedDict):
    message: NotRequired[str]
    extra: NotRequired[ExtraDict]
