from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status_amazon_simple_workflow_service_operations_api import (
    StatusAmazonSimpleWorkflowServiceOperationsApiOrStr,
)


class CloseStatusFilterAmazonSimpleWorkflowServiceOperationsApi(SdkBaseModel):
    status: StatusAmazonSimpleWorkflowServiceOperationsApiOrStr
    """The close status that must match the close status of an execution for it to meet the criteria of this filter."""


class CloseStatusFilterAmazonSimpleWorkflowServiceOperationsApiDict(TypedDict):
    status: StatusAmazonSimpleWorkflowServiceOperationsApiOrStr
