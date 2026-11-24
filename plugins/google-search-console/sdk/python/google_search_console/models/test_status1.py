from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr


class TestStatus1(SdkBaseModel):
    """Final state of the test, can be either complete or an error."""

    details: Optional[str] = UNSET
    """Error details if applicable."""

    status: Optional[StatusOrStr] = UNSET
    """Status of the test."""


class TestStatus1Dict(TypedDict):
    details: NotRequired[str]
    status: NotRequired[StatusOrStr]
