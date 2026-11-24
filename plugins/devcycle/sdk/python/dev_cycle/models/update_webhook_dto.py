from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateWebhookDto(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the Webhook"""

    description: Optional[str] = UNSET
    """The description of the Webhook"""

    feature: str = Field(alias="_feature")
    environments: list[str] = Field(alias="_environments")
    events: Optional[list[str]] = UNSET
    """The events that trigger the webhook"""

    url: Optional[str] = UNSET
    """The URL to call once the type is triggered"""

    output_format: Optional[Any] = Field(default=UNSET, alias="outputFormat")


class UpdateWebhookDtoDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    feature: str
    environments: list[str]
    events: NotRequired[list[str]]
    url: NotRequired[str]
    output_format: NotRequired[Any]
