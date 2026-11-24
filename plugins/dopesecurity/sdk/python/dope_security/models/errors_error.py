from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .errors1 import Errors1, Errors1Dict


class ErrorsError(SdkBaseModel):
    """Error response containing a list of errors related to 400 and 500 http status"""

    errors: Optional[list[Errors1]] = UNSET


class ErrorsErrorDict(TypedDict):
    errors: NotRequired[list[Errors1Dict]]
