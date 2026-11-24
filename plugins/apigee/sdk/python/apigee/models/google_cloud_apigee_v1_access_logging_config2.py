from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1AccessLoggingConfig2(SdkBaseModel):
    """Optional. Access logging configuration enables the access logging feature at the instance. Apigee customers can
    enable access logging to ship the access logs to their own project's cloud logging."""

    filter: Optional[str] = UNSET
    """Optional. Ship the access log entries that match the status_code defined in the filter. The status_code is the
    only expected/supported filter field. (Ex: status_code) The filter will parse it to the Common Expression Language
    semantics for expression evaluation to build the filter condition. (Ex: "filter": status_code >= 200 && status_code
    < 300 )"""

    enabled: Optional[bool] = UNSET
    """Optional. Boolean flag that specifies whether the customer access log feature is enabled."""


class GoogleCloudApigeeV1AccessLoggingConfig2Dict(TypedDict):
    filter: NotRequired[str]
    enabled: NotRequired[bool]
