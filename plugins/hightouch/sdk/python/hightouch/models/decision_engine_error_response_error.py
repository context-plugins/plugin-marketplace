from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DecisionEngineErrorResponseError(SdkBaseModel):
    message: str
    """Why the request failed."""


class DecisionEngineErrorResponseErrorDict(TypedDict):
    message: str
