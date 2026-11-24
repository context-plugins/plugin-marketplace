from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Selected(SdkBaseModel):
    """The account id this project uses for each provider, or null."""

    notion: str | None
    slack: str | None
    hubspot: str | None
    discord: str | None


class SelectedDict(TypedDict):
    notion: str | None
    slack: str | None
    hubspot: str | None
    discord: str | None
