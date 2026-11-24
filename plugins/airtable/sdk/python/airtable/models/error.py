from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error1 import Error1, Error1Dict


class Error(SdkBaseModel):
    """An error response from the Airtable API."""

    error: Optional[Error1] = UNSET


class ErrorDict(TypedDict):
    error: NotRequired[Error1Dict]
