from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .app_sync_runtime import AppSyncRuntime, AppSyncRuntimeDict
from .sync_config import SyncConfig, SyncConfigDict


class FunctionConfiguration(SdkBaseModel):
    function_id: Optional[str] = Field(default=UNSET, alias="functionId")
    """A unique ID representing the Function object."""

    function_arn: Optional[str] = Field(default=UNSET, alias="functionArn")
    """The Amazon Resource Name (ARN) of the Function object."""

    name: Optional[str] = UNSET
    """The name of the Function object."""

    description: Optional[str] = UNSET
    """The Function description."""

    data_source_name: Optional[str] = Field(default=UNSET, alias="dataSourceName")
    """The name of the DataSource."""

    request_mapping_template: Optional[str] = Field(default=UNSET, alias="requestMappingTemplate")
    """The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping
    template."""

    response_mapping_template: Optional[str] = Field(default=UNSET, alias="responseMappingTemplate")
    """The Function response mapping template."""

    function_version: Optional[str] = Field(default=UNSET, alias="functionVersion")
    """The version of the request mapping template. Currently, only the 2018-05-29 version of the template is
    supported."""

    sync_config: Optional[SyncConfig] = Field(default=UNSET, alias="syncConfig")
    max_batch_size: Optional[int] = Field(default=UNSET, alias="maxBatchSize")
    """The maximum batching size for a resolver."""

    runtime: Optional[AppSyncRuntime] = UNSET
    code: Optional[str] = UNSET
    """The function code that contains the request and response functions. When code is used, the runtime is required.
    The runtime value must be APPSYNC_JS."""


class FunctionConfigurationDict(TypedDict):
    function_id: NotRequired[str]
    function_arn: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    data_source_name: NotRequired[str]
    request_mapping_template: NotRequired[str]
    response_mapping_template: NotRequired[str]
    function_version: NotRequired[str]
    sync_config: NotRequired[SyncConfigDict]
    max_batch_size: NotRequired[int]
    runtime: NotRequired[AppSyncRuntimeDict]
    code: NotRequired[str]
