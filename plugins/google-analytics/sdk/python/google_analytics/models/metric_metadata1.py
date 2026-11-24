from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.blocked_reason import BlockedReasonOrStr
from .enums.type1 import Type1OrStr


class MetricMetadata1(SdkBaseModel):
    """The metric metadata contains the API name for this compatibility information. The metric metadata also contains
    other helpful information like the UI name and description."""

    type_: Optional[Type1OrStr] = Field(default=UNSET, alias="type")
    """The type of this metric."""

    category: Optional[str] = UNSET
    """The display name of the category that this metrics belongs to. Similar dimensions and metrics are categorized
    together."""

    ui_name: Optional[str] = Field(default=UNSET, alias="uiName")
    """This metric's name within the Google Analytics user interface. For example, ``Event count``."""

    expression: Optional[str] = UNSET
    """The mathematical expression for this derived metric. Can be used in `Metric <#Metric>`__'s ``expression`` field
    for equivalent reports. Most metrics are not expressions, and for non-expressions, this field is empty."""

    deprecated_api_names: Optional[list[str]] = Field(default=UNSET, alias="deprecatedApiNames")
    """Still usable but deprecated names for this metric. If populated, this metric is available by either ``apiName``
    or one of ``deprecatedApiNames`` for a period of time. After the deprecation period, the metric will be available
    only by ``apiName``."""

    blocked_reasons: Optional[list[BlockedReasonOrStr]] = Field(default=UNSET, alias="blockedReasons")
    """If reasons are specified, your access is blocked to this metric for this property. API requests from you to this
    property for this metric will succeed; however, the report will contain only zeros for this metric. API requests
    with metric filters on blocked metrics will fail. If reasons are empty, you have access to this metric. To learn
    more, see `Access and data-restriction management <https://support.google.com/analytics/answer/10851388>`__."""

    description: Optional[str] = UNSET
    """Description of how this metric is used and calculated."""

    custom_definition: Optional[bool] = Field(default=UNSET, alias="customDefinition")
    """True if the metric is a custom metric for this property."""

    api_name: Optional[str] = Field(default=UNSET, alias="apiName")
    """A metric name. Useable in `Metric <#Metric>`__'s ``name``. For example, ``eventCount``."""


class MetricMetadata1Dict(TypedDict):
    type_: NotRequired[Type1OrStr]
    category: NotRequired[str]
    ui_name: NotRequired[str]
    expression: NotRequired[str]
    deprecated_api_names: NotRequired[list[str]]
    blocked_reasons: NotRequired[list[BlockedReasonOrStr]]
    description: NotRequired[str]
    custom_definition: NotRequired[bool]
    api_name: NotRequired[str]
