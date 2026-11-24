from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateWebhookDto(SdkBaseModel):
    name: str
    """The name of the Webhook"""

    description: Optional[str] = UNSET
    """The description of the Webhook"""

    output_format: Optional[Any] = Field(default=UNSET, alias="outputFormat")
    feature: Optional[str] = Field(default=UNSET, alias="_feature")
    environments: Optional[list[str]] = Field(default=UNSET, alias="_environments")
    events: list[str]
    """The events that trigger the webhook"""

    url: str
    """The URL to call once the type is triggered"""


class CreateWebhookDtoDict(TypedDict):
    name: str
    description: NotRequired[str]
    output_format: NotRequired[Any]
    feature: NotRequired[str]
    environments: NotRequired[list[str]]
    events: list[str]
    url: str
