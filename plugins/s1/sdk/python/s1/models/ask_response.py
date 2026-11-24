from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .ask_result import AskResult, AskResultDict
from .error1 import Error1, Error1Dict
from .intent import Intent, IntentDict


class AskResponse(SdkBaseModel):
    query: str
    """The query as sent."""

    intent: Intent
    """How the request was interpreted and searched."""

    results: list[AskResult]
    """Relevant results from every engine, best first, with duplicates merged. May be empty."""

    errors: list[Error1]
    """Engines that failed while others completed. The request is still charged."""


class AskResponseDict(TypedDict):
    query: str
    intent: IntentDict
    results: list[AskResultDict]
    errors: list[Error1Dict]
