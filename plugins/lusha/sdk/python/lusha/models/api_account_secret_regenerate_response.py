from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiAccountSecretRegenerateResponse(SdkBaseModel):
    secret: str
    """Newly generated account webhook secret (store securely - only shown once)"""


class ApiAccountSecretRegenerateResponseDict(TypedDict):
    secret: str
