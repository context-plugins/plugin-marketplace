from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_aws_app_sync_operations_api import StatusAwsAppSyncOperationsApiOrStr


class StartSchemaCreationResponse(SdkBaseModel):
    status: Optional[StatusAwsAppSyncOperationsApiOrStr] = UNSET
    """The current state of the schema (PROCESSING, FAILED, SUCCESS, or NOT_APPLICABLE). When the schema is in the
    ACTIVE state, you can add data."""


class StartSchemaCreationResponseDict(TypedDict):
    status: NotRequired[StatusAwsAppSyncOperationsApiOrStr]
