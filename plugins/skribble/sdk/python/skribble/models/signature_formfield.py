from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .formfield_position import FormfieldPosition, FormfieldPositionDict


class SignatureFormfield(SdkBaseModel):
    name: Optional[str] = UNSET
    """Signature Formfield name"""

    signed: bool = False
    """Signature status of Formfield"""

    positions: Optional[list[FormfieldPosition]] = UNSET
    """List of positions where the Formfield is present"""


class SignatureFormfieldDict(TypedDict):
    name: NotRequired[str]
    signed: NotRequired[bool]
    positions: NotRequired[list[FormfieldPositionDict]]
