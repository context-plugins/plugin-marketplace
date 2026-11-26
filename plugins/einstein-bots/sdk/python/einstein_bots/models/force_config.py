from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ForceConfig(SdkBaseModel):
    """API configuration parameters."""

    model_config = ConfigDict(extra="forbid")

    endpoint: str
    """Instance URL of your Salesforce org. You can find the value in the **ForceConfig Endpoint** field of the **Add
    Connection** dialog when you add the connected app to the bot (see `Get Started with Einstein Bot API
    <https://developer.salesforce.com/docs/service/einstein-bot-api/guide/prerequisites.html>`__)."""


class ForceConfigDict(TypedDict):
    endpoint: str
