from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ComparisonMetadata(SdkBaseModel):
    """The metadata for a single comparison."""

    api_name: Optional[str] = Field(default=UNSET, alias="apiName")
    """This comparison's resource name. Useable in `Comparison <#Comparison>`__'s ``comparison`` field. For example,
    'comparisons/1234'."""

    description: Optional[str] = UNSET
    """This comparison's description."""

    ui_name: Optional[str] = Field(default=UNSET, alias="uiName")
    """This comparison's name within the Google Analytics user interface."""


class ComparisonMetadataDict(TypedDict):
    api_name: NotRequired[str]
    description: NotRequired[str]
    ui_name: NotRequired[str]
