from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error_response import ErrorResponse, ErrorResponseDict


class TeamInvitationFailure(SdkBaseModel):
    invitation_id: str
    error: ErrorResponse
    """The uniform ``{error, source, detail}`` envelope returned for every 4xx/5xx."""


class TeamInvitationFailureDict(TypedDict):
    invitation_id: str
    error: ErrorResponseDict
