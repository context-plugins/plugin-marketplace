from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .app_sync_runtime import AppSyncRuntime, AppSyncRuntimeDict
from .sync_config import SyncConfig, SyncConfigDict


class V1ApisFunctionsRequest1(SdkBaseModel):
    name: str
    """The Function name."""

    description: Optional[str] = UNSET
    """The Function description."""

    data_source_name: str = Field(alias="dataSourceName")
    """The Function DataSource name."""

    request_mapping_template: Optional[str] = Field(default=UNSET, alias="requestMappingTemplate")
    """The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping
    template."""

    response_mapping_template: Optional[str] = Field(default=UNSET, alias="responseMappingTemplate")
    """The Function request mapping template."""

    function_version: Optional[str] = Field(default=UNSET, alias="functionVersion")
    """The version of the request mapping template. Currently, the supported value is 2018-05-29. Note that when using
    VTL and mapping templates, the functionVersion is required."""

    sync_config: Optional[SyncConfig] = Field(default=UNSET, alias="syncConfig")
    max_batch_size: Optional[int] = Field(default=UNSET, alias="maxBatchSize")
    """The maximum batching size for a resolver."""

    runtime: Optional[AppSyncRuntime] = UNSET
    code: Optional[str] = UNSET
    """The function code that contains the request and response functions. When code is used, the runtime is required.
    The runtime value must be APPSYNC_JS."""


class V1ApisFunctionsRequest1Dict(TypedDict):
    name: str
    description: NotRequired[str]
    data_source_name: str
    request_mapping_template: NotRequired[str]
    response_mapping_template: NotRequired[str]
    function_version: NotRequired[str]
    sync_config: NotRequired[SyncConfigDict]
    max_batch_size: NotRequired[int]
    runtime: NotRequired[AppSyncRuntimeDict]
    code: NotRequired[str]
