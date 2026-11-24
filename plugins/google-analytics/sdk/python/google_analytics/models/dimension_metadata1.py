from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DimensionMetadata1(SdkBaseModel):
    """The dimension metadata contains the API name for this compatibility information. The dimension metadata also
    contains other helpful information like the UI name and description."""

    category: Optional[str] = UNSET
    """The display name of the category that this dimension belongs to. Similar dimensions and metrics are categorized
    together."""

    deprecated_api_names: Optional[list[str]] = Field(default=UNSET, alias="deprecatedApiNames")
    """Still usable but deprecated names for this dimension. If populated, this dimension is available by either
    ``apiName`` or one of ``deprecatedApiNames`` for a period of time. After the deprecation period, the dimension will
    be available only by ``apiName``."""

    ui_name: Optional[str] = Field(default=UNSET, alias="uiName")
    """This dimension's name within the Google Analytics user interface. For example, ``Event name``."""

    custom_definition: Optional[bool] = Field(default=UNSET, alias="customDefinition")
    """True if the dimension is custom to this property. This includes user, event, & item scoped custom dimensions; to
    learn more about custom dimensions, see https://support.google.com/analytics/answer/14240153. This also include
    custom channel groups; to learn more about custom channel groups, see
    https://support.google.com/analytics/answer/13051316."""

    api_name: Optional[str] = Field(default=UNSET, alias="apiName")
    """This dimension's name. Useable in `Dimension <#Dimension>`__'s ``name``. For example, ``eventName``."""

    description: Optional[str] = UNSET
    """Description of how this dimension is used and calculated."""


class DimensionMetadata1Dict(TypedDict):
    category: NotRequired[str]
    deprecated_api_names: NotRequired[list[str]]
    ui_name: NotRequired[str]
    custom_definition: NotRequired[bool]
    api_name: NotRequired[str]
    description: NotRequired[str]
