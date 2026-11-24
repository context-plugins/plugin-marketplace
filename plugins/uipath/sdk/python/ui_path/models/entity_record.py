from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class EntityRecord(SdkBaseModel):
    """A single entity record. The specific fields available depend on the entity schema configured in the tenant's Data
    Service. All records include the following system-managed fields."""

    id: Optional[str] = Field(default=UNSET, alias="Id")
    """Unique system-assigned identifier of the record"""

    created_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreatedOn")
    """ISO 8601 timestamp when the record was created"""

    created_by: Optional[str] = Field(default=UNSET, alias="CreatedBy")
    """Identifier of the user or process that created the record"""

    modified_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="ModifiedOn")
    """ISO 8601 timestamp of the last modification"""

    modified_by: Optional[str] = Field(default=UNSET, alias="ModifiedBy")
    """Identifier of the user or process that last modified the record"""


class EntityRecordDict(TypedDict):
    id: NotRequired[str]
    created_on: NotRequired[RFC3339DateTime]
    created_by: NotRequired[str]
    modified_on: NotRequired[RFC3339DateTime]
    modified_by: NotRequired[str]
