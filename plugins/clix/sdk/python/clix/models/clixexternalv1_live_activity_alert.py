from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Clixexternalv1LiveActivityAlert(SdkBaseModel):
    """Alert notification displayed when starting a Live Activity."""

    title: str
    """Title of the alert notification."""

    body: str
    """Body content of the alert notification."""


class Clixexternalv1LiveActivityAlertDict(TypedDict):
    title: str
    body: str
