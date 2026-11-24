from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1ConfigValueOption(SdkBaseModel):
    """ConfigValueOption represents an option for a config variable of type enum or multi select."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. Display name of the option."""

    id: Optional[str] = UNSET
    """Required. Id of the option."""

    description: Optional[str] = UNSET
    """Optional. Description of the option."""


class GoogleCloudApihubV1ConfigValueOptionDict(TypedDict):
    display_name: NotRequired[str]
    id: NotRequired[str]
    description: NotRequired[str]
