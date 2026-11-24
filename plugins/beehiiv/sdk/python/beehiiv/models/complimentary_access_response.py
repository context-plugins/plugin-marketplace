from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .complimentary_access import ComplimentaryAccess, ComplimentaryAccessDict


class ComplimentaryAccessResponse(SdkBaseModel):
    data: Optional[ComplimentaryAccess] = UNSET
    """The complimentary access object."""


class ComplimentaryAccessResponseDict(TypedDict):
    data: NotRequired[ComplimentaryAccessDict]
