from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .primary import Primary, PrimaryDict
from .secondary import Secondary, SecondaryDict


class Phone(SdkBaseModel):
    primary: Optional[Primary] = UNSET
    secondary: Optional[Secondary] = UNSET


class PhoneDict(TypedDict):
    primary: NotRequired[PrimaryDict]
    secondary: NotRequired[SecondaryDict]
