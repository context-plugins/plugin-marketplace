from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1ConfigValueOption1(SdkBaseModel):
    """Optional. The config variable value in case of config variable of type enum."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. Display name of the option."""

    id: Optional[str] = UNSET
    """Required. Id of the option."""

    description: Optional[str] = UNSET
    """Optional. Description of the option."""


class GoogleCloudApihubV1ConfigValueOption1Dict(TypedDict):
    display_name: NotRequired[str]
    id: NotRequired[str]
    description: NotRequired[str]
