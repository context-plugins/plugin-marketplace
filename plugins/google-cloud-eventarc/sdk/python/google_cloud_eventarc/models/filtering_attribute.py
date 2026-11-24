from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FilteringAttribute(SdkBaseModel):
    """A representation of the FilteringAttribute resource. Filtering attributes are per event type."""

    path_pattern_supported: Optional[bool] = Field(default=UNSET, alias="pathPatternSupported")
    """Output only. If true, the attribute accepts matching expressions in the Eventarc PathPattern format."""

    required: Optional[bool] = UNSET
    """Output only. If true, the triggers for this provider should always specify a filter on these attributes. Trigger
    creation will fail otherwise."""

    attribute: Optional[str] = UNSET
    """Output only. Attribute used for filtering the event type."""

    description: Optional[str] = UNSET
    """Output only. Description of the purpose of the attribute."""


class FilteringAttributeDict(TypedDict):
    path_pattern_supported: NotRequired[bool]
    required: NotRequired[bool]
    attribute: NotRequired[str]
    description: NotRequired[str]
