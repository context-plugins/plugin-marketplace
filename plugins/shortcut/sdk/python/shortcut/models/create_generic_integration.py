from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateGenericIntegration(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    webhook_url: str
    secret: Optional[str] = UNSET


class CreateGenericIntegrationDict(TypedDict):
    webhook_url: str
    secret: NotRequired[str]
