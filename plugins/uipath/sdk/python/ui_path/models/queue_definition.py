from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QueueDefinition(SdkBaseModel):
    """Definition of a transaction queue for distributing work items"""

    id: Optional[int] = Field(default=UNSET, alias="Id")
    """Unique integer identifier of the queue"""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """Display name of the queue"""

    description: Optional[str] = Field(default=UNSET, alias="Description")
    """Optional description of the queue's purpose"""

    max_number_of_retries: Optional[int] = Field(default=UNSET, alias="MaxNumberOfRetries")
    """Maximum number of automatic retries for failed transactions"""

    accept_automatically_retry: Optional[bool] = Field(default=UNSET, alias="AcceptAutomaticallyRetry")
    """Whether failed items are automatically requeued for retry"""

    enforce_unique_reference: Optional[bool] = Field(default=UNSET, alias="EnforceUniqueReference")
    """Whether each item must have a unique reference string"""

    organization_unit_id: Optional[int] = Field(default=UNSET, alias="OrganizationUnitId")
    """ID of the folder in which this queue resides"""


class QueueDefinitionDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    description: NotRequired[str]
    max_number_of_retries: NotRequired[int]
    accept_automatically_retry: NotRequired[bool]
    enforce_unique_reference: NotRequired[bool]
    organization_unit_id: NotRequired[int]
