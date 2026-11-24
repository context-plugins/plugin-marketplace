from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.import_status2 import ImportStatus2OrStr
from .enums.imported_resource_type import ImportedResourceTypeOrStr
from .enums.merge_strategy1 import MergeStrategy1OrStr


class ImportSummary(SdkBaseModel):
    import_id: Optional[str] = Field(default=UNSET, alias="importId")
    """The unique identifier that Amazon Lex assigned to the import."""

    imported_resource_id: Optional[str] = Field(default=UNSET, alias="importedResourceId")
    """The unique identifier that Amazon Lex assigned to the imported resource."""

    imported_resource_name: Optional[str] = Field(default=UNSET, alias="importedResourceName")
    """The name that you gave the imported resource."""

    import_status: Optional[ImportStatus2OrStr] = Field(default=UNSET, alias="importStatus")
    """The status of the resource. When the status is Completed the resource is ready to build."""

    merge_strategy: Optional[MergeStrategy1OrStr] = Field(default=UNSET, alias="mergeStrategy")
    """The strategy used to merge existing bot or bot locale definitions with the imported definition."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The date and time that the import was created."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """The date and time that the import was last updated."""

    imported_resource_type: Optional[ImportedResourceTypeOrStr] = Field(default=UNSET, alias="importedResourceType")
    """The type of resource that was imported."""


class ImportSummaryDict(TypedDict):
    import_id: NotRequired[str]
    imported_resource_id: NotRequired[str]
    imported_resource_name: NotRequired[str]
    import_status: NotRequired[ImportStatus2OrStr]
    merge_strategy: NotRequired[MergeStrategy1OrStr]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
    imported_resource_type: NotRequired[ImportedResourceTypeOrStr]
