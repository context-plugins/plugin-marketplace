from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApplicabilityConditions(SdkBaseModel):
    additional_info: Optional[str] = Field(default=UNSET, alias="additionalInfo")
    """Display text providing more information on the condition."""

    additional_info_uri: Optional[str] = Field(default=UNSET, alias="additionalInfoUri")
    """Link to a web page with more information on this condition."""


class ApplicabilityConditionsDict(TypedDict):
    additional_info: NotRequired[str]
    additional_info_uri: NotRequired[str]
