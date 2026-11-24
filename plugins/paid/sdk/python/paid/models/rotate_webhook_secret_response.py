from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RotateWebhookSecretResponse(SdkBaseModel):
    signing_secret: str = Field(alias="signingSecret")
    """The newly minted org-scoped signing secret. Returned exactly once — store it now; subsequent reads will not
    return it."""


class RotateWebhookSecretResponseDict(TypedDict):
    signing_secret: str
