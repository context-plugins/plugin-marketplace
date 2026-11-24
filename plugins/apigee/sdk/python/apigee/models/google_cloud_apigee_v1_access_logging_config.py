from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1AccessLoggingConfig(SdkBaseModel):
    """Access logging configuration enables customers to ship the access logs from the tenant projects to their own
    project's cloud logging. The feature is at the instance level ad disabled by default. It can be enabled during
    CreateInstance or UpdateInstance."""

    filter: Optional[str] = UNSET
    """Optional. Ship the access log entries that match the status_code defined in the filter. The status_code is the
    only expected/supported filter field. (Ex: status_code) The filter will parse it to the Common Expression Language
    semantics for expression evaluation to build the filter condition. (Ex: "filter": status_code >= 200 && status_code
    < 300 )"""

    enabled: Optional[bool] = UNSET
    """Optional. Boolean flag that specifies whether the customer access log feature is enabled."""


class GoogleCloudApigeeV1AccessLoggingConfigDict(TypedDict):
    filter: NotRequired[str]
    enabled: NotRequired[bool]
