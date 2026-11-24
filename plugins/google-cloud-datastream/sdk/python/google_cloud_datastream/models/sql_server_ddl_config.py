from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SqlServerDdlConfig(SdkBaseModel):
    """DDL configuration for change tables."""

    auto_delete_old_capture_instance: Optional[bool] = Field(default=UNSET, alias="autoDeleteOldCaptureInstance")
    """Optional. If set to true, Datastream will automatically delete the old capture instance after creating a new one
    to support a DDL change. The default is false and means that the customer has to delete the old capture instance
    manually."""

    auto_create_new_capture_instance_on_ddl: Optional[bool] = Field(
        default=UNSET, alias="autoCreateNewCaptureInstanceOnDdl"
    )
    """Optional. If set to true, Datastream will automatically create a new capture instance when DDL is detected on a
    table.The customer will be responsible for deleting it so that the next set of DDLs can be handled. The default is
    false and it means that DDL's will not be handled ."""


class SqlServerDdlConfigDict(TypedDict):
    auto_delete_old_capture_instance: NotRequired[bool]
    auto_create_new_capture_instance_on_ddl: NotRequired[bool]
