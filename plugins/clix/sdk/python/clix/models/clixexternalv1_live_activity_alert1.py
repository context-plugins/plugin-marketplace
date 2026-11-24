from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Clixexternalv1LiveActivityAlert1(SdkBaseModel):
    """Push notification alert displayed when the Live Activity starts. If not provided, defaults to title: 'Live
    Activity', body: 'Started'."""

    title: str
    """Title of the alert notification."""

    body: str
    """Body content of the alert notification."""


class Clixexternalv1LiveActivityAlert1Dict(TypedDict):
    title: str
    body: str
