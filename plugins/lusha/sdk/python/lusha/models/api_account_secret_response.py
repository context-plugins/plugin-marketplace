from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiAccountSecretResponse(SdkBaseModel):
    secret: str
    """Current account webhook secret"""


class ApiAccountSecretResponseDict(TypedDict):
    secret: str
