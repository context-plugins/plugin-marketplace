from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr


class TestStatus(SdkBaseModel):
    """Final state of the test, including error details if necessary."""

    details: Optional[str] = UNSET
    """Error details if applicable."""

    status: Optional[StatusOrStr] = UNSET
    """Status of the test."""


class TestStatusDict(TypedDict):
    details: NotRequired[str]
    status: NotRequired[StatusOrStr]
