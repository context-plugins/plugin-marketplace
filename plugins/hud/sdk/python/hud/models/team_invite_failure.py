from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error_response import ErrorResponse, ErrorResponseDict


class TeamInviteFailure(SdkBaseModel):
    email: str
    error: ErrorResponse
    """The uniform ``{error, source, detail}`` envelope returned for every 4xx/5xx."""


class TeamInviteFailureDict(TypedDict):
    email: str
    error: ErrorResponseDict
