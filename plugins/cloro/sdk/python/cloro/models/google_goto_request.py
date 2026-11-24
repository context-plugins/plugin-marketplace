from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GoogleGotoRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    url: str
    """The Google redirect link to resolve, as an absolute URL. Must be a ``google.com`` or ``www.google.com`` link with
    a ``/goto`` or ``/url`` path — the form shipped as ``redirectLink`` beside every resolved link on Google Search,
    Google News, and AI Mode responses."""


class GoogleGotoRequestDict(TypedDict):
    url: str
