from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ContactError(SdkBaseModel):
    code: Optional[float] = UNSET
    """The code of the contact error"""

    name: Optional[str] = UNSET
    """The name of the contact error"""

    message: Optional[str] = UNSET
    """The message of the contact error"""


class ContactErrorDict(TypedDict):
    code: NotRequired[float]
    name: NotRequired[str]
    message: NotRequired[str]
